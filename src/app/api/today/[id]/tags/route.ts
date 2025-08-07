
import { getTagsByTodayId } from "@/lib/server/today";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const tagsData = await getTagsByTodayId({ todayId: id });
    return NextResponse.json(tagsData, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]/tags: ", error);

    return NextResponse.json(
      { error: "Failed to fetch tags" },
      { status: 500 }
    );
  }
}
