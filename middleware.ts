// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/.well-known/apple-app-site-association') {
    return new NextResponse(JSON.stringify({
      applinks: {
        apps: [],
        details: [
          {
            appID: "SL5C42S46R.name.rajunior.TodoList",
            paths: ["/share*"]
          }
        ]
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}

export const config = {
  matcher: '/.well-known/apple-app-site-association'
}
