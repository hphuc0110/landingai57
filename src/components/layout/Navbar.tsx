import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'

const navLinks = [
  { href: '#lo-trinh', label: 'Lộ trình học', active: true },
  { href: '#uu-dai', label: 'Ưu đãi', active: false },
  { href: '#dang-ky', label: 'Lịch khai giảng', active: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)]">
      <Container className="flex h-14 items-center justify-between gap-3 sm:h-[72px] sm:gap-4">
        <a href="#top" className="flex shrink-0 items-center" onClick={closeMenu}>
          <img
            src="/logos/ai57.png"
            alt="AI 57 — The Master of AI"
            className="h-9 w-auto object-contain sm:h-11"
          />
        </a>

        <nav className="hidden items-center rounded-full bg-[#f3f5f9] px-2 py-1.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-slate-700 transition hover:text-brand"
            >
              {link.active && (
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="#dang-ky"
            variant="outline"
            className="hidden !px-4 !py-2 !text-xs lg:inline-flex"
          >
            Tư vấn miễn phí
          </Button>
          <Button
            href="#dang-ky"
            className="!px-3 !py-2 !text-[11px] sm:!px-4 sm:!text-xs"
          >
            Đăng ký giữ chỗ
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-soft hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#dang-ky"
              onClick={closeMenu}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-[#c5d4f5] bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand"
            >
              Tư vấn miễn phí
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  )
}
