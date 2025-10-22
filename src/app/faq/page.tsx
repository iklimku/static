"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Fungsi bantu buat highlight kata kunci
function highlightText(text: string, keyword: string) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, `<mark class='bg-yellow-200'>$1</mark>`);
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [detailRes, daftarRes, glosariumRes] = await Promise.all([
          fetch("/data/detail.json"),
          fetch("/data/daftar.json"),
          fetch("/data/glosarium.json"),
        ]);

        const [detailData, daftarData, glosariumData] = await Promise.all([
          detailRes.json(),
          daftarRes.json(),
          glosariumRes.json(),
        ]);

        const detailFaqs = detailData.map((item: any) => ({
          source: "Detail",
          question: item.title || item.nama || "Topik Detail",
          answer: item.deskripsi || item.keterangan || "Tidak ada deskripsi.",
        }));

        const daftarFaqs = daftarData.map((item: any) => ({
          source: "Daftar",
          question: item.judul || item.nama || "Item Daftar",
          answer: item.deskripsi || "Tidak ada keterangan.",
        }));

        const glosariumFaqs = glosariumData.map((item: any) => ({
          source: "Glosarium",
          question: item.istilah || item.term,
          answer: item.definisi || "Belum ada definisi.",
        }));

        setFaqs([...detailFaqs, ...daftarFaqs, ...glosariumFaqs]);
      } catch (err) {
        console.error("Gagal memuat data FAQ:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Pertanyaan yang Sering Diajukan (FAQ)
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari pertanyaan, istilah, atau topik..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <p className="text-gray-500 text-center">Memuat data FAQ...</p>
      ) : filteredFaqs.length > 0 ? (
        <Accordion type="single" collapsible>
          {filteredFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>
                <span className="flex flex-col text-left">
                  <span
                    className="font-medium"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(faq.question, searchTerm),
                    }}
                  />
                  <span className="text-xs text-gray-500">{faq.source}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  dangerouslySetInnerHTML={{
                    __html: highlightText(faq.answer, searchTerm),
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="text-gray-500 text-center">
          Tidak ditemukan hasil untuk kata kunci "{searchTerm}".
        </p>
      )}
    </div>
  );
}
