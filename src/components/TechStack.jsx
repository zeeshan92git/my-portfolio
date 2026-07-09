import { motion } from 'framer-motion'
import SectionPath from './SectionPath.jsx'

const groups = [
  { key: 'frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript','Bootstrap'] },
  { key: 'backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { key: 'database', items: ['MongoDB', 'SQL Server'] },
  { key: 'tooling', items: ['Prisma', 'Mongoose', 'Vercel', 'Figma-to-code workflow', 'Git & Github'] },
]

export default function TechStack() {
  return (
    <section id="stack" className="px-4 sm:px-6 py-20 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        <SectionPath path="~/stack.json" title="Tech stack" />

        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 path-label text-sm leading-relaxed overflow-x-auto">
          <span className="text-muted">{'{'}</span>
          <div className="pl-4 sm:pl-6">
            {groups.map((g, i) => (
              <motion.div
                key={g.key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-1"
              >
                <span className="text-mint">"{g.key}"</span>
                <span className="text-muted">: [</span>
                <span className="text-amber">
                  {g.items.map((it) => `"${it}"`).join(', ')}
                </span>
                <span className="text-muted">]{i < groups.length - 1 ? ',' : ''}</span>
              </motion.div>
            ))}
          </div>
          <span className="text-muted">{'}'}</span>
        </div>
      </div>
    </section>
  )
}
