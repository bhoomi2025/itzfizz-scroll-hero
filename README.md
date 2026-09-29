ItzFizz Scroll-Driven Hero

A cinematic, scroll-driven automotive hero section built for the ItzFizz Web Development Internship assignment. As you scroll, a car drives across the screen, the headline reveals letter by letter, and the stats count up.


<!-- Tip: add a screenshot -> put image in /screenshots and use: ![Preview](./screenshots/preview.png) -->
Features
Scroll-linked animation: the car, wheels, sun, skyline and road all move on one scrubbed GSAP timeline
Parallax depth: each layer moves at a different speed
Headline "WELCOME ITZFIZZ" reveals character by character
Stats section fades in and counts up (58%, 23%, 27%, 40%)
Fully responsive (mobile, tablet, desktop)
Respects prefers-reduced-motion (static version shown)
All artwork is inline SVG, so there are no external images and it stays sharp at any size
Tech Stack
React 19 + TypeScript
TanStack Start / TanStack Router
Tailwind CSS 4
GSAP + ScrollTrigger
Vite
Run Locally
sh
git clone <your-repo-url>
cd <repo-name>
bun install        # or: npm install
bun run dev        # or: npm run dev

Open the local URL shown in the terminal (usually http://localhost:5173).

Production build:

sh
bun run build
How the Animation Works

ScrollTrigger pins the first screen and maps scroll progress to a single GSAP timeline (scrub: 1.25), so the motion follows the scrollbar instead of autoplaying. The car crosses the viewport while the wheels rotate; the sun, skyline and road lines move at different rates for depth. Headline letters then reveal in sequence and the metrics fade in and count up.

Performance
Only transform and opacity are animated (GPU-friendly, no layout thrashing)
GSAP is loaded client-side only
invalidateOnRefresh recalculates geometry on resize
Cleanup on unmount via gsap.context()
Project Structure
src/
  routes/index.tsx   # Hero scene + GSAP timeline
  styles.css         # Design tokens, layout, responsive styles
  components/ui/     # UI primitives
public/              # Favicon, robots.txt
Author

<Your BHOOMI> — <your BHOOMISRIVASTVA2023@GMAIL.COM /  GitHub link>

Content
itzfizz-scroll-hero.zip

ZIP

PS C:\Users\ACS\Downloads\itzfizz-scroll-hero> git init Initialized empty Git repository in C:/Users/ACS/Downloads/itzfizz-scroll-hero/.git/ PS C:\Users\ACS\Downloads\itzfizz-scroll-hero> git add . >> warning: in the working copy of 'itzfizz-src/.gitignore', LF will be replaced by CRLF the next

PASTED

PS C:\Users\ACS\Downloads\itzfizz-scroll-hero> git init Initialized empty Git repository in C:/Users/ACS/Downloads/itzfizz-scroll-hero/.git/ PS C:\Users\ACS\Downloads\itzfizz-scroll-hero> git add . >> warning: in the working copy of 'itzfizz-src/.gitignore', LF will be replaced by CRLF the next

PASTED

PS C:\Users\ACS\Downloads\itzfizz-scroll-hero> git init Initialized empty Git repository in C:/Users/ACS/Downloads/itzfizz-scroll-hero/.git/ PS C:\Users\ACS\Downloads\itzfizz-scroll-hero> git add . >> warning: in the working copy of 'itzfizz-src/.gitignore', LF will be replaced by CRLF the next

PASTED
