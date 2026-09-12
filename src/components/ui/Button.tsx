import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'outlineLight' | 'white' | 'ghost'

type SharedProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-[0_8px_20px_rgba(30,95,242,0.28)] hover:bg-brand-dark',
  outline:
    'border border-[#c5d4f5] bg-white text-brand hover:bg-brand-soft',
  outlineLight:
    'border border-white/70 bg-transparent text-white hover:bg-white/10',
  white: 'bg-white text-brand shadow-md hover:bg-brand-soft',
  ghost: 'bg-transparent text-brand hover:bg-brand-soft',
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition ${variants[variant]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
