import { Flame } from "lucide-react";

export function Footer() {
  const services = [
    "Service Kompor Gas Panggilan & Bergaransi",
    "Service Kompor Freestanding",
    "Service Kompor Tanam",
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src="/images/jybylg.png"
              alt="Logo"
              className="h-16 w-auto object-contain mb-4u rounded-lg p-2"
            />
            <p className="text-slate-400 leading-relaxed mb-4">
              Solusi profesional untuk service kompor gas. Kami berkomitmen
              memberikan layanan terbaik untuk kenyamanan Anda.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Layanan Kami</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors">
                    <Flame className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Prabu Jayabaya Service. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
