import MagneticButton from '@/components/ui/MagneticButton';
import logo from '@/assets/logo_metallic_transparent.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const isHomePage = pathname === '/';
    const isPartnershipPage = pathname === '/partnership/syncrobiz';
    const homeHref = (hash: string) => isHomePage ? `#${hash}` : `/#${hash}`;

    return (
        <nav className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
            <div className="animate-fade-in w-[92%] max-w-5xl pointer-events-none" style={{ animationDelay: '0.1s' }}>
                <div className="glass-panel pill-shape px-5 py-2.5 flex items-center justify-between pointer-events-auto" style={{
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.04)',
                    willChange: 'transform',
                }}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                        <img 
                            src={logo} 
                            alt="CGT Logo" 
                            className="h-8 md:h-9 w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.24)] transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_16px_rgba(244,117,30,0.24)]"
                        />
                    </Link>

                    {/* Nav Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href={homeHref('services')} className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium">Services</a>
                        <a href={homeHref('process')} className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium">Process</a>
                        <a href={homeHref('work')} className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium">Work</a>
                        <Link to="/partnership/syncrobiz" className={`text-[13px] transition-colors duration-300 font-medium ${isPartnershipPage ? 'text-[#F4751E]/90' : 'text-white/60 hover:text-white/90'}`}>Partnership</Link>
                    </div>

                    {/* CTA Button */}
                    <MagneticButton onClick={() => window.location.hash = 'contact'}>Book a Call</MagneticButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
