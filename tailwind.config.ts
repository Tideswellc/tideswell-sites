import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0369a1"
        }
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
