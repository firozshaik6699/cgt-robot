import MagneticButton from '@/components/ui/MagneticButton';
import logo from '@/assets/logo_metallic.jpg';

const Navbar = () => {
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
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
                        <img 
                            src={logo} 
                            alt="CGT Logo" 
                            className="h-7 md:h-8 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                        />
                    </div>

                    {/* Nav Links (Desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium">Services</a>
                        <a href="#work" className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium">Work</a>
                        <a href="#process" className="text-[13px] text-white/60 hover:text-white/90 transition-colors duration-300 font-medium">Process</a>
                    </div>

                    {/* CTA Button */}
                    <MagneticButton onClick={() => window.location.hash = 'contact'}>Book a Call</MagneticButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
