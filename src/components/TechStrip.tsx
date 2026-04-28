import Reveal from '@/components/ui/Reveal';
import { CORE_TECHNOLOGIES } from '@/constants';

const TechStrip = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container-main">
                <Reveal>
                    <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-white/15 mb-12">
                        Built with industry-leading technologies
                    </p>
                </Reveal>
            </div>

            <div
                className="relative flex overflow-hidden w-full max-w-5xl mx-auto"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)' }}
            >
                <div className="flex w-[200%] animate-marquee whitespace-nowrap" style={{ willChange: 'transform' }}>
                    <div className="flex justify-around w-1/2 items-center">
                        {CORE_TECHNOLOGIES.map((tech, i) => (
                            <span key={`t1-${i}`} className="mx-6 md:mx-10 text-lg md:text-xl font-bold tracking-[0.1em] text-white/[0.06] uppercase select-none">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-around w-1/2 items-center">
                        {CORE_TECHNOLOGIES.map((tech, i) => (
                            <span key={`t2-${i}`} className="mx-6 md:mx-10 text-lg md:text-xl font-bold tracking-[0.1em] text-white/[0.06] uppercase select-none">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStrip;
