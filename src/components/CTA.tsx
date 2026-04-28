import Reveal from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

const CTA: React.FC = () => {
    return (
        <section id="cta" className="section-padding relative overflow-hidden">
            <div className="container-main relative z-10">
                <Reveal duration={1}>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/70 mb-6">Ready to Start?</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95] text-white">
                            Let's build your<br />
                            <span className="gradient-text">next system.</span>
                        </h2>
                        <p className="text-base md:text-lg text-white/55 mb-12 max-w-lg mx-auto leading-relaxed font-light">
                            Whether it's an AI agent, a full-stack platform, or a business system — we'll engineer it to perform.
                        </p>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                            <a href="#contact" className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 rounded-full bg-[#F4751E] text-white font-semibold text-base hover:bg-[#e06815] transition-all duration-300 shadow-[0_15px_40px_rgba(244,117,30,0.2)] hover:shadow-[0_20px_50px_rgba(244,117,30,0.3)] hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3">
                                Schedule a Call
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a href="#contact" className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 hover:text-white font-semibold text-base hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex justify-center items-center">
                                Send a Message
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#F4751E]/[0.02] blur-[120px] pointer-events-none" />
        </section>
    );
};

export default CTA;
