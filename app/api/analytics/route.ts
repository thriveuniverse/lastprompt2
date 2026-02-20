import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [totalLeads, verifiedLeads, segmentBreakdown, interestBreakdown, statusBreakdown, topSources, recentLeads] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { verified: true } }),
      prisma.lead.groupBy({ by: ["segment"], _count: true }),
      prisma.lead.groupBy({ by: ["interest"], _count: true }),
      prisma.lead.groupBy({ by: ["status"], _count: true }),
      prisma.lead.groupBy({
        by: ["source"],
        _count: true,
        where: { source: { not: null } },
        orderBy: { _count: { source: "desc" } },
        take: 10,
      }),
      prisma.lead.findMany({
        take: 10,
        orderBy: { createdAt: "desc" },
        select: { id: true, name: true, email: true, segment: true, createdAt: true },
      }),
    ]);

    const conversionRate = totalLeads > 0 ? ((verifiedLeads / totalLeads) * 100).toFixed(1) : "0";

    // Get leads by day for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const leadsByDay = await prisma.lead.groupBy({
      by: ["createdAt"],
      _count: true,
      where: { createdAt: { gte: thirtyDaysAgo } },
    });

    return NextResponse.json({
      totalLeads,
      verifiedLeads,
      conversionRate,
      segmentBreakdown: segmentBreakdown.map((s: any) => ({ segment: s.segment, count: s._count })),
      interestBreakdown: interestBreakdown.map((i: any) => ({ interest: i.interest, count: i._count })),
      statusBreakdown: statusBreakdown.map((s: any) => ({ status: s.status, count: s._count })),
      topSources: topSources.map((s: any) => ({ source: s.source || "Direct", count: s._count })),
      recentLeads,
      leadsByDay,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}