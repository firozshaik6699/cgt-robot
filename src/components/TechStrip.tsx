import Reveal from '@/components/ui/Reveal';
import { CORE_TECHNOLOGIES } from '@/constants';

const TechStrip = () => {
    return (
        <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(12,7,4,0.72)_42%,rgba(0,0,0,0)_100%)]">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#F4751E]/20 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-44 w-[min(760px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4751E]/[0.055] blur-[70px]" style={{ contain: 'strict' }} />

            <div className="container-main relative z-10">
                <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/[0.07] bg-black/45 px-4 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.36)] backdrop-blur-md">
                    <Reveal>
                        <p className="text-center text-xs font-semibold tracking-[0.22em] uppercase text-white/62 mb-9">
                            Built with industry-leading technologies
                        </p>
                    </Reveal>

                    <div
                        className="relative flex overflow-hidden w-full max-w-5xl mx-auto"
                        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        <div className="flex w-max animate-marquee whitespace-nowrap">
                            <div className="flex items-center">
                                {CORE_TECHNOLOGIES.map((tech, i) => (
                                    <span key={`t1-${i}`} className="mx-6 rounded-full border border-white/[0.07] bg-white/[0.035] px-5 py-2 text-sm md:mx-8 md:text-base font-bold tracking-[0.12em] text-white/48 uppercase select-none flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center">
                                {CORE_TECHNOLOGIES.map((tech, i) => (
                                    <span key={`t2-${i}`} className="mx-6 rounded-full border border-white/[0.07] bg-white/[0.035] px-5 py-2 text-sm md:mx-8 md:text-base font-bold tracking-[0.12em] text-white/48 uppercase select-none flex-shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStrip;
