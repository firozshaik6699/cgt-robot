import React from "react";
import { cn } from "@/lib/utils";

interface BrandScrollerProps {
  children: React.ReactNode;
  className?: string;
  duration?: string;
  gap?: string;
  reverse?: boolean;
}

export const BrandScroller = ({
  children,
  className,
  duration = "25s",
  gap = "1.25rem",
  reverse = false,
}: BrandScrollerProps) => {
  const animClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

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
      <div className={cn("flex shrink-0 flex-row gap-[var(--gap)] will-change-transform", animClass)}>
        {children}
        {children}
      </div>
      <div className={cn("flex shrink-0 flex-row gap-[var(--gap)] will-change-transform", animClass)} aria-hidden="true">
        {children}
        {children}
      </div>
    </div>
  );
};

export const BrandScrollerReverse = (props: Omit<BrandScrollerProps, "reverse">) => (
  <BrandScroller {...props} reverse />
);
