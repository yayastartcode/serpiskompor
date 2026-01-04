import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { getWhatsAppLink, formatWhatsAppNumber } from "@/lib/config";

export function ContactMap() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Lokasi Kami
          </h2>
          <p className="text-lg text-slate-600">
            Kunjungi kantor kami atau hubungi untuk konsultasi
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1767489887281!6m8!1m7!1sAmG5L9H48px1AA8myVGrdA!2m2!1d-6.268964319080299!2d106.8086046846237!3f282.4!4f-3.480000000000004!5f0.7820865974627469"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Alamat Kantor
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Jl. Pangeran Antasari No. 88, RT6/RW2, Cipete Selatan,
                    Cilandak Barat
                    <br />
                    Kec. Cilandak
                    <br />
                    Jakarta Selatan DKI Jakarta
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Hubungi Kami
                  </h3>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    {formatWhatsAppNumber()}
                  </a>
                  <p className="text-slate-600 mt-2 text-sm">
                    Klik untuk chat via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-slate-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Jam Operasional
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-medium">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-medium">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-medium text-red-600">Tutup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
