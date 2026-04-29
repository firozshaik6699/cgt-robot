import { Suspense, lazy } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import Spotlight from "@/components/ui/Spotlight";

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
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-20 px-4 overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.03)" />

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10 pointer-events-none">
                {/* Left Column */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[55%] z-10 p-4 pointer-events-none pt-8 lg:pt-16">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="px-3 md:px-4 py-1.5 mb-6 md:mb-10 flex items-center gap-2 md:gap-3 z-10 border border-white/[0.06] bg-black/40 md:bg-white/[0.02] backdrop-blur-xl rounded-full"
                    >
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F4751E] shadow-[0_0_8px_rgba(244,117,30,0.5)]" />
                        <span className="text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-white/60 md:text-white/50">Digital Engineering Studio</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl z-10 flex flex-col items-center lg:items-start pointer-events-none"
                    >
                        <h1 className="text-[2.25rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-[-0.04em] mb-4 md:mb-6 text-white leading-[1.05] md:leading-[0.95] pointer-events-auto drop-shadow-2xl">
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
                                <motion.div variants={itemVariants} className="text-white/40">
                                    That Scale.
                                </motion.div>
                            </div>
                        </h1>

                        <div className="overflow-hidden mt-2 pointer-events-none">
                            <motion.p
                                variants={itemVariants}
                                className="text-sm sm:text-base md:text-lg text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light pointer-events-auto drop-shadow-lg px-2 lg:px-0"
                            >
                                Full-stack development, AI automation, and enterprise systems — engineered for businesses that demand precision and performance.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-8 md:mt-10 z-10 pointer-events-none flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-max px-6 sm:px-0"
                    >
                        <a href="#contact" className="w-full sm:w-auto justify-center px-8 py-3.5 md:px-10 md:py-4 text-sm font-semibold text-white bg-[#F4751E] hover:bg-[#e06815] transition-all duration-300 flex items-center gap-3 pointer-events-auto rounded-full shadow-[0_8px_30px_rgba(244,117,30,0.25)] hover:shadow-[0_12px_40px_rgba(244,117,30,0.35)] hover:-translate-y-0.5 active:scale-[0.98] backdrop-blur-md">
                            Book a Call
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a href="#work" className="w-full sm:w-auto justify-center px-8 py-3.5 md:px-10 md:py-4 text-sm font-semibold text-white/80 hover:text-white bg-black/40 md:bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex items-center gap-2 pointer-events-auto rounded-full hover:-translate-y-0.5 active:scale-[0.98] backdrop-blur-md">
                            <Play className="w-3.5 h-3.5" />
                            View Work
                        </a>
                    </motion.div>

                    {/* Trust Signal */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="mt-10 md:mt-12 pointer-events-none flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-3 md:gap-6 text-white/45 text-[10px] md:text-xs tracking-wide w-full"
                    >
                        <div className="flex items-center gap-1.5 md:gap-2 bg-black/40 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/5 md:border-transparent">
                            <span className="text-lg md:text-2xl font-bold text-white/70">50+</span>
                            <span className="leading-tight text-left">Projects<br className="hidden md:block"/> Delivered</span>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-white/10" />
                        <div className="flex items-center gap-1.5 md:gap-2 bg-black/40 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/5 md:border-transparent">
                            <span className="text-lg md:text-2xl font-bold text-white/70">15+</span>
                            <span className="leading-tight text-left">AI Systems<br className="hidden md:block"/> Deployed</span>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-white/10" />
                        <div className="flex items-center gap-1.5 md:gap-2 bg-black/40 md:bg-transparent px-3 py-1.5 md:p-0 rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none border border-white/5 md:border-transparent">
                            <span className="text-lg md:text-2xl font-bold text-white/70">99%</span>
                            <span className="leading-tight text-left">Client<br className="hidden md:block"/> Retention</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Spline 3D Interactive Model */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ willChange: 'opacity' }}
            >
                {/* Mobile fade mask */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black lg:hidden z-10" />
                
                <div className="absolute top-[10%] md:top-0 bottom-0 right-0 w-full lg:w-[60%] pointer-events-none opacity-30 md:opacity-100">
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/10 animate-pulse tracking-widest text-xs">LOADING</div>}>
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="w-full h-full"
                        />
                    </Suspense>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
