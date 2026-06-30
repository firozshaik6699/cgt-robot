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
import SyncrobizPartnership from './pages/SyncrobizPartnership'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Blog from './pages/Blog'
import './index.css'

const HomePage = () => (
  <>
    <Hero />
    <TrustStrip />
    <Services />
    <Process />
    <CaseStudies />
    <Differentiation />
    <TechStrip />
    <CTA />
  </>
)

function App() {
  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/'

  const renderPage = () => {
    switch (normalizedPath) {
      case '/partnership/syncrobiz':
        return <SyncrobizPartnership />
      case '/privacy':
        return <PrivacyPolicy />
      case '/terms':
        return <TermsOfService />
      case '/blog':
        return <Blog />
      default:
        return <HomePage />
    }
  }

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
        {renderPage()}
        <ContactModal />
        <Footer />
      </div>
    </div>
  )
}

export default App
