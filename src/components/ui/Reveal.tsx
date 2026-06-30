import React, { useRef, useEffect, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  once?: boolean;
  amount?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const directionStyles: Record<string, string> = {
    up: 'translate3d(0, 30px, 0)',
    down: 'translate3d(0, -30px, 0)',
    left: 'translate3d(30px, 0, 0)',
    right: 'translate3d(-30px, 0, 0)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : directionStyles[direction],
        transition: `opacity 0.6s cubic-bezier(0.25, 0.4, 0, 1) ${delay}s, transform 0.6s cubic-bezier(0.25, 0.4, 0, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
