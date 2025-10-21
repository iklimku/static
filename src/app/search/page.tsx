import { Suspense } from "react";
import SearchPage from "./SearchPage";

export default function SearchWrapper() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-gray-500 text-center">
          Memuat hasil pencarian...
        </div>
      }
    >
      <SearchPage />
    </Suspense>
  );
}
