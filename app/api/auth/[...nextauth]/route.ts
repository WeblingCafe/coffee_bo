import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소 입력",
        },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credential", credentials);
        if (typeof credentials !== "undefined") {
          const res = await fetch(`${process.env.API_HOST}/v1/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          const user = await res.json();
          console.log("user", user);
          if (user) {
            return user;
          } else {
            return null;
          }
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
