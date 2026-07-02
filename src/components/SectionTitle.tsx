interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-gray-800 sm:text-base md:text-lg">{subtitle}</p>}
    </div>
  )
}
