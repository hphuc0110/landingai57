import { createPortal } from 'react-dom'
import CtaButton from './CtaButton'

export default function StickyRegisterBar() {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))] pr-[max(1rem,env(safe-area-inset-right))]"
      role="region"
      aria-label="Đăng ký nhanh"
    >
      <CtaButton
        openRegistrationForm
        className="pointer-events-auto min-w-[9.5rem] rounded-full! px-5! py-3.5! text-xs! shadow-2xl! ring-2! ring-white/90! sm:min-w-0 sm:px-6! sm:text-sm!"
      >
        Đăng ký ngay
      </CtaButton>
    </div>,
    document.body,
  )
}
