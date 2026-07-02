import type { ReactNode } from 'react'
import { useRegistrationModal } from '../../context/RegistrationModalContext'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Giảng viên chuyên nghiệp',
    description: 'Học trực tiếp từ các chuyên gia đầu ngành Đại học Bách Khoa Hà Nội.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="2">
        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Lộ trình rõ ràng',
    description: 'Lộ trình được xây dựng chi tiết chuẩn theo hệ sinh thái NVIDIA.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Test năng lực miễn phí',
    description: 'Đánh giá chính xác nền tảng ban đầu để xếp lớp phù hợp.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Portfolio thực chiến',
    description:
      'Có mentor đồng hành, sản phẩm thực tế, Porfolio cá nhân thực chiến vào các doanh nghiệp.',
  },
]

function BenefitItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light shadow-[0_0_12px_rgba(0,86,210,0.2)]">
        {icon}
      </span>
      <div>
        <p className="font-bold text-gray-900">{title}</p>
        <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </li>
  )
}

export default function RegistrationInfo() {
  const { openRegistration } = useRegistrationModal()

  return (
    <div>
      <h2 className="text-xl font-extrabold uppercase tracking-wide text-primary-dark sm:text-2xl md:text-3xl">
        Đăng ký khóa học AI57
      </h2>

      <button
        type="button"
        onClick={openRegistration}
        className="mt-5 w-full rounded-2xl bg-primary px-6 py-4 text-left shadow-lg shadow-primary/30 transition hover:bg-primary-dark active:scale-[0.98] sm:w-auto sm:px-8"
      >
        <p className="text-xl font-extrabold uppercase tracking-wider text-white sm:text-2xl md:text-3xl">
          Đăng ký ngay
        </p>
        <p className="mt-1 text-sm italic text-white/90">
          Bắt đầu hành trình trở thành kỹ sư AI tương lai
        </p>
      </button>

      <p className="mt-6 max-w-md text-gray-600 leading-relaxed">
        Để lại thông tin, đội ngũ tư vấn AI57 sẽ liên hệ trong vòng 24h để tư vấn lộ trình học
        tập tối ưu nhất cho con.
      </p>

      <ul className="mt-8 space-y-6">
        {benefits.map((item) => (
          <BenefitItem key={item.title} {...item} />
        ))}
      </ul>
    </div>
  )
}
