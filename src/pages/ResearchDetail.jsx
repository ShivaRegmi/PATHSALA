import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { researchData } from '../data/researchData'
import { ArrowRight, CheckCircle2, ChevronDown, Cpu, Sparkles, FileText, Beaker, HelpCircle } from 'lucide-react'
import PremiumLanding from './PremiumLanding'

export default function ResearchDetail() {
  const { slug } = useParams()
  const [research, setResearch] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  const premiumSlugs = [
    'ai-research',
    'digital-transformation-research'
  ]

  useEffect(() => {
    const found = researchData.find(r => r.slug === slug)
    setResearch(found || null)
    setOpenFaq(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (premiumSlugs.includes(slug)) {
    return <PremiumLanding />
  }

  if (!research) {
    return (
      <div className="pt-24 pb-20 text-center max-w-lg mx-auto px-6">
        <h1 className="font-display text-4xl font-bold mb-4 text-slate-800">Research Focus Not Found</h1>
        <p className="text-slate-600 mb-8">We couldn't find the research department or section you're looking for. Please browse our active offerings.</p>
        <Link to="/services" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
          Browse Research <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  const IconComponent = research.icon || Beaker

  return (
    <main className="pt-16 page-transition bg-slate-50/50">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-400/20 px-4 py-2 rounded-full">
              <Beaker size={12} /> FUTURE RESEARCH CENTER
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shrink-0">
              <IconComponent size={48} className="text-indigo-400" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 tracking-tight leading-tight">
                {research.title}
              </h1>
              <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                {research.tagline}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 max-w-3xl">
            <p className="text-slate-400 text-base leading-relaxed">
              {research.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="py-20 max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        
        {/* Left: Active Projects & Publications */}
        <div className="md:col-span-2 space-y-16">
          
          {/* Active Projects */}
          {research.activeProjects && research.activeProjects.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
                Active Research Projects
              </h2>
              <div className="space-y-4">
                {research.activeProjects.map((proj, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{proj.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{proj.description}</p>
                    </div>
                    <span className="inline-flex shrink-0 self-start sm:self-center text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600">
                      {proj.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications */}
          {research.publications && research.publications.length > 0 && (
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <FileText size={24} className="text-indigo-600" /> Scientific Publications
              </h2>
              <div className="space-y-4">
                {research.publications.map((pub, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:border-indigo-200 transition-all duration-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug">{pub.title}</h3>
                    <p className="text-slate-400 text-xs font-medium mb-3">Authors: {pub.authors}</p>
                    <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3 mt-3">
                      <span className="text-slate-500 italic">{pub.journal} ({pub.year})</span>
                      <a href={pub.link} className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
                        Read Paper <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Labs & Collaborators */}
        <div className="space-y-12">
          
          {/* Labs */}
          {research.labs && research.labs.length > 0 && (
            <div className="bg-slate-900 rounded-3xl p-8 text-white border border-slate-800 shadow-lg">
              <Beaker size={32} className="text-indigo-400 mb-4" />
              <h3 className="font-display text-2xl font-bold mb-4">Dedicated Labs</h3>
              <ul className="space-y-3">
                {research.labs.map(lab => (
                  <li key={lab} className="flex items-center gap-2.5 text-slate-600 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {lab}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Collaborations */}
          {research.collaborators && research.collaborators.length > 0 && (
            <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl shadow-indigo-500/10">
              <h3 className="font-display text-2xl font-bold mb-6">Key Collaborators</h3>
              <ul className="space-y-4">
                {research.collaborators.map((collab, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-indigo-100">
                    <CheckCircle2 size={16} className="text-cyan-300 shrink-0 mt-0.5" />
                    <span>{collab}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {research.faqs.map((faq, idx) => {
              const active = openFaq === idx
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => setOpenFaq(active ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-800 hover:text-indigo-600 transition-colors bg-slate-50/50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${active ? 'rotate-180 text-indigo-600' : ''}`} />
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
      <section className="py-20 bg-linear-to-br from-indigo-600 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent)]" />
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl font-bold mb-4 leading-tight">Collaborate on future technologies</h2>
          <p className="text-indigo-100 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Partner with our researchers to co-author scientific findings, run database projects, or build open-source tools.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-indigo-800/20 hover:scale-[1.02] transition-all duration-200">
            Submit Partnership Proposal <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
