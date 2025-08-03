import { getFriendsByGroupId } from "@/lib/server/groupFriend";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { friendsGroupId: string } }
) {
  const { friendsGroupId } = await params;

  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("searchText");
  try {
    const groupFriendsData = await getFriendsByGroupId({
      friendsGroupId: friendsGroupId,
      searchText: searchText,
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
