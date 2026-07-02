import Reveal from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

const audiences = [
    {
        title: 'Growing startups',
        description: 'that need production-grade systems, not prototypes.',
    },
    {
        title: 'SMBs scaling operations',
        description: 'looking to automate workflows and eliminate manual chaos.',
    },
    {
        title: 'Established businesses',
        description: 'ready to modernize legacy systems with AI-powered platforms.',
    },
    {
        title: 'Ambitious founders',
        description: 'who value clarity, quality, and strategic technical partnership.',
    },
];

const Differentiation = () => {
    return (
        <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(3,3,3,0.92)_0%,rgba(11,6,3,0.9)_48%,rgba(0,0,0,0)_100%)]">
            <div className="absolute left-[-8%] bottom-10 h-72 w-72 rounded-full bg-[#F4751E]/[0.07] blur-[80px]" style={{ contain: 'strict' }} />
            <div className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-[#F4751E]/25 to-transparent" />

            <div className="container-main relative z-10">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[linear-gradient(135deg,rgba(244,117,30,0.1),rgba(8,8,8,0.92)_36%,rgba(0,0,0,0.94))] p-6 md:p-8 lg:p-10 shadow-[0_34px_110px_rgba(0,0,0,0.4)]">
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/40 to-transparent" />
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                    {/* Left: Statement */}
                    <div className="lg:w-1/2 rounded-3xl border border-[#F4751E]/[0.12] bg-black/35 p-6 md:p-8">
                        <Reveal>
                            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Who We're For</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
                                We're not for <br />
                                <span className="text-white/45">everyone — and</span><br />
                                <span className="text-white/45">that's the point.</span>
                            </h2>
                            <p className="text-base text-white/55 leading-relaxed max-w-md font-light mb-8">
                                We focus on creating bespoke, high-quality software rather than standard, off-the-shelf solutions. We love partnering with teams who are ready to invest in building something truly exceptional.
                            </p>
                            <a 
                                href="#contact" 
                                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.08] px-5 text-sm font-semibold text-[#F4751E]/80 hover:text-[#F4751E] hover:border-[#F4751E]/35 hover:bg-[#F4751E]/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/45 transition-all duration-300 group"
                            >
                                Let's talk about your project
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </Reveal>
                    </div>

                    {/* Right: Audience Cards */}
                    <div className="lg:w-1/2 flex flex-col gap-3 md:gap-4">
                        {audiences.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.1} direction="right">
                                <div className="relative overflow-hidden p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-black/30 hover:border-[#F4751E]/25 hover:bg-black/45 transition-all duration-500 group">
                                    <div className="absolute left-0 top-5 h-10 w-px bg-[#F4751E]/45" />
                                    <div className="flex items-start gap-4">
                                        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.08] text-[11px] font-bold text-[#F4751E]/80">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div>
                                            <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight group-hover:text-[#F4751E]/85 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-white/58 font-light leading-relaxed">{item.description}</p>
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
    );
};

export default Differentiation;
