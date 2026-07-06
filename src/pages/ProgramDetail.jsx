import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { programsData } from '../data/programsData'
import { ArrowRight, CheckCircle2, ChevronDown, Cpu, Sparkles, Compass, Milestone, Users } from 'lucide-react'
import PremiumLanding from './PremiumLanding'

export default function ProgramDetail() {
  const { slug } = useParams()
  const [prog, setProg] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const premiumSlugs = [
    'global-partnerships'
  ]

  useEffect(() => {
    const found = programsData.find(p => p.slug === slug)
    setProg(found || null)
    setOpenFaq(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (premiumSlugs.includes(slug)) {
    return <PremiumLanding />
  }

  if (!prog) {
    return (
      <div className="pt-24 pb-20 text-center max-w-lg mx-auto px-6">
        <h1 className="font-display text-4xl font-bold mb-4 text-slate-800">Program Not Found</h1>
        <p className="text-slate-600 mb-8">We couldn't find the collaboration program you're looking for. Please browse our active offerings.</p>
        <Link to="/services" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
          Browse Programs <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  const IconComponent = prog.icon || Compass

  return (
    <main className="pt-16 page-transition bg-slate-50/50">
      {/* Hero Section */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              <Users size={12} /> Global Impact Programs
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shrink-0">
              <IconComponent size={48} className="text-blue-600" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 tracking-tight leading-tight">
                {prog.title}
              </h1>
              <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                {prog.tagline}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 max-w-3xl">
            <p className="text-slate-400 text-base leading-relaxed">
              {prog.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Program Details Columns */}
      <section className="py-20 max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        
        {/* Left: Key Objectives & Details */}
        <div className="md:col-span-2 space-y-16">
          
          {/* Key Objectives */}
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
              Program Objectives
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {prog.keyObjectives.map((obj, i) => (
                <div key={i} className="flex gap-3 bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Sub-Details */}
          {prog.details && prog.details.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
                Structure & Scope
              </h2>
              <div className="space-y-6">
                {prog.details.map((detail, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{detail.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{detail.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Step-by-Step Roadmap */}
        <div>
          <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-lg">
            <Milestone size={32} className="text-blue-600 mb-4" />
            <h3 className="font-display text-2xl font-bold mb-6">Process Timeline</h3>
            <div className="relative border-l border-slate-800 pl-4 space-y-6">
              {prog.timelineOrProcess.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* dot */}
                  <span className="absolute -left-7 top-0.5 w-6 h-6 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center text-xs font-bold text-blue-600 shadow-xs">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {prog.faqs.map((faq, idx) => {
              const active = openFaq === idx
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => setOpenFaq(active ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 hover:text-blue-600 transition-colors bg-slate-50/50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${active ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {active && (
                    <div className="px-6 py-5 border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-linear-to-br from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.15),transparent)]" />
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl font-bold mb-4 leading-tight">Connect with our program teams</h2>
          <p className="text-blue-100 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Get in touch with our program coordinators to apply for internships, set up partnerships, or register for incubation.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-blue-800/20 hover:scale-[1.02] transition-all duration-200">
            Submit Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
