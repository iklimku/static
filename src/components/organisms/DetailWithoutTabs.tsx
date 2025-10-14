"use client";

import { Suspense, useState, useEffect } from "react";
import Loading from "@/components/organisms/Loading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Tab {
  title: string;
  imageUrl: string;
  descriptionUrl: string | null;
  description: string;
}

interface Item {
  slug: string;
  title: string;
  imageUrl: string;
  descriptionUrl: string;
  description: string;
  tabs: Tab[] | null;
}

export default function DetailWithoutTabs(item: Item) {
  const [description, setDescription] = useState(item.description);

  useEffect(() => {
    const fetchDescription = async () => {
      if (item.descriptionUrl) {
        try {
          const res = await fetch(item.descriptionUrl, {
            headers: {
              "Cache-Control": "no-cache",
              Pragma: "no-cache",
            },
            next: { revalidate: 3600 },
          });
          if (!res.ok) throw new Error("Failed to fetch");
          let text = await res.text();

          // replace ; to <br/>
          text = text.replace(/;/g, ".<br/>");
          // replace enter to <br/>
          text = text.replace(/\n/g, "<br/>");

          setDescription(text);
        } catch (error) {
          console.error("Error fetching description:", error);
          setDescription(item.description || "Deskripsi tidak tersedia.");
        }
      }
    };

    fetchDescription();
  }, [item.descriptionUrl, item.description]);

  const isAnimatedGif = item.imageUrl.endsWith(".gif");
  return (
    <>
      <main className="container mx-auto px-4 mt-20 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {item.title}
        </h2>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <Suspense fallback={<Loading />}>
                <Zoom>
                  <div className="w-full h-auto">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-cover rounded-md"
                      sizes="100vw"
                      priority
                      {...(isAnimatedGif && { unoptimized: true })}
                    />
                  </div>
                </Zoom>
              </Suspense>
            </div>

            {(item.description || item.descriptionUrl) && (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-10 text-center bg-[var(--bmkggreen1)] text-white hover:bg-indigo-600 mt-8 mb-8">
                    Deskripsi dan Analisis
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-justify text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
