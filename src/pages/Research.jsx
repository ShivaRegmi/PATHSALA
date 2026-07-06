import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Beaker, BookOpen, FileText, Sparkles, ArrowRight, CheckCircle2, Award, Users } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ContextualForm from '../components/ContextualForm'
import { researchData } from '../data/researchData'

export default function Research() {
  const [activeTab, setActiveTab] = useState('all')

  const labs = [
    {
      name: 'Computational Linguistics Lab',
      desc: 'Focuses on morphological analyzers, grammar-parser rules, and transformer-based semantic encoders for Sanskrit and South Asian languages.',
      lead: 'Shiva Regmi'
    },
    {
      name: 'Decentralized Cryptography Lab',
      desc: 'Develops privacy-preserving credential registries using zero-knowledge proofs (zk-SNARKs) and distributed hash tables.',
      lead: 'Biraj Devkota'
    },
    {
      name: 'Future Systems Lab',
      desc: 'Researches resource-efficient training algorithms, local LLM fine-tuning pipelines, and compiler optimizations for edge devices.',
      lead: 'Yujan Adhikari'
    }
  ]

  const publications = [
    {
      title: 'Digital Matrix Mandala: Grammatical Tokenizer Models for Sanskrit Classical Texts',
      authors: 'S. Regmi, Y. Adhikari',
      journal: 'Presented at the 19th World Sanskrit Conference (WSC 2025)',
      year: '2025',
      category: 'nlp'
    },
    {
      title: 'Decentralized Student Credentials Registry using Zero-Knowledge Proofs on Public Ledgers',
      authors: 'B. Devkota, S. Regmi',
      journal: 'International Journal of Decentralized Identity (IJDI)',
      year: '2024',
      category: 'cryptography'
    },
    {
      title: 'QLoRA Optimization Sprints for Low-Resource Translation: Case Study Nepali Llama',
      authors: 'Y. Adhikari, B. Devkota',
      journal: 'IEEE Conference on Computational Linguistics & AI',
      year: '2024',
      category: 'nlp'
    },
    {
      title: 'Structured Metadata Schemas for Palm-Leaf Manuscript Digitization',
      authors: 'S. Regmi, L. Shrestha',
      journal: 'Journal of Digital Humanities Research',
      year: '2023',
      category: 'systems'
    }
  ]

  const filteredPubs = activeTab === 'all'
    ? publications
    : publications.filter(p => p.category === activeTab)

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Research Center & Labs" 
        description="Explore A and I Pathshala Global's academic research, computational indology tokenizers, zero-knowledge proofs, and scientific publications."
        path="/research"
      />

      {/* Hero Section */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Beaker size={12} /> FUTURE RESEARCH CENTER
          </span>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight">
            Advancing Open Science &amp; Computational Humanities
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We bridge classic grammar models with deep learning systems, zero-knowledge cryptography, and semantic indexing databases to preserve heritage and optimize compute.
          </p>
        </div>
      </section>

      {/* Active Labs */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Innovation Hubs</span>
          <h2 className="font-display text-4xl font-bold text-slate-900">Our Innovation Labs</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Our teams operate in three specialized research environments, collaborating with local and international partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {labs.map((lab, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Beaker size={18} />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-950 leading-snug">{lab.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{lab.desc}</p>
              </div>
              <div className="border-t border-slate-50 pt-4 mt-6 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Director: {lab.lead}</span>
                <span className="text-blue-600">Active</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-display text-3xl font-bold text-slate-950">Scientific Publications</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We publish our findings in peer-reviewed journals and present at international computer science conferences.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-col gap-2 pt-4">
              {[
                { id: 'all', name: 'All Publications' },
                { id: 'nlp', name: 'NLP & Tokenizers' },
                { id: 'cryptography', name: 'ZK & Cryptography' },
                { id: 'systems', name: 'System Architectures' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {filteredPubs.map((pub, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl flex gap-4 items-start hover:border-slate-200 transition-colors">
                <div className="p-3 bg-white border border-slate-100 rounded-xl text-blue-600 shrink-0">
                  <FileText size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-base font-bold text-slate-900 leading-snug">{pub.title}</h3>
                  <p className="text-xs text-slate-500 font-medium">Authors: {pub.authors}</p>
                  <p className="text-xs text-slate-400 italic">{pub.journal} &bull; {pub.year}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Dynamic Research Detail Directory Links */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Research Branches</span>
          <h2 className="font-display text-3xl font-bold text-slate-950">Explore Research Divisions</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((res, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
              <div>
                <h4 className="font-display text-base font-bold text-slate-950 mb-2">{res.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">{res.overview}</p>
              </div>
              <Link 
                to={`/research/${res.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                View Research Program <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Form */}
      <section className="py-24 bg-slate-900 border-t border-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Collaborative Network</span>
            <h2 className="font-display text-4xl font-bold">Initiate Research Partnership</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              We collaborate with global universities, scholars, and language organizations on open-source initiatives and joint studies.
            </p>
          </div>

          <ContextualForm formType="collaboration" pageTitle="Research Center Portal" />
        </div>
      </section>
    </main>
  )
}
