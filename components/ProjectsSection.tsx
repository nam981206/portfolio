const projects = [
  {
    num: "01",
    title: "[고명소리프로젝트] 二, 서도소리 PROCESS",
    titleEn: "Topping Minyo Project Ⅱ",
    year: "2026",
    category: "공연 · 창작",
    description: "한반도 북녘의 소리, 오늘 우리의 얘기로 다시 쓰여지다. 거문고·해금·일렉 기타·전자음악을 결합한 크로스오버 서도소리 4작품. 성남 청년예술인 창작지원 사전 제작 선정작.",
    tags: ["서도소리", "크로스오버", "기획·연출"],
    badge: "성남 청년예술인 창작지원",
  },
  {
    num: "02",
    title: "[경우소리시리즈] 경기京畿 오마주",
    titleEn: "Kyeongwoo Sori Series — Gyeong-gi Homage",
    year: "2025",
    category: "공연 · 연출",
    description: "경기소리 1·2세대의 옛 전통 공연 모습을 재현. 14곡 60분 레퍼토리. ARKO 청년예술가도약지원 선정 작품.",
    tags: ["경기민요", "기획·연출", "소리"],
    badge: "ARKO 청년예술가도약지원",
  },
  {
    num: "03",
    title: "[경우소리시리즈] 문밖에 잡가雜歌가 있다",
    titleEn: "Japga Lives Beyond the City Gates",
    year: "2025",
    category: "공연 · 연출",
    description: "사대문 밖 마지막 전통 소리 잡가, 무대 위에서 다시 살아나다. 현대인들과 민요로 소통하고 표현하는 프로젝트. 경기문화재단 공연 초연 지원 선정.",
    tags: ["잡가", "기획·연출", "소리"],
    badge: "경기문화재단 선정",
  },
  {
    num: "04",
    title: "[남자경기소리고만고만] 노랫가락 창부타령",
    titleEn: "Noraet-Garak, Changbu-Taryeong",
    year: "2024",
    category: "공연 · 소리",
    description: "전석 2분 매진 신화. 덕수궁 석조전에서 60분간 펼쳐지는 남자 소리꾼들의 경기민요. 이희문컴퍼니 주관.",
    tags: ["경기민요", "소리", "협연"],
    badge: "전석 2분 매진",
  },
  {
    num: "05",
    title: "[시나위악보가게] 민요연습실 · 환갑",
    titleEn: "Sinawi Music Store — Folk Practice Room · 60th Birthday",
    year: "2023",
    category: "조연출",
    description: "경기시나위오케스트라 주관 4부작 공연 시리즈. 이희문 연출, 남경우 조연출. '민요연습실'과 '환갑' 2편 담당.",
    tags: ["조연출", "국악", "시리즈"],
    badge: "경기시나위오케스트라",
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
          className="uppercase leading-none text-[var(--charcoal)] mb-12"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.02em" }}
        >
          주요 작품 · 활동
        </h2>

        <div className="space-y-px bg-[var(--charcoal)]/10">
          {projects.map((project) => (
            <article
              key={project.num}
              className="group grid md:grid-cols-[64px_1fr_180px] gap-6 p-6 bg-[var(--cream)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--cobalt)] transition-all duration-150 cursor-default"
            >
              <div className="flex flex-col justify-between">
                <span className="text-xs tracking-[0.15em] text-[var(--cobalt)]" style={{ fontFamily: "var(--font-sans)" }}>
                  {project.num}
                </span>
                <span className="text-xs text-[var(--muted)]" style={{ fontFamily: "var(--font-sans)" }}>
                  {project.year}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs tracking-[0.15em] text-[var(--red)] uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                    {project.category}
                  </span>
                  {project.badge && (
                    <>
                      <span className="w-3 h-px bg-[var(--charcoal)]/20" />
                      <span className="text-xs text-[var(--sage)] tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
                        {project.badge}
                      </span>
                    </>
                  )}
                </div>
                <h3
                  className="text-base font-bold text-[var(--charcoal)] mb-1 group-hover:text-[var(--cobalt)] transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--muted)]/60 mb-3 italic" style={{ fontFamily: "var(--font-sans)" }}>
                  {project.titleEn}
                </p>
                <p className="text-sm text-[var(--muted)] leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 content-start justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 border border-[var(--charcoal)]/15 text-[var(--muted)] uppercase tracking-wider"
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
