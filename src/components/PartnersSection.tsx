import BrandLogo from './BrandLogo'
import { partnerBrands } from '../data/logos'

export default function PartnersSection() {
  return (
    <section className="bg-gradient-to-b from-primary-light/50 via-white to-primary-light/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
          Được bảo chứng bởi các đơn vị đầu ngành
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          AI57 là dự án thuộc khuôn khổ Học viện AI cho Việt Nam - chương trình đào tạo nhân lực
          AI do Hồng Lĩnh Education, Đại học Bách khoa Hà Nội và Trung tâm Đổi mới sáng tạo Quốc
          gia phối hợp triển khai.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {partnerBrands.map((partner) => (
            <div key={partner.key} className="flex flex-col items-center text-center">
              <div className="w-full overflow-hidden rounded-xl border-2 border-white shadow-md">
                <img
                  src={partner.image}
                  alt={partner.imageAlt}
                  className="aspect-video w-full object-cover"
                />
              </div>

              <BrandLogo
                brand={partner.key}
                alt={partner.name}
                className="mt-6 h-16 w-auto max-w-[200px] object-contain md:h-20"
              />

              <p className="mt-4 text-sm font-bold uppercase leading-snug tracking-wide text-gray-900">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
