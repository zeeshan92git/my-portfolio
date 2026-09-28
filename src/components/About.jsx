import SectionHeading from './SectionHeading.jsx'

const focus = [
  ['Frontend', 'React and Next.js interfaces designed for clear, responsive use.'],
  ['Backend', 'Node.js, Express, MongoDB, and REST API integration.'],
  ['AI integration', 'Document question answering and retrieval-augmented generation.'],
]

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="content-width about-grid">
        <div className="about-intro">
          <SectionHeading eyebrow="A little about me" title="Engineering with a wider view." />
          <p>
            I’m a Software Engineering student at PUCIT, University of the Punjab. I build practical full-stack applications with React, Node.js, Express, and MongoDB.
          </p>
          <p>
            I integrate AI capabilities into web products, including document question answering and retrieval-augmented generation using FastAPI, LangChain, embeddings, and Qdrant.
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
