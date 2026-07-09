import { motion } from 'framer-motion'
import SectionPath from './SectionPath.jsx'

const facts = [
  { k: 'based in', v: 'Lahore, Pakistan' },
  { k: 'studying', v: 'BS Software Engineering, PUCIT' },
  { k: 'focus', v: 'MERN + NEXT' },
  { k: 'also', v: 'Freelance full-stack development' },
]

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-20">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-[1.3fr_1fr] gap-12">
        <div>
          <SectionPath path="~/about.tsx" title="About me" />
          <div className="space-y-4 text-muted leading-relaxed max-w-xl">
            <p>
              I'm a final-year Software Engineering student at PUCIT,
              University of the Punjab, and a full-stack developer who's
              equally comfortable in a MERN codebase.
            </p>
            <p>
              My projects span role-based platforms and full MERN builds with
              admin dashboards and live client deployments. I care about
              writing code that's readable six months later, not just code
              that works today.
            </p>
            <p>
              Outside coursework, I take on freelance web development work —
              translating Figma designs into production React apps, and
              building full-stack sites end to end for small businesses.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-surface p-6 h-fit"
        >
          <p className="path-label text-xs text-muted mb-4">// quick facts</p>
          <dl className="space-y-4">
            {facts.map((f) => (
              <div key={f.k} className="flex flex-col">
                <dt className="path-label text-xs text-mint">{f.k}</dt>
                <dd className="text-ink text-sm mt-0.5">{f.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
