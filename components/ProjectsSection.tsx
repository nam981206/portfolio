const projects = [
  {
    num: "01",
    title: "한반도아트 창단 공연",
    year: "2024",
    category: "공연",
    description: "한반도아트 창단을 기념하는 첫 번째 창작 국악 공연. 전통 선율 위에 현대적 감성을 얹은 앙상블 무대.",
    tags: ["국악", "앙상블", "창작"],
  },
  {
    num: "02",
    title: "국악 창작곡 프로젝트",
    year: "2024",
    category: "창작",
    description: "우리 고유의 장단과 선율을 현대적으로 재해석한 창작곡 시리즈. 전통 악기와 현대 편곡의 조화.",
    tags: ["작곡", "편곡", "전통악기"],
  },
  {
    num: "03",
    title: "문화 기획 프로그램",
    year: "2023",
    category: "기획",
    description: "지역 사회와 함께하는 국악 문화 보급 프로그램. 다양한 연령층이 국악과 친숙해질 수 있는 공연 기획.",
    tags: ["문화기획", "교육", "공연"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="animate-fade-in-up pt-28 pb-[clamp(3rem,8vw,6rem)] px-[clamp(1.5rem,5vw,5rem)] min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto max-w-[1280px] w-full">
        <p className="text-xs tracking-[0.2em] text-[var(--cobalt)] mb-4 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
          04 — Projects
        </p>
        <h2
          className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-[var(--charcoal)] mb-16"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          주요 작품 · 활동
        </h2>

        <div className="space-y-px bg-[var(--charcoal)]/10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group grid md:grid-cols-[80px_1fr_auto] gap-8 p-8 bg-[var(--cream)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--cobalt)] transition-all duration-150 cursor-default"
            >
              <div>
                <span className="text-xs tracking-[0.15em] text-[var(--cobalt)]" style={{ fontFamily: "var(--font-sans)" }}>
                  {project.num}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs tracking-[0.15em] text-[var(--red)] uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                    {project.category}
                  </span>
                  <span className="w-4 h-px bg-[var(--charcoal)]/20" />
                  <span className="text-xs text-[var(--muted)]" style={{ fontFamily: "var(--font-sans)" }}>
                    {project.year}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold text-[var(--charcoal)] mb-3 group-hover:text-[var(--cobalt)] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end content-start">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 border border-[var(--charcoal)]/15 text-[var(--muted)] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-sans)" }}
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
