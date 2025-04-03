'use client'

import Link from 'next/link'

export default function MobileNav() {
  return (
    <nav className='md:hidden'>
      <div className='flex justify-between items-center'>
        <Link href="/" className='font-bold text-2xl text-primary'>
          NursLink
        </Link>
        <div className='space-x-4'>
          <Link href="/about" className='text-gray-700'>?? ??????</Link>
          <Link href="/contact" className='text-gray-700'>???? ???</Link>
          <Link href="/search" className='text-gray-700'>?????</Link>
          <Link href="/auth/login" className='bg-primary text-white px-4 py-2 rounded-lg'>
            ????? ??????
          </Link>
        </div>
      </div>
    </nav>
  )
}
