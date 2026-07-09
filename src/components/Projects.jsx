import { motion } from 'framer-motion'
import SectionPath from './SectionPath.jsx'

const featured = [
  {
    hash: '9e2b716',
    title: 'Jewels For Joy',
    msg: 'feat: e-commerce storefront for a Pakistan-based jewellery brand',
    desc: 'Product management, category filtering, and a responsive UI, optimized for small-business scalability.',
    stack: ['Next.js', 'React', 'MongoDB'],
    live: 'https://jewels-for-joy.vercel.app',
    source: 'https://github.com/zeeshan92git/jewels-for-joy',
  },
  {
    hash: 'a1c44f0',
    title: 'DocCure',
    msg: 'feat: doctor appointment booking platform',
    desc: 'Full-stack healthcare platform for booking appointments, managing schedules, and doctor–patient interaction in real time.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://doccure-ecru.vercel.app',
    source: 'https://github.com/zeeshan92git/doc-frontend',
  }
]

const minor = ['Weather Dashboard', 'Flag Quiz App', 'Rock Paper Scissors Game']

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionPath path="~/projects/ — log --stat" title="Featured projects" />

        <div className="space-y-4">
          {featured.map((p, i) => (
            <motion.article
              key={p.hash}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-surface p-6 hover:border-mint/40 transition-colors"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="path-label text-xs text-amber">{p.hash}</span>
                <span className="path-label text-xs text-muted">{p.msg}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="path-label text-xs text-mint border border-mint/30 rounded-full px-2.5 py-1"
                  >
                    + {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 path-label text-xs">
                <a href={p.live} className="text-ink hover:text-mint transition-colors">
                  view live →
                </a>
                <a href={p.source} className="text-muted hover:text-mint transition-colors">
                  source →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <p className="path-label text-xs text-muted mb-3">// earlier commits</p>
          <div className="flex flex-wrap gap-2">
            {minor.map((m) => (
              <span
                key={m}
                className="path-label text-xs text-muted border border-border rounded-full px-3 py-1.5"
              >
                {m}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/zeeshan92git?tab=repositories"
            className="path-label text-xs text-mint inline-block mt-4 hover:underline"
          >
            view more on github →
          </a>
        </div>
      </div>
    </section>
  )
}
