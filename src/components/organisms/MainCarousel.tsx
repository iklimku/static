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
import Autoplay from "embla-carousel-autoplay"

export function MainCarousel() {
  const images = [
    {
      url: "https://dataweb.bmkg.go.id/iklim/hari-tanpa-hujan.png",
      alt: "Hari Tanpa Hujan",
    },
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.png",
      alt: "Analisis Curah Hujan Dasarian",
    },
    {
      url: "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDKM_latest.jpg",
      alt: "Peringatan Dini Kekeringan Meteorologis",
    },
    {
      url: "https://cews.bmkg.go.id/tempatirk/CAMS_PM2p5/update_pm2p5_aq.gif",
      alt: "Kualitas Udara Berdasarkan PM2.5",
    },
    {
      url: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi1.png",
      alt: "Prediksi Indeks Presipitasi Terstandarisasi",
    },
    {
      url: "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/warming_stripes_HD-2.png?ssl=1",
      alt: "Warming Stripes",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-0">
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="relative w-full mx-auto mt-4 mb-4 overflow-hidden rounded-xl shadow-xl">
        <CarouselContent className="h-full">
          {images.map((img, index) => {
            const isAnimatedGif = img.url.endsWith(".gif");
            return (
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
                        {...(isAnimatedGif && { unoptimized: true })}
                      />
                    </Suspense>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        {/* Tombol Navigasi */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full p-2" />
      </Carousel>
    </div>
  );
}
