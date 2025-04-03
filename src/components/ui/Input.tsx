'use client'

export default function Input({ label, type = 'text', value, onChange, className = '' }: { label: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, className?: string }) {
  return (
    <div className={className}>
      <label className='block text-sm font-medium text-gray-700 mb-1'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
      />
    </div>
  )
}
