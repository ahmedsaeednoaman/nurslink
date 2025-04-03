'use client'

export default function Button({ children, onClick, className = '' }: { children: React.ReactNode, onClick: () => void, className?: string }) {
  return (
    <button onClick={onClick} className={g-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300 }>
      {children}
    </button>
  )
}
