import { getCommentsByTodayId } from "@/lib/server/comments";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const comments = await getCommentsByTodayId({ todayId: id });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]/comments: ", error);

    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
