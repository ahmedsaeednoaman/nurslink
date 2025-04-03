'use client'

export default function NurseRating({ rating }: { rating: number }) {
  return (
    <div>
      <p className='text-gray-700'>???????: {rating}</p>
    </div>
  )
}
