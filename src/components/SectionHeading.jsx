export default function SectionHeading({ eyebrow, title, intro, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <p className="eyebrow"><span className="eyebrow-rule" /> {eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}
