import { FileText, Scale, Briefcase, ShieldCheck, CreditCard, AlertTriangle, XCircle, Landmark, Mail, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const sections = [
    {
        icon: FileText,
        title: 'Acceptance of Terms',
        content: [
            'By accessing or using the services provided by Continental Grand Technologies ("CGT", "we", "our"), you agree to be bound by these Terms of Service.',
            'These terms constitute a legally binding agreement between you (the "Client") and CGT. If you do not agree to these terms, you must discontinue use of our services immediately.',
            'We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.',
            'These terms apply to all visitors, clients, and any other users who access or use our services, website, and deliverables.',
        ],
    },
    {
        icon: Briefcase,
        title: 'Services Description',
        content: [
            'CGT provides custom software development, AI automation solutions, full-stack web applications, CRM integrations, WhatsApp/AI bots, and enterprise platform engineering.',
            'The specific scope, deliverables, timeline, and pricing of each project are defined in individual Statements of Work (SOW) or project proposals agreed upon by both parties.',
            'We reserve the right to subcontract portions of the work to qualified partners or team members, while retaining full accountability for deliverable quality.',
            'Estimates provided during consultation are non-binding approximations. Final scope and pricing are confirmed in the signed project agreement.',
        ],
    },
    {
        icon: Scale,
        title: 'Client Responsibilities',
        content: [
            'The Client is responsible for providing accurate, complete, and timely information, assets, and feedback required for project execution.',
            'Delays in providing required materials, approvals, or feedback may result in adjusted timelines and potential additional costs.',
            'The Client shall designate a primary point of contact for all project communications to ensure alignment and efficiency.',
            'The Client is responsible for ensuring that any content, data, or materials provided do not infringe upon the intellectual property rights of third parties.',
            'Access credentials, API keys, and hosting environments required for deployment shall be provided securely and in a timely manner.',
        ],
    },
    {
        icon: ShieldCheck,
        title: 'Intellectual Property',
        content: [
            'Upon full payment of all agreed fees, CGT transfers ownership of custom-developed source code, designs, and deliverables to the Client as specified in the project agreement.',
            'CGT retains the right to use general-purpose tools, frameworks, libraries, and methodologies developed or refined during the project for future engagements.',
            'Pre-existing intellectual property, including proprietary tools, templates, and code libraries owned by CGT prior to the engagement, remains the property of CGT.',
            'The Client grants CGT permission to showcase the completed project in portfolios, case studies, and marketing materials, unless a written non-disclosure agreement states otherwise.',
        ],
    },
    {
        icon: CreditCard,
        title: 'Payment Terms',
        content: [
            'Payment schedules, milestones, and methods are defined in individual project proposals or SOWs and must be adhered to by the Client.',
            'A non-refundable deposit (typically 30–50% of total project value) is required before work commences, unless otherwise agreed in writing.',
            'Late payments beyond the agreed due date may incur a late fee of 2% per month on the outstanding balance.',
            'CGT reserves the right to pause or suspend work on any project where payments are overdue by more than 15 calendar days.',
            'All prices are quoted in the currency specified in the project agreement and are exclusive of applicable taxes unless stated otherwise.',
        ],
    },
    {
        icon: AlertTriangle,
        title: 'Limitation of Liability',
        content: [
            'CGT shall not be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with our services.',
            'Our total liability for any claim arising out of or related to a project shall not exceed the total fees paid by the Client for that specific engagement.',
            'CGT is not responsible for losses resulting from third-party service outages, hosting failures, or issues beyond our reasonable control (force majeure).',
            'The Client acknowledges that software development carries inherent risks and that CGT cannot guarantee the absence of all bugs or defects in delivered software.',
        ],
    },
    {
        icon: XCircle,
        title: 'Termination',
        content: [
            'Either party may terminate the engagement by providing 15 days written notice, subject to terms defined in the project agreement.',
            'In case of termination, the Client shall pay for all work completed up to the termination date, including any committed resources or third-party costs.',
            'CGT will deliver all completed work product and source code upon receipt of outstanding payments.',
            'Confidentiality obligations, intellectual property provisions, and limitation of liability clauses survive termination of the engagement.',
        ],
    },
    {
        icon: Landmark,
        title: 'Governing Law',
        content: [
            'These Terms of Service shall be governed by and construed in accordance with the laws of India.',
            'Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Andhra Pradesh, India.',
            'Both parties agree to attempt good-faith negotiation and mediation before pursuing formal legal proceedings.',
            'If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.',
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
    {
        card: 'border-[#B9733D]/14 bg-[linear-gradient(145deg,rgba(185,115,61,0.07),rgba(10,9,8,0.94)_50%,rgba(0,0,0,0.95))]',
        icon: 'border-[#B9733D]/18 bg-[#B9733D]/[0.08]',
        glow: 'bg-[#B9733D]/[0.07]',
    },
    {
        card: 'border-[#6F4B32]/18 bg-[linear-gradient(145deg,rgba(111,75,50,0.10),rgba(12,11,10,0.94)_48%,rgba(0,0,0,0.95))]',
        icon: 'border-[#6F4B32]/22 bg-[#6F4B32]/[0.10]',
        glow: 'bg-[#6F4B32]/[0.08]',
    },
];

const TermsOfService = () => {
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
                                <Scale className="w-3.5 h-3.5 text-[#F4751E]" />
                                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#F4751E]/80">Legal</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
                                Terms of <span className="gradient-text">Service</span>
                            </h1>
                            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-2xl font-light mb-4">
                                These terms govern the professional relationship between Continental Grand Technologies and our clients. Please read them carefully before engaging our services.
                            </p>
                            <p className="text-sm text-white/35 font-light">
                                Effective date: July 1, 2026
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <div className="section-divider" />

            {/* Content Sections */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute right-[-12%] top-[20%] h-72 w-72 rounded-full bg-[#F4751E]/[0.04] blur-[80px]" style={{ contain: 'strict' }} />
                <div className="absolute left-[-8%] bottom-[15%] h-56 w-56 rounded-full bg-[#A16207]/[0.04] blur-[70px]" style={{ contain: 'strict' }} />

                <div className="container-main relative z-10">
                    <div className="flex flex-col gap-6 max-w-4xl">
                        {sections.map((section, index) => {
                            const tone = sectionTones[index % sectionTones.length];
                            return (
                                <Reveal key={section.title} delay={index * 0.06}>
                                    <div className={`relative overflow-hidden rounded-2xl border p-8 md:p-10 transition-all duration-500 group hover:border-[#F4751E]/30 ${tone.card}`}>
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/30 to-transparent opacity-60" />
                                        <div className={`absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${tone.glow}`} style={{ contain: 'strict' }} />

                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shadow-[0_14px_40px_rgba(0,0,0,0.3)] shrink-0 ${tone.icon}`}>
                                                    <section.icon className="w-5 h-5 text-[#F4751E]" />
                                                </div>
                                                <div className="flex items-center gap-3 pt-1.5">
                                                    <span className="text-xs font-mono text-[#F4751E]/50 tracking-wider">{String(index + 1).padStart(2, '0')}</span>
                                                    <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">{section.title}</h2>
                                                </div>
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
                                        <h3 className="text-xl font-semibold text-white tracking-tight">Need clarification?</h3>
                                    </div>
                                    <p className="text-sm text-white/50 font-light max-w-md leading-relaxed">
                                        If you have questions about these terms or need a custom agreement for your project, our team is here to help.
                                    </p>
                                </div>
                                <a
                                    href="#contact"
                                    className="shrink-0 px-8 py-3.5 rounded-full bg-[#F4751E] text-white font-semibold text-sm hover:bg-[#e06815] transition-all duration-300 shadow-[0_12px_35px_rgba(244,117,30,0.2)] hover:shadow-[0_16px_45px_rgba(244,117,30,0.3)] hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2.5"
                                >
                                    Get in Touch
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

export default TermsOfService;
