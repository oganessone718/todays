import { getVisiblePeopleByTodayId } from "@/lib/server/today";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const visiblePeople = await getVisiblePeopleByTodayId({ todayId: id });
    return NextResponse.json(visiblePeople, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]/visible-people: ", error);

    return NextResponse.json(
      { error: "Failed to fetch visible groups" },
      { status: 500 }
    );
  }
}
