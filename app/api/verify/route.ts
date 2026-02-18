import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendNotificationEmail, getWelcomeEmailHtml } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 400 });
    }

    const lead = await prisma.lead.findFirst({ where: { verifyToken: token } });

    if (!lead) {
      return NextResponse.json({ success: false, message: "Invalid or expired verification link" }, { status: 400 });
    }

    if (lead.verified) {
      return NextResponse.json({ success: true, message: "Email already verified" });
    }

    await prisma.lead.update({
      where: { id: lead.id },
      data: { verified: true, verifyToken: null },
    });

    // Track verification event
    await prisma.event.create({
      data: {
        leadId: lead.id,
        type: "email_click",
        action: "verification_complete",
      },
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
    await prisma.emailLog.create({
      data: {
        leadId: lead.id,
        emailType: lead.segment === "b2b" ? "welcome_b2b" : "welcome_player",
        subject,
        status: "sent",
      },
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