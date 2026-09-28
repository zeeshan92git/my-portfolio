const expertise = ['React', 'Node.js', 'Express.js', 'MongoDB']

export default function ExpertiseStrip() {
  return (
    <section className="expertise-strip" aria-label="Core technologies">
      <div className="content-width expertise-inner">
        <p>MERN stack</p>
        <ul>{expertise.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  )
}
