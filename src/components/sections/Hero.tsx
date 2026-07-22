import { Suspense, lazy } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Play, Star } from 'lucide-react';
import Spotlight from "@/components/ui/Spotlight";
import HeroBackground from '@/components/sections/HeroBackground';

// Lazy load heavy 3D Spline scene
const SplineScene = lazy(() => import("@/components/ui/SplineScene"));

const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.25, 0.4, 0, 1] },
        },
    };

    return (
        <HeroBackground className="flex flex-col items-center justify-center pt-24 md:pt-20 px-4">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.03)" />

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
                {/* Left Column */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[55%] z-10 p-4 pt-16 sm:pt-20 lg:pt-16">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="px-3 py-1 sm:px-3.5 sm:py-1.5 mb-4 md:mb-8 flex items-center gap-2 sm:gap-2.5 z-10 border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md rounded-full select-none shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                    >
                        <span className="relative flex h-2 w-2 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4751E] opacity-40" style={{ animationDuration: '2.5s' }} />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F4751E] shadow-[0_0_8px_rgba(244,117,30,0.8)]" />
                        </span>
                        <span className="text-[9.5px] sm:text-[10.5px] font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase text-white/80 sm:text-white/60">Digital Engineering Studio</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl z-10 flex flex-col items-center lg:items-start drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]"
                    >
                        <h1 className="text-[1.95rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-[-0.04em] mb-4 md:mb-6 text-white leading-[1.08] md:leading-[0.95]">
                            <div className="overflow-hidden pb-1">
                                <motion.div variants={itemVariants}>
                                    We Build
                                </motion.div>
                            </div>
                            <div className="overflow-hidden pb-1">
                                <motion.div variants={itemVariants} className="gradient-text">
                                    Software Systems
                                </motion.div>
                            </div>
                            <div className="overflow-hidden pb-2">
                                <motion.div variants={itemVariants} className="text-white/80">
                                    That Scale.
                                </motion.div>
                            </div>
                        </h1>

                        <div className="overflow-hidden mt-1 sm:mt-2">
                            <motion.p
                                variants={itemVariants}
                                className="text-xs sm:text-base md:text-lg text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed font-light px-2 lg:px-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
                            >
                                Full-stack platforms and AI automation engineered for precision, speed, and business outcomes.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-6 md:mt-10 z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-max px-8 sm:px-0"
                    >
                        <a href="#contact" className="hidden sm:flex w-full sm:w-auto justify-center px-8 py-3.5 md:px-10 md:py-4 text-sm font-semibold text-white bg-[#F4751E] hover:bg-[#e06815] transition-all duration-300 items-center gap-3 rounded-full shadow-[0_8px_30px_rgba(244,117,30,0.25)] hover:shadow-[0_12px_40px_rgba(244,117,30,0.35)] hover:-translate-y-0.5 active:scale-[0.98]">
                            Book a Call
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a href="#work" className="w-full sm:w-auto justify-center px-8 py-3 md:px-10 md:py-4 text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/15 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-2 rounded-full hover:-translate-y-0.5 active:scale-[0.98] shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
                            <Play className="w-3.5 h-3.5 fill-white/90" />
                            View Work
                        </a>
                    </motion.div>

                    {/* Trust Signal — 5-Star Rating & Verified Client Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="mt-7 md:mt-12 flex items-center justify-center lg:justify-start w-full select-none"
                    >
                        <div className="flex items-center gap-2 sm:gap-2.5 bg-[#0a0a0a]/90 backdrop-blur-xl px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.7)]">
                            <div className="flex items-center gap-0.5 text-[#F4751E]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F4751E] stroke-none" />
                                ))}
                            </div>
                            <span className="text-xs sm:text-sm font-bold text-white">4.9/5</span>
                            <span className="text-white/20 text-xs">&bull;</span>
                            <span className="text-white/80 text-[10.5px] sm:text-xs font-medium">Trusted by 50+ Growing Businesses</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Spline 3D Interactive Model */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-[2%] md:top-0 bottom-0 right-0 w-full lg:w-[60%] pointer-events-auto">
                    <Suspense fallback={null}>
                        <SplineScene
                            scene="https://res.cloudinary.com/uz4o66yy/raw/upload/v1783878506/cgt-robot/public/spline/scene.splinecode"
                            className="w-full h-full"
                        />
                    </Suspense>
                </div>
            </div>
        </HeroBackground>
    );
};

export default Hero;
