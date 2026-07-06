import React, { useState } from 'react'
import { learningPaths, glossary, toolDirectories } from '../data/knowledgeData'
import SEOHead from '../components/SEOHead'
import ContextualForm from '../components/ContextualForm'
import { Search, BookOpen, Cpu, ShieldCheck, ChevronRight, HelpCircle, Sparkles } from 'lucide-react'

export default function KnowledgeHub() {
  const [activePath, setActivePath] = useState('beginner')
  const [searchQuery, setSearchQuery] = useState('')

  const activePathData = learningPaths.find(p => p.type === activePath)

  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Knowledge Hub & AI Library" 
        description="Browse A and I Pathshala Global's technical glossary, beginner/advanced programming learning paths, and best practices."
        path="/knowledge-hub"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <BookOpen size={12} /> KNOWLEDGE CENTER
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            AI Resource Library &amp; Knowledge Hub
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Access free learning paths, search our technical entity glossary, and review enterprise frameworks.
          </p>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Education Syllabus Maps</span>
          <h2 className="font-display text-3xl font-bold text-slate-950">Structured Learning Paths</h2>
        </div>

        {/* Path Toggles */}
        <div className="flex gap-2 justify-center mb-12">
          {[
            { id: 'beginner', name: 'Software & Web Foundations' },
            { id: 'advanced', name: 'AI & Cryptography Engineering' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActivePath(tab.id)}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activePath === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Path Milestones */}
        {activePathData && (
          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs max-w-3xl mx-auto space-y-8">
            <h3 className="font-display text-xl font-bold text-slate-900 border-b border-slate-50 pb-4">
              {activePathData.title}
            </h3>
            
            <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-10">
              {activePathData.milestones.map((item, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-11.5 top-0.5 w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
                    {item.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{item.topic}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-xl">
                    {item.details || item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Searchable Technical Glossary (Entity SEO Hub) */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Entity Search Engine</span>
            <h2 className="font-display text-3xl font-bold text-slate-950">Technical Entity Glossary</h2>
            <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
              Search definitions and cryptographic acronyms to build technical vocabulary.
            </p>

            {/* Glossary Search Input */}
            <div className="relative max-w-md mx-auto pt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 mt-2" size={16} />
              <input
                type="text"
                placeholder="Type term (e.g. pgvector, RAG, zk-SNARK)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 bg-slate-50 text-slate-800 text-sm transition-all"
              />
            </div>
          </div>

          {/* Glossary Results List */}
          {filteredGlossary.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl p-6 max-w-xs mx-auto">
              <p className="text-slate-400 text-xs">No matching glossary terms found.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-bold text-slate-900 text-sm">
                      {item.term} <span className="text-blue-650 font-semibold">({item.abbreviation})</span>
                    </h4>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.definition}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tool Directories & Framework Lists */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Framework Catalogs</span>
          <h2 className="font-display text-3xl font-bold text-slate-950">Recommended Engineering Tools</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {toolDirectories.map((dir, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Cpu size={18} />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 leading-snug">{dir.category}</h3>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {dir.tools.map(tool => (
                    <span key={tool} className="bg-slate-50 border border-slate-150 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus request form */}
      <section className="py-24 bg-slate-900 border-t border-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Resource Registry</span>
            <h2 className="font-display text-4xl font-bold">Request Training Curriculum Syllabus</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Submit your details. We will automatically route the complete course schedule and textbook PDF targets to your inbox.
            </p>
          </div>

          <ContextualForm formType="registration" pageTitle="Knowledge Hub Portal" />
        </div>
      </section>
    </main>
  )
}
