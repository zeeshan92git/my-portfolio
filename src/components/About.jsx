import { motion, useReducedMotion } from 'framer-motion'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" className="section-spacing">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Short Editorial Bio */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1px] bg-[var(--accent)]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                About & Background
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--text)] tracking-tight">
              Engineering with a focus on usability & craft.
            </h2>

            {/* Exactly 2 short sentences / 3-5 lines */}
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              I’m a Software Engineering student at PUCIT focused on full-stack development and AI-powered web applications.
            </p>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              I build reliable web systems with React, Node.js, Express, and MongoDB, integrating modern RAG tools, vector databases, and FastAPI.
            </p>

            {/* Location pill */}
            <div className="pt-2 flex items-center gap-2 text-sm text-[var(--text)] font-medium">
              <span className="text-base">📍</span>
              <span>Based in Lahore, Pakistan</span>
            </div>
          </motion.div>

          {/* Right Column: Compact Education & Experience Card */}
          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm space-y-6">
              {/* Education Block */}
              <div>
                <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                  Education
                </span>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--text)]">
                      BS Software Engineering
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-0.5">
                      PUCIT — University of the Punjab
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-[var(--muted)] whitespace-nowrap">
                    2023–2027
                  </span>
                </div>
              </div>

              <div className="h-[1px] bg-[var(--border-subtle)]" />

              {/* Experience Milestones */}
              <div className="space-y-3">
                <span className="text-[11px] font-semibold text-[var(--accent)] uppercase tracking-wider">
                  Experience Milestones
                </span>

                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4 text-xs">
                    <div>
                      <p className="font-semibold text-[var(--text)]">MERN Developer Intern</p>
                      <p className="text-[var(--muted)]">Developer's Hub Corporation</p>
                    </div>
                    <span className="font-mono text-[var(--muted)] whitespace-nowrap">2025</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 text-xs">
                    <div>
                      <p className="font-semibold text-[var(--text)]">MERN Stack Trainee</p>
                      <p className="text-[var(--muted)]">Nexus Berry Solutions</p>
                    </div>
                    <span className="font-mono text-[var(--muted)] whitespace-nowrap">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
