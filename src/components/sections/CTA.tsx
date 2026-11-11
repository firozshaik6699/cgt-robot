import Reveal from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { PulseBeams } from '@/components/ui/pulse-beams';
import { ctaBeams, ctaGradientColors } from '@/data/cta-beams';
import { openContactModal } from '@/hooks/useHashModal';

const CTA: React.FC = () => {
    return (
        <section id="cta" className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(14,7,3,0.9)_38%,rgba(2,2,2,1)_100%)]">
            <div className="container-main relative z-10">
                <Reveal duration={1}>
                    <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-[#F4751E]/22 bg-[radial-gradient(circle_at_18%_0%,rgba(244,117,30,0.18),transparent_36%),linear-gradient(145deg,rgba(244,117,30,0.08),rgba(5,5,5,0.97)_46%,rgba(2,2,2,0.99))] px-5 py-12 text-center sm:px-8 md:p-16 shadow-[0_36px_120px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/65 to-transparent" />
                        <div className="absolute right-[-10%] top-[-18%] h-64 w-64 rounded-full bg-[#F4751E]/[0.1] blur-[80px]" style={{ contain: 'strict' }} />

                        <div className="relative z-10 flex flex-col items-center">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F4751E]/80 mb-5">
                                Ready to Architect?
                            </p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-5 leading-[0.95] text-white text-center">
                                Let&apos;s engineer your<br />
                                <span className="gradient-text">next core system.</span>
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-lg mx-auto leading-relaxed font-light text-center">
                                From autonomous AI pipelines to enterprise SaaS platforms — talk directly with senior engineers, not account managers.
                            </p>

                            <div className="w-full relative mt-6 -mb-10 h-[270px] flex items-center justify-center">
                                <PulseBeams
                                    beams={ctaBeams}
                                    gradientColors={ctaGradientColors}
                                    className="bg-transparent absolute inset-0"
                                >
                                    <button
                                        type="button"
                                        onClick={() => openContactModal()}
                                        className="bg-[#050505] w-[240px] sm:w-[285px] z-40 h-[66px] sm:h-[76px] group cursor-pointer relative shadow-[0_18px_50px_rgba(244,117,30,0.24)] hover:shadow-[0_22px_65px_rgba(244,117,30,0.42)] rounded-full p-px font-semibold text-white inline-block hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/70"
                                    >
                                        <span className="absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute inset-[-100%] animate-[spin_3.6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_48%,rgba(255,145,70,0.95)_100%)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(244,117,30,0.42)_0%,rgba(244,117,30,0)_75%)] opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
                                        </span>
                                        <div className="relative flex justify-center w-full text-center gap-2.5 h-full items-center z-10 rounded-full bg-gradient-to-b from-[#130c07] to-[#050505] px-6 ring-1 ring-white/12 group-hover:ring-[#F4751E]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-300">
                                            <span className="text-lg sm:text-xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#FFBD8C] font-bold tracking-tight">
                                                Start Your Project
                                            </span>
                                            <ArrowUpRight className="w-5 h-5 text-[#F4751E] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                        </div>
                                    </button>
                                </PulseBeams>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F4751E]/[0.04] blur-[90px] pointer-events-none" style={{ contain: 'strict' }} />
        </section>
    );
};

export default CTA;
