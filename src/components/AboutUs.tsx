import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/kmpr1.jpeg",
  "/images/kmpr5.jpeg",
  "/images/kmpr7.jpeg",
];

export function AboutUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-[500px]">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`About ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            {/* Navigation */}
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-slate-900">Tentang Kami</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Prabu Jayabaya adalah penyedia jasa service kompor gas panggilan
              yang terpercaya dan bergaransi, dengan komitmen untuk memberikan
              layanan terbaik kepada pelanggan di berbagai wilayah Indonesia.
              Dengan pengalaman bertahun-tahun, kami telah membantu ribuan
              pelanggan mengatasi berbagai masalah kompor gas mereka, mulai dari
              perbaikan hingga penggantian suku cadang.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kami percaya bahwa kepuasan pelanggan adalah prioritas utama,
              sehingga setiap layanan yang kami tawarkan selalu mengedepankan
              profesionalisme, kualitas, dan efisiensi. Tim teknisi kami yang
              terlatih dan berpengalaman siap memberikan solusi tepat untuk
              semua jenis dan merek kompor gas, baik untuk keperluan rumah
              tangga, restoran, maupun usaha lainnya.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
