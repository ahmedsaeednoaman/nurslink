import { withAuth } from 'next-auth/middleware'
import { NextRequest } from 'next/server'

export default withAuth(
  function middleware(req: NextRequest) {
    // ???? ????? ??? ??????
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname

        if (path.startsWith('/nurse') && token?.role !== 'nurse') return false
        if (path.startsWith('/hospital') && token?.role !== 'hospital') return false
        if (path.startsWith('/admin') && token?.role !== 'admin') return false

        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/nurse/:path*', '/hospital/:path*', '/admin/:path*'],
}
