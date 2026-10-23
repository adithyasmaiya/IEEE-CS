# CONFLUENCE 2026 · IEEE Computer Society PESU

> **Flagship Hackathon Web Platform** — Engineered with Astro SSG, TypeScript, and a responsive dark editorial visual design system. Built for the IEEE CS PESU WebDev Recruitment Challenge.

---

## 1. Project Overview

**Confluence 2026** is the flagship interdisciplinary hackathon organized by the **IEEE Computer Society Student Branch Chapter at PES University**, Bengaluru.

This repository contains the complete production-grade website built for the recruitment challenge. The project demonstrates:
- A signature DesignArena-inspired dark editorial aesthetic (`#0A0A0A` background, warm cream `#F2EEE6` typography, and acid-lime `#C8FF2E` accents).
- High-performance, zero-bloat static architecture powered by **Astro 5 SSG**.
- Clean separation of concerns with strictly typed, centralized data modules.
- Accessibility, SEO, and responsive design refined across mobile, tablet, and desktop viewports.

---

## 2. Features & The Six Required Routes

The platform generates 6 standalone static HTML pages at build time:

| Route | Page | Purpose & Key Features |
| :--- | :--- | :--- |
| **`/`** | **Home** | Landing experience with layered Hero (Eureka character animation canvas + rotating orbital SVG artwork + dual-axis protective gradient), Engineering Manifesto summary, 4 core Problem Tracks, Roadmap, FAQs, and Register CTA. |
| **`/about/`** | **About** | The Engineering Convergence Manifesto, IEEE CS PESU Host Chapter overview, institutional context, and participant ethos (*Craft Over Slides*). |
| **`/themes/`** | **Themes** | Deep-dive into the 4 problem spaces (Autonomous Intelligence, Distributed Systems, HCI / Spatial Tech, Radical Software Craft), evaluation rubrics, and the Physical Computing / Hardware Lab showcase. |
| **`/roadmap/`** | **Roadmap** | 5-phase event timeline from applications to live stage demos, build cadence details, and mentoring checkpoint guides. |
| **`/faqs/`** | **FAQs** | Native disclosure accordion answering verified participant questions on eligibility, team sizes, free admission, hardware provisions, and direct organizer contact channels. |
| **`/register/`** | **Register** | Live Admissions Channel status board, Application Checklist, On-Site Provisions panel, and an offline Team Proposal Draft Tool with browser `localStorage` persistence. |

### Key Platform Features
- **Layered Hero System**: Seamless interaction between oversized editorial typography (`CONFLUENCE /26`), rotating orbital SVG artwork, and the 177-frame Eureka character canvas animation.
- **Scroll-Tied Roadmap Progress**: Horizontal acid-lime progress indicator tied to scroll depth via `IntersectionObserver` on desktop/tablet, and progressive vertical connector illumination on mobile.
- **Interactive Theme Cards**: Staggered reveal animations with shape previews and hover transformations.
- **Local Proposal Draft Tool**: Allows teams to draft and save credentials and project abstracts locally before the official Google Form link is announced.
- **Native Semantic FAQ Accordions**: Built with HTML5 `<details>` and `<summary>` for instant, accessible keyboard interactions without JavaScript dependencies.

---

## 3. Tech Stack

- **Framework**: [Astro 5](https://astro.build/) in Static Site Generation (`output: 'static'`) mode.
- **Language**: [TypeScript](https://www.typescriptlang.org/) with strict type checking.
- **Styling**: Vanilla CSS utilizing design tokens via CSS custom properties (`--bg`, `--ink`, `--acid`, `--line`, etc.) and shared responsive breakpoints. Tailwind CSS v4 is integrated via `@tailwindcss/vite` in the build pipeline.
- **Integrations & Official Tooling**:
  - `@astrojs/sitemap`: Automated production XML sitemap generation.
  - `@astrojs/check`: Build-time template syntax and TypeScript diagnostic validation.
- **Runtime Libraries**: **Zero heavy runtime JS libraries** (no React/Vue/Svelte, no GSAP, Framer Motion, or Three.js). Native browser APIs (`IntersectionObserver`, `requestAnimationFrame`, `requestIdleCallback`, HTML5 `<canvas>`, `localStorage`) are used exclusively for lightweight progressive enhancements.

---

## 4. Why Astro SSG?

Astro Static Site Generation was selected for specific architectural and operational advantages:

1. **Pure Static HTML Delivery**: All 6 routes are compiled to physical `.html` files at build time (`dist/index.html`, `dist/about/index.html`, etc.). There is no Node.js server to maintain, no cold starts, and zero database queries at request time.
2. **Zero Hydration Overhead**: Astro ships 0 KB of client framework runtime by default. Unlike Next.js or React SPAs where the browser must download, parse, and execute framework bundles before rendering content, Astro delivers instant Time-To-First-Byte (TTFB).
3. **Edge CDN Distribution**: Fully static files can be cached and served globally across Vercel's Edge Network with sub-50ms latency.
4. **Guaranteed SEO & Resilience**: Search engine bots and social crawlers receive complete, semantic HTML on the initial GET request. If client JavaScript is disabled or fails to load, all content, navigation, and styling remain 100% readable and accessible.

---

## 5. Project Architecture & Reusable Components

```text
confluence-2026/
├── public/                     # Static public assets served as-is
│   ├── favicon.svg             # Vector site icon
│   ├── robots.txt              # Search crawler directives referencing sitemap
│   ├── og-image.png            # 1200x675 Open Graph / Twitter social card
│   ├── frames/                 # 177 optimized WebP hero animation frames (with JPG fallbacks)
│   └── images/                 # Optimized showcase photography (WebP + JPG)
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── BaseHead.astro      # Centralized metadata, canonical tags, Open Graph, and JSON-LD
│   │   ├── Nav.astro           # Sticky navigation bar & mobile drawer with ARIA states
│   │   ├── Footer.astro        # Structured footer with contact info, social links & back-to-top
│   │   ├── Hero.astro          # Layered hero section (typography, orbital art, Eureka canvas)
│   │   ├── HeroAnimation.astro # Progressive canvas frame player with WebP streaming
│   │   ├── PageHeader.astro    # Shared header banner across all 5 subpages
│   │   ├── About.astro         # Engineering manifesto and 3 core pillars
│   │   ├── Themes.astro        # 4 problem spaces interactive list
│   │   ├── ThemeCard.astro     # Individual theme row with SVG shapes and hover effects
│   │   ├── Roadmap.astro       # Event milestone roadmap section
│   │   ├── RoadmapMilestone.astro # Milestone node and responsive connector
│   │   ├── Faq.astro           # FAQs section container
│   │   ├── FaqItem.astro       # Accessible <details>/<summary> accordion disclosure
│   │   └── Cta.astro           # Final CTA banner with orbital vector artwork
│   ├── data/                   # Centralized, strictly typed data store
│   │   ├── event.ts            # Core event configuration, dates, venue, manifesto & metadata
│   │   ├── navigation.ts       # Route hierarchy, labels, and indices
│   │   ├── themes.ts           # 4 problem tracks, descriptions, and SVG identifiers
│   │   ├── roadmap.ts          # Milestones, build hours, dates, and mentoring checkpoints
│   │   └── faqs.ts             # FAQ questions, answers, and categorization
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML shell, skip link, desktop cursor & parallax script
│   ├── pages/                  # Static routes (1:1 with site URLs)
│   │   ├── index.astro         # /
│   │   ├── about.astro         # /about/
│   │   ├── themes.astro        # /themes/
│   │   ├── roadmap.astro       # /roadmap/
│   │   ├── faqs.astro          # /faqs/
│   │   └── register.astro      # /register/
│   ├── styles/
│   │   └── global.css          # Design system tokens, typography, animations & breakpoints
│   └── types/
│       └── index.ts            # TypeScript interfaces enforcing data contracts
├── astro.config.mjs            # Astro SSG configuration & @astrojs/sitemap integration
├── vercel.json                 # Turnkey deployment manifest for Vercel
├── netlify.toml                # Turnkey deployment manifest for Netlify
├── package.json                # Scripts & dependencies
└── tsconfig.json               # TypeScript configuration
```

---

## 6. Content & Registration Configuration

All event information is decoupled from presentation templates and centralized under `src/data/`:

- **Event Details & Metadata**: Edit `src/data/event.ts` (`EVENT_CONFIG`) to update event dates, venue location, organizer names, contact details, and SEO metadata.
- **Registration Destination**:
  - In `src/data/event.ts`, configure `registration.googleFormsUrl`.
  - Alternatively, pass the environment variable `PUBLIC_GOOGLE_FORMS_URL` at build/deploy time.
  - When `googleFormsUrl` is empty (`''`), the UI automatically indicates that the link is pending release and directs users to `/register/` to use the local proposal draft tool.
- **Registration Open/Closed Status**: Toggle `registration.isOpen: true | false` in `src/data/event.ts`.
- **Tracks & Milestones**: Add or edit problem tracks in `src/data/themes.ts` and event checkpoints in `src/data/roadmap.ts`.

---

## 7. Local Installation & Development

Ensure Node.js `>= 22.12.0` is installed.

```bash
# 1. Clone the repository
git clone https://github.com/adithyasmaiya/IEEE-CS.git
cd IEEE-CS

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# -> Local server available at http://localhost:4321/
```

---

## 8. Production Build & Validation Commands

```bash
# Run Astro and TypeScript diagnostic check
npm run check
# Expected result: 0 errors, 0 warnings, 0 hints

# Build production static bundle to ./dist/
npm run build
# Expected result: 6 static entrypoints compiled in ~1 second

# Preview the production static build locally
npm run preview
# Serves ./dist/ at http://localhost:4321/ for final verification
```

---

## 9. Deployment Instructions (Vercel)

The repository includes a turnkey [vercel.json](file:///D:/IEE%20WEBSITE/confluence-2026/vercel.json) configuration:

```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "cleanUrls": true
}
```

### Deploy via Vercel Dashboard (Recommended)
1. Push your code to GitHub:
   ```bash
   git push origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com/new), click **Import** next to your `adithyasmaiya/IEEE-CS` repository.
3. Vercel automatically detects the Astro framework and `vercel.json` settings.
4. *(Optional)* Add the environment variable `PUBLIC_GOOGLE_FORMS_URL` if the official registration form is ready.
5. Click **Deploy**. Vercel will build and assign an instant production URL (e.g., `https://confluence-2026.vercel.app`).

### Deploy via Vercel CLI
```bash
# Login to Vercel account
npx vercel login

# Deploy to production
npx vercel --prod
```

*(Note: [netlify.toml](file:///D:/IEE%20WEBSITE/confluence-2026/netlify.toml) is also provided in the root for zero-config Netlify deployments).*

---

## 10. SEO, Accessibility, Image & Animation Optimization

- **SEO & Social Sharing**:
  - Every route includes a unique `<title>`, `<meta name="description">`, canonical link, and Open Graph / Twitter Card tags ([BaseHead.astro](file:///D:/IEE%20WEBSITE/confluence-2026/src/components/BaseHead.astro)).
  - Schema.org `Hackathon` JSON-LD structured data is embedded on `/` with verified organizer, venue, date, and free-admission details.
  - Automated XML sitemap (`/sitemap-index.xml`) generated via `@astrojs/sitemap`, referenced in `public/robots.txt`.
- **Accessibility (a11y)**:
  - Semantic HTML5 landmark structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`).
  - Strict WCAG AA contrast compliance across body copy (`#CFCBC2`), muted accents (`#A3A099`), and acid lime (`#C8FF2E`) on `#0A0A0A`.
  - Visible, high-contrast `:focus-visible` outlines (`2px solid var(--acid)`) for keyboard navigation.
  - Accessible `.skip-to-content` link bypassing header navigation for screen reader users.
- **Image Optimization**:
  - All 177 hero character animation frames converted from raw JPGs to WebP, reducing total frame payload from 12.7 MB to 4.3 MB (**66.2% size reduction**). Original JPGs preserved for transparent fallback.
  - Below-the-fold showcase images utilize `<picture>` elements with WebP sources, `loading="lazy"`, `decoding="async"`, and explicit `width`/`height` attributes to eliminate layout shifts (CLS).
- **Animation Performance & Reduced Motion**:
  - **Canvas Memory**: Capped internal canvas drawing buffer at 1920×1080 (down from 4K), reducing GPU VRAM allocation by **75%**.
  - **Frame Streaming**: Frame 1 paints immediately for instant Largest Contentful Paint (LCP); remaining frames stream progressively in batches of 4 via `requestIdleCallback`.
  - **Passive Parallax**: Desktop pointer parallax on the hero orbital artwork uses passive event listeners with smooth `requestAnimationFrame` lerp interpolation, stopping execution when idle (0% CPU impact).
  - **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)` in CSS and JavaScript: halts canvas looping on a static celebration frame, disables orbital rotation and cursor movement, and renders all scroll reveals instantly.

---

## 11. Challenges Encountered & Solutions Implemented

1. **High GPU Memory from Fullscreen Canvas Animation**  
   *Challenge*: Initial testing with a 4K canvas drawing buffer caused elevated GPU memory pressure and frame drops on integrated GPUs.  
   *Solution*: Scaled the internal canvas drawing dimensions to 1920×1080 while utilizing CSS `object-fit: cover`. This reduced GPU VRAM consumption by 75% with zero perceptible visual loss on Retina/HiDPI screens.

2. **Heavy Payload from 177 Animation Frames**  
   *Challenge*: Serving 177 individual JPEG frames incurred a 12.7 MB payload, delaying animation readiness.  
   *Solution*: Converted all frames to quality-optimized WebP assets, reducing payload by 66.2% (to 4.3 MB). Implemented progressive loading: Frame 1 renders synchronously for zero layout shift, followed by idle-callback streaming with automated fallback to JPG on network error.

3. **Animation Overlapping Foreground Text and Buttons**  
   *Challenge*: On narrow or short viewports, the animated Eureka character could visually collide with the headline and CTA buttons.  
   *Solution*: Engineered a compound dual-axis protective gradient on `.hero-character-wrap::after` (horizontal 0%–88% and bottom-up vertical 0%–65%), guaranteeing crisp contrast and unobstructed buttons across all screen ratios.

4. **Premature Collapse of Roadmap on Tablet Screens**  
   *Challenge*: At viewports between 861px and 1100px, the 5-step milestone timeline collapsed into a vertical single column, hiding the progress line and leaving awkward whitespace.  
   *Solution*: Restructured media queries in `global.css` to maintain the 5-column horizontal layout down to 861px with compact 36px node badges and horizontal progress bar. Single-column vertical stacking is strictly confined to viewports `<= 860px`.

5. **Fluid Typography Causing Mobile Wordmark Overflow**  
   *Challenge*: On narrow mobile screens (<380px), large fluid clamps caused the oversized "CONFLUENCE /26" wordmark to exceed the viewport width.  
   *Solution*: Calibrated fluid clamps with lower bounds (`clamp(2.3rem, 14.5vw, 4.2rem)` at <=560px and `clamp(1.95rem, 13.5vw, 2.5rem)` at <=380px), eliminating horizontal scrollbars and text clipping.

---

## 12. Deployment Status & Verified URLs

- **Live Verified Deployment**: [`https://speedy-mistral-c5ulbtq.tmp.now`](https://speedy-mistral-c5ulbtq.tmp.now)  
  *(Tested and confirmed returning HTTP 200 on all 6 static routes, sitemap-index.xml, robots.txt, and WebP frame assets).*
- **Vercel Claim Link**: [`https://vercel.com/claim-deployment?code=dcf5fca2-0e3a-4f9c-a2f2-8139431d75bd`](https://vercel.com/claim-deployment?code=dcf5fca2-0e3a-4f9c-a2f2-8139431d75bd)  
  *(Use this link to claim the deployment into a personal Vercel team/account and assign the permanent domain `confluence-2026.vercel.app`).*
- **GitHub Repository**: [`https://github.com/adithyasmaiya/IEEE-CS.git`](https://github.com/adithyasmaiya/IEEE-CS.git) (`main` branch)
- **Official Chapter Organization**: [`https://github.com/IEEE-CS-PESU`](https://github.com/IEEE-CS-PESU)
- **Official Chapter Community**: WhatsApp Group ([`https://chat.whatsapp.com/FktQhy24FNyDdAq2ZfNmm2`](https://chat.whatsapp.com/FktQhy24FNyDdAq2ZfNmm2)) · Discord ([`https://discord.com/invite/7kpmFp2uuU`](https://discord.com/invite/7kpmFp2uuU)) · Instagram ([`@ieee.cs.pesu`](https://www.instagram.com/ieee.cs.pesu)) · LinkedIn ([`IEEE CS PESU`](https://www.linkedin.com/company/ieeecspesu/home))

- **Official Google Forms URL**: Configured and live at [`https://forms.gle/L1exnXjZmBbikDEY6`](https://forms.gle/L1exnXjZmBbikDEY6). Wired across navigation, hero, and section CTAs via `registration.googleFormsUrl` in `src/data/event.ts`.
- **Specific Room & Track Mentors**: Venue is verified as PES University RR Campus Innovation Labs; room assignments and specific mentor schedules will be populated in `src/data/event.ts` and `src/data/roadmap.ts` upon kickoff.
