import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  if (request.headers.has('x-access')) {
    throw new Error('Cannot set x-access header');
  }

  const newRequestHeaders = new Headers(request.headers);
  const access = request.nextUrl.searchParams.get('t');
  if (access) {
    newRequestHeaders.set('x-access', 'true');
    const response = NextResponse.next({
      request: {
        headers: newRequestHeaders,
      },
    });

    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
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
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/'],
};
