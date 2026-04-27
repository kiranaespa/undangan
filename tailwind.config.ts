// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna utama sesuai video
        'maroon-invite': '#8B0000', 
        'cream-bg': '#FFFDF7',
      },
      fontFamily: {
        // Daftarkan font serif elegan
        serif: ['var(--font-playfair)', 'serif'], 
      },
    },
  },
  plugins: [],
};
export default config;