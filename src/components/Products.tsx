import { Droplet, Package, Truck, Check, Star, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Products() {
  const products = [
    {
      icon: Droplet,
      title: "500ml Bottles",
      description: "Perfect for on-the-go hydration",
      price: "Rs. 20",
      features: ["BPA Free", "Eco-Friendly", "Recyclable"],
      gradient: "from-blue-600 to-blue-500",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      iconBg: "from-blue-600 to-blue-500",
      popular: false
    },
    {
      icon: Package,
      title: "1.5L Bottles",
      description: "Ideal for home and office use",
      price: "Rs. 50",
      features: ["Premium Quality", "Sealed Fresh", "Easy Grip"],
      gradient: "from-cyan-600 to-cyan-500",
      bgGradient: "from-cyan-500/10 to-cyan-600/5",
      iconBg: "from-cyan-600 to-blue-600",
      popular: true
    },
    {
      icon: Truck,
      title: "19L Dispensers",
      description: "Large capacity for offices & events",
      price: "Rs. 250",
      features: ["Free Delivery", "Bulk Discount", "24/7 Support"],
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/5",
      iconBg: "from-blue-600 to-cyan-500",
      popular: false
    }
  ];

  return (
    <section id="products" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-xl shadow-blue-500/10">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
            <Package className="w-4 h-4 text-blue-600" />
            <span className="text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text">
              Our Products
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl tracking-tight">
            <span className="text-slate-900">Choose Your</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Perfect Size</span>
          </h2>
          
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            From personal bottles to large dispensers, we have the right solution for every need
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index} 
                className={`group relative border-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  product.popular ? 'lg:scale-105' : ''
                }`}
              >
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-white/30 p-[1px]">
                  <div className="absolute inset-[1px] rounded-2xl bg-transparent"></div>
                </div>
                
                {/* Glossy highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl"></div>
                
                {/* Popular badge */}
                {product.popular && (
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-60"></div>
                      <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                        <Star className="w-4 h-4 fill-white" />
                        <span>Popular</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <CardContent className="relative p-10 space-y-8">
                  {/* Icon */}
                  <div className="relative inline-flex">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.iconBg} rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${product.iconBg} rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                      <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl text-slate-900">{product.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{product.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text tracking-tight">
                      {product.price}
                    </span>
                    <span className="text-slate-500">/unit</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${product.iconBg} rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20`}>
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button className="w-full relative overflow-hidden group/btn shadow-lg hover:shadow-xl transition-all py-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient}`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity`} style={{ filter: 'hue-rotate(10deg)' }}></div>
                    <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Order Now
                      <Zap className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}