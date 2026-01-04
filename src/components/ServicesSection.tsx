import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Bug, Rat, Shield, Wind, CircleDot, Snail, Zap } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Bug,
      title: 'Jasa Pembasmi Hama',
      description: 'Pengendalian hama secara efektif dengan metode yang aman dan terpercaya untuk melindungi lingkungan Anda.',
    },
    {
      icon: Wind,
      title: 'Jasa Fogging',
      description: 'Layanan fogging profesional untuk membasmi nyamuk dan serangga terbang lainnya.',
    },
    {
      icon: Shield,
      title: 'Jasa Anti Rayap',
      description: 'Perlindungan menyeluruh terhadap rayap untuk menjaga struktur bangunan dan properti Anda.',
    },
    {
      icon: CircleDot,
      title: 'Jasa Pembasmi Tawon',
      description: 'Penanganan sarang tawon secara aman dan profesional untuk keamanan lingkungan Anda.',
    },
    {
      icon: Rat,
      title: 'Jasa Pembasmi Tikus',
      description: 'Solusi komprehensif untuk mengatasi masalah tikus dengan teknologi modern dan ramah lingkungan.',
    },
    {
      icon: Bug,
      title: 'Jasa Pembasmi Lalat',
      description: 'Pengendalian lalat secara efektif untuk menjaga kebersihan dan kesehatan lingkungan Anda.',
    },
    {
      icon: Snail,
      title: 'Jasa Pembasmi Kutu',
      description: 'Layanan pembasmian kutu untuk kenyamanan rumah dan kesehatan keluarga Anda.',
    },
    {
      icon: Zap,
      title: 'Jasa Basmi Ular',
      description: 'Penanganan ular secara aman dan profesional untuk keamanan properti Anda.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
              Layanan Kami
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Targeted Solutions.
              <br />
              Total Protection.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:max-w-md"
          >
            <p className="text-slate-600 mb-6">
              Kami menyediakan solusi pengendalian hama yang tepat sasaran dan perlindungan menyeluruh untuk rumah, kantor, dan properti komersial Anda dengan layanan profesional dan terpercaya.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Lihat Semua Layanan
            </Button>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6">{service.description}</p>

              {/* Learn More Link */}
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2 group">
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
