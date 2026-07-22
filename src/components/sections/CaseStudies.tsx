import Reveal from '@/components/ui/Reveal';
import { CardStack } from '@/components/ui/card-stack';
import { caseStudies } from '@/data/case-studies';

const CaseStudies = () => {
    return (
        <section id="work" className="section-padding relative overflow-hidden bg-[radial-gradient(circle_at_12%_18%,rgba(244,117,30,0.1),transparent_30%),radial-gradient(circle_at_90%_74%,rgba(161,98,7,0.09),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,5,5,0.96)_18%,rgba(10,6,3,0.94)_72%,rgba(0,0,0,0)_100%)]">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="container-main relative z-10">
                {/* Section Header */}
                <Reveal>
                    <div className="max-w-2xl mb-12 md:mb-16">
                        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/70 mb-4">Our Work</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
                            Projects that speak<br />
                            <span className="text-white/60">louder than promises.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Card Stack Showcase */}
                <Reveal>
                    <CardStack
                        items={caseStudies}
                        initialIndex={0}
                        autoAdvance
                        intervalMs={4000}
                        pauseOnHover
                        showDots
                        cardWidth={520}
                        cardHeight={320}
                    />
                </Reveal>
            </div>

            <div className="section-divider mt-16 md:mt-20" />
        </section>
    );
};

export default CaseStudies;
