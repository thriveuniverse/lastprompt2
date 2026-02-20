import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    message: "Lead export functionality is not implemented yet.",
  });
}