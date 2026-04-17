"use client";

import { useEffect, useRef } from "react";

const areas = [
  {
    category: "창작",
    items: ["국악 작곡", "편곡", "사운드 디자인", "음악 기획"],
  },
  {
    category: "공연",
    items: ["공연 연출", "무대 기획", "앙상블 지휘", "퍼포먼스"],
  },
  {
    category: "전통 악기",
    items: ["가야금", "거문고", "해금", "대금"],
  },
  {
    category: "경영 · 기획",
    items: ["예술 단체 운영", "프로젝트 매니지먼트", "문화 콘텐츠 기획", "협업 조율"],
  },
];

export default function SkillsSection() {
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
      id="skills"
      ref={ref}
      className="section-hidden py-24 md:py-36 px-6 bg-[var(--foreground)]/3"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4 uppercase">Skills & Areas</p>
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold mb-16 text-[var(--foreground)]">
          활동 분야
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.category}
              className="p-6 rounded-2xl bg-[var(--background)] border border-[var(--foreground)]/8 hover:border-[var(--accent)]/40 transition-colors"
            >
              <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold text-[var(--accent)] mb-4">
                {area.category}
              </h3>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
