interface LevelHeaderProps {
  title: string
  subtitle: string
}

export default function LevelHeader({ title, subtitle }: LevelHeaderProps) {
  return (
    <div className="pt-0.5">
      <h3 className="text-base font-extrabold uppercase tracking-wide text-gray-900 sm:text-lg md:text-xl">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
    </div>
  )
}
