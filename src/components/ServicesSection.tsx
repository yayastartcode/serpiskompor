import { motion } from "motion/react";
import { getWhatsAppLink } from "@/lib/config";

const services = [
  {
    title: "SERVICE KOMPOR GAS PANGGILAN & BERGARANSI",
    description:
      "Tidak perlu repot membawa kompor ke bengkel! Tim teknisi profesional kami siap datang langsung ke lokasi Anda untuk memperbaiki kompor gas dengan cepat dan efisien. Kami memberikan jaminan kualitas melalui garansi untuk setiap layanan yang kami kerjakan.",
    image: "/images/lyn1.jpeg",
  },
  {
    title: "SERVICE KOMPOR FREESTANDING",
    description:
      "Layanan service kompor freestanding kami mencakup perbaikan dan pemeliharaan untuk memastikan kinerja optimal, termasuk masalah nyala api, kebocoran gas, dan gangguan teknis lainnya. Tim teknisi kami siap memberikan solusi cepat dan profesional.",
    image: "/images/lyn2.jpeg",
  },
  {
    title: "SERVICE KOMPOR TANAM",
    description:
      "Layanan service kompor tanam kami meliputi perbaikan dan pemeliharaan kompor tanam untuk memastikan kinerja optimal. Tim teknisi ahli kami siap menangani masalah seperti nyala api yang tidak stabil, kebocoran gas, dan masalah teknis lainnya dengan cepat dan profesional.",
    image: "/images/lyn3.jpeg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12"
        >
          Layanan Kami
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="/images/jybylg.png" alt="Logo" className="h-12 w-auto" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {service.description}
                </p>
                <a
                  href={getWhatsAppLink(`Halo, saya ingin bertanya tentang ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#f5e6a3] hover:bg-[#e8d88f] text-slate-800 font-semibold px-6 py-2 rounded transition-colors"
                >
                  HUBUNGI KAMI
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
