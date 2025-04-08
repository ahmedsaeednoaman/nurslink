// src/middleware.ts
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const protectedRoutes = ['/account/orders', '/checkout', '/admin'];

  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    const session = request.cookies.get('session')?.value;

    if (!session) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (request.nextUrl.pathname.startsWith('/admin') && !isAdmin(session)) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }
}
