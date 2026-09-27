import SectionHeading from './SectionHeading.jsx'

const groups = [
  { title: 'Frontend', note: 'Interfaces & experience', skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', note: 'Services & APIs', skills: ['Node.js', 'Express.js', 'FastAPI', 'ASP.NET / .NET'] },
  { title: 'Data & infrastructure', note: 'Persistence & delivery', skills: ['MongoDB', 'Qdrant', 'Railway', 'Vercel'] },
  { title: 'AI & workflow', note: 'Retrieval & collaboration', skills: ['LangChain', 'Embeddings', 'RAG pipelines', 'Git & GitHub'] },
]

export default function TechStack() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="content-width">
        <SectionHeading eyebrow="Tools & technologies" title="A practical toolkit." intro="The technologies I use to shape, build and deliver ideas." />
        <div className="skills-grid">
          {groups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <p className="skill-index">0{index + 1}</p>
              <h3>{group.title}</h3>
              <p className="skill-note">{group.note}</p>
              <ul className="tag-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
