type BenefitCardProps = {
  number: string
  title: string
  body: string
  footer: string
}

export default function BenefitCard({
  number,
  title,
  body,
  footer,
}: BenefitCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:p-6">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-soft text-sm font-bold text-brand">
        {number}
      </span>
      <h3 className="mt-4 text-[15px] font-bold leading-snug text-text-heading">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-body">{body}</p>
      <div className="mt-5 border-t border-slate-100 pt-3">
        <p className="text-xs font-semibold text-text-muted">{footer}</p>
      </div>
    </article>
  )
}
