import React, { useState } from 'react'
import { whitepapers } from '../data/communityData'
import SEOHead from '../components/SEOHead'
import { Search, FileText, Download, Sparkles, ArrowRight, X, Mail } from 'lucide-react'
import axios from 'axios'

export default function ResearchLibrary() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [downloadingPaper, setDownloadingPaper] = useState(null)
  
  // Download Form State
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const handleRequestDownload = async (e) => {
    e.preventDefault()
    if (!email || !downloadingPaper) return
    setStatus({ loading: true, success: null, message: '' })

    try {
      const response = await axios.post('http://localhost:8000/contact', {
        name: 'Research Portal Visitor',
        email: email.trim(),
        message: `Whitepaper Request: "${downloadingPaper.title}" (downloadSlug: ${downloadingPaper.downloadSlug})`
      })

      if (response.data.success) {
        setStatus({ loading: false, success: true, message: 'Verification link sent! We\'ve routed the PDF download path to your inbox.' })
        setEmail('')
      } else {
        setStatus({ loading: false, success: false, message: 'Could not process request.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ loading: false, success: false, message: 'Could not connect to service.' })
    }
  }

  const categories = ['all', 'AI & NLP', 'Cryptography', 'Digital Humanities']

  const filteredPapers = whitepapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          paper.abstract.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Research Library & Papers" 
        description="Search through A and I Pathshala Global's academic publications, whitepapers, Sanskrit tokenizers, and zk-SNARK documentation."
        path="/research-library"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Sparkles size={12} /> OPEN SCIENCE PORTAL
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Dynamic Research Library &amp; Whitepapers
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Search our index of technical writeups, download cryptographic schemas, and review model sizing blueprints co-authored by our labs.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search abstract keywords, titles, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-700/50 focus:outline-none focus:border-cyan-400 bg-slate-950/80 text-white text-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* Filter and Library Board */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        
        {/* Category Scroller */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Papers Grid */}
        {filteredPapers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8 max-w-md mx-auto">
            <h3 className="font-display text-xl font-bold text-slate-800 mb-2">No Papers Found</h3>
            <p className="text-slate-500 text-xs">We couldn't find any whitepapers matching your query.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPapers.map((paper, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {paper.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{paper.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">{paper.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{paper.abstract}</p>
                </div>

                <div className="border-t border-slate-50 pt-5 mt-6 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold">Authors: {paper.author}</span>
                  <button
                    onClick={() => {
                      setDownloadingPaper(paper)
                      setStatus({ loading: false, success: null, message: '' })
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Get Whitepaper <Download size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Research Journey Map Infographic */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Methodological Blueprint</span>
            <h2 className="font-display text-4xl font-bold text-slate-900">Our Research Methodology Journey</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
              How we compile ancient texts, model syntactic vectors, fine-tune models, and deploy production APIs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Data Compilation', desc: 'Sourcing, digitizing, and structuring raw regional scripts or blockchain data logs.' },
              { step: '02', title: 'Syntactic Mapping', desc: 'Applying computational indology or cryptographic logic to define vectors.' },
              { step: '03', title: 'Model Fine-Tuning', desc: 'Running QLoRA or adaptor weight updates on local GPU cluster resources.' },
              { step: '04', title: 'Production API', desc: 'Packaging models in microservice containers behind secure FastAPI endpoints.' }
            ].map((node, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
                <span className="text-blue-600 font-display text-3xl font-bold absolute top-4 right-4 opacity-30">{node.step}</span>
                <h4 className="font-display font-bold text-slate-900 text-base mb-2">{node.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Download Modal */}
      {downloadingPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 border border-slate-100 shadow-2xl relative">
            <button
              onClick={() => setDownloadingPaper(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="space-y-4 text-center mt-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto">
                <FileText size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">Request Document Access</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Enter your email address to verify your access. We will instantly route the cryptographic PDF copy of <strong className="text-slate-800">"{downloadingPaper.title}"</strong> to your inbox.
              </p>

              <form onSubmit={handleRequestDownload} className="space-y-4 pt-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  {status.loading ? 'Verifying Credentials...' : 'Request Verification & Download'}
                </button>
              </form>

              {status.message && (
                <div className={`text-xs font-semibold mt-4 ${status.success ? 'text-green-600' : 'text-slate-500'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
