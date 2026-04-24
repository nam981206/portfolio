const experiences = [
  {
    period: "2025",
    title: "고만고만 십이잡가완창이야기 '十二'",
    organization: "남자경기소리 고만고만",
    description: "기획 및 소리. 열두 잡가를 완창하는 프로젝트 기획·연출.",
    type: "기획 · 소리",
  },
  {
    period: "2024",
    title: "경우소리시리즈 '경기京畿 오마주'",
    organization: "한반도아트",
    description: "연출 및 소리. ARKO 청년예술가도약지원 선정. 경기소리 1·2세대 전통 재현.",
    type: "연출 · 소리",
  },
  {
    period: "2023",
    title: "전통 예술 공연 아카이빙",
    organization: "총감독",
    description: "전통 예술 공연 아카이빙 프로젝트 총감독.",
    type: "감독",
  },
  {
    period: "2022",
    title: "경기 예술인 네트워크 축제",
    organization: "경기 예술인 네트워크",
    description: "팀장 연출. 경기 지역 예술인 네트워크 축제 총괄 기획 및 연출.",
    type: "연출",
  },
  {
    period: "2021",
    title: "음악극 소년비행병",
    organization: "외부 제작",
    description: "작창 및 소리 지도. 음악극 내 전통 소리 작창 및 배우 소리 지도 담당.",
    type: "작창 · 지도",
  },
];

const affiliations = [
  { label: "현재", value: "한반도아트 대표" },
  { label: "현재", value: "남자경기소리 고만고만 동인" },
  { label: "현재", value: "이희문컴퍼니프로젝트 놈놈 멤버" },
  { label: "현재", value: "성남시청년정책협의체 2기 문화기획분과" },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="animate-fade-in-up pt-28 pb-[clamp(3rem,8vw,6rem)] px-[clamp(1.5rem,5vw,5rem)] bg-[var(--navy)] min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto max-w-[1280px] w-full">
        <div className="text-right mb-12">
          <p className="text-xs tracking-[0.2em] text-[var(--red)] mb-4 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
            05 — Experience
          </p>
          <h2
            className="uppercase leading-none text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.02em" }}
          >
            경력
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-px bg-[var(--cobalt)]/20">
          {/* 경력 타임라인 */}
          <div className="space-y-px bg-[var(--cobalt)]/20">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-[80px_1fr] gap-6 p-6 bg-[var(--navy)] border-l-2 border-[var(--cobalt)] hover:border-[var(--red)] transition-colors duration-200"
              >
                <div>
                  <span className="text-xs tracking-[0.12em] text-[var(--cream)]/40" style={{ fontFamily: "var(--font-sans)" }}>
                    {exp.period}
                  </span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.15em] text-[var(--cobalt)] uppercase mb-1 block" style={{ fontFamily: "var(--font-sans)" }}>
                    {exp.type}
                  </span>
                  <h3 className="text-base font-bold text-[var(--cream)] mb-0.5" style={{ fontFamily: "var(--font-serif)" }}>
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[var(--cream)]/40 mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                    {exp.organization}
                  </p>
                  <p className="text-sm text-[var(--cream)]/60 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 소속 */}
          <div className="space-y-px bg-[var(--cobalt)]/20">
            <div className="p-6 bg-[var(--navy)] border-t-2 border-[var(--red)]">
              <p className="text-xs tracking-[0.15em] text-[var(--red)] mb-4 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                현재 소속
              </p>
              <div className="space-y-4">
                {affiliations.map((a, i) => (
                  <div key={i}>
                    <p className="text-sm text-[var(--cream)]/80 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                      {a.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-[var(--navy)]">
              <p className="text-xs tracking-[0.15em] text-[var(--cobalt)] mb-4 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
                협연 기관
              </p>
              <div className="space-y-2">
                {["국립국악원", "KBS", "국악방송", "경기시나위오케스트라", "이희문컴퍼니"].map((org) => (
                  <div key={org} className="flex items-center gap-2">
                    <span className="w-3 h-px bg-[var(--cobalt)] flex-shrink-0" />
                    <p className="text-sm text-[var(--cream)]/60" style={{ fontFamily: "var(--font-sans)" }}>
                      {org}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
