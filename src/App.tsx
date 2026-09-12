import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import VisionBanner from './components/sections/VisionBanner'
import WhyChooseSection from './components/sections/WhyChooseSection'
import ProgramSection from './components/sections/ProgramSection'
import OfferCountdownSection from './components/sections/OfferCountdownSection'
import FAQSection from './components/sections/FAQSection'
import RegistrationSection from './components/sections/RegistrationSection'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <VisionBanner />
        {/* <ExpertQuoteSection /> */}
        <WhyChooseSection />
        <ProgramSection />
        <OfferCountdownSection />
        {/* <ExpertsSection /> */}
        <FAQSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
