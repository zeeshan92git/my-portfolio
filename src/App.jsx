import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ExpertiseStrip from './components/ExpertiseStrip.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
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
