import type { MouseEvent, ReactNode } from 'react'
import { useRegistrationModal } from '../context/RegistrationModalContext'

interface CtaButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'neutral'
  className?: string
  href?: string
  onClick?: () => void
  openRegistrationForm?: boolean
}

export default function CtaButton({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  openRegistrationForm = false,
}: CtaButtonProps) {
  const { openRegistration } = useRegistrationModal()

  const base =
    'inline-flex min-h-[44px] items-center justify-center rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 touch-manipulation active:scale-[0.98]'

  const variants = {
    primary: 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary-light',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
    neutral: 'bg-white text-gray-900 border border-gray-900 hover:bg-gray-50 shadow-sm',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (openRegistrationForm) {
      event.preventDefault()
      openRegistration()
    }
    onClick?.()
  }

  if (openRegistrationForm || onClick) {
    return (
      <button type="button" onClick={handleClick} className={classes}>
        {children}
      </button>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
