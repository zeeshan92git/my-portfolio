import SectionPath from './SectionPath.jsx'

export default function Contact() {
  return (
    <footer id="contact" className="px-4 sm:px-6 py-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <SectionPath path="~/contact.sh" title="Get in touch" />

        <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 max-w-xl">
          <p className="path-label text-sm text-muted mb-6">
            <span className="text-mint">$</span> cat contact.json
          </p>
          <ul className="space-y-3 path-label text-sm">
            <li>
              <span className="text-mint">email</span>
              <span className="text-muted">: </span>
              <a
                href="mailto:zeeshanameer576@gmail.com"
                className="text-ink hover:text-mint transition-colors"
              >
                zeeshanameer576@gmail.com
              </a>
            </li>
            <li>
              <span className="text-mint">linkedin</span>
              <span className="text-muted">: </span>
              {/* TODO: replace with your real profile URL */}
              <a href="https://www.linkedin.com/in/muhammadzeeshanameer" className="text-ink hover:text-mint transition-colors">
                linkedin.com/in/muhammadzeeshanameer
              </a>
            </li>
            <li>
              <span className="text-mint">github</span>
              <span className="text-muted">: </span>
              {/* TODO: replace with your real profile URL */}
              <a href="https://github.com/zeeshan92git" className="text-ink hover:text-mint transition-colors">
                github.com/zeeshan92git
              </a>
            </li>
          </ul>
        </div>

        <p className="path-label text-xs text-muted mt-10">
          © {new Date().getFullYear()} Muhammad Zeeshan Ameer. Built with
          React, Vite &amp; Framer Motion.
        </p>
      </div>
    </footer>
  )
}
