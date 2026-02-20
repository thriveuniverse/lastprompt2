import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    message: "Lead tags functionality is not implemented yet.",
  });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    message: "Lead tags delete functionality is not implemented yet.",
  });
}