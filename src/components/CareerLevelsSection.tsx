import { careerLevels } from '../data/landing'

export default function CareerLevelsSection() {
  return (
    <section id="career" className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-extrabold leading-snug text-white sm:text-3xl md:text-4xl">
          Những cánh cửa nghề nghiệp mở ra theo từng chặng
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {careerLevels.map((item) => (
            <article
              key={item.level}
              className="flex flex-col rounded-2xl bg-white p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1"
            >
              <span className="inline-flex w-fit rounded-md bg-primary-light px-2.5 py-1 text-[11px] font-bold tracking-wide text-primary">
                {item.level}
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.line1}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.line2}</p>
              <p className="mt-auto pt-6 text-sm font-semibold text-primary">{item.salary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
