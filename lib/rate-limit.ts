import { prisma } from "@/lib/db";

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

export async function checkRateLimit(identifier: string, action: string = "form_submit"): Promise<boolean> {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW);

  const existing = await prisma.rateLimit.findUnique({
    where: { identifier_action: { identifier, action } },
  });

  if (!existing) {
    await prisma.rateLimit.create({
      data: { identifier, action, count: 1, windowStart: new Date() },
    });
    return true;
  }

  if (existing.windowStart < windowStart) {
    await prisma.rateLimit.update({
      where: { id: existing.id },
      data: { count: 1, windowStart: new Date() },
    });
    return true;
  }

  if (existing.count >= MAX_REQUESTS) {
    return false;
  }

  await prisma.rateLimit.update({
    where: { id: existing.id },
    data: { count: existing.count + 1 },
  });

  return true;
}