import Reveal from '@/components/ui/Reveal';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'We dive deep into your business, goals, and technical landscape to understand what needs to be built and why.',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Architecture, data flows, and user experience — mapped out before a single line of code is written.',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Agile sprints with transparent progress. You see working software every week, not just at the end.',
    },
    {
        number: '04',
        title: 'Deploy',
        description: 'Production-grade deployment with monitoring, documentation, and ongoing support. We don\'t just launch and leave.',
    },
];

const Process = () => {
    return (
        <section id="process" className="section-padding relative">
            <div className="container-main">
                {/* Section Header */}
                <Reveal>
                    <div className="max-w-2xl mb-16 md:mb-20">
                        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Our Process</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
                            A clear path<br />
                            <span className="text-white/30">from idea to launch.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Process Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {steps.map((step, index) => (
                        <Reveal key={step.number} delay={index * 0.12}>
                            <div className="relative p-8 md:p-9 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500 group h-full">
                                {/* Step number */}
                                <span className="text-6xl font-extrabold text-white/[0.04] absolute top-4 right-6 group-hover:text-[#F4751E]/[0.06] transition-colors duration-500 select-none leading-none">{step.number}</span>
                                
                                {/* Connector line (except last) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/[0.06]" />
                                )}

                                <div className="relative z-10">
                                    <div className="w-8 h-8 rounded-lg bg-[#F4751E]/[0.06] border border-[#F4751E]/10 flex items-center justify-center mb-6">
                                        <span className="text-xs font-bold text-[#F4751E]/70">{step.number}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{step.title}</h3>
                                    <p className="text-sm text-white/30 leading-relaxed font-light">{step.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="section-divider mt-16 md:mt-20" />
        </section>
    );
};

export default Process;
