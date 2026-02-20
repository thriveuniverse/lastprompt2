// lib/rate-limit.ts (new version – no Prisma)
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;
const TABLE = 'rate_limits'; // create this table in Supabase

export async function checkRateLimit(identifier: string, action: string = "form_submit"): Promise<boolean> {
  const supabase = createServerComponentClient({ cookies });

  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW).toISOString();

  // Find existing record
  const { data: existing, error: findError } = await supabase
    .from(TABLE)
    .select('*')
    .eq('identifier', identifier)
    .eq('action', action)
    .single();

  if (findError && findError.code !== 'PGRST116') { // not found is ok
    console.error('Rate limit check error:', findError);
    return true; // fail open if DB issue
  }

  if (!existing) {
    // Create new
    await supabase.from(TABLE).insert({
      identifier,
      action,
      count: 1,
      window_start: new Date().toISOString(),
    });
    return true;
  }

  if (new Date(existing.window_start) < new Date(windowStart)) {
    // Reset window
    await supabase
      .from(TABLE)
      .update({ count: 1, window_start: new Date().toISOString() })
      .eq('id', existing.id);
    return true;
  }

  if (existing.count >= MAX_REQUESTS) {
    return false;
  }

  // Increment
  await supabase
    .from(TABLE)
    .update({ count: existing.count + 1 })
    .eq('id', existing.id);

  return true;
}