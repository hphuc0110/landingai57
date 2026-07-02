import BorderedImage from './BorderedImage'
import BrandLogo from '../BrandLogo'

export default function FacultyFeature() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-xl text-white">
            🎓
          </span>
          <h3 className="min-w-0 flex-1 text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
            Giảng viên từ Đại học Bách Khoa Hà Nội
          </h3>
          <BrandLogo
            brand="hust"
            alt="Đại học Bách Khoa Hà Nội"
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />
        </div>

        <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
          Nội dung chương trình được xây dựng và thẩm định bởi đội ngũ chuyên gia, giảng viên
          từ Đại học Bách Khoa Hà Nội — đảm bảo chuẩn học thuật và cập nhật xu hướng AI toàn
          cầu.
        </p>
      </div>

      <div className="order-1 lg:order-2">
        <BorderedImage
          src="/why/kiket.png"
          alt="Giảng viên Đại học Bách Khoa Hà Nội giảng dạy"
        />
      </div>
    </div>
  )
}
