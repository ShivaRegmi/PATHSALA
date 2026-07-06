import React, { useState, useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { landingPagesData } from '../data/landingPagesData'
import SEOHead from '../components/SEOHead'
import ContextualForm from '../components/ContextualForm'
import { ArrowRight, CheckCircle2, ChevronDown, Cpu, Sparkles, AlertCircle, Quote } from 'lucide-react'

export default function PremiumLanding() {
  const { slug } = useParams()
  const location = useLocation()
  const [page, setPage] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const found = landingPagesData.find(p => p.slug === slug)
    setPage(found || null)
    setOpenFaq(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!page) {
    return (
      <div className="pt-24 pb-20 text-center max-w-lg mx-auto px-6">
        <h1 className="font-display text-4xl font-bold mb-4 text-slate-800">Landing Page Not Found</h1>
        <p className="text-slate-600 mb-8">We couldn't find the requested program landing page. Please verify your URL or visit our catalog.</p>
        <Link to="/services" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
          Browse Catalog <ArrowRight size={16} />
        </Link>
      </div>
    )
  }

  const IconComponent = page.icon || Cpu

  return (
    <main className="pt-16 page-transition bg-slate-50/50">
      {/* Dynamic SEO Injector */}
      <SEOHead 
        title={page.title} 
        description={page.problemStatement} 
        path={location.pathname} 
        faqSchema={page.faqs}
      />

      {/* Premium Hero Section */}
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
              <Sparkles size={12} /> {page.hero.tagBadge}
            </span>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="p-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shrink-0 self-start sm:self-center">
                <IconComponent size={36} className="text-blue-600" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {page.title}
              </h1>
            </div>

            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              {page.hero.tagline}
            </p>

            <div className="flex gap-4 pt-2">
              <a 
                href="#inquiry-form" 
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                Discuss Requirements <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Metrics Stat Badge */}
          <div className="md:col-span-4 bg-slate-950/80 backdrop-blur-md rounded-3xl border border-slate-850 p-6 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-full blur-xl" />
            <div className="text-blue-600 text-4xl font-bold mb-1">{page.hero.statValue}</div>
            <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">{page.hero.statText}</div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Comparison Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Problem */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-red-100/50 border border-red-200 flex items-center justify-center text-red-500">
                <AlertCircle size={20} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">The Industry Challenge</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{page.problemStatement}</p>
            </div>
            <div className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Bottleneck Identification</div>
          </div>

          {/* Solution */}
          <div className="bg-linear-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-xl shadow-blue-500/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-300">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display text-2xl font-bold">The Pathshala Solution</h3>
              <p className="text-blue-100 text-sm leading-relaxed">{page.solutionOverview}</p>
            </div>
            <div className="text-cyan-300 text-[11px] font-bold uppercase tracking-wider">Enterprise Architecture</div>
          </div>
        </div>
      </section>

      {/* Benefits & Key Features Grid */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Key Features */}
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold text-slate-900">Key Features &amp; Modules</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.features.map((feat, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-2xs">
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Outcomes / Benefits */}
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold text-slate-900">Measurable Benefits</h2>
            <ul className="space-y-4">
              {page.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Roadmap */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Operational Protocol</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 mt-2 mb-4">Our Deployment Process</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            We follow a structured roadmap to align requirements, test outputs, and ensure zero-fault launches.
          </p>
        </div>

        <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-12 max-w-3xl mx-auto">
          {page.process.map((step, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-11.5 top-0.5 w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-sm font-bold text-blue-600 shadow-xs">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study & Testimonial Panels */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-950">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">
          {/* Case Study */}
          <div className="bg-slate-950 border border-slate-850 p-8 rounded-3xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Proven Case Study</span>
              <h3 className="font-display text-2xl font-bold mt-2 mb-4">{page.caseStudy.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{page.caseStudy.desc}</p>
            </div>
            
            <div className="border-t border-slate-850 pt-6 mt-8 flex items-center gap-6">
              <div>
                <div className="text-blue-600 text-3xl font-bold">{page.caseStudy.result.split(' ')[0]}</div>
                <div className="text-slate-400 text-[10px] font-semibold uppercase tracking-wider">{page.caseStudy.result}</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-blue-600 rounded-3xl p-8 flex flex-col justify-between text-white relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-blue-500/30" size={80} />
            
            <div className="space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">Client Endorsement</span>
              <p className="text-lg italic leading-relaxed text-blue-100">
                "{page.testimonial.quote}"
              </p>
            </div>

            <div className="border-t border-blue-500 pt-6 mt-8 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cyan-300 font-bold shrink-0">
                {page.testimonial.author[0]}
              </div>
              <div>
                <h4 className="text-sm font-bold">{page.testimonial.author}</h4>
                <p className="text-blue-200 text-xs font-medium">{page.testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form Section */}
      <section id="inquiry-form" className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Interactive Form</span>
          <h2 className="font-display text-4xl font-bold text-slate-900">Request Custom Proposal</h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
            Outline your parameters. Our coordinators will compile system assessments or course specs for review.
          </p>
        </div>
        
        <ContextualForm formType={page.formType} pageTitle={page.title} />
      </section>

      {/* Related Resource Discoveries */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Resource Discovery</span>
            <h2 className="font-display text-3xl font-bold text-slate-950">Recommended Programs &amp; Services</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {landingPagesData
              .filter(item => item.slug !== page.slug)
              .slice(0, 3)
              .map((item, idx) => {
                const ItemIcon = item.icon || Cpu
                return (
                  <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-200">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-650 shrink-0">
                        <ItemIcon size={18} />
                      </div>
                      <h4 className="font-display font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{item.problemStatement}</p>
                    </div>
                    <Link
                      to={`/services/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 pt-4 mt-auto cursor-pointer"
                    >
                      Explore Service <ArrowRight size={12} />
                    </Link>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq, idx) => {
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
    </main>
  )
}
