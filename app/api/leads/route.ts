import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyHCaptcha } from "@/lib/hcaptcha";
import { checkRateLimit } from "@/lib/rate-limit";
import { calculateLeadScore } from "@/lib/lead-scoring";
import { sendNotificationEmail, getVerificationEmailHtml, getDemoConfirmEmailHtml } from "@/lib/email";
import crypto from "crypto";

// This API route is no longer used. All lead data is sent directly to Supabase.
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return new Response(JSON.stringify({ message: "This route is unused. Leads are sent directly to Supabase." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
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