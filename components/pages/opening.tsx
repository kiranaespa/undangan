"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Opening({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen w-full bg-[#FDF8F6] flex flex-col items-center justify-center p-6 overflow-hidden">

      {/* ✅ Tombol Kembali (Warna disesuaikan) */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-50 text-sm text-[#5D4037] bg-white/60 backdrop-blur-md px-4 py-2 rounded-full shadow-sm hover:bg-[#D4A373] hover:text-white transition-all border border-[#D4A373]/20"
      >
        ← BACK
      </button>
      

      {/* Konten Utama */}
      <div className="z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-5xl w-full">

        {/* Sisi Kiri: Graduation Text (Gaya Vertikal) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#5D4037] font-serif font-bold leading-[0.85] select-none"
        >
          <h1 className="text-[80px] md:text-[120px] uppercase tracking-tighter">
            gr<br />
            <span className="text-[#D4A373]">ad</span><br />
            ua<br />
            <span className="text-[#D4A373]">ti</span><br />
            on
          </h1>
        </motion.div>

        {/* Sisi Kanan: Info Acara */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col border-l-4 border-[#D4A373] pl-8 py-2"
        >
          <h2 className="text-[#D4A373] text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-3 font-serif">
            Undangan <br /> Akhirussanah
          </h2>

          <div className="space-y-1 text-[#5D4037] text-sm md:text-base uppercase tracking-widest">
            <p className="font-bold opacity-80">Angkatan 13</p>
            <p className="text-xs">Tahun Pelajaran 2024/2025</p>
            <p className="font-bold mt-2 text-[#5D4037]">
              SMPIT Cahaya Insani Temanggung
            </p>
          </div>

          <p className="mt-6 italic text-gray-500 text-sm md:text-base max-w-xs leading-relaxed font-serif">
            "Syukuri Segala Kenangan, <br />
            Siapkan Diri Untuk Masa Depan"
          </p>

          {/* Bagian Tanggal (Gaya Kotak Elegan) */}
          <div className="mt-8 flex items-center gap-6 text-[#5D4037]">
            <div className="text-center bg-[#5D4037] text-white px-5 py-3 rounded-2xl shadow-lg">
              <p className="text-[10px] uppercase tracking-tighter">Sabtu</p>
              <p className="text-3xl font-bold font-serif">24</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest font-bold text-[#D4A373]">
                Mei 2025
              </p>
              <p className="text-xs font-semibold opacity-70">07.00 - 12.00 WIB</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🌻 Ornamen Bunga Bawah (Pojok Kiri Bawah) */}
    <div className="absolute top-0 left-0">
            <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
          </div>
          <div className="absolute bottom-0 right-0 rotate-180">
            <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
          </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 opacity-40 text-[11px] uppercase tracking-[0.8em] text-[#5D4037] font-bold">
        Class of 2025
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
}