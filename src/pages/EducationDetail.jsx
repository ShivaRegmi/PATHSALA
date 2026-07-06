import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { educationData } from '../data/educationData'
import { ArrowRight, CheckCircle2, ChevronDown, Cpu, Sparkles, BookOpen, GraduationCap, Trophy } from 'lucide-react'

export default function EducationDetail() {
  const { slug } = useParams()
  const [prog, setProg] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const found = educationData.find(e => e.slug === slug)
    setProg(found || null)
    setOpenFaq(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!prog) {
    return (
      <div className="pt-24 pb-20 text-center max-w-lg mx-auto px-6">
        <h1 className="font-display text-4xl font-bold mb-4 text-slate-800">Program Not Found</h1>
        <p className="text-slate-600 mb-8">We couldn't find the educational program you're looking for. Please browse our active offerings.</p>
        <Link to="/services" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
          Browse Programs <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  const IconComponent = prog.icon || Cpu

  return (
    <main className="pt-16 page-transition bg-slate-50/50">
      {/* Hero Section */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              <GraduationCap size={12} /> PATHSALA Learning Pathways
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
        
        {/* Left Column: Curriculum */}
        <div className="md:col-span-2 space-y-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              Program Curriculum
            </h2>
            <div className="space-y-6">
              {prog.curriculum.map((module, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      {module.module}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800">{module.title}</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                        <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
              Who is this program for?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {prog.audience.map((aud, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 text-center shadow-xs">
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{aud}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Certification & Career Outcomes */}
        <div className="space-y-12">
          
          {/* Certification Card */}
          {prog.certifications && (
            <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
              <Trophy size={36} className="text-yellow-400 mb-4" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Verifiable Certification</span>
              <h3 className="font-display text-2xl font-bold mt-2 mb-4 leading-snug">{prog.certifications.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{prog.certifications.desc}</p>
              
              <div className="border-t border-slate-800 pt-6">
                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">Validity</div>
                <div className="text-white text-lg font-bold mt-1">{prog.certifications.validity}</div>
              </div>
            </div>
          )}

          {/* Career Outcomes */}
          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/10">
            <h3 className="font-display text-2xl font-bold mb-6">Career Opportunities</h3>
            <ul className="space-y-4">
              {prog.careerOutcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-blue-100">
                  <CheckCircle2 size={16} className="text-cyan-300 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
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
          <h2 className="font-display text-4xl font-bold mb-4 leading-tight">Begin your educational journey</h2>
          <p className="text-blue-100 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Submit your application today or speak with our academic counselors to map out your study pathway.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-blue-800/20 hover:scale-[1.02] transition-all duration-200">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
