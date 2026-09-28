import { motion, useReducedMotion } from 'framer-motion'

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/zeeshan92git' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadzeeshanameer' },
  { label: 'Email', href: 'mailto:zeeshanameer576@gmail.com' },
]

const overview = [
  { title: 'Frontend', detail: 'React · Next.js' },
  { title: 'Backend', detail: 'Node.js · Express · MongoDB' },
  { title: 'AI integration', detail: 'RAG · LangChain · Qdrant' },
]

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-grid content-width">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p className="eyebrow"><span className="eyebrow-rule" /> Muhammad Zeeshan Ameer</p>
          <h1>MERN Stack Developer</h1>
          <p className="hero-lede">Building practical full-stack web applications with AI integration.</p>
          <p className="hero-description">
            I’m a Software Engineering student at PUCIT, University of the Punjab. I build web applications with React, Node.js, Express, and MongoDB, and integrate AI capabilities such as document question answering and retrieval-augmented generation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View Projects <span aria-hidden="true">↘</span></a>
            <a className="button button-secondary" href="/mza-resume.pdf" download="Muhammad_Zeeshan_Ameer_MERN_Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="social-links" aria-label="Profile links">
            {profileLinks.map((link) => (
              <li key={link.label}><a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}>{link.label}<span aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </motion.div>

        <aside className="profile-panel" aria-label="Technology overview">
          <p className="overview-heading">My development focus</p>
          <ul className="focus-list">
            {overview.map((area, index) => (
              <li key={area.title}>
                <span className="focus-index">0{index + 1}</span>
                <span><strong>{area.title}</strong><small>{area.detail}</small></span>
              </li>
            ))}
          </ul>
          <p className="panel-footer">Lahore, Pakistan <span>BS Software Engineering · PUCIT</span></p>
        </aside>
      </div>
    </section>
  )
}
