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
        <section className="section-padding relative">
            <div className="container-main">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
                    {/* Left: Statement */}
                    <div className="lg:w-1/2">
                        <Reveal>
                            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Who We're For</p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
                                We're not for <br />
                                <span className="text-white/45">everyone — and</span><br />
                                <span className="text-white/45">that's the point.</span>
                            </h2>
                            <p className="text-base text-white/55 leading-relaxed max-w-md font-light mb-8">
                                If you're after a cheap vendor who follows orders and delivers cookie-cutter solutions, we're not the right fit. We partner with teams who are ready to invest in building something exceptional.
                            </p>
                            <a 
                                href="#contact" 
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4751E]/70 hover:text-[#F4751E] transition-colors duration-300 group"
                            >
                                Let's talk about your project
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </Reveal>
                    </div>

                    {/* Right: Audience Cards */}
                    <div className="lg:w-1/2 flex flex-col gap-4">
                        {audiences.map((item, index) => (
                            <Reveal key={item.title} delay={index * 0.1} direction="right">
                                <div className="p-6 md:p-7 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-400 group">
                                    <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight group-hover:text-[#F4751E]/80 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-white/55 font-light leading-relaxed">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-divider mt-16 md:mt-20" />
        </section>
    );
};

export default Differentiation;
