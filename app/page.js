import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import SectionHeading from "../Components/ui/SectionHeading";

const FEATURES = [
  {
    title: "Lightning fast",
    description: "Redirects resolve in milliseconds, powered by an indexed lookup on every request.",
    icon: "⚡",
  },
  {
    title: "Secure by default",
    description: "Every link is validated before it's stored, so broken or malicious URLs never go live.",
    icon: "🛡️",
  },
  {
    title: "Custom slugs",
    description: "Pick your own short link text instead of a random string — easier to say, easier to remember.",
    icon: "✏️",
  },
  {
    title: "Reliable redirects",
    description: "Backed by MongoDB with connection pooling, so links stay fast under real traffic.",
    icon: "🔗",
  },
  {
    title: "Mobile friendly",
    description: "Shorten and share links from any device — the whole flow is built for small screens too.",
    icon: "📱",
  },
  {
    title: "Simple sharing",
    description: "Copy your new link and drop it anywhere — no sign-up walls in the way.",
    icon: "📤",
  },
];

const STEPS = [
  { title: "Paste your URL", description: "Drop in any long link you want to shorten." },
  { title: "Choose your slug", description: "Add a custom ending, or let us keep it simple." },
  { title: "Generate", description: "We save it instantly and hand back your short link." },
  { title: "Share it anywhere", description: "Post it, message it, print it — it just works." },
];

const STATS = [
  { value: "12k+", label: "Links created" },
  { value: "3.4k", label: "Active users" },
  { value: "48k+", label: "Redirects served" },
  { value: "99.9%", label: "Uptime" },
];

const TESTIMONIALS = [
  {
    quote: "I swapped our old link shortener for this in an afternoon. It's just faster, and the custom slugs are great for campaigns.",
    name: "Priya Nair",
    role: "Growth Marketer",
  },
  {
    quote: "Clean, no-nonsense tool. I paste a URL, I get a short link, I move on with my day.",
    name: "Daniel Osei",
    role: "Indie Developer",
  },
  {
    quote: "The redirect speed is genuinely noticeable compared to what we used before.",
    name: "Mei Chen",
    role: "Product Manager",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] glow pointer-events-none"
        aria-hidden="true"
      />
      <div className="container-page relative section pt-28 pb-24 flex flex-col items-center text-center gap-7">
        <span className="eyebrow fade-up">Free · No sign-up required</span>
        <h1
          className="text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl fade-up"
          style={{ color: "var(--ink)", animationDelay: "0.05s" }}
        >
          Long URLs, <span className="text-gradient">shortened</span> in seconds
        </h1>
        <p
          className="text-lg max-w-xl fade-up"
          style={{ color: "var(--ink-soft)", animationDelay: "0.1s" }}
        >
          ShrinkURL turns messy links into clean, shareable ones — with a custom slug you pick yourself.
        </p>
        <div className="flex flex-wrap gap-3 justify-center fade-up" style={{ animationDelay: "0.15s" }}>
          <Button href="/shorten" variant="primary">
            Shorten a link →
          </Button>
          <Button href="https://github.com/GeekyGotShrinkkked/ShrinkURL" variant="outline">
            View on GitHub
          </Button>
        </div>

        <div className="mt-6 w-full max-w-lg fade-up float" style={{ animationDelay: "0.2s" }}>
          <UrlMockup />
        </div>
      </div>
    </section>
  );
}

function UrlMockup() {
  return (
    <div className="card card-glass p-4 sm:p-5 flex flex-col gap-3 text-left">
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-lg mono text-sm"
        style={{ background: "var(--bg-muted)", color: "var(--ink-faint)" }}
      >
        <span aria-hidden="true">🔗</span>
        <span className="truncate">https://example.com/blog/how-we-scaled-our-infrastructure-in-2026</span>
      </div>
      <div className="flex items-center justify-center" aria-hidden="true">
        <span style={{ color: "var(--ink-faint)" }}>↓ shrinks to</span>
      </div>
      <div
        className="flex items-center justify-between px-4 py-3 rounded-lg mono text-sm font-medium"
        style={{ background: "var(--accent-soft)", color: "var(--accent-1)" }}
      >
        <span>shrinkurl.app/scaled-2026</span>
        <span className="text-xs px-2 py-1 rounded-full" style={{ background: "white" }}>
          Copied
        </span>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Features"
          title="Everything a short link needs, nothing it doesn't"
          description="No dashboards to learn, no limits hiding behind a paywall. Just a fast, dependable shortener."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="p-6 flex flex-col gap-3">
              <span
                className="w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                style={{ background: "var(--accent-soft)" }}
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Process"
          title="From long link to short link in four steps"
        />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {STEPS.map((step, i) => (
            <li key={step.title} className="card p-6 flex flex-col gap-3">
              <span
                className="mono text-xs font-semibold w-8 h-8 flex items-center justify-center rounded-full"
                style={{ background: "var(--ink)", color: "white" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-base" style={{ color: "var(--ink)" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="section" style={{ background: "var(--ink)" }}>
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          eyebrow="Stats"
          title="Numbers so far"
          align="center"
        />
        <p className="text-xs text-center -mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          Placeholder figures — swap in real metrics once analytics are wired up.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-3xl sm:text-4xl font-semibold text-gradient">{stat.value}</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--bg-subtle)" }}>
      <div className="container-page flex flex-col gap-14">
        <SectionHeading eyebrow="Testimonials" title="What early users are saying" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="p-6 flex flex-col gap-5">
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ background: "var(--accent-soft)", color: "var(--accent-1)" }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                    {t.name}
                  </span>
                  <span className="text-xs" style={{ color: "var(--ink-faint)" }}>
                    {t.role}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 sm:py-20 flex flex-col items-center text-center gap-6"
          style={{ background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))" }}
        >
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" aria-hidden="true" />
          <h2 className="relative text-3xl sm:text-4xl font-semibold text-white max-w-xl">
            Ready to shorten your first link?
          </h2>
          <p className="relative text-white/80 max-w-md">
            It takes about ten seconds. No account, no credit card, no catch.
          </p>
          <div className="relative">
            <Button href="/shorten" variant="secondary" className="!bg-white !text-[var(--accent-1)]">
              Get started free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
