import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 XXX XXXXXXX", "+92 XXX XXXXXXX"],
      gradient: "from-blue-600 to-blue-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@naturewater.com.pk", "orders@naturewater.com.pk"],
      gradient: "from-cyan-600 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Pakistan"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 6:00 PM"],
      gradient: "from-emerald-600 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-xl shadow-blue-500/10">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse"></div>
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text">
              Contact Us
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl tracking-tight">
            <span className="text-slate-900">Get In</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Touch</span>
          </h2>
          
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions or ready to place an order? We're here to help!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="group relative border-0 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                {/* Glass effect background */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent"></div>
                
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-white/30 p-[1px]">
                  <div className="absolute inset-[1px] rounded-2xl bg-transparent"></div>
                </div>
                
                {/* Glossy highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl"></div>
                
                <CardContent className="relative p-6 space-y-4">
                  {/* Icon */}
                  <div className="relative inline-flex">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                    <div className={`relative w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                      <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-slate-900">{info.title}</h3>
                  
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact form */}
        <Card className="relative border-0 overflow-hidden max-w-4xl mx-auto">
          {/* Glass effect background */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/50 to-transparent"></div>
          
          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 via-transparent to-blue-500/10 p-[1px]">
            <div className="absolute inset-[1px] rounded-3xl bg-transparent"></div>
          </div>
          
          {/* Glossy highlight */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-3xl"></div>
          
          <CardContent className="relative p-12">
            <div className="text-center mb-10 space-y-3">
              <h3 className="text-3xl text-slate-900">Send Us a Message</h3>
              <p className="text-slate-600 text-lg">Fill out the form below and we'll get back to you soon</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-700">Your Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-white/80 backdrop-blur-sm border-white/60 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700">Phone Number</label>
                  <Input 
                    type="tel" 
                    placeholder="+92 XXX XXXXXXX" 
                    className="bg-white/80 backdrop-blur-sm border-white/60 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-700">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/80 backdrop-blur-sm border-white/60 focus:border-blue-500 focus:ring-blue-500/20 shadow-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-700">Your Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..." 
                  rows={6} 
                  className="bg-white/80 backdrop-blur-sm border-white/60 focus:border-blue-500 focus:ring-blue-500/20 resize-none shadow-sm"
                />
              </div>
              
              <Button className="w-full relative overflow-hidden group py-7 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}