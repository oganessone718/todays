import { getFriendsGroupByUserId } from "@/lib/client/friendsGroup";
import { FriendsGroup } from "@prisma/client";
import { useEffect, useState } from "react";

export const useFriendsGroup = (userId: string | null) => {
  const [friendsGroups, setFriendsGroups] = useState<FriendsGroup[]>([]);
  const [searchText, setSearchText] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!userId) return;
    const fetchFriendsGroup = async (userId: string) => {
      try {
        setIsLoading(true);
        const friendsGroupData = await getFriendsGroupByUserId(userId);
        if (searchText) {
          const filteredfriendsGroupData: FriendsGroup[] =
            friendsGroupData.filter((friendsGroup) => {
              return (
                friendsGroup.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                friendsGroup.description
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
            });
          setFriendsGroups(filteredfriendsGroupData);
        } else {
          setFriendsGroups(friendsGroupData);
        }
      } catch (error) {
        console.error(
          "Failed to fetch friends group in mention setting page:",
          error
        );
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFriendsGroup(userId);
  }, [userId, searchText]);

  return {
    friendsGroups,
    searchText,
    setSearchText,
    isLoading,
    error,
  };
};
