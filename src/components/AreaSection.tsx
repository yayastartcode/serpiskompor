import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const areas = [
  {
    region: "Jabodetabek",
    cities: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
  },
  {
    region: "Jawa Barat",
    cities: [
      "Tambun", "Cibitung", "Cikarang", "Karawang Barat", "Karawang Timur",
      "Cikampek", "Purwakarta", "Subang", "Sumedang", "Kota Bandung",
      "Kabupaten Bandung", "Bandung Barat", "Cianjur", "Cipanas", "Sukabumi",
    ],
  },
  {
    region: "Banten",
    cities: [
      "Serang", "Pandeglang", "Rangkasbitung", "Lebak", "Cilegon",
      "Kragilan", "Balaraja", "Cikupa",
    ],
  },
];

export function AreaSection() {
  return (
    <section className="py-20 bg-[#f5f0e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            JANGKAUAN LAYANAN KAMI
          </h2>
          <p className="text-slate-600">Kami melayani panggilan di wilayah:</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="bg-[#3d3d3d] py-3 px-4">
                <h3 className="text-[#c9a227] font-bold text-center text-lg">
                  {area.region}
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {area.cities.map((city, i) => (
                  <div key={i} className="flex items-center gap-2 py-1 border-b border-gray-100 last:border-0">
                    <CheckCircle className="w-5 h-5 text-[#3d3d3d]" />
                    <span className="text-slate-700">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
