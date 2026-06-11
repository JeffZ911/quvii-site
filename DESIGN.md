# Quvii — DESIGN.md

Machine-readable design system for quvii.com. Any AI agent (or human)
touching the UI MUST read this first and stay inside these rails. The
goal is a "$150k agency build", not "a template with nice fonts."

Aesthetic: **Soft Structuralism, Apple-aligned** (upgraded 2026-06-03 from
the Sunaofe product-page reference) — clean white / silver-grey surfaces,
**SF Pro** system typography on a fluid `clamp()` scale, airy floating
components with very soft, highly-diffused ambient shadows. Apple-/Linear-tier
restraint. The dark hero is kept as a single dramatic moment; everything else
breathes light.

Brand: Quvii — an independent, US-based connected-security technology
brand. Voice: calm, technical, advisory. Never hypey, never brochure.

---

## 1. Atmosphere

- Light, spacious, engineered. Surfaces feel like brushed glass plates
  resting in soft trays (the Double-Bezel principle, §6).
- One dramatic dark moment (the hero). Everything after is bright, airy,
  editorial.
- Motion has mass: things settle in with spring physics, never snap.

## 2. Brand assets (QUVII Logo Kit)

The official kit lives in `QUVII-Logo-Kit/`; the web-ready exports are in
`public/brand/` + `public/favicon-*.png`.

- **Wordmark:** `wordmark-white.png` (over dark), `wordmark-ink.png` (over
  light), `wordmark-red.png` (rare, on white). The island nav uses the ink
  wordmark (light-glass pill); footer + mobile overlay use white.
- **Q symbol:** `q-white.png` / `q-red.png` — square/badge contexts only.
- **Favicons:** `favicon-32.png`, `favicon-80.png`, `apple-touch-icon.png`.
  `theme-color` = `#C40027`. OG fallback = `/brand/og-default.png`.
- **Never** retype "Quvii" as live text where the mark belongs; always use
  the PNG so weight/spacing stay exact.

## 3. Color

Tokens live in `tailwind.config.mjs`. Semantic roles:

| Role | Value | Use |
|---|---|---|
| `ink` | `#15171A` | QUVII Ink (brand kit). Primary text, dark sections |
| `ink-deep` | `#000000` | Hero gradient floor only |
| `ink-soft` | `#1c1f24` | Dark card surfaces |
| `paper` / `surface` | `#ffffff` | Primary background |
| `surface-alt` | `#f5f5f7` | Section alt background (Apple grey) |
| `mist` | `#fafafa` | Card inner-core surface (lighter than alt) |
| `body` | `#1d1d1f` | Body text |
| `body-muted` | `#6e6e73` | Secondary text |
| `body-faint` | `#76767b (WCAG 4.5:1 compliant, was #86868b)` | Tertiary text / eyebrow |
| `hair` / `body-line` | `#e8e8ed` | Hairline dividers + bezel rings (NEVER a hard 1px gray) |
| `primary-600` | `#C40027` | **QUVII Red** (brand anchor). THE accent — CTAs, link hover, eyebrows ONLY. |
| `primary-700` | `#9A0020` | Deep Carmine (brand kit). Hover/pressed accent states. |

Rules:
- Exactly ONE accent (`primary` = QUVII Red `#C40027`). It appears on CTAs,
  link hovers, and tiny eyebrow tags — never as a section background.
- **Brand kit law: "Red is an accent, not a flood — ~10% red, 90% neutral."**
  Never a large red fill. The page reads near-black + true-white, with red
  reserved for the moments that invite a click.
- Backgrounds alternate `surface` ↔ `surface-alt` for rhythm. No third
  background color.
- Dark sections (`ink`) are used sparingly: hero, StandardsTeaser, footer.

## 4. Typography (Apple system, fluid)

- **Both display + body:** the **Apple system stack** —
  `-apple-system, BlinkMacSystemFont, "SF Pro Display"/"SF Pro Text",
  "Helvetica Neue", "Manrope", …`. SF Pro renders natively on Apple devices;
  **Manrope** is the cross-platform fallback (loaded via Google Fonts in
  `BaseLayout.astro`, `display=swap`). No webfont on Apple devices = instant
  paint. (Space Grotesk was retired 2026-06-03.)
- **BANNED:** Inter, Roboto, Arial, Helvetica, Open Sans.

**Fluid `clamp()` scale** — prefer these utility classes over fixed sizes so
headings scale with the viewport (Sunaofe reference):
- `.t-hero` `clamp(2.75rem, 7.4vw, 5.75rem)` · `.t-display`
  `clamp(2.25rem, 4.6vw, 3.5rem)` · `.t-h2` `clamp(1.9rem, 3.4vw, 2.85rem)` ·
  `.t-h3` `clamp(1.3rem, 2vw, 1.6rem)`. All tight tracking (−0.02 to −0.035em),
  `text-wrap: balance` on headings.
- `.eyebrow` — uppercase tracked label (`0.12em`) above a heading; faint or
  red accent. `.lede` — one intro paragraph, `text-wrap: pretty`, ≤42ch.
- `.text-gradient-red` — a single red-gradient accent moment (a hero stat).

Rules:
- H1/hero headings are HUGE and tight. Let them dominate.
- Section heads follow the eyebrow → `.t-h2` → `.lede` rhythm.
- Body line-height generous (1.5+). Headings tight (1.0–1.1).

## 5. Spacing & Layout

- **Macro-whitespace:** sections are `py-24` → `py-40`. The layout
  breathes heavily. Never cramped.
- Containers: `max-w-page` (1280) for content, `max-w-wide` (1440) for
  hero/banners, `max-w-prose` (68ch) for article bodies.
- Grids are asymmetric where it adds interest (FeatureStory 1.1fr/1fr,
  CategoryBanner 1.15fr/1fr) — NOT symmetric 3-col Bootstrap blocks.
- **Mobile (<768px):** every asymmetric/multi-col layout collapses to a
  single `w-full` column with `px-6 py-12`+ vertical gaps. Use
  `min-h-[100dvh]`, never `h-screen` (iOS Safari jump).

## 6. The Double-Bezel (machined-hardware depth)

NEVER place a premium card/image flat on the background. Nest it:

- **Outer shell:** wrapper with a faint fill (`bg-surface-alt` or
  `bg-white/60`), a hairline ring (`ring-1 ring-body-line/70`), padding
  `p-1.5`–`p-2`, large radius `rounded-[1.75rem]`.
- **Inner core:** the real content. Own surface (`bg-white` / image), an
  inner top highlight (`shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]`),
  and a concentric smaller radius `rounded-[calc(1.75rem-0.375rem)]`.
- Shadow is the soft-diffused `shadow-soft` token — never `shadow-md` or
  any `rgba(0,0,0,0.3)` hard drop.

## 7. Buttons (Island / Button-in-Button)

- Primary CTA: full pill `rounded-full`, generous `px-6 py-3`.
- Trailing icon (↗ / ›) NEVER naked — nested in its own circle
  (`w-8 h-8 rounded-full bg-black/5 grid place-items-center`) flush to the
  button's right inner padding.
- Hover physics (`group`): `active:scale-[0.98]` press; inner icon circle
  `group-hover:translate-x-0.5 group-hover:-translate-y-[1px]
  group-hover:scale-105`. Always custom cubic-bezier, never linear.

## 8. Navigation — the single island (`Island.astro`)

- **Exactly ONE** floating nav site-wide (the old always-on `Header.astro` +
  the appear-after-hero pill were merged 2026-06-03 — two pills read as
  cluttered). `Island.astro` is rendered once in `BaseLayout`.
- Wide light-glass pill, detached from the top (`fixed top-3.5`, `mx-auto
  w-[min(980px,…)] rounded-full`), `backdrop-filter: saturate(180%) blur(22px)`
  on `rgba(251,251,253,.82)`. NEVER edge-to-edge glued to `top-0`.
- **Always present** (not appear-after-hero — that left a nav-less gap at the
  top). Gains a touch more elevation past 24px scroll (`.is-scrolled`).
- Layout: ink wordmark (left) · nav links (center) · `Latest` CTA (right).
- Mobile: compact pill (brand + hamburger). Hamburger morphs to an X (rotate
  lines, don't swap icon) → full-screen `backdrop-blur-3xl bg-ink/95` overlay;
  links **stagger** in (`translate-y` + opacity, `--m-delay`).

## 9. Motion (MOTION_INTENSITY ≈ 4–5)

- **Two easings, both Tailwind tokens:**
  - `ease-apple` = `cubic-bezier(0.28,0.11,0.32,1)` — the primary, heavier
    cinematic ease (Sunaofe reference). Use on scroll-reveal + the signature
    components (gallery, expand cards, island).
  - `ease-settle` = `cubic-bezier(0.32,0.72,0,1)` — the springier legacy ease,
    still fine on small hover transitions.
  - Durations 200–900ms. NO `linear` / `ease-in-out`.
- **Scroll reveal** (`[data-reveal]`, observer in `BaseLayout`): elements enter
  with a heavy fade-up + de-blur (`translateY(2rem) blur(8px) opacity-0` →
  `0/0/1` over ~0.8–0.9s, `ease-apple`). `IntersectionObserver` only — NEVER a
  `scroll` listener for reveals.
- **Performance (hard rules):** animate ONLY `transform` + `opacity` (the one
  exception: the curated `max-height` of expand cards). Never
  `top/left/width/height`. `backdrop-blur` only on fixed/sticky (nav, overlays)
  — never on scrolling content. `prefers-reduced-motion` disables reveals.

## 9b. Signature components (Sunaofe-referenced)

- **`ScrollGallery.astro`** — horizontal snap gallery (`.h-scroll`, scroll-snap
  x mandatory, hidden scrollbar) of double-bezel image cards with prev/next
  arrow buttons. Homepage "Start here" / by-category. Cards lift on hover.
- **`ExpandCards.astro`** — a row of cards that expand in place; a `+` button
  rotates 135° to an ×, `.expand-card__more` animates `max-height`. Used for
  "How we test" / methodology (also reinforces E-E-A-T).
- Both reveal with `[data-reveal]` and use `ease-apple`.

## 10. The "Absolute Zero" ban-list (instant-fail)

- Fonts: Inter, Roboto, Arial, Open Sans, Helvetica.
- Borders/shadows: generic 1px solid gray border; `shadow-md`; any
  `rgba(0,0,0,0.25+)` hard drop shadow.
- Icons: thick-stroked Lucide/FontAwesome/Material. Use ultra-light lines.
- Layout: edge-to-edge sticky navbar glued to top; symmetric 3-col
  Bootstrap grid without big whitespace.
- Motion: `linear`/`ease-in-out`; instant state changes; scroll-listener
  parallax.

## 11. Pre-output checklist (last filter)

- [ ] No banned font / border / shadow / layout / motion from §10.
- [ ] SF Pro system stack (Manrope fallback); headings use the fluid `.t-*`
      classes, not fixed sizes.
- [ ] Accent is QUVII Red `#C40027` only — ≤10% of the surface, never a fill.
- [ ] Real QUVII wordmark used (white over dark, ink over light) — never retype "Quvii" as text.
- [ ] Exactly ONE nav (the single `Island`); no second floating pill.
- [ ] Major cards use Double-Bezel (outer shell + inner core, concentric radii, inner highlight).
- [ ] CTAs use Button-in-Button trailing icon + hover physics.
- [ ] Section padding ≥ `py-24` (or `.section-fluid`); layout breathes.
- [ ] Transitions use `ease-apple` (or `ease-settle`); scroll reveals present.
- [ ] Collapses to single `w-full` column < 768px.
- [ ] Animations use only transform/opacity; backdrop-blur only on fixed.
- [ ] Reads as "$150k agency build", not "template with nice fonts."
