import SectionHeading from './SectionHeading.jsx'

const groups = [
  { title: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Backend & data', skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'] },
  { title: 'Tools & deployment', skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Railway', 'MongoDB Atlas', 'Cloudinary'] },
  { title: 'AI integration', skills: ['Python', 'FastAPI', 'LangChain', 'Hugging Face embeddings', 'Qdrant', 'RAG'] },
]

export default function TechStack() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="content-width">
        <SectionHeading eyebrow="Skills" title="A practical toolkit." intro="MERN development at the core, with frontend and AI tools for the products I build." />
        <div className="skills-grid">
          {groups.map((group, index) => (
            <article className="skill-group" key={group.title}>
              <p className="skill-index">0{index + 1}</p>
              <h3>{group.title}</h3>
              <ul className="tag-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
