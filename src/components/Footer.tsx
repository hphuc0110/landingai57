import type { LogoKey } from '../data/logos'

const footerLinks = [
  { label: 'Về AI57', href: '#about' },
  { label: 'Lộ trình học', href: '#roadmap' },
  { label: 'Câu hỏi thường gặp', href: '#faq' },
]

const deployPartners: { name: string; logo?: LogoKey }[] = [
  { name: 'Đại học Bách Khoa Hà Nội' },
  { name: 'Trung tâm Đổi mới sáng tạo (NIC)', logo: 'nic' },
  { name: 'Hồng Lĩnh Education', logo: 'hle' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <img src="/images/logoamban.png" alt="AI57" className="h-12 w-auto rounded-lg bg-black/30 object-contain p-1" />
            <p className="mt-3 text-sm text-white/80 leading-relaxed">
              Chương trình ươm mầm Kỹ Sư AI cho học sinh cấp 2 &amp; 3 — chuẩn NVIDIA, giảng dạy
              bởi Đại học Bách Khoa Hà Nội.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/AI57uommamkysuAIVN"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm hover:bg-white/30"
              >
                f
              </a>
              <a
                href="support@honglinheducation.vn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm hover:bg-white/30"
              >
                ✉
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider">Liên kết</p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider">Đơn vị triển khai</p>
            <ul className="mt-4 space-y-3">
              {deployPartners.map((p) => (
                <li key={p.name} className="flex items-center gap-2.5 text-sm text-white/80">
                  <span>{p.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider">Liên hệ</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Hotline: <a href="tel:+84996963399">+84 99 696 33 99</a></li>
              <li>Email: <a href="mailto:support@honglinheducation.vn">support@honglinheducation.vn</a></li>
              <li>Địa chỉ: Số 1 Ngụy Như, Kon Tum, Thanh Xuân, Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/20 pt-6">
          <p className="text-center text-xs text-white/60">
            © 2026 AI57 ENGINEERING PROGRAM. DEVELOPED BY Hồng Lĩnh Education &amp; HUST
          </p>
        </div>
      </div>
    </footer>
  )
}
