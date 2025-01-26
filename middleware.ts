import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })
    await supabase.auth.getSession()
    return res
  } catch (e) {
    // If Supabase fails, return the response without blocking the request
    return NextResponse.next()
  }
}

// Specify which paths should use the middleware
export const config = {
  matcher: [
    // Only run on specific paths that need auth
    '/protected/:path*',
    '/api/:path*'
  ],
}
