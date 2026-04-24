export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden bg-[var(--navy)]"
    >
      <div className="absolute top-0 right-0 w-2 h-full bg-[var(--cobalt)]" />
      <div className="absolute top-[30%] left-0 w-16 h-48 bg-[var(--red)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--cobalt)]/30" />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[18vw] uppercase leading-none text-[var(--cobalt)]/10 whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          GUGAK
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-[clamp(1.5rem,5vw,5rem)] pb-[clamp(3rem,8vw,6rem)] pt-32 animate-fade-in-up">
        <p
          className="text-xs tracking-[0.2em] text-[var(--red)] mb-6 uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          01 — Gugak Creator
        </p>

        <h1
          className="leading-none uppercase text-[var(--cream)] mb-8"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(4rem,12vw,10rem)", letterSpacing: "-0.02em" }}
        >
          NAM<br />
          KYEONG<br />
          WOO
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p
              className="text-lg text-[var(--cream)]/80 mb-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Singer · Composer · Producer
            </p>
            <p
              className="text-sm text-[var(--cream)]/40 max-w-sm leading-relaxed"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Tradition, K-Music my soul.<br />
              예술, 기술, 사회의 경계를 넘어 연결되는 것을 꿈꾼다.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="/projects"
              className="inline-block px-8 py-3 border-2 border-[var(--cream)] text-[var(--cream)] text-xs tracking-[0.12em] uppercase font-medium hover:bg-[var(--cream)] hover:text-[var(--navy)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Works
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-[var(--cream)]/30 text-[var(--cream)]/60 text-xs tracking-[0.12em] uppercase font-medium hover:border-[var(--cream)] hover:text-[var(--cream)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-[clamp(1.5rem,5vw,5rem)] flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest text-[var(--cream)]/30 uppercase"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Scroll
        </span>
        <div className="w-px h-12 bg-[var(--cream)]/20" />
      </div>
    </section>
  );
}
