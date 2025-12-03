import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, TrendingUp, Award, Play, ChevronRight } from "lucide-react";
import { WaveBackground } from "./WaveBackground";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Luxury gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
      
      {/* Wave background */}
      <WaveBackground />
      
      <div className="container mx-auto px-6 lg:px-8 py-32 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-xl shadow-blue-500/10 group hover:shadow-2xl hover:shadow-blue-500/20 transition-all cursor-pointer">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform" />
              <span className="text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text">
                100% Pure & Natural
              </span>
              <div className="w-6 h-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                <ChevronRight className="w-3 h-3 text-blue-600" />
              </div>
            </div>
            
            {/* Hero heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95]">
                <span className="block text-slate-900 drop-shadow-sm">Pure Water,</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text mt-2 relative">
                  Healthy Life
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-transparent rounded-full opacity-30"></div>
                </span>
              </h1>
              <p className="text-slate-600 text-xl leading-relaxed max-w-xl">
                Experience the refreshing taste of Nature Water - sourced from pristine natural springs 
                and delivered fresh to your doorstep. Quality you can trust, purity you can taste.
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="relative overflow-hidden group px-10 py-7 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Order Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="px-10 py-7 border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-blue-300 transition-all shadow-lg hover:shadow-xl group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                  </div>
                  <span className="text-slate-700">Watch Video</span>
                </div>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: TrendingUp, value: "10+", label: "Years Experience", color: "from-blue-600 to-blue-500" },
                { icon: Award, value: "50K+", label: "Happy Customers", color: "from-cyan-600 to-cyan-500" },
                { icon: Sparkles, value: "100%", label: "Pure Water", color: "from-blue-600 to-cyan-500" }
              ].map((stat, index) => (
                <div key={index} className="space-y-3 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-transparent bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-3xl tracking-tight">{stat.value}</span>
                  </div>
                  <p className="text-slate-600 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero image with premium glass effect */}
          <div className="relative lg:pl-12">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-[3rem] blur-3xl transform rotate-6 scale-105"></div>
            
            {/* Glass card */}
            <div className="relative bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-4 shadow-2xl border border-white/60 group hover:scale-[1.02] transition-transform duration-500">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-transparent to-blue-500/10"></div>
              
              {/* Glossy highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-[2.5rem]"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1759240142878-9c5229cbe3c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhciUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc2NDU3MDYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nature Water Bottle"
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating quality badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/60 group-hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 leading-tight">Premium</p>
                    <p className="text-slate-600 text-sm">Quality Assured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}