import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

const getFriendsByUserId = async ({
  userId,
  searchText = null,
}: {
  userId: string;
  searchText?: string | null;
}) => {
  try {
    const friendshipData = await prisma.friendship.findMany({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
      },
      include: {
        user1: true,
        user2: true,
      },
    });

    const friendsData: User[] = friendshipData
      .map((fd) => (fd.user1.id === userId ? fd.user2 : fd.user1))
      .filter((friend) => {
        if (!searchText) return true;
        return (
          friend.nickname.toLowerCase().includes(searchText.toLowerCase()) ||
          friend.loginId.toLowerCase().includes(searchText.toLowerCase())
        );
      });

    return friendsData;
  } catch (error) {
    console.error(
      "Error in getFriendsByUserId /lib/api/server/friendship.ts: ",
      error
    );
    throw new Error("Failed to retrieve friends data from the database.");
  }
};

export { getFriendsByUserId };
