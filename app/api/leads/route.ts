import { NextResponse } from "next/server";
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { checkRateLimit } from "@/lib/rate-limit"; // now Supabase version
import { calculateLeadScore } from "@/lib/lead-scoring";
import { sendNotificationEmail, getVerificationEmailHtml, getDemoConfirmEmailHtml } from "@/lib/email";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const body = await request.json();
    const { name, email, segment, interest, companyName, jobTitle, gdprConsent, isDemoRequest, source, medium, campaign, term, content, referrer } = body;

    // Base URL detection for emails
    const host = request.headers.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    const baseUrl = process.env.NEXTAUTH_URL || `${protocol}://${host}`;

    // Validation (keep as is)
    if (!name || !email || !segment || !interest) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (!gdprConsent) {
      return NextResponse.json({ message: "GDPR consent required" }, { status: 400 });
    }

    // Rate limiting (keep, now Supabase)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const allowed = await checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
    }

    // Check existing lead
    const { data: existing, error: findError } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single();

    if (findError && findError.code !== 'PGRST116') throw findError;

    if (existing) {
      if (existing.verified) {
        return NextResponse.json({ message: "Email already registered" }, { status: 400 });
      }
      // Resend verification
      const verifyToken = crypto.randomBytes(32).toString("hex");
      await supabase
        .from('leads')
        .update({ verify_token: verifyToken })
        .eq('id', existing.id);

      const verifyUrl = `${baseUrl}/verify?token=${verifyToken}`;
      await sendNotificationEmail({
        recipientEmail: email,
        subject: "Verify Your Email - Last Prompt",
        body: getVerificationEmailHtml(name, verifyUrl),
      });
      return NextResponse.json({ success: true, message: "Verification email resent" });
    }

    // Calculate score (keep as is)
    const score = await calculateLeadScore({ segment, interest, companyName, jobTitle, source });

    // Create lead
    const verifyToken = crypto.randomBytes(32).toString("hex");
    const { data: lead, error: insertError } = await supabase
      .from('leads')
      .insert({
        email,
        name,
        segment,
        interest,
        company_name: companyName || null,
        job_title: jobTitle || null,
        source: source || null,
        medium: medium || null,
        campaign: campaign || null,
        term: term || null,
        content: content || null,
        referrer: referrer || null,
        gdpr_consent: true,
        consent_date: new Date().toISOString(),
        score,
        verify_token: verifyToken,
        status: isDemoRequest ? "new" : "new",
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) throw insertError;

    // Log consent
    await supabase.from('consent_logs').insert({
      lead_id: lead.id,
      action: "granted",
      consent_type: "marketing",
      ip_address: ip,
      user_agent: request.headers.get("user-agent") || null,
      created_at: new Date().toISOString(),
    });

    // Track event
    await supabase.from('events').insert({
      lead_id: lead.id,
      type: "form_submit",
      action: isDemoRequest ? "demo_request" : "waitlist_signup",
      page: referrer || "unknown",
      created_at: new Date().toISOString(),
    });

    // Send verification email (keep as is)
    console.log(`[Leads] Starting email verification process for ${email}`);

    const verifyUrl = `${baseUrl}/verify?token=${verifyToken}`;
    console.log(`[Leads] Generated Verify URL: ${verifyUrl} (Base: ${baseUrl})`);

    try {
      const emailResult = await sendNotificationEmail({
        recipientEmail: email,
        subject: "Verify Your Email - Last Prompt",
        body: getVerificationEmailHtml(name, verifyUrl),
      });
      console.log(`[Leads] sendNotificationEmail result:`, emailResult);
    } catch (e) {
      console.error(`[Leads] CRITICAL: sendNotificationEmail threw an error:`, e);
    }

    // Log email
    await supabase.from('email_logs').insert({
      lead_id: lead.id,
      email_type: "verification",
      subject: "Verify Your Email - Last Prompt",
      status: "sent",
      created_at: new Date().toISOString(),
    });

    // Admin notification for demo requests (keep as is)
    if (isDemoRequest) {
      console.log(`[Leads] Sending Admin Demo Notification...`);
      await sendNotificationEmail({
        recipientEmail: "littlehousefrance@gmail.com",
        subject: `New Demo Request: ${name} from ${companyName || "Unknown Company"}`,
        body: getDemoConfirmEmailHtml(name, companyName),
      });
    }

    return NextResponse.json({ success: true, message: "Please check your email to verify" });
  } catch (error: any) {
    console.error("[Leads] CRITICAL ERROR IN POST:", error);
    return NextResponse.json({ message: error?.message || "Internal server error" }, { status: 500 });
  }
}

// GET (keep, rewritten with Supabase)
export async function GET(request: Request) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { searchParams } = new URL(request.url);
    const segment = searchParams.get("segment");
    const status = searchParams.get("status");
    const interest = searchParams.get("interest");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    let query = supabase.from('leads').select('*, tags:lead_tags(*, tag:tags(*))').order('created_at', { ascending: false });

    if (segment) query = query.eq('segment', segment);
    if (status) query = query.eq('status', status);
    if (interest) query = query.eq('interest', interest);
    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,company_name.ilike.%${search}%`);
    }
    if (tag) {
      query = query.eq('tags.tag.name', tag);
    }

    const { data: leads, error } = await query;

    if (error) throw error;

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}