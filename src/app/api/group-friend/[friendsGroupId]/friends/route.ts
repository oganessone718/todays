import { getFriendsByGroupId } from "@/lib/server/groupFriend";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { friendsGroupId: string } }
) {
  const { friendsGroupId } = await params;

  const { searchParams } = new URL(request.url);
  try {
    const groupFriendsData = await getFriendsByGroupId({
      friendsGroupId: friendsGroupId,
    });

    if (!groupFriendsData) {
      return NextResponse.json({ error: "Tag not found" }, { status: 404 });
    }

    return NextResponse.json(groupFriendsData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch friends in friendsGroups" },
      { status: 500 }
    );
  }
}
