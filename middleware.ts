import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  if (request.headers.has("x-viewed-welcome-message")) {
    throw new Error("Cannot set x-viewed-welcome-message header")
}

const newRequestHeaders = new Headers(request.headers)
newRequestHeaders.set("x-access", "true")

const response = NextResponse.next({
    request: {
        headers: newRequestHeaders
    }

})

  const access = request.nextUrl.searchParams.get('t');
  console.log('access res', access);

// https://www.propelauth.com/post/cookies-in-next-js#cookies-in-middleware
  
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  if (access)
    response.cookies.set(
      'access',
      'true',

      {
        httpOnly: false,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
      }
    );

  return response;
};

export const config = {
  matcher: ['/'],
};
