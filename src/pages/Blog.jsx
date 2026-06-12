import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const POSTS = [
  {
    id: 1,
    category: 'Language Learning',
    catColor: 'bg-blue-100 text-blue-700',
    title: 'How to Learn Faster: 7 Proven Strategies for Beginners',
    excerpt: 'Most learners take years to become confident. These seven practical strategies help you accelerate progress even if you are starting from zero.',
    readTime: '6 min read',
    date: 'May 2025',
    featured: true,
  },
  {
    id: 2,
    category: 'Structured Learning',
    catColor: 'bg-indigo-100 text-indigo-700',
    title: 'Complete Beginner Learning Guide',
    excerpt: 'A clear starting roadmap covering essential foundations, study structure, and common mistakes to avoid when beginning your learning journey.',
    readTime: '9 min read',
    date: 'April 2025',
    featured: false,
  },
  {
    id: 3,
    category: 'Life Skills',
    catColor: 'bg-cyan-100 text-cyan-700',
    title: 'Adapting to a New Environment: What Students Often Miss',
    excerpt: 'Practical insights on communication styles, routines, and cultural expectations that influence real-world adaptation.',
    readTime: '7 min read',
    date: 'April 2025',
    featured: false,
  },
  {
    id: 4,
    category: 'Study Techniques',
    catColor: 'bg-violet-100 text-violet-700',
    title: 'Learning Basics in 7 Days: A Memory-Based Approach',
    excerpt: 'A structured method to quickly grasp foundational concepts using repetition, association, and daily practice.',
    readTime: '5 min read',
    date: 'March 2025',
    featured: false,
  },
  {
    id: 5,
    category: 'Guides',
    catColor: 'bg-emerald-100 text-emerald-700',
    title: 'Step-by-Step Application Preparation Guide',
    excerpt: 'A structured checklist covering documentation, preparation steps, and common errors to avoid during application processes.',
    readTime: '8 min read',
    date: 'March 2025',
    featured: false,
  },
  {
    id: 6,
    category: 'Learning Insight',
    catColor: 'bg-blue-100 text-blue-700',
    title: 'Why Memorization Alone Does Not Lead to Mastery',
    excerpt: 'Understanding why passive learning is ineffective and how active application improves long-term retention and skill development.',
    readTime: '5 min read',
    date: 'February 2025',
    featured: false,
  },
]

export default function Blog() {
  const featured = POSTS.find(p => p.featured)
  const rest     = POSTS.filter(p => !p.featured)

  return (
    <main className="pt-16 page-transition">
      
      <section className="bg-linear-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
            Resources
          </p>

          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Insights for learners<br />
            <span className="text-blue-600 italic">and structured growth</span>
          </h1>

          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Practical guides, learning strategies, and structured insights designed to improve skill development and consistency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {featured && (
            <div className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 mb-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    ⭐ Featured
                  </span>
                  <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-200 text-xs">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight">
                  {featured.title}
                </h2>

                <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-8">
                  {featured.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, catColor, title, excerpt, readTime, date }) => (
              <article
                key={id}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-1 bg-linear-to-r from-blue-500 to-cyan-400" />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${catColor}`}>
                      {category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock size={11} /> {readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                    {title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3">
                    {excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{date}</span>
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:gap-2.5 transition-all">
                      Read more <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
            Stay Updated
          </p>

          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Get learning insights directly
          </h2>

          <p className="text-slate-500 mb-8 leading-relaxed">
            Structured learning tips, guides, and strategies delivered periodically. No spam.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}