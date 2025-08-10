import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function useUser() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/sign-in";
    }
  }, [status]);

  if (status === "loading") {
    return null;
  }

  return session!.user;
}
