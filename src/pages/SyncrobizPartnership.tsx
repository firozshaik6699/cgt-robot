import { ArrowUpRight, BadgeCheck, CheckCircle2, Globe2, Handshake, Layers3, Megaphone, Network, ShieldCheck, Workflow } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import logo from '@/assets/logo_metallic_transparent.png';
import syncrobizLogo from '@/assets/syncrobiz_logo_transparent.png';

const partnershipPillars = [
    {
        icon: Layers3,
        title: 'Modern digital delivery',
        description: 'CGT continues to design and build custom software, AI automation, CRM systems, and business platforms for clients that need reliable execution.',
    },
    {
        icon: Megaphone,
        title: 'Expanded market reach',
        description: 'Syncrobiz supports reseller access, relationship building, and business-community reach so more teams can discover CGT services.',
    },
    {
        icon: ShieldCheck,
        title: 'Trusted client handoff',
        description: 'The collaboration is structured around clear communication, qualified opportunities, and a smooth path from first conversation to delivery.',
    },
];

const valuePoints = [
    'Affordable, scalable technology services for growing businesses',
    'A clearer route for customers who already work with Syncrobiz',
    'Production-grade execution from CGT across web, AI, CRM, and automation',
    'A practical partner model focused on access, trust, and long-term support',
];

const process = [
    {
        step: '01',
        title: 'Client access',
        description: 'Syncrobiz introduces suitable business opportunities and helps clients understand where modern digital systems can create impact.',
    },
    {
        step: '02',
        title: 'Solution fit',
        description: 'CGT evaluates the requirement, technical scope, timeline, and expected business outcome before proposing a delivery path.',
    },
    {
        step: '03',
        title: 'Build and support',
        description: 'CGT delivers the software system while both teams keep the client experience clear, coordinated, and professional.',
    },
];

const serviceAreas = [
    'AI automation and agents',
    'Full-stack web platforms',
    'CRM and reseller systems',
    'WhatsApp and AI bots',
    'Workflow modernization',
    'Custom business software',
];

const pillarTones = [
    {
        card: 'border-[#F4751E]/20 bg-[linear-gradient(145deg,rgba(244,117,30,0.105),rgba(18,13,10,0.58)_50%,rgba(255,255,255,0.018))]',
        icon: 'border-[#F4751E]/20 bg-[#F4751E]/[0.095]',
        glow: 'bg-[#F4751E]/[0.075]',
    },
    {
        card: 'border-[#C9863D]/18 bg-[linear-gradient(145deg,rgba(201,134,61,0.095),rgba(15,15,14,0.58)_50%,rgba(255,255,255,0.018))]',
        icon: 'border-[#C9863D]/20 bg-[#C9863D]/[0.085]',
        glow: 'bg-[#C9863D]/[0.06]',
    },
    {
        card: 'border-[#8B5E34]/20 bg-[linear-gradient(145deg,rgba(139,94,52,0.115),rgba(13,14,14,0.6)_50%,rgba(255,255,255,0.018))]',
        icon: 'border-[#8B5E34]/24 bg-[#8B5E34]/[0.105]',
        glow: 'bg-[#8B5E34]/[0.07]',
    },
];

const valueTones = [
    'border-[#F4751E]/22 bg-[linear-gradient(135deg,rgba(244,117,30,0.13),rgba(9,7,5,0.92)_58%,rgba(0,0,0,0.86))]',
    'border-[#E8A15A]/18 bg-[linear-gradient(135deg,rgba(232,161,90,0.105),rgba(9,7,5,0.92)_58%,rgba(0,0,0,0.86))]',
    'border-[#7A5135]/24 bg-[linear-gradient(135deg,rgba(122,81,53,0.16),rgba(9,7,5,0.92)_58%,rgba(0,0,0,0.86))]',
    'border-[#A36A3A]/20 bg-[linear-gradient(135deg,rgba(163,106,58,0.13),rgba(9,7,5,0.92)_58%,rgba(0,0,0,0.86))]',
];

const processTones = [
    'border-[#F4751E]/18 bg-[linear-gradient(150deg,rgba(244,117,30,0.09),rgba(255,255,255,0.014)_58%,rgba(0,0,0,0.18))]',
    'border-[#D59654]/16 bg-[linear-gradient(150deg,rgba(213,150,84,0.085),rgba(255,255,255,0.014)_58%,rgba(0,0,0,0.18))]',
    'border-[#7B4B2B]/20 bg-[linear-gradient(150deg,rgba(123,75,43,0.12),rgba(255,255,255,0.014)_58%,rgba(0,0,0,0.18))]',
];

const serviceTones = [
    'border-[#F4751E]/16 bg-[#F4751E]/[0.055]',
    'border-[#D79555]/16 bg-[#D79555]/[0.052]',
    'border-[#8E5D36]/20 bg-[#8E5D36]/[0.07]',
    'border-[#B9733D]/16 bg-[#B9733D]/[0.058]',
    'border-[#6F4B32]/20 bg-[#6F4B32]/[0.075]',
    'border-[#F4751E]/14 bg-[#F4751E]/[0.045]',
];

const outcomeLabels = ['Access', 'Clarity', 'Systems'];

const SyncrobizPartnership = () => {
    return (
        <main>
            <section className="relative isolate min-h-[92vh] flex items-center pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F4751E]/[0.055] blur-[90px] pointer-events-none" style={{ contain: 'strict' }} />
                <div aria-hidden="true" className="absolute right-[-14rem] top-20 h-[42rem] w-[42rem] rounded-full border border-white/[0.035]" />
                <div aria-hidden="true" className="absolute right-[-9rem] top-40 h-[28rem] w-[28rem] rounded-full border border-[#F4751E]/[0.07]" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />

                <div className="container-main relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
                        <Reveal>
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.055] px-4 py-2 mb-7 shadow-[0_0_35px_rgba(244,117,30,0.08)] backdrop-blur-xl">
                                    <span className="h-2 w-2 rounded-full bg-[#F4751E] shadow-[0_0_12px_rgba(244,117,30,0.55)]" />
                                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#F4751E]/80">Official Partnership</span>
                                </div>

                                <h1 className="text-[2.45rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[5.35rem] font-extrabold tracking-[-0.04em] leading-[0.96] text-white mb-7 drop-shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                                    CGT and Syncrobiz<br />
                                    <span className="gradient-text">partner for digital growth.</span>
                                </h1>

                                <p className="text-base md:text-lg text-white/58 leading-relaxed font-light max-w-2xl mb-9">
                                    Continental Grand Technologies is entering a professional collaboration with Syncrobiz to expand access to modern digital services through a trusted reseller and business-development partnership.
                                </p>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                    <a href="#contact" className="group w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-[#F4751E] text-white font-semibold text-sm hover:bg-[#e06815] transition-all duration-300 shadow-[0_12px_35px_rgba(244,117,30,0.22)] hover:shadow-[0_16px_45px_rgba(244,117,30,0.32)] hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4751E]/60 flex items-center gap-3">
                                        Discuss a project
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                    <a href="https://syncrobiz.vercel.app/" target="_blank" rel="noreferrer" className="group w-full sm:w-auto justify-center px-8 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-white/75 hover:text-white hover:bg-white/[0.06] hover:border-white/16 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/30 flex items-center gap-3 text-sm font-semibold backdrop-blur-xl">
                                        Visit Syncrobiz
                                        <Globe2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15} direction="left">
                            <div className="group relative rounded-[1.75rem] border border-white/[0.075] bg-white/[0.025] p-4 md:p-5 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#F4751E]/20 hover:bg-white/[0.035]">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-[#F4751E]/[0.055] pointer-events-none" />
                                <div className="absolute -inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60" />
                                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F4751E]/[0.06] blur-3xl transition-opacity duration-500 group-hover:opacity-80 pointer-events-none" />
                                <div className="relative z-10 flex flex-col gap-4">
                                    <div className="rounded-[1.5rem] border border-white/[0.08] bg-gradient-to-b from-black/60 to-black/40 p-6 md:p-8 shadow-inner shadow-white/[0.02] relative overflow-hidden transition-all duration-500 hover:border-[#F4751E]/20">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,117,30,0.06),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="relative flex items-center gap-4 mb-7">
                                            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40">Brand partnership</p>
                                            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                        </div>
                                        
                                        <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
                                            {/* Connecting Line Background (Visible on Desktop) */}
                                            <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                            <div className="hidden sm:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#F4751E]/50 to-transparent blur-[2px] transition-all duration-700 opacity-50 group-hover:opacity-100" />

                                            <div className="relative z-10 flex-1 w-full sm:w-auto overflow-hidden rounded-2xl border border-white/[0.06] bg-black/60 p-6 min-h-[130px] flex items-center justify-center transition-all duration-500 hover:border-white/[0.15] hover:bg-black/40 group/logo shadow-lg">
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100" />
                                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover/logo:via-[#F4751E]/50" />
                                                <img src={logo} alt="Continental Grand Technologies logo" className="h-16 md:h-20 w-auto object-contain brightness-125 contrast-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-transform duration-500 group-hover/logo:scale-110" />
                                            </div>

                                            <div className="relative z-20 mx-auto flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-full border border-[#F4751E]/25 bg-black/80 text-[#F4751E] shadow-[0_0_30px_rgba(244,117,30,0.15)] overflow-hidden group/icon backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-[#F4751E]/40 hover:shadow-[0_0_40px_rgba(244,117,30,0.3)]">
                                                <div className="absolute inset-0 bg-[#F4751E]/10 transition-colors duration-300 group-hover/icon:bg-[#F4751E]/20" />
                                                <span aria-hidden="true" className="absolute inset-[-2px] rounded-full border border-[#F4751E]/20 animate-[spin_3s_linear_infinite]" />
                                                <span aria-hidden="true" className="absolute inset-[-4px] rounded-full border border-[#F4751E]/10 animate-[spin_4s_linear_infinite_reverse]" />
                                                <Handshake className="h-6 w-6 relative z-10 transition-transform duration-300 group-hover/icon:-rotate-12" />
                                            </div>

                                            <div className="relative z-10 flex-1 w-full sm:w-auto overflow-hidden rounded-2xl border border-white/[0.06] bg-black/60 p-6 min-h-[130px] flex items-center justify-center transition-all duration-500 hover:border-white/[0.15] hover:bg-black/40 group/logo shadow-lg">
                                                <div className="absolute inset-0 bg-gradient-to-bl from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover/logo:opacity-100" />
                                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover/logo:via-[#00d2ff]/50" />
                                                <img src={syncrobizLogo} alt="Syncrobiz logo" className="h-20 md:h-24 w-auto max-w-[90%] object-contain brightness-110 contrast-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover/logo:scale-110" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-2">
                                        <div className="group/card relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/40 p-5 md:p-6 transition-all duration-500 hover:border-[#F4751E]/30 hover:bg-black/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,117,30,0.1)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#F4751E]/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                                            <div className="absolute -inset-x-full top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/50 to-transparent opacity-0 transition-all duration-700 group-hover/card:opacity-100 group-hover/card:translate-x-full" />
                                            <p className="relative text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F4751E] to-[#F4751E]/70 drop-shadow-sm transition-transform duration-300">CGT</p>
                                            <p className="relative mt-2 text-xs text-white/40 font-medium transition-colors duration-300 group-hover/card:text-white/70 uppercase tracking-wider">Digital engineering</p>
                                        </div>
                                        <div className="group/card relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/40 p-5 md:p-6 transition-all duration-500 hover:border-white/[0.15] hover:bg-black/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.03)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                                            <div className="absolute -inset-x-full top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover/card:opacity-100 group-hover/card:translate-x-full" />
                                            <p className="relative text-2xl font-extrabold text-white drop-shadow-sm transition-transform duration-300">B2B</p>
                                            <p className="relative mt-2 text-xs text-white/40 font-medium transition-colors duration-300 group-hover/card:text-white/70 uppercase tracking-wider">Reseller reach</p>
                                        </div>
                                        <div className="group/card relative overflow-hidden rounded-2xl border border-white/[0.05] bg-black/40 p-5 md:p-6 transition-all duration-500 hover:border-white/[0.15] hover:bg-black/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.03)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                                            <div className="absolute -inset-x-full top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover/card:opacity-100 group-hover/card:translate-x-full" />
                                            <p className="relative text-2xl font-extrabold text-white drop-shadow-sm transition-transform duration-300">2026</p>
                                            <p className="relative mt-2 text-xs text-white/40 font-medium transition-colors duration-300 group-hover/card:text-white/70 uppercase tracking-wider">Partnership launch</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(9,6,4,0.72)_16%,rgba(6,5,4,0.88)_50%,rgba(0,0,0,0)_100%)]">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/18 to-transparent" />
                <div aria-hidden="true" className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#F4751E]/[0.045] blur-[90px]" />
                <div className="container-main">
                    <Reveal>
                        <div className="max-w-3xl mb-14 md:mb-16">
                            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Partnership Purpose</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
                                A practical alliance<br />
                                <span className="text-white/45">for businesses ready to modernize.</span>
                            </h2>
                            <p className="text-base text-white/55 leading-relaxed max-w-2xl font-light">
                                The partnership brings together CGT's engineering capability and Syncrobiz's client access so businesses can move from software needs to working systems with less friction.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                        {partnershipPillars.map((pillar, index) => (
                            <Reveal key={pillar.title} delay={index * 0.1}>
                                <div className={`group relative h-full overflow-hidden rounded-2xl border ${pillarTones[index].card} p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#F4751E]/28 hover:shadow-[0_22px_70px_rgba(244,117,30,0.075)]`}>
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full ${pillarTones[index].glow} blur-3xl opacity-75 transition-opacity duration-500 group-hover:opacity-100`} />
                                    <div className={`relative h-11 w-11 rounded-xl border ${pillarTones[index].icon} flex items-center justify-center mb-6 shadow-[0_0_28px_rgba(244,117,30,0.07)]`}>
                                        <pillar.icon className="h-5 w-5 text-[#F4751E]/75" />
                                    </div>
                                    <h3 className="relative text-lg font-semibold text-white mb-3 tracking-tight">{pillar.title}</h3>
                                    <p className="relative text-sm text-white/55 leading-relaxed font-light">{pillar.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className="section-divider mt-16 md:mt-20" />
            </section>

            <section className="section-padding relative overflow-hidden bg-[radial-gradient(circle_at_18%_20%,rgba(244,117,30,0.13),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(8,5,3,0.92)_18%,rgba(3,3,3,0.97)_58%,rgba(11,6,3,0.9)_100%)]">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
                <div aria-hidden="true" className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#F4751E]/[0.055] blur-[110px]" />
                <div className="container-main relative z-10">
                    <div className="relative overflow-hidden rounded-[2.25rem] border border-[#F4751E]/[0.16] bg-[linear-gradient(145deg,rgba(10,7,5,0.99),rgba(0,0,0,0.96)_48%,rgba(30,14,5,0.9))] p-5 md:p-8 lg:p-10 shadow-[0_38px_130px_rgba(0,0,0,0.58)]">
                        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(244,117,30,0.12),transparent_30%),linear-gradient(90deg,rgba(244,117,30,0.06),transparent_38%,rgba(244,117,30,0.035))]" />
                        <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/45 to-transparent" />
                        <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#F4751E]/70 to-transparent" />
                        <div aria-hidden="true" className="absolute right-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-[#F4751E]/[0.1] blur-[80px]" />
                        <div aria-hidden="true" className="absolute left-[-8rem] bottom-[-8rem] h-72 w-72 rounded-full bg-[#6F3515]/[0.18] blur-[80px]" />
                        <div aria-hidden="true" className="absolute inset-0 opacity-[0.28]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
                        <div className="relative grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-12 items-stretch">
                            <Reveal>
                                <div className="h-full rounded-[1.75rem] border border-white/[0.06] bg-black/45 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/70 mb-4">What Clients Gain</p>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
                                        More access.<br />
                                        <span className="text-white/45">More clarity. Better systems.</span>
                                    </h2>
                                    <p className="text-base text-white/58 leading-relaxed max-w-md font-light">
                                        This collaboration is designed for founders, SMBs, and established teams that need modern technology without a confusing buying process.
                                    </p>
                                    <div className="relative mt-10 rounded-2xl border border-[#F4751E]/[0.14] bg-[linear-gradient(140deg,rgba(244,117,30,0.085),rgba(0,0,0,0.78)_50%,rgba(255,255,255,0.025))] p-5 overflow-hidden">
                                        <div aria-hidden="true" className="absolute inset-x-6 top-1/2 hidden h-px bg-gradient-to-r from-[#F4751E]/0 via-[#F4751E]/45 to-[#F4751E]/0 sm:block" />
                                        <div aria-hidden="true" className="absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />
                                        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-3">
                                            {['CGT', 'Syncrobiz', 'Clients'].map((label, index) => (
                                                <div key={label} className={`min-h-20 rounded-2xl border p-4 flex flex-col justify-between sm:min-h-24 ${index === 1 ? 'border-[#F4751E]/30 bg-[#F4751E]/[0.08]' : 'border-white/[0.08] bg-black/55'}`}>
                                                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/35">0{index + 1}</span>
                                                    <span className={`text-sm font-semibold ${index === 1 ? 'text-[#F4751E]' : 'text-white/82'}`}>{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-4 grid grid-cols-3 gap-3">
                                        {outcomeLabels.map((label) => (
                                            <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F4751E]/55">{label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <div className="grid grid-cols-1 gap-4 content-center">
                                {valuePoints.map((point, index) => (
                                    <Reveal key={point} delay={index * 0.08} direction="right">
                                        <div className={`group relative overflow-hidden rounded-2xl border ${valueTones[index]} p-5 md:p-6 hover:border-[#F4751E]/35 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_16px_48px_rgba(0,0,0,0.3)]`}>
                                            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#F4751E]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                            <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#F4751E]/[0.05] blur-2xl" />
                                            <div className="relative flex gap-4 items-start">
                                                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-[#F4751E]/22 bg-[#F4751E]/[0.1] shadow-[0_0_28px_rgba(244,117,30,0.09)]">
                                                    <CheckCircle2 className="h-4.5 w-4.5 text-[#F4751E]/85" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#F4751E]/55">Outcome 0{index + 1}</p>
                                                    <p className="text-sm md:text-base text-white/78 leading-relaxed font-light">{point}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-divider mt-16 md:mt-20" />
            </section>

            <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(10,7,5,0.82)_16%,rgba(4,4,4,0.94)_48%,rgba(0,0,0,0)_100%)]">
                <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(244,117,30,0.07),transparent_46%)]" />
                <div className="container-main">
                    <Reveal>
                        <div className="max-w-2xl mb-14 md:mb-16">
                            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Collaboration Model</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
                                Built around a clear<br />
                                <span className="text-white/45">reseller-to-delivery flow.</span>
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                        {process.map((item, index) => (
                            <Reveal key={item.step} delay={index * 0.12}>
                                <div className={`group relative h-full overflow-hidden rounded-2xl border ${processTones[index]} p-7 md:p-8 hover:-translate-y-1 hover:border-[#F4751E]/24 transition-all duration-500`}>
                                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="absolute -bottom-16 -left-12 h-36 w-36 rounded-full bg-[#F4751E]/[0.035] blur-3xl opacity-70" />
                                    <span className="absolute right-6 top-5 text-6xl font-extrabold text-white/[0.035] select-none leading-none">{item.step}</span>
                                    <div className="relative z-10">
                                        <div className="mb-6 h-10 w-10 rounded-xl border border-[#F4751E]/12 bg-[#F4751E]/[0.06] flex items-center justify-center shadow-[0_0_28px_rgba(244,117,30,0.07)]">
                                            <Network className="h-4 w-4 text-[#F4751E]/70" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                                        <p className="text-sm text-white/55 leading-relaxed font-light">{item.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div className="section-divider mt-16 md:mt-20" />
            </section>

            <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(7,5,4,0.88)_18%,rgba(0,0,0,0.92)_100%)]">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/18 to-transparent" />
                <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-96 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4751E]/[0.045] blur-[100px]" />
                <div className="container-main">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                        <Reveal>
                            <div>
                                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Service Coverage</p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
                                    Digital services<br />
                                    <span className="text-white/45">ready for partner-led growth.</span>
                                </h2>
                                <p className="text-base text-white/55 leading-relaxed max-w-xl font-light mb-8">
                                    CGT's delivery focus remains the same: useful, scalable systems that help organizations operate faster, serve customers better, and reduce manual work.
                                </p>
                                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4751E]/75 hover:text-[#F4751E] transition-colors duration-300 group">
                                    Start a partnership-led project
                                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={0.12} direction="left">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {serviceAreas.map((service, index) => (
                                    <div key={service} className={`group rounded-2xl border ${serviceTones[index]} px-5 py-4 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F4751E]/24 hover:bg-[#F4751E]/[0.08]`}>
                                        <BadgeCheck className="h-4 w-4 text-[#F4751E]/70 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                                        <span className="text-sm text-white/62 font-medium">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="section-divider mt-16 md:mt-20" />
            </section>

            <section className="section-padding relative overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="relative max-w-4xl mx-auto text-center rounded-[2rem] border border-white/[0.06] bg-white/[0.018] px-5 py-12 md:px-12 md:py-16 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.32)]">
                            <div aria-hidden="true" className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent" />
                            <div aria-hidden="true" className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#F4751E]/[0.045] blur-3xl" />
                            <div className="relative mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                                <Workflow className="h-5 w-5 text-[#F4751E]/75" />
                            </div>
                            <p className="relative text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/70 mb-6">Shared Growth</p>
                            <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95] text-white">
                                A trusted route to<br />
                                <span className="gradient-text">modern technology.</span>
                            </h2>
                            <p className="relative text-base md:text-lg text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                                For clients and business communities connected through Syncrobiz, CGT is ready to deliver digital systems with care, clarity, and long-term engineering focus.
                            </p>
                            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                                <a href="#contact" className="group w-full sm:w-auto px-10 py-4 rounded-full bg-[#F4751E] text-white font-semibold text-base hover:bg-[#e06815] transition-all duration-300 shadow-[0_15px_40px_rgba(244,117,30,0.2)] hover:shadow-[0_20px_50px_rgba(244,117,30,0.3)] hover:-translate-y-1 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F4751E]/60 flex items-center justify-center gap-3">
                                    Contact CGT
                                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                                <a href="/" className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 hover:text-white font-semibold text-base hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/30 flex justify-center items-center">
                                    Explore CGT
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4751E]/[0.035] blur-[80px] pointer-events-none" style={{ contain: 'strict' }} />
            </section>
        </main>
    );
};

export default SyncrobizPartnership;
