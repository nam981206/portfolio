"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "한반도아트 창단 공연",
    year: "2024",
    category: "공연",
    description: "한반도아트 창단을 기념하는 첫 번째 창작 국악 공연. 전통 선율 위에 현대적 감성을 얹은 앙상블 무대.",
    tags: ["국악", "앙상블", "창작"],
  },
  {
    title: "국악 창작곡 프로젝트",
    year: "2024",
    category: "창작",
    description: "우리 고유의 장단과 선율을 현대적으로 재해석한 창작곡 시리즈. 전통 악기와 현대 편곡의 조화.",
    tags: ["작곡", "편곡", "전통악기"],
  },
  {
    title: "문화 기획 프로그램",
    year: "2023",
    category: "기획",
    description: "지역 사회와 함께하는 국악 문화 보급 프로그램. 다양한 연령층이 국악과 친숙해질 수 있는 공연 기획.",
    tags: ["문화기획", "교육", "공연"],
  },
];

export default function ProjectsSection() {
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
      id="projects"
      ref={ref}
      className="section-hidden py-24 md:py-36 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4 uppercase">Projects</p>
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold mb-16 text-[var(--foreground)]">
          주요 작품 · 활동
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group p-8 rounded-2xl border border-[var(--foreground)]/8 hover:border-[var(--accent)]/40 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-widest text-[var(--accent)] uppercase">
                  {project.category}
                </span>
                <span className="text-xs text-[var(--muted)]">{project.year}</span>
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
