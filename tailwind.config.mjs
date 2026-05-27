/** @type {import('tailwindcss').Config} */
//
// Quvii design tokens — aligned with Apple / DJI premium tech-brand
// aesthetics. Near-black + true-white surfaces, single accent reserved
// for CTAs / links. Generous spacing scale. Tight display tracking.
//
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",   // primary text + dark surfaces
          deep:    "#000000",   // hero gradient floor
          soft:    "#1c1c1e",   // dark card surfaces (Apple-grade)
        },
        // Primary kept at #0387E5 — used ONLY for interactive accents
        // (CTAs, link hover). NEVER as a large background.
        primary: {
          50:  "#e6f3fd",
          100: "#c5e3fb",
          200: "#90c8f6",
          300: "#54a8f0",
          400: "#1e8aea",
          500: "#0387e5",
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
          DEFAULT: "#1d1d1f",   // Apple body text
          muted:   "#6e6e73",   // Apple secondary text
          faint:   "#86868b",   // Apple tertiary text
          line:    "#d2d2d7",   // Apple hairline divider
        },
        surface: {
          DEFAULT: "#ffffff",
          alt:     "#f5f5f7",   // Apple section alt background
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont",
          '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        "display": "-0.035em",   // tight Apple display tracking
        "tightest": "-0.05em",
      },
      fontSize: {
        // Apple-grade display scale (clamp-able via classes)
        "display-sm": ["2.5rem",  { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display":    ["3.5rem",  { lineHeight: "1.05", letterSpacing: "-0.03em",  fontWeight: "600" }],
        "display-lg": ["5rem",    { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-xl": ["6.5rem",  { lineHeight: "0.98", letterSpacing: "-0.04em",  fontWeight: "600" }],
      },
      backgroundImage: {
        "hero-floor":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        "story-fade":
          "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.85) 100%)",
      },
      boxShadow: {
        "card":       "0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -16px rgba(0,0,0,0.12)",
        "ring-focus": "0 0 0 3px rgba(3,135,229,0.30)",
      },
      maxWidth: {
        prose: "68ch",
        page:  "1280px",
        wide:  "1440px",
      },
    },
  },
  plugins: [],
};
