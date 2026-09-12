import Container from '../ui/Container'

export default function ExpertQuoteSection() {
  return (
    <section className="bg-brand-tint py-10 sm:py-16">
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border-[5px] border-brand bg-brand p-1 shadow-[0_12px_40px_rgba(30,95,242,0.18)] lg:mx-0 lg:max-w-none">
            <img
              src="/images/han-huy-dung.png"
              alt="Tiến sĩ Hàn Huy Dũng"
              className="aspect-[3/4] w-full rounded-[14px] object-cover object-top"
            />
          </div>

          <blockquote className="relative">
            <span
              className="pointer-events-none absolute -top-3 -left-1 select-none text-5xl leading-none text-brand/25 sm:text-6xl"
              aria-hidden
            >
              “
            </span>
            <p className="relative text-[15px] leading-relaxed text-text-body italic sm:text-base">
              AI đang định hình lại thế giới với tốc độ chưa từng có. Trang bị
              kiến thức AI từ gốc rễ ngay hôm nay là cách duy nhất để con làm chủ
              tương lai. AI57 không chỉ là một khóa học, đây là bước khởi đầu cho
              hành trình 30 năm sự nghiệp của con.
            </p>

            <footer className="mt-5 border-t border-brand/20 pt-4 sm:mt-6">
              <cite className="not-italic">
                <span className="block text-base font-bold text-text-heading sm:text-lg">
                  Tiến sĩ Hàn Huy Dũng
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-text-body">
                  Giảng viên, Phó trưởng bộ môn, nghiên cứu viên tại Viện Điện tử
                  - Viễn thông, Đại học Bách khoa Hà Nội.
                </span>
              </cite>

              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-muted">
                <li>
                  Hơn 20 năm nghiên cứu và giảng dạy trong lĩnh vực xử lý tín
                  hiệu, truyền thông không dây và AI.
                </li>
                <li>
                  <span className="font-semibold text-text-body">
                    Nghiên cứu &amp; công bố quốc tế:
                  </span>{' '}
                  Tác giả/đồng tác giả nhiều công trình về truyền thông không dây
                  và xử lý tín hiệu, trong đó có các công bố trên IEEE Access
                  (Q1).
                </li>
                <li>
                  <span className="font-semibold text-text-body">
                    Ứng dụng AI thực tiễn:
                  </span>{' '}
                  Dẫn dắt các dự án về IoT, hệ thống nhúng, AI trong y sinh và
                  môi trường, tiêu biểu như thiết bị đo điện tâm đồ thai nhi
                  không tiếp xúc và hệ thống theo dõi sức khỏe từ xa.
                </li>
              </ul>
            </footer>
          </blockquote>
        </div>
      </Container>
    </section>
  )
}
