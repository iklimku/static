"use client";

import * as React from "react";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/components/organisms/Loading";
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
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
      alt: "ACH Bulan",
    },
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.png",
      alt: "ASH Bulan",
    },
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
      alt: "Poster Musim",
    },
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi1.png",
      alt: "ANSPI 1",
    },
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi6.png",
      alt: "ANSPI 6",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-0">
      <Carousel className="relative w-full mx-auto mt-4 mb-4 overflow-hidden rounded-xl shadow-xl">
        <CarouselContent className="h-full">
          {images.map((img, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full">
                <CardContent className="p-0 relative h-[300px] sm:h-[400px] md:h-[500px]">
                  <Suspense fallback={<Loading />}>
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-contain pointer-events-none"
                      sizes="(max-width: 768px) 100vw, 70vh"
                      priority={index === 0} // preload gambar pertama
                    />
                  </Suspense>
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
