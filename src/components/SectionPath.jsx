import { motion } from 'framer-motion'

export default function SectionPath({ path, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="path-label text-sm text-mint/80 mb-2">{path}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-border" />
    </motion.div>
  )
}
