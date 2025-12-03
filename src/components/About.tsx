import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, Info, Building2, Users, Target } from "lucide-react";

export function About() {
  const values = [
    "Commitment to purity and quality",
    "Sustainable and eco-friendly practices",
    "Customer satisfaction guaranteed",
    "State-of-the-art purification process",
    "Regular quality testing and certification",
    "Transparent sourcing and production"
  ];

  const stats = [
    { icon: Building2, value: "10+", label: "Years in Business" },
    { icon: Users, value: "50K+", label: "Satisfied Customers" },
    { icon: Target, value: "99.9%", label: "Purity Level" }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content side */}
          <div className="space-y-10">
            {/* Section header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-xl shadow-blue-500/10">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
                <Info className="w-4 h-4 text-blue-600" />
                <span className="text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text">
                  About Us
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl tracking-tight leading-tight">
                <span className="text-slate-900">Delivering Purity</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Since 2014</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-slate-600 text-xl leading-relaxed">
                  Nature Water has been a trusted name in Pakistan for over a decade, providing 
                  pure, natural mineral water to thousands of satisfied customers.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We source our water from protected natural springs and use advanced purification 
                  technology to ensure every drop meets the highest standards of purity and taste.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="relative bg-white/60 backdrop-blur-2xl rounded-2xl p-5 border border-white/60 shadow-lg hover:shadow-xl transition-all">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl"></div>
                    <div className="relative space-y-2 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl tracking-tight">{stat.value}</p>
                      <p className="text-slate-600 text-sm leading-tight">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="relative group">
                  <div className="relative bg-white/60 backdrop-blur-2xl rounded-xl p-4 border border-white/60 shadow-sm hover:shadow-lg transition-all">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div>
                    <div className="relative flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 leading-relaxed">{value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-[3rem] blur-3xl"></div>
            
            {/* Glass card */}
            <div className="relative bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-4 shadow-2xl border border-white/60 group hover:scale-[1.02] transition-transform duration-500">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-transparent to-blue-500/10"></div>
              
              {/* Glossy highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-[2.5rem]"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1714408623820-afceca24f1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3ByaW5nJTIwd2F0ZXJ8ZW58MXx8fHwxNzY0NTcwNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Natural Spring"
                  className="rounded-[2rem] w-full h-auto object-cover"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}