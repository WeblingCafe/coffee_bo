import NextAuth from "next-auth/next";
import { cookies } from "next/headers";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface TokenProps {
  token: {
    token: Object;
    user: {
      status: number;
      success: string;
      code: string;
      successMessage: string;
      responseObject: Object;
      accessToken: string;
      accessTokenExpires: number;
      refreshToken: null | string;
    };
    account: { type: "credentials"; provider: "credentials" };
    isNewUser: false;
    trigger: "signIn";
    iat: number;
    exp: number;
    jti: string;
  };
  session: undefined;
}

async function refreshAccessToken(token) {
  // console.log("토큰?", token.token.token.user.accessToken);
  try {
    const url = `${process.env.API_HOST}/v1/auth/retrieve-token`;
    const cookieStore = cookies();
    const refreshToken = cookieStore.get("Refresh-Authorization");
    console.log("===refreshToken", refreshToken);
    console.log("refreshToken", `Refresh-Authorization=${refreshToken.value}`);

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Cookie: `${refreshToken.name}=${refreshToken.value}`,
        // "Refresh-Authorization": refreshToken.value,
      },
      // credentials: "include",
      method: "POST",
    });

    const refreshedTokens = await response.json();
    console.log("리프레시_", refreshedTokens);

    if (refreshedTokens.status !== 200) {
      throw refreshedTokens.error;
    }

    if (refreshedTokens.status === 200) {
      cookies().delete("Refresh-Authorization");
      cookies().set("Refresh-Authorization", refreshedTokens.responseObject);
    }

    return {
      ...token,
      accessToken: refreshedTokens.responseObject,
      accessTokenExpires: new Date().getTime() + 60000,
      // refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

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
            // "Access-Control-Allow-Origin": "https://coffee-api.snaps.com",
          },
          // credentials: "include",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const userData = await res.json();
        // console.log("userData", userData);
        // console.log("res.header", JSON.stringify(res.headers));
        const accessToken = await res.headers.get("access-authorization");
        // const accessTokenExpires = 60; // 1분 뒤 만료
        // const refreshToken = null as string;

        // const user = {
        //   ...userData,

        //   // accessTokenExpires,
        //   // refreshToken,
        // };
        cookies().set("Refresh-Authorization", accessToken);
        // console.log("유저", user);

        // eslint-disable-next-line consistent-return
        return userData;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      // console.log(" user", user);
      if (user?.status === 200) {
        return true;
      }
      throw new Error(user.message);
    },
    async jwt({ token, user }) {
      // Initial sign in(최초에는 값이 존재)
      console.log("user", user);
      console.log("token", token);
      if (user) {
        return {
          accessToken: user.accessToken,
          accessTokenExpires: new Date().getTime() + 60000, // 1분 뒤의 시간 계산
          user,
        };
      } else {
        if (Date.now() < token.accessTokenExpires) {
          return token;
        }
        // Access token has expired, try to update it
        return refreshAccessToken(token);
      }
    },

    // async jwt({ token, user, account }) {
    // console.log("token", token);
    // console.log("user", user);
    // console.log("account", account);
    // if (user) {
    // return token;
    // }

    // if (user) {
    //   return user;
    // } else {
    //   return refreshAccessToken();
    // }

    // if (token.token.user || token.user) {
    // return token;
    // }

    // console.log(
    //   "Date.now() < token.accessTokenExpires",
    //   Date.now() < token.accessTokenExpires,
    // );
    // // Return previous token if the access token has not expired yet
    // if (Date.now() < token.exp) {
    //   return { ...token };
    // }

    // // Access token has expired, try to update it
    // return refreshAccessToken(token);

    // return { ...token, ...user };
    // },

    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      // session.accessToken = token.accessToken;
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }
      // session.user = token;
      // console.log("session", session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  // jwt: {
  //   maxAge: 60, // 1 minutes
  // },
  // session: {
  //   maxAge: 60, // 1 minutes
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
