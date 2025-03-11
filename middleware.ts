// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//   const email = req.cookies.get('email')?.value;

//   // If the email cookie is missing, we redirect to /sign-in
//   if (!email) {
//     const url = new URL('/sign-in', req.nextUrl.origin);
//     return NextResponse.redirect(url);
//   }

//   // Continue as normal if email exists
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/'],
// };

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('Middleware: Request URL:', req.nextUrl.href);
  console.log('Middleware: Cookies:', req.cookies);

  const email = req.cookies.get('email')?.value;

  if (!email) {
    console.log('Middleware: No email cookie found, redirecting to /sign-in');
    const url = new URL('/sign-in', req.nextUrl.origin);
    return NextResponse.redirect(url);
  }

  console.log('Middleware: Email cookie found, proceeding');
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
};
