import Reveal from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { PulseBeams } from '@/components/ui/pulse-beams';

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["0%", "0%", "200%"], x2: ["0%", "0%", "180%"], y1: ["80%", "0%", "0%"], y2: ["100%", "20%", "20%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.5 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }]
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1.2 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }]
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: { x1: ["20%", "100%", "100%"], x2: ["0%", "90%", "90%"], y1: ["80%", "80%", "-20%"], y2: ["100%", "100%", "0%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.8 },
    },
    connectionPoints: [{ cx: 142, cy: 427, r: 6.5 }, { cx: 425.5, cy: 274, r: 6 }]
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1.5 },
    },
    connectionPoints: [{ cx: 770, cy: 427, r: 6.5 }, { cx: 493, cy: 274, r: 6 }]
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: { x1: ["40%", "0%", "0%"], x2: ["10%", "0%", "0%"], y1: ["0%", "0%", "180%"], y2: ["20%", "20%", "200%"] },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.2 },
    },
    connectionPoints: [{ cx: 420.5, cy: 6.5, r: 6 }, { cx: 380, cy: 168, r: 6 }]
  }
];

const gradientColors = {
  start: "#F4751E", // orange
  middle: "#FF9D5C",
  end: "#FFB085"
};

const CTA: React.FC = () => {
    return (
        <section id="cta" className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(15,8,4,0.9)_34%,rgba(0,0,0,0.96)_100%)]">
            <div className="container-main relative z-10">
                <Reveal duration={1}>
                    <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-[#F4751E]/20 bg-[radial-gradient(circle_at_18%_0%,rgba(244,117,30,0.2),transparent_34%),linear-gradient(145deg,rgba(244,117,30,0.09),rgba(4,4,4,0.96)_44%,rgba(0,0,0,0.98))] px-5 py-12 text-center sm:px-8 md:p-16 shadow-[0_36px_120px_rgba(0,0,0,0.52)]">
                        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/60 to-transparent" />
                        <div className="absolute right-[-10%] top-[-18%] h-64 w-64 rounded-full bg-[#F4751E]/[0.11] blur-[80px]" style={{ contain: 'strict' }} />

                        <div className="relative z-10 flex flex-col items-center">
                            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/75 mb-6">Ready to Start?</p>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] mb-6 leading-[0.95] text-white text-center">
                                Let's build your<br />
                                <span className="gradient-text">next system.</span>
                            </h2>
                            <p className="text-base md:text-lg text-white/60 max-w-lg mx-auto leading-relaxed font-light text-center">
                                Whether it's an AI agent, a full-stack platform, or a business system — we'll engineer it to perform.
                            </p>
                            
                            <div className="w-full relative mt-8 -mb-12 h-[300px] flex items-center justify-center">
                                <PulseBeams
                                    beams={beams}
                                    gradientColors={gradientColors}
                                    className="bg-transparent absolute inset-0"
                                >
                                    <a href="#contact" className="bg-[#050505] w-[260px] sm:w-[320px] z-40 h-[80px] sm:h-[100px] no-underline group cursor-pointer relative shadow-2xl shadow-[#F4751E]/10 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block hover:scale-105 transition-transform duration-300">
                                        <span className="absolute inset-0 overflow-hidden rounded-full">
                                            <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,rgba(244,117,30,0.8)_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(244,117,30,0.4)_0%,rgba(244,117,30,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        </span>
                                        <div className="relative flex justify-center w-full text-center space-x-2 h-full items-center z-10 rounded-full bg-black py-0.5 px-4 ring-1 ring-white/10 group-hover:ring-[#F4751E]/30 transition-colors duration-300">
                                            <span className="text-2xl sm:text-3xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 via-white to-neutral-200 font-bold tracking-tight">
                                                Let's Connect
                                            </span>
                                            <ArrowUpRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                                        </div>
                                    </a>
                                </PulseBeams>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#F4751E]/[0.05] blur-[90px] pointer-events-none" style={{ contain: 'strict' }} />
        </section>
    );
};

export default CTA;
