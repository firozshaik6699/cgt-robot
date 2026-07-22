import React from "react";
import { cn } from "@/lib/utils";

interface BrandScrollerProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
  gap?: string;
}

export const BrandScroller = ({ children, className, duration = "25s", gap = "1.25rem" }: BrandScrollerProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden py-2 flex-row max-w-full select-none",
        className
      )}
      style={{
        "--gap": gap,
        "--duration": duration,
      } as React.CSSProperties}
    >
      <div className="flex shrink-0 flex-row gap-[var(--gap)] animate-marquee will-change-transform">
        {children}
        {children}
      </div>
      <div className="flex shrink-0 flex-row gap-[var(--gap)] animate-marquee will-change-transform" aria-hidden="true">
        {children}
        {children}
      </div>
    </div>
  );
};

export const BrandScrollerReverse = ({ children, className, duration = "25s", gap = "1.25rem" }: BrandScrollerProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden py-2 flex-row max-w-full select-none",
        className
      )}
      style={{
        "--gap": gap,
        "--duration": duration,
      } as React.CSSProperties}
    >
      <div className="flex shrink-0 flex-row gap-[var(--gap)] animate-marquee-reverse will-change-transform">
        {children}
        {children}
      </div>
      <div className="flex shrink-0 flex-row gap-[var(--gap)] animate-marquee-reverse will-change-transform" aria-hidden="true">
        {children}
        {children}
      </div>
    </div>
  );
};
