import { TmpTodayValues } from "@/store/useTmpTodayStore";
import { FriendsGroup, Reaction, Tag, Today, User } from "@prisma/client";

export interface tmpStructuredTodayValues {
  title: string;
  content: string;
  date: string;
  emojiUrl: string;
  mentions: Array<string>;
  tags: Array<string>;
  visiblePeople: Array<string>;
  visibleGroups: Array<string>;
}

const createToday = async (userId: string, tmpTodayData: TmpTodayValues) => {
  try {
    const tmpStructuredTodayData = {
      ...tmpTodayData,
      mentions: Array.from(tmpTodayData.mentions),
      tags: Array.from(tmpTodayData.tags),
      visiblePeople: Array.from(tmpTodayData.visiblePeople),
      visibleGroups: Array.from(tmpTodayData.visibleGroups),
    };

    const todayRes = await fetch(`/api/today`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        tmpTodayData: tmpStructuredTodayData,
      }),
    });

    if (!todayRes.ok) {
      if (todayRes.status === 400) {
        throw new Error("Missing fields");
      }
      throw new Error("Failed to create today");
    }

    const todayData: Today = await todayRes.json();
    return todayData;
  } catch (error) {
    console.error("Error in createToday /lib/api/client/today.ts: ", error);
    throw error;
  }
};

const getTagsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const tagsRes = await fetch(`/api/today/${todayId}/tags`);
    const tagsData: Tag[] = await tagsRes.json();

    return tagsData;
  } catch (error) {
    console.error("Error in getTagsByUserId /lib/api/server/tag.ts: ", error);
    throw new Error("Failed to retrieve tag data from the database.");
  }
};

const getMentionsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const mentionRes = await fetch(`/api/today/${todayId}/mentions`);

    const mentionData: User[] = await mentionRes.json();
    return mentionData;
  } catch (error) {
    console.error("Error in getToday /lib/api/client/today.ts: ", error);
    throw error;
  }
};

const getToday = async (id: string) => {
  try {
    const todayRes = await fetch(`/api/today/${id}`);

    if (!todayRes.ok) {
      if (todayRes.status === 404) {
        throw new Error("today not found");
      }
      throw new Error("Failed to fetch today");
    }

    const todayData: Today = await todayRes.json();
    return todayData;
  } catch (error) {
    console.error("Error in getToday /lib/api/client/today.ts: ", error);

    throw error;
  }
};

const deleteToday = async ({ id }: { id: string }) => {
  try {
    const todayRes = await fetch(`/api/today/${id}`, {
      method: "DELETE",
    });

    const todayData = await todayRes.json();
    return todayData;
  } catch (error) {
    console.error("Error in deleteToday /lib/api/server/today.ts: ", error);
    throw new Error("Failed to delete today from the database");
  }
};

const updateToday = async ({
  userId,
  todayId,
  tmpTodayData,
}: {
  userId: string;
  todayId: string;
  tmpTodayData: TmpTodayValues;
}) => {
  try {
    const tmpStructuredTodayData = {
      ...tmpTodayData,
      mentions: Array.from(tmpTodayData.mentions),
      tags: Array.from(tmpTodayData.tags),
      visiblePeople: Array.from(tmpTodayData.visiblePeople),
      visibleGroups: Array.from(tmpTodayData.visibleGroups),
    };

    const todayRes = await fetch(`/api/today/${todayId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        tmpTodayData: tmpStructuredTodayData,
      }),
    });

    const todayData: Today = await todayRes.json();
    return todayData;
  } catch (error) {
    console.error("Error in updateToday /lib/api/server/today.ts: ", error);
    throw new Error("Failed to update today in the database");
  }
};

const getVisiblePeopleByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const visiblePeopleRes = await fetch(`/api/today/${todayId}/mentions`);

    const visiblePeopleData: User[] = await visiblePeopleRes.json();
    return visiblePeopleData;
  } catch (error) {
    console.error("Error in getToday /lib/api/client/today.ts: ", error);
    throw error;
  }
};

const getVisibleGroupsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const visibleGroupsRes = await fetch(`/api/today/${todayId}/mentions`);

    const visibleGroupsData: FriendsGroup[] = await visibleGroupsRes.json();
    return visibleGroupsData;
  } catch (error) {
    console.error("Error in getToday /lib/api/client/today.ts: ", error);
    throw error;
  }
};

const getReactionsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const reactionsRes = await fetch(`/api/today/${todayId}/reactions`);

    if (!reactionsRes.ok) {
      if (reactionsRes.status === 404) {
        throw new Error("Reactions not found");
      }
      throw new Error("Failed to fetch Reactions");
    }

    const reactionsData: Reaction[] = await reactionsRes.json();
    return reactionsData;
  } catch (error) {
    console.error(
      "Error in getReactionsByTodayId /lib/api/server/reaction.ts: ",
      error
    );
    throw new Error("Failed to retrieve reaction data from the database.");
  }
};

const getCommentsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const CommentsRes = await fetch(`/api/today/${todayId}/comments`);

    if (!CommentsRes.ok) {
      if (CommentsRes.status === 404) {
        throw new Error("Comments not found");
      }
      throw new Error("Failed to fetch Comments");
    }

    const CommentsData: Comment[] = await CommentsRes.json();
    return CommentsData;
  } catch (error) {
    console.error(
      "Error in getCommentsByTodayId /lib/api/server/comment.ts: ",
      error
    );
    throw new Error("Failed to retrieve comment data from the database.");
  }
};

export {
  createToday,
  deleteToday,
  getCommentsByTodayId,
  getMentionsByTodayId,
  getReactionsByTodayId,
  getTagsByTodayId,
  getToday,
  getVisibleGroupsByTodayId,
  getVisiblePeopleByTodayId,
  updateToday,
};
