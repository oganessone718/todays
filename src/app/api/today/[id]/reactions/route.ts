import { getReactionsByTodayId } from "@/lib/server/today";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const mentionsData = await getReactionsByTodayId({ todayId: id });

    return NextResponse.json(mentionsData, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]/mentions: ", error);

    return NextResponse.json(
      { error: "Failed to fetch mentions" },
      { status: 500 }
    );
  }
}
