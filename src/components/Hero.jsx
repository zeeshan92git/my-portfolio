import { motion, useReducedMotion } from 'framer-motion'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/zeeshan92git' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadzeeshanameer' },
  { label: 'Email', href: 'mailto:zeeshanameer576@gmail.com' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="flex min-h-[min(760px,90vh)] items-center pb-16 pt-32 sm:pb-24 sm:pt-36">
      <div className="content-container w-full">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <p className="mb-3 text-base font-semibold text-[var(--accent)] sm:text-lg">
            Muhammad Zeeshan Ameer
          </p>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)] sm:text-base">
            MERN-Stack Developer <span className="px-2 text-[var(--border)]" aria-hidden="true">/</span> Lahore, Pakistan
          </p>
          <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[var(--text)]">
            Building reliable, modern web applications.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Software Engineering student specializing in React, Next.js, Node.js, Express, and backend API development.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              View Projects <span className="ml-2" aria-hidden="true">↓</span>
            </a>
            <a
              href="/mza-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--border)] px-6 py-3 text-base font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View Resume <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base font-medium text-[var(--muted)]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="inline-flex min-h-11 items-center gap-1 underline decoration-transparent underline-offset-4 hover:text-[var(--accent)] hover:decoration-current"
                >
                  {link.label}
                  {!link.href.startsWith('mailto:') && <span aria-hidden="true">↗</span>}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
