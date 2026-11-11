"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { openContactModal } from "@/hooks/useHashModal";
import type { Service } from "@/types";

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      type="button"
      variant={variant}
      size={size}
      aria-label="Previous service slide"
      className={cn("disabled:opacity-30", className)}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4 text-white" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      ref={ref}
      type="button"
      variant={variant}
      size={size}
      aria-label="Next service slide"
      className={cn("disabled:opacity-30", className)}
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4 text-white" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.3),
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => openContactModal(service.modalCategory)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openContactModal(service.modalCategory);
        }
      }}
      className={cn(
        "group relative flex h-[400px] sm:h-[440px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r border border-white/[0.1] hover:border-[#F4751E]/40 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/60",
        service.image ? "" : service.gradient
      )}
    >
      {service.image && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
        />
      )}

      {/* Layered dark vignette for effortless legibility */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500 z-0",
          service.image
            ? "bg-gradient-to-t from-black/92 via-black/62 to-black/38 group-hover:from-black/88 group-hover:via-black/52"
            : "bg-gradient-to-t from-background/30 to-transparent"
        )}
      />

      {/* Top Specular Edge */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 group-hover:via-[#F4751E]/60 transition-all duration-500 z-10" />

      {/* Header Metadata */}
      <div className="z-10 flex items-center justify-between w-full">
        <span className="text-xs font-mono tracking-wider text-white/70 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          {service.number}
        </span>
        <div className="h-10 w-10 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 group-hover:border-[#F4751E]/40 flex items-center justify-center transition-colors duration-300">
          <service.icon className="h-5 w-5 text-[#F4751E]" />
        </div>
      </div>

      {/* Copy & Tactile Action */}
      <div className="z-10 text-left">
        <h3 className="mb-2 text-base sm:text-lg font-bold tracking-tight text-white">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-white/78 font-light mb-5">
          {service.description}
        </p>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F4751E]/30 bg-[#F4751E]/[0.12] px-3.5 py-1.5 text-xs font-semibold text-[#FF9B54] group-hover:bg-[#F4751E] group-hover:border-[#FFA364]/50 group-hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
          <span>Scope This Capability</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.div>
  );
};

export const ServiceCarousel = ({ services }: { services: Service[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      <Carousel
        ref={ref}
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.number} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 sm:p-2">
                  <ServiceCard service={service} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </motion.div>

        {/* Tactile Carousel Controls */}
        <div className="mt-6 flex items-center justify-end gap-3 px-2">
          <div className="flex items-center gap-2.5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
