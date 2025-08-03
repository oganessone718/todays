import { getFriendsByUserId } from "@/lib/server/friendship";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const friendsData = await getFriendsByUserId({
      userId: id,
    });

    if (!friendsData) {
      return NextResponse.json({ error: "Tag not found" }, { status: 404 });
    }

    return NextResponse.json(friendsData, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch friends" },
      { status: 500 }
    );
  }
}
