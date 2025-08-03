import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

const getFriendsByGroupId = async ({
  friendsGroupId,
}: {
  friendsGroupId: string;
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
