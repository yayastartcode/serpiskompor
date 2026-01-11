import { motion } from "motion/react";
import { Settings, Phone, Package, Grid3X3 } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "BERPENGALAMAN",
    description:
      "Tim kami terdiri dari teknisi ahli yang memiliki pengalaman bertahun-tahun dalam menangani berbagai jenis dan merek kompor gas",
  },
  {
    icon: Phone,
    title: "RESPON CEPAT",
    description:
      "Kami menyediakan layanan dengan respon cepat untuk memastikan kompor Anda kembali berfungsi normal secepat mungkin",
  },
  {
    icon: Package,
    title: "HARGA TERJANGKAU",
    description:
      "Kami menawarkan layanan dengan harga kompetitif tanpa mengorbankan kualitas dan semua berlaku di segala jenis dan merk kompor gas",
  },
  {
    icon: Grid3X3,
    title: "SUKU CADANG ASLI",
    description:
      "Untuk memastikan hasil perbaikan tahan lama, kami hanya menggunakan suku cadang asli dan berkualitas tinggi serta bergaransi",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#f5f0e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            MENGAPA HARUS PILIH KAMI..?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#3d3d3d] rounded-xl p-6 text-center"
            >
              <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-red-500 font-bold text-lg mb-3 italic">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
