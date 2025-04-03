'use client'

import Link from 'next/link'

export default function DesktopNav() {
  return (
    <nav className='hidden md:flex justify-between items-center'>
      <Link href="/" className='font-bold text-2xl text-primary'>
        NursLink
      </Link>
      <div className='flex space-x-8'>
        <Link href="/about" className='text-gray-700'>?? ??????</Link>
        <Link href="/contact" className='text-gray-700'>???? ???</Link>
        <Link href="/search" className='text-gray-700'>?????</Link>
        <Link href="/auth/login" className='bg-primary text-white px-6 py-3 rounded-lg'>
          ????? ??????
        </Link>
      </div>
    </nav>
  )
}
