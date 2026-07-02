import HeroContent from './hero/HeroContent'
import HeroVisual from './hero/HeroVisual'

function CircuitPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 40h40v20H60V20H20v20zm80 0h60v20h-20v40h-20V60H100V40zm-60 80h40v40H40v-20h20v-20zm100-40h20v60h-40v-20h20V80z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle cx="60" cy="40" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="140" cy="60" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="80" cy="140" r="4" fill="currentColor" opacity="0.5" />
      <path
        d="M60 40h40M100 60v40M80 100h40"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  )
}

function NeuralNetworkPattern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line x1="40" y1="60" x2="120" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="120" y1="40" x2="200" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="60" x2="80" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="120" y1="40" x2="100" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="200" y1="80" x2="160" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <line x1="80" y1="140" x2="160" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="100" y1="120" x2="160" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <line x1="160" y1="160" x2="200" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <circle cx="40" cy="60" r="5" fill="currentColor" opacity="0.45" />
      <circle cx="120" cy="40" r="5" fill="currentColor" opacity="0.45" />
      <circle cx="200" cy="80" r="5" fill="currentColor" opacity="0.45" />
      <circle cx="80" cy="140" r="4" fill="currentColor" opacity="0.35" />
      <circle cx="100" cy="120" r="4" fill="currentColor" opacity="0.35" />
      <circle cx="160" cy="160" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="200" cy="200" r="4" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-10 sm:py-16 md:py-24 lg:py-28">
      <CircuitPattern className="pointer-events-none absolute -left-4 top-12 h-52 w-52 text-primary/25 md:left-4 md:h-64 md:w-64" />
      <NeuralNetworkPattern className="pointer-events-none absolute -right-4 top-16 h-52 w-52 text-primary/20 md:right-4 md:h-64 md:w-64" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-10 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  )
}
