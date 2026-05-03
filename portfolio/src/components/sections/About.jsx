function About() {
  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            About
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Practical engineering with a product mindset.
          </h2>
        </div>

        <div
          className="glow-card rounded-lg border p-6"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-base leading-7"
            style={{ color: "var(--text-secondary)" }}
          >
            I focus on building scalable backend systems and clean frontend
            interfaces. My approach is simple: solve real problems, keep systems
            efficient, and design with clarity.
          </p>

          <p
            className="mt-4 text-base leading-7"
            style={{ color: "var(--text-secondary)" }}
          >
            I work with modern web technologies and care about performance,
            reliability, and user experience, not just how things look, but how
            they work.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Clean UI", "Reliable APIs", "Readable Code"].map((item) => (
              <div
                key={item}
                className="glow-card rounded-lg border px-3.5 py-2.5 text-sm font-semibold"
                style={{
                  borderColor: "var(--soft-border)",
                  backgroundColor: "var(--bg)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
