import React, { useState } from 'react'
import { press } from '../data/communityData'
import SEOHead from '../components/SEOHead'
import { FileText, Calendar, ArrowRight, X } from 'lucide-react'

export default function Newsroom() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedPress, setSelectedPress] = useState(null)

  const tabs = ['all', 'Announcements', 'Media Coverage']

  const filteredPress = activeTab === 'all'
    ? press
    : press.filter(p => p.category === activeTab)

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Newsroom & Press Releases" 
        description="Review A and I Pathshala Global's official announcements, press releases, media coverage, and organizational updates."
        path="/newsroom"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <FileText size={12} /> CORPORATE COMMUNICATIONS
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Newsroom &amp; Press Center
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Stay up to date with our research publications, incubator events, global collaborations, and platform milestones.
          </p>
        </div>
      </section>

      {/* Press Board */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        {/* Category Toggles */}
        <div className="flex gap-2 justify-center mb-12">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab === 'all' ? 'All Updates' : tab}
            </button>
          ))}
        </div>

        {/* List of Updates */}
        <div className="space-y-8">
          {filteredPress.map((item, idx) => (
            <article key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="text-slate-400 text-[10px] font-bold flex items-center gap-1.5 uppercase tracking-wider">
                    <Calendar size={12} /> {item.date}
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-slate-900 leading-snug hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.snippet}</p>
              </div>

              <div className="border-t border-slate-50 pt-5 mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedPress(item)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  Read Release <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Press Release Reader Modal */}
      {selectedPress && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-100 shadow-2xl relative">
            <button
              onClick={() => setSelectedPress(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-8 rounded-t-3xl pr-14">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                  {selectedPress.category}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">{selectedPress.date}</span>
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight">{selectedPress.title}</h2>
            </div>

            {/* Modal Content */}
            <div className="p-8 text-slate-700 text-sm leading-relaxed whitespace-pre-line">
              {selectedPress.body}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
