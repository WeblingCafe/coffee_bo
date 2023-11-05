import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// eslint-disable-next-line consistent-return
export default withAuth(function middleware(req) {
  if (req.nextauth.token && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/category";

    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: ["/category", "/"],
};
