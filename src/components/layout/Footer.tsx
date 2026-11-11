import logo from '@/assets/logo_metallic_transparent.png';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/data/site-config';
import { footerSections } from '@/data/navigation';
import { openContactModal } from '@/hooks/useHashModal';

const Footer = () => {
    const location = useLocation();
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const isHomePage = pathname === '/';

    return (
        <footer className="relative bg-[#020202] pt-12 pb-8 md:pt-14 md:pb-10">
            {/* Whisper-quiet top hairline — lets the CTA section above hold full visual authority */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

            <div className="container-main relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-9 md:gap-8 pb-10">
                    {/* Minimal Brand & Studio Metadata */}
                    <div className="md:col-span-6 flex flex-col items-start">
                        <Link
                            to="/"
                            className="inline-flex items-center mb-3.5 opacity-80 hover:opacity-100 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/50 rounded-md"
                            aria-label="Continental Grand Technologies Home"
                        >
                            <img
                                src={logo}
                                alt="Continental Grand Technologies"
                                className="h-6 sm:h-7 w-auto object-contain"
                            />
                        </Link>

                        <p className="text-xs text-white/38 leading-relaxed max-w-sm font-light mb-4">
                            {siteConfig.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] text-white/38 mb-5">
                            <span>{siteConfig.address.city}, {siteConfig.address.country}</span>
                            <span className="text-white/15" aria-hidden="true">&bull;</span>
                            <a
                                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                                className="hover:text-white/75 transition-colors focus-visible:outline-none focus-visible:underline"
                            >
                                {siteConfig.phone}
                            </a>
                            <span className="text-white/15" aria-hidden="true">&bull;</span>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="hover:text-white/75 transition-colors break-all focus-visible:outline-none focus-visible:underline"
                            >
                                {siteConfig.email}
                            </a>
                        </div>

                        {/* Restrained Minimal Social Row */}
                        <div className="flex items-center gap-1">
                            {siteConfig.socials.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.ariaLabel}
                                    className="h-9 w-9 rounded-full flex items-center justify-center text-white/32 hover:text-white/80 hover:bg-white/[0.04] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d={social.svgPath} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Consolidated Low-Contrast Navigation Columns */}
                    <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-7 sm:gap-6">
                        {footerSections.map((section) => (
                            <div key={section.title} className="flex flex-col">
                                <h4 className="text-[10px] font-semibold tracking-[0.18em] text-white/28 uppercase mb-3.5">
                                    {section.title}
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {section.links.map((link) => {
                                        if (link.href === 'contact') {
                                            return (
                                                <button
                                                    key={link.label}
                                                    type="button"
                                                    onClick={() => openContactModal()}
                                                    className="text-left text-xs text-white/40 hover:text-white/80 transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:underline"
                                                >
                                                    {link.label}
                                                </button>
                                            );
                                        }

                                        if (link.isRouterLink) {
                                            return (
                                                <Link
                                                    key={link.label}
                                                    to={link.href}
                                                    className="text-xs text-white/40 hover:text-white/80 transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:underline"
                                                >
                                                    {link.label}
                                                </Link>
                                            );
                                        }

                                        return isHomePage ? (
                                            <a
                                                key={link.label}
                                                href={`#${link.href}`}
                                                className="text-xs text-white/40 hover:text-white/80 transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:underline"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                key={link.label}
                                                to={`/#${link.href}`}
                                                className="text-xs text-white/40 hover:text-white/80 transition-colors duration-200 w-fit focus-visible:outline-none focus-visible:underline"
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quiet Bottom Bar */}
                <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-[11px] text-white/28">
                        &copy; {new Date().getFullYear()} {siteConfig.companyName} &middot; {siteConfig.domain}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                        <span className="text-[11px] text-white/30">All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
