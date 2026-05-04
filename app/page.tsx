"use client";

import { useEffect, useRef, useState, useCallback, CSSProperties } from "react";

// ─── Interfaces ───────────────────────────────────────────────────────────

interface FlowerProps {
  className?: string;
  style?: CSSProperties;
}

// ─── Components ───────────────────────────────────────────────────────────

function FlowerCornerTL({ className = "", style }: FlowerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.92">
        <circle cx="60" cy="60" r="12" fill="#7B1A2A" />
        <circle cx="60" cy="60" r="6" fill="#B8922A" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <ellipse key={i}
            cx={60 + Math.cos(deg * Math.PI / 180) * 20}
            cy={60 + Math.sin(deg * Math.PI / 180) * 20}
            rx="9" ry="5"
            fill="#7B1A2A"
            opacity="0.85"
            transform={`rotate(${deg}, ${60 + Math.cos(deg * Math.PI / 180) * 20}, ${60 + Math.sin(deg * Math.PI / 180) * 20})`}
          />
        ))}
        <path d="M60 75 Q40 110 15 130 Q35 105 60 90" fill="#4A0D18" opacity="0.7" />
        <path d="M75 60 Q110 40 130 15 Q105 35 90 60" fill="#4A0D18" opacity="0.7" />
        <path d="M35 95 Q20 115 10 140" stroke="#7B1A2A" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="10" cy="141" rx="5" ry="8" fill="#7B1A2A" opacity="0.6" transform="rotate(-20,10,141)" />
        <path d="M95 35 Q115 20 140 10" stroke="#7B1A2A" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="141" cy="10" rx="8" ry="5" fill="#7B1A2A" opacity="0.6" transform="rotate(-70,141,10)" />
        <circle cx="22" cy="155" r="7" fill="#A52535" opacity="0.75" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <ellipse key={i}
            cx={22 + Math.cos(deg * Math.PI / 180) * 11}
            cy={155 + Math.sin(deg * Math.PI / 180) * 11}
            rx="5" ry="3"
            fill="#7B1A2A" opacity="0.7"
            transform={`rotate(${deg}, ${22 + Math.cos(deg * Math.PI / 180) * 11}, ${155 + Math.sin(deg * Math.PI / 180) * 11})`}
          />
        ))}
        <circle cx="155" cy="22" r="7" fill="#A52535" opacity="0.75" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <ellipse key={i}
            cx={155 + Math.cos(deg * Math.PI / 180) * 11}
            cy={22 + Math.sin(deg * Math.PI / 180) * 11}
            rx="5" ry="3"
            fill="#7B1A2A" opacity="0.7"
            transform={`rotate(${deg}, ${155 + Math.cos(deg * Math.PI / 180) * 11}, ${22 + Math.sin(deg * Math.PI / 180) * 11})`}
          />
        ))}
        <circle cx="80" cy="140" r="2.5" fill="#B8922A" opacity="0.5" />
        <circle cx="140" cy="80" r="2.5" fill="#B8922A" opacity="0.5" />
        <circle cx="48" cy="170" r="2" fill="#7B1A2A" opacity="0.4" />
        <circle cx="170" cy="48" r="2" fill="#7B1A2A" opacity="0.4" />
        <path d="M60 90 Q30 130 8 175" stroke="#7B1A2A" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M90 60 Q130 30 175 8" stroke="#7B1A2A" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}

function FlowerCornerBR({ className = "", style }: FlowerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.92" transform="rotate(180 110 110)">
        <circle cx="60" cy="60" r="12" fill="#7B1A2A" />
        <circle cx="60" cy="60" r="6" fill="#B8922A" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <ellipse key={i}
            cx={60 + Math.cos(deg * Math.PI / 180) * 20}
            cy={60 + Math.sin(deg * Math.PI / 180) * 20}
            rx="9" ry="5" fill="#7B1A2A" opacity="0.85"
            transform={`rotate(${deg}, ${60 + Math.cos(deg * Math.PI / 180) * 20}, ${60 + Math.sin(deg * Math.PI / 180) * 20})`}
          />
        ))}
        <path d="M60 75 Q40 110 15 130 Q35 105 60 90" fill="#4A0D18" opacity="0.7" />
        <path d="M75 60 Q110 40 130 15 Q105 35 90 60" fill="#4A0D18" opacity="0.7" />
        <path d="M35 95 Q20 115 10 140" stroke="#7B1A2A" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="10" cy="141" rx="5" ry="8" fill="#7B1A2A" opacity="0.6" transform="rotate(-20,10,141)" />
        <path d="M95 35 Q115 20 140 10" stroke="#7B1A2A" strokeWidth="1.5" fill="none" opacity="0.6" />
        <ellipse cx="141" cy="10" rx="8" ry="5" fill="#7B1A2A" opacity="0.6" transform="rotate(-70,141,10)" />
        <circle cx="22" cy="155" r="7" fill="#A52535" opacity="0.75" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <ellipse key={i}
            cx={22 + Math.cos(deg * Math.PI / 180) * 11}
            cy={155 + Math.sin(deg * Math.PI / 180) * 11}
            rx="5" ry="3" fill="#7B1A2A" opacity="0.7"
            transform={`rotate(${deg}, ${22 + Math.cos(deg * Math.PI / 180) * 11}, ${155 + Math.sin(deg * Math.PI / 180) * 11})`}
          />
        ))}
        <circle cx="155" cy="22" r="7" fill="#A52535" opacity="0.75" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <ellipse key={i}
            cx={155 + Math.cos(deg * Math.PI / 180) * 11}
            cy={22 + Math.sin(deg * Math.PI / 180) * 11}
            rx="5" ry="3" fill="#7B1A2A" opacity="0.7"
            transform={`rotate(${deg}, ${155 + Math.cos(deg * Math.PI / 180) * 11}, ${22 + Math.sin(deg * Math.PI / 180) * 11})`}
          />
        ))}
        <path d="M60 90 Q30 130 8 175" stroke="#7B1A2A" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M90 60 Q130 30 175 8" stroke="#7B1A2A" strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}

function SmallFlower({ className = "", style }: FlowerProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="6" fill="#7B1A2A" />
      <circle cx="30" cy="30" r="3" fill="#B8922A" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse key={i}
          cx={30 + Math.cos(deg * Math.PI / 180) * 12}
          cy={30 + Math.sin(deg * Math.PI / 180) * 12}
          rx="6" ry="3.5" fill="#A52535" opacity="0.8"
          transform={`rotate(${deg}, ${30 + Math.cos(deg * Math.PI / 180) * 12}, ${30 + Math.sin(deg * Math.PI / 180) * 12})`}
        />
      ))}
    </svg>
  );
}

// ─── Hooks ────────────────────────────────────────────────────────────────

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true }); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
        done: false,
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  return timeLeft;
}

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── RSVP Form Component ───────────────────────────────────────────────────

function RSVPForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nama: "", email: "", telepon: "", hubungan: "", jumlah: "1", pesan: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.nama || !form.email || !form.telepon || !form.hubungan) return;
    setLoading(true);
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, jumlah_tamu: parseInt(form.jumlah) }),
      });
    } catch (_) { }
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  if (sent) return (
    <div className="text-center py-16 reveal in-view">
      <div className="text-6xl mb-6">🌸</div>
      <h3 className="font-display text-3xl text-maroon mb-3">Terima Kasih!</h3>
      <p className="text-ink/70 font-serif text-lg mb-8">Kehadiran Anda sangat berarti bagi kami.</p>
      <button onClick={() => setSent(false)} className="border border-maroon text-maroon px-8 py-3 font-serif hover:bg-maroon hover:text-cream transition-all duration-300">
        Kirim Lagi
      </button>
    </div>
  );

  const inputClass = "w-full bg-cream border border-maroon/20 focus:border-maroon/60 outline-none px-4 py-3 font-serif text-ink text-sm transition-all duration-200 focus:bg-white";
  const labelClass = "block text-xs font-sans tracking-widest uppercase text-maroon/70 mb-2";

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Nama Lengkap <span className="text-maroon">*</span></label>
          <input name="nama" value={form.nama} onChange={handleChange} placeholder="Nama Anda" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Hubungan <span className="text-maroon">*</span></label>
          <select name="hubungan" value={form.hubungan} onChange={handleChange} className={inputClass}>
            <option value="">-- Pilih --</option>
            <option value="orang_tua">Orang Tua / Wali</option>
            <option value="keluarga">Keluarga</option>
            <option value="guru">Guru / Staf</option>
            <option value="tamu_undangan">Tamu Undangan</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Email <span className="text-maroon">*</span></label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="nama@email.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>No. WhatsApp <span className="text-maroon">*</span></label>
          <input name="telepon" value={form.telepon} onChange={handleChange} placeholder="08xxxxxxxxxx" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Jumlah Tamu</label>
          <input name="jumlah" type="number" min="1" max="5" value={form.jumlah} onChange={handleChange} className={inputClass} />
        </div>
      </div>
      <div>
        <label className={labelClass}>Ucapan / Pesan (opsional)</label>
        <textarea name="pesan" value={form.pesan} onChange={handleChange} rows={3} placeholder="Tulis ucapan untuk wisudawan..." className={inputClass + " resize-none"} />
      </div>
      <button onClick={handleSubmit} disabled={loading} className="w-full bg-maroon text-cream py-4 font-sans tracking-widest uppercase text-sm hover:bg-maroon-dark transition-all duration-300 disabled:opacity-60">
        {loading ? "Mengirim..." : "Konfirmasi Kehadiran"}
      </button>
      <p className="text-center text-xs text-ink/40 font-serif">Konfirmasi paling lambat 12 Juli 2025</p>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────

const GRADUATES = [
  { id: 1, nama: "Ahmad Fauzi Ramadhan", jurusan: "RPL", predikat: "Dengan Pujian" },
  { id: 2, nama: "Siti Nur Aisyah", jurusan: "RPL", predikat: "Sangat Memuaskan" },
  { id: 3, nama: "Muhammad Rizky Pratama", jurusan: "RPL", predikat: "Dengan Pujian" },
  { id: 4, nama: "Dewi Kartika Sari", jurusan: "RPL", predikat: "Memuaskan" },
  { id: 5, nama: "Bagas Eko Nugroho", jurusan: "RPL", predikat: "Sangat Memuaskan" },
  { id: 6, nama: "Laila Fitria Ningrum", jurusan: "RPL", predikat: "Dengan Pujian" },
  { id: 7, nama: "Dimas Aditya Putra", jurusan: "TKJ", predikat: "Sangat Memuaskan" },
  { id: 8, nama: "Rahma Yunita", jurusan: "TKJ", predikat: "Dengan Pujian" },
  { id: 9, nama: "Fajar Setiawan", jurusan: "TKJ", predikat: "Memuaskan" },
  { id: 10, nama: "Nadia Permata Sari", jurusan: "TKJ", predikat: "Sangat Memuaskan" },
  { id: 11, nama: "Kevin Alfredo Santoso", jurusan: "TKJ", predikat: "Dengan Pujian" },
  { id: 12, nama: "Putri Maharani", jurusan: "TKJ", predikat: "Memuaskan" },
  { id: 13, nama: "Arif Budianto", jurusan: "MM", predikat: "Dengan Pujian" },
  { id: 14, nama: "Cindy Pratiwi", jurusan: "MM", predikat: "Sangat Memuaskan" },
  { id: 15, nama: "Rendi Kurniawan", jurusan: "MM", predikat: "Memuaskan" },
  { id: 16, nama: "Anisa Rahayu", jurusan: "MM", predikat: "Dengan Pujian" },
  { id: 17, nama: "Hendra Susanto", jurusan: "MM", predikat: "Sangat Memuaskan" },
  { id: 18, nama: "Yuni Astuti", jurusan: "MM", predikat: "Dengan Pujian" },
];

// ─── Main Page ─────────────────────────────────────────────────────────────

export default function Home() {
  useReveal();
  const countdown = useCountdown("2025-07-19T08:00:00");
  const [activeJurusan, setActiveJurusan] = useState("Semua");
  const [search, setSearch] = useState("");
  const [openInvite, setOpenInvite] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [inputName, setInputName] = useState("");
  const mainRef = useRef<HTMLDivElement>(null);

  const handleOpenInvite = useCallback(() => {
    setGuestName(inputName || "Tamu Undangan");
    setOpenInvite(true);
    setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [inputName]);

  const pad = (n: number) => String(n).padStart(2, "0");

  if (!openInvite) {
    return (
      <div className="min-h-screen bg-[#FAF5EE] flex items-center justify-center relative overflow-hidden">
        <div className="noise-overlay" />
        <FlowerCornerTL className="absolute top-0 left-0 w-48 md:w-64 animate-petal-drift" />
        <FlowerCornerBR className="absolute bottom-0 right-0 w-48 md:w-64 animate-petal-drift" style={{ animationDelay: "1s" }} />
        <SmallFlower className="absolute top-8 right-16 w-12 animate-float" style={{ animationDelay: "0.5s" }} />
        <SmallFlower className="absolute bottom-16 left-12 w-10 animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="absolute inset-6 md:inset-10 border border-maroon/20 pointer-events-none" />
        <div className="absolute inset-8 md:inset-12 border border-maroon/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto px-8 gap-0 md:gap-0 min-h-screen">
          <div className="flex-shrink-0 flex items-center justify-center md:justify-end w-full md:w-auto md:pr-10">
            <div
              className="select-none leading-none tracking-tight text-maroon-dark opacity-0 animate-fade-in delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: "clamp(5rem, 16vw, 11rem)",
                lineHeight: 0.9,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                letterSpacing: "-0.04em",
              }}
            >
              Wisuda
            </div>
          </div>

          <div className="hidden md:block w-px h-80 bg-maroon/25 mx-6 flex-shrink-0" />
          <div className="block md:hidden h-px w-24 bg-maroon/25 my-4" />

          <div className="flex-1 max-w-md text-left space-y-5">
            <div className="opacity-0 animate-fade-up delay-200">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/60 mb-1">Dengan Hormat</p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-maroon-dark leading-tight">
                Undangan<br />Wisuda &<br />Penglepasan
              </h1>
            </div>

            <div className="opacity-0 animate-fade-up delay-300 space-y-0.5">
              <p className="font-sans text-xs tracking-widest uppercase text-maroon/50">Angkatan XIV · Tahun Pelajaran 2024/2025</p>
              <p className="font-display text-lg font-bold text-maroon-dark">SMK Telkom Malang</p>
            </div>

            <div className="opacity-0 animate-fade-up delay-400 border-y border-maroon/20 py-4 space-y-1">
              <p className="font-sans text-xs tracking-widest uppercase text-maroon/50">Tema</p>
              <p className="font-serif italic text-ink/80 text-sm leading-relaxed">
                "Melangkah Lebih Tinggi,<br />Meraih Cita-Cita Bangsa"
              </p>
            </div>

            <div className="opacity-0 animate-fade-up delay-500 space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs tracking-widest uppercase text-maroon/50 w-16">Hari</span>
                <span className="font-display text-lg font-bold text-maroon">
                  Sabtu, <span className="text-3xl">19</span> / Juli / 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs tracking-widest uppercase text-maroon/50 w-16">Pukul</span>
                <span className="font-serif text-ink/80">07.00 – 12.00 WIB</span>
              </div>
            </div>

            <div className="opacity-0 animate-fade-up delay-600 space-y-2 pt-2">
              <p className="font-sans text-xs tracking-widest uppercase text-maroon/50">With Pleasure</p>
              <input
                type="text"
                value={inputName}
                onChange={e => setInputName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleOpenInvite()}
                placeholder="Guest Name"
                className="w-full border-b border-maroon/40 bg-transparent pb-2 font-display text-lg text-maroon-dark placeholder-maroon/30 outline-none focus:border-maroon transition-colors"
              />
            </div>

            <div className="opacity-0 animate-fade-up delay-700">
              <button
                onClick={handleOpenInvite}
                className="group relative bg-maroon text-cream px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-maroon-dark"
              >
                <span className="relative z-10">✦ Open Invitation ✦</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={mainRef} className="bg-[#FAF5EE] min-h-screen">
      <div className="noise-overlay" />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-maroon/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-maroon font-bold text-lg italic">SMK Telkom Malang</div>
          <div className="hidden md:flex items-center gap-8">
            {["Countdown", "Rundown", "Wisudawan", "Galeri", "Lokasi", "RSVP"].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="font-sans text-xs tracking-widest uppercase text-ink/50 hover:text-maroon transition-colors">{s}</a>
            ))}
          </div>
          <div className="font-serif text-xs text-maroon/60 italic">
            Untuk: <span className="font-semibold text-maroon">{guestName}</span>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF5EE] via-[#F5EBD8] to-[#EFE0C8]" />
        <FlowerCornerTL className="absolute top-0 left-0 w-52 md:w-80 animate-petal-drift z-10" />
        <FlowerCornerBR className="absolute bottom-0 right-0 w-52 md:w-80 animate-petal-drift z-10" style={{ animationDelay: "1.2s" }} />
        <SmallFlower className="absolute top-24 right-24 w-14 animate-float" style={{ animationDelay: "0.8s" }} />
        <SmallFlower className="absolute bottom-32 left-20 w-10 animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-0 min-h-[80vh]">
          <div className="hidden md:flex items-center justify-center flex-shrink-0 pr-8">
            <div
              className="text-maroon opacity-0 animate-fade-in delay-100"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: "10rem",
                lineHeight: 0.88,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                letterSpacing: "-0.04em",
                color: "#7B1A2A",
              }}
            >
              Wisuda
            </div>
          </div>

          <div className="block md:hidden text-center mb-6">
            <h1 className="font-display italic font-black text-6xl text-maroon leading-none opacity-0 animate-fade-up delay-100">
              Wisuda
            </h1>
          </div>

          <div className="hidden md:block w-px h-96 bg-maroon/20 mx-4 flex-shrink-0" />

          <div className="flex-1 text-left md:pl-10 space-y-6">
            <div className="opacity-0 animate-fade-up delay-200">
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-maroon/50 mb-2">
                Bismillahirrahmanirrahim
              </p>
              <p className="font-serif italic text-ink/60 text-sm mb-4">
                Dengan segala kerendahan hati dan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i
              </p>
              <div className="border-l-2 border-maroon pl-4">
                <p className="font-display text-2xl font-bold text-maroon">{guestName}</p>
              </div>
            </div>

            <div className="opacity-0 animate-fade-up delay-300">
              <p className="font-serif text-ink/70 text-sm leading-relaxed">
                untuk hadir dalam acara <strong className="text-maroon">Wisuda & Penglepasan Siswa</strong>
              </p>
              <p className="font-display font-bold text-maroon text-xl mt-1">Angkatan XIV</p>
            </div>

            <div className="opacity-0 animate-fade-up delay-400 bg-maroon/5 border border-maroon/15 p-5 space-y-3">
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="font-sans text-[9px] tracking-widest uppercase text-maroon/50 mb-1">Hari & Tanggal</p>
                  <p className="font-display font-bold text-maroon text-sm">Sabtu</p>
                  <p className="font-display font-black text-maroon text-3xl leading-none">19</p>
                  <p className="font-display font-bold text-maroon">Juli 2025</p>
                </div>
                <div className="w-px bg-maroon/20" />
                <div className="flex-1">
                  <p className="font-sans text-[9px] tracking-widest uppercase text-maroon/50 mb-1">Waktu</p>
                  <p className="font-serif text-ink/80 text-sm">07.00 – 12.00 WIB</p>
                  <p className="font-sans text-[9px] tracking-widest uppercase text-maroon/50 mt-3 mb-1">Tempat</p>
                  <p className="font-serif text-ink/80 text-sm">Gedung Serbaguna<br />SMK Telkom Malang</p>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-up delay-600 flex flex-wrap gap-3">
              <a href="#countdown" className="bg-maroon text-cream px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-maroon-dark transition-all duration-300">
                Lihat Detail →
              </a>
              <a href="#rsvp" className="border border-maroon text-maroon px-8 py-3 font-sans text-xs tracking-widest uppercase hover:bg-maroon hover:text-cream transition-all duration-300">
                RSVP
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="countdown" className="py-24 bg-[#F5EBD8] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/50 mb-2 reveal">Menghitung Hari</p>
          <h2 className="font-display italic text-4xl md:text-5xl font-bold text-maroon-dark mb-12 reveal">
            Hari Bersejarah Menanti
          </h2>
          {countdown.done ? (
            <p className="font-display italic text-3xl text-maroon reveal">Selamat! Acara telah berlangsung 🎓</p>
          ) : (
            <div className="flex items-center justify-center gap-2 md:gap-4 reveal">
              {[
                { value: countdown.days, label: "Hari" },
                { value: countdown.hours, label: "Jam" },
                { value: countdown.minutes, label: "Menit" },
                { value: countdown.seconds, label: "Detik" },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-maroon text-cream font-display font-black text-4xl md:text-6xl w-20 md:w-28 h-20 md:h-28 flex items-center justify-center">
                      {pad(item.value)}
                    </div>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-maroon/60 mt-2">{item.label}</span>
                  </div>
                  {i < 3 && <span className="font-display text-3xl md:text-5xl font-black text-maroon/30 mx-2">:</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="rsvp" className="py-24 bg-cream relative">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-maroon/50 mb-2 reveal">Reservasi</p>
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-maroon-dark reveal">Kehadiran</h2>
          </div>
          <RSVPForm />
        </div>
      </section>
    </div>
  );
}/*  */