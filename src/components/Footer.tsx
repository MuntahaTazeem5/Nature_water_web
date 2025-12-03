import { Droplet, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { WaveBackground } from "./WaveBackground";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-600/20 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Wave effect */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180 opacity-20">
        <WaveBackground />
      </div>
      
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                  <Droplet className="w-7 h-7 text-white drop-shadow-lg" />
                  <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white tracking-tight text-xl">Nature Water</span>
                <span className="text-[10px] text-cyan-400 tracking-widest uppercase">Premium Quality</span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed">
              Delivering pure, natural mineral water to your doorstep since 2014. Quality you can trust.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="group relative w-11 h-11 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
                  <Icon className="w-5 h-5 text-slate-300 group-hover:text-white relative z-10 group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-6">
            <h3 className="text-white relative inline-block">
              Our Products
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3 text-slate-400">
              {['500ml Bottles', '1.5L Bottles', '19L Dispensers', 'Bulk Orders'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 group cursor-pointer hover:text-cyan-400 transition-colors">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white relative inline-block">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 group cursor-pointer hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>+92 XXX XXXXXXX</p>
                  <p>+92 XXX XXXXXXX</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group cursor-pointer hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>info@naturewater.com.pk</p>
                  <p>orders@naturewater.com.pk</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 group cursor-pointer hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <p>Pakistan</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Nature Water. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 group"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <ArrowUp className="w-6 h-6 text-white" />
          <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
      </button>
    </footer>
  );
}