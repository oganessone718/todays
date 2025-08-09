import { UserWithoutPassword } from "@/types/users";

const getFriendsByUserId = async ({ userId }: { userId: string }) => {
  try {
    const url = new URL(`/api/user/${userId}/friends`, window.location.origin);

    const friendsRes = await fetch(url.toString());

    if (!friendsRes.ok) {
      if (friendsRes.status === 404) {
        throw new Error("friends not found");
      }
      throw new Error("Failed to fetch friends");
    }

    const friendsData: UserWithoutPassword[] = await friendsRes.json();
    return friendsData;
  } catch (error) {
    console.error(
      "Error in getFriendsByUserId /lib/api/client/friendship.ts: ",
      error
    );

    throw error;
  }
};

export { getFriendsByUserId };
