import { getCommentsByTodayId } from "@/lib/client/comment";
import { getReactionsByTodayId } from "@/lib/client/reaction";
import {
  deleteToday,
  getMentionsByTodayId,
  getTagsByTodayId,
  getToday,
  getVisibleGroupsByTodayId,
  getVisiblePeopleByTodayId,
  updateToday,
} from "@/lib/client/today";
import { TmpTodayValues } from "@/store/useTmpTodayStore";
import {
  Comment,
  FriendsGroup,
  Reaction,
  Tag,
  Today,
  User,
} from "@prisma/client";
import { useEffect, useState } from "react";

export const useToday = (todayId?: string) => {
  if (!todayId)
    return {
      today: null,
      isLoading: true,
      error: "todayId is falsy",
    };
  const [today, setToday] = useState<Today | null>(null);
  const [tags, setTags] = useState<Array<Tag> | null>(null);
  const [mentions, setMentions] = useState<Array<User> | null>(null);
  const [visiblePeople, setVisiblePeople] = useState<Array<User> | null>(null);
  const [visibleGroups, setVisibleGroups] =
    useState<Array<FriendsGroup> | null>(null);

  const [comments, setComments] = useState<Array<Comment> | null>([]);
  const [reactions, setReactions] = useState<Array<Reaction> | null>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchToday = async (todayId: string) => {
      try {
        const todayData = await getToday(todayId);
        setToday(todayData);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    const fetchTodayTag = async (todayId: string) => {
      try {
        const tagsData = await getTagsByTodayId({ todayId: todayId });
        setTags(tagsData);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    const fetchTodayMention = async (todayId: string) => {
      try {
        const mentionsData = await getMentionsByTodayId({ todayId: todayId });
        setMentions(mentionsData);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    const fetchTodayVisiblePeople = async (todayId: string) => {
      try {
        const visiblePeople = await getVisiblePeopleByTodayId({
          todayId: todayId,
        });
        setVisiblePeople(visiblePeople);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    const fetchTodayVisibleGroups = async (todayId: string) => {
      try {
        const visibleGroups = await getVisibleGroupsByTodayId({
          todayId: todayId,
        });
        setVisibleGroups(visibleGroups);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    const fetchComments = async (todayId: string) => {
      try {
        const comments = await getCommentsByTodayId({
          todayId: todayId,
        });
        setComments(comments);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    const fetchReactions = async (todayId: string) => {
      try {
        const reactions = await getReactionsByTodayId({
          todayId: todayId,
        });
        setReactions(reactions);
      } catch (error) {
        console.error("Failed to fetch today", error);
        setError(error);
      }
    };
    setIsLoading(true);

    fetchToday(todayId);
    fetchTodayTag(todayId);
    fetchTodayMention(todayId);
    fetchTodayVisiblePeople(todayId);
    fetchTodayVisibleGroups(todayId);
    fetchComments(todayId);
    fetchReactions(todayId);

    setIsLoading(false);
  }, []);

  const deleteTodayByTodayId = async (todayId: string) => {
    try {
      setIsLoading(true);
      await deleteToday({ id: todayId });
    } catch (error) {
      console.error("Failed to fetch today", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTodayWithData = async ({
    userId,
    todayId,
    tmpTodayData,
  }: {
    userId: string;
    todayId: string;
    tmpTodayData: TmpTodayValues;
  }) => {
    try {
      setIsLoading(true);
      await updateToday({
        userId,
        todayId,
        tmpTodayData,
      });
    } catch (error) {
      console.error("Failed to patch today", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    today,
    tags,
    mentions,
    visiblePeople,
    visibleGroups,
    comments,
    reactions,
    deleteTodayByTodayId,
    updateTodayWithData,
    isLoading,
    error,
  };
};
