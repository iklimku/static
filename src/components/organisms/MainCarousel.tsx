"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // 1. Impor komponen Link
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
import Autoplay from "embla-carousel-autoplay";

// 2. Impor data dari file JSON
import carouselData from "@/../public/data/carousel.json";

export function MainCarousel() {
  const images = carouselData; // Gunakan data dari file JSON

  return (
    <div className="w-full px-4 sm:px-0">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="relative w-full mx-auto mt-4 mb-4 overflow-hidden rounded-xl shadow-xl"
      >
        <CarouselContent className="h-full">
          {images.map((img, index) => {
            const isAnimatedGif = img.url.endsWith(".gif");
            return (
              // 3. Bungkus CarouselItem dengan komponen Link
              <CarouselItem key={img.id} className="h-full">
                <Link href={`/${img.slug}/detail`} passHref>
                  <Card className="h-full cursor-pointer transition-transform duration-300 hover:scale-105">
                    <CardContent className="p-0 relative h-[300px] sm:h-[400px] md:h-[500px]">
                      <Suspense fallback={<Loading />}>
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          className="object-contain" // Hapus pointer-events-none
                          sizes="(max-width: 768px) 100vw, 70vh"
                          priority={index === 0}
                          {...(isAnimatedGif && { unoptimized: true })}
                        />
                      </Suspense>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2" />
      </Carousel>
    </div>
  );
}
