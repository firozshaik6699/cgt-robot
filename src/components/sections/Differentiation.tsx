import Reveal from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { audiences } from '@/data/audiences';
import { Button } from '@/components/ui/button';
import { openContactModal } from '@/hooks/useHashModal';

const Differentiation = () => {
    return (
        <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(3,3,3,0.92)_0%,rgba(11,6,3,0.9)_48%,rgba(0,0,0,0)_100%)]">
            <div className="absolute left-[-8%] bottom-10 h-72 w-72 rounded-full bg-[#F4751E]/[0.07] blur-[80px]" style={{ contain: 'strict' }} />
            <div className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-[#F4751E]/25 to-transparent" />

            <div className="container-main relative z-10">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(244,117,30,0.1),rgba(8,8,8,0.94)_36%,rgba(0,0,0,0.96))] p-6 md:p-8 lg:p-10 shadow-[0_34px_110px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/40 to-transparent" />
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                        {/* Left: Positioning Statement */}
                        <div className="lg:w-1/2 rounded-3xl border border-[#F4751E]/[0.14] bg-black/40 p-6 md:p-8 flex flex-col justify-between">
                            <Reveal>
                                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F4751E]/75 mb-4">
                                    Who We Partner With
                                </p>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
                                    We&apos;re not for<br />
                                    <span className="text-white/45">everyone — and</span><br />
                                    <span className="text-white/45">that&apos;s deliberate.</span>
                                </h2>
                                <p className="text-base text-white/60 leading-relaxed max-w-md font-light mb-8">
                                    We don&apos;t ship fragile templates or outsource code behind the scenes. We partner directly with founders and operators who want senior architecture ownership, clean maintainability, and measurable business leverage.
                                </p>
                                <Button
                                    type="button"
                                    variant="accent"
                                    onClick={() => openContactModal()}
                                >
                                    <span>Discuss Your Architecture</span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Button>
                            </Reveal>
                        </div>

                        {/* Right: Audience Profiles */}
                        <div className="lg:w-1/2 flex flex-col gap-3 md:gap-4">
                            {audiences.map((item, index) => (
                                <Reveal key={item.title} delay={index * 0.1} direction="right">
                                    <div className="relative overflow-hidden p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-black/35 hover:border-[#F4751E]/28 hover:bg-black/50 transition-all duration-500 group">
                                        <div className="absolute left-0 top-5 h-10 w-px bg-[#F4751E]/50" />
                                        <div className="flex items-start gap-4">
                                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F4751E]/25 bg-[#F4751E]/[0.09] text-[11px] font-bold text-[#F4751E]/90">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div>
                                                <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight group-hover:text-[#FF984F] transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-white/58 font-light leading-relaxed">
                                                    {item.description}
                                                </p>
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
