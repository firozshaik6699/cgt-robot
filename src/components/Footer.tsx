import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent pt-24 pb-10 relative overflow-hidden">
            <div className="section-divider mb-16" />

            <div className="container-main">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
                    
                    {/* Brand Info */}
                    <div className="md:col-span-5 flex flex-col">
                        <div className="mb-6 cursor-pointer group" onClick={() => window.location.href = '/'}>
                            <img 
                                src="/src/assets/logo_metallic.jpg" 
                                alt="CGT Logo" 
                                className="h-16 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
                                style={{ mixBlendMode: 'screen' }}
                            />
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light mb-8">
                            Digital engineering studio building high-performance software systems, AI automation, and enterprise platforms.
                        </p>
                        
                        {/* Contact Details */}
                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <MapPin className="w-3.5 h-3.5 text-white/35" />
                                <span>Hyderabad, Andhra Pradesh, India</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <Phone className="w-3.5 h-3.5 text-white/35" />
                                <span>+91 93984 04167</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/50 text-sm">
                                <Mail className="w-3.5 h-3.5 text-white/35" />
                                <span>continentalgrandtechnologies@gmail.com</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-white/35 hover:text-white/60 transition-colors duration-300" aria-label="LinkedIn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="text-white/35 hover:text-white/60 transition-colors duration-300" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" className="text-white/35 hover:text-white/60 transition-colors duration-300" aria-label="GitHub">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="#" className="text-white/35 hover:text-white/60 transition-colors duration-300" aria-label="WhatsApp">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2 flex flex-col">
                        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase mb-7">Company</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#services" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Services</a>
                            <a href="#work" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Case Studies</a>
                            <a href="#process" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Process</a>
                            <a href="#cta" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Contact</a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="md:col-span-2 flex flex-col">
                        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase mb-7">Services</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#services" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">AI Automation</a>
                            <a href="#services" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Full Stack Dev</a>
                            <a href="#services" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">CRM Systems</a>
                            <a href="#services" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">AI Bots</a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="md:col-span-3 flex flex-col">
                        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase mb-7">Resources</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="text-sm text-white/55 hover:text-white/80 transition-colors duration-300">Blog</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
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
