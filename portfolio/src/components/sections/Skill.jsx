import { useState } from "react";
import skills from "../../data/skills.js";

function Skills() {
  const categories = Object.keys(skills);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const visibleSkills =
    selectedCategory === "all"
      ? Object.values(skills).flat()
      : skills[selectedCategory];

  return (
    <section id="skills" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            Skills
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Tools I use to move from idea to shipped product.
          </h2>
        </div>

        <div className="hide-scrollbar -mx-4 mt-7 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {["all", ...categories].map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="glow-button shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition"
                style={{
                  backgroundColor: isActive ? "var(--primary)" : "var(--surface)",
                  borderColor: isActive ? "var(--primary)" : "var(--border)",
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div
          className="glow-card skill-marquee mt-7 w-full overflow-hidden rounded-lg border py-4 sm:mt-8 sm:py-5"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="skill-marquee-track gap-3 px-2 sm:gap-4">
            {visibleSkills.map((skill) => (
              <span
                key={skill}
                className="glow-chip shrink-0 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-semibold sm:px-4 sm:py-2.5"
                style={{
                  borderColor: "var(--soft-border)",
                  color: "var(--text-main)",
                  backgroundColor: "var(--surface)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
