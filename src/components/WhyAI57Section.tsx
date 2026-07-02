import CtaButton from './CtaButton'
import PracticeFeature from './why-ai57/PracticeFeature'
import FacultyFeature from './why-ai57/FacultyFeature'
import NvidiaFeatureCard from './why-ai57/NvidiaFeatureCard'

function CircuitFooter() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230056d2' stroke-width='1' opacity='0.3'%3E%3Cpath d='M10 20h20v10H20v10H10zM50 10h20v20H60V10zM30 50h20v20H30z'/%3E%3Ccircle cx='30' cy='20' r='2' fill='%230056d2'/%3E%3Ccircle cx='60' cy='30' r='2' fill='%230056d2'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
      aria-hidden
    />
  )
}

export default function WhyAI57Section() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light/40 via-white to-primary-light/30 py-12 sm:py-16 md:py-20">
      <CircuitFooter />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-primary sm:text-3xl md:text-4xl">TẠI SAO LÀ AI57?</h2>
          <p className="mt-2 text-base italic text-gray-900 md:text-lg">
            Khai phóng tiềm năng công nghệ
          </p>
        </div>

        <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-16 md:space-y-20">
          <PracticeFeature />
          <FacultyFeature />
          <NvidiaFeatureCard />
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <CtaButton
            openRegistrationForm
            className="!w-full !rounded-xl !px-8 !py-4 !text-sm sm:!w-auto sm:!px-12 sm:!text-base"
          >
            Đăng ký ngay
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
