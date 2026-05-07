"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

// ================= DATA =================
const galleryData = [
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `rpl${i + 1}`,
    title: `XII RPL ${i + 1}`,
    cover: `/gallery/rpl${i + 1}/1.jpg`,
    photos: Array.from({ length: 10 }, (_, j) => `/gallery/rpl${i + 1}/${j + 1}.jpg`),
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `tkj${i + 1}`,
    title: `XII TKJ ${i + 1}`,
    cover: `/gallery/tkj${i + 1}/1.jpg`,
    photos: Array.from({ length: 10 }, (_, j) => `/gallery/tkj${i + 1}/${j + 1}.jpg`),
  })),
];

export default function Gallery() {
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev! < selectedClass.photos.length - 1 ? prev! + 1 : prev
    );
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : prev));
  };

  return (
    <div className="relative min-h-screen bg-[#FFF9F5] pb-24">

      {/* 🌻 DEKORASI FIXED */}
      <div className="fixed top-0 left-0 w-56 z-0 pointer-events-none">
        <Image
          src="/image/download_-_2026-05-04T140950.484-removebg-preview.png"
          alt="dekorasi"
          width={400}
          height={400}
        />
      </div>

      <div className="fixed bottom-0 right-0 w-56 rotate-180 z-0 pointer-events-none">
        <Image
          src="/image/download_-_2026-05-04T140950.484-removebg-preview.png"
          alt="dekorasi"
          width={400}
          height={400}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        <AnimatePresence mode="wait">
          {!selectedClass ? (
            <>
              {/* HERO */}
              <div className="text-center pt-24 px-6">
                <h1 className="text-4xl md:text-5xl font-serif text-[#5D4037]">
                  Galeri
                </h1>
                <h2 className="text-3xl md:text-4xl font-serif text-[#D4A373] mt-2">
                  Kenangan
                </h2>
                <p className="mt-3 text-gray-500 text-sm">
                  Dokumentasi Akhirussanah
                </p>
              </div>

              {/* GRID 3 KOLOM */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10"
              >
                <div className="max-w-2xl mx-auto px-6">
                  
                  <div className="grid grid-cols-3 gap-4">

                    {galleryData.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setSelectedClass(item)}
                        className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                      >
                        {/* CARD LEBIH KECIL Biar muat 3 */}
                        <div className="relative w-full h-32">
                          <Image
                            src={item.cover}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-2 text-center text-xs font-semibold">
                          {item.title}
                        </div>
                      </motion.div>
                    ))}

                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            /* DETAIL */
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="max-w-lg mx-auto px-6 mt-20">

                <div className="flex items-center gap-3 mb-4">
                  <button onClick={() => setSelectedClass(null)}>
                    <ArrowLeft />
                  </button>
                  <h2 className="text-lg font-semibold">
                    {selectedClass.title}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {selectedClass.photos.map((photo: string, index: number) => (
                    <motion.div
                      key={index}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(index)}
                      className="relative w-full h-32 rounded-xl overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={photo}
                        alt="foto"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FULLSCREEN */}
        <AnimatePresence>
          {selectedImage !== null && selectedClass && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 text-white"
              >
                <X size={28} />
              </button>

              <button onClick={prevImage} className="absolute left-5 text-white">
                <ChevronLeft size={32} />
              </button>

              <div className="relative w-[85%] h-[65%]">
                <Image
                  src={selectedClass.photos[selectedImage]}
                  alt="preview"
                  fill
                  className="object-contain"
                />
              </div>

              <button onClick={nextImage} className="absolute right-5 text-white">
                <ChevronRight size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}