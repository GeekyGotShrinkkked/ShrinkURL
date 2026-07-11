import Link from "next/link";

const productLinks = [
  { label: "Shorten a link", href: "/shorten" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "GitHub", href: "https://github.com/GeekyGotShrinkkked/ShrinkURL" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-subtle)" }}>
      <div className="container-page py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-3">
            <Link href="/" className="font-semibold text-lg tracking-tight" style={{ color: "var(--ink)" }}>
              Shrink<span className="text-gradient">URL</span>
            </Link>
            <p className="text-sm" style={{ color: "var(--ink-faint)" }}>
              Short links, built for speed.
            </p>
            <div className="flex gap-3 mt-2">
              {["X", "GH", "IN"].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold transition-transform hover:-translate-y-0.5"
                  style={{ border: "1px solid var(--border)", color: "var(--ink-soft)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--ink-faint)" }}
        >
          <span>© {new Date().getFullYear()} ShrinkURL. All rights reserved.</span>
          <span>Built with Next.js &amp; MongoDB</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
        {title}
      </span>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: "var(--ink-soft)" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
