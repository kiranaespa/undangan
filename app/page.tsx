import Image from 'next/image';

export default function Home() {
  return (
    // Container Utama (Background Cream)
    <main className="min-h-screen bg-cream-bg flex items-center justify-center p-4 md:p-8 font-sans text-gray-800 relative overflow-hidden">
      
      {/* Dekorasi Bunga Pojok (Gunakan gambar PNG transparan di folder public) */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-30 md:opacity-100">
        <Image src="/bunga-atas.png" alt="dekorasi" width={200} height={200} className="object-contain" />
      </div>
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-30 md:opacity-100 rotate-180">
        <Image src="/bunga-atas.png" alt="dekorasi" width={200} height={200} className="object-contain" />
      </div>

      {/* Kartu Undangan (Putih/Sangat Cream) */}
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-6xl p-6 md:p-12 flex flex-col md:flex-row gap-8 relative z-10 border border-gray-100">
        
        {/* KOLOM KIRI: Teks Vertikal "GRADUATION" (Cuma muncul di Desktop md:) */}
        {/* <div className="hidden md:flex items-center justify-center border-r-2 border-dashed border-gray-200 pr-12 relative">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
            <h1 className="text-[120px] font-serif font-bold tracking-tighter text-gray-100 uppercase leading-none">
              Graduation
            </h1>
          </div> */}
        {/* </div> */}

        {/* KOLOM KANAN: Konten Utama */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* Header */}
          <div className="border-b border-gray-100 pb-6">
            <h2 className="text-maroon-invite text-lg md:text-xl font-bold tracking-widest uppercase">
              Undangan Akhirussanah
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-2 uppercase tracking-widest leading-relaxed">
              Angkatan 13 Tahun Pelajaran 2024/2025 <br />
              SMPIT Cahaya Insani Temanggung
            </p>
          </div>

          {/* Kutipan & Tanggal (Flexbox Responsif) */}
          <div className="flex flex-col md:flex-row gap-6 md:items-center border-b border-gray-100 pb-8">
            <p className="italic text-gray-600 text-sm md:text-base md:w-1/2 leading-relaxed">
              "Syukuri Segala Kenangan, <br className="hidden md:block" />
              Siapkan Diri Untuk Masa Depan"
            </p>
            
            {/* Box Tanggal ala Video */}
            <div className="bg-cream-bg border-l-4 border-maroon-invite p-4 flex items-center gap-4 text-maroon-invite flex-1 justify-center shadow-inner rounded-r-lg">
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest">Sabtu</p>
                <p className="text-3xl md:text-4xl font-bold font-serif">MEI</p>
              </div>
              <div className="text-5xl md:text-6xl font-extralight text-gray-200">/</div>
              <div className="text-center">
                <p className="text-5xl md:text-6xl font-bold font-serif">24</p>
                <p className="text-xs tracking-[0.3em]">2025</p>
              </div>
            </div>
          </div>

          {/* Info Waktu & Nama Tamu */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mt-4">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">Waktu Acara:</p>
              <p className="text-lg md:text-xl font-semibold mt-1">
                07.00 - 12.00 WIB
              </p>
            </div>
            
            <div className="md:text-right border-t md:border-none pt-4 md:pt-0">
              <p className="text-gray-400 text-xs italic">Pleasure to invite,</p>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mt-1">
                Yth. Bapak/Ibu <br className="md:hidden" /> [Nama Tamu]
              </h3>
            </div>
          </div>

          {/* Tombol Akses (Fixed di Bawah Layar kalau Mobile) */}
          <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-4">
            <button className="w-full md:w-auto bg-maroon-invite text-white px-10 py-4 rounded-xl shadow-lg hover:bg-red-800 transition-all font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
              Buka Undangan
            </button>
            <button className="w-full md:w-auto bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-xl hover:bg-gray-50 transition-all font-medium text-sm flex items-center justify-center gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
               Lokasi Acara
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}