import Card from "../Card.jsx";
import projects from "../../data/projects.js";

function Projects() {
  const projectList = projects();

  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Projects
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Selected work with clear technical outcomes.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
            A focused set of projects showing frontend polish, backend structure,
            and practical implementation choices.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              meta={project.tech}
              image={project.image}
              liveLink={project.live}
              githubLink={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
