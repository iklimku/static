"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface HighlightItem {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Props {
  highlightCards: HighlightItem[];
}

export function HighlightsCarousel({ highlightCards }: Props) {
  const plugin = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // ✅ pause kalau dihover
    })
  );

  return (
    <section id="highlights" className="w-full -mt-24 relative mb-16 px-8">
      <div className="container mx-auto -8">
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full group"
        >
          <CarouselContent className="ml-1 mb-4">
            {highlightCards.map((item) => (
              <CarouselItem
                key={item.slug}
                className="md:basis-1/2 lg:basis-1/3 px-2"
              >
                <Card
                  className="
                    h-full flex flex-col justify-between
                    shadow-md bg-white 
                    hover:shadow-[0_0_15px_var(--bmkggreen)] 
                    transition-shadow duration-300
                  "
                >
                  <div>
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl text-blue-800">
                        <span className="mr-3 text-3xl">{item.icon}</span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 ">{item.description}</p>
                    </CardContent>
                  </div>

                  <div className="px-6 pb-2 mt-auto">
                    <Button
                      variant="link"
                      asChild
                      className="text-[var(--bmkggreen1)] hover:underline"
                    >
                      <Link href={`/${item.slug}`}>
                        Lihat Selengkapnya &rarr;
                      </Link>
                    </Button>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Tombol navigasi */}
          <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CarouselNext className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Carousel>
      </div>
    </section>
  );
}
