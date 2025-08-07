"use client"; // <-- Tandai sebagai Client Component untuk menggunakan useState

import { useState } from "react";
import GoogleDocViewer from "@/components/organisms/PDFView"; // Sesuaikan path jika perlu
import pdfData from "@/../public/data/pdfs.json"; // Impor data JSON

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Atur jumlah iframe per halaman

  // --- Logika Paginasi ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Ambil data untuk halaman saat ini menggunakan slice()
  const currentItems = pdfData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(pdfData.length / itemsPerPage);

  // --- Fungsi untuk Navigasi ---
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Galeri Dokumen</h1>
      <p>
        Menampilkan {currentItems.length} dari {pdfData.length} total dokumen.
      </p>

      {/* Grid untuk Galeri Iframe */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "1.5rem",
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
            <h3
              style={{
                marginTop: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {pdf.title}
            </h3>
            <div style={{ flex: 1 }}>
              <GoogleDocViewer fileUrl={pdf.url} />
            </div>
          </div>
        ))}
      </div>

      {/* Kontrol Paginasi */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ padding: "0.5rem 1rem" }}
        >
          Sebelumnya
        </button>
        <span>
          Halaman {currentPage} dari {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ padding: "0.5rem 1rem" }}
        >
          Berikutnya
        </button>
      </div>
    </main>
  );
}
