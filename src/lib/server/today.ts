import { prisma } from "@/lib/prisma";
import { tmpStructuredTodayValues } from "../client/today";

const createToday = async ({
  userId,
  tmpTodayData,
}: {
  userId: string;
  tmpTodayData: tmpStructuredTodayValues;
}) => {
  try {
    console.log();
    const today = await prisma.today.create({
      data: {
        title: tmpTodayData.title,
        emojiUrl: tmpTodayData.emojiUrl,
        content: tmpTodayData.content,
        date: new Date(tmpTodayData.date),
        user: { connect: { id: userId } },
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

export { createToday };
