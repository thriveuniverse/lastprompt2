import { NextResponse } from "next/server";
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const dynamic = "force-dynamic";

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { tagId, tagName } = await request.json();
    let finalTagId = tagId;

    if (!finalTagId && tagName) {
      const { data: existingTag } = await supabase
        .from('tags')
        .select('id')
        .eq('name', tagName)
        .single();

      if (existingTag) {
        finalTagId = existingTag.id;
      } else {
        const { data: newTag, error: tagError } = await supabase
          .from('tags')
          .insert({ name: tagName, created_at: new Date().toISOString() })
          .select()
          .single();
        if (tagError) throw tagError;
        finalTagId = newTag.id;
      }
    }

    if (!finalTagId) {
      return NextResponse.json({ message: "Tag ID or name required" }, { status: 400 });
    }

    const { data: leadTag, error } = await supabase
      .from('lead_tags')
      .insert({ lead_id: params.id, tag_id: finalTagId, created_at: new Date().toISOString() })
      .select('*, tag:tags(*)')
      .single();

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ message: "Tag already added" }, { status: 400 });
      }
      throw error;
    }

    return NextResponse.json(leadTag);
  } catch (error) {
    console.error("Error adding tag:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  try {
    const { tagId } = await request.json();
    const { error } = await supabase
      .from('lead_tags')
      .delete()
      .eq('lead_id', params.id)
      .eq('tag_id', tagId);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error removing tag:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
