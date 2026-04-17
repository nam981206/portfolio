"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#projects" },
  { label: "Career", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navy)] border-b border-[var(--cobalt)]/30"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,5rem)] py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display text-2xl tracking-widest uppercase text-[var(--cream)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NAM KYEONG WOO
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs tracking-[0.12em] uppercase font-medium text-[var(--cream)]/60 hover:text-[var(--cream)] transition-colors duration-150"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 bg-[var(--cream)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--cream)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--cream)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--navy)] border-t border-[var(--cobalt)]/30 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-xs tracking-[0.15em] uppercase font-medium text-[var(--cream)]/60 hover:text-[var(--cream)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
