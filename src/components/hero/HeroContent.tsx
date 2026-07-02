import CtaButton from '../CtaButton'
import FeatureBadges from './FeatureBadges'

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <span className="inline-block max-w-full rounded-full bg-primary-light px-3 py-1.5 text-[9px] font-bold uppercase leading-snug tracking-wide text-gray-900 sm:px-4 sm:py-2 sm:text-[11px]">
        Chuẩn đào tạo NVIDIA · Giảng dạy bởi Đại học Bách Khoa Hà Nội
      </span>

      <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="text-hero-navy">AI</span>
        <span className="text-card-end">57</span>
      </h1>

      <p className="mt-3 text-lg font-medium text-gray-900 sm:mt-4 sm:text-xl md:text-2xl">
        Chương trình ươm mầm
      </p>
      <p className="mt-1 text-lg text-gray-900 sm:text-xl md:text-2xl">
        <span className="font-extrabold italic text-primary">KỸ SƯ AI</span> cho học sinh cấp 2 &amp; 3
      </p>

      <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base">
        Xây nền tảng AI bài bản theo chuẩn hệ sinh thái NVIDIA: học thật, làm sản phẩm thật, có
        portfolio thật – không chỉ &lsquo;biết dùng&rsquo; AI mà hiểu và tự xây hệ thống AI.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
        <CtaButton
          openRegistrationForm
          className="w-full !rounded-xl !px-6 !py-3.5 !text-sm !shadow-lg sm:w-auto sm:!px-7"
        >
          Đăng ký tư vấn miễn phí
        </CtaButton>
        <CtaButton
          href="#roadmap"
          variant="neutral"
          className="w-full !rounded-xl !px-6 !py-3.5 !text-sm !font-semibold !normal-case !tracking-normal sm:w-auto sm:!px-7"
        >
          Khám phá lộ trình
        </CtaButton>
      </div>

      <FeatureBadges />
    </div>
  )
}
