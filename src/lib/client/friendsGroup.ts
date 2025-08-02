import { FriendsGroup } from "@prisma/client";

const getFriendsGroupByUserId = async (userId: string) => {
  try {
    const friendsGroupRes = await fetch(`/api/user/${userId}/friends-group`);
    if (!friendsGroupRes.ok) {
      if (friendsGroupRes.status === 404) {
        throw new Error("friendsGroup not found");
      }
      throw new Error("Failed to fetch friends");
    }

    const friendsGroupData: FriendsGroup[] = await friendsGroupRes.json();
    return friendsGroupData;
  } catch (error) {
    console.error(
      "Error in getFriendsByUserId /lib/api/client/friendsGroup.ts: ",
      error
    );

    throw error;
  }
};

export { getFriendsGroupByUserId };
