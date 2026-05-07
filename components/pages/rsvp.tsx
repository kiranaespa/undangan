"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { QRCodeCanvas } from "qrcode.react";

export default function RSVP() {
  const [step, setStep] = useState<"intro" | "form" | "done">("intro");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    gender: "",
    status: "hadir",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setStep("done");
  };

  const qrData = JSON.stringify(form);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F6] px-6 relative overflow-hidden">
      
      {/* Ornamen Bunga */}
      <div className="absolute top-0 left-0">
        <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <Image src="/image/download_-_2026-05-04T140950.484-removebg-preview.png" alt="" width={300} height={300} />
      </div>

      <div className="w-full max-w-lg text-center z-10">
        <AnimatePresence mode="wait">
          {step === "intro" && (
            <motion.div key="intro" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <h1 className="text-3xl md:text-5xl font-serif text-[#5D4037]">Confirm Your</h1>
              <h2 className="text-3xl md:text-5xl font-serif text-[#D4A373] mb-6">Attendance</h2>
              <p className="text-gray-500 mb-10">Kabar baik darimu sangat kami tunggu <br /> untuk melengkapi kebahagiaan ini.</p>
              <button onClick={() => setStep("form")} className="bg-yellow-400 text-white px-10 py-4 rounded-full tracking-widest shadow-lg hover:bg-yellow-500 transition-all font-bold">
                CLICK HERE
              </button>
            </motion.div>
          )}

          {step === "form" && (
            <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-4 items-center">
              <input name="name" placeholder="Nama Lengkap" required onChange={handleChange} className="input" />
              <input name="phone" placeholder="Nomor HP / WhatsApp" required onChange={handleChange} className="input" />
              
             
              <div className="w-full max-w-95 relative">
                <select name="status" onChange={handleChange} className="input">
                  <option value="hadir">Ya, Saya Akan Hadir</option>
                  <option value="tidak">Maaf, Tidak Bisa Hadir</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#D4A373]">▼</div>
              </div>

              <textarea name="message" placeholder="Berikan ucapan atau doa manis..." onChange={handleChange} className="input h-32 py-4" />
              <button type="submit" className="bg-yellow-400 text-white py-4 px-10 rounded-full mt-4 shadow-md hover:bg-yellow-500 transition font-bold">
                KIRIM KONFIRMASI
              </button>
            </motion.form>
          )}

          {step === "done" && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center">
                <p className="text-[#D4A373] text-2xl font-serif mb-4">Terima kasih ✨</p>
                <div className="p-4 bg-white border-2 border-[#D4A373] rounded-xl">
                  <QRCodeCanvas value={qrData} size={180} />
                </div>
                <p className="text-gray-400 text-sm mt-6 italic">Tunjukkan QR Code ini kepada petugas.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          max-width: 380px;
          padding: 14px 20px;
          border-radius: 999px;
          border: 1px solid #E5E7EB;
          text-align: center;
          background-color: white !important;
          color: #5D4037;
          outline: none !important;
          appearance: none !important;
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .input:focus {
          border-color: #D4A373 !important;
          box-shadow: 0 0 10px rgba(212, 163, 115, 0.2) !important;
        }

        select.input {
          text-align-last: center; /* Merapikan teks select ke tengah */
        }

        textarea.input {
          border-radius: 20px;
          resize: none;
        }

        .input::placeholder {
          color: #9CA3AF;
        }
      `}</style>
    </div>
  );
}