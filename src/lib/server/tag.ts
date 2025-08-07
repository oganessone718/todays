import { prisma } from "@/lib/prisma";

const getTagsByUserId = async (userId: string) => {
  try {
    const tagData = await prisma.tag.findMany({
      where: {
        userId: userId,
      },
    });
    return tagData;
  } catch (error) {
    console.error("Error in getTagsByUserId /lib/api/server/tag.ts: ", error);
    throw new Error("Failed to retrieve tag data from the database.");
  }
};

const createTagsByNames = async (userId: string, tagNames: string[]) => {
  if (tagNames.length === 0) {
    return [];
  }

  try {
    const createOperations = tagNames.map((tagName) =>
      prisma.tag.create({
        data: {
          name: tagName,
          userId: userId,
        },
      })
    );
    const createdTagsData = await prisma.$transaction(createOperations);

    return createdTagsData;
  } catch (error) {
    console.error("Error in createTagsByNames /lib/api/server/tag.ts: ", error);
    throw new Error("Failed to retrieve tag data from the database.");
  }
};

export { createTagsByNames, getTagsByUserId };
