import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // TODO: Check if user has authentication token/session
  // For now, we'll use a simple approach - check if coming from sign-in
  const isAuthenticated = request.cookies.get('authenticated')?.value === 'true';

  // If accessing root path and NOT authenticated, redirect to sign-in
  if (pathname === '/' && !isAuthenticated) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Allow access to sign-in page
  if (pathname === '/sign-in') {
    return NextResponse.next();
  }

  // Allow all other requests to pass through
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)',
  ],
};
