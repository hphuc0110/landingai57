import { testimonials } from '../data/testimonials'

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-primary">
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-primary-light/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-primary-dark">
            Học sinh &amp; phụ huynh nói gì?
          </h2>
          <p className="mt-2 text-gray-500">
            Câu chuyện thật từ những người đã trải nghiệm AI57
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <StarRating />
              <p className="mt-4 text-sm italic text-gray-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
