import { NextResponse } from "next/server";
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*, tags:lead_tags(*, tag:tags(*))')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const headers = ["Name", "Email", "Segment", "Interest", "Company", "Job Title", "Status", "Score", "Verified", "Source", "Medium", "Campaign", "Tags", "Created At"];

    const rows = (leads || []).map((lead: any) => [
      lead.name,
      lead.email,
      lead.segment,
      lead.interest,
      lead.company_name || "",
      lead.job_title || "",
      lead.status,
      String(lead.score || 0),
      lead.verified ? "Yes" : "No",
      lead.source || "",
      lead.medium || "",
      lead.campaign || "",
      lead.tags?.map((t: any) => t?.tag?.name).join("; ") || "",
      lead.created_at,
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((row: any) =>
        row.map((cell: any) => `"${String(cell || "").replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Error exporting leads:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
