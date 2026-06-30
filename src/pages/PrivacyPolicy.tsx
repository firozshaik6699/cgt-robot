import { Shield, Eye, Lock, Cookie, Globe2, UserCheck, Mail, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const sections = [
    {
        icon: Eye,
        title: 'Information We Collect',
        content: [
            'Personal identification information (name, email address, phone number) provided voluntarily through our contact forms and consultation requests.',
            'Technical data including IP address, browser type, operating system, referring URLs, and pages visited — collected automatically to improve site performance.',
            'Business information shared during project consultations, including company name, project scope, budget range, and technical requirements.',
            'Communication records from emails, calls, and messages exchanged during the course of our professional engagement.',
        ],
    },
    {
        icon: Lock,
        title: 'How We Use Your Information',
        content: [
            'To respond to your inquiries and provide accurate project estimates and proposals.',
            'To deliver contracted software development, AI automation, and CRM services.',
            'To send relevant updates about your project status, milestones, and deliverables.',
            'To improve our website experience, service offerings, and internal operational processes.',
            'To comply with legal obligations and protect against fraudulent or unauthorized activity.',
        ],
    },
    {
        icon: Shield,
        title: 'Data Protection & Security',
        content: [
            'All data transmissions are encrypted using industry-standard TLS/SSL protocols.',
            'Access to personal information is restricted to authorized personnel who require it for legitimate business operations.',
            'We implement regular security audits, vulnerability assessments, and penetration testing on our infrastructure.',
            'Client project data is stored in isolated, access-controlled environments with multi-factor authentication.',
            'We maintain data backup and disaster recovery procedures to ensure business continuity.',
        ],
    },
    {
        icon: Cookie,
        title: 'Cookies & Tracking',
        content: [
            'We use essential cookies to ensure proper website functionality and session management.',
            'Analytics cookies help us understand how visitors interact with our site, allowing us to improve the user experience.',
            'We do not use invasive third-party advertising trackers or sell cookie data to external parties.',
            'You can manage or disable cookies through your browser settings at any time — though some features may be affected.',
        ],
    },
    {
        icon: Globe2,
        title: 'Third-Party Services',
        content: [
            'We may use third-party tools for analytics (e.g., Google Analytics), communication (e.g., email services), and payment processing.',
            'These services have their own privacy policies, and we encourage you to review them independently.',
            'We only share the minimum data necessary for these services to function as intended.',
            'We do not sell, rent, or trade your personal information to any third party for marketing purposes.',
        ],
    },
    {
        icon: UserCheck,
        title: 'Your Rights',
        content: [
            'You have the right to request access to the personal data we hold about you at any time.',
            'You may request correction of any inaccurate or incomplete personal information.',
            'You can request deletion of your personal data, subject to our legal obligations for record retention.',
            'You may withdraw consent for data processing where consent was the basis for collection.',
            'You have the right to lodge a complaint with a relevant data protection authority.',
        ],
    },
];

const sectionTones = [
    {
        card: 'border-[#F4751E]/18 bg-[linear-gradient(145deg,rgba(244,117,30,0.08),rgba(11,8,6,0.92)_48%,rgba(0,0,0,0.95))]',
        icon: 'border-[#F4751E]/22 bg-[#F4751E]/[0.10]',
        glow: 'bg-[#F4751E]/[0.10]',
    },
    {
        card: 'border-white/[0.07] bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(8,8,8,0.94)_48%,rgba(23,12,6,0.85))]',
        icon: 'border-white/[0.1] bg-white/[0.04]',
        glow: 'bg-white/[0.06]',
    },
    {
        card: 'border-[#A16207]/16 bg-[linear-gradient(145deg,rgba(161,98,7,0.09),rgba(9,8,7,0.94)_52%,rgba(0,0,0,0.95))]',
        icon: 'border-[#A16207]/22 bg-[#A16207]/[0.10]',
        glow: 'bg-[#A16207]/[0.10]',
    },
    {
        card: 'border-[#F4751E]/14 bg-[linear-gradient(145deg,rgba(244,117,30,0.06),rgba(3,3,3,0.94)_45%,rgba(28,16,8,0.85))]',
        icon: 'border-[#F4751E]/18 bg-black/40',
        glow: 'bg-[#F4751E]/[0.08]',
    },
    {
        card: 'border-[#C9863D]/14 bg-[linear-gradient(145deg,rgba(201,134,61,0.07),rgba(15,15,14,0.94)_50%,rgba(0,0,0,0.95))]',
        icon: 'border-[#C9863D]/18 bg-[#C9863D]/[0.08]',
        glow: 'bg-[#C9863D]/[0.07]',
    },
    {
        card: 'border-[#8B5E34]/18 bg-[linear-gradient(145deg,rgba(139,94,52,0.09),rgba(13,14,14,0.94)_50%,rgba(0,0,0,0.95))]',
        icon: 'border-[#8B5E34]/22 bg-[#8B5E34]/[0.10]',
        glow: 'bg-[#8B5E34]/[0.08]',
    },
];

const PrivacyPolicy = () => {
    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="absolute left-[-15%] top-16 h-80 w-80 rounded-full bg-[#F4751E]/[0.06] blur-[100px]" style={{ contain: 'strict' }} />
                <div className="absolute right-[-10%] top-24 h-64 w-64 rounded-full bg-[#A16207]/[0.06] blur-[90px]" style={{ contain: 'strict' }} />

                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.06] mb-8">
                                <Shield className="w-3.5 h-3.5 text-[#F4751E]" />
                                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#F4751E]/80">Legal</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
                                Privacy <span className="gradient-text">Policy</span>
                            </h1>
                            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-2xl font-light mb-4">
                                Your privacy matters. This document explains how Continental Grand Technologies collects, uses, protects, and handles your personal information.
                            </p>
                            <p className="text-sm text-white/35 font-light">
                                Last updated: July 1, 2026
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <div className="section-divider" />

            {/* Content Sections */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute right-[-12%] top-[20%] h-72 w-72 rounded-full bg-[#F4751E]/[0.04] blur-[80px]" style={{ contain: 'strict' }} />

                <div className="container-main relative z-10">
                    <div className="flex flex-col gap-6 max-w-4xl">
                        {sections.map((section, index) => {
                            const tone = sectionTones[index % sectionTones.length];
                            return (
                                <Reveal key={section.title} delay={index * 0.08}>
                                    <div className={`relative overflow-hidden rounded-2xl border p-8 md:p-10 transition-all duration-500 group hover:border-[#F4751E]/30 ${tone.card}`}>
                                        {/* Top accent line */}
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/30 to-transparent opacity-60" />
                                        {/* Glow */}
                                        <div className={`absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${tone.glow}`} style={{ contain: 'strict' }} />

                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-[0_14px_40px_rgba(0,0,0,0.3)] shrink-0 ${tone.icon}`}>
                                                    <section.icon className="w-5 h-5 text-[#F4751E]" />
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight pt-1.5">{section.title}</h2>
                                            </div>
                                            <ul className="space-y-3 ml-0.5">
                                                {section.content.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F4751E]/40 shrink-0" />
                                                        <span className="text-sm md:text-[15px] text-white/55 leading-relaxed font-light">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="relative pb-24">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="relative max-w-4xl overflow-hidden rounded-2xl border border-[#F4751E]/16 bg-[radial-gradient(circle_at_18%_0%,rgba(244,117,30,0.12),transparent_34%),linear-gradient(145deg,rgba(244,117,30,0.06),rgba(4,4,4,0.97)_44%,rgba(0,0,0,0.98))] px-8 py-10 md:p-14">
                            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/40 to-transparent" />
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <Mail className="w-5 h-5 text-[#F4751E]/70" />
                                        <h3 className="text-xl font-semibold text-white tracking-tight">Questions about your data?</h3>
                                    </div>
                                    <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                                        If you have any questions about this Privacy Policy or wish to exercise your data rights, reach out to us directly.
                                    </p>
                                </div>
                                <a
                                    href="#contact"
                                    className="shrink-0 px-8 py-3.5 rounded-full bg-[#F4751E] text-white font-semibold text-sm hover:bg-[#e06815] transition-all duration-300 shadow-[0_12px_35px_rgba(244,117,30,0.2)] hover:shadow-[0_16px_45px_rgba(244,117,30,0.3)] hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2.5"
                                >
                                    Contact Us
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
