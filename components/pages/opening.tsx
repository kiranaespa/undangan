"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Opening() {
  return (
    <section className="relative min-h-screen w-full bg-[#FFF9F5] flex flex-col items-center justify-center p-6 overflow-hidden">
      
      {/* Ornamen Bunga Atas (Sesuai Asset) */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-56 h-56 md:w-80 md:h-80 z-0"
      >
        <Image 
          src="/bunga-atas.png" 
          alt="Ornamen" 
          width={400} 
          height={400} 
          className="object-contain"
        />
      </motion.div>

      {/* Konten Utama */}
      <div className="z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl w-full">
        
        {/* Teks Graduation Vertikal/Artistik */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[#5D4037] font-serif font-bold leading-[0.85] select-none"
        >
          <h1 className="text-[80px] md:text-[120px] uppercase tracking-tighter">
            gr<br />ad<br />ua<br />ti<br />on
          </h1>
        </motion.div>

        {/* Info Detail Sekolahan */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col border-l-2 border-[#5D4037] pl-6 py-2"
        >
          <h2 className="text-[#800000] text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mb-2">
            Undangan <br /> Akhirussanah
          </h2>
          <div className="space-y-1 text-gray-600 text-sm md:text-base uppercase tracking-widest">
            <p className="font-semibold text-gray-800">Angkatan 13</p>
            <p>Tahun Pelajaran 2024/2025</p>
            <p className="font-bold text-[#5D4037]">SMPIT Cahaya Insani Temanggung</p>
          </div>

          <p className="mt-6 italic text-gray-500 text-sm md:text-base max-w-xs leading-relaxed">
            "Syukuri Segala Kenangan, <br />
            Siapkan Diri Untuk Masa Depan"
          </p>

          {/* Tanggal & Waktu Mini */}
          <div className="mt-8 flex items-center gap-4 text-[#5D4037]">
            <div className="text-center border-r border-[#5D4037] pr-4">
              <p className="text-xs uppercase">Sabtu</p>
              <p className="text-2xl font-bold font-serif">24</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold">Mei 2025</p>
              <p className="text-xs">07.00 - 12.00 WIB</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ornamen Bunga Bawah */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 z-0 rotate-180"
      >
        <Image 
          src="/bunga-atas.png" 
          alt="Ornamen" 
          width={400} 
          height={400} 
          className="object-contain"
        />
      </motion.div>

      {/* Watermark / Footer Kecil */}
      <div className="absolute bottom-28 md:bottom-10 opacity-30 text-[10px] uppercase tracking-[0.5em] text-[#5D4037]">
        Class of 2025
      </div>

    </section>
  );
}