'use client'

import { useState } from 'react'

export default function NurseRegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, email, password })
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='block mb-1'>?????</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='w-full p-2 border rounded' required />
      </div>
      <div>
        <label className='block mb-1'>?????? ??????????</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full p-2 border rounded' required />
      </div>
      <div>
        <label className='block mb-1'>???? ??????</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 border rounded' required />
      </div>
      <button type='submit' className='w-full bg-primary text-white py-2 rounded hover:bg-secondary'>
        ?????
      </button>
    </form>
  )
}
