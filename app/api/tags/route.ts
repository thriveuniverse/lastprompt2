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
    const { data: tags, error } = await supabase
      .from('tags')
      .select('*, leads:lead_tags(count)')
      .order('name', { ascending: true });

    if (error) throw error;
    return NextResponse.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { name, color } = await request.json();
    if (!name) {
      return NextResponse.json({ message: "Tag name required" }, { status: 400 });
    }

    const { data: tag, error } = await supabase
      .from('tags')
      .insert({ name, color: color || "#6366f1", created_at: new Date().toISOString() })
      .select()
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "Tag already exists" }, { status: 400 });
      }
      throw error;
    }

    return NextResponse.json(tag);
  } catch (error) {
    console.error("Error creating tag:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
