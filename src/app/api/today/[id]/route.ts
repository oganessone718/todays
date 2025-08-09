import { deleteToday, getToday, updateToday } from "@/lib/server/today";
import { TmpTodayValues } from "@/store/useTmpTodayStore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const Today = await getToday({ id: id });

    if (!Today) {
      return NextResponse.json({ error: "Today not found" }, { status: 404 });
    }

    return NextResponse.json(Today, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/today/[Id]: ", error);

    return NextResponse.json(
      { error: "Failed to fetch today" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const todayId = id;
    const body = await req.json();
    const {
      userId,
      tmpTodayData,
    }: { userId: string; tmpTodayData: Partial<TmpTodayValues> } = body;

    const updatedToday = await updateToday({ userId, todayId, tmpTodayData });
    return NextResponse.json(updatedToday, { status: 200 });
  } catch (error) {
    console.error("PATCH /api/today/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to update today" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const todayId = await params.id;
    await deleteToday({ id: todayId });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/today/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete today" },
      { status: 500 }
    );
  }
}
