"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

// --- Carousel Context ---
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

// --- Main Carousel Component ---
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

// --- Carousel Content ---
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

// --- Carousel Item ---
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

// --- Carousel Controls ---
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      aria-label="Previous service slide"
      className={cn(
        "h-10 w-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-md hover:bg-black/90 text-white transition-all active:scale-95 disabled:opacity-30",
        className,
      )}
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
      variant={variant}
      size={size}
      aria-label="Next service slide"
      className={cn(
        "h-10 w-10 rounded-full border border-white/10 bg-black/60 backdrop-blur-md hover:bg-black/90 text-white transition-all active:scale-95 disabled:opacity-30",
        className,
      )}
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

// --- Service Card & Carousel Section ---
export interface Service {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  image?: string;
}

// Sub-component for individual cards
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
      className={cn(
        "group relative flex h-[400px] sm:h-[450px] w-full flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r border border-white/10",
        service.image ? "" : service.gradient
      )}
    >
      {service.image && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          style={{ backgroundImage: `url(${service.image})` }}
        />
      )}
      
      {/* Dark overlay for readability over images */}
      <div className={cn(
        "absolute inset-0 transition-colors duration-500 z-0",
        service.image ? "bg-black/65 group-hover:bg-black/45" : "bg-gradient-to-t from-background/30 to-transparent"
      )}></div>

      {/* Card Content */}
      <div className="z-10 flex flex-col items-start text-left">
        <span className={cn("mb-6 sm:mb-8 text-xs sm:text-sm font-mono tracking-wider", service.image ? "text-white/80" : "text-foreground/60")}>
          ( {service.number} )
        </span>
        <service.icon className={cn("mb-auto h-10 w-10 sm:h-12 sm:w-12 text-[#F4751E]", service.image ? "text-[#F4751E]" : "text-foreground")} />
      </div>
      <div className={cn("z-10", service.image ? "text-white" : "text-foreground")}>
        <h3 className="mb-2 text-base sm:text-lg font-bold uppercase tracking-wider text-white">
          {service.title}
        </h3>
        <p className={cn("text-xs sm:text-sm leading-relaxed", service.image ? "text-white/85 font-light" : "text-foreground/80")}>{service.description}</p>
        
        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#F4751E] group-hover:translate-x-1 transition-transform duration-300">
          <span>Explore Solution</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
};

// Main exportable component
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
                <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 sm:p-2">
                    <ServiceCard service={service} index={index} />
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
        </motion.div>

        {/* Navigation Buttons Row */}
        <div className="mt-6 flex items-center justify-end gap-3 px-2">
          <div className="flex items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
