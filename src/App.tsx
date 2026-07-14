import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RegistrationSection from './components/RegistrationSection'
import ExpertQuoteSection from './components/ExpertQuoteSection'
import RegistrationModal from './components/registration/RegistrationModal'
import PartnersSection from './components/PartnersSection'
import WhyAI57Section from './components/WhyAI57Section'
import RoadmapSection from './components/RoadmapSection'
import Testimonials from './components/Testimonials'
import VideoSection from './components/VideoSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyRegisterBar from './components/StickyRegisterBar'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

function App() {
  return (
    <RegistrationModalProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <RegistrationSection />
          <ExpertQuoteSection />
          <PartnersSection />
          <WhyAI57Section />
          <RoadmapSection />
          <Testimonials />
          <VideoSection />
          <FAQ />
        </main>
        <Footer />
      </div>
      <StickyRegisterBar />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}

export default App
