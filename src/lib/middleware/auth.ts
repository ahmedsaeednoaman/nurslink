import { withAuth } from 'next-auth/middleware'

export default withAuth()

export const config = {
  matcher: ['/nurse/:path*', '/hospital/:path*', '/admin/:path*'],
}
