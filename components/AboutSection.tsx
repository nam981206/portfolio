"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("section-hidden");
          entry.target.classList.add("section-visible");
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-hidden py-[clamp(5rem,12vw,10rem)] px-[clamp(1.5rem,5vw,5rem)]"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p
              className="text-xs tracking-[0.2em] text-[var(--cobalt)] mb-4 uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              02 — About
            </p>
            <h2
              className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-[var(--charcoal)] mb-10"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              소개
            </h2>
            <div
              className="space-y-5 text-[var(--muted)] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <p>
                한반도아트 대표 남경우는 국악창작 분야에서 전통과 현대를 잇는 작업을 이어가고 있습니다.
              </p>
              <p>
                우리 음악의 고유한 아름다움과 정서를 현대적인 감각으로 재해석하며,
                국악이 더 많은 사람들과 만날 수 있도록 다양한 창작 활동을 펼칩니다.
              </p>
              <p>
                전통의 깊이에서 출발하여 시대의 언어로 이야기하는 것,
                그것이 한반도아트가 지향하는 예술의 방향입니다.
              </p>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="grid grid-cols-2 gap-px bg-[var(--charcoal)]/10">
            {[
              { label: "소속", value: "한반도아트" },
              { label: "역할", value: "대표" },
              { label: "분야", value: "국악창작" },
              { label: "활동", value: "창작 · 기획 · 공연" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8 bg-[var(--cream)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
              >
                <p
                  className="text-xs tracking-[0.15em] text-[var(--cobalt)] mb-3 uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.label}
                </p>
                <p
                  className="font-medium text-[var(--charcoal)] text-lg"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
