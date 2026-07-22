import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactModal from '@/components/layout/ContactModal';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import ScrollToTop from './ScrollToTop';
import { Preloader } from '@/components/ui/Preloader';

/**
 * Shared layout shell rendered on every route.
 * Contains the dot-grid background, gradient overlays, navbar, footer, and global overlays.
 */
const AppLayout = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#F4751E]/30 relative">
            <Preloader />
            <ScrollToTop />

            {/* The Dot Grid Background with Edge Fading */}
            <div
                className="fixed inset-0 w-full h-full pointer-events-none opacity-40 md:opacity-100"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.2px, transparent 1.2px)',
                    backgroundSize: '26px 26px',
                    backgroundPosition: '0 0',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 88%)',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 88%)'
                }}
            />

            {/* Subtle Black Gradient Overlay for better component text visibility */}
            <div className="fixed inset-0 w-full h-full pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/80" />

            <div className="relative z-10">
                <Navbar />
                <Outlet />
                <ContactModal />
                <StickyMobileCTA />
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;
