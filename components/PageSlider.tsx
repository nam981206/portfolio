"use client";

import { useState, useCallback, useEffect } from "react";

const pages = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Works" },
  { id: "experience", label: "Career" },
  { id: "contact", label: "Contact" },
];

interface Props {
  children: React.ReactNode[];
}

export default function PageSlider({ children }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === current || next < 0 || next >= children.length) return;
      setDirection(next > current ? "down" : "up");
      setAnimating(true);
      setCurrent(next);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating, current, children.length]
  );

  const goNext = () => goTo(current + 1);
  const goPrev = () => goTo(current - 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, animating]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="h-full transition-transform duration-[600ms]"
        style={{
          transform: `translateY(-${current * 100}%)`,
          transitionTimingFunction: "cubic-bezier(0.25, 0, 0, 1)",
        }}
      >
        {children.map((child, i) => (
          <div key={i} className="h-screen overflow-y-auto">
            {child}
          </div>
        ))}
      </div>

      {/* Top nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(1.5rem,5vw,5rem)] py-5 bg-[var(--navy)]">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); goTo(0); }}
          className="text-[var(--cream)] uppercase tracking-widest text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NAM KYEONG WOO
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-10">
          {pages.map((p, i) => (
            <li key={p.id}>
              <button
                onClick={() => goTo(i)}
                className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-150 ${
                  current === i
                    ? "text-[var(--cream)]"
                    : "text-[var(--cream)]/40 hover:text-[var(--cream)]/80"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Page indicator */}
        <span
          className="text-xs tracking-[0.15em] text-[var(--cream)]/40"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {String(current + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </span>
      </div>

      {/* Prev button */}
      {current > 0 && (
        <button
          onClick={goPrev}
          className="fixed bottom-24 right-[clamp(1.5rem,5vw,5rem)] z-50 flex flex-col items-center gap-2 group"
          aria-label="이전 페이지"
        >
          <svg
            className="w-5 h-5 text-[var(--cream)]/30 group-hover:text-[var(--cream)] transition-colors rotate-180"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
          <span
            className="text-[10px] tracking-widest uppercase text-[var(--cream)]/30 group-hover:text-[var(--cream)]/70 transition-colors"
            style={{ fontFamily: "var(--font-sans)", writingMode: "vertical-rl" }}
          >
            {pages[current - 1]?.label}
          </span>
        </button>
      )}

      {/* Next button */}
      {current < pages.length - 1 && (
        <button
          onClick={goNext}
          className="fixed bottom-10 right-[clamp(1.5rem,5vw,5rem)] z-50 flex flex-col items-center gap-2 group"
          aria-label="다음 페이지"
        >
          <span
            className="text-[10px] tracking-widest uppercase text-[var(--cream)]/40 group-hover:text-[var(--cream)]/80 transition-colors"
            style={{ fontFamily: "var(--font-sans)", writingMode: "vertical-rl" }}
          >
            {pages[current + 1]?.label}
          </span>
          <svg
            className="w-5 h-5 text-[var(--cream)]/40 group-hover:text-[var(--cream)] transition-colors"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* Dot indicators */}
      <div className="fixed left-[clamp(1.5rem,3vw,3rem)] top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`block transition-all duration-300 ${
              current === i
                ? "w-px h-8 bg-[var(--cream)]"
                : "w-px h-3 bg-[var(--cream)]/30 hover:bg-[var(--cream)]/60"
            }`}
            aria-label={`페이지 ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
