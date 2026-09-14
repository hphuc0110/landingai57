import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { useRegistrationModal } from '../../context/RegistrationModalContext'

const navLinks = [
  { href: '#lo-trinh', label: 'Lộ trình học', active: true },
  { href: '#uu-dai', label: 'Ưu đãi', active: false },
  { href: '#dang-ky', label: 'Lịch khai giảng', active: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { openRegistration } = useRegistrationModal()

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

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <div className="hidden lg:block">
            </div>
            <Button
              onClick={openRegistration}
              className="!px-4 !py-2 !text-xs whitespace-nowrap"
            >
              Đăng ký giữ chỗ
            </Button>
          </div>
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
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  closeMenu()
                  openRegistration()
                }}
                className="w-full !py-3"
              >
                Tư vấn miễn phí
              </Button>
              <Button
                onClick={() => {
                  closeMenu()
                  openRegistration()
                }}
                className="w-full !py-3"
              >
                Đăng ký giữ chỗ
              </Button>
            </div>
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
