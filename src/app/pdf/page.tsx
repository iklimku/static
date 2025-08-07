"use client";

import { useState } from "react";
import GoogleDocViewer from "@/components/organisms/PDFView";
import pdfData from "@/../public/data/pdfs.json";

// Impor komponen paginasi dari shadcn/ui
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Impor custom hook
import { usePagination, DOTS } from "@/hooks/use-pagination";

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // atur mau berapa file yang ditampilkan di halaman

  // --- Gunakan custom hook
  const paginationRange = usePagination({
    currentPage,
    totalCount: pdfData.length,
    pageSize: itemsPerPage,
    siblingCount: 1, // Opsional: jumlah halaman di samping halaman aktif
  });

  // --- Logika untuk data tetap sama ---
  const currentItems = pdfData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- Fungsi navigasi yang lebih fleksibel ---
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Opsional: scroll ke atas saat ganti halaman
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(pdfData.length / itemsPerPage)) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Galeri Dokumen</h1>

      {/* Grid Galeri (tidak berubah) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {currentItems.map((pdf) => (
          <div
            key={pdf.url}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              height: "400px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{pdf.title}</h3>
            <div style={{ flex: 1 }}>
              <GoogleDocViewer fileUrl={pdf.url} />
            </div>
          </div>
        ))}
      </div>

      {/* --- Implementasi Paginasi shadcn/ui --- */}
      <Pagination>
        <PaginationContent>
          {/* Tombol "Sebelumnya" */}
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevPage}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {/* Nomor Halaman & Elipsis */}
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return <PaginationEllipsis key={`${pageNumber}-${index}`} />;
            }

            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  isActive={currentPage === pageNumber}
                  onClick={() => handlePageChange(pageNumber as number)}
                  className="cursor-pointer"
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Tombol "Berikutnya" */}
          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className={
                currentPage === Math.ceil(pdfData.length / itemsPerPage)
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
