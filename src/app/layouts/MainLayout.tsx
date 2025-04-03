'use client'

import { ReactNode } from 'react'
import Navbar from '@/components/shared/Navbar/DesktopNav'
import Footer from '@/components/shared/Footer'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}
