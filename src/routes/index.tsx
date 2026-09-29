import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const headline = "WELCOME ITZFIZZ";

const stats = [
  { value: 58, label: "increase in user interaction" },
  { value: 23, label: "increase in site visits" },
  { value: 27, label: "increase in client retention" },
  { value: 40, label: "faster decision making" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ItzFizz — Scroll-Driven Web Experience" },
      {
        name: "description",
        content:
          "A cinematic, scroll-driven web animation created for the ItzFizz frontend internship assignment.",
      },
      { property: "og:title", content: "ItzFizz — Scroll-Driven Web Experience" },
      {
        property: "og:description",
        content: "A smooth GSAP-powered automotive hero built for the ItzFizz frontend internship assignment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Car() {
  return (
    <div className="car" data-car aria-hidden="true">
      <svg viewBox="0 0 720 250" role="img" aria-label="A coral sports car">
        <g className="car-shadow text-road-shadow">
          <ellipse cx="366" cy="222" rx="291" ry="18" fill="currentColor" />
        </g>
        <g className="text-car-dark">
          <path d="M177 168 229 93c11-16 27-26 46-28l179-16c25-2 48 6 66 24l75 75 73 19c18 5 31 21 31 40v7H31v-15c0-17 12-31 28-35l118-26Z" fill="currentColor" />
        </g>
        <g className="text-car">
          <path d="M28 177c4-18 18-32 36-36l114-24 51-61c12-14 29-22 48-23l180-4c22 0 43 8 59 24l69 68 78 20c18 4 31 20 32 39l1 21H30l-5-11c-2-4-1-9 3-13Z" fill="currentColor" />
          <path d="M259 52c7-8 17-13 28-13l67-2-5 72-154 4 64-61Zm108-15 83-2c17 0 33 6 45 18l56 58-191-2 7-72Z" className="text-window" fill="currentColor" />
          <path d="M360 31v79M185 120h392" fill="none" stroke="currentColor" strokeWidth="8" opacity=".3" />
          <path d="M50 174h65M603 145h53" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity=".45" />
        </g>
        <g className="wheel" data-wheel>
          <circle cx="176" cy="200" r="48" className="text-tire" fill="currentColor" />
          <circle cx="176" cy="200" r="27" className="text-rim" fill="currentColor" />
          <path d="m176 174 7 19 19 7-19 7-7 19-7-19-19-7 19-7 7-19Z" className="text-tire" fill="currentColor" />
        </g>
        <g className="wheel" data-wheel>
          <circle cx="564" cy="200" r="48" className="text-tire" fill="currentColor" />
          <circle cx="564" cy="200" r="27" className="text-rim" fill="currentColor" />
          <path d="m564 174 7 19 19 7-19 7-7 19-7-19-19-7 19-7 7-19Z" className="text-tire" fill="currentColor" />
        </g>
        <g className="text-light">
          <path d="m584 123 55 14-2 15-52-11Z" fill="currentColor" />
          <path d="m48 151 55-11 8 18-60 12Z" fill="currentColor" opacity=".65" />
        </g>
      </svg>
    </div>
  );
}

function Skyline() {
  return (
    <div className="skyline text-city" data-skyline aria-hidden="true">
      <svg viewBox="0 0 1600 390" preserveAspectRatio="none">
        <path d="M0 390V248h80V130h84v260h41V195h76v195h72V87h118v303h45V210h93v180h73V153h51v237h86V224h116v166h47V120h74v270h50V181h135v209h48V55h122v335h57V205h102v185h77V146h82v244h55V235h130v155H0Z" fill="currentColor" />
        <g className="text-city-window" fill="currentColor">
          <path d="M109 158h25v25h-25zm0 52h25v25h-25zm270-92h32v32h-32zm0 64h32v32h-32zm532-33h21v28h-21zm0 58h21v28h-21zm361-118h30v31h-30zm0 65h30v31h-30zm0 65h30v31h-30z" />
        </g>
      </svg>
    </div>
  );
}

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cleanup = () => {};

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        const hero = heroRef.current;
        if (!hero) return;

        gsap.registerPlugin(ScrollTrigger);
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const car = hero.querySelector<HTMLElement>("[data-car]");
        const letters = hero.querySelectorAll<HTMLElement>("[data-letter]");
        const statItems = hero.querySelectorAll<HTMLElement>("[data-stat]");
        const statValues = hero.querySelectorAll<HTMLElement>("[data-stat-value]");

        if (prefersReduced || !car) {
          letters.forEach((letter) => (letter.style.opacity = "1"));
          statItems.forEach((stat) => (stat.style.opacity = "1"));
          statValues.forEach((value) => (value.textContent = `${value.dataset["statValue"]}%`));
          return;
        }

        const context = gsap.context(() => {
          gsap.set(letters, { opacity: 0.12, y: 20 });
          gsap.set(statItems, { opacity: 0, y: 26 });
          gsap.set(car, { x: () => -car.offsetWidth * 0.9, rotate: -1.5 });

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "+=3200",
              scrub: 1.25,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(progressRef.current, { scaleX: 1, duration: 1 }, 0)
            .to("[data-sun]", { xPercent: 20, yPercent: -18, scale: 1.08, duration: 1 }, 0)
            .to("[data-skyline]", { xPercent: -8, duration: 1 }, 0)
            .to("[data-road-lines]", { xPercent: -35, duration: 1 }, 0)
            .to(
              car,
              {
                x: () => window.innerWidth + car.offsetWidth * 0.15,
                rotate: 1.2,
                duration: 0.78,
              },
              0.06,
            )
            .to("[data-wheel]", { rotate: 1240, duration: 0.78 }, 0.06)
            .to(letters, { opacity: 1, y: 0, stagger: 0.025, duration: 0.06 }, 0.1)
            .to("[data-scroll-cue]", { opacity: 0, y: 10, duration: 0.08 }, 0.08)
            .to(statItems, { opacity: 1, y: 0, stagger: 0.025, duration: 0.1 }, 0.7);

          statValues.forEach((node, index) => {
            const target = Number(node.dataset["statValue"] ?? 0);
            const counter = { value: 0 };
            timeline.to(
              counter,
              {
                value: target,
                duration: 0.15,
                snap: { value: 1 },
                onUpdate: () => {
                  node.textContent = `${Math.round(counter.value)}%`;
                },
              },
              0.72 + index * 0.025,
            );
          });
        }, hero);

        cleanup = () => context.revert();
      },
    );

    return () => cleanup();
  }, []);

  return (
    <main className="overflow-clip bg-background text-foreground">
      <div ref={progressRef} className="scroll-progress" aria-hidden="true" />

      <section ref={heroRef} className="hero-stage" aria-labelledby="hero-title">
        <div className="sun text-sun" data-sun aria-hidden="true" />
        <div className="cloud cloud-one" aria-hidden="true" />
        <div className="cloud cloud-two" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-[1600px] flex-col px-5 pt-7 sm:px-8 lg:px-14 lg:pt-9">
          <header className="flex items-center justify-between">
            <a href="#top" className="font-display text-xl font-black uppercase tracking-normal" aria-label="ItzFizz home">
              Itz<span className="text-primary">Fizz</span>
            </a>
            <p className="hidden text-[0.68rem] font-bold uppercase tracking-[0.22em] text-muted-foreground sm:block">
              Digital experiences in motion
            </p>
          </header>

          <div className="hero-heading-wrap" id="top">
            <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted-foreground sm:mb-5">
              Scroll to set the story in motion
            </p>
            <h1 id="hero-title" className="hero-heading" aria-label="Welcome ItzFizz">
              {headline.split("").map((letter, index) => (
                <span key={`${letter}-${index}`} data-letter aria-hidden="true">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>
          </div>

          <div className="stats-grid" aria-label="Impact metrics">
            {stats.map((stat) => (
              <article key={stat.value} className="stat-item" data-stat>
                <strong className="stat-value" data-stat-value={stat.value}>0%</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>

          <div className="scroll-cue" data-scroll-cue aria-hidden="true">
            <span>Scroll</span><i />
          </div>
        </div>

        <Skyline />
        <div className="road" aria-hidden="true">
          <div className="road-lines" data-road-lines>
            {Array.from({ length: 10 }).map((_, index) => <i key={index} />)}
          </div>
        </div>
        <Car />
      </section>

      <section className="project-notes" aria-labelledby="project-title">
        <div className="project-notes-inner">
          <p className="section-kicker">The build</p>
          <h2 id="project-title">Motion with<br /><em>purpose.</em></h2>
          <div className="project-copy">
            <p>
              A scroll position becomes a timeline: the car, wheels, type, city, sun, road and data all move as one considered system.
            </p>
            <dl>
              <div><dt>Engine</dt><dd>GSAP + ScrollTrigger</dd></div>
              <div><dt>Rendering</dt><dd>Transform &amp; opacity</dd></div>
              <div><dt>Approach</dt><dd>Responsive by design</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}