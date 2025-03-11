import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const email = req.cookies.get('email')?.value;

  if (!email) {
    const url = new URL('/sign-in', req.nextUrl.origin);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
};
