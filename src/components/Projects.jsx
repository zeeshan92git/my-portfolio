import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects.js'
import ProjectMockup from './ProjectMockup.jsx'

export default function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="section-spacing bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[var(--accent)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
              Selected Work
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[var(--text)] tracking-tight">
            Built with purpose.
          </h2>
          <p className="mt-3 text-base text-[var(--muted)]">
            Production-ready web applications and AI integrations with clear architecture.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.article
                key={project.id}
                className="project-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Visual Mockup Container (Order alternates on desktop) */}
                <div
                  className={`lg:col-span-7 project-img-wrapper ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <ProjectMockup project={project} />
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Number & Tagline */}
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="font-bold text-sm text-[var(--accent)]">
                      {project.number}
                    </span>
                    <span className="text-[var(--border)]">/</span>
                    <span className="text-[var(--muted)] font-medium uppercase tracking-wider">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[var(--text)] tracking-tight">
                    {project.name}
                  </h3>

                  {/* 1-Line Description */}
                  <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Max 3-4 Technology Tags */}
                  <div className="pt-1 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-3 flex flex-wrap items-center gap-4 text-sm font-semibold">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
                      >
                        <span>Live Demo</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface-elevated)] transition-colors"
                      >
                        <span>GitHub</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                    {project.isPrivate && (
                      <span className="text-xs text-[var(--muted)] font-mono italic">
                        Private Client Repository
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Explore more on GitHub */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] text-center">
          <a
            href="https://github.com/zeeshan92git?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            <span>Explore all open-source repositories on GitHub</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
