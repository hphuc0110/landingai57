import { useState } from 'react'
import { faqItems } from '../../data/faq'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'

const PREVIEW_COUNT = 4

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>('01')
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? faqItems : faqItems.slice(0, PREVIEW_COUNT)

  return (
    <section id="faq" className="bg-white py-10 sm:py-16">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Badge className="!rounded-md">Giải đáp thắc mắc</Badge>
          <h2 className="mt-4 text-xl font-extrabold text-text-heading sm:text-3xl">
            Phụ huynh thường hỏi gì?
          </h2>
          <p className="mt-3 text-sm text-text-muted sm:text-base">
            Những thông tin cốt lõi giúp quý phụ huynh an tâm lựa chọn chương
            trình phù hợp nhất cho con.
          </p>
        </div>

        <div className="mt-6 space-y-3 sm:mt-8">
          {visible.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-brand-muted bg-white transition hover:border-brand hover:bg-brand"
              >
                <button
                  type="button"
                  className="flex w-full items-start gap-2.5 px-3 py-3.5 text-left sm:items-center sm:gap-3 sm:px-4"
                  onClick={() => setOpenId(isOpen ? '' : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white group-hover:bg-white group-hover:text-brand">
                    {item.id}
                  </span>
                  <span className="min-w-0 flex-1 text-[13px] font-bold leading-snug text-brand sm:text-[15px] group-hover:text-white">
                    {item.question}
                  </span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand text-sm text-brand group-hover:border-white/60 group-hover:text-white">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-brand-muted px-3 pb-4 text-sm leading-relaxed text-text-heading sm:px-4 sm:pl-[3.25rem] group-hover:border-white/25 group-hover:text-white">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {faqItems.length > PREVIEW_COUNT && (
          <div className="mt-6 flex justify-center">
            <Button
              className="!w-full !rounded-lg !px-8 sm:!w-auto"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? 'Thu gọn' : 'Xem thêm'}
            </Button>
          </div>
        )}

        <div className="mt-8 flex flex-col items-stretch gap-3 rounded-2xl border border-brand-muted bg-brand-tint px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
          <div className="flex items-start gap-3 sm:items-center">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
              ?
            </span>
            <p className="text-sm font-semibold text-brand sm:text-[15px]">
              Phụ huynh còn câu hỏi riêng về trình độ hiện tại của con?
            </p>
          </div>
          <a
            href="tel:0996963399"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-brand-dark px-4 py-3 text-sm font-bold text-white transition hover:bg-brand sm:py-2.5"
          >
            <span className="sm:hidden">Gọi: 099 696 3399</span>
            <span className="hidden sm:inline">
              Gọi trực tiếp chuyên gia: 099 696 3399
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}
