import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      include: { tags: { include: { tag: true } } },
      orderBy: { createdAt: "desc" },
    });

    const headers = ["Name", "Email", "Segment", "Interest", "Company", "Job Title", "Status", "Score", "Verified", "Source", "Medium", "Campaign", "Tags", "Created At"];

    const rows = leads.map((lead: any) => [
      lead.name,
      lead.email,
      lead.segment,
      lead.interest,
      lead.companyName || "",
      lead.jobTitle || "",
      lead.status,
      lead.score.toString(),
      lead.verified ? "Yes" : "No",
      lead.source || "",
      lead.medium || "",
      lead.campaign || "",
      lead.tags?.map((t: any) => t?.tag?.name).join("; ") || "",
      lead.createdAt.toISOString(),
    ]);

    const csv = [headers.join(","), ...rows.map((row: any) => row.map((cell: any) => `"${cell?.replace(/"/g, '""') || ""}"`).join(","))].join("\n");

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