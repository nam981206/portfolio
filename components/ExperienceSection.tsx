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
      className="section-hidden py-24 md:py-36 px-6 bg-[var(--foreground)]/3"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4 uppercase">Experience</p>
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold mb-16 text-[var(--foreground)]">
          경력
        </h2>

        <div className="relative">
          {/* 타임라인 선 */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--foreground)]/10 ml-3 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-12 relative">
                {/* 타임라인 점 */}
                <div className="absolute left-0 top-2 w-7 h-7 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                </div>

                <div className="p-6 md:p-8 rounded-2xl border border-[var(--foreground)]/8 bg-[var(--background)] hover:border-[var(--accent)]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs tracking-widest text-[var(--accent)] uppercase">{exp.type}</span>
                      <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--foreground)] mt-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--muted)]">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-[var(--muted)] sm:text-right shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
