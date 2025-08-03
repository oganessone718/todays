import { getFriendsGroupByUserId } from "@/lib/client/friendsGroup";
import { getFriendsByUserId } from "@/lib/client/friendship";
import { getFriendsByGroupId } from "@/lib/client/groupFriend";
import { getUserWithLoginId } from "@/lib/client/user";
import type { FriendsGroup, User } from "@prisma/client";
import { useEffect, useState } from "react";

export const useFriendsData = (loginId: string | null) => {
  const [user, setUser] = useState<User | null>(null);
  const [friends, setFriends] = useState<User[]>([]);
  const [friendsGroups, setFriendsGroups] = useState<FriendsGroup[]>([]);
  const [selectedFriendsGroup, setSelectedFriendsGroup] =
    useState<FriendsGroup | null>(null);
  const [searchText, setSearchText] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchUser = async (loginId: string) => {
      try {
        const userData = await getUserWithLoginId(loginId);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user in mention setting page:", error);
        setError(error);
      }
    };
    if (loginId) {
      fetchUser(loginId);
    }
  }, [loginId]);

  useEffect(() => {
    if (!user) return;
    const fetchFriendsGroup = async (userId: string) => {
      try {
        const friendsGroupData = await getFriendsGroupByUserId(userId);
        setFriendsGroups(friendsGroupData);
      } catch (error) {
        console.error(
          "Failed to fetch friends group in mention setting page:",
          error
        );
        setError(error);
      }
    };
    fetchFriendsGroup(user.id);
  }, [user]);

  useEffect(() => {
    if (!user) return;
    
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
              searchText: searchText,
            })
          : await getFriendsByUserId({
              userId: userId,
              searchText: searchText,
            });

        setFriends(friendsData);
      } catch (error) {
        console.error("Failed to fetch friends in mention page:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFriends({
      userId: user.id,
      groupId: selectedFriendsGroup?.id,
      searchText: searchText,
    });

  }, [selectedFriendsGroup, searchText, user]);

  return {
    user,
    friends,
    friendsGroups,
    selectedFriendsGroup,
    setSelectedFriendsGroup,
    searchText,
    setSearchText,
    isLoading,
    error,
  };
};
