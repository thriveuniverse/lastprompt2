import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { checkRateLimit } from "@/lib/rate-limit";
import { calculateLeadScore } from "@/lib/lead-scoring";
import { sendNotificationEmail, getVerificationEmailHtml, getDemoConfirmEmailHtml } from "@/lib/email";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, segment, interest, companyName, jobTitle, gdprConsent, isDemoRequest, source, medium, campaign, term, content, referrer } = body;

    // Validation
    if (!name || !email || !segment || !interest) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (!gdprConsent) {
      return NextResponse.json({ message: "GDPR consent required" }, { status: 400 });
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const allowed = await checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
    }

    // Check existing lead
    const existing = await prisma.lead.findUnique({ where: { email } });
    if (existing) {
      if (existing.verified) {
        return NextResponse.json({ message: "Email already registered" }, { status: 400 });
      }
      // Resend verification
      const verifyToken = crypto.randomBytes(32).toString("hex");
      await prisma.lead.update({
        where: { id: existing.id },
        data: { verifyToken },
      });
      const verifyUrl = `${process.env.NEXTAUTH_URL}/verify?token=${verifyToken}`;
      await sendNotificationEmail({
        notificationId: process.env.NOTIF_ID_EMAIL_VERIFICATION || "",
        recipientEmail: email,
        subject: "Verify Your Email - Last Prompt",
        body: getVerificationEmailHtml(name, verifyUrl),
      });
      return NextResponse.json({ success: true, message: "Verification email resent" });
    }

    // Calculate score
    const score = await calculateLeadScore({ segment, interest, companyName, jobTitle, source });

    // Create lead
    const verifyToken = crypto.randomBytes(32).toString("hex");
    const lead = await prisma.lead.create({
      data: {
        email,
        name,
        segment,
        interest,
        companyName: companyName || null,
        jobTitle: jobTitle || null,
        source: source || null,
        medium: medium || null,
        campaign: campaign || null,
        term: term || null,
        content: content || null,
        referrer: referrer || null,
        gdprConsent: true,
        consentDate: new Date(),
        score,
        verifyToken,
        status: isDemoRequest ? "new" : "new",
      },
    });

    // Log consent
    await prisma.consentLog.create({
      data: {
        leadId: lead.id,
        action: "granted",
        consentType: "marketing",
        ipAddress: ip,
        userAgent: request.headers.get("user-agent") || null,
      },
    });

    // Track event
    await prisma.event.create({
      data: {
        leadId: lead.id,
        type: "form_submit",
        action: isDemoRequest ? "demo_request" : "waitlist_signup",
        page: referrer || "unknown",
      },
    });

    // Send verification email
    const verifyUrl = `${process.env.NEXTAUTH_URL}/verify?token=${verifyToken}`;
    await sendNotificationEmail({
      notificationId: process.env.NOTIF_ID_EMAIL_VERIFICATION || "",
      recipientEmail: email,
      subject: "Verify Your Email - Last Prompt",
      body: getVerificationEmailHtml(name, verifyUrl),
    });

    // Log email
    await prisma.emailLog.create({
      data: {
        leadId: lead.id,
        emailType: "verification",
        subject: "Verify Your Email - Last Prompt",
        status: "sent",
      },
    });

    // Admin notification for demo requests
    if (isDemoRequest) {
      await sendNotificationEmail({
        notificationId: process.env.NOTIF_ID_NEW_DEMO_REQUEST_ALERT || "",
        recipientEmail: "littlehousefrance@gmail.com",
        subject: `New Demo Request: ${name} from ${companyName || "Unknown Company"}`,
        body: `<div style="font-family: Arial; padding: 20px;"><h2>New Demo Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${companyName || "N/A"}</p><p><strong>Job Title:</strong> ${jobTitle || "N/A"}</p><p><strong>Interest:</strong> ${interest}</p><p><strong>Score:</strong> ${score}</p></div>`,
      });
    }

    return NextResponse.json({ success: true, message: "Please check your email to verify" });
  } catch (error: any) {
    console.error("Lead creation error:", error);
    return NextResponse.json({ message: error?.message || "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const segment = searchParams.get("segment");
    const status = searchParams.get("status");
    const interest = searchParams.get("interest");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    const where: any = {};
    if (segment) where.segment = segment;
    if (status) where.status = status;
    if (interest) where.interest = interest;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { companyName: { contains: search, mode: "insensitive" } },
      ];
    }
    if (tag) {
      where.tags = { some: { tag: { name: tag } } };
    }

    const leads = await prisma.lead.findMany({
      where,
      include: { tags: { include: { tag: true } } },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}