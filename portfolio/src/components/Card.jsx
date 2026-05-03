function Card({ title, description, meta, image, liveLink, githubLink }) {
  return (
    <div
      className="glow-card group flex h-full overflow-hidden rounded-lg border transition duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div className="flex w-full flex-col">
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={image}
              alt={`${title} preview`}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent 55%)",
              }}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold leading-snug">
            {title}
          </h3>

          <p
            className="mt-3 text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>

          {meta && (
            <p
              className="mt-5 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                borderColor: "color-mix(in srgb, var(--primary) 25%, transparent)",
                color: "var(--primary)",
                backgroundColor: "color-mix(in srgb, var(--primary) 8%, transparent)",
              }}
            >
              {meta}
            </p>
          )}

          <div className="mt-5 flex gap-2.5">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="glow-button inline-flex flex-1 items-center justify-center rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--primary)" }}
              >
                Live demo
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="glow-button inline-flex flex-1 items-center justify-center rounded-lg border px-3.5 py-2 text-xs font-semibold transition hover:-translate-y-0.5"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
