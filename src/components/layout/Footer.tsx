import Container from '../ui/Container'

const linkCols = [
  {
    title: 'Liên kết',
    links: [
      { label: 'Về AI 57', href: '#top' },
      { label: 'Lộ trình học', href: '#lo-trinh' },
      { label: 'Câu hỏi thường gặp', href: '#faq' },
    ],
  },
  {
    title: 'Đơn vị triển khai',
    items: ['ĐH Bách Khoa Hà Nội', 'Trung tâm Đổi mới Sáng tạo (NIC)', 'Hồng Lĩnh Education'],
  },
  {
    title: 'Liên hệ',
    items: [
      'Hotline: 099 696 3399',
      'Email: contact@ai57.edu.vn',
      'Địa chỉ: ĐH Bách Khoa Hà Nội',
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="inline-flex items-center">
              <img
                src="/logos/ai57.png"
                alt="AI 57 — The Master of AI"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/85">
              Chương trình đào tạo kỹ sư AI theo chuẩn thực hành, đồng hành cùng
              ĐH Bách Khoa Hà Nội và NIC — giúp học sinh Việt bước vào cuộc đua
              AI toàn cầu.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#top"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm"
                aria-label="Website"
              >
                🌐
              </a>
              <a
                href="mailto:contact@ai57.edu.vn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm"
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>

          {linkCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-extrabold tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/85">
                {'links' in col && col.links
                  ? col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="hover:text-white">
                          {link.label}
                        </a>
                      </li>
                    ))
                  : col.items?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-white/20 pt-5 text-center text-[11px] leading-relaxed tracking-wide text-white/70 uppercase sm:mt-10 sm:text-xs">
          © 2026 AI 57 Engineering Program. Developed by Hong Linh Education &
          HUST.
        </div>
      </Container>
    </footer>
  )
}
