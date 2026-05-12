/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jisoi: {
          red: "#FFD700",
          burgundy: "#1A1400",
          black: "#0D0D0D",
          cream: "#FFFDE7",
          sand: "#FFF8DC",
          amber: "#CC8800",
          text: "#1A1A1A",
          border: "#E8D4A0"
        }
      },
      fontFamily: {
        display: ["Archivo Black", "Space Grotesk", "sans-serif"],
        body: ["DM Sans", "Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 60px rgba(255, 215, 0, 0.30)",
        amber: "0 12px 32px rgba(204, 136, 0, 0.35)"
      }
    },
  },
  plugins: [],
}
