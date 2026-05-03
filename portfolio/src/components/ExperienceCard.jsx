function ExperienceCard({ role, company, period, summary, points, align = "left" }) {
  const isRight = align === "right";

  return (
    <article
      className={`glow-card rounded-lg border p-5 transition duration-300 hover:-translate-y-1 ${
        isRight ? "lg:text-left" : ""
      }`}
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
        {period}
      </p>

      <h3 className="mt-2.5 text-lg font-semibold leading-snug">
        {role}
      </h3>

      <p className="mt-1 text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
        {company}
      </p>

      <p className="mt-3.5 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
        {summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {points.map((point) => (
          <span
            key={point}
            className="glow-chip rounded-full border px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--soft-border)",
              color: "var(--text-secondary)",
            }}
          >
            {point}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
