import { TmpTodayValues } from "@/store/useTmpTodayStore";
import { Today } from "@prisma/client";

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

export { createToday };
