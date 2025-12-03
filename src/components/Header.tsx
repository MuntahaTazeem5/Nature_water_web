import { Droplet, Phone, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Premium glassmorphism header */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-4 flex items-center justify-between max-w-7xl relative z-10">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Droplet className="w-6 h-6 text-white drop-shadow-lg" />
              <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text tracking-tight leading-none">
              Nature Water
            </span>
            <span className="text-[10px] text-blue-600/60 tracking-widest uppercase">Premium Quality</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-2">
          {['Home', 'Products', 'About Us', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="relative px-6 py-2.5 text-slate-700 hover:text-blue-600 transition-all duration-300 group"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="tel:+92" 
            className="hidden md:flex items-center gap-2.5 px-5 py-2.5 text-slate-700 hover:text-blue-600 transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 text-blue-600" />
            </div>
            <span className="hidden xl:block">Call Us</span>
          </a>
          
          <Button className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
            <span className="relative flex items-center gap-2 z-10">
              <ShoppingCart className="w-4 h-4" />
              Order Now
            </span>
          </Button>

          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-white/40 shadow-2xl">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {['Home', 'Products', 'About Us', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-3 text-slate-700 hover:text-blue-600 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}