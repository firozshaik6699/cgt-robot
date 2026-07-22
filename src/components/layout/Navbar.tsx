import { useState, useEffect } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import logo from '@/assets/logo_metallic_transparent.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { desktopNavLinks, mobileNavLinks } from '@/data/navigation';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const isHomePage = pathname === '/';
    const homeHref = (hash: string) => isHomePage ? `#${hash}` : `/#${hash}`;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Lock body scroll when mobile menu is open
    useBodyScrollLock(mobileMenuOpen);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
            <div className="animate-fade-in w-[92%] max-w-5xl pointer-events-none" style={{ animationDelay: '0.1s' }}>
                <div className="glass-panel pill-shape px-4 sm:px-5 py-2.5 flex items-center justify-between pointer-events-auto" style={{
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.04)',
                    willChange: 'transform',
                }}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer group" onClick={handleNavClick}>
                        <img 
                            src={logo} 
                            alt="CGT Logo" 
                            className="h-8 md:h-9 w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.24)] transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_16px_rgba(244,117,30,0.24)]"
                        />
                    </Link>

                    {/* Nav Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {desktopNavLinks.map((link) =>
                            link.isRouterLink ? (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`text-[13px] transition-colors duration-300 font-medium ${pathname === link.href ? 'text-[#F4751E]/90 font-semibold' : 'text-white/60 hover:text-white/90'}`}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    key={link.href}
                                    href={homeHref(link.href)}
                                    className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium"
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2.5">
                        <div className="hidden sm:block">
                            <MagneticButton onClick={() => window.location.hash = 'contact'}>Book a Call</MagneticButton>
                        </div>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white focus:outline-none active:scale-95 transition-all ml-1"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5 text-[#F4751E]" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Modal Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="fixed inset-0 top-[72px] z-40 px-4 pointer-events-auto md:hidden"
                    >
                        <div 
                            className="fixed inset-0 bg-black/70 backdrop-blur-md -z-10" 
                            onClick={handleNavClick} 
                        />

                        <div 
                            className="w-full max-w-lg mx-auto rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col gap-5 overflow-hidden"
                            style={{
                                background: 'rgba(10, 10, 10, 0.95)',
                                backdropFilter: 'blur(24px)',
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 0 0 1px rgba(244, 117, 30, 0.15)',
                            }}
                        >
                            <div className="flex flex-col gap-2.5">
                                {mobileNavLinks.map((link) =>
                                    link.isRouterLink ? (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            onClick={handleNavClick}
                                            className={`px-4 py-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border flex items-center justify-between text-base font-medium transition-all ${pathname === link.href ? 'border-[#F4751E]/40 text-[#F4751E] bg-[#F4751E]/10' : 'border-white/5 text-white/90 hover:text-white'}`}
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className={`w-4 h-4 ${pathname === link.href ? 'text-[#F4751E]' : 'text-white/40'}`} />
                                        </Link>
                                    ) : (
                                        <a
                                            key={link.href}
                                            href={homeHref(link.href)}
                                            onClick={handleNavClick}
                                            className="px-4 py-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center justify-between text-base font-medium text-white/90 hover:text-white transition-all"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-4 h-4 text-white/40" />
                                        </a>
                                    )
                                )}
                            </div>

                            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                                <span>Digital Engineering Studio</span>
                                <a 
                                    href="#contact" 
                                    onClick={() => {
                                        window.location.hash = 'contact';
                                        handleNavClick();
                                    }}
                                    className="text-[#F4751E] font-semibold hover:underline"
                                >
                                    Get in touch &rarr;
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
