"use client";

import { useEffect, useRef } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("section-hidden");
          entry.target.classList.add("section-visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="section-hidden py-[clamp(5rem,12vw,10rem)] px-[clamp(1.5rem,5vw,5rem)] relative overflow-hidden"
    >
      {/* Decorative block */}
      <div className="absolute top-0 right-0 w-48 h-2 bg-[var(--red)]" />
      <div className="absolute bottom-0 left-0 w-2 h-48 bg-[var(--cobalt)]" />

      <div className="mx-auto max-w-[1280px]">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <div>
            <p
              className="text-xs tracking-[0.2em] text-[var(--cobalt)] mb-4 uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              06 — Contact
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-[var(--charcoal)] mb-6"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              연락처
            </h2>
            <p
              className="text-[var(--muted)] leading-relaxed mb-0"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              공연 협업, 창작 의뢰, 기타 문의 사항은 아래로 연락 주세요.
            </p>
          </div>

          <div className="space-y-px bg-[var(--charcoal)]/10">
            <a
              href="mailto:gcnamkw@gmail.com"
              className="flex items-center justify-between p-8 bg-[var(--cream)] border-l-2 border-[var(--cobalt)] hover:border-[var(--red)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--cobalt)] transition-all duration-150 group"
            >
              <div>
                <p
                  className="text-xs tracking-[0.15em] text-[var(--muted)] uppercase mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  이메일
                </p>
                <p
                  className="font-medium text-[var(--charcoal)] group-hover:text-[var(--cobalt)] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  gcnamkw@gmail.com
                </p>
              </div>
              <svg className="w-5 h-5 text-[var(--cobalt)] opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="flex items-center justify-between p-8 bg-[var(--cream)] border-l-2 border-transparent">
              <div>
                <p
                  className="text-xs tracking-[0.15em] text-[var(--muted)] uppercase mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  소속
                </p>
                <p
                  className="font-medium text-[var(--charcoal)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  한반도아트
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
