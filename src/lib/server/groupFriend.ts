import { prisma } from "@/lib/prisma";
import { UserWithoutPassword } from "@/types/users";
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

    const groupFriendsData: User[] = friendsGroupData.map(
      (friendsGroupDatum) => {
        return friendsGroupDatum.friend;
      }
    );

    const safeGroupFriendsData: UserWithoutPassword[] = groupFriendsData.map(
      ({ password, ...safeGroupFriend }) => safeGroupFriend
    );

    return safeGroupFriendsData;
  } catch (error) {
    console.error(
      "Error in getFriendsByGroupId /lib/api/server/groupFriend.ts: ",
      error
    );
    throw new Error("Failed to retrieve friend data from the database.");
  }
};

export { getFriendsByGroupId };
