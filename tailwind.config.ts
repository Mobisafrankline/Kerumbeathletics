import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#E8001C",
          dark: "#B30016",
          light: "#FF1A35",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          dark: "#0D0D0D",
          mid: "#2B2B2B",
        },
        muted: "#555555",
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        heading: ["Montserrat", "Arial Black", "Arial", "sans-serif"],
        body: ["Open Sans", "Arial", "sans-serif"],
      },
      keyframes: {
        scrollBounce: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateX(-50%) translateY(8px)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-bounce": "scrollBounce 2s infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in": "slideIn 0.3s ease forwards",
        ticker: "ticker 25s linear infinite",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(232,0,28,0.3) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

