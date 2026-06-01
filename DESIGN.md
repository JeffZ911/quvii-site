# Quvii — DESIGN.md

Machine-readable design system for quvii.com. Any AI agent (or human)
touching the UI MUST read this first and stay inside these rails. The
goal is a "$150k agency build", not "a template with nice fonts."

Aesthetic: **Soft Structuralism** — clean white / silver-grey surfaces,
massive bold grotesk typography, airy floating components with very soft,
highly-diffused ambient shadows. Apple-/Linear-tier restraint. The dark
hero is kept as a single dramatic moment; everything else breathes light.

Brand: Quvii — an independent, US-based connected-security technology
brand. Voice: calm, technical, advisory. Never hypey, never brochure.

---

## 1. Atmosphere

- Light, spacious, engineered. Surfaces feel like brushed glass plates
  resting in soft trays (the Double-Bezel principle, §5).
- One dramatic dark moment (the hero). Everything after is bright, airy,
  editorial.
- Motion has mass: things settle in with spring physics, never snap.

## 2. Color

Tokens live in `tailwind.config.mjs`. Semantic roles:

| Role | Value | Use |
|---|---|---|
| `ink` | `#0a0a0a` | Primary text, dark hero floor, dark sections |
| `ink-soft` | `#1c1c1e` | Dark card surfaces |
| `paper` / `surface` | `#ffffff` | Primary background |
| `surface-alt` | `#f5f5f7` | Section alt background (Apple grey) |
| `mist` | `#fafafa` | Card inner-core surface (lighter than alt) |
| `body` | `#1d1d1f` | Body text |
| `body-muted` | `#6e6e73` | Secondary text |
| `body-faint` | `#86868b` | Tertiary text / eyebrow |
| `hair` / `body-line` | `#e8e8ed` | Hairline dividers + bezel rings (NEVER a hard 1px gray) |
| `primary-500` | `#0387e5` | THE accent. CTAs + link hover ONLY. Never a large fill. |

Rules:
- Exactly ONE accent (`primary`). It appears on CTAs, link hovers, and
  tiny eyebrow dots — never as a section background.
- Backgrounds alternate `surface` ↔ `surface-alt` for rhythm. No third
  background color.
- Dark sections (`ink`) are used sparingly: hero, StandardsTeaser, footer.

## 3. Typography

- **Display (headings):** `Clash Display` — massive, bold grotesk. Tight
  tracking (`-0.03em` to `-0.04em`). Weights 600/700.
- **Body:** `Satoshi` — clean, warm-neutral. Weights 400/500.
- **BANNED:** Inter, Roboto, Arial, Helvetica, Open Sans. (Inter was the
  old default — fully removed.)

Scale (Apple-grade, big jumps, few middle steps):
- `text-display-xl` 6.5rem · `display-lg` 5rem · `display` 3.5rem ·
  `display-sm` 2.5rem · then `text-2xl`/`xl` for sub-heads, `base`/`sm`
  for body. Avoid the middle of the scale.

Rules:
- H1/hero headings are HUGE and tight. Let them dominate.
- Eyebrow tags precede major headings: pill, `text-[10px] uppercase
  tracking-[0.2em] font-medium`, accent or faint color.
- Body line-height generous (1.55+). Headings tight (1.0–1.1).

## 4. Spacing & Layout

- **Macro-whitespace:** sections are `py-24` → `py-40`. The layout
  breathes heavily. Never cramped.
- Containers: `max-w-page` (1280) for content, `max-w-wide` (1440) for
  hero/banners, `max-w-prose` (68ch) for article bodies.
- Grids are asymmetric where it adds interest (FeatureStory 1.1fr/1fr,
  CategoryBanner 1.15fr/1fr) — NOT symmetric 3-col Bootstrap blocks.
- **Mobile (<768px):** every asymmetric/multi-col layout collapses to a
  single `w-full` column with `px-6 py-12`+ vertical gaps. Use
  `min-h-[100dvh]`, never `h-screen` (iOS Safari jump).

## 5. The Double-Bezel (machined-hardware depth)

NEVER place a premium card/image flat on the background. Nest it:

- **Outer shell:** wrapper with a faint fill (`bg-surface-alt` or
  `bg-white/60`), a hairline ring (`ring-1 ring-body-line/70`), padding
  `p-1.5`–`p-2`, large radius `rounded-[1.75rem]`.
- **Inner core:** the real content. Own surface (`bg-white` / image), an
  inner top highlight (`shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]`),
  and a concentric smaller radius `rounded-[calc(1.75rem-0.375rem)]`.
- Shadow is the soft-diffused `shadow-soft` token — never `shadow-md` or
  any `rgba(0,0,0,0.3)` hard drop.

## 6. Buttons (Island / Button-in-Button)

- Primary CTA: full pill `rounded-full`, generous `px-6 py-3`.
- Trailing icon (↗ / ›) NEVER naked — nested in its own circle
  (`w-8 h-8 rounded-full bg-black/5 grid place-items-center`) flush to the
  button's right inner padding.
- Hover physics (`group`): `active:scale-[0.98]` press; inner icon circle
  `group-hover:translate-x-0.5 group-hover:-translate-y-[1px]
  group-hover:scale-105`. Always custom cubic-bezier, never linear.

## 7. Navigation

- Floating glass **island**, detached from the top (`mt-4 mx-auto w-max
  rounded-full`), `backdrop-blur-xl bg-white/70 ring-1 ring-body-line/60`.
  NEVER edge-to-edge glued to `top-0`.
- On home it floats over the dark hero (white text); on scroll + inner
  pages it stays a light glass pill.
- Mobile hamburger morphs to an X (rotate lines, don't swap icon).
  Full-screen `backdrop-blur-3xl bg-ink/90` overlay; links **stagger** in
  (`translate-y-8 opacity-0` → settled, `delay-[Nms]`).

## 8. Motion (MOTION_INTENSITY ≈ 4–5)

- Easing: custom `cubic-bezier(0.32,0.72,0,1)` (the "settle"). Durations
  500–800ms. NO `linear` / `ease-in-out`.
- **Scroll reveal:** elements enter with a gentle heavy fade-up +
  de-blur: `translate-y-12 blur-sm opacity-0` → `0/0/1` over ~700ms.
  Driven by `IntersectionObserver` (ScrollReveal.astro) — NEVER a
  `scroll` listener.
- **Performance (hard rules):** animate ONLY `transform` + `opacity`.
  Never `top/left/width/height`. `backdrop-blur` only on fixed/sticky
  (nav, overlays) — never on scrolling content. `prefers-reduced-motion`
  disables reveals.

## 9. The "Absolute Zero" ban-list (instant-fail)

- Fonts: Inter, Roboto, Arial, Open Sans, Helvetica.
- Borders/shadows: generic 1px solid gray border; `shadow-md`; any
  `rgba(0,0,0,0.25+)` hard drop shadow.
- Icons: thick-stroked Lucide/FontAwesome/Material. Use ultra-light lines.
- Layout: edge-to-edge sticky navbar glued to top; symmetric 3-col
  Bootstrap grid without big whitespace.
- Motion: `linear`/`ease-in-out`; instant state changes; scroll-listener
  parallax.

## 10. Pre-output checklist (last filter)

- [ ] No banned font / border / shadow / layout / motion from §9.
- [ ] Clash Display headings, Satoshi body.
- [ ] Major cards use Double-Bezel (outer shell + inner core, concentric radii, inner highlight).
- [ ] CTAs use Button-in-Button trailing icon + hover physics.
- [ ] Section padding ≥ `py-24`; layout breathes.
- [ ] All transitions custom cubic-bezier; scroll reveals present.
- [ ] Collapses to single `w-full` column < 768px.
- [ ] Animations use only transform/opacity; backdrop-blur only on fixed.
- [ ] Reads as "$150k agency build", not "template with nice fonts."
