export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-8 text-[12rem] font-[family-name:var(--font-serif)] text-[var(--accent)]/5 leading-none">
          樂
        </div>
        <div className="absolute bottom-1/4 left-8 text-[8rem] font-[family-name:var(--font-serif)] text-[var(--accent)]/5 leading-none">
          韻
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center animate-fade-in-up">
        <p className="text-sm tracking-[0.3em] text-[var(--accent)] mb-6 uppercase">
          Hanban Do Art · 한반도아트
        </p>
        <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl font-bold tracking-tight mb-6 text-[var(--foreground)]">
          남경우
        </h1>
        <p className="text-xl md:text-2xl text-[var(--muted)] mb-4 font-medium">
          한반도아트 대표 · 국악창작
        </p>
        <p className="max-w-xl mx-auto text-base md:text-lg text-[var(--muted)] leading-relaxed mb-12">
          한국 전통 음악의 뿌리 위에 새로운 창작의 씨앗을 심습니다.
          <br />
          국악의 언어로 시대와 대화하는 예술가.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-[var(--accent)] text-white rounded-full text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
          >
            작품 보기
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-[var(--foreground)]/20 rounded-full text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* 스크롤 힌트 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest text-[var(--muted)]">SCROLL</span>
        <svg className="w-4 h-4 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
