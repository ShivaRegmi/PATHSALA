import React from 'react'
import { futureForecasts, experimentalProjects } from '../data/visionData'
import SEOHead from '../components/SEOHead'
import ContextualForm from '../components/ContextualForm'
import { Eye, TrendingUp, Beaker, CheckCircle2, Cpu, ArrowRight } from 'lucide-react'

export default function FutureVision() {
  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="AI Future Vision Center" 
        description="Review A and I Pathshala Global's technology trends, predictions, emerging workforce skills, and experimental AI projects."
        path="/future-vision"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Eye size={12} /> THOUGHT LEADERSHIP
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            AI Future Vision Center
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Exploring the next decade of cognitive computing, rule-guided language translation, decentralized validation, and future workforce skills.
          </p>
        </div>
      </section>

      {/* Tech Trends / Predictions */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">2027 - 2030 Roadmap</span>
          <h2 className="font-display text-3xl font-bold text-slate-950 font-bold">Technology Trends &amp; Forecasts</h2>
        </div>

        <div className="space-y-8">
          {futureForecasts.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs hover:shadow-lg transition-all duration-200 grid md:grid-cols-4 gap-8 items-start">
              <div className="space-y-1">
                <span className="text-blue-650 text-xs font-bold uppercase tracking-wider">{item.timeline}</span>
                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">{item.trend}</h3>
              </div>
              
              <div className="md:col-span-2 text-slate-500 text-xs leading-relaxed">
                {item.description}
              </div>

              <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-5 md:pt-0 md:pl-8 text-xs">
                <span className="text-slate-400 font-bold uppercase tracking-wider block mb-2">Core Skills Required:</span>
                <span className="text-blue-650 font-semibold">{item.skills}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experimental Labs Projects */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Innovation Showcase</span>
            <h2 className="font-display text-3xl font-bold text-slate-950">Active Experimental Programs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experimentalProjects.map((proj, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Beaker size={18} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">{proj.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{proj.objective}</p>
                </div>

                <div className="border-t border-slate-200 pt-5 mt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-slate-400">Status: {proj.status}</span>
                  <span className="text-blue-650">{proj.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Skills Framework */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-slate-950">The Future Workforce Skill Map</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Standard software engineering degrees must evolve. We prepare our cohorts in advanced machine learning operations, neural compilation, and zero-knowledge registry logic.
            </p>
            
            <div className="space-y-3.5">
              {[
                'Prompt Auditing & Safety Guard Design (sanitizing prompt contexts).',
                'Quantized Inference & Edge Model Optimization (onnx, gguf compiler sizing).',
                'Vector Database Configuration & pgvector Index Tuning.',
                'Cryptographic verification script compilation (zk-SNARK adapters).'
              ].map(skill => (
                <div key={skill} className="flex gap-3 text-xs leading-relaxed text-slate-650 font-medium">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            <Cpu className="text-blue-600" size={42} />
            <h3 className="font-display text-2xl font-bold">Thought Leadership Retainers</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Our directors consult corporate boards and university councils on updating technical curricula to match global workforce requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation inquiry form */}
      <section className="py-24 bg-slate-900 border-t border-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Consulting Hub</span>
            <h2 className="font-display text-4xl font-bold">Schedule Strategic Scoping Session</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Discuss system updates, AI integrations, or technical training sprints with our senior engineering architects.
            </p>
          </div>

          <ContextualForm formType="consultation" pageTitle="Future Vision Center Portal" />
        </div>
      </section>
    </main>
  )
}
