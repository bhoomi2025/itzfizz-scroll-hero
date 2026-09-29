<div align="center">

# 🚗 ItzFizz — Scroll-Driven Hero

### A cinematic web experience where scrolling *is* the animation.

### 🌐 [Live Demo → https://itzfizz-scroll-hero-hpjrekg04-personal127.vercel.app)

</div>

---

## 📖 About

A scroll-driven animation built for the **ItzFizz Web Development Internship** assignment.

As the user scrolls, the first screen stays pinned while a single timeline plays out: a car drives across the viewport, its wheels spin, the skyline and sun drift at different speeds, the headline **WELCOME ITZFIZZ** reveals letter by letter, and four impact metrics count up. Scroll back and everything rewinds.

## 🎯 Assignment Requirements → Implementation

| Requirement | How it's done |
|---|---|
| Scroll-based animation | GSAP `ScrollTrigger` pins the hero and scrubs one timeline to scroll progress |
| Car moves with scroll | Car translates across the viewport, tied directly to scroll position |
| Headline reveal | Each letter is its own element, revealed with a staggered timeline |
| Stats animation | Values count up from 0 with snapped integers (58%, 23%, 27%, 40%) |
| Smooth performance | Only `transform` and `opacity` are animated |
| Responsive | Fluid `clamp()` type, geometry recalculated on refresh and resize |

## ⚙️ How It Works

1. **Pin** — `ScrollTrigger` pins the hero section while the user scrolls.
2. **Scrub** — one master GSAP timeline is linked to scroll progress (`scrub: 1.25` for a smooth, slightly eased follow).
3. **Layers** — car, wheels, sun, skyline and road lines move at different rates to create parallax depth.
4. **Sequence** — headline letters stagger in, the scroll cue fades out, then the stats fade in and count up.
5. **Clean-up** — everything runs inside `gsap.context()` and is reverted on unmount.

## ⚡ Performance & Accessibility

- 🚀 GPU-friendly: animates `transform` and `opacity` only, so no layout thrashing
- 🖼️ All artwork is inline SVG: no image requests, crisp at any size
- 🔌 GSAP is loaded client-side only (dynamic import)
- ♿ `prefers-reduced-motion` users get a complete static composition
- 🏷️ Semantic markup with ARIA labels on the headline and metrics

## 🧰 Tech Stack

| | |
|---|---|
| **Framework** | React 19, TanStack Start |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animation** | GSAP, ScrollTrigger |
| **Build** | Vite |
| **Hosting** | Vercel |

## 🚀 Getting Started

```bash
# clone
git clone https://github.com/bhoomi2025/itzfizz-scroll-hero.git
cd itzfizz-scroll-hero

# install
npm install

# run
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

Production build: `npm run build`

## 📁 Project Structure

```text
src/
├── routes/
│   └── index.tsx      # hero scene + GSAP timeline
├── components/ui/     # UI primitives
├── styles.css         # design tokens, layout, responsive styles
└── router.tsx
public/                # favicon, robots.txt
```

---


- 🐙 GitHub: [@bhoomi2025](https://github.com/bhoomi2025)
- 📧 Email: [BHOOMISRIVASTAVA2023@GMAIL.COM)
