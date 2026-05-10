"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

// Tentukan tanggal tujuan wisuda di sini
const TANGGAL_WISUDA = new Date("2026-08-15T09:00:00").getTime();

// Komponen FlipCard individual
interface FlipCardProps {
  digit: number | string;
  label: string;
}

const FlipCard = ({ digit, label }: FlipCardProps) => {
  const formattedDigit = digit.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Container Utama Flip Card */}
      <div className="relative font-serif font-bold text-6xl md:text-8xl w-28 md:w-36 h-32 md:h-44 overflow-hidden rounded-2xl shadow-xl flex flex-col">
        
        {/* Sisi Atas */}
        <div className="relative w-full h-1/2 bg-[#5D4037] text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[200%] flex items-center justify-center">
            {/* Kita geser teks ke atas sedikit */}
            <span className="translate-y-[-5%]">{formattedDigit}</span>
          </div>
        </div>
        
        {/* Sisi Bawah */}
        <div className="relative w-full h-1/2 bg-[#5D4037] text-white overflow-hidden border-t border-black/20">
          <div className="absolute bottom-0 left-0 w-full h-[200%] flex items-center justify-center">
            {/* Kita geser teks ke bawah sedikit */}
            <span className="translate-y-[-2%]">{formattedDigit}</span>
          </div>
        </div>

        {/* Garis Pembatas Emas di Tengah */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#D4A373] transform -translate-y-1/2 z-20"></div>
        
        {/* Overlay Bayangan untuk efek kedalaman */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/10 z-10"></div>
      </div>
      
      {/* Label */}
      <span className="text-[#5D4037] font-sans text-xs md:text-sm tracking-widest uppercase font-semibold">
        {label}
      </span>
    </div>
  );
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Fungsi untuk menghitung sisa waktu
    const calculateTimeLeft = () => {
      const difference = TANGGAL_WISUDA - new Date().getTime();
      
      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const timeLeftData = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      
      return timeLeftData;
    };

    // Set waktu awal
    setTimeLeft(calculateTimeLeft());

    // Perbarui waktu setiap detik
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Bersihkan timer saat komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F6] px-6 relative overflow-hidden py-24">
      
      {/* Ornamen Bunga (Konsisten) */}
      <div className="absolute top-0 left-0">
        <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} className="opacity-80" />
      </div>

      <div className="w-full max-w-5xl z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-serif text-[#5D4037]">Countdown to</h1>
          <h2 className="text-3xl md:text-5xl font-serif text-[#D4A373] mb-4">The Big Day</h2>
          <div className="w-20 h-1 bg-[#D4A373] mx-auto mb-6 rounded-full"></div>
          
          <div className="text-[#5D4037] space-y-2 mt-6">
            <p className="font-semibold text-lg">PROSESI WISUDA UTAMA</p>
            <p className="text-gray-500 italic max-w-sm mx-auto">15 Agustus 2026, 09:00 WIB, Gedung Graha Cakrawala</p>
          </div>
        </motion.div>

        {/* Container Flip Clock (4 Cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-[#D4A373]/10 flex justify-center md:gap-8 gap-4 flex-wrap"
        >
          {isExpired ? (
            // Pesan jika waktu sudah lewat
            <div className="flex flex-col items-center gap-6 py-12 text-center">
                <span className="text-8xl">🎓</span>
                <h3 className="text-3xl font-serif text-[#D4A373]">Waktunya Telah Tiba!</h3>
                <p className="text-[#5D4037] text-gray-500">Selamat atas kelulusannya. Sampai jumpa di gedung acara!</p>
            </div>
          ) : (
            // Tampilan Flip Clock
            <>
              <FlipCard digit={timeLeft.days} label="DAYS" />
              <FlipCard digit={timeLeft.hours} label="HOURS" />
              <FlipCard digit={timeLeft.minutes} label="MINUTES" />
              <FlipCard digit={timeLeft.seconds} label="SECONDS" />
            </>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-gray-400 text-sm italic"
        >
          Kabar gembira ini terasa lebih lengkap dengan kehadiranmu! 🎓✨
          <div className="text-xs mt-1 text-[#D4A373] font-sans font-semibold">Gedung akan dibuka 30 menit sebelum acara dimulai.</div>
        </motion.div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Playfair Display', serif; /* Font Serif (konsisten) */
        }
        .font-sans {
          font-family: 'Montserrat', sans-serif; /* Font Sans (konsisten) */
        }
      `}</style>
    </div>
  );
}