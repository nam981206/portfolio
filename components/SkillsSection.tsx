const areas = [
  { num: "01", category: "창작", items: ["국악 작곡", "편곡", "사운드 디자인", "음악 기획"] },
  { num: "02", category: "공연", items: ["공연 연출", "무대 기획", "앙상블 지휘", "퍼포먼스"] },
  { num: "03", category: "전통 악기", items: ["가야금", "거문고", "해금", "대금"] },
  { num: "04", category: "경영 · 기획", items: ["예술 단체 운영", "프로젝트 매니지먼트", "문화 콘텐츠 기획", "협업 조율"] },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="animate-fade-in-up pt-28 pb-[clamp(3rem,8vw,6rem)] px-[clamp(1.5rem,5vw,5rem)] bg-[var(--navy)] min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto max-w-[1280px] w-full">
        <div className="text-right mb-16">
          <p
            className="text-xs tracking-[0.2em] text-[var(--red)] mb-4 uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            03 — Skills & Areas
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] uppercase leading-none text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            활동 분야
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--cobalt)]/20">
          {areas.map((area) => (
            <div
              key={area.category}
              className="p-8 bg-[var(--navy)] border-t-2 border-[var(--cobalt)] hover:bg-[var(--cobalt)]/10 transition-colors duration-200"
            >
              <p className="text-xs tracking-[0.15em] text-[var(--cobalt)] mb-4" style={{ fontFamily: "var(--font-sans)" }}>
                {area.num}
              </p>
              <h3 className="font-display text-2xl uppercase text-[var(--cream)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
                {area.category}
              </h3>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[var(--cream)]/50" style={{ fontFamily: "var(--font-sans)" }}>
                    <span className="w-4 h-px bg-[var(--cobalt)] flex-shrink-0" />
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
