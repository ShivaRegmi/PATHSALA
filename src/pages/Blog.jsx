import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ArrowRight, Clock, Search, Tag, X, Mail, Sparkles, CheckCircle2 } from 'lucide-react'
import { blogCategories } from '../data/blogData'
import SEOHead from '../components/SEOHead'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)
  
  // Newsletter subscription
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState({ success: null, message: '' })

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true)
    try {
      let url = 'http://localhost:8000/blogs'
      if (activeCategory !== 'all') {
        url += `?category=${encodeURIComponent(activeCategory)}`
      }
      const response = await axios.get(url)
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching blogs from API:', error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchBlogs()
  }, [activeCategory])

  // Fetch full post detail when clicked
  const handleReadPost = async (postSummary) => {
    try {
      const response = await axios.get(`http://localhost:8000/blogs/${postSummary.slug}`)
      setSelectedPost(response.data)
    } catch (error) {
      console.error('Error fetching full blog post:', error)
    }
  }

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubStatus({ success: null, message: 'Subscribing...' })
    try {
      const response = await axios.post('http://localhost:8000/subscribe', { email })
      setSubStatus({ success: response.data.success, message: response.data.message })
      if (response.data.success) setEmail('')
    } catch (error) {
      setSubStatus({ success: false, message: 'Failed to subscribe. Please verify your email and try again.' })
    }
  }

  // Filter posts by search query (title or excerpt matching)
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const featured = filteredPosts.length > 0 ? filteredProjects(filteredPosts)[0] : null
  const rest = featured ? filteredPosts.filter(p => p.id !== featured.id) : filteredPosts

  function filteredProjects(arr) {
    // Return first item as featured
    return arr
  }

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Insights & Research Articles" 
        description="Explore technical articles, research papers, and guidelines on Artificial Intelligence, Web development, and Software Engineering."
        path="/blog"
      />
      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Sparkles size={12} /> INSIGHTS &amp; REPOSITORIES
          </span>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight">
            A &amp; I Pathshala Insights
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Delve into advanced analyses of artificial intelligence, software developments, digital marketing tactics, zero-knowledge proofs, and cognitive indology.
          </p>
        </div>
      </section>

      {/* Filter and Search Panel */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Scroller */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Topics
            </button>
            {blogCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.name
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 text-slate-800 text-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500 font-semibold text-sm">Querying database posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8 max-w-md mx-auto">
            <h3 className="font-display text-xl font-bold text-slate-800 mb-2">No Articles Found</h3>
            <p className="text-slate-500 text-sm">We couldn't find any articles matching your search query or selected topic.</p>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Featured Post Banner */}
            {featured && activeCategory === 'all' && !searchQuery && (
              <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl grid md:grid-cols-5 text-white">
                <div className="p-8 md:p-12 md:col-span-3 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        Featured Insight
                      </span>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <Clock size={12} /> {featured.read_time}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => handleReadPost(featured)}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Read Full Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                <div className="bg-linear-to-br from-blue-900 to-indigo-950 md:col-span-2 hidden md:flex items-center justify-center p-8 border-l border-slate-850">
                  <Mail size={96} className="opacity-20 text-blue-600" />
                </div>
              </div>
            )}

            {/* Rest of posts */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory !== 'all' || searchQuery ? filteredPosts : rest).map((post, idx) => (
                <article 
                  key={idx} 
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-slate-400">
                        <Clock size={11} /> {post.read_time}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 leading-snug mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-slate-50 pt-5 mt-auto">
                    <span className="text-[10px] text-slate-400">
                      {new Date(post.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <button
                      onClick={() => handleReadPost(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      Read Article <ArrowRight size={12} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}
      </section>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-100 shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-8 rounded-t-3xl pr-14">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-400">
                  <Clock size={11} /> {selectedPost.read_time}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-2">
                {selectedPost.title}
              </h2>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                Published: {new Date(selectedPost.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-8 text-slate-700 text-sm leading-relaxed space-y-6 whitespace-pre-line">
              {selectedPost.content}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Subscription */}
      <section className="py-20 bg-slate-900 border-t border-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.05),transparent)]" />
        <div className="max-w-xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-full">
            Newsletter Hub
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight">
            Get Technical Insights Directly
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
            Subscribe to receive our latest papers, open-source library updates, and developmental strategies.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-4">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-cyan-400 hover:bg-cyan-500 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {subStatus.message && (
            <div className={`text-xs font-semibold mt-4 ${subStatus.success ? 'text-green-400' : 'text-slate-400'}`}>
              {subStatus.message}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}