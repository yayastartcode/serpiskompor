import { motion } from 'motion/react'

const logos = Array.from({ length: 6 }, (_, i) => `/images/clients/bgn${i + 1}.png`)

export function ClientsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">Klien Kami</p>
          <h2 className="text-3xl font-bold text-slate-900">Dipercaya Oleh</h2>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className="flex-shrink-0 mx-8">
              <img src={src} alt={`Client ${(i % 6) + 1}`} className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
