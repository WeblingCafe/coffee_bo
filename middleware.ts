import { withAuth } from "next-auth/middleware";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// eslint-disable-next-line consistent-return
export default withAuth(function middleware(req) {
  console.log("nextauth_token", req.nextauth.token);
  if (req.nextauth.token.user && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/category";

    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: ["/category", "/"],
};
