import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" }, { status: 400 });
    }

    const lead = await prisma.lead.findUnique({ where: { email } });

    if (!lead) {
      return NextResponse.json({ success: true, message: "Unsubscribed" }); // Don't reveal if email exists
    }

    await prisma.lead.update({
      where: { id: lead.id },
      data: { gdprConsent: false },
    });

    await prisma.consentLog.create({
      data: {
        leadId: lead.id,
        action: "withdrawn",
        consentType: "marketing",
      },
    });

    return NextResponse.json({ success: true, message: "You have been unsubscribed" });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ success: false, message: "Failed to unsubscribe" }, { status: 500 });
  }
}