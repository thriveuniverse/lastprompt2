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

    const { data: lead } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single();

    if (!lead) {
      return NextResponse.json({ success: true, message: "Unsubscribed" }); // Don't reveal if email exists
    }

    await supabase
      .from('leads')
      .update({ gdpr_consent: false })
      .eq('id', lead.id);

    await supabase.from('consent_logs').insert({
      lead_id: lead.id,
      action: "withdrawn",
      consent_type: "marketing",
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "You have been unsubscribed" });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ success: false, message: "Failed to unsubscribe" }, { status: 500 });
  }
}
