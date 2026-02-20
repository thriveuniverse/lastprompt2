import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

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

  // Load custom rules from Supabase
  try {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { cookies: { get: (name) => cookieStore.get(name)?.value } }
    );

    const { data: customRules } = await supabase
      .from('lead_scores')
      .select('*')
      .eq('is_active', true);

    if (customRules) {
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
    }
  } catch (e) {
    // Fail open — custom rules are optional
  }

  return Math.min(score, 100);
}
