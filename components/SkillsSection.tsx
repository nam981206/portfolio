const areas = [
  {
    num: "01",
    category: "소리",
    items: ["경기민요", "서도소리", "잡가", "민요 창작"],
  },
  {
    num: "02",
    category: "타악 · 악기",
    items: ["소고", "장구", "북", "타악 퍼포먼스"],
  },
  {
    num: "03",
    category: "작곡 · 편곡",
    items: ["크로스오버 민요", "전통음악 현대화", "사운드 디자인", "작창"],
  },
  {
    num: "04",
    category: "기획 · 연출",
    items: ["공연 기획", "연출", "아카이빙", "프로젝트 매니지먼트"],
  },
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
            className="uppercase leading-none text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.02em" }}
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
              <h3 className="uppercase text-[var(--cream)] mb-6 text-2xl" style={{ fontFamily: "var(--font-display)" }}>
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

        {/* 소속 */}
        <div className="mt-px grid grid-cols-3 gap-px bg-[var(--cobalt)]/20">
          {[
            { label: "단체", value: "한반도아트" },
            { label: "동인", value: "남자경기소리 고만고만" },
            { label: "프로젝트", value: "이희문컴퍼니 놈놈" },
          ].map((item) => (
            <div key={item.label} className="p-6 bg-[var(--navy)]">
              <p className="text-xs tracking-[0.15em] text-[var(--cobalt)] mb-2 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                {item.label}
              </p>
              <p className="text-sm text-[var(--cream)]/70" style={{ fontFamily: "var(--font-serif)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
