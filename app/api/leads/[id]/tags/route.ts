import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const { tagId, tagName } = await request.json();
    let finalTagId = tagId;

    if (!finalTagId && tagName) {
      const existingTag = await prisma.tag.findUnique({ where: { name: tagName } });
      if (existingTag) {
        finalTagId = existingTag.id;
      } else {
        const newTag = await prisma.tag.create({ data: { name: tagName } });
        finalTagId = newTag.id;
      }
    }

    if (!finalTagId) {
      return NextResponse.json({ message: "Tag ID or name required" }, { status: 400 });
    }

    const leadTag = await prisma.leadTag.create({
      data: { leadId: params.id, tagId: finalTagId },
      include: { tag: true },
    });

    return NextResponse.json(leadTag);
  } catch (error: any) {
    if (error?.code === "P2002") {
      return NextResponse.json({ message: "Tag already added" }, { status: 400 });
    }
    console.error("Error adding tag:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { tagId } = await request.json();
    await prisma.leadTag.deleteMany({
      where: { leadId: params.id, tagId },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing tag:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}