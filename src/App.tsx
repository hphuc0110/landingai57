import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import VisionBanner from './components/sections/VisionBanner'
import WhyChooseSection from './components/sections/WhyChooseSection'
import ProgramSection from './components/sections/ProgramSection'
import OfferCountdownSection from './components/sections/OfferCountdownSection'
import FAQSection from './components/sections/FAQSection'
import RegistrationSection from './components/sections/RegistrationSection'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

function App() {
  return (
    <RegistrationModalProvider>
      <div className="min-h-screen overflow-x-hidden bg-white">
        <Navbar />
        <main>
          <HeroSection />
          <RegistrationSection />
          <VisionBanner />
          {/* <ExpertQuoteSection /> */}
          <WhyChooseSection />
          <ProgramSection />
          <OfferCountdownSection />
          {/* <ExpertsSection /> */}
          <FAQSection />
        </main>
        <Footer />
      </div>
    </RegistrationModalProvider>
  )
}

export default App
