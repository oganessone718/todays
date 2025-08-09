import { getUserWithLoginId } from "@/lib/client/user";
import { UserWithoutPassword } from "@/types/users";
import { useEffect, useState } from "react";

export const useUser = (loginId: string) => {
  const [user, setUser] = useState<UserWithoutPassword | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchUser = async (loginId: string) => {
      try {
        setIsLoading(true);
        const userData = await getUserWithLoginId(loginId);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user in mention setting page:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (loginId) {
      fetchUser(loginId);
    }
  }, [loginId]);

  return {
    user,
    isLoading,
    error,
  };
};
