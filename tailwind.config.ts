/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7B1A2A",
          dark: "#4A0D18",
        },
        cream: "#FAF5EE",
        ink: "#1A1A1A",
      },
      fontFamily: {
        display: ["var(--font-playfair-display)", "serif"],
        serif: ["var(--font-lora)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-in": "fadeIn 1.5s ease-out forwards",
        "petal-drift": "petalDrift 10s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        petalDrift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(10px, 10px) rotate(5deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};