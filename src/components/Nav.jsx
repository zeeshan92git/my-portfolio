import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="content-container flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-serif text-2xl font-normal tracking-tight text-[var(--text)] hover:opacity-80 transition-opacity flex items-center gap-0.5"
          aria-label="Muhammad Zeeshan Ameer - Return to top"
        >
          <span>ZA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-1 inline-block" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
            className="p-2 rounded-full border border-[var(--border)] text-[var(--text)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--surface)] transition-all cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              // Sun icon for dark mode
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="/mza-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <span aria-hidden="true" className="text-xs">↗</span>
          </a>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-2 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-[var(--border)] bg-[var(--surface)] px-6 py-6 shadow-lg space-y-4"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-[var(--text)] hover:text-[var(--accent)] py-2 border-b border-[var(--border-subtle)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex items-center justify-between">
            <a
              href="/mza-resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="w-full text-center text-sm font-semibold py-2.5 rounded-lg border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-text)] transition-colors"
            >
              View Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
