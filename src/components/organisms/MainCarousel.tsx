import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MainCarousel() {
  const images = [
    "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
    "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.png",
    "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
    "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi1.png",
    "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi6.png",
  ];

  return (
    <div className="w-full px-4 sm:px-0">
      <Carousel className="relative w-full max-w-screen-xl mx-auto rounded-xl h-56 sm:h-64 md:h-80 lg:h-96 mt-4 mb-4 shadow-xl overflow-hidden">
        <CarouselContent className="h-full">
          {images.map((url, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full rounded-none">
                <CardContent className="p-0 h-full">
                  <img
                    src={url}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Tombol Navigasi */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2" />
      </Carousel>
    </div>
  );
}
