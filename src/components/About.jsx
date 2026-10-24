export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="content-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm font-semibold text-[var(--accent)]">About</p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Practical engineering, from interface to API.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I’m a Software Engineering student at PUCIT who enjoys solving practical problems through web development. I build responsive React interfaces, REST APIs, authentication flows, and data models, with care for usability and maintainability.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              Based in Lahore, Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-9 border-t border-[var(--border)] pt-8 sm:grid-cols-2 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <section aria-labelledby="education-heading">
              <h3 id="education-heading" className="text-lg font-bold text-[var(--text)]">Education</h3>
              <div className="mt-5">
                <p className="text-base font-semibold text-[var(--text)]">BS Software Engineering</p>
                <p className="mt-1 text-base text-[var(--muted)]">PUCIT, University of the Punjab</p>
                <p className="mt-2 text-sm text-[var(--muted)]">2023–2027 · Expected graduation</p>
                <p className="text-sm text-[var(--muted)]">Lahore, Pakistan</p>
              </div>
            </section>

            <section aria-labelledby="experience-heading">
              <h3 id="experience-heading" className="text-lg font-bold text-[var(--text)]">Experience</h3>
              <div className="mt-5 space-y-6">
                <article>
                  <h4 className="text-base font-semibold text-[var(--text)]">MERN Stack Developer Intern</h4>
                  <p className="mt-1 text-base text-[var(--muted)]">Developer’s Hub Corporation</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">May–June 2025</p>
                </article>
                <article>
                  <h4 className="text-base font-semibold text-[var(--text)]">MERN Stack Trainee</h4>
                  <p className="mt-1 text-base text-[var(--muted)]">Nexus Berry Training &amp; Solutions</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">January–April 2025</p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
