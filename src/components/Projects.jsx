import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art project-art-${project.artwork}`} aria-hidden="true">
      <span className="art-index">{project.number} / SELECTED WORK</span>
      <span className="art-mark">{project.mark}<i>.</i></span>
      <span className="art-title">{project.name}</span>
      <span className="art-category">{project.type}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell projects-section">
      <div className="content-width">
        <SectionHeading
          eyebrow="Selected work"
          title="Built with purpose."
          intro="Full-stack products and AI integrations shaped around practical user needs."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`project-row${index % 2 ? ' project-row-reverse' : ''}`}
            >
              <ProjectArtwork project={project} />
              <div className="project-copy">
                <p className="project-kicker"><span>{project.number}</span>{project.type}<span className="project-status">{project.status}</span></p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.summary}</p>
                <ul className="feature-list" aria-label={`${project.name} features`}>
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className="project-links" aria-label={`${project.name} links`}>
                  {project.repositories.map((repository) => (
                    <a key={repository.href} href={repository.href} target="_blank" rel="noreferrer">
                      {repository.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                  {project.privateSource && <span className="repository-note">Private repository</span>}
                  {project.sourceNote && <span className="repository-note">{project.sourceNote}</span>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <a className="text-link all-projects-link" href="https://github.com/zeeshan92git?tab=repositories" target="_blank" rel="noreferrer">
          Explore more on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
