import { getFriendsGroupByUserId } from "@/lib/server/friendsGroup";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const friendsGroupData = await getFriendsGroupByUserId(id);

    if (!friendsGroupData) {
      return NextResponse.json({ error: "friendsGroup not found" }, { status: 404 });
    }

    return NextResponse.json(friendsGroupData, { status: 200 });
  } catch (error) {
    console.error("Error in GET /api/user/[id]/friendsGroup: ", error);

    return NextResponse.json(
      { error: "Failed to fetch friendsGroupData" },
      { status: 500 }
    );
  }
}
