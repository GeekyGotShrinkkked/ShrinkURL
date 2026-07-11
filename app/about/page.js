import Button from "../../Components/ui/Button";
import Card from "../../Components/ui/Card";
import SectionHeading from "../../Components/ui/SectionHeading";

export const metadata = {
  title: "About — ShrinkURL",
  description: "Why we built ShrinkURL and what we believe a link shortener should be.",
};

const VALUES = [
  { title: "Fast by default", description: "Every redirect should feel instant. No spinners, no waiting." },
  { title: "No dark patterns", description: "No forced sign-ups, no expiring free links, no surprise paywalls." },
  { title: "Own your link", description: "Custom slugs mean your links stay memorable, not random strings." },
  { title: "Built in the open", description: "The full source is public — read it, fork it, improve it." },
];

const TIMELINE = [
  { year: "2025", title: "The idea", description: "Tired of bloated shorteners, we sketched the first version over a weekend." },
  { year: "2025", title: "MVP shipped", description: "Core shortening and redirect flow went live on Next.js and MongoDB." },
  { year: "2026", title: "Redesign", description: "A full frontend rebuild focused on speed, clarity, and a premium feel." },
];

const TEAM = [
  { name: "Arpit", role: "Founder & Engineer" },
  { name: "Open role", role: "Design" },
  { name: "Open role", role: "Backend" },
];

const STACK = ["Next.js", "React", "MongoDB", "Tailwind CSS"];

const FAQS = [
  {
    q: "Is ShrinkURL free to use?",
    a: "Yes. Shortening links doesn't require an account or payment.",
  },
  {
    q: "Do short links expire?",
    a: "No. Once a link is created, it stays active.",
  },
  {
    q: "Can I choose my own short link text?",
    a: "Yes — every link uses a custom slug you pick yourself, rather than a random string.",
  },
  {
    q: "Is the project open source?",
    a: "Yes, the full source is available on GitHub.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        <div className="container-page relative section pb-16 flex flex-col items-center text-center gap-5">
          <span className="eyebrow fade-up">About</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl fade-up" style={{ color: "var(--ink)", animationDelay: "0.05s" }}>
            A link shortener that gets out of your way
          </h1>
          <p className="text-lg max-w-xl fade-up" style={{ color: "var(--ink-soft)", animationDelay: "0.1s" }}>
            We built ShrinkURL because every other shortener we tried made a simple job feel complicated.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page grid sm:grid-cols-2 gap-5">
          <Card className="p-8 flex flex-col gap-3">
            <span className="eyebrow">Our mission</span>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              Make sharing a link as simple as the link itself — fast to create, easy to say out loud,
              and reliable every time someone clicks it.
            </p>
          </Card>
          <Card className="p-8 flex flex-col gap-3">
            <span className="eyebrow">Our vision</span>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              A shortener people reach for by default, not because it&apos;s the only option they know,
              but because it&apos;s genuinely the best one.
            </p>
          </Card>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-page flex flex-col gap-14">
          <SectionHeading eyebrow="Why choose us" title="What we optimize for" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {VALUES.map((v) => (
              <Card key={v.title} className="p-6 flex flex-col gap-2">
                <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {v.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-14">
          <SectionHeading eyebrow="Timeline" title="How we got here" />
          <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full stagger">
            {TIMELINE.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="mono text-xs font-semibold" style={{ color: "var(--accent-1)" }}>
                    {item.year}
                  </span>
                  <span
                    className="flex-1 w-px mt-2"
                    style={{ background: "var(--border)" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--ink-soft)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-page flex flex-col gap-14">
          <SectionHeading eyebrow="Team" title="The people behind ShrinkURL" description="A small team — we're hiring." />
          <div className="grid sm:grid-cols-3 gap-5 stagger">
            {TEAM.map((member) => (
              <Card key={member.name + member.role} className="p-6 flex flex-col items-center text-center gap-3">
                <span
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold"
                  style={{ background: "var(--accent-soft)", color: "var(--accent-1)" }}
                  aria-hidden="true"
                >
                  {member.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--ink)" }}>
                    {member.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
                    {member.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page flex flex-col gap-8 items-center text-center">
          <SectionHeading eyebrow="Technology" title="Built on a stack we trust" />
          <div className="flex flex-wrap gap-3 justify-center">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="mono text-sm px-4 py-2 rounded-full"
                style={{ border: "1px solid var(--border)", color: "var(--ink-soft)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-subtle)" }}>
        <div className="container-page flex flex-col gap-10 max-w-2xl mx-auto">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="flex flex-col gap-3">
            {FAQS.map((item) => (
              <details key={item.q} className="card p-5 group">
                <summary className="font-medium text-sm cursor-pointer list-none flex justify-between items-center" style={{ color: "var(--ink)" }}>
                  {item.q}
                  <span className="transition-transform group-open:rotate-45 text-lg" style={{ color: "var(--ink-faint)" }} aria-hidden="true">
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

      <section className="section">
        <div className="container-page flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--ink)" }}>
            Want to see it in action?
          </h2>
          <Button href="/shorten" variant="primary">
            Shorten your first link →
          </Button>
        </div>
      </section>
    </>
  );
}
