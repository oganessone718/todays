import { prisma } from "@/lib/prisma";

const getUserByLoginId = async (loginId: string) => {
  try {
    const userData = await prisma.user.findUnique({
      where: { loginId: loginId },
    });
    return userData;
  } catch (error) {
    console.error(
      "Error in getUserWithLoginId /lib/api/server/user.ts: ",
      error
    );
    throw new Error("Failed to retrieve user data from the database.");
  }
};

export {  getUserByLoginId };
