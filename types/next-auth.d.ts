import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    user: {
      status: number;
      success: string;
      code: string;
      successMessage: string;
      responseObject: {
        userId: number;
        email: string;
        username: string;
        nickname: string;
        birthDate: string;
        userRole: string;
        stamps: number;
        accessToken: string;
      };
    };
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    status: number;
    success: string;
    code: string;
    successMessage: string;
    responseObject: {
      userId: number;
      email: string;
      username: string;
      nickname: string;
      birthDate: string;
      userRole: string;
      stamps: number;
    };
  }
}
