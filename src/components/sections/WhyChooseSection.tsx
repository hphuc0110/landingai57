import { benefits } from '../../data/benefits'
import Container from '../ui/Container'
import BenefitCard from '../cards/BenefitCard'

export default function WhyChooseSection() {
  return (
    <section className="border-y-4 border-brand bg-[#f7f8fa] py-10 sm:border-y-[6px] sm:py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-xl font-extrabold tracking-wide text-text-heading uppercase sm:text-3xl">
            Vì sao chọn AI57
          </h2>
          <p className="mt-2 text-sm font-medium text-brand sm:text-base">
            4 điểm khác biệt cốt lõi
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {benefits.map((item) => (
            <BenefitCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
