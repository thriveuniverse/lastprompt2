import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lhsbbcwdvrhxqemewwhh.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_X68ZOX5Ab3nIAQbmYv5J3w_HN3q6W9x';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
