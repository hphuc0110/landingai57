const outcomes = [
  {
    title: 'Bệ phóng sự nghiệp từ sớm',
    description:
      'Trang bị đầy đủ kiến thức và kỹ năng thực hành để ứng tuyển thẳng vào vị trí Thực tập sinh tại các doanh nghiệp công nghệ lớn như: Viettel, VinGroup, FPT,...',
  },
  {
    title: 'Hồ sơ năng lực thực chiến (Portfolio)',
    description:
      'Sở hữu tài khoản GitHub chuyên nghiệp chứa ít nhất 06 sản phẩm thực tế (Dự án tốt nghiệp - Capstone Project ứng dụng AI chạy thực tế).',
  },
  {
    title: 'Tư duy dự án & Nghiên cứu thực tế',
    description:
      'Thành thạo quy trình làm việc nhóm chuẩn Agile/Scrum của các kỹ sư công nghệ. Đặc biệt, học sinh có cơ hội tham gia với vai trò Trợ lý nghiên cứu, hỗ trợ các Giáo sư, Tiến sĩ cho các bài báo khoa học chuyên ngành.',
  },
]

export default function HeroOutcomes() {
  return (
    <div className="mt-8 sm:mt-10">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-primary sm:text-base">
        Đầu ra toàn khoá
      </h2>

      <ul className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
        {outcomes.map((item, index) => (
          <li key={item.title} className="flex gap-3 sm:gap-4">
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-hero-navy text-xs font-bold text-white"
              aria-hidden
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-sm font-bold text-gray-900 sm:text-base">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
