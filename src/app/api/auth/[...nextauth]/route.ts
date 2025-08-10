import { signInUser } from "@/lib/server/user";
import { UserWithoutPassword } from "@/types/users";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions : AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "loginId", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const signedUser: UserWithoutPassword = await signInUser({
          loginId: credentials.loginId,
          inputPassword: credentials.password,
        });

        return signedUser;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        // TODO: 유저 정보 업데이트 시 수정
      }
      if (user) {
        token.user = user as UserWithoutPassword;
      }
      return token;
    },

    async session({ session, token }) {
      const { user, ...tokenPart } = token;
      session.user = user;

      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
