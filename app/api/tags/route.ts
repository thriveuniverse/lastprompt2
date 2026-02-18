import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      include: { _count: { select: { leads: true } } },
      orderBy: { name: "asc" },
    });
    return NextResponse.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, color } = await request.json();
    if (!name) {
      return NextResponse.json({ message: "Tag name required" }, { status: 400 });
    }
    const tag = await prisma.tag.create({
      data: { name, color: color || "#6366f1" },
    });
    return NextResponse.json(tag);
  } catch (error: any) {
    if (error?.code === "P2002") {
      return NextResponse.json({ message: "Tag already exists" }, { status: 400 });
    }
    console.error("Error creating tag:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}