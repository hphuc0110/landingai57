import BrandLogo from './BrandLogo'
import { partners } from '../data/landing'

export default function PartnersSection() {
  return (
    <section id="program" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 text-center md:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
          Chương trình được xây dựng bởi{' '}
          <span className="text-primary">ba nhà</span>: nhà trường, nhà sáng tạo và nhà triển khai
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-body sm:text-base">
          AI57 là sự kết hợp giữa chuyên môn học thuật, hệ sinh thái đổi mới sáng tạo và năng lực
          triển khai đào tạo thực tế cho học sinh.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {partners.map((partner) => (
            <article
              key={partner.key}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-6 py-8 text-center shadow-[0_8px_30px_rgba(0,86,210,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,86,210,0.1)]"
            >
              <div className="flex h-20 w-full items-center justify-center">
                <BrandLogo
                  brand={partner.key}
                  alt={partner.name}
                  className="h-16 w-auto max-w-[180px] object-contain"
                />
              </div>
              <h3 className="mt-5 text-base font-bold text-gray-900">{partner.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{partner.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
