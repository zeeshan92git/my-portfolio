import { motion, useReducedMotion } from 'framer-motion'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/zeeshan92git', icon: '↗' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadzeeshanameer', icon: '↗' },
  { label: 'Email', href: 'mailto:zeeshanameer576@gmail.com', icon: '↗' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="min-h-[85vh] sm:min-h-[90vh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="content-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Copy */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7 space-y-6"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[var(--accent)]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
                Muhammad Zeeshan Ameer
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[var(--text)] leading-[1.08]">
              Full-Stack <br />
              <span className="italic">Developer</span>
            </h1>

            {/* Subheading (One punchy line) */}
            <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl font-normal leading-relaxed">
              Building web products and AI-powered experiences.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-text)] text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all shadow-sm group"
              >
                <span>View Work</span>
                <span className="ml-2 transform group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>

              <a
                href="/mza-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[var(--border)] text-[var(--text)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] transition-all"
              >
                <span>Resume</span>
                <span className="ml-1 text-xs opacity-70">↗</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-6 text-sm text-[var(--muted)] font-medium">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                >
                  <span>{link.label}</span>
                  <span className="text-xs opacity-60">{link.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Desktop Right Side Visual: Clean Editorial Developer Card */}
          <motion.div
            className="hidden lg:block lg:col-span-5 xl:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm space-y-5 relative overflow-hidden">
              {/* Subtle accent border line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--accent)]" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  <span className="text-xs font-semibold text-[var(--accent)]">
                    Available for opportunities
                  </span>
                </div>
                <span className="text-[11px] text-[var(--muted)] font-mono">Lahore, PK</span>
              </div>

              {/* Focus List */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold">Specialization</span>
                  <p className="font-semibold text-sm text-[var(--text)] mt-0.5">
                    MERN Stack & Next.js Architecture
                  </p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold">AI Integration</span>
                  <p className="font-semibold text-sm text-[var(--text)] mt-0.5">
                    RAG Systems, Vector Search (Qdrant), FastAPI
                  </p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-semibold">Academic Foundation</span>
                  <p className="font-semibold text-sm text-[var(--text)] mt-0.5">
                    BS Software Engineering · PUCIT (2023–2027)
                  </p>
                </div>
              </div>

              {/* Clean bottom note */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Featured Project</span>
                <a href="#projects" className="text-[var(--accent)] font-semibold hover:underline">
                  DocCure Platform ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
