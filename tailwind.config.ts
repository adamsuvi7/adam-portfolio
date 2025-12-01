import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(222.2 84% 4.9%)",
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "#0F172A",
          foreground: "#F9FAFB"
        },
        accent: {
          DEFAULT: "#0EA5E9"
        },
        muted: {
          DEFAULT: "hsl(215 20.2% 65%)"
        },
        border: "hsl(215 27.9% 16.9%)",
        card: {
          DEFAULT: "hsl(222.2 47.4% 11.2%)",
          foreground: "hsl(210 40% 98%)"
        }
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        "soft-glow": "0 20px 60px rgba(15,23,42,0.75)",
        "card-glow": "0 18px 45px rgba(15,23,42,0.85)"
      }
    }
  },
  plugins: []
};

export default config;


