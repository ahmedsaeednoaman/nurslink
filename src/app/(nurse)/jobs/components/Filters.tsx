'use client'

import { useState } from 'react'

export default function Filters() {
  const [location, setLocation] = useState('')
  const [specialty, setSpecialty] = useState('')

  const handleFilter = () => {
    // TODO: ????? ???????
    console.log({ location, specialty })
  }

  return (
    <div className='mb-6 grid gap-4 md:grid-cols-2'>
      <input
        type='text'
        placeholder='??????'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className='p-2 border rounded w-full'
      />
      <input
        type='text'
        placeholder='??????'
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        className='p-2 border rounded w-full'
      />
      <button onClick={handleFilter} className='bg-primary text-white px-4 py-2 rounded hover:bg-secondary md:col-span-2'>
        ????? ???????
      </button>
    </div>
  )
}
