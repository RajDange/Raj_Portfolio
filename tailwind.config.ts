import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F1A",
        surface: "#0D1220",
        card: "#141B2E",
        border: "#2A3348",
        borderStrong: "#3A4560",
        text: {
          primary: "#F2F4F7",
          secondary: "#9AA3B2",
          muted: "#6B7280",
        },
        accent: {
          blue: "#5FB4F0",
          teal: "#7DC8A0",
          amber: "#E5A15F",
          green: "#5FD07A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
