export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-[var(--cta-bg)] text-[var(--cta-text)]">
      <div className="content-container">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-[var(--cta-muted)]">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s talk about building useful software.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--cta-muted)] sm:text-lg">
            I’m open to software engineering opportunities, internships, and web development projects.
          </p>
          <a
            href="mailto:zeeshanameer576@gmail.com"
            className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-[var(--cta-button-bg)] px-6 py-3 text-base font-bold text-[var(--cta-button-text)] transition-colors hover:bg-[var(--cta-button-hover)]"
          >
            Email Muhammad <span className="ml-2" aria-hidden="true">↗</span>
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base font-medium text-[var(--cta-muted)]">
            <li><a className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-[var(--cta-text)]" href="https://github.com/zeeshan92git" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
            <li><a className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-[var(--cta-text)]" href="https://www.linkedin.com/in/muhammadzeeshanameer" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
