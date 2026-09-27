import { motion, useReducedMotion } from 'framer-motion'

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/zeeshan92git' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadzeeshanameer' },
  { label: 'Email', href: 'mailto:zeeshanameer576@gmail.com' },
]

const focusAreas = [
  { title: 'Web applications', detail: 'React · Next.js · Node.js' },
  { title: 'Backend systems', detail: 'Express · FastAPI · .NET' },
  { title: 'AI & retrieval', detail: 'LangChain · embeddings · Qdrant' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const entrance = reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } }

  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-grid content-width">
        <motion.div className="hero-copy" {...entrance} transition={{ duration: 0.55, ease: 'easeOut' }}>
          <p className="eyebrow"><span className="eyebrow-rule" /> Muhammad Zeeshan Ameer</p>
          <h1>Full-Stack<br /><em>Engineer</em></h1>
          <p className="hero-lede">Building scalable web applications and AI-powered experiences.</p>
          <p className="hero-description">
            I’m a Software Engineering student at PUCIT, University of the Punjab. I work across modern frontend and backend systems, and I’m growing my practice in AI and retrieval-augmented applications.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <span aria-hidden="true">↘</span></a>
            <a className="button button-secondary" href="/mza-resume.pdf" download="muhammad-zeeshan-ameer-resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="social-links" aria-label="Profile links">
            {profileLinks.map((link) => (
              <li key={link.label}><a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}>{link.label}<span aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          className="profile-panel"
          aria-label="Areas of engineering focus"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="panel-topline"><span>01 / 03</span><span>Areas of focus</span></div>
          <div className="panel-monogram" aria-hidden="true">ZA<span>.</span></div>
          <p className="panel-caption">Software, systems<br />&amp; intelligent interfaces</p>
          <div className="panel-divider" />
          <ul className="focus-list">
            {focusAreas.map((area, index) => (
              <li key={area.title}>
                <span className="focus-index">0{index + 1}</span>
                <span><strong>{area.title}</strong><small>{area.detail}</small></span>
                <span className="focus-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
          <div className="panel-footer"><span>Lahore, Pakistan</span><span>BS Software Engineering</span></div>
        </motion.aside>
      </div>
      <div className="hero-index content-width" aria-hidden="true"><span>Independent thinking. Thoughtful engineering.</span><span>Scroll to explore ↓</span></div>
    </section>
  )
}
