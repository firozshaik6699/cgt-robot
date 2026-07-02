import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { Compass, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'We dive deep into your business, goals, and technical landscape to understand what needs to be built and why.',
        icon: Compass,
        image: '/images/discover.jpg',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Architecture, data flows, and user experience — mapped out before a single line of code is written.',
        icon: PenTool,
        image: '/images/process/design.png',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Agile sprints with transparent progress. You see working software every week, not just at the end.',
        icon: Code2,
        image: '/images/process/build.png',
    },
    {
        number: '04',
        title: 'Deploy',
        description: 'Production-grade deployment with monitoring, documentation, and ongoing support. We don\'t just launch and leave.',
        icon: Rocket,
        image: '/images/process/deploy.png',
    },
];

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    
    // Animate a glowing line down the center using scaleY for better performance
    const scaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section id="process" className="section-padding relative overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(244,117,30,0.08),transparent_50%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,3,2,0.9)_20%,rgba(5,5,5,0.95)_80%,rgba(0,0,0,0)_100%)]">
            <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
            
            <div className="container-main relative z-10" ref={containerRef}>
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.05] px-4 py-2 mb-6">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F4751E] shadow-[0_0_10px_rgba(244,117,30,0.8)]" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F4751E]/80">Our Process</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-[1.1]">
                            A structured path<br />
                            <span className="text-white/45">from idea to scale.</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="relative max-w-4xl mx-auto">
                    {/* The glowing center line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/[0.05] -translate-x-1/2 md:translate-x-0" />
                    <motion.div 
                        className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#F4751E] to-transparent -translate-x-1/2 md:translate-x-0 origin-top shadow-[0_0_15px_rgba(244,117,30,0.8)]"
                        style={{ scaleY }}
                    />

                    <div className="flex flex-col gap-12 md:gap-24 relative z-10">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <Reveal key={step.number} delay={0.2} direction={isEven ? 'right' : 'left'}>
                                    <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        
                                        {/* Card content */}
                                        <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                                            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-black/60 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#F4751E]/30 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
                                                
                                                {/* Background Image Layer */}
                                                {step.image && (
                                                    <div 
                                                        className="absolute inset-0 z-0 opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-[30%] group-hover:scale-105"
                                                        style={{
                                                            backgroundImage: `url(${step.image})`,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                        }}
                                                    />
                                                )}
                                                
                                                {/* Dark Overlays for legibility */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-0" />
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#F4751E]/[0.08] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0 mix-blend-overlay" />
                                                <div className="absolute -inset-x-32 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-1/2 z-0" />
                                                
                                                <div className={`relative z-10 flex flex-col gap-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                                    <span className="text-5xl md:text-6xl font-extrabold text-white/[0.15] leading-none group-hover:text-[#F4751E]/[0.3] transition-colors duration-500">{step.number}</span>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{step.title}</h3>
                                                    <p className="text-base text-white/75 leading-relaxed font-light">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline Orb */}
                                        <div className="absolute left-[28px] md:relative md:left-0 -translate-x-1/2 md:translate-x-0 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/[0.1] bg-black/80 backdrop-blur-md flex items-center justify-center flex-shrink-0 z-20 group transition-all duration-500 hover:border-[#F4751E]/60 hover:shadow-[0_0_35px_rgba(244,117,30,0.4)] hover:scale-110 mt-2 md:mt-0 cursor-default">
                                            <div className="absolute inset-0 bg-[#F4751E]/10 rounded-full scale-0 transition-transform duration-500 group-hover:scale-100" />
                                            <step.icon className="h-5 w-5 md:h-6 md:w-6 text-white/40 group-hover:text-[#F4751E] transition-colors duration-500 relative z-10" />
                                        </div>

                                        {/* Spacer to push content to correct side on desktop */}
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="section-divider mt-24 md:mt-32" />
        </section>
    );
};

export default Process;
