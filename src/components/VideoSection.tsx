const YOUTUBE_VIDEO_ID = 'hU4oX6mBl9g'

export default function VideoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary/30">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Phóng sự lễ ký kết MOU đối tác chiến lược"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="mt-2 text-lg font-bold text-gray-800">
            Phóng sự lễ ký kết MOU đối tác chiến lược
          </p>
          <p className="mt-1 text-sm text-gray-500">HUST × NIC × Hong Linh Edu</p>
        </div>
      </div>
    </section>
  )
}
