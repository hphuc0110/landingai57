const badges = [
  {
    label: '360H đào tạo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Giảng viên Bách Khoa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
        <path d="M22 10l-10-5L2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Chuẩn NVIDIA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function FeatureBadges() {
  return (
    <div className="mt-8 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-hero-navy px-4 py-2.5 text-xs font-semibold text-white shadow-md sm:w-auto sm:justify-start"
        >
          {badge.icon}
          {badge.label}
        </span>
      ))}
    </div>
  )
}
