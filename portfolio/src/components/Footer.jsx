function Footer() {
  const portfolioLinks = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  const connectLinks = [
    ["Instagram", "https://www.instagram.com/"],
    ["Medium", "https://medium.com/"],
    ["LinkedIn", "https://www.linkedin.com/"],
    ["GitHub", "https://github.com/"],
  ];

  return (
    <footer
      className="border-t px-4 py-10"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="inline-flex items-center gap-3">
            <span
            className="glow-chip flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold"
              style={{
                backgroundColor: "color-mix(in srgb, var(--primary) 14%, transparent)",
                color: "var(--primary)",
              }}
            >
              SK
            </span>
            <span>
              <span className="block text-sm font-semibold">Sujit Kale</span>
              <span className="block text-sm" style={{ color: "var(--text-secondary)" }}>
                Python Full-Stack Developer
              </span>
            </span>
          </a>

          <p
            className="mt-4 max-w-md text-sm leading-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Building clean frontend experiences and practical backend systems
            for products that need clarity and reliability.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Portfolio</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {portfolioLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="glow-button w-fit rounded-md px-2 py-1 transition hover:text-[var(--primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {connectLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glow-button w-fit rounded-md px-2 py-1 transition hover:text-[var(--primary)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-8 flex max-w-6xl flex-col gap-3 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between"
        style={{
          borderColor: "var(--border)",
          color: "var(--text-secondary)",
        }}
      >
        <p>© Copyright 2026 Sujit Kale. All rights reserved.</p>
        <a href="#" className="glow-button w-fit rounded-md px-2 py-1 transition hover:text-[var(--primary)]">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
