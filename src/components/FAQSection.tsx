import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question:
        "Apakah melayani area Provinsi Banten, Tangerang, dan Tangerang Selatan?",
      answer:
        "Ya, kami melayani seluruh wilayah Provinsi Banten termasuk Kota Tangerang, Tangerang Selatan, Kabupaten Tangerang, Serang, Cilegon, dan sekitarnya. Tim teknisi kami siap datang ke lokasi Anda.",
    },
    {
      question: "Apakah melayani area Jabodetabek?",
      answer:
        "Ya, kami melayani seluruh wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi). Layanan panggilan tersedia untuk semua area tersebut dengan respon cepat.",
    },
    {
      question: "Apakah melayani area Bandung dan Jawa Barat?",
      answer:
        "Ya, kami juga melayani wilayah Bandung dan sekitarnya serta seluruh Provinsi Jawa Barat. Silakan hubungi kami untuk informasi lebih lanjut mengenai jadwal kunjungan ke area Anda.",
    },
    {
      question: "Berapa lama proses service kompor gas?",
      answer:
        "Proses service kompor gas biasanya memakan waktu 30 menit hingga 2 jam tergantung pada jenis kerusakan dan kondisi kompor. Tim teknisi kami akan memberikan estimasi waktu setelah melakukan pengecekan awal.",
    },
    {
      question: "Bagaimana cara memesan layanan service kompor?",
      answer:
        "Anda dapat memesan layanan kami dengan mengisi form reservasi di website ini, menghubungi kami melalui WhatsApp, atau telepon langsung. Tim kami akan segera merespon dan menjadwalkan kunjungan teknisi ke lokasi Anda.",
    },
    {
      question: "Apakah suku cadang yang digunakan original?",
      answer:
        "Ya, kami hanya menggunakan suku cadang asli dan berkualitas tinggi untuk memastikan hasil perbaikan tahan lama. Semua suku cadang juga bergaransi.",
    },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/kmpr7.jpeg)",
        }}
      />
      <div className="absolute inset-0 bg-slate-800/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 font-semibold mb-4 uppercase tracking-wide">
            FAQS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pertanyaan Seputar Jasa Service
            <br />
            Kompor Gas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border-0 shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-slate-50 transition-colors [&[data-state=open]]:bg-slate-50">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
