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
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const [
      { count: totalLeads },
      { count: verifiedLeads },
      { data: allLeads },
      { data: recentLeads },
    ] = await Promise.all([
      supabase.from('leads').select('*', { count: 'exact', head: true }),
      supabase.from('leads').select('*', { count: 'exact', head: true }).eq('verified', true),
      supabase.from('leads').select('segment, interest, status, source, created_at'),
      supabase.from('leads').select('id, name, email, segment, created_at').order('created_at', { ascending: false }).limit(10),
    ]);

    const total = totalLeads || 0;
    const verified = verifiedLeads || 0;
    const conversionRate = total > 0 ? ((verified / total) * 100).toFixed(1) : "0";

    // Build breakdowns from allLeads
    const leads = allLeads || [];

    const segmentMap: Record<string, number> = {};
    const interestMap: Record<string, number> = {};
    const statusMap: Record<string, number> = {};
    const sourceMap: Record<string, number> = {};
    const dayMap: Record<string, number> = {};

    for (const lead of leads) {
      if (lead.segment) segmentMap[lead.segment] = (segmentMap[lead.segment] || 0) + 1;
      if (lead.interest) interestMap[lead.interest] = (interestMap[lead.interest] || 0) + 1;
      if (lead.status) statusMap[lead.status] = (statusMap[lead.status] || 0) + 1;
      if (lead.source) sourceMap[lead.source] = (sourceMap[lead.source] || 0) + 1;

      const day = lead.created_at?.split('T')[0];
      if (day && new Date(lead.created_at) >= thirtyDaysAgo) {
        dayMap[day] = (dayMap[day] || 0) + 1;
      }
    }

    return NextResponse.json({
      totalLeads: total,
      verifiedLeads: verified,
      conversionRate,
      segmentBreakdown: Object.entries(segmentMap).map(([segment, count]) => ({ segment, count })),
      interestBreakdown: Object.entries(interestMap).map(([interest, count]) => ({ interest, count })),
      statusBreakdown: Object.entries(statusMap).map(([status, count]) => ({ status, count })),
      topSources: Object.entries(sourceMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([source, count]) => ({ source: source || "Direct", count })),
      recentLeads: recentLeads || [],
      leadsByDay: Object.entries(dayMap).map(([date, count]) => ({ date, count })),
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
