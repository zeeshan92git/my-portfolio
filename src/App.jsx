import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem('portfolio-theme')
    if (saved === 'dark' || saved === 'light') return saved
  } catch {
    // Local storage unavailable
  }
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme

    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#101412' : '#FCF8F1')
    }

    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Local storage write failed silently
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Nav theme={theme} onThemeToggle={toggleTheme} />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
