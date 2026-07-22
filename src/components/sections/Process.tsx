import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { processSteps } from '@/data/process-steps';
import type { ProcessStep } from '@/types';

interface ProcessStepCardProps {
    step: ProcessStep;
    index: number;
}

const ProcessStepCard = ({ step, index }: ProcessStepCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { margin: "-20% 0px -20% 0px" });
    const isEven = index % 2 === 0;

    return (
        <Reveal delay={0.15} direction={isEven ? 'right' : 'left'}>
            <div ref={cardRef} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Card content */}
                <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div 
                        className={`group relative overflow-hidden rounded-[2rem] border p-7 sm:p-8 md:p-10 transition-all duration-700 shadow-[0_15px_40px_rgba(0,0,0,0.5)] ${
                            isInView 
                                ? 'border-[#F4751E]/40 shadow-[0_0_35px_rgba(244,117,30,0.18)] bg-[#0d0906]' 
                                : 'border-white/[0.08] bg-[#0a0a0a] md:hover:border-[#F4751E]/30'
                        }`}
                    >
                        
                        {/* Background Image Layer — Crisp clarity on mobile when in view */}
                        {step.image && (
                            <div 
                                className={`absolute inset-0 z-0 transition-[transform,opacity] duration-700 md:group-hover:opacity-25 md:group-hover:scale-105 will-change-transform ${
                                    isInView ? 'opacity-30 scale-105' : 'opacity-10 md:opacity-10'
                                }`}
                                style={{
                                    backgroundImage: `url(${step.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        )}
                        
                        {/* Dark Overlays for legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 z-0" />
                        <div 
                            className={`absolute inset-0 bg-gradient-to-br from-[#F4751E]/[0.12] to-transparent transition-opacity duration-700 z-0 ${
                                isInView ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                            }`} 
                        />
                        <div className="absolute -inset-x-32 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-[opacity,transform] duration-700 group-hover:opacity-100 group-hover:translate-x-1/2 z-0 will-change-transform" />
                        
                        <div className={`relative z-10 flex flex-col gap-3 sm:gap-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                            <span className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none transition-colors duration-500 ${
                                isInView ? 'text-[#F4751E]/[0.45]' : 'text-white/[0.15] md:group-hover:text-[#F4751E]/[0.3]'
                            }`}>
                                {step.number}
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">{step.title}</h3>
                            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light">{step.description}</p>
                        </div>
                    </div>
                </div>

                {/* Timeline Orb */}
                <div 
                    className={`absolute left-[28px] md:relative md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border bg-[#111] flex items-center justify-center flex-shrink-0 z-20 group transition-all duration-700 mt-2 md:mt-0 cursor-default will-change-transform ${
                        isInView
                            ? 'border-[#F4751E]/70 shadow-[0_0_30px_rgba(244,117,30,0.5)] scale-105'
                            : 'border-white/[0.1] md:group-hover:border-[#F4751E]/60 md:group-hover:shadow-[0_0_35px_rgba(244,117,30,0.4)] md:group-hover:scale-110'
                    }`}
                >
                    <div className={`absolute inset-0 bg-[#F4751E]/15 rounded-full transition-transform duration-500 ${
                        isInView ? 'scale-100' : 'scale-0 md:group-hover:scale-100'
                    }`} />
                    <step.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-colors duration-500 relative z-10 ${
                        isInView ? 'text-[#F4751E]' : 'text-white/40 md:group-hover:text-[#F4751E]'
                    }`} />
                </div>

                {/* Spacer to push content to correct side on desktop */}
                <div className="hidden md:block flex-1" />
            </div>
        </Reveal>
    );
};

const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    
    // Animate a glowing line down the center using scaleY for better performance
    const scaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section id="process" className="section-padding relative overflow-hidden bg-[#050302]">
            <div className="absolute inset-x-0 top-32 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
            
            <div className="container-main relative z-10" ref={containerRef}>
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-28">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.05] px-4 py-2 mb-4 sm:mb-6">
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
                        className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#F4751E] to-transparent -translate-x-1/2 md:translate-x-0 origin-top will-change-transform"
                        style={{ scaleY }}
                    />

                    <div className="flex flex-col gap-10 md:gap-24 relative z-10">
                        {processSteps.map((step, index) => (
                            <ProcessStepCard key={step.number} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="section-divider mt-24 md:mt-32" />
        </section>
    );
};

export default Process;
