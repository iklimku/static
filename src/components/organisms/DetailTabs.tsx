"use client";

import { Suspense, useState, useEffect } from "react";
import Loading from "@/components/organisms/Loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface Tab {
  title: string;
  imageUrl: string;
  description: string;
  descriptionUrl?: string;
}

interface Props {
  title: string;
  tabs: Tab[];
}

export default function DetailTabs({ title, tabs }: Props) {
  const isAnimatedGif = tabs.some((tab) => tab.imageUrl.endsWith(".gif"));

  return (
    <main className="container mx-auto px-4 mt-20 mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-800">{title}</h2>

      <Tabs defaultValue="tab0" className="w-full max-w-screen-xl mx-auto mt-6">
        {/* Tab Triggers */}
        <div className="flex justify-center">
          <TabsList className="flex flex-wrap justify-center bg-gray-50 shadow-md rounded-lg p-1 gap-2 w-full h-full">
            {tabs.map((tab, i) => (
              <TabsTrigger
                key={tab.title}
                value={`tab${i}`}
                className="text-sm md:text-base whitespace-nowrap px-4 py-2 rounded-md transition-colors
                  data-[state=active]:bg-[var(--bmkggreen1)] data-[state=active]:text-white
                  hover:bg-[var(--bmkggreen2)]"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab Contents */}
        {tabs.map((tab, i) => (
          <TabsContent
            key={tab.title}
            value={`tab${i}`}
            className="p-4 mt-4 rounded-lg shadow-xl flex flex-col gap-4 bg-white"
          >
            <div className="w-full">
              <Suspense fallback={<Loading />}>
                <Zoom>
                  <div className="w-full h-auto">
                    <Image
                      src={tab.imageUrl}
                      alt={tab.title}
                      width={600}
                      className="w-full h-auto rounded-lg"
                      sizes="100vw"
                      priority
                      {...(isAnimatedGif && { unoptimized: true })}
                    />
                  </div>
                </Zoom>
              </Suspense>
            </div>

            {(tab.description || tab.descriptionUrl) && (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-10 text-center bg--[var(--bmkggreen1)] text-white hover:bg-indigo-600 mt-8 mb-8">
                    Deskripsi dan Analisis
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-justify text-gray-700">
                    <div
                      dangerouslySetInnerHTML={{ __html: tab.description }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
