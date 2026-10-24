import { projects } from '../data/projects.js'

function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.name} project`}
          width="1200"
          height="750"
          loading="lazy"
          className="mb-7 aspect-[16/10] w-full rounded-lg border border-[var(--border)] object-cover"
        />
      )}
      <p className="text-sm font-semibold text-[var(--accent)]">{project.subtitle}</p>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text)] sm:text-[1.75rem]">
        {project.name}
      </h3>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--text)]"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--border-subtle)] pt-6 text-base font-semibold">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name} live demo in a new tab`}
            className="inline-flex min-h-11 items-center text-[var(--accent)] underline decoration-transparent underline-offset-4 hover:decoration-current"
          >
            Live Demo{project.liveStatus ? ` (${project.liveStatus})` : ''} <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.repositories.map((repository) => (
          <a
            key={repository.label}
            href={repository.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} ${repository.label} repository on GitHub, opens in a new tab`}
            className="inline-flex min-h-11 items-center text-[var(--text)] underline decoration-[var(--border)] underline-offset-4 hover:text-[var(--accent)] hover:decoration-current"
          >
            {repository.label} on GitHub <span aria-hidden="true">↗</span>
          </a>
        ))}
        {project.sourceStatus && (
          <span className="text-sm font-medium text-[var(--muted)]">{project.sourceStatus}</span>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-spacing border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="content-container">
        <header className="mb-9 max-w-2xl sm:mb-12">
          <p className="mb-3 text-sm font-semibold text-[var(--accent)]">Selected work</p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Projects built around real workflows.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Full-stack applications that bring together clear interfaces, useful features, and maintainable systems.
          </p>
        </header>
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}
