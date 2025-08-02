import { User } from "@prisma/client";

const getFriendsByUserId = async ({
  userId,
  searchText = "",
}: {
  userId: string;
  searchText?: string;
}) => {
  console.log(searchText);
  try {
    const url = new URL(`/api/user/${userId}/friends`, window.location.origin);
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
      "Error in getFriendsByUserId /lib/api/client/friendship.ts: ",
      error
    );

    throw error;
  }
};

export { getFriendsByUserId };
