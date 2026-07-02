import SectionTitle from './SectionTitle'
import LevelHeader from './LevelHeader'
import ModuleCard from './ModuleCard'
import { roadmapLevels } from '../data/roadmap'

function CircuitCorner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 30h30v15H25v25H10V30zm50 0h50v15H75v10H60V30zM10 70h15v40H10V70zm30 0h25v15H40V70z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle cx="40" cy="30" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="75" cy="45" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-gradient-to-b from-white via-primary-light/20 to-white py-12 sm:py-16 md:py-20"
    >
      <CircuitCorner className="pointer-events-none absolute left-0 top-8 h-28 w-28 text-primary/25" />
      <CircuitCorner className="pointer-events-none absolute right-0 top-8 h-28 w-28 -scale-x-100 text-primary/25" />

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        <SectionTitle
          title="LỘ TRÌNH ĐÀO TẠO"
          subtitle="6 Bước làm chủ Trí tuệ nhân tạo"
          className="mb-10 sm:mb-14"
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[23px] top-0 w-0.5 bg-primary/30 md:left-[27px]" />

          <div className="space-y-10 sm:space-y-14">
            {roadmapLevels.map((level) => (
              <div key={level.letter} className="relative">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-xl font-extrabold text-white shadow-md md:h-14 md:w-14">
                    {level.letter}
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <LevelHeader title={level.title} subtitle={level.subtitle} />

                    <div className="mt-8 space-y-10">
                      {level.modules.map((mod) => (
                        <div key={mod.title} className="pb-2">
                          <ModuleCard module={mod} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-center text-sm italic text-gray-400">
          Lệ phí đăng ký trên là phí trọn gói, không phát sinh thêm bất kỳ chi phí nào khác.
        </p>
      </div>
    </section>
  )
}
