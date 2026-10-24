const skillGroups = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { category: 'Databases', skills: ['MongoDB', 'Mongoose'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'Vercel'] },
]

export default function TechStack() {
  return (
    <section id="skills" className="section-spacing border-y border-[var(--border)] bg-[var(--surface)]">
      <div className="content-container">
        <header className="mb-9 max-w-2xl sm:mb-12">
          <p className="mb-3 text-sm font-semibold text-[var(--accent)]">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
            Tools for full-stack product development.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Technologies supported by my projects, training, and development work.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skillGroups.map((group) => (
            <section key={group.category} aria-labelledby={`skills-${group.category.toLowerCase()}`}>
              <h3
                id={`skills-${group.category.toLowerCase()}`}
                className="border-b border-[var(--border)] pb-3 text-base font-bold text-[var(--text)]"
              >
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-base text-[var(--muted)]">{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
