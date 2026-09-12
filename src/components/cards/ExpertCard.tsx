import type { Expert } from '../../data/experts'

type Props = {
  expert: Expert
}

export default function ExpertCard({ expert }: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-muted bg-white p-5 shadow-[0_8px_30px_rgba(30,95,242,0.06)] sm:p-6">
      <div className="mx-auto">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full text-xl font-extrabold text-white shadow-inner"
          style={{
            background: `linear-gradient(145deg, hsl(${expert.photoHue} 70% 48%), hsl(${expert.photoHue} 65% 32%))`,
          }}
          aria-hidden
        >
          {expert.initials}
        </div>
      </div>

      <h3 className="mt-5 text-center text-[15px] font-bold text-text-heading">
        {expert.name}
      </h3>

      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
          <BookIcon />
          {expert.degree}
        </span>
      </div>

      <ul className="mt-5 space-y-3">
        {expert.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-text-body">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <PersonIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-text-muted">
        {expert.footer}
      </p>
    </article>
  )
}

function BookIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M2 2.5A1.5 1.5 0 0 1 3.5 1h9A1.5 1.5 0 0 1 14 2.5v10A1.5 1.5 0 0 1 12.5 14h-9A1.5 1.5 0 0 1 2 12.5v-10Zm1.5-.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5H8V2H3.5Zm5.5 0v11h3.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H9Z" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z" />
    </svg>
  )
}
