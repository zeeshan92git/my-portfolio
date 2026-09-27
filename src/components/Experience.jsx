import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <div className="content-width experience-grid">
        <SectionHeading eyebrow="Experience & education" title="Learning by building." />
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-period">2023 — 2027</span>
            <div><h3>BS Software Engineering</h3><p>Punjab University College of Information Technology (PUCIT)<br />University of the Punjab</p></div>
            <span className="timeline-dot" aria-hidden="true" />
          </article>
          <article className="timeline-item">
            <span className="timeline-period">Independent</span>
            <div><h3>Freelance web development</h3><p>Building web experiences and full-stack applications through independent projects.</p></div>
            <span className="timeline-dot" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>
  )
}
