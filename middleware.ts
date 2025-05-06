import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
  '/Wishlist(.*)', '/Cont(.*)', '/Order(.*)', '/shopping(.*)',
  '/checkout(.*)', '/studio(.*)'
]);

const isAdminRoute = createRouteMatcher(["/studio(.*)"]);


export default clerkMiddleware(async (auth, req) => {
  type SessionClaims = {
    metadata?: {
      role?: string;
    };
  };

  const { sessionClaims } = await auth() as { sessionClaims?: SessionClaims };

  if (isAdminRoute(req) && sessionClaims?.metadata?.role !== "admin") {
    // here
    return NextResponse.redirect(new URL('/404', req.url));
  }

  if (isProtectedRoute(req)) {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.redirect(new URL('/Account', req.url));
    }
  }
  return NextResponse.next();
});


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
