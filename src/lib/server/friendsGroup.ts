import { prisma } from "@/lib/prisma";

const getFriendsGroupByUserId = async (userId: string) => {
  try {
    const friendsGroupData = await prisma.friendsGroup.findMany({
      where: {
        userId: userId,
      },
    });

    return friendsGroupData;
  } catch (error) {
    console.error(
      "Error in friendsGroupData /lib/api/server/friendsGroup.ts: ",
      error
    );
    throw new Error("Failed to retrieve friend data from the database.");
  }
};

export { getFriendsGroupByUserId };
