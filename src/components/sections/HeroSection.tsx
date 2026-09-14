import Button from '../ui/Button'
import Container from '../ui/Container'
import { useRegistrationModal } from '../../context/RegistrationModalContext'

export default function HeroSection() {
  const { openRegistration } = useRegistrationModal()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-14"
    >
      {/* Mobile: faded map behind text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
      >
        <img
          src="/images/hero-map.png"
          alt=""
          className="hero-map-fade absolute left-1/2 top-1/2 h-auto w-[min(100%,420px)] -translate-x-1/2 -translate-y-1/2 object-contain opacity-30"
        />
      </div>

      <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10 lg:min-h-[480px]">
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:py-12 lg:text-left">
          <h1 className="text-[1.65rem] font-extrabold leading-tight text-brand sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            AI57 - Chương trình đào tạo kỹ sư AI toàn năng
          </h1>
          <div className="mt-5 space-y-3.5 text-[14px] leading-relaxed text-text-body sm:mt-6 sm:space-y-4 sm:text-[15px] lg:text-base">
            <p>
              Cuộc đua AI toàn cầu đang diễn ra từng ngày, và Việt Nam đang nổi
              lên là điểm đầu tư hạ tầng AI hàng đầu Đông Nam Á. AI57 ra đời để
              đào tạo thế hệ kỹ sư AI Việt đầu tiên bước vào cuộc đua đó.
            </p>
            <p className="hidden sm:block">
              Với lộ trình 6 module xuyên suốt — từ Python, Machine Learning,
              Deep Learning, Computer Vision đến Generative AI/LLM — AI57 được
              xây dựng với đội ngũ chuyên gia giàu kinh nghiệm, giúp học sinh nắm vững nền
              tảng và tự tay xây sản phẩm AI hoàn chỉnh.
            </p>
            <p className="sm:hidden">
              Lộ trình 6 module từ Python đến Generative AI/LLM, đồng hành cùng
              Đại học Bách Khoa Hà Nội và NIC — giúp học sinh tự tay xây sản phẩm AI
              hoàn chỉnh.
            </p>
          </div>
          <Button
            onClick={openRegistration}
            className="mt-7 !w-full !rounded-xl !px-7 !py-3.5 !text-sm sm:mt-8 sm:!w-auto"
          >
            Đăng ký giữ chỗ
          </Button>
        </div>

        {/* Desktop: map beside text */}
        <div className="pointer-events-none relative mx-auto hidden w-full max-w-[420px] lg:block lg:justify-self-end">
          <img
            src="/images/hero-map.png"
            alt=""
            aria-hidden="true"
            className="hero-map-fade h-auto w-full object-contain"
          />
        </div>
      </Container>
    </section>
  )
}
