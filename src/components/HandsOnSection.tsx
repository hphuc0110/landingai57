import CtaButton from './CtaButton'

export default function HandsOnSection() {
  return (
    <section id="team" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-sm font-medium text-text-muted">Học cùng chuyên gia</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-primary sm:text-3xl md:text-4xl">
            Không chỉ học lý thuyết, mà thực sự bắt tay vào làm
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-text-body sm:text-base">
            Học viên được hướng dẫn bởi đội ngũ có kinh nghiệm thực tế — từ bài tập lab, dự án nhóm
            đến demo sản phẩm. Mỗi module đều gắn với kỹ năng có thể mang theo vào học tập và nghề
            nghiệp tương lai.
          </p>
          <div className="mt-8">
            <CtaButton
              href="#roadmap"
              className="!rounded-full !px-6 !py-3 !text-sm !normal-case !tracking-normal"
            >
              Tìm hiểu lộ trình học ngay
            </CtaButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
          <img
            src="/why/coding.png"
            alt="Học viên AI57 thực hành lập trình và làm dự án"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
