import React from 'react';

const HeroBackground: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden bg-[#030303] ${className}`}
      style={{
        background: `
          radial-gradient(circle at 78% 43%, rgba(255, 95, 0, 0.95) 0%, rgba(255, 83, 0, 0.72) 14%, rgba(122, 35, 0, 0.48) 31%, rgba(12, 6, 3, 0.92) 58%, #030303 100%),
          radial-gradient(circle at 57% 50%, rgba(255, 98, 0, 0.16) 0%, rgba(255, 98, 0, 0.05) 32%, transparent 62%),
          linear-gradient(90deg, #020202 0%, #050403 31%, #150803 52%, #2a0b00 72%, #080402 100%)
        `
      }}
    >
      <style>{`
        @keyframes pulse-glow {
          0% { opacity: 0.88; }
          100% { opacity: 1; }
        }
        @keyframes drift-dots {
          0% { transform: translateY(0) rotate(-7deg); }
          100% { transform: translateY(-8px) rotate(-7deg); }
        }
        @keyframes drift-dots-right {
          0% { transform: translateY(0) rotate(8deg) scaleY(1.05); }
          100% { transform: translateY(-8px) rotate(8deg) scaleY(1.05); }
        }
        @keyframes move-arcs {
          0% { transform: translateX(0); }
          100% { transform: translateX(-18px); }
        }
        @keyframes noise-flicker {
          0% { opacity: 0.10; }
          100% { opacity: 0.14; }
        }
      `}</style>

      {/* Decorative Layers (Behind Content) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Glows */}
        <div
          className="absolute right-[7%] top-[28%] w-[760px] h-[620px] rounded-full blur-[36px] mix-blend-screen max-md:right-[-8%]"
          style={{
            background: 'radial-gradient(circle, rgba(255,106,0,0.95) 0%, rgba(255,72,0,0.55) 30%, rgba(255,72,0,0.16) 58%, transparent 76%)',
            animation: 'pulse-glow 7s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute right-[18%] bottom-[15%] w-[900px] h-[380px] rounded-[100%] blur-[42px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,72,0,0.42), rgba(90,20,0,0.18) 48%, transparent 75%)',
          }}
        />

        {/* Dark Left Fade */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.88) 24%, rgba(0,0,0,0.42) 53%, rgba(0,0,0,0.04) 77%, rgba(0,0,0,0.3) 100%)',
          }}
        />

        {/* Halftone Dot Texture - Left Edge */}
        <div
          className="absolute left-[-40px] top-[-30px] w-[420px] h-[520px] opacity-100 max-md:opacity-65"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 83, 0, 1) 1.6px, transparent 2.2px)',
            backgroundSize: '12px 12px',
            WebkitMaskImage: 'radial-gradient(ellipse at left top, black 0%, black 35%, rgba(0,0,0,0.7) 55%, transparent 82%)',
            maskImage: 'radial-gradient(ellipse at left top, black 0%, black 35%, rgba(0,0,0,0.7) 55%, transparent 82%)',
            animation: 'drift-dots 12s ease-in-out infinite alternate',
          }}
        />
        <div
          className="absolute left-[10px] top-[140px] w-[300px] h-[380px] opacity-50 blur-[0.3px] max-md:hidden"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 83, 0, 0.85) 1.4px, transparent 2px)',
            backgroundSize: '16px 16px',
            WebkitMaskImage: 'radial-gradient(ellipse at left top, black 0%, black 30%, rgba(0,0,0,0.5) 50%, transparent 75%)',
            maskImage: 'radial-gradient(ellipse at left top, black 0%, black 30%, rgba(0,0,0,0.5) 50%, transparent 75%)',
            animation: 'drift-dots 12s ease-in-out infinite alternate',
          }}
        />

        {/* Halftone Dot Texture - Right Edge */}
        <div
          className="absolute right-[-60px] top-[-20px] w-[540px] h-[780px] opacity-80 max-md:opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 94, 0, 0.85) 1.7px, transparent 2.8px)',
            backgroundSize: '13px 13px',
            WebkitMaskImage: 'radial-gradient(ellipse at right top, black 0%, black 25%, rgba(0,0,0,0.55) 48%, transparent 75%)',
            maskImage: 'radial-gradient(ellipse at right top, black 0%, black 25%, rgba(0,0,0,0.55) 48%, transparent 75%)',
            animation: 'drift-dots-right 12s ease-in-out infinite alternate',
          }}
        />
        {/* Secondary right dots — lower area */}
        <div
          className="absolute right-[-30px] top-[35%] w-[400px] h-[500px] opacity-45 max-md:hidden"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 94, 0, 0.7) 1.4px, transparent 2.5px)',
            backgroundSize: '15px 15px',
            WebkitMaskImage: 'radial-gradient(ellipse at right center, black 0%, rgba(0,0,0,0.4) 35%, transparent 65%)',
            maskImage: 'radial-gradient(ellipse at right center, black 0%, rgba(0,0,0,0.4) 35%, transparent 65%)',
            animation: 'drift-dots-right 12s ease-in-out infinite alternate',
          }}
        />

        {/* Subtle Background Noise / Grain */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0 1px, transparent 1px),
              radial-gradient(circle at 70% 60%, rgba(255,100,0,0.08) 0 1px, transparent 1px)
            `,
            backgroundSize: '3px 3px, 5px 5px',
            animation: 'noise-flicker 3s ease-in-out infinite alternate',
          }}
        />

        {/* Right Edge Glow (Replaces thick swoosh) */}
        <div 
          className="absolute right-[-5%] top-[40%] w-[500px] h-[500px] rounded-full blur-[80px] mix-blend-screen max-md:hidden"
          style={{ background: 'radial-gradient(circle, rgba(255,140,50,0.15) 0%, transparent 60%)' }}
        />

        {/* Diagonal Fine Lines */}
        <div
          className="absolute left-[28%] top-[24%] w-[680px] h-[1px] rotate-[-24deg]"
          style={{ background: 'rgba(255,90,0,0.06)' }}
        />
        <div
          className="absolute left-[52%] top-[58%] w-[430px] h-[1px] rotate-[48deg]"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        />

        {/* Texture / Smoke Layer */}
        <div className="absolute left-[30%] top-[28%] w-[420px] h-[260px] rounded-full blur-[70px] mix-blend-screen bg-[rgba(255,165,0,0.08)]" />
        <div className="absolute left-[43%] top-[42%] w-[580px] h-[310px] rounded-full blur-[90px] mix-blend-screen bg-[rgba(255,165,0,0.11)]" />
        <div className="absolute right-[8%] bottom-[10%] w-[520px] h-[260px] rounded-full blur-[70px] mix-blend-multiply bg-[rgba(0,0,0,0.28)]" />

        {/* Lower Curved Motion Lines / Arcs */}
        <svg
          className="absolute left-0 bottom-0 w-full pointer-events-none"
          style={{ height: '55%', animation: 'move-arcs 10s ease-in-out infinite alternate' }}
          viewBox="0 0 1920 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Wide dark translucent orange band — deepest layer */}
          <path
            d="M-200 580 Q 400 320, 960 340 Q 1500 360, 2100 220"
            stroke="rgba(255, 70, 0, 0.12)"
            strokeWidth="110"
            strokeLinecap="round"
          />
          {/* Thick deep brown-orange arc — main racing stripe */}
          <path
            d="M-200 570 Q 420 290, 980 310 Q 1520 330, 2100 180"
            stroke="rgba(180, 60, 0, 0.65)"
            strokeWidth="28"
            strokeLinecap="round"
          />
          {/* Bright vivid orange line — hero accent line */}
          <path
            d="M-200 555 Q 440 275, 1000 295 Q 1540 315, 2100 160"
            stroke="rgba(255, 120, 20, 1)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Thin warm orange edge highlight on top of thick stripe */}
          <path
            d="M-200 545 Q 450 265, 1010 285 Q 1550 305, 2100 148"
            stroke="rgba(255, 150, 50, 0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Thin white arc — runs below and separate */}
          <path
            d="M-200 598 Q 380 390, 940 395 Q 1480 400, 2100 310"
            stroke="rgba(255, 255, 255, 0.75)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Faint ghostly grey arc — lowest, barely visible */}
          <path
            d="M-200 600 Q 350 420, 900 430 Q 1440 440, 2100 360"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 0%, transparent 48%, rgba(0,0,0,0.42) 78%, rgba(0,0,0,0.88) 100%),
              linear-gradient(180deg, rgba(0,0,0,0.42) 0%, transparent 24%, transparent 68%, rgba(0,0,0,0.75) 100%)
            `
          }}
        />
      </div>

      {children}
    </section>
  );
};

export default HeroBackground;
