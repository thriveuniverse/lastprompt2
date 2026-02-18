import { prisma } from "@/lib/db";

export async function calculateLeadScore(lead: {
  segment: string;
  interest: string;
  companyName?: string | null;
  jobTitle?: string | null;
  source?: string | null;
}): Promise<number> {
  let score = 0;

  // Base score for segment
  if (lead.segment === "b2b") score += 30;
  else score += 10;

  // Interest multiplier
  if (lead.interest === "both") score += 15;
  else score += 10;

  // B2B enrichment
  if (lead.companyName) score += 20;
  if (lead.jobTitle) {
    const title = lead.jobTitle.toLowerCase();
    if (title.includes("ceo") || title.includes("founder") || title.includes("director")) score += 25;
    else if (title.includes("manager") || title.includes("lead") || title.includes("head")) score += 15;
    else score += 10;
  }

  // Source bonus
  if (lead.source === "linkedin") score += 10;
  if (lead.source === "referral") score += 15;

  // Load custom rules
  const customRules = await prisma.leadScore.findMany({ where: { isActive: true } });
  for (const rule of customRules) {
    try {
      const condition = JSON.parse(rule.condition);
      const fieldValue = (lead as any)[condition.field];
      if (fieldValue && fieldValue.toLowerCase().includes(condition.value.toLowerCase())) {
        score += rule.points;
      }
    } catch (e) {
      // Skip invalid rules
    }
  }

  return Math.min(score, 100);
}