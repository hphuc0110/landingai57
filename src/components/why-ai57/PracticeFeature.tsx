import BorderedImage from './BorderedImage'

export default function PracticeFeature() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <BorderedImage
        src="/why/coding.png"
        alt="Học sinh thực hành tại phòng lab AI57"
      />

      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary font-mono text-lg text-white">
              &lt;/&gt;
            </span>
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
              Học thật Thực hành
            </h3>
          </div>
          <p className="text-2xl font-extrabold text-accent sm:text-3xl md:text-4xl">50% THỜI LƯỢNG</p>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
          Chương trình 360 giờ với 180 giờ thực hành tại phòng lab trang bị GPU NVIDIA — học
          viên được làm dự án thực tế, xây dựng portfolio AI chuyên nghiệp ngay từ những module
          đầu tiên.
        </p>
      </div>
    </div>
  )
}
