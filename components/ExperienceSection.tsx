"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "2023 – 현재",
    title: "한반도아트 대표",
    organization: "한반도아트",
    description: "국악 창작 예술 단체 한반도아트 설립 및 운영. 창작 국악 공연 기획·연출, 예술 프로그램 개발.",
    type: "경력",
  },
  {
    period: "2022 – 2023",
    title: "국악 창작 활동",
    organization: "독립 예술가",
    description: "전통 국악의 현대적 재해석을 주제로 한 창작 작업 및 공연 활동.",
    type: "경력",
  },
];

export default function ExperienceSection() {
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
      id="experience"
      ref={ref}
      className="section-hidden pt-28 pb-[clamp(3rem,8vw,6rem)] px-[clamp(1.5rem,5vw,5rem)] bg-[var(--navy)] min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Right-aligned header */}
        <div className="text-right mb-16">
          <p
            className="text-xs tracking-[0.2em] text-[var(--red)] mb-4 uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            05 — Experience
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            경력
          </h2>
        </div>

        <div className="space-y-px bg-[var(--cobalt)]/20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[160px_1fr] gap-8 p-8 bg-[var(--navy)] border-l-2 border-[var(--cobalt)] hover:border-[var(--red)] transition-colors duration-200"
            >
              <div>
                <span
                  className="text-xs tracking-[0.12em] text-[var(--cream)]/40 uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {exp.period}
                </span>
              </div>
              <div>
                <span
                  className="text-xs tracking-[0.15em] text-[var(--cobalt)] uppercase mb-2 block"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {exp.type}
                </span>
                <h3
                  className="text-xl font-bold text-[var(--cream)] mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-sm text-[var(--cream)]/40 mb-4"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {exp.organization}
                </p>
                <p
                  className="text-sm text-[var(--cream)]/60 leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
