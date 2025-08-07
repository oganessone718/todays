import { getMentionsByTodayId } from "@/lib/server/today";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const reactionsData = await getMentionsByTodayId({ todayId: id });

    return NextResponse.json(reactionsData, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]/reactions: ", error);

    return NextResponse.json(
      { error: "Failed to fetch reactions" },
      { status: 500 }
    );
  }
}
