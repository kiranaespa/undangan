// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// // Import Komponen Halaman (Pastikan file ini sudah ada di folder components/pages)
// import Opening from '@/components/pages/opening';
// import Navbar from '@/components/navbar';
// import RSVP from '@/components/pages/rsvp';
// import Gallery from '@/components/pages/gallery';
// import MapPin  from '@/components/pages/maps';
// import Acara from '@/components/pages/acara';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("opening");

//   const renderPage = () => {
//     switch (activeTab) {
//       case "opening":
//         return <Opening onBack={() => setIsOpen(false)} />;

//       case "rsvp":
//         return <RSVP />;

//       case "gallery":
//         return <Gallery />;

//       case "maps":
//         return <MapPin />;

//       case "acara":
//         return <Acara />;

//       default:
//     }
//   }

//   return (
//     <main className="min-h-screen bg-[#FFF9F5] font-sans text-gray-800 relative overflow-hidden">

//       <AnimatePresence mode="wait">
//         {!isOpen ? (
//           /* --- TAMPILAN AWAL (KARTU UNDANGAN KAMU) --- */
//           <motion.div 
//             key="cover"
//             exit={{ opacity: 0, scale: 1.1 }}
//             transition={{ duration: 0.8 }}
//             className="min-h-screen flex items-center justify-center p-4 md:p-8 relative"
//           >
//             {/* Dekorasi Bunga */}
//             <div className="absolute top-0 right-0 w-40 h-40 opacity-30 md:opacity-100">
//               <Image src="/bunga-atas.png" alt="dekorasi" width={200} height={200} className="object-contain" />
//             </div>
//             <div className="absolute bottom-0 left-0 w-40 h-40 opacity-30 md:opacity-100 rotate-180">
//               <Image src="/bunga-atas.png" alt="dekorasi" width={200} height={200} className="object-contain" />
//             </div>

//             {/* Kartu Undangan */}
//             <div className="bg-white shadow-2xl rounded-2xl w-full max-w-6xl p-6 md:p-12 flex flex-col md:flex-row gap-8 relative z-10 border border-gray-100">

//               <div className="flex-1 flex flex-col gap-8">
//                 {/* Header */}
//                 <div className="border-b border-gray-100 pb-6">
//                   <h2 className="text-[#800000] text-lg md:text-xl font-bold tracking-widest uppercase">
//                     Undangan Pelepasan Peserta Didik SMK Telkom Malang
//                   </h2>
//                   <p className="text-xs md:text-sm text-gray-500 mt-2 uppercase tracking-widest leading-relaxed">
//                     Angkatan 32 Tahun Pelajaran 2025/2026 <br />
//                     SMK TELKOM MALANG 
//                   </p>
//                 </div>

//                 {/* Kutipan & Tanggal */}
//                 <div className="flex flex-col md:flex-row gap-6 md:items-center border-b border-gray-100 pb-8">
//                   <p className="italic text-gray-600 text-sm md:text-base md:w-1/2 leading-relaxed">
//                     "Syukuri Segala Kenangan, <br className="hidden md:block" />
//                     Siapkan Diri Untuk Masa Depan"
//                   </p>

//                   <div className="bg-[#FFF9F5] border-l-4 border-[#800000] p-4 flex items-center gap-4 text-[#800000] flex-1 justify-center shadow-inner rounded-r-lg">
//                     <div className="text-center">
//                       <p className="text-xs uppercase tracking-widest">Sabtu</p>
//                       <p className="text-3xl md:text-4xl font-bold font-serif">MEI</p>
//                     </div>
//                     <div className="text-5xl md:text-6xl font-extralight text-gray-200">/</div>
//                     <div className="text-center">
//                       <p className="text-5xl md:text-6xl font-bold font-serif">24</p>
//                       <p className="text-xs tracking-[0.3em]">2025</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Info Waktu & Nama Tamu */}
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-4">
//                   <div>
//                     <p className="text-gray-500 text-xs uppercase tracking-widest">Waktu Acara:</p>
//                     <p className="text-lg md:text-xl font-semibold mt-1">07.00 - 12.00 WIB</p>
//                   </div>

//                   <div className="md:text-right border-t md:border-none pt-4 md:pt-0">
//                     <p className="text-gray-400 text-xs italic">Pleasure to invite,</p>
//                     <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mt-1">
//                       Yth. Bapak/Ibu <br className="md:hidden" /> [Nama Tamu]
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Tombol Akses */}
//                 <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-4">
//                   <button 
//                     onClick={() => setIsOpen(true)}
//                     className="w-full md:w-auto bg-[#800000] text-white px-10 py-4 rounded-xl shadow-lg hover:bg-red-800 transition-all font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
//                     Buka Undangan
//                   </button>
//                   <button 
//                     onClick={() => {setIsOpen(true); setActiveTab("maps");}}
//                     className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-xl hover:bg-gray-50 transition-all font-medium text-sm flex items-center justify-center gap-2"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
//                     Lokasi Acara
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ) : (
//           /* --- TAMPILAN ISI UNDANGAN (DENGAN NAVBAR) --- */
//           <motion.div 
//             key="content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="relative min-h-screen pb-24"
//           >
//             {/* Render Halaman Aktif */}
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {renderPage()}
//               </motion.div>
//             </AnimatePresence>

//             {/* Navbar Tetap Muncul Setelah Undangan Dibuka */}
//             <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Import Komponen Halaman
import Opening from '@/components/pages/opening';
import Navbar from '@/components/navbar';
import RSVP from '@/components/pages/rsvp';
import Gallery from '@/components/pages/gallery';
import MapPin from '@/components/pages/maps';
import Acara from '@/components/pages/acara';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("opening");

  const renderPage = () => {
    switch (activeTab) {
      case "opening": return <Opening onBack={() => setIsOpen(false)} />;
      case "rsvp": return <RSVP />;
      case "gallery": return <Gallery />;
      case "maps": return <MapPin />;
      case "acara": return <Acara />;
      default: return <Opening onBack={() => setIsOpen(false)} />;
    }
  }

  const bungaAsset = "/image/download_-_2026-05-04T140950.484-removebg-preview.png";

  return (
    <main className="min-h-screen bg-[#FDF8F6] font-sans text-[#5D4037] relative overflow-hidden">

      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* --- TAMPILAN COVER (SAMPUL DEPAN) --- */
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen flex items-center justify-center p-6 relative z-50 bg-[#FDF8F6]"
          >
            {/* Ornamen Bunga Pojok */}
            <div className="absolute top-0 left-0">
              <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
            </div>
            <div className="absolute bottom-0 right-0 rotate-180">
              <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
            </div>
            {/* Konten Center */}
            <div className="flex flex-col items-center text-center z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[0.4em] text-xs md:text-sm mb-4 font-bold opacity-70"
              >
                Undangan Pelepasan Peserta Didik
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-serif font-bold text-[#5D4037] mb-8"
              >
                SMK <span className="text-[#D4A373]">TELKOM MALANG</span>
              </motion.h1>

              {/* Ikon Amplop Interaktif (Sesuai Referensi Gambar) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="relative cursor-pointer group mb-8"
              >
                <div className="absolute inset-0 bg-[#D4A373]/20 rounded-full blur-3xl group-hover:bg-[#D4A373]/40 transition-all"></div>
                <div className="relative bg-white p-8 rounded-full shadow-2xl border-4 border-white">
                  {/* SVG Amplop */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#D4A373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                </div>
                {/* Badge Nama Tamu Kecil */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#5D4037] text-white px-4 py-1 rounded-full text-[10px] tracking-widest whitespace-nowrap shadow-lg">
                  KLIK UNTUK MEMBUKA
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-2xl md:text-3xl font-serif font-bold text-[#5D4037]">24 . 05 . 2025</p>
                <div className="w-12 h-[2px] bg-[#D4A373] mx-auto mt-4 mb-2"></div>
                <p className="uppercase tracking-[0.2em] text-[10px] font-bold opacity-60">Temanggung, Jawa Tengah</p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          /* --- TAMPILAN ISI UNDANGAN (DENGAN NAVBAR) --- */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-screen pb-24"
          >
            {/* Render Halaman Aktif */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>

            {/* Navbar Tetap Muncul Setelah Undangan Dibuka */}
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </main>
  );
}
