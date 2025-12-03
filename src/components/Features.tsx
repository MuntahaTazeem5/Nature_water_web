import { Award, Shield, Leaf, Zap, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "100% Pure & Safe",
      description: "Thoroughly tested and certified by quality standards",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: Leaf,
      title: "Natural Source",
      description: "Sourced from pristine natural springs",
      gradient: "from-emerald-600 to-emerald-500"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning water recognized for excellence",
      gradient: "from-cyan-600 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep",
      gradient: "from-blue-600 to-cyan-500"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-cyan-400/10 via-blue-400/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-[3rem] blur-3xl"></div>
            
            {/* Glass card */}
            <div className="relative bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-4 shadow-2xl border border-white/60 group hover:scale-[1.02] transition-transform duration-500">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-transparent to-cyan-500/10"></div>
              
              {/* Glossy highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-[2.5rem]"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1617078313420-598dfe837f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJlJTIwbW91bnRhaW4lMjB3YXRlcnxlbnwxfHx8fDE3NjQ1NzA2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mountain Spring Water"
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating certification badge */}
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/60 group-hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-900 leading-tight">Certified</p>
                    <p className="text-slate-600 text-sm">ISO 9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div className="space-y-12 order-1 lg:order-2">
            {/* Section header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-xl shadow-blue-500/10">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text">
                  Why Choose Us
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl tracking-tight leading-tight">
                <span className="text-slate-900">The Nature Water</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Difference</span>
              </h2>
              
              <p className="text-slate-600 text-xl leading-relaxed">
                We are committed to providing the highest quality water through sustainable practices 
                and rigorous quality control measures.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    {/* Glass card */}
                    <div className="relative bg-white/60 backdrop-blur-2xl rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Glossy highlight */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl"></div>
                      
                      {/* Hover gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                      
                      <div className="relative flex gap-5 items-start">
                        {/* Icon */}
                        <div className="relative flex-shrink-0">
                          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                          <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                            <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-2 flex-1 pt-1">
                          <h3 className="text-xl text-slate-900">{feature.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}