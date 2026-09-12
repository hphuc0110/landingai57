import type {
  ProgramModule,
  ModuleTheme,
  WorkshopItem,
} from '../../data/modules'

const themeStyles: Record<
  ModuleTheme,
  {
    badge: string
    progress: string
    accent: string
    footer: string
    border: string
  }
> = {
  blue: {
    badge: 'bg-brand text-white',
    progress: 'bg-brand-soft text-brand',
    accent: 'text-brand',
    footer: 'bg-brand-tint',
    border: 'border-transparent',
  },
  green: {
    badge: 'bg-module-green text-white',
    progress: 'bg-module-green-soft text-module-green border border-module-green/20',
    accent: 'text-module-green',
    footer: 'bg-module-green-soft',
    border: 'border-module-green/25',
  },
  purple: {
    badge: 'bg-module-purple text-white',
    progress:
      'bg-module-purple-soft text-module-purple border border-module-purple/20',
    accent: 'text-module-purple',
    footer: 'bg-module-purple-soft',
    border: 'border-module-purple/25',
  },
}

type Props = {
  module: ProgramModule
}

export default function ModuleCard({ module }: Props) {
  const t = themeStyles[module.theme]

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] ${t.border}`}
    >
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <span
            className={`rounded-md px-2.5 py-1 text-[11px] font-extrabold tracking-wide ${t.badge}`}
          >
            {module.badge}
          </span>
          <span
            className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${t.progress}`}
          >
            {module.progress}
          </span>
        </div>

        <h3 className="mt-3 text-base font-extrabold leading-snug tracking-tight text-slate-900 uppercase sm:mt-4 sm:text-xl">
          {module.title}
        </h3>

        <div className="mt-4">
          <p className={`text-sm font-bold ${t.accent}`}>Lý thuyết</p>
          <p className="mt-1.5 text-sm leading-relaxed text-text-body">
            {module.theory}
          </p>
        </div>

        {module.workshopGroups.map((group) => (
          <WorkshopList
            key={group.label}
            label={group.label}
            items={group.items}
            accent={t.accent}
          />
        ))}
      </div>

      <div className={`${t.footer} px-4 py-3.5 sm:px-6 sm:py-4`}>
        <div className="flex items-start gap-2">
          <GraduationIcon className={`mt-0.5 h-4 w-4 shrink-0 ${t.accent}`} />
          <div>
            <p className={`text-sm font-bold ${t.accent}`}>Sản phẩm đầu ra:</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-800">
              {module.output}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

function WorkshopList({
  label,
  items,
  accent,
}: {
  label: string
  items: WorkshopItem[]
  accent: string
}) {
  return (
    <div className="mt-4">
      <p className={`text-sm font-bold ${accent}`}>{label}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item.title} className="flex gap-2 text-sm leading-snug">
            <span className={`mt-0.5 font-bold ${accent}`}>*</span>
            <span>
              <span className={`font-bold ${accent}`}>{item.title}</span>
              <span className="text-text-body"> — {item.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GraduationIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
    </svg>
  )
}
