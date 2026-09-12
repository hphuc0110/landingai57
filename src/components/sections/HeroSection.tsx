import Button from '../ui/Button'
import Container from '../ui/Container'
import VietnamNetworkGraphic from '../graphics/VietnamNetworkGraphic'

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20"
    >
      <Container className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10 mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
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
              xây dựng với sự đồng hành của Đại học Bách Khoa Hà Nội và Trung
              tâm Đổi mới sáng tạo Quốc gia (NIC), giúp học sinh nắm vững nền
              tảng và tự tay xây sản phẩm AI hoàn chỉnh.
            </p>
            <p className="sm:hidden">
              Lộ trình 6 module từ Python đến Generative AI/LLM, đồng hành cùng
              ĐH Bách Khoa Hà Nội và NIC — giúp học sinh tự tay xây sản phẩm AI
              hoàn chỉnh.
            </p>
          </div>
          <Button
            href="#dang-ky"
            className="mt-7 !w-full !rounded-xl !px-7 !py-3.5 !text-sm sm:mt-8 sm:!w-auto"
          >
            Đăng ký giữ chỗ
          </Button>
        </div>

        <div className="pointer-events-none relative mx-auto h-44 w-full max-w-sm opacity-80 sm:h-56 lg:hidden">
          <VietnamNetworkGraphic className="h-full w-full" />
        </div>

        <div className="pointer-events-none relative hidden min-h-[320px] lg:block">
          <VietnamNetworkGraphic className="absolute inset-0 h-full w-full opacity-90" />
        </div>
      </Container>

      <div className="pointer-events-none absolute top-8 right-0 hidden h-[420px] w-[55%] opacity-40 lg:block">
        <VietnamNetworkGraphic className="h-full w-full" />
      </div>
    </section>
  )
}
