import { NextResponse } from "next/server";
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email required" }, { status: 400 });
    }

    // Check if request already exists
    const { data: existing } = await supabase
      .from('data_deletion_requests')
      .select('*')
      .eq('email', email)
      .in('status', ['pending', 'processing'])
      .single();

    if (existing) {
      return NextResponse.json({
        success: true,
        message: "A deletion request for this email is already being processed.",
      });
    }

    // Create deletion request
    await supabase.from('data_deletion_requests').insert({
      email,
      status: "pending",
      created_at: new Date().toISOString(),
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
