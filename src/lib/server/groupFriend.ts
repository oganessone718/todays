import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

const getFriendsByGroupId = async ({
  friendsGroupId,
  searchText = null,
}: {
  friendsGroupId: string;
  searchText?: string | null;
}) => {
  try {
    const friendsGroupData = await prisma.groupFriend.findMany({
      where: {
        friendsGroupId: friendsGroupId,
      },
      include: {
        friend: true,
      },
    });

    const groupFriendsData: User[] = friendsGroupData
      .map((friendsGroupDatum) => {
        return friendsGroupDatum.friend;
      })
      .filter((friend) => {
        if (!searchText) return true;
        return (
          friend.nickname.toLowerCase().includes(searchText.toLowerCase()) ||
          friend.loginId.toLowerCase().includes(searchText.toLowerCase())
        );
      });

    return groupFriendsData;
  } catch (error) {
    console.error(
      "Error in getFriendsByGroupId /lib/api/server/groupFriend.ts: ",
      error
    );
    throw new Error("Failed to retrieve friend data from the database.");
  }
};

export { getFriendsByGroupId };
