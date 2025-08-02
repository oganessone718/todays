import { User } from "@prisma/client";

const getFriendsByGroupId = async ({
  friendsGroupId,
  searchText = "",
}: {
  friendsGroupId: string;
  searchText?: string;
}) => {
  try {
    const url = new URL(
      `/api/group-friend/${friendsGroupId}/friends`,
      window.location.origin
    );
    if (searchText) {
      url.searchParams.append("searchText", searchText);
    }

    const friendsRes = await fetch(url.toString());

    if (!friendsRes.ok) {
      if (friendsRes.status === 404) {
        throw new Error("friends not found");
      }
      throw new Error("Failed to fetch friends");
    }

    const friendsData: User[] = await friendsRes.json();
    return friendsData;
  } catch (error) {
    console.error(
      "Error in getFriendsByGroupId /lib/api/client/gourpFriend.ts: ",
      error
    );

    throw error;
  }
};

export { getFriendsByGroupId };
