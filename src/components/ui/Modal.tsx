'use client'

import { useState } from 'react'

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <button onClick={onClose} className='absolute top-4 right-4 text-gray-500'>
          X
        </button>
        {children}
      </div>
    </div>
  )
}
