import { useRegistrationModal } from '../../context/RegistrationModalContext'
import RegistrationFormPanel from './RegistrationFormPanel'

export default function RegistrationModal() {
  const { isOpen, closeRegistration } = useRegistrationModal()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={closeRegistration}
        aria-label="Đóng form đăng ký"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-modal-title"
        className="relative z-10 flex w-full max-h-[92dvh] flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-lg sm:rounded-2xl"
      >
        <div className="shrink-0 border-b border-slate-100 px-4 pb-3 pt-3 sm:px-6 sm:pb-4 sm:pt-4">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-300 sm:hidden" />
          <div className="flex items-center justify-between gap-3">
            <h2
              id="registration-modal-title"
              className="text-lg font-extrabold text-text-heading"
            >
              Đăng ký giữ chỗ AI57
            </h2>
            <button
              type="button"
              onClick={closeRegistration}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl text-slate-500 transition hover:bg-slate-100"
              aria-label="Đóng"
            >
              ×
            </button>
          </div>
          <p className="mt-1 text-sm text-text-muted">
            Để lại thông tin, đội ngũ cố vấn sẽ liên hệ sớm nhất.
          </p>
        </div>

        <div className="overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pb-8">
          <RegistrationFormPanel />
        </div>
      </div>
    </div>
  )
}
