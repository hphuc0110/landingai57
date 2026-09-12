import { experts } from '../../data/experts'
import Badge from '../ui/Badge'
import Container from '../ui/Container'
import ExpertCard from '../cards/ExpertCard'

export default function ExpertsSection() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="!rounded-full">Đội ngũ chuyên gia</Badge>
          <h2 className="mt-4 text-xl font-extrabold text-text-heading sm:text-3xl">
            Được giảng dạy bởi đội ngũ giảng viên từ các trường đại học hàng đầu
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
            Giảng viên AI57 kết hợp nền tảng học thuật tại các trường đại học
            hàng đầu với kinh nghiệm thực chiến trong nghiên cứu và triển khai AI
            — đồng hành học sinh từ lý thuyết đến sản phẩm.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </Container>
    </section>
  )
}
