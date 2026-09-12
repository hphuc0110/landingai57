import CtaButton from './CtaButton'
import { staircaseSteps } from '../data/landing'

const barHeights = ['min-h-[220px]', 'min-h-[280px]', 'min-h-[340px]', 'min-h-[400px]']
const barColors = ['bg-[#4d8fe8]', 'bg-[#2f74d8]', 'bg-[#1a62cc]', 'bg-primary']

export default function StaircaseRoadmapSection() {
  return (
    <section id="roadmap" className="bg-primary-soft/60 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl md:text-4xl">
            Hành trình 30 năm bắt đầu với một lộ trình rõ ràng
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-body sm:text-base">
            Từ làm quen AI đến xây sản phẩm thật — mỗi bước đều có mục tiêu, kỹ năng và đầu ra cụ thể.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 md:mt-16 md:flex-row md:items-end md:gap-3 lg:gap-4">
          {staircaseSteps.map((step, index) => (
            <article
              key={step.title}
              className={`flex flex-1 flex-col justify-end rounded-2xl ${barColors[index]} ${barHeights[index]} p-5 text-white shadow-lg shadow-primary/20 md:p-6`}
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold leading-snug">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <CtaButton
            href="#career"
            variant="secondary"
            className="!rounded-full !px-7 !py-3 !text-sm !normal-case !tracking-normal !shadow-none"
          >
            Xem chi tiết lộ trình học tập toàn diện
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
