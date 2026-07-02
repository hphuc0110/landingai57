import PhotoCollage from './PhotoCollage'
import FloatingInfoCard from './FloatingInfoCard'

export default function HeroVisual() {
  return (
    <div className="relative z-10 flex items-center justify-center lg:justify-end">
      <div className="relative w-full max-w-xl">
        <PhotoCollage />
        <FloatingInfoCard />
      </div>
    </div>
  )
}
