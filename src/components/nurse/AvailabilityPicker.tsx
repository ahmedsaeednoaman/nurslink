'use client'

import { useState } from 'react'

export default function AvailabilityPicker() {
  const [availableDates, setAvailableDates] = useState([])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ????? ???????? ???????
  }

  return (
    <div>
      <label className='block mb-2'>????? ???????? ???????</label>
      <input
        type='date'
        onChange={handleDateChange}
        className='w-full p-2 border rounded'
      />
    </div>
  )
}
