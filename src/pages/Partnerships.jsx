import React from 'react'
import { partnerships } from '../data/communityData'
import SEOHead from '../components/SEOHead'
import ContextualForm from '../components/ContextualForm'
import { Handshake, HelpCircle, CheckCircle2, Sparkles } from 'lucide-react'

export default function Partnerships() {
  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Partnership Programs" 
        description="Collaborate with A and I Pathshala Global. We offer integration models for universities, NGOs, startups, and government groups."
        path="/partnerships"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Handshake size={12} /> ENTERPRISE ALLIANCE
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Academic &amp; Corporate Partnerships
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            We establish custom agreements with universities, technology companies, NGOs, and government agencies to accelerate digital innovation.
          </p>
        </div>
      </section>

      {/* Target Sectors Board */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Alignment Sectors</span>
          <h2 className="font-display text-3xl font-bold text-slate-950">Who We Partner With</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerships.map((partner, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Handshake size={18} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">{partner.sector}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{partner.benefit}</p>
              </div>

              <div className="border-t border-slate-50 pt-5 mt-6 space-y-2">
                <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-wider">Collaboration Framework:</h4>
                <p className="text-blue-600 text-xs font-semibold">{partner.model}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cooperation Benefits Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-slate-950">Partnership Advantages</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Establishing a formal relationship with our center grants your organization early access to open-source software, computing infrastructure, and technical expertise.
            </p>
            <ul className="space-y-3.5">
              {[
                'Access to on-premise GPU clusters for testing neural network adapters.',
                'ISO-compliant code quality and rigorous security audits for SaaS releases.',
                'Assistance compiling and cleaning custom regional language datasets.',
                'Direct channel to recruit pre-screened graduates and junior devs.'
              ].map(benefit => (
                <li key={benefit} className="flex gap-3 text-xs leading-relaxed text-slate-650">
                  <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col justify-center space-y-6">
            <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle size={18} className="text-blue-600" /> Need a custom agreement?
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              We understand that institutions and companies have unique data guidelines or project scopes. We can draft custom agreements matching your compliance framework.
            </p>
          </div>
        </div>
      </section>

      {/* Alliance Request Form */}
      <section className="py-24 bg-slate-900 border-t border-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Alliance Hub</span>
            <h2 className="font-display text-4xl font-bold">Initiate Partnership Proposal</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Outline your focus area. Our directors will review the request and schedule a synchronization video call.
            </p>
          </div>

          <ContextualForm formType="collaboration" pageTitle="Partnerships Portal" />
        </div>
      </section>
    </main>
  )
}
