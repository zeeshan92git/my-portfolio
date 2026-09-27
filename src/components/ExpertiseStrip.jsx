const expertise = ['React', 'Next.js', 'Node.js', 'MongoDB', 'FastAPI', '.NET', 'LangChain', 'Qdrant']

export default function ExpertiseStrip() {
  return (
    <section className="expertise-strip" aria-label="Core technologies">
      <div className="content-width expertise-inner">
        <p>Working across</p>
        <ul>{expertise.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  )
}
