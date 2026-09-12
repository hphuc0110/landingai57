import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  variant?: 'soft' | 'outline' | 'solid' | 'mint'
  className?: string
}

const variants = {
  soft: 'bg-brand-soft text-brand',
  outline: 'border border-white/80 bg-transparent text-white',
  solid: 'bg-white/15 text-white backdrop-blur-sm',
  mint: 'bg-[#7dd3fc]/30 text-white',
}

export default function Badge({
  children,
  variant = 'soft',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
