import RegistrationInfo from './registration/RegistrationInfo'
import RegistrationForm from './registration/RegistrationForm'

export default function RegistrationSection() {
  return (
    <section
      id="register"
      className="bg-gradient-to-br from-primary-light/80 via-white to-primary-light/40 py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <RegistrationInfo />
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}
