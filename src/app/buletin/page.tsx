"use client";

import { useState } from "react";
import GoogleDocViewer from "@/components/organisms/PDFView";
import pdfData from "@/../public/data/pdfs.json";

// Import komponen paginasi dari shadcn/ui
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Import custom hook
import { usePagination, DOTS } from "@/hooks/use-pagination";

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; //mau berapa file yg ditampilkan per page

  const paginationRange = usePagination({
    currentPage,
    totalCount: pdfData.length,
    pageSize: itemsPerPage,
    siblingCount: 1,
  });

  const currentItems = pdfData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(pdfData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-center mb-2">
        Galeri Buletin Iklim
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        Menampilkan {currentItems.length} dari {pdfData.length} total dokumen.
      </p>

      {/* Grid Galeri yang Responsif */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {currentItems.map((pdf) => (
          // Card
          <div
            key={pdf.url}
            className="border rounded-lg shadow-sm p-4 h-[450px] flex flex-col"
          >
            {/* Title*/}
            <h3 className="font-semibold text-lg truncate mb-2">{pdf.title}</h3>
            <div className="flex-1">
              <GoogleDocViewer fileUrl={pdf.url} />
            </div>
          </div>
        ))}
      </div>

      {/* Implementasi Paginasi shadcn/ui (tidak perlu diubah) */}
      <Pagination>
        <PaginationContent>
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

          <PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className={
                currentPage === totalPages
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
