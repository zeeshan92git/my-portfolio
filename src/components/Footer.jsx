const links = [
  { label: 'GitHub', href: 'https://github.com/zeeshan92git' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammadzeeshanameer' },
  { label: 'Email', href: 'mailto:zeeshanameer576@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-width footer-inner">
        <a className="footer-brand" href="#home"><strong>Muhammad Zeeshan Ameer</strong><span>Full-Stack Engineer</span></a>
        <ul className="footer-links" aria-label="Social links">
          {links.map((link) => <li key={link.label}><a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}>{link.label}<span aria-hidden="true">↗</span></a></li>)}
        </ul>
        <p className="copyright">© {new Date().getFullYear()} Muhammad Zeeshan Ameer</p>
      </div>
    </footer>
  )
}
