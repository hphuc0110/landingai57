import { deployPartners, footerLinks } from '../data/landing'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-6 md:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logoamban.png"
              alt="AI57"
              className="h-12 w-auto rounded-lg object-contain"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Chương trình ươm mầm kỹ sư AI cho học sinh THCS &amp; THPT — chuẩn thực chiến, lộ trình
              rõ ràng, đồng hành bởi các đơn vị đầu ngành.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/AI57uommamkysuAIVN"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-bold transition hover:bg-white/25"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="mailto:support@honglinheducation.vn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm transition hover:bg-white/25"
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider">Liên kết</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/80 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider">Đơn vị triển khai</p>
            <ul className="mt-4 space-y-2.5">
              {deployPartners.map((name) => (
                <li key={name} className="text-sm text-white/80">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wider">Liên hệ</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                Email:{' '}
                <a href="mailto:support@honglinheducation.vn" className="hover:text-white">
                  support@honglinheducation.vn
                </a>
              </li>
              <li>
                Hotline:{' '}
                <a href="tel:+84996963399" className="hover:text-white">
                  +84 99 696 33 99
                </a>
              </li>
              <li>Địa chỉ: Số 1 Ngụy Như Kon Tum, Thanh Xuân, Hà Nội</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-center text-xs text-white/60">
            © 2026 AI57 Engineering Program. Developed by Hồng Lĩnh Education &amp; HUST
          </p>
        </div>
      </div>
    </footer>
  )
}
