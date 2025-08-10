import { prisma } from "@/lib/prisma";
import { UserWithoutPassword } from "@/types/users";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";

const isLoginIdDuplicate = async ({ loginId }: { loginId: string }) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        loginId,
      },
      select: {
        id: true,
      },
    });

    return existingUser !== null;
  } catch (error) {
    console.error(
      "Error in isLoginIdDuplicate /lib/api/server/user.ts: ",
      error
    );
    throw new Error("Failed to check loginId duplication in the database.");
  }
};

const createUser = async ({
  loginId,
  inputPassword,
  nickname,
}: {
  loginId: string;
  inputPassword: string;
  nickname: string;
}) => {
  try {
    const userData: User = await prisma.user.create({
      data: {
        loginId: loginId,
        password: await bcrypt.hash(inputPassword, 10),
        nickname: nickname,
        diaryName: `${nickname}의 일기장`,
      },
    });
    if (!userData)
      throw new Error("Failed to create user data from the database.");

    const { password, ...safeUserData } = userData;

    return safeUserData as UserWithoutPassword;
  } catch (error) {
    console.error(
      "Error in getUserWithLoginId /lib/api/server/user.ts: ",
      error
    );
    throw new Error("Failed to retrieve user data from the database.");
  }
};

const signInUser = async ({
  loginId,
  inputPassword,
}: {
  loginId: string;
  inputPassword: string;
}) => {
  try {
    const userData = await prisma.user.findUnique({
      where: {
        loginId: loginId,
      },
    });

    if (!userData)
      throw new Error("Failed to create user data from the database.");

    if (bcrypt.compareSync(inputPassword, userData.password)) {
      const { password, ...safeUserData } = userData;
      return safeUserData as UserWithoutPassword;
    }
    throw new Error("password is not matched");
  } catch (error) {
    console.error(
      "Error in getUserWithLoginId /lib/api/server/user.ts: ",
      error
    );
    throw new Error("Failed to retrieve user data from the database.");
  }
};

const getUserByLoginId = async (loginId: string) => {
  try {
    const userData = await prisma.user.findUnique({
      where: { loginId: loginId },
    });
    if (!userData) throw new Error();

    const { password, ...safeUserData } = userData;
    return safeUserData as UserWithoutPassword;
  } catch (error) {
    console.error(
      "Error in getUserWithLoginId /lib/api/server/user.ts: ",
      error
    );
    throw new Error("Failed to retrieve user data from the database.");
  }
};

export { createUser, getUserByLoginId, isLoginIdDuplicate, signInUser };
