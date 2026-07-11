"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shorten", href: "/shorten" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      }}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg tracking-tight" style={{ color: "var(--ink)" }}>
          Shrink<span className="text-gradient">URL</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3.5 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{
                    color: active ? "var(--ink)" : "var(--ink-soft)",
                    background: active ? "var(--bg-muted)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <Button href="/shorten" size="sm" variant="primary">
            Try now
          </Button>
          <Button
            href="https://github.com/GeekyGotShrinkkked/ShrinkURL"
            size="sm"
            variant="outline"
          >
            GitHub
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full"
          style={{ border: "1px solid var(--border)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative w-4 h-3 flex flex-col justify-between">
            <span
              className="block h-0.5 w-full transition-transform duration-200"
              style={{
                background: "var(--ink)",
                transform: open ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-full transition-opacity duration-200"
              style={{ background: "var(--ink)", opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-full transition-transform duration-200"
              style={{
                background: "var(--ink)",
                transform: open ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden container-page pb-6 flex flex-col gap-1 fade-up"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-3 rounded-lg text-sm font-medium"
              style={{
                color: pathname === link.href ? "var(--ink)" : "var(--ink-soft)",
                background: pathname === link.href ? "var(--bg-muted)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3">
            <Button href="/shorten" size="sm" variant="primary" className="flex-1">
              Try now
            </Button>
            <Button
              href="https://github.com/GeekyGotShrinkkked/ShrinkURL"
              size="sm"
              variant="outline"
              className="flex-1"
            >
              GitHub
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
