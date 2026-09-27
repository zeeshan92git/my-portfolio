import { motion, useReducedMotion } from 'framer-motion'
import { otherProjects, projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art project-art-${project.artwork}`} aria-hidden="true">
      <span className="art-index">{project.number} / SELECTED WORK</span>
      <span className="art-mark">{project.mark}<i>.</i></span>
      <span className="art-title">{project.name}</span>
      <span className="art-rule" />
      <span className="art-category">{project.type}</span>
    </div>
  )
}

export default function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="section-shell projects-section">
      <div className="content-width">
        <SectionHeading
          eyebrow="Selected work · 01—02"
          title="Built with purpose."
          intro="A selection of web applications shaped around clear user needs and thoughtful engineering."
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={`project-row${index % 2 ? ' project-row-reverse' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <ProjectArtwork project={project} />
              <div className="project-copy">
                <p className="project-kicker"><span>{project.number}</span>{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">Live project <span aria-hidden="true">↗</span></a>
                  <a href={project.source} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="other-work">
          <p className="other-work-label">Also in the portfolio</p>
          <ul>{otherProjects.map((project) => <li key={project}>{project}</li>)}</ul>
        </div>
        <a className="text-link all-projects-link" href="https://github.com/zeeshan92git?tab=repositories" target="_blank" rel="noreferrer">
          Explore more on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
