import { useEffect, useMemo, useState } from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'
import { useRegistrationModal } from '../../context/RegistrationModalContext'

const TARGET = new Date('2026-09-21T00:00:00+07:00').getTime()

function getRemaining(now: number) {
  const diff = Math.max(0, TARGET - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function OfferCountdownSection() {
  const [now, setNow] = useState(() => Date.now())
  const remaining = useMemo(() => getRemaining(now), [now])
  const { openRegistration } = useRegistrationModal()

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const units = [
    { value: remaining.days, label: 'Ngày' },
    { value: remaining.hours, label: 'Giờ' },
    { value: remaining.minutes, label: 'Phút' },
    { value: remaining.seconds, label: 'Giây' },
  ]

  return (
    <section id="uu-dai" className="bg-white py-10 sm:py-16">
      <Container>
        <div className="rounded-2xl bg-brand px-4 py-8 text-center text-white shadow-[0_20px_60px_rgba(30,95,242,0.35)] sm:rounded-3xl sm:px-10 sm:py-12">
          <Badge variant="solid" className="!rounded-full !px-3 !text-[10px] sm:!px-4 sm:!text-xs">
            Suất ưu đãi — số lượng có hạn
          </Badge>

          <h2 className="mt-4 text-xl font-extrabold tracking-wide uppercase sm:mt-5 sm:text-3xl lg:text-4xl">
            Khai giảng 21/09 — ưu đãi đăng ký sớm
          </h2>
          <p className="mt-3 text-sm text-white/90 sm:text-base">
            Thời gian áp dụng chính sách ưu đãi giảm học phí đang đếm ngược:
          </p>

          <div className="mt-6 grid grid-cols-4 gap-1.5 sm:mt-8 sm:flex sm:items-center sm:justify-center sm:gap-3">
            {units.map((unit, index) => (
              <div
                key={unit.label}
                className="flex items-center justify-center gap-1.5 sm:gap-3"
              >
                <div className="flex w-full min-w-0 flex-col items-center rounded-xl border border-white/30 bg-[#5b8cff]/40 px-1.5 py-2.5 sm:min-w-[80px] sm:px-4 sm:py-3">
                  <span className="text-xl font-extrabold tabular-nums sm:text-3xl">
                    {pad(unit.value)}
                  </span>
                  <span className="mt-0.5 text-[10px] text-white/90 sm:mt-1 sm:text-[11px]">
                    {unit.label}
                  </span>
                </div>
                {index < units.length - 1 && (
                  <span className="hidden text-xl font-bold text-white/80 sm:inline">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-xl rounded-2xl bg-[#0b3db8]/45 px-4 py-3.5 text-left sm:mt-8 sm:px-5 sm:py-4">
            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Giảm 15% học phí khi đăng ký giữ chỗ sớm</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckIcon />
                <span>Suất ưu đãi cho chương trình — Số lượng có hạn</span>
              </li>
            </ul>
          </div>

          <Button
            onClick={openRegistration}
            variant="white"
            className="mt-6 !w-full !rounded-xl !px-8 !py-3.5 !text-sm sm:mt-8 sm:!w-auto"
          >
            Giữ ưu đãi 15% ngay
          </Button>
        </div>
      </Container>
    </section>
  )
}

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/70 text-[10px]">
      ✓
    </span>
  )
}
