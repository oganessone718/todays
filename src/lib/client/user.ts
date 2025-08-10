import { UserWithoutPassword } from "@/types/users";

const isLoginIdDuplicate = async ({ loginId }: { loginId: string }) => {
  try {
    const userRes = await fetch(`/api/user/${loginId}/duplicate-check`);

    if (!userRes.ok) {
      throw new Error("Failed to fetch user");
    }
    const userData: boolean = await userRes.json();
    return userData;
  } catch (error) {
    console.error(
      "Error in getUserWithLoginId /lib/api/client/user.ts: ",
      error
    );

    throw error;
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
    const userRes = await fetch(`/api/user/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId: loginId,
        password: inputPassword,
        nickname: nickname,
      }),
    });

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

const signInUser = async ({
  loginId,
  inputPassword,
}: {
  loginId: string;
  inputPassword: string;
}) => {
  try {
    const userRes = await fetch(`/api/user/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId: loginId,
        password: inputPassword,
      }),
    });

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

export { createUser, getUserWithLoginId, isLoginIdDuplicate, signInUser };
