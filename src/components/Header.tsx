import { useState } from 'react'
import CtaButton from './CtaButton'
import BrandLogo from './BrandLogo'

const navLinks = [
  { href: '#about', label: 'VỀ AI57' },
  { href: '#roadmap', label: 'LỘ TRÌNH' },
  { href: '#faq', label: 'FAQ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-white/90 backdrop-blur-md supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 md:px-6">
        <a href="#about" className="flex min-w-0 items-center gap-1.5 sm:gap-2.5 md:gap-3">
          <BrandLogo
            brand="hle"
            alt="Hồng Lĩnh Education"
            className="h-7 w-7 shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <BrandLogo
            brand="hust"
            alt="Đại học Bách Khoa Hà Nội"
            className="hidden h-9 w-auto shrink-0 object-contain sm:block"
          />
          <BrandLogo
            brand="ai57"
            alt="AI57"
            className="h-8 w-auto shrink-0 object-contain sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <CtaButton
            openRegistrationForm
            className="!px-3 !py-2 !text-[10px] sm:!px-5 sm:!py-2.5 sm:!text-xs"
          >
            Đăng ký ngay
          </CtaButton>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-primary/10 bg-white px-3 py-2 sm:px-4 md:hidden">
          <ul className="space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-gray-700 transition hover:bg-primary-light hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
