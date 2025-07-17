import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function MainCarousel() {
  return (
    <Carousel className="w-full h-96 border-4 border-black">
      <CarouselContent className="border-4 border-blue-500 h-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="">
                <CardContent className="flex items-center justify-center p-6 border border-blue-500 h-full">
                  <span className="text-4xl font-semibold h-full">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}