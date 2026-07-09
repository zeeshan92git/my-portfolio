import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="bg-base text-ink min-h-screen">
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  )
}
