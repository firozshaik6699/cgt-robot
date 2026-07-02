import React from "react";
import { cn } from "@/lib/utils";

interface BrandScrollerProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
  gap?: string;
}

export const BrandScroller = ({ children, className, duration = "40s", gap = "2rem" }: BrandScrollerProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden py-2 flex-row max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]",
        className
      )}
      style={{
        "--gap": gap,
        "--duration": duration,
        gap: "var(--gap)",
      } as React.CSSProperties}
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
            key={i}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export const BrandScrollerReverse = ({ children, className, duration = "40s", gap = "2rem" }: BrandScrollerProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden py-2 flex-row max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]",
        className
      )}
      style={{
        "--gap": gap,
        "--duration": duration,
        gap: "var(--gap)",
      } as React.CSSProperties}
    >
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row"
            key={i}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
