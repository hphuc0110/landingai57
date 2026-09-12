import CtaButton from './CtaButton'

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-primary-soft via-primary-light/40 to-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,86,210,0.08),_transparent_55%)]" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-12 sm:py-16 md:px-6 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
            AI57 - Chương trình ươm mầm kỹ sư AI cho học sinh THCS &amp; THPT
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-text-body sm:text-base">
            AI57 được thiết kế dành riêng cho học sinh có định hướng Công nghệ thông tin, Trí tuệ
            nhân tạo và Khoa học dữ liệu. Chương trình kết hợp chuẩn đào tạo thực chiến, đội ngũ
            chuyên gia và lộ trình phát triển rõ ràng — giúp học sinh bắt đầu hành trình trở thành
            kỹ sư AI từ sớm.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaButton
              href="#program"
              className="!rounded-full !px-6 !py-3 !text-sm !normal-case !tracking-normal"
            >
              Khám phá chương trình ngay
            </CtaButton>
            <CtaButton
              openRegistrationForm
              variant="secondary"
              className="!rounded-full !px-6 !py-3 !text-sm !normal-case !tracking-normal !shadow-none"
            >
              Kết nối tư vấn
            </CtaButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/5 blur-2xl" aria-hidden />
          <img
            src="/images/hero-collage.png"
            alt="Học sinh AI57 tại phòng lab, lễ khai giảng và buổi học thực hành"
            className="relative h-auto w-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
