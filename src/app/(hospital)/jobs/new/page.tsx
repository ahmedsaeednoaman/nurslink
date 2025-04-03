'use client'

import { useState } from 'react'

export default function NewJobPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('?? ??? ???????')
  }

  return (
    <div className='p-8 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>??? ????? ?????</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>?????? ???????</label>
          <input type='text' className='w-full p-2 border rounded' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className='block mb-1'>?????</label>
          <textarea rows='4' className='w-full p-2 border rounded' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type='submit' className='bg-primary text-white px-4 py-2 rounded hover:bg-secondary'>??? ???????</button>
      </form>
    </div>
  )
}
