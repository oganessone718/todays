import { prisma } from "@/lib/prisma";
import { TmpTodayValues } from "@/store/useTmpTodayStore";
import { UserWithoutPassword } from "@/types/users";
const createToday = async ({
  userId,
  tmpTodayData,
}: {
  userId: string;
  tmpTodayData: TmpTodayValues;
}) => {
  try {
    const today = await prisma.today.create({
      data: {
        title: tmpTodayData.title,
        emojiUrl: tmpTodayData.emojiUrl,
        content: tmpTodayData.content,
        date: new Date(tmpTodayData.date),
        user: { connect: { id: userId } },
        todayTags: {
          create: tmpTodayData.tags.map((tag) => ({
            tag: {
              connectOrCreate: {
                where: {
                  userId_name: {
                    userId: userId,
                    name: tag,
                  },
                },
                create: {
                  name: tag,
                  user: { connect: { id: userId } },
                },
              },
            },
          })),
        },
        todayMentionedUsers: {
          create: tmpTodayData.mentions.map((mentionedUserId) => ({
            mentionedUser: { connect: { id: mentionedUserId } },
          })),
        },
        todayVisibleUsers: {
          create: tmpTodayData.visiblePeople.map((visibleUserId) => ({
            visibleUser: { connect: { id: visibleUserId } },
          })),
        },
        todayVisibleFriendsGroups: {
          create: tmpTodayData.visibleGroups.map((friendsGroupId) => ({
            visibleFriendsGroup: { connect: { id: friendsGroupId } },
          })),
        },
      },
    });

    return today;
  } catch (error) {
    console.error("Error in createToday /lib/api/server/today.ts: ", error);
    throw new Error("Failed to create today to the database");
  }
};

const getToday = async ({ id }: { id: string }) => {
  try {
    const today = await prisma.today.findUnique({
      where: { id: id },
    });

    return today;
  } catch (error) {
    console.error("Error in createToday /lib/api/server/today.ts: ", error);
    throw new Error("Failed to create today to the database");
  }
};

const getTagsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const todayTagData = await prisma.todayTag.findMany({
      where: {
        todayId: todayId,
      },
      include: {
        tag: true,
      },
    });
    const tagData: Tag[] = todayTagData.map((tagDatum) => {
      return tagDatum.tag;
    });

    return tagData;
  } catch (error) {
    console.error("Error in getTagsByUserId /lib/api/server/today.ts: ", error);
    throw new Error("Failed to retrieve tag data from the database.");
  }
};

const getMentionsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const todayMentionData = await prisma.todayMentionUser.findMany({
      where: {
        todayId: todayId,
      },
      include: {
        mentionedUser: true,
      },
    });
    const mentionsData: UserWithoutPassword[] = todayMentionData.map(
      (todayMentionDatum) => {
      return todayMentionDatum.mentionedUser;
      }
    );

    return mentionsData;
  } catch (error) {
    console.error("Error in getTagsByUserId /lib/api/server/today.ts: ", error);
    throw new Error("Failed to retrieve mention data from the database.");
  }
};

const deleteToday = async ({ id }: { id: string }) => {
  try {
    await prisma.today.delete({
      where: { id },
    });
    return { success: true };
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
  tmpTodayData: Partial<TmpTodayValues>;
}) => {
  try {
    const data: any = {};

    if (tmpTodayData.title !== undefined) data.title = tmpTodayData.title;
    if (tmpTodayData.emojiUrl !== undefined)
      data.emojiUrl = tmpTodayData.emojiUrl;
    if (tmpTodayData.content !== undefined) data.content = tmpTodayData.content;
    if (tmpTodayData.date !== undefined)
      data.date = new Date(tmpTodayData.date);

    if (tmpTodayData.tags !== undefined) {
      data.todayTags = {
        deleteMany: {},
        create: tmpTodayData.tags.map((tag) => ({
          tag: {
            connectOrCreate: {
              where: {
                userId_name: {
                  userId: userId,
                  name: tag,
                },
              },
              create: {
                name: tag,
                user: { connect: { id: userId } },
              },
            },
          },
        })),
      };
    }

    if (tmpTodayData.mentions !== undefined) {
      data.todayMentionedUsers = {
        deleteMany: {},
        create: tmpTodayData.mentions.map((mentionedUserId) => ({
          mentionedUser: { connect: { id: mentionedUserId } },
        })),
      };
    }

    if (tmpTodayData.visiblePeople !== undefined) {
      data.todayVisibleUsers = {
        deleteMany: {},
        create: tmpTodayData.visiblePeople.map((visibleUserId) => ({
          visibleUser: { connect: { id: visibleUserId } },
        })),
      };
    }

    if (tmpTodayData.visibleGroups !== undefined) {
      data.todayVisibleFriendsGroups = {
        deleteMany: {},
        create: tmpTodayData.visibleGroups.map((groupId) => ({
          visibleFriendsGroup: { connect: { id: groupId } },
        })),
      };
    }

    const today = await prisma.today.update({
      where: { id: todayId },
      data,
    });

    return today;
  } catch (error) {
    console.error("Error in updateToday /lib/api/server/today.ts: ", error);
    throw new Error("Failed to update today in the database");
  }
};

const getVisiblePeopleByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const todayVisiblePeopleData = await prisma.todayVisibleUser.findMany({
      where: {
        todayId,
      },
      include: {
        visibleUser: true,
      },
    });

    const visiblePeople: UserWithoutPassword[] = todayVisiblePeopleData.map(
      (datum) => datum.visibleUser
    );

    return visiblePeople;
  } catch (error) {
    console.error(
      "Error in getVisibleUsersByTodayId /lib/api/server/today.ts: ",
      error
    );
    throw new Error("Failed to retrieve visible user data from the database.");
  }
};

const getVisibleGroupsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const todayVisibleGroupData =
      await prisma.todayVisibleFriendsGroup.findMany({
        where: {
          todayId,
        },
        include: {
          visibleFriendsGroup: true,
        },
      });

    const visibleGroups: FriendsGroup[] = todayVisibleGroupData.map(
      (datum) => datum.visibleFriendsGroup
    );

    return visibleGroups;
  } catch (error) {
    console.error(
      "Error in getVisibleGroupsByTodayId /lib/api/server/today.ts: ",
      error
    );
    throw new Error("Failed to retrieve visible group data from the database.");
  }
};

const getReactionsByTodayId = async ({ todayId }: { todayId: string }) => {
  try {
    const reactionData = await prisma.reaction.findMany({
      where: {
        todayId: todayId,
      },
    });
    return reactionData;
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
    const commentData = await prisma.comment.findMany({
      where: {
        todayId: todayId,
      },
    });
    return commentData;
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
