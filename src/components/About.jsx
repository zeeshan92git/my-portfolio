import SectionHeading from './SectionHeading.jsx'

const focus = [
  ['Product-minded frontend', 'Interfaces built with clarity, care and responsive detail.'],
  ['End-to-end development', 'From React experiences through APIs and data layers.'],
  ['Applied AI systems', 'Exploring retrieval, embeddings and LLM integrations.'],
]

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="content-width about-grid">
        <div className="about-intro">
          <SectionHeading eyebrow="A little about me" title="Engineering with a wider view." />
          <p>
            I’m a Software Engineering student at PUCIT, University of the Punjab, focused on building full-stack web applications with React, Next.js, Node.js and modern backend technologies.
          </p>
          <p>
            I also work on independent web development projects and am extending my practice into AI and RAG systems with LangChain, embeddings, Qdrant and FastAPI.
          </p>
          <p className="location-note"><span aria-hidden="true">⌖</span> Lahore, Pakistan</p>
        </div>
        <div className="focus-panel">
          <p className="focus-panel-label">What I bring</p>
          <ul>
            {focus.map(([title, detail], index) => (
              <li key={title}><span className="focus-number">0{index + 1}</span><span><strong>{title}</strong><small>{detail}</small></span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
