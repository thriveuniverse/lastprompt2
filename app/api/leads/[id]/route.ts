import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    message: "Lead details functionality is not implemented yet.",
  });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({
    message: "Lead update functionality is not implemented yet.",
  });
}