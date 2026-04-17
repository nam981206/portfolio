"use client";

import { useEffect, useRef } from "react";

export default function ContactSection() {
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
      id="contact"
      ref={ref}
      className="section-hidden py-24 md:py-36 px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4 uppercase">Contact</p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
            연락처
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-12">
            공연 협업, 창작 의뢰, 기타 문의 사항은 아래로 연락 주세요.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:gcnamkw@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl border border-[var(--foreground)]/8 hover:border-[var(--accent)]/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs tracking-widest text-[var(--muted)] uppercase mb-1">이메일</p>
                <p className="font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  gcnamkw@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-2xl border border-[var(--foreground)]/8">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div>
                <p className="text-xs tracking-widest text-[var(--muted)] uppercase mb-1">소속</p>
                <p className="font-medium text-[var(--foreground)]">한반도아트</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
