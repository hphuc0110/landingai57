import { useState } from 'react'
import { useRegistrationModal } from '../context/RegistrationModalContext'
import { faqItems } from '../data/faq'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set())
  const { openRegistration } = useRegistrationModal()

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section id="faq" className="bg-primary-light/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-primary-dark sm:text-3xl">Hỏi đáp thường gặp</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Tìm câu trả lời cho những thắc mắc phổ biến về chương trình AI57. Nếu bạn cần hỗ trợ
              thêm, đừng ngần ngại liên hệ với chúng tôi.
            </p>
            <button
              type="button"
              onClick={openRegistration}
              className="mt-6 min-h-[44px] w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-primary-dark active:scale-[0.98] sm:w-auto"
            >
              Liên hệ tư vấn ngay →
            </button>
          </div>

          <div className="space-y-3 lg:col-span-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndices.has(index)
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className={`flex w-full min-h-[52px] items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold transition sm:px-5 ${
                      isOpen
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {item.question}
                    <ChevronIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="bg-white px-5 py-4 text-sm text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
