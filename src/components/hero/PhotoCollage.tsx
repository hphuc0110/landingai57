const heroCollage = '/images/hero-collage.png'

export default function PhotoCollage() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <img
        src={heroCollage}
        alt="Học sinh AI57 tại phòng lab, lễ khai giảng và buổi học thực hành"
        className="h-auto w-full object-contain drop-shadow-2xl"
      />
    </div>
  )
}
