import NextAuth from "next-auth/next";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
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
      async authorize(credentials) {
        if (!credentials) return;
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

        // eslint-disable-next-line consistent-return
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      if (user?.status === 200) {
        return true;
      }
      throw new Error(user.message);
    },
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
