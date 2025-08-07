import { Tag } from "@prisma/client";

const getTagsByUserId = async (userId: string, tagNames: string[]) => {
  try {
    const tagsRes = await fetch(`/api/user/${userId}/tag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tagNames: tagNames,
      }),
    });

    if (!tagsRes.ok) {
      if (tagsRes.status === 404) {
        throw new Error("Tags not found");
      }
      throw new Error("Failed to fetch tag");
    }

    const tagsData: Tag = await tagsRes.json();
    return tagsData;
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
    const tagsRes = await fetch(`/api/user/${userId}/tag`);

    if (!tagsRes.ok) {
      throw new Error("Failed to fetch tag");
    }

    const tagsData: Tag = await tagsRes.json();
    return tagsData;
  } catch (error) {
    console.error("Error in createTagsByNames /lib/api/server/tag.ts: ", error);
    throw new Error("Failed to retrieve tag data from the database.");
  }
};

export { createTagsByNames, getTagsByUserId };
