import SectionHeading from './SectionHeading.jsx'

const experience = [
  {
    period: 'May–June 2025',
    role: 'MERN Stack Developer Intern',
    organization: "Developer's Hub Corporation",
    detail: 'Developed React interfaces, integrated REST APIs, and implemented MongoDB database operations while debugging frontend and backend issues in MERN applications.',
  },
  {
    period: 'January–April 2025',
    role: 'MERN Stack Trainee',
    organization: 'Nexus Berry Training & Solutions',
    detail: 'Completed practical MERN training and built a doctor appointment platform with authentication, booking workflows, dashboards, and API integration.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience-section">
      <div className="content-width">
        <SectionHeading eyebrow="Professional experience" title="Learning by building." />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <section className="education-block" aria-labelledby="education-heading">
          <p className="eyebrow"><span className="eyebrow-rule" /> Education</p>
          <div className="education-details">
            <div>
              <h3 id="education-heading">BS Software Engineering</h3>
              <p>University of the Punjab (PUCIT)</p>
              <p>Lahore, Pakistan</p>
            </div>
            <p className="education-period">2023–2027 <span>Expected graduation</span></p>
          </div>
        </section>
      </div>
    </section>
  )
}
