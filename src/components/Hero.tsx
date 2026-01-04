import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/herofd.png)",
        }}
      />

      {/* White Overlay - 50% opacity */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900"
          >
            F&D Pest Control
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-900 max-w-3xl mx-auto font-medium"
          >
            Jasa Pembasmi Hama dan Serangga Mitra SPPG MBG
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <Button
              size="lg"
              className="text-lg px-12 py-7 bg-red-400 hover:bg-red-500 text-slate-900 font-bold rounded-full shadow-xl"
              onClick={() => {
                const element = document.querySelector("#reservation-form");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hubungi
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
