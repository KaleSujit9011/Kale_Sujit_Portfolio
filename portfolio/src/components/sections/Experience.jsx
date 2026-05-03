import ExperienceCard from "../ExperienceCard.jsx";
import experiences from "../../data/experience.js";

function Experience() {
  return (
    <section id="experience" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            A ladder of practical development work.
          </h2>
          <p className="mt-4 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
            Each step adds a stronger layer: interface craft, backend structure,
            data handling, and reliable developer workflow.
          </p>
        </div>

        <div className="relative mt-10">
          <div
            className="absolute left-4 top-0 h-full w-px lg:left-1/2 lg:-translate-x-1/2"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experiences.map((experience, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={`${experience.role}-${experience.period}`}
                  className="relative grid gap-5 pl-10 lg:grid-cols-2 lg:gap-12 lg:pl-0"
                >
                  <span
                    className="absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 lg:left-1/2"
                    style={{
                      backgroundColor: "var(--primary)",
                      borderColor: "var(--bg)",
                      boxShadow: "0 0 0 1px var(--border)",
                    }}
                    aria-hidden="true"
                  />

                  <div className={isRight ? "hidden lg:block" : ""}>
                    {!isRight && (
                      <ExperienceCard
                        {...experience}
                        align="left"
                      />
                    )}
                  </div>

                  <div>
                    {isRight && (
                      <ExperienceCard
                        {...experience}
                        align="right"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
