import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em]",
    "select-none overflow-hidden transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "text-white bg-gradient-to-b from-[#FF8736] via-[#F4751E] to-[#D95D0A]",
          "border border-[#FFA364]/35",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_8px_28px_-4px_rgba(244,117,30,0.44)]",
          "hover:-translate-y-0.5 hover:from-[#FF9248] hover:via-[#F77B26] hover:to-[#E26410]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_14px_38px_-4px_rgba(244,117,30,0.62)]",
          "before:pointer-events-none before:absolute before:inset-0 before:-translate-x-[130%] before:skew-x-[-20deg]",
          "before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent",
          "before:transition-transform before:duration-700 hover:before:translate-x-[130%]",
        ].join(" "),
        secondary: [
          "text-white/90 hover:text-white",
          "bg-white/[0.045] hover:bg-white/[0.09] backdrop-blur-xl",
          "border border-white/[0.14] hover:border-white/[0.28]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_28px_rgba(0,0,0,0.65)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        accent: [
          "text-[#FF9D59] hover:text-white",
          "bg-[#F4751E]/[0.09] hover:bg-[#F4751E]/[0.18] backdrop-blur-md",
          "border border-[#F4751E]/28 hover:border-[#F4751E]/55",
          "shadow-[inset_0_1px_0_rgba(255,163,100,0.14),0_8px_24px_rgba(244,117,30,0.12)]",
          "hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,163,100,0.24),0_12px_30px_rgba(244,117,30,0.22)]",
        ].join(" "),
        outline: [
          "text-white/80 hover:text-white",
          "bg-black/60 hover:bg-white/[0.07] backdrop-blur-md",
          "border border-white/[0.12] hover:border-[#F4751E]/40",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        ].join(" "),
        ghost: [
          "text-white/65 hover:text-white hover:bg-white/[0.06]",
        ].join(" "),
        link: [
          "rounded-none px-0 py-0 text-[#F4751E] hover:text-[#FF984F] underline-offset-4 hover:underline active:scale-100",
        ].join(" "),
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 sm:h-[52px] px-7 sm:px-9 text-sm sm:text-[15px]",
        xl: "h-13 sm:h-14 px-8 sm:px-10 text-[15px] sm:text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
