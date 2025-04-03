'use client'

import { useState } from 'react'

export default function JobPostForm() {
  const [jobTitle, setJobTitle] = useState('')
  const [salary, setSalary] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ????? ????????
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label className='block mb-2'>????? ???????</label>
        <input
          type='text'
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className='w-full p-2 border rounded'
        />
      </div>
      <div>
        <label className='block mb-2'>??????</label>
        <input
          type='text'
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className='w-full p-2 border rounded'
        />
      </div>
      <div>
        <label className='block mb-2'>??????</label>
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='w-full p-2 border rounded'
        />
      </div>
      <button type='submit' className='bg-primary text-white px-6 py-2 rounded-lg'>
        ??? ???????
      </button>
    </form>
  )
}
