type Props = {
  className?: string
}

/** Soft network-node graphic approximating Vietnam map silhouette */
export default function VietnamNetworkGraphic({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 480 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e5ff2" stopOpacity="0.15" />
        </radialGradient>
      </defs>

      {/* soft map wash */}
      <path
        d="M210 40c40 8 70 30 78 70 10 48-8 78 18 120 22 36 58 48 72 88 12 34-6 70-28 96-18 22-20 48-8 72 14 28 8 58-18 78-30 24-70 20-98 4-26-14-58-10-78 10-18 18-48 22-70 4-20-16-18-48 2-66 14-12 18-34 8-50-14-24-8-54 12-72 28-26 34-66 18-98-12-24-6-54 16-72 28-24 58-40 74-84z"
        fill="#dbeafe"
        fillOpacity="0.45"
      />

      {[
        [230, 70],
        [268, 110],
        [250, 160],
        [290, 200],
        [320, 250],
        [300, 300],
        [270, 340],
        [250, 390],
        [220, 430],
        [180, 460],
        [150, 500],
        [200, 120],
        [240, 230],
        [280, 280],
        [210, 350],
        [190, 280],
        [160, 320],
        [310, 180],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="url(#nodeGlow)" />
          <circle cx={x} cy={y} r="3.5" fill="#1e5ff2" fillOpacity="0.55" />
        </g>
      ))}

      <g stroke="#60a5fa" strokeOpacity="0.45" strokeWidth="1.2">
        <path d="M230 70 L268 110 L250 160 L290 200 L320 250" />
        <path d="M200 120 L250 160 L240 230 L280 280 L300 300" />
        <path d="M190 280 L240 230 L270 340 L220 430 L180 460 L150 500" />
        <path d="M310 180 L290 200 L280 280 L250 390" />
        <path d="M160 320 L210 350 L250 390" />
      </g>
    </svg>
  )
}
