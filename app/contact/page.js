import SectionHeading from "../../Components/ui/SectionHeading";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — ShrinkURL",
  description: "Get in touch with the ShrinkURL team.",
};

const CONTACT_INFO = [
  { label: "Email", value: "hello@shrinkurl.app", href: "mailto:hello@shrinkurl.app" },
  { label: "Phone", value: "+1 (555) 010-0100", href: "tel:+15550100100" },
  { label: "Address", value: "123 Link Street, San Francisco, CA (placeholder)", href: null },
  { label: "Working hours", value: "Mon–Fri, 9am–6pm PT", href: null },
];

const SOCIALS = ["X", "GitHub", "LinkedIn"];

const FAQS = [
  { q: "How fast do you respond?", a: "We typically reply within one business day." },
  { q: "Do you offer support for self-hosted setups?", a: "Yes — mention it in your message and we'll point you to the right docs." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        <div className="container-page relative section pb-16 flex flex-col items-center text-center gap-5">
          <span className="eyebrow fade-up">Contact</span>
          <h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl fade-up"
            style={{ color: "var(--ink)", animationDelay: "0.05s" }}
          >
            Let&apos;s talk
          </h1>
          <p className="text-lg max-w-xl fade-up" style={{ color: "var(--ink-soft)", animationDelay: "0.1s" }}>
            Questions, feedback, or a bug you&apos;ve spotted — we&apos;d like to hear it.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="card p-6 flex flex-col gap-5">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl h-48 flex items-center justify-center text-sm"
              style={{ background: "var(--bg-muted)", color: "var(--ink-faint)", border: "1px solid var(--border)" }}
            >
              {/* Map integration placeholder — drop a Google Maps embed or API-driven map here */}
              Map placeholder
            </div>

            <div className="card p-6 flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink-faint)" }}>
                Follow along
              </span>
              <div className="flex gap-3">
                {SOCIALS.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="btn btn-outline btn-sm"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-page flex flex-col gap-10 max-w-2xl mx-auto">
          <SectionHeading eyebrow="FAQ" title="Before you write in" />
          <div className="flex flex-col gap-3">
            {FAQS.map((item) => (
              <details key={item.q} className="card p-5 group">
                <summary
                  className="font-medium text-sm cursor-pointer list-none flex justify-between items-center"
                  style={{ color: "var(--ink)" }}
                >
                  {item.q}
                  <span
                    className="transition-transform group-open:rotate-45 text-lg"
                    style={{ color: "var(--ink-faint)" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
