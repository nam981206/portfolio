"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Works" },
  { path: "/experience", label: "Career" },
  { path: "/contact", label: "Contact" },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  const normalizedPath = pathname.replace(basePath, "") || "/";

  const currentIndex = pages.findIndex((p) => p.path === normalizedPath);
  const prev = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const next = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[clamp(1.5rem,5vw,5rem)] py-5 bg-[var(--navy)]">
        <Link
          href="/"
          className="text-[var(--cream)] uppercase tracking-widest text-xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NAM KYEONG WOO
        </Link>

        <ul className="hidden md:flex gap-10">
          {pages.map((p) => (
            <li key={p.path}>
              <Link
                href={p.path}
                className={`text-xs tracking-[0.12em] uppercase font-medium transition-colors duration-150 ${
                  normalizedPath === p.path
                    ? "text-[var(--cream)]"
                    : "text-[var(--cream)]/40 hover:text-[var(--cream)]/80"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        <span
          className="text-xs tracking-[0.15em] text-[var(--cream)]/40"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {String(currentIndex + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </span>
      </header>

      {/* Page content */}
      <div className="h-full overflow-y-auto">
        {children}
      </div>

      {/* Prev button */}
      {prev && (
        <Link
          href={prev.path}
          className="fixed bottom-24 right-[clamp(1.5rem,5vw,5rem)] z-50 flex flex-col items-center gap-2 group"
          aria-label="이전 페이지"
        >
          <svg
            className="w-5 h-5 text-[var(--cream)]/30 group-hover:text-[var(--cream)] transition-colors rotate-180"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
          <span
            className="text-[10px] tracking-widest uppercase text-[var(--cream)]/30 group-hover:text-[var(--cream)]/70 transition-colors"
            style={{ fontFamily: "var(--font-sans)", writingMode: "vertical-rl" }}
          >
            {prev.label}
          </span>
        </Link>
      )}

      {/* Next button */}
      {next && (
        <Link
          href={next.path}
          className="fixed bottom-10 right-[clamp(1.5rem,5vw,5rem)] z-50 flex flex-col items-center gap-2 group"
          aria-label="다음 페이지"
        >
          <span
            className="text-[10px] tracking-widest uppercase text-[var(--cream)]/40 group-hover:text-[var(--cream)]/80 transition-colors"
            style={{ fontFamily: "var(--font-sans)", writingMode: "vertical-rl" }}
          >
            {next.label}
          </span>
          <svg
            className="w-5 h-5 text-[var(--cream)]/40 group-hover:text-[var(--cream)] transition-colors"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      )}

      {/* Dot indicators */}
      <div className="fixed left-[clamp(1.5rem,3vw,3rem)] top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {pages.map((p, i) => (
          <Link
            key={p.path}
            href={p.path}
            className={`block transition-all duration-300 ${
              normalizedPath === p.path
                ? "w-px h-8 bg-[var(--cream)]"
                : "w-px h-3 bg-[var(--cream)]/30 hover:bg-[var(--cream)]/60"
            }`}
            aria-label={p.label}
          />
        ))}
      </div>
    </div>
  );
}
