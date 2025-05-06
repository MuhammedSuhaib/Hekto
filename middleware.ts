import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/Wishlist(.*)', '/Cont(.*)', '/Order(.*)', '/shopping(.*)',
  '/checkout(.*)', '/studio(.*)'
]);

const isAdminRoute = createRouteMatcher(["/studio(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (isAdminRoute(req) && userId !== "user_2wdlqKpqYGdQn6iPa3ZnxO2jw8J") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL('/Account', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
