import "next-auth";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { UserWithoutPassword } from "./users";

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: UserWithoutPassword;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: UserWithoutPassword;
  }
}
