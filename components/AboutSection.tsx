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
      className="section-hidden py-24 md:py-36 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4 uppercase">About</p>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold mb-8 text-[var(--foreground)]">
              소개
            </h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
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

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "소속", value: "한반도아트" },
              { label: "역할", value: "대표" },
              { label: "분야", value: "국악창작" },
              { label: "활동", value: "창작 · 기획 · 공연" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl border border-[var(--foreground)]/8 bg-[var(--foreground)]/3"
              >
                <p className="text-xs tracking-widest text-[var(--accent)] mb-2 uppercase">
                  {item.label}
                </p>
                <p className="font-medium text-[var(--foreground)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
