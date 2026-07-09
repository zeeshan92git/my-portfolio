import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINE = "full-stack engineer — react, next.js, node.js"

function Typewriter() {
  const [shown, setShown] = useState('')

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setShown(LINE)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(LINE.slice(0, i))
      if (i >= LINE.length) clearInterval(id)
    }, 35)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="path-label text-mint">
      {shown}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        className="inline-block w-[9px] h-[1em] bg-mint ml-1 translate-y-[1px]"
      />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
            <span className="w-3 h-3 rounded-full bg-rose/70" />
            <span className="w-3 h-3 rounded-full bg-amber/70" />
            <span className="w-3 h-3 rounded-full bg-mint/70" />
            <span className="path-label text-xs text-muted ml-3">
              zsh — ~/zeeshan-ameer
            </span>
          </div>

          <div className="p-6 sm:p-10">
            <p className="path-label text-sm text-muted mb-4">
              <span className="text-mint">➜</span> ~ whoami
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
              Muhammad Zeeshan
              <br />
              Ameer
            </h1>
            <p className="path-label text-base sm:text-lg mb-6 min-h-[1.5em]">
              <Typewriter />
            </p>
            <p className="text-muted max-w-xl mb-8 leading-relaxed">
              I build scalable, production-shaped web apps across the MERN stack — 
              from role-based dashboards to real-time features — for freelance clients and university
              projects alike.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/#projects"
                className="px-5 py-2.5 rounded-md bg-mint text-base font-medium path-label text-sm hover:bg-mint/90 transition-colors"
              >
                view projects
              </a>
              <a
                href="/mza-resume.pdf"
                className="px-5 py-2.5 rounded-md border border-border text-ink path-label text-sm hover:border-mint/60 hover:text-mint transition-colors"
              >
                download resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
