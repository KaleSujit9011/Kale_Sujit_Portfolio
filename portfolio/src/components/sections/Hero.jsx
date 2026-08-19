import { useEffect, useState } from "react";
import SujitKale from "../../assets/SujitKale.png";
import ProfessionalPhoto from "../../assets/professional.png";
import resume from "../../data/Sujit_Kale_resume.pdf";

const roles = [
  "Full-Stack Developer...",
  "Junior Full-Stack Developer...",
  "Python Full-Stack Developer...",
  "Backend Engineer...",
  "React Developer...",
  "API Developer...",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p
            className="mb-4 inline-flex rounded-full border px-3.5 py-1.5 text-xs font-semibold"
            style={{
              borderColor: "var(--border)",
              color: "var(--accent)",
              backgroundColor: "var(--surface)",
            }}
          >
            {roles[roleIndex]}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Building clean web apps with <span className="text-gradient">reliable backend systems.</span>
          </h1>

          <p
            className="mt-5 max-w-2xl text-base leading-7"
            style={{ color: "var(--text-secondary)" }}
          >
            I am Nana Kale, a developer focused on practical products, readable
            interfaces, and systems that stay maintainable as they grow.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={resume}
              download
              className="glow-button inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all"
            >
              Download resume
            </a>

            <a
              href="#projects"
              className="glow-button-outline inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-semibold transition-all"
            >
              View projects
            </a>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              ["Frontend", "React UI"],
              ["Backend", "API design"],
              ["Focus", "Clarity"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="glow-card rounded-lg border px-3.5 py-3"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <p className="text-sm font-semibold">{label}</p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Photo card with hover-swipe effect ── */}
        <div
          className="glow-card relative rounded-lg border p-3 overflow-hidden"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover hint badge */}
          <div
            className="absolute top-5 right-5 z-20 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium backdrop-blur-md"
            style={{
              backgroundColor: "color-mix(in srgb, var(--primary) 18%, transparent)",
              border: "1px solid color-mix(in srgb, var(--primary) 35%, transparent)",
              color: "var(--primary)",
              transition: "opacity 0.3s ease",
              opacity: hovered ? 0 : 1,
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            Hover to swipe
          </div>

          {/* ─ Photo 1 (professional) — slides OUT to the left on hover ─ */}
          <img
            src={ProfessionalPhoto}
            alt="Sujit Kale -Professional"
            className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            style={{
              position: "relative",
              zIndex: 1,
              transition: "transform 0.55s cubic-bezier(0.77,0,0.18,1), opacity 0.45s ease",
              transform: hovered ? "translateX(-105%)" : "translateX(0%)",
              opacity: hovered ? 0 : 1,
            }}
          />

          {/* ─ Photo 2 (casual) — slides IN from the right on hover ─ */}
          <img
            src={SujitKale}
            alt="Sujit Kale"
            className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            style={{
              position: "absolute",
              inset: "0.75rem",            /* matches p-3 padding */
              zIndex: 2,
              transition: "transform 0.55s cubic-bezier(0.77,0,0.18,1), opacity 0.45s ease",
              transform: hovered ? "translateX(0%)" : "translateX(105%)",
              opacity: hovered ? 1 : 0,
            }}
          />

          {/* Frosted info bar — always visible */}
          <div
            className="glow-card absolute bottom-6 left-6 right-6 z-10 rounded-lg border p-3.5 backdrop-blur-xl"
            style={{
              backgroundColor: "color-mix(in srgb, var(--surface) 82%, transparent)",
              borderColor: "var(--border)",
            }}
          >
            <p className="text-sm font-semibold">Available for focused product work
              {/* {hovered ?":"Available"} */}
            </p>
            <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>
              {hovered
                ? "React, APIs, databases, and developer-friendly interfaces."
                : "Sujit Kale · Full-Stack Developer"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
