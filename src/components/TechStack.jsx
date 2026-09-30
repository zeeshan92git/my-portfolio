import { motion, useReducedMotion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    number: '01',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5 & CSS3'],
  },
  {
    category: 'Backend',
    number: '02',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Database',
    number: '03',
    skills: ['MongoDB', 'Qdrant (Vector DB)', 'Mongoose', 'Atlas'],
  },
  {
    category: 'AI & Tools',
    number: '04',
    skills: ['LangChain', 'RAG Pipelines', 'Git & GitHub', 'Postman', 'Vercel'],
  },
]

export default function TechStack() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="skills" className="section-spacing bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="content-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[var(--accent)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
              Technical Toolkit
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text)] tracking-tight">
            Focused & practical.
          </h2>
          <p className="mt-2 text-base text-[var(--muted)]">
            Core technologies used to build scalable full-stack products and intelligent AI systems.
          </p>
        </div>

        {/* 4-Column Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] space-y-4"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <h3 className="font-serif text-lg font-normal text-[var(--text)]">
                  {group.category}
                </h3>
                <span className="text-xs font-mono font-semibold text-[var(--accent)]">
                  {group.number}
                </span>
              </div>

              {/* Clean tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
