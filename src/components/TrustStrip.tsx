import Reveal from '@/components/ui/Reveal';

const TRUST_BRANDS = [
    'Enterprise SaaS', 'FinTech Startups', 'Healthcare AI', 'E-Commerce',
    'Real Estate Tech', 'EdTech Platforms', 'Logistics & Supply Chain', 'Government Systems'
];

const TrustStrip = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container-main">
                <Reveal>
                    <p className="text-center text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-12">
                        Trusted by growing businesses across industries
                    </p>
                </Reveal>

                {/* Scrolling logos marquee */}
                <div
                    className="relative flex overflow-hidden w-full"
                    style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    <div className="flex w-max animate-marquee" style={{ willChange: 'transform' }}>
                        <div className="flex flex-shrink-0 items-center justify-around px-8">
                            {TRUST_BRANDS.map((brand, i) => (
                                <span
                                    key={`b1-${i}`}
                                    className="mx-8 md:mx-12 text-sm md:text-base font-semibold tracking-widest text-white/40 uppercase select-none"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-around px-8">
                            {TRUST_BRANDS.map((brand, i) => (
                                <span
                                    key={`b2-${i}`}
                                    className="mx-8 md:mx-12 text-sm md:text-base font-semibold tracking-widest text-white/40 uppercase select-none"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-divider mt-16" />
        </section>
    );
};

export default TrustStrip;
