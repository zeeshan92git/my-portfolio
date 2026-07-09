const tabs = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#stack' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/90 backdrop-blur border-b border-border">
      <nav className="max-w-5xl mx-auto flex items-center gap-1 px-4 sm:px-6 overflow-x-auto">
        <span className="path-label text-mint text-sm py-3 pr-4 shrink-0">MZA</span>
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className="path-label text-xs sm:text-sm text-muted hover:text-ink whitespace-nowrap px-3 py-3 border-r border-border/70 last:border-r-0 transition-colors"
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
