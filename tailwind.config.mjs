/** @type {import('tailwindcss').Config} */
//
// Quvii palette — technical/professional security camera brand.
// Mood: trust, precision, dark calm (cameras observe quietly).
//   • Deep navy hero — gravity of professional security gear
//   • White content surfaces with cool-gray text — engineering-doc feel
//   • Cobalt/electric primary — quality + tech, distinct from Ring's
//     teal and Amazon's orange
//   • Safety green as status accent (recording-dot vibe)
//
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a1628",
          deep:    "#06101e",
          soft:    "#162338",
        },
        // Quvii brand primary — #0387E5 (electric cobalt, signals clarity
        // + signal + precision). Generated 50-900 scale around the 500 anchor.
        primary: {
          50:  "#e6f3fd",
          100: "#c5e3fb",
          200: "#90c8f6",
          300: "#54a8f0",
          400: "#1e8aea",
          500: "#0387e5",   // ← brand color
          600: "#026fbb",
          700: "#025894",
          800: "#03467a",
          900: "#053a64",
        },
        signal: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        body: {
          DEFAULT: "#0f172a",
          muted:   "#475569",
          faint:   "#94a3b8",
          line:    "#e2e8f0",
        },
        trust: {
          warranty: "#0ea5e9",
          privacy:  "#10b981",
          local:    "#f59e0b",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont",
          '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif",
        ],
        display: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 15% 0%, rgba(3,135,229,0.32), transparent 55%), linear-gradient(180deg, #0a1628 0%, #06101e 100%)",
        "trust-card":
          "linear-gradient(135deg, rgba(3,135,229,0.07), rgba(255,255,255,0.6))",
      },
      boxShadow: {
        "glow-primary": "0 0 32px rgba(3,135,229,0.45)",
        "card":         "0 1px 2px rgba(10,22,40,0.06), 0 8px 24px -8px rgba(10,22,40,0.12)",
        "ring-focus":   "0 0 0 3px rgba(58,100,236,0.30)",
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
