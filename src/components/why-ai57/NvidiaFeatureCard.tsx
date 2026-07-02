export default function NvidiaFeatureCard() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-gradient-to-r from-green-600 via-green-500 to-lime-400 shadow-xl">
      <div className="grid items-center gap-6 p-5 sm:gap-8 sm:p-8 md:grid-cols-2 md:p-10">
        <div>
          <h3 className="text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
            Tại sao chuẩn NVIDIA lại quan trọng?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/95 md:text-base">
            Giáo trình bám sát hệ sinh thái NVIDIA (NVIDIA DLI) — học viên được tiếp cận công
            nghệ GPU tiên tiến, phương pháp đào tạo thực chiến và chứng chỉ có giá trị toàn
            cầu, mở cánh cửa sự nghiệp Kỹ sư AI.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-xl border-4 border-primary-light bg-white p-1 shadow-2xl">
            <img
              src="/why/nvidia.png"
              alt="Tòa nhà NVIDIA"
              className="h-44 w-full rounded-lg object-cover md:h-48 md:w-72"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
