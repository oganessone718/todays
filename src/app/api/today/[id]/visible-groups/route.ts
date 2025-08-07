import { getVisibleGroupsByTodayId } from "@/lib/server/today";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const visibleGroups = await getVisibleGroupsByTodayId({ todayId: id });
    return NextResponse.json(visibleGroups, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]/visible-groups: ", error);

    return NextResponse.json(
      { error: "Failed to fetch visible groups" },
      { status: 500 }
    );
  }
}
