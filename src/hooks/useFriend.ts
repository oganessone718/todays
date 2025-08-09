import { getFriendsByUserId } from "@/lib/client/friendship";
import { getFriendsByGroupId } from "@/lib/client/groupFriend";
import { UserWithoutPassword } from "@/types/users";
import { FriendsGroup } from "@prisma/client";
import { useEffect, useState } from "react";

export const useFriend = (userId: string | null) => {
  const [friends, setFriends] = useState<UserWithoutPassword[]>([]);
  const [selectedFriendsGroup, setSelectedFriendsGroup] =
    useState<FriendsGroup | null>(null);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!userId) return;
    const fetchFriends = async ({
      userId,
      groupId,
      searchText,
    }: {
      userId: string;
      groupId?: string;
      searchText?: string;
    }) => {
      setIsLoading(true);
      setError(null);
      try {
        const friendsData = groupId
          ? await getFriendsByGroupId({
              friendsGroupId: groupId,
            })
          : await getFriendsByUserId({
              userId: userId,
            });

        if (searchText) {
          const filteredfriendsData: UserWithoutPassword[] = friendsData.filter(
            (friend) => {
              return (
                friend.nickname
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                friend.loginId.toLowerCase().includes(searchText.toLowerCase())
              );
            }
          );
          setFriends(filteredfriendsData);
        } else {
          setFriends(friendsData);
        }
      } catch (error) {
        console.error("Failed to fetch friends in mention page:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFriends({
      userId: userId,
      groupId: selectedFriendsGroup?.id,
      searchText: searchText,
    });
  }, [selectedFriendsGroup, searchText, userId]);

  return {
    friends,
    selectedFriendsGroup,
    setSelectedFriendsGroup,
    searchText,
    setSearchText,
    isLoading,
    error,
  };
};
