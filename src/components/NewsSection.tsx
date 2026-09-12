import { newsItems } from '../data/landing'

export default function NewsSection() {
  return (
    <section id="news" className="bg-primary-soft/40 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-text-muted">Tin tức mới nhất</p>
          <h2 className="mt-2 text-2xl font-extrabold text-primary sm:text-3xl md:text-4xl">
            Câu chuyện mới nhất từ AI57
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_28px_rgba(0,86,210,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,86,210,0.12)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-text-muted">
                  {item.category} | {item.readTime}
                </p>
                <h3 className="mt-3 text-base font-bold leading-snug text-gray-900">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
