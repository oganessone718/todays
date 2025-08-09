import { createTagsByNames, getTagsByUserId } from "@/lib/server/tag";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const tagsData = await getTagsByUserId(id);

    if (!tagsData) {
      return NextResponse.json({ error: "Tag not found" }, { status: 404 });
    }

    return NextResponse.json(tagsData, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/user/[id]/tag: ", error);

    return NextResponse.json(
      { error: "Failed to fetch tags" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await request.json();
  const tagNames: string[] = body.tagNames;

  try {
    const createdTagsData = await createTagsByNames(id, tagNames);
    return NextResponse.json(createdTagsData, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/user/[id]/tag: ", error);

    return NextResponse.json(
      { error: "Failed to create tags" },
      { status: 500 }
    );
  }
}
