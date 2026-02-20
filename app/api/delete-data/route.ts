import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" }, { status: 400 });
    }

    // Check if request already exists
    const existing = await prisma.dataDeletionRequest.findFirst({
      where: { email, status: { in: ["pending", "processing"] } },
    });

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "A deletion request for this email is already being processed.",
      });
    }

    // Create deletion request
    await prisma.dataDeletionRequest.create({
      data: { email, status: "pending" },
    });

    return NextResponse.json({
      success: true,
      message: "Your deletion request has been submitted. We will process it within 30 days and notify you once complete.",
    });
  } catch (error) {
    console.error("Delete data request error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit request" }, { status: 500 });
  }
}