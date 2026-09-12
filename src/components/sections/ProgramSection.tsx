import { modules } from '../../data/modules'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'
import ModuleCard from '../cards/ModuleCard'
import { useRegistrationModal } from '../../context/RegistrationModalContext'

export default function ProgramSection() {
  const { openRegistration } = useRegistrationModal()

  return (
    <section
      id="lo-trinh"
      className="bg-[linear-gradient(180deg,#3b82f6_0%,#4f8ff7_12%,#8eb6fb_35%,#d6e6ff_60%,#f5f9ff_82%,#ffffff_100%)] py-10 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="mint" className="!rounded-md">
            Chương trình tổng thể
          </Badge>
          <h2 className="mt-4 text-lg font-extrabold leading-snug text-white uppercase sm:mt-5 sm:text-2xl lg:text-3xl">
            Lộ trình 6 module: học từ lý thuyết nền tảng đến kỹ sư AI toàn cầu.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Button
            onClick={openRegistration}
            variant="outline"
            className="!w-full !rounded-xl !border-2 !border-brand !px-5 !py-3.5 !text-sm sm:!w-auto sm:!px-8"
          >
            Chọn workshop và đăng ký tư vấn →
          </Button>
        </div>
      </Container>
    </section>
  )
}
