"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Location() {
  const [copied, setCopied] = useState(false);

  // Alamat teks untuk ditampilkan dan disalin
  const alamatTeks = "Gedung Graha Cakrawala, Jl. Semarang No.5, Malang, Indonesia";

  const handleCopy = () => {
    navigator.clipboard.writeText(alamatTeks);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // LINK EMBED yang sudah diambil bagian src-nya saja
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7524641122786!2d112.61821599999999!3d-7.959116599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827f0d7f025b%3A0x92aef5088187b798!2sGraha%20Cakrawala%20UM!5e0!3m2!1sid!2sid!4v1778136330119!5m2!1sid!2sid";
  
  // Link navigasi (Share link)
  const navigationUrl = "https://www.google.com/maps/place/Graha+Cakrawala+UM/@-7.959117,112.618216,16z/data=!4m6!3m5!1s0x2e78827f0d7f025b:0x92aef5088187b798!8m2!3d-7.9591166!4d112.618216!16s%2Fg%2F1pzpnxtx6?hl=id&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F6] px-6 relative overflow-hidden py-20">
      
      {/* Ornamen Bunga */}
      <div className="absolute top-0 left-0">
        <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
      </div>

      <div className="w-full max-w-3xl z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-serif text-[#5D4037]">Save the</h1>
          <h2 className="text-3xl md:text-5xl font-serif text-[#D4A373] mb-4">Location</h2>
          <div className="w-20 h-1 bg-[#D4A373] mx-auto mb-6 rounded-full"></div>
          
          <div className="text-[#5D4037] space-y-2">
            <p className="font-bold text-xl uppercase tracking-widest">Gedung Graha Cakrawala</p>
            <p className="text-gray-500 italic max-w-md mx-auto">{alamatTeks}</p>
            
            {/* Tombol Salin Alamat */}
            <button 
              onClick={handleCopy}
              className="text-[#D4A373] text-sm font-bold mt-2 hover:text-[#5D4037] transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              {copied ? "✅ ALAMAT BERHASIL DISALIN" : "📋 SALIN ALAMAT"}
            </button>
          </div>
        </motion.div>

        {/* Container Peta */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-white p-4 rounded-3xl shadow-xl border border-[#D4A373]/20"
        >
          <div className="overflow-hidden rounded-2xl h-[300px] md:h-[400px] w-full relative">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[10%] contrast-[1.1]"
            ></iframe>
          </div>

          <div className="mt-8 mb-4 text-center">
            <a 
              href={navigationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 text-white px-8 py-4 rounded-full tracking-widest shadow-lg hover:bg-yellow-500 transition-all font-bold inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              BUKA GOOGLE MAPS
            </a>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-gray-400 text-sm italic"
        >
          Sampai jumpa di hari bahagia kami! ✨
        </motion.p>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}