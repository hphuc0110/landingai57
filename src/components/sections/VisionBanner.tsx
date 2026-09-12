import Badge from '../ui/Badge'
import Container from '../ui/Container'

export default function VisionBanner() {
  return (
    <section className="bg-brand py-10 text-white sm:py-16">
      <Container className="flex flex-col items-center text-center">
        <Badge variant="outline" className="!rounded-md !px-4 !py-1.5">
          Góc nhìn và xu hướng
        </Badge>
        <h2 className="mt-5 max-w-3xl text-xl font-extrabold leading-snug sm:mt-6 sm:text-3xl lg:text-4xl">
          AI đang định hình lại mọi ngành nghề.
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] text-white/90 sm:mt-4 sm:text-lg">
          Con bạn cần một lộ trình thật, có người kèm thật — không phải một khoá
          học chạy theo trend.
        </p>
      </Container>
    </section>
  )
}
