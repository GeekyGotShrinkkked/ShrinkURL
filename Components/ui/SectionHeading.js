export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={`flex flex-col gap-4 fade-up ${alignClass}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl" style={{ color: "var(--ink)" }}>
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg max-w-xl" style={{ color: "var(--ink-soft)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
