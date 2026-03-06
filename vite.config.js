import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#0ea5e9",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
