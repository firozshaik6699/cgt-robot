import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, onClick }) => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.1 });

    const handleMouse = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        x.set(middleX * 0.18);
        y.set(middleY * 0.18);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            type="button"
            onClick={onClick}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ position: 'relative', x: springX, y: springY }}
            className={`group relative pill-shape px-4.5 py-2 text-xs font-semibold tracking-[-0.01em] text-white overflow-hidden border border-[#FFA364]/35 bg-gradient-to-b from-[#FF8736] via-[#F4751E] to-[#D95D0A] shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_4px_18px_rgba(244,117,30,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_26px_rgba(244,117,30,0.55)] transition-shadow duration-300 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/70 flex items-center gap-1.5 ${className || ''}`}
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]"
            />
            <span className="relative z-10 flex items-center gap-1.5 px-0.5">
                {children}
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
        </motion.button>
    );
};

export default MagneticButton;
