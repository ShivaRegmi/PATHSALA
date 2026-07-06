import React from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import { ArrowRight, Layers, Cpu, Sparkles } from 'lucide-react'

export default function Services() {
  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Sparkles size={12} /> ENTERPRISE CAPABILITIES
          </span>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight">
            Our IT &amp; Educational Services
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver state-of-the-art software systems, deep learning training, academic consulting, and language classes tailored to global standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((serv, idx) => {
            const IconComp = serv.icon || Cpu
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {serv.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-4 mb-6">
                    {serv.overview}
                  </p>
                </div>
                
                <Link 
                  to={`/services/${serv.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-white font-bold text-xs py-3.5 rounded-xl transition-all duration-200"
                >
                  Explore Details <ArrowRight size={14} />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="font-display text-4xl font-bold leading-tight">
            Ready to integrate a solution?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
            Our senior software consultants will guide you through system architecture, stack selection, and project roadmaps to ensure a successful release.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-yellow-400/10 hover:scale-[1.02] transition-all duration-200"
          >
            Start Your Consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}