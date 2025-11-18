import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ambil cookie user
  const user = req.cookies.get("user")?.value;

  // izinkan kalau sedang akses /login
  if (pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // proteksi hanya folder /pages (about, blog, feedback)
  if (pathname.startsWith("/pages")) {
    if (!user) {
      const loginUrl = new URL("/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// middleware hanya aktif di folder /pages
export const config = {
  matcher: ["/pages/:path*"],
};
