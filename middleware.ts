import { getSessionCookie } from "better-auth/cookies";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/signin", "/signup"];

export async function middleware(req: NextRequest) {
	const { nextUrl } = req;
	const sessionCookie = getSessionCookie(req, {
		cookiePrefix: "SecureStart",
	});

	const res = NextResponse.next();

	const isLoggedIn = !!sessionCookie;
	const isOnProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
	const isOnAuthRoute = authRoutes.includes(nextUrl.pathname);

	if (isOnProtectedRoute && !isLoggedIn) {
		return NextResponse.redirect(new URL("/signin", req.url));
	}

	if (isOnAuthRoute && isLoggedIn) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	return res;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
