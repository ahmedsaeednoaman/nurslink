'use client'

export default function CertificationBadge({ certification }: { certification: string }) {
  return (
    <div className='bg-green-100 text-green-800 px-4 py-2 rounded-full'>
      {certification}
    </div>
  )
}
