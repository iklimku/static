"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import faqJson from "@/../public/data/faq.json";

// {
//   "category": "Umum",
//   "questions": [
//     {
//       "q": "Apa itu Portal Informasi Iklim BMKG?",
//       "a": "Portal ini merupakan platform resmi yang menyediakan informasi iklim, seperti prediksi sifat hujan bulanan, anomali suhu, serta data klimatologi berbasis wilayah Indonesia."
//     },
//     {
//       "q": "Siapa pengelola situs ini?",
//       "a": "Portal ini dikelola oleh Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) melalui unit terkait di bidang klimatologi."
//     },
//     {
//       "q": "Apakah data di situs ini resmi?",
//       "a": "Ya. Seluruh data dan informasi bersumber dari BMKG dan dipublikasikan secara resmi sesuai jadwal rilis bulanan."
//     }
//   ]
// }
interface FAQ {
  category: string;
  questions: {
    q: string;
    a: string;
  }[];
}

export default function FAQPage() {
  // const [faqData, setFaqData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const faqData: FAQ[] = faqJson;

  // useEffect(() => {
  //   fetch("/data/faq.json")
  //     .then((res) => res.json())
  //     .then((data) => setFaqData(data))
  //     .catch((err) => console.error("Error loading FAQ data:", err));
  // }, []);

  const filteredFaq = faqData.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q: any) =>
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-[var(--bmkggreen1)]">
        Frequently Asked Questions (FAQ)
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Temukan jawaban atas pertanyaan yang sering diajukan seputar informasi
        iklim dan penggunaan situs BMKG.
      </p>

      {filteredFaq.map(
        (category, i) =>
          category.questions.length > 0 && (
            <Card key={i} className="mb-6 shadow-sm border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[var(--bmkggreen1)]">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item: any, idx: number) => (
                    <AccordionItem key={idx} value={`item-${i}-${idx}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-primary">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )
      )}

      <div className="text-center text-sm text-gray-500 mt-10">
        Terakhir diperbarui: Oktober 2025
      </div>
    </div>
  );
}
