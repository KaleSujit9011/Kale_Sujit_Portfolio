function Navbar({ isDark, onToggleTheme }) {
  return (
    <nav
      className="sticky top-0 z-50 w-full border-b px-4 backdrop-blur-xl transition-colors duration-300"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <span
            className="glow-chip flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold"
            style={{
              backgroundColor: "color-mix(in srgb, var(--primary) 14%, transparent)",
              color: "var(--primary)",
            }}
          >
            SK
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">Sujit Kale</span>
            <span
              className="hidden text-xs sm:block"
              style={{ color: "var(--text-secondary)" }}
            >
              Full-Stack Developer
            </span>
          </span>
        </a>

        <div className="flex items-center gap-3 text-sm">
          <div
            className="hidden items-center gap-1 rounded-lg border p-1 text-xs md:flex"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--soft-border)",
            }}
          >
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="glow-button nav-link rounded-md px-2.5 py-1.5 transition"
                style={{ color: "var(--text-secondary)" }}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="glow-button flex h-9 items-center gap-2 rounded-lg border px-2.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
            style={{
              backgroundColor: "var(--toggle-bg)",
              borderColor: "var(--border)",
              color: "var(--text-main)",
            }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: isDark ? "var(--accent)" : "var(--primary)" }}
              aria-hidden="true"
            />
            {isDark ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
