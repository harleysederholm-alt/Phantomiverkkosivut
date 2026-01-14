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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "deep-void": "#050505",
        "toxic-green": "#00FF41",
        "cyber-cyan": "#00FFFF",
      },
      fontFamily: {
        sans: ["var(--font-code)"],
        mono: ["var(--font-code)"],
        display: ["var(--font-terminal)"],
      },
    },
  },
  plugins: [],
};
export default config;
