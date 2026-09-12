import { useState, type FormEvent } from 'react'
import CtaButton from './CtaButton'
import { useRegistrationModal } from '../context/RegistrationModalContext'

export default function EnrollCtaSection() {
  const { openRegistration } = useRegistrationModal()
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    openRegistration()
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl lg:grid-cols-2">
          <div className="bg-primary px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12">
            <p className="text-sm font-medium text-white/70">Tham gia khóa học ngay</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug sm:text-3xl">
              Lớp MD2-1 khai giảng 18/07/2026
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
              Để lại email để nhận tư vấn lộ trình phù hợp và thông tin lịch khai giảng sớm nhất.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 rounded-full bg-white p-1.5 sm:flex-row sm:items-center"
            >
              <label htmlFor="enroll-email" className="sr-only">
                Email
              </label>
              <input
                id="enroll-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Nhập địa chỉ email của bạn"
                className="min-h-[44px] flex-1 rounded-full px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="min-h-[44px] shrink-0 rounded-full bg-primary px-6 text-sm font-bold text-white transition hover:bg-primary-dark"
              >
                Đăng ký
              </button>
            </form>

            <div className="mt-5">
              <CtaButton
                openRegistrationForm
                variant="outline"
                className="!rounded-full !border-white/40 !bg-white/15 !px-6 !py-3 !text-sm !normal-case !tracking-normal hover:!bg-white/25"
              >
                Xem toàn bộ lịch khai giảng
              </CtaButton>
            </div>
          </div>

          <div className="min-h-[280px] bg-gray-100 lg:min-h-full">
            <img
              src="/baochung/mou.jpg"
              alt="Buổi khai giảng và hợp tác chương trình AI57"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
