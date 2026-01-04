import { Bug, Rat, Shield, Wind, CircleDot, Snail, Zap } from "lucide-react";

export function Footer() {
  const services = [
    { name: "Jasa Pembasmi Hama", icon: Bug },
    { name: "Jasa Fogging", icon: Wind },
    { name: "Jasa Anti Rayap", icon: Shield },
    { name: "Jasa Pembasmi Tawon", icon: CircleDot },
    { name: "Jasa Pembasmi Tikus", icon: Rat },
    { name: "Jasa Pembasmi Lalat", icon: Bug },
    { name: "Jasa Pembasmi Kutu", icon: Snail },
    { name: "Jasa Basmi Ular", icon: Zap },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src="/images/fndlg.png"
              alt="Jagahama Logo"
              className="h-16 w-auto object-contain mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-slate-400 leading-relaxed mb-4">
              Solusi profesional untuk pengendalian hama di Jakarta. Kami
              berkomitmen memberikan layanan terbaik untuk kenyamanan Anda.
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
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <service.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">
                    {service.name}
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
              © {currentYear} F&D Pest Control. All rights reserved.
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
