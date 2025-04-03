'use client'

import { useState } from 'react'

export default function NurseSettingsPage() {
  const [name, setName] = useState('???? ????')
  const [email, setEmail] = useState('nurse@example.com')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    alert('?? ??? ?????????')
  }

  return (
    <div className='p-8 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>??????? ??????</h1>
      <form onSubmit={handleSave} className='space-y-4'>
        <div>
          <label className='block mb-1'>????? ??????</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='block mb-1'>?????? ??????????</label>
          <input
            type='email'
            className='w-full p-2 border rounded'
            value={email}
            readOnly
          />
        </div>
        <button type='submit' className='bg-primary text-white px-4 py-2 rounded hover:bg-secondary'>
          ??? ?????????
        </button>
      </form>
    </div>
  )
}
