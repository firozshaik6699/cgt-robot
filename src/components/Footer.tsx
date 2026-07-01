import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo_metallic_transparent.png';

const Footer = () => {
    const isHomePage = window.location.pathname === '/';
    const homeHref = (hash: string) => isHomePage ? `#${hash}` : `/#${hash}`;

    return (
        <footer className="relative overflow-hidden pt-24 pb-10 bg-[#030303]" style={{
            background: `
              radial-gradient(circle at 78% 43%, rgba(255, 95, 0, 0.18) 0%, rgba(255, 83, 0, 0.10) 14%, rgba(122, 35, 0, 0.06) 31%, rgba(12, 6, 3, 0.92) 58%, #030303 100%),
              radial-gradient(circle at 57% 50%, rgba(255, 98, 0, 0.08) 0%, rgba(255, 98, 0, 0.02) 32%, transparent 62%),
              linear-gradient(90deg, #020202 0%, #050403 31%, #150803 52%, #2a0b00 72%, #080402 100%)
            `
        }}>
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/40 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />

            {/* Orange glow */}
            <div className="absolute right-[10%] top-[15%] w-[500px] h-[400px] rounded-full blur-[50px] mix-blend-screen pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.35) 0%, rgba(255,72,0,0.15) 40%, transparent 70%)' }} />
            <div className="absolute right-[20%] bottom-[20%] w-[600px] h-[250px] rounded-full blur-[50px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,72,0,0.15), rgba(90,20,0,0.06) 48%, transparent 75%)' }} />

            {/* Dark left fade */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.85) 24%, rgba(0,0,0,0.35) 53%, rgba(0,0,0,0.04) 77%, rgba(0,0,0,0.25) 100%)' }} />

            {/* Halftone Dots - Left Edge */}
            <div className="absolute left-[-30px] top-[-20px] w-[300px] h-[350px] opacity-70 pointer-events-none max-md:opacity-40" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255, 83, 0, 0.9) 1.4px, transparent 2px)',
                backgroundSize: '12px 12px',
                WebkitMaskImage: 'radial-gradient(ellipse at left top, black 0%, black 30%, rgba(0,0,0,0.6) 50%, transparent 78%)',
                maskImage: 'radial-gradient(ellipse at left top, black 0%, black 30%, rgba(0,0,0,0.6) 50%, transparent 78%)',
            }} />

            {/* Halftone Dots - Right Edge */}
            <div className="absolute right-[-40px] top-[-10px] w-[380px] h-[500px] opacity-55 pointer-events-none max-md:opacity-25" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255, 94, 0, 0.8) 1.5px, transparent 2.5px)',
                backgroundSize: '13px 13px',
                WebkitMaskImage: 'radial-gradient(ellipse at right top, black 0%, black 22%, rgba(0,0,0,0.5) 45%, transparent 72%)',
                maskImage: 'radial-gradient(ellipse at right top, black 0%, black 22%, rgba(0,0,0,0.5) 45%, transparent 72%)',
            }} />

            {/* Noise / Grain */}
            <div className="absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.10]" style={{
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,100,0,0.08) 0 1px, transparent 1px)',
                backgroundSize: '3px 3px, 5px 5px',
            }} />

            {/* Sweeping Arc Lines */}
            <svg className="absolute left-0 bottom-0 w-full pointer-events-none" style={{ height: '45%' }} viewBox="0 0 1920 400" preserveAspectRatio="none" fill="none">
                <path d="M-200 380 Q 400 220, 960 240 Q 1500 260, 2100 150" stroke="rgba(255, 70, 0, 0.10)" strokeWidth="80" strokeLinecap="round" />
                <path d="M-200 370 Q 420 200, 980 220 Q 1520 240, 2100 125" stroke="rgba(180, 60, 0, 0.40)" strokeWidth="16" strokeLinecap="round" />
                <path d="M-200 358 Q 440 188, 1000 208 Q 1540 228, 2100 110" stroke="rgba(255, 120, 20, 0.85)" strokeWidth="3" strokeLinecap="round" />
                <path d="M-200 395 Q 380 270, 940 278 Q 1480 286, 2100 210" stroke="rgba(255,255,255,0.50)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 48%, rgba(0,0,0,0.35) 78%, rgba(0,0,0,0.80) 100%), linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 24%, transparent 68%, rgba(0,0,0,0.65) 100%)'
            }} />

            <div className="section-divider mb-16 relative z-10" />

            <div className="container-main relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
                    
                    {/* Brand Info */}
                    <div className="md:col-span-5 flex flex-col">
                        <div className="mb-7 cursor-pointer group inline-flex w-fit rounded-2xl border border-white/[0.04] bg-black/20 px-1 py-1 shadow-[0_18px_50px_rgba(0,0,0,0.28)]" onClick={() => window.location.href = '/'}>
                            <img 
                                src={logo} 
                                alt="CGT Logo" 
                                className="h-20 md:h-24 w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_0_18px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:brightness-150 group-hover:drop-shadow-[0_0_22px_rgba(244,117,30,0.22)]"
                            />
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light mb-8">
                            Digital engineering studio building high-performance software systems, AI automation, and enterprise platforms.
                        </p>
                        
                        {/* Contact Details */}
                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex items-center gap-3 text-white/55 text-sm">
                                <MapPin className="w-3.5 h-3.5 text-[#F4751E]/45" />
                                <span>Hyderabad, Andhra Pradesh, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/55 text-sm">
                                <Phone className="w-3.5 h-3.5 text-[#F4751E]/45" />
                                <span>+91 93984 04167</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/55 text-sm">
                                <Mail className="w-3.5 h-3.5 text-[#F4751E]/45" />
                                <span>continentalgrandtechnologies@gmail.com</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-5">
                            <a href="https://www.linkedin.com/company/continental-grand-technologies" target="_blank" rel="noopener noreferrer" className="text-white/38 hover:text-[#F4751E]/75 transition-colors duration-300" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://x.com/CGT_OFFICIAI_" target="_blank" rel="noopener noreferrer" className="text-white/38 hover:text-[#F4751E]/75 transition-colors duration-300" aria-label="X">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/p/DaPVVblh-Z8/?igsh=MTF5dXZtNWFnZTJlag%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white/38 hover:text-[#F4751E]/75 transition-colors duration-300" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="https://github.com/continental-grand-technologies" target="_blank" rel="noopener noreferrer" className="text-white/38 hover:text-[#F4751E]/75 transition-colors duration-300" aria-label="GitHub">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://wa.me/919398404167" target="_blank" rel="noopener noreferrer" className="text-white/38 hover:text-[#F4751E]/75 transition-colors duration-300" aria-label="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2 flex flex-col">
                        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-[#F4751E]/55 uppercase mb-7">Company</h4>
                        <div className="flex flex-col gap-4">
                            <a href={homeHref('services')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Services</a>
                            <a href={homeHref('work')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Case Studies</a>
                            <a href={homeHref('process')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Process</a>
                            <a href="/partnership/syncrobiz" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">CGT x Syncrobiz</a>
                            <a href="#contact" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Contact</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2 flex flex-col">
                        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-[#F4751E]/55 uppercase mb-7">Services</h4>
                        <div className="flex flex-col gap-4">
                            <a href={homeHref('services')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">AI Automation</a>
                            <a href={homeHref('services')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Full Stack Dev</a>
                            <a href={homeHref('services')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">CRM Systems</a>
                            <a href={homeHref('services')} className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">AI Bots</a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="md:col-span-3 flex flex-col">
                        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-[#F4751E]/55 uppercase mb-7">Resources</h4>
                        <div className="flex flex-col gap-4">
                            <a href="/partnership/syncrobiz" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Partnership Announcement</a>
                            <a href="/privacy" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Privacy Policy</a>
                            <a href="/terms" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Terms of Service</a>
                            <a href="/blog" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Blog</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#F4751E]/[0.14] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/40">
                        &copy; {new Date().getFullYear()} Continental Grand Technologies. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
                        <span className="text-xs text-white/45">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
