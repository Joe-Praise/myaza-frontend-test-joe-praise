import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const email = req.cookies.get('email')?.value;

  // If the email cookie is missing, we redirect to /sign-in
  if (!email) {
    const url = new URL('/sign-in', req.nextUrl.origin);
    return NextResponse.redirect(url);
  }

  // Continue as normal if email exists
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'], // Protect landing page, dashboard and its subroutes
};
