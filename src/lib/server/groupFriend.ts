import { prisma } from "@/lib/prisma";

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
        friend: searchText
          ? {
              OR: [
                { id: { contains: searchText, mode: "insensitive" } },
                { nickname: { contains: searchText, mode: "insensitive" } },
              ],
            }
          : undefined,
      },
      include: {
        friend: true,
      },
    });

    const groupFriendsData = friendsGroupData.map((friendsGroupDatum) => {
      return friendsGroupDatum.friend;
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
