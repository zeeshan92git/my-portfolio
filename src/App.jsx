import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ExpertiseStrip from './components/ExpertiseStrip.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function getSavedTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function App() {
  return (
    <Portfolio />
  )
}

function Portfolio() {
  const [theme, setTheme] = useState(getSavedTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0d1915' : '#FBE7C9',
    )
    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The selected theme still works for this visit if storage is unavailable.
    }
  }, [theme])

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav theme={theme} onThemeToggle={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />
      <main id="main">
        <Hero />
        <ExpertiseStrip />
        <Projects />
        <About />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
