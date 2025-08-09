import { createToday } from "@/lib/server/today";
import { TmpTodayValues } from "@/store/useTmpTodayStore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    userId,
    tmpTodayData,
  }: { userId: string; tmpTodayData: TmpTodayValues } = body;

  if (
    !tmpTodayData.title ||
    !tmpTodayData.emojiUrl ||
    !tmpTodayData.content ||
    !tmpTodayData.date ||
    !userId
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const today = await createToday({ userId, tmpTodayData });

    return NextResponse.json(today, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/today: ", error);

    return NextResponse.json(
      { error: "Failed to create today" },
      { status: 500 }
    );
  }
}
