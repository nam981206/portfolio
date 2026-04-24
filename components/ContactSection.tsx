const links = [
  {
    label: "이메일",
    value: "gcnamkw@naver.com",
    href: "mailto:gcnamkw@naver.com",
  },
  {
    label: "인스타그램",
    value: "@gc_namkw",
    href: "https://www.instagram.com/gc_namkw",
  },
  {
    label: "유튜브",
    value: "@gcnamkw",
    href: "https://youtube.com/@gcnamkw",
  },
  {
    label: "카카오톡",
    value: "오픈채팅",
    href: "https://open.kakao.com/o/sWQpL7Zd",
  },
  {
    label: "링크트리",
    value: "linktr.ee/gc_nam",
    href: "https://linktr.ee/gc_nam",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="animate-fade-in-up pt-28 pb-[clamp(3rem,8vw,6rem)] px-[clamp(1.5rem,5vw,5rem)] relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="absolute top-0 right-0 w-48 h-2 bg-[var(--red)]" />
      <div className="absolute bottom-0 left-0 w-2 h-48 bg-[var(--cobalt)]" />

      <div className="mx-auto max-w-[1280px] w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] text-[var(--cobalt)] mb-4 uppercase" style={{ fontFamily: "var(--font-sans)" }}>
              06 — Contact
            </p>
            <h2
              className="uppercase leading-none text-[var(--charcoal)] mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", letterSpacing: "-0.02em" }}
            >
              연락처
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans)" }}>
              gugak 프로젝트 협업, 공연 의뢰, 기타 문의는<br />
              아래 채널로 연락해 주세요.
            </p>
            <div className="border-l-2 border-[var(--cobalt)] pl-6">
              <p className="text-xs tracking-[0.15em] text-[var(--cobalt)] uppercase mb-2" style={{ fontFamily: "var(--font-sans)" }}>
                주소
              </p>
              <p className="text-sm text-[var(--muted)]" style={{ fontFamily: "var(--font-sans)" }}>
                경기도 성남시 분당구<br />판교역로 10번길 10-4
              </p>
            </div>
          </div>

          <div className="space-y-px bg-[var(--charcoal)]/10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-[var(--cream)] border-l-2 border-[var(--cobalt)] hover:border-[var(--red)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--cobalt)] transition-all duration-150 group"
              >
                <div>
                  <p className="text-xs tracking-[0.15em] text-[var(--muted)] uppercase mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                    {link.label}
                  </p>
                  <p className="font-medium text-[var(--charcoal)] group-hover:text-[var(--cobalt)] transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    {link.value}
                  </p>
                </div>
                <svg className="w-4 h-4 text-[var(--cobalt)] opacity-30 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
