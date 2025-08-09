import { User } from "@prisma/client";

const getUserWithLoginId = async (loginId: string) => {
  try {
    const userRes = await fetch(`/api/user/${loginId}`);

    if (!userRes.ok) {
      if (userRes.status === 404) {
        throw new Error("User not found");
      }
      throw new Error("Failed to fetch user");
    }

    const userData: UserWithoutPassword = await userRes.json();

    return userData;
  } catch (error) {
    console.error(
      "Error in getUserWithLoginId /lib/api/client/user.ts: ",
      error
    );

    throw error;
  }
};

export { getUserWithLoginId };
