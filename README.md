# ItzFizz Scroll-Driven Hero

A cinematic automotive hero created for the ItzFizz Web Development Internship assignment. The scene demonstrates scroll-based interaction, choreographed motion, responsive design, and animation performance.

## Live link

Add the GitHub Pages or deployment URL here after publishing.

## Development

```sh
git clone <this-repository-url>
cd <repository-name>
bun install
bun run dev
```

## Tech stack

- React 19 and TypeScript
- TanStack Start
- Tailwind CSS 4
- GSAP and ScrollTrigger

## How the animation works

ScrollTrigger pins the first-screen scene and maps scroll progress to one GSAP timeline. The car crosses the viewport while its wheels rotate; the road, skyline, and sun move at different rates to create depth. Headline characters reveal in sequence, then the metrics fade in and count up. The timeline uses scrub smoothing so the motion follows scroll position rather than autoplaying.

Only `transform` and `opacity` are animated for the visual layers. ScrollTrigger recalculates responsive geometry on refresh and resize. Visitors who prefer reduced motion receive a complete static composition.
