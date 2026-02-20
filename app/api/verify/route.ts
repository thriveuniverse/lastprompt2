import { NextResponse } from "next/server";
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { sendNotificationEmail, getWelcomeEmailHtml } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 400 });
    }

    const { data: lead, error: findError } = await supabase
      .from('leads')
      .select('*')
      .eq('verify_token', token)
      .single();

    if (findError || !lead) {
      return NextResponse.json({ success: false, message: "Invalid or expired verification link" }, { status: 400 });
    }

    if (lead.verified) {
      return NextResponse.json({ success: true, message: "Email already verified" });
    }

    await supabase
      .from('leads')
      .update({ verified: true, verify_token: null })
      .eq('id', lead.id);

    // Track verification event
    await supabase.from('events').insert({
      lead_id: lead.id,
      type: "email_click",
      action: "verification_complete",
      created_at: new Date().toISOString(),
    });

    // Send welcome email based on segment
    const notificationId = lead.segment === "b2b" ? process.env.NOTIF_ID_WELCOME_EMAIL_B2B : process.env.NOTIF_ID_WELCOME_EMAIL_PLAYER;
    const subject = lead.segment === "b2b" ? "Welcome to Last Prompt for Business" : "Welcome to the Last Prompt Community";

    await sendNotificationEmail({
      notificationId: notificationId || "",
      recipientEmail: lead.email,
      subject,
      body: getWelcomeEmailHtml(lead.name, lead.segment),
    });

    // Log welcome email
    await supabase.from('email_logs').insert({
      lead_id: lead.id,
      email_type: lead.segment === "b2b" ? "welcome_b2b" : "welcome_player",
      subject,
      status: "sent",
      created_at: new Date().toISOString(),
    });

    // Admin notification
    await sendNotificationEmail({
      notificationId: process.env.NOTIF_ID_NEW_LEAD_ALERT || "",
      recipientEmail: "littlehousefrance@gmail.com",
      subject: `New Verified Lead: ${lead.name} (${lead.segment})`,
      body: `<div style="font-family: Arial; padding: 20px;"><h2>New Verified Lead</h2><p><strong>Name:</strong> ${lead.name}</p><p><strong>Email:</strong> ${lead.email}</p><p><strong>Segment:</strong> ${lead.segment}</p><p><strong>Interest:</strong> ${lead.interest}</p><p><strong>Score:</strong> ${lead.score}</p></div>`,
    });

    return NextResponse.json({ success: true, message: "Email verified successfully" });
  } catch (error) {
    console.error("Verification error:", error);
    return NextResponse.json({ success: false, message: "Verification failed" }, { status: 500 });
  }
}
