"use client";
import { useEffect, useState } from "react";

export default function BMKGTimeBar() {
  const [wibTime, setWibTime] = useState("");
  const [utcTime, setUtcTime] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
      const wib = new Date(utc.getTime() + 7 * 60 * 60000);

      const formatWithSeconds = (d: Date) =>
        d.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });

      setUtcTime(formatWithSeconds(utc));
      setWibTime(formatWithSeconds(wib));

      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      setDateStr(wib.toLocaleDateString("id-ID", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[var(--bmkgblue1)] text-white py-2 text-xs md:text-sm font-medium">
      <div className="animate-marquee whitespace-nowrap px-4">
        <span className="mr-8">
          📅 {dateStr} — 🕓 Standar Waktu Indonesia | {wibTime} WIB | {utcTime}{" "}
          UTC
        </span>
      </div>

      {/* CSS animasi inline */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
