import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "binance-primary": "#F0B90B",
        "binance-gold": "#F0B90B",
        "binance-dark": "#1A1D28",
        "binance-darker": "#0E1018",
        "binance-gray": "#2B3139",
        "binance-card": "#1E2329",
        "binance-lightgray": "#848E9C",
        "binance-text": "#EAECEF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-binance": "linear-gradient(135deg, #F0B90B 0%, #FCD535 100%)",
        "gradient-dark": "linear-gradient(180deg, #0B0E11 0%, #181A20 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(240, 185, 11, 0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(240, 185, 11, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

