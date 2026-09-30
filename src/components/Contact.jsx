import { motion, useReducedMotion } from 'framer-motion'

export default function Contact() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--cta-bg)] text-[var(--cta-text)] transition-colors duration-200">
      <div className="content-container">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1px] bg-[var(--cta-muted)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--cta-muted)]">
              Get In Touch
            </span>
            <span className="w-5 h-[1px] bg-[var(--cta-muted)]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[var(--cta-text)] leading-tight">
            Let’s build something <br className="hidden sm:inline" />
            <span className="italic">meaningful.</span>
          </h2>

          {/* Supporting Line */}
          <p className="text-base sm:text-lg text-[var(--cta-muted)] max-w-xl mx-auto font-normal">
            Open to software engineering opportunities, internships, and ambitious web or AI collaborations.
          </p>

          {/* CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:zeeshanameer576@gmail.com"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[var(--cta-button-bg)] text-[var(--cta-button-text)] hover:bg-[var(--cta-button-hover)] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Get in touch</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="mailto:zeeshanameer576@gmail.com"
              className="text-sm font-mono text-[var(--cta-muted)] hover:text-[var(--cta-text)] transition-colors underline underline-offset-4"
            >
              zeeshanameer576@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
