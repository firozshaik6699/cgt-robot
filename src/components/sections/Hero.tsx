import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Play, Star } from 'lucide-react';
import Spotlight from '@/components/ui/Spotlight';
import HeroBackground from '@/components/sections/HeroBackground';
import SplineScene from '@/components/ui/SplineScene';
import { Button } from '@/components/ui/button';
import { openContactModal } from '@/hooks/useHashModal';

const SCENE_URL =
    'https://res.cloudinary.com/uz4o66yy/raw/upload/v1783878506/cgt-robot/public/spline/scene.splinecode';

const Hero = () => {
    // Wait to trigger Hero typography/CTA entrance until Preloader unlocks (i.e. Robot is 100% loaded & painted)
    const [isRevealed, setIsRevealed] = useState<boolean>(() =>
        typeof window !== 'undefined' ? Boolean(window.__CGT_PRELOADER_DONE__) : false
    );

    useEffect(() => {
        if (window.__CGT_PRELOADER_DONE__) {
            setIsRevealed(true);
            return;
        }
        const handleReveal = () => setIsRevealed(true);
        window.addEventListener('cgt-preloader-reveal', handleReveal);
        return () => window.removeEventListener('cgt-preloader-reveal', handleReveal);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.08,
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 26, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.85, ease: [0.25, 0.4, 0, 1] },
        },
    };

    return (
        <HeroBackground className="flex flex-col items-center justify-center pt-24 md:pt-20 px-4">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.03)" />

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
                {/* Left Column */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[56%] z-10 p-4 pt-14 sm:pt-20 lg:pt-16">
                    {/* Studio Status Pill */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="px-3.5 py-1.5 mb-5 md:mb-8 flex items-center gap-2.5 z-10 border border-white/12 bg-[#080808]/95 backdrop-blur-md rounded-full select-none shadow-[0_6px_24px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08)]"
                    >
                        <span className="relative flex h-2 w-2 items-center justify-center">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4751E] opacity-45"
                                style={{ animationDuration: '2.5s' }}
                            />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F4751E] shadow-[0_0_8px_rgba(244,117,30,0.85)]" />
                        </span>
                        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-white/75">
                            Digital Engineering Studio
                        </span>
                    </motion.div>

                    {/* Primary Headline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isRevealed ? 'visible' : 'hidden'}
                        className="max-w-2xl z-10 flex flex-col items-center lg:items-start drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]"
                    >
                        <h1 className="text-[2.1rem] sm:text-[3.35rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-[-0.04em] mb-4 md:mb-6 text-white leading-[1.05] md:leading-[0.95]">
                            <div className="overflow-hidden pb-1">
                                <motion.div variants={itemVariants}>We Engineer</motion.div>
                            </div>
                            <div className="overflow-hidden pb-1">
                                <motion.div variants={itemVariants} className="gradient-text">
                                    Software Systems
                                </motion.div>
                            </div>
                            <div className="overflow-hidden pb-2">
                                <motion.div variants={itemVariants} className="text-white/85">
                                    Built to Scale.
                                </motion.div>
                            </div>
                        </h1>

                        <div className="overflow-hidden mt-1 sm:mt-2">
                            <motion.p
                                variants={itemVariants}
                                className="text-[13px] sm:text-base md:text-lg text-white/78 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light px-1 lg:px-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
                            >
                                Production-grade full-stack platforms, autonomous AI agents, and custom business systems — architected for sub-second speed and measurable ROI.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Unified Tactile CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                        transition={{ delay: 0.35, duration: 0.65 }}
                        className="mt-7 md:mt-10 z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full max-w-xs sm:max-w-none sm:w-max"
                    >
                        <Button
                            type="button"
                            size="lg"
                            onClick={() => openContactModal()}
                            className="w-full sm:w-auto"
                        >
                            <span>Book a Strategy Call</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>

                        <Button
                            asChild
                            variant="secondary"
                            size="lg"
                            className="w-full sm:w-auto bg-[#080808]/88 hover:bg-white/[0.1]"
                        >
                            <a href="#work">
                                <Play className="w-3.5 h-3.5 fill-white/90" />
                                <span>Explore Our Work</span>
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Proof Pill */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.55, duration: 0.8 }}
                        className="mt-7 md:mt-11 flex items-center justify-center lg:justify-start w-full select-none"
                    >
                        <div className="flex items-center gap-2 sm:gap-2.5 bg-[#080808]/90 backdrop-blur-xl px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)]">
                            <div className="flex items-center gap-0.5 text-[#F4751E]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F4751E] stroke-none" />
                                ))}
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-white">4.9/5</span>
                            <span className="text-white/20 text-xs">&bull;</span>
                            <span className="text-white/75 text-[11px] sm:text-xs font-medium">
                                Trusted by 50+ Scaling Teams
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3D Interactive Spline Stage — Eagerly mounted with explicit iOS Safari viewport height */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[2%] md:top-0 bottom-0 right-0 w-full lg:w-[60%] h-[98%] md:h-full pointer-events-auto">
                    <SplineScene
                        scene={SCENE_URL}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </HeroBackground>
    );
};

export default Hero;
