"use client"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MAIN } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"

export const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    })
  }, [api])

  return (
    <div className="flex flex-col gap-6">
      <Carousel setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {MAIN.TESTIMONIALS.CARDS.map((el, i) => (
            <CarouselItem key={i} className={cn("relative md:basis-1/2", el.CLASSNAME)}>
              <div className="px-8 pb-12 w-full bg-gray-100 mt-16 relative">
                <Image src={el.AVATAR} alt="Testimonial Avatar" width={80} height={80} className="absolute -top-1/8 left-1/2 -translate-x-1/2" />
                <div className="flex flex-col items-center justify-center gap-6">
                  <p className="block mt-20 text-lg font-bold text-primary-foreground">{el.NAME}</p>
                  <p className="text-center text-gray-400">{el.CONTENT}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center gap-1">
        {Array.from({ length: count }).fill(0).map((el, i) => (
          <div className={cn("size-2 border border-primary rounded-full", i === current ? "bg-primary" : "bg-transparent")} key={i} />
        ))}
      </div>
    </div>
  )
}
