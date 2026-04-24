export default function AboutSection() {
  return (
    <section
      id="about"
      className="animate-fade-in-up pt-28 pb-[clamp(3rem,8vw,6rem)] px-[clamp(1.5rem,5vw,5rem)] min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto max-w-[1280px] w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.2em] text-[var(--cobalt)] mb-4 uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              02 — About
            </p>
            <h2
              className="uppercase leading-none text-[var(--charcoal)] mb-10"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.02em" }}
            >
              소개
            </h2>
            <div
              className="space-y-5 text-[var(--muted)] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <p>
                멀티 엔터테이너 남경우는 국악인(소리 및 타악), 기획자, 작곡가를 넘어
                다양한 분야에서 활동하고 있는 청년 예술가이다.
              </p>
              <p>
                예술, 기술, 사회 등 경계와 경계를 넘어 수많은 촉수들이 연결되는 것을 꿈꾼다.
              </p>
              <p>
                중앙대학교 전통예술학부 연희예술과 최우등 졸업.<br />
                국가 무형유산 경기민요 이수자.<br />
                15년 이상의 한국 민요 창 경력.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-10 space-y-3">
              {[
                "제28회 전국경서도소리대회 종합대상 – 문화체육관광부 장관상",
                "한국장학재단 예술 체육 비전 장학생",
                "선릉아트홀 2인 전통음악축제 특상",
                "경기도지사 표창",
              ].map((award) => (
                <div key={award} className="flex items-start gap-3">
                  <span className="w-4 h-px bg-[var(--red)] mt-2.5 flex-shrink-0" />
                  <p className="text-sm text-[var(--muted)]" style={{ fontFamily: "var(--font-sans)" }}>
                    {award}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[var(--charcoal)]/10">
            {[
              { label: "출생", value: "1998, 부산" },
              { label: "학력", value: "중앙대학교\n연희예술과 최우등" },
              { label: "소속", value: "한반도아트 대표" },
              { label: "활동", value: "소리 · 작곡 · 기획 · 연출" },
              { label: "자격", value: "경기민요 이수자" },
              { label: "기관 협연", value: "국립국악원\nKBS · 국악방송" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 bg-[var(--cream)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-150"
              >
                <p
                  className="text-xs tracking-[0.15em] text-[var(--cobalt)] mb-2 uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.label}
                </p>
                <p
                  className="font-medium text-[var(--charcoal)] text-sm whitespace-pre-line"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
