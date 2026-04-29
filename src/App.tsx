import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import Differentiation from './components/Differentiation'
import TechStrip from './components/TechStrip'
import CTA from './components/CTA'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F4751E]/30 relative">
      {/* The Dot Grid Background with Edge Fading */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.24) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)'
        }}
      />
      
      {/* Subtle Black Gradient Overlay for better component text visibility */}
      <div className="fixed inset-0 w-full h-full pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustStrip />
        <Services />
        <CaseStudies />
        <Process />
        <Differentiation />
        <TechStrip />
        <CTA />
        <ContactModal />
        <Footer />
      </div>
    </div>
  )
}

export default App

