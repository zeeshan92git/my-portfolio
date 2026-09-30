const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/zeeshan92git' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadzeeshanameer' },
  { label: 'Email', href: 'mailto:zeeshanameer576@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="py-10 border-t border-[var(--border)] bg-[var(--bg)] text-[var(--muted)] text-xs">
      <div className="content-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand / Name */}
        <div className="flex items-center gap-2 text-[var(--text)]">
          <span className="font-serif text-lg font-normal">ZA.</span>
          <span className="text-[var(--border)]">|</span>
          <span className="font-medium text-xs text-[var(--muted)]">
            Muhammad Zeeshan Ameer
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[var(--muted)]">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
