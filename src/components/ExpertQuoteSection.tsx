export default function ExpertQuoteSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[18px] border-[5px] border-primary bg-primary p-1 shadow-lg lg:mx-0 lg:max-w-none">
            <img
              src="/long.jpg"
              alt="Chuyên gia Nguyễn Đức Long"
              className="aspect-[3/4] w-full rounded-[14px] object-cover object-top"
            />
          </div>

          <blockquote className="relative">
            <span
              className="pointer-events-none absolute -top-3 -left-1 select-none text-4xl leading-none text-primary/20 sm:text-5xl"
              aria-hidden
            >
              “
            </span>
            <p className="relative text-sm leading-relaxed text-gray-700 italic sm:text-[15px]">
              AI đang định hình lại thế giới với tốc độ chưa từng có. Trang bị kiến thức AI từ gốc rễ ngay hôm nay là <br /> cách duy nhất để con làm chủ tương lai. AI57 không chỉ là một khóa
              học, đây là bước khởi đầu cho <br /> hành trình 30 năm sự nghiệp của con.
            </p>
            <footer className="mt-5 border-t border-primary/20 pt-4 sm:mt-6">
              <cite className="not-italic">
                <span className="block text-sm font-bold text-hero-navy sm:text-base">
                  Thạc sĩ Nguyễn Đức Long
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-gray-600 sm:text-[13px]">
                  Tổng Giám đốc Học viện AIUni · Nguyên Chánh Văn phòng Quỹ Giáo dục Việt Nam · Chủ
                  tịch Hội đồng Cố vấn Chuyên môn AI57
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
