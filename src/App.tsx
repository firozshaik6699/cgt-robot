import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import TechStackScroller from './components/TechStackScroller'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import Differentiation from './components/Differentiation'
import CTA from './components/CTA'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import SyncrobizPartnership from './pages/SyncrobizPartnership'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Blog from './pages/Blog'
import { useEffect } from 'react'
import './index.css'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const HomePage = () => (
  <>
    <Hero />
    <TrustStrip />
    <Services />
    <Process />
    <CaseStudies />
    <Differentiation />
    <TechStackScroller />
    <CTA />
  </>
)

const AppContent = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F4751E]/30 relative">
      <ScrollToTop />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partnership/syncrobiz" element={<SyncrobizPartnership />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <ContactModal />
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
