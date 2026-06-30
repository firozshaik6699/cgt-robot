import Reveal from '@/components/ui/Reveal';
import { CardStack, CardStackItem } from '@/components/ui/card-stack';

import fleetMasterImg from '@/assets/fleet-master-msmt.png';
import muhasibImg from '@/assets/muhasib.png';
import nexoraImg from '@/assets/nexora.png';
import pizzaImg from '@/assets/pizza.png';
import toonhubImg from '@/assets/toonhub.png';

const projectItems: CardStackItem[] = [
    {
        id: 1,
        title: 'Fleet Master MSMT',
        description: 'Enterprise fleet management & tracking platform',
        imageSrc: fleetMasterImg,
        href: 'https://fleet-master-msmt.vercel.app/',
    },
    {
        id: 2,
        title: 'Muhasib',
        description: 'AI-powered accounting & invoice automation',
        imageSrc: muhasibImg,
        href: 'https://muhasib-fawn.vercel.app/landing.html',
    },
    {
        id: 3,
        title: 'Nexora',
        description: 'Immersive gaming platform & interactive game demo',
        imageSrc: nexoraImg,
        href: 'https://nexora-six-green-83.vercel.app/',
    },
    {
        id: 4,
        title: 'Pizza Ordering Platform',
        description: 'Full-stack food ordering & delivery system',
        imageSrc: pizzaImg,
        href: 'https://pizza-nu-navy.vercel.app/',
    },
    {
        id: 5,
        title: 'ToonHub',
        description: 'Creative content & animation marketplace',
        imageSrc: toonhubImg,
        href: 'https://toonhub-weld.vercel.app/',
    },
];

const CaseStudies = () => {
    return (
        <section id="work" className="section-padding relative overflow-hidden bg-[radial-gradient(circle_at_12%_18%,rgba(244,117,30,0.1),transparent_30%),radial-gradient(circle_at_90%_74%,rgba(161,98,7,0.09),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,5,5,0.96)_18%,rgba(10,6,3,0.94)_72%,rgba(0,0,0,0)_100%)]">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="container-main relative z-10">
                {/* Section Header */}
                <Reveal>
                    <div className="max-w-2xl mb-16 md:mb-20">
                        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Our Work</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
                            Projects that speak<br />
                            <span className="text-white/45">louder than promises.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Card Stack Showcase */}
                <Reveal>
                    <CardStack
                        items={projectItems}
                        initialIndex={0}
                        autoAdvance
                        intervalMs={2000}
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
