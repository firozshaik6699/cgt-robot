import { useState, useEffect } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo_metallic_transparent.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { openContactModal } from '@/hooks/useHashModal';
import { desktopNavLinks, mobileNavLinks } from '@/data/navigation';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const isHomePage = pathname === '/';

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname, location.hash]);

    useBodyScrollLock(mobileMenuOpen);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    const handleBookCall = () => {
        setMobileMenuOpen(false);
        openContactModal();
    };

    return (
        <nav className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center pointer-events-none" aria-label="Primary Navigation">
            <div className="animate-fade-in w-[92%] max-w-5xl pointer-events-none" style={{ animationDelay: '0.1s' }}>
                <div
                    className="glass-panel pill-shape px-4 sm:px-5 py-2.5 flex items-center justify-between pointer-events-auto"
                    style={{
                        background: 'rgba(6, 6, 6, 0.78)',
                        backdropFilter: 'blur(22px)',
                        WebkitBackdropFilter: 'blur(22px)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                        willChange: 'transform',
                    }}
                >
                    {/* Brand Mark */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/60 rounded-lg py-0.5"
                        onClick={handleNavClick}
                        aria-label="Continental Grand Technologies Home"
                    >
                        <img
                            src={logo}
                            alt="Continental Grand Technologies (CGT)"
                            className="h-6 sm:h-7 md:h-[30px] w-auto object-contain brightness-105 contrast-105 drop-shadow-[0_2px_12px_rgba(255,255,255,0.14)] transition-all duration-300 group-hover:brightness-115 group-hover:drop-shadow-[0_0_16px_rgba(244,117,30,0.34)]"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-7 lg:gap-8">
                        {desktopNavLinks.map((link) =>
                            link.isRouterLink ? (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`text-[13px] transition-colors duration-300 font-medium ${
                                        pathname === link.href
                                            ? 'text-[#F4751E] font-semibold'
                                            : 'text-white/65 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ) : isHomePage ? (
                                <a
                                    key={link.href}
                                    href={`#${link.href}`}
                                    className="text-[13px] text-white/65 hover:text-white transition-colors duration-300 font-medium"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    to={`/#${link.href}`}
                                    className="text-[13px] text-white/65 hover:text-white transition-colors duration-300 font-medium"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Desktop Primary CTA & Mobile Drawer Trigger */}
                    <div className="flex items-center gap-2.5">
                        <div className="hidden sm:block">
                            <MagneticButton onClick={handleBookCall}>Book a Call</MagneticButton>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden h-10 w-10 rounded-full border border-white/12 bg-white/[0.05] hover:bg-white/[0.1] text-white/85 hover:text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/60 active:scale-95 transition-all"
                            aria-label="Toggle Navigation Menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="w-4.5 h-4.5 text-[#F4751E]" /> : <Menu className="w-4.5 h-4.5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -16, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 top-[74px] z-40 px-4 pointer-events-auto md:hidden"
                    >
                        <div
                            className="fixed inset-0 bg-black/75 backdrop-blur-md -z-10"
                            onClick={handleNavClick}
                        />

                        <div
                            className="w-full max-w-lg mx-auto rounded-3xl p-5 border border-white/10 shadow-2xl flex flex-col gap-4 overflow-hidden"
                            style={{
                                background: 'rgba(10, 10, 10, 0.96)',
                                backdropFilter: 'blur(24px)',
                                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                {mobileNavLinks.map((link) =>
                                    link.isRouterLink ? (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            onClick={handleNavClick}
                                            className={`px-4 py-3.5 rounded-2xl border flex items-center justify-between text-[15px] font-medium transition-all ${
                                                pathname === link.href
                                                    ? 'border-[#F4751E]/40 text-[#F4751E] bg-[#F4751E]/10'
                                                    : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/[0.06] text-white/90 hover:text-white'
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className={`w-4 h-4 ${pathname === link.href ? 'text-[#F4751E]' : 'text-white/40'}`} />
                                        </Link>
                                    ) : isHomePage ? (
                                        <a
                                            key={link.href}
                                            href={`#${link.href}`}
                                            onClick={handleNavClick}
                                            className="px-4 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] flex items-center justify-between text-[15px] font-medium text-white/90 hover:text-white transition-all"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-4 h-4 text-white/40" />
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.href}
                                            to={`/#${link.href}`}
                                            onClick={handleNavClick}
                                            className="px-4 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] flex items-center justify-between text-[15px] font-medium text-white/90 hover:text-white transition-all"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-4 h-4 text-white/40" />
                                        </Link>
                                    )
                                )}
                            </div>

                            <Button
                                type="button"
                                onClick={handleBookCall}
                                size="lg"
                                className="w-full mt-1"
                            >
                                Book a Strategy Call
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
