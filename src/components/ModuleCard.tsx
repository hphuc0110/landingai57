import type { ModuleData } from '../data/roadmap'

interface ModuleCardProps {
  module: ModuleData
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <div className="relative rounded-[20px] bg-[#3a9fd9] p-4 pb-10 shadow-lg sm:p-6 md:p-8 md:pb-12">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
          {module.icon}
        </span>
        <div>
          <h4 className="text-sm font-extrabold uppercase leading-snug text-white md:text-base">
            {module.title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-white/95">{module.description}</p>
        </div>
      </div>

      <div className="mt-6 grid items-start gap-4 md:grid-cols-[1fr_1.4fr] md:gap-5">
        <p className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
          {module.duration}
        </p>

        <div className="rounded-xl bg-white p-4 shadow-sm md:p-5">
          <p className="mb-3 text-center text-xs font-extrabold uppercase tracking-wider text-gray-900">
            Nội dung học
          </p>
          <ul className="space-y-2 text-xs leading-relaxed text-gray-700">
            {module.topics.map((topic) => (
              <li key={topic} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="absolute -bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 sm:w-auto sm:max-w-none">
        <span className="inline-block w-full rounded-full bg-[#003399] px-4 py-2.5 text-center text-xs font-bold uppercase text-white shadow-lg sm:w-auto sm:whitespace-nowrap sm:px-8 sm:text-sm">
          Học phí: {module.price} đ
        </span>
      </div> */}
    </div>
  )
}
