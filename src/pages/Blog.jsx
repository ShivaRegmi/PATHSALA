import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const POSTS = [
  {
    id: 1,
    category: 'Language Learning',
    catColor: 'bg-blue-100 text-blue-700',
    title: 'How to Learn Japanese Faster: 7 Proven Strategies for Beginners',
    excerpt: 'Most students take years to reach conversational Japanese. These seven research-backed strategies will help you cut that time significantly — even if you\'re starting from zero.',
    readTime: '6 min read',
    date: 'May 2025',
    featured: true,
  },
  {
    id: 2,
    category: 'JLPT',
    catColor: 'bg-indigo-100 text-indigo-700',
    title: 'The Complete JLPT N5 Study Guide for Nepali Students',
    excerpt: 'JLPT N5 is the starting point for most Japan-bound students. Here\'s everything you need to know — syllabus, study timeline, resources, and common mistakes to avoid.',
    readTime: '9 min read',
    date: 'April 2025',
    featured: false,
  },
  {
    id: 3,
    category: 'Life in Japan',
    catColor: 'bg-cyan-100 text-cyan-700',
    title: 'Life in Japan for International Students: What Nobody Tells You',
    excerpt: 'From navigating the konbini to understanding senpai-kohai dynamics — honest advice from students who made the move from Nepal to Japan.',
    readTime: '7 min read',
    date: 'April 2025',
    featured: false,
  },
  {
    id: 4,
    category: 'Study Tips',
    catColor: 'bg-violet-100 text-violet-700',
    title: 'Hiragana in 7 Days: The Mnemonic Method That Actually Works',
    excerpt: 'Hiragana feels impossible at first — 46 characters with no obvious pattern. This mnemonic approach has helped hundreds of our students master it in under a week.',
    readTime: '5 min read',
    date: 'March 2025',
    featured: false,
  },
  {
    id: 5,
    category: 'Japan Prep',
    catColor: 'bg-emerald-100 text-emerald-700',
    title: 'Japanese Student Visa: A Step-by-Step Guide for Nepali Applicants',
    excerpt: 'The visa process is one of the most stressful parts of going to Japan. We break it down into a clear, actionable checklist — from document prep to the interview.',
    readTime: '8 min read',
    date: 'March 2025',
    featured: false,
  },
  {
    id: 6,
    category: 'Language Learning',
    catColor: 'bg-blue-100 text-blue-700',
    title: 'Why Grammar Rules Alone Won\'t Make You Fluent in Japanese',
    excerpt: 'Textbook Japanese and real Japanese are very different. Understanding why — and what to do about it — is the key insight that separates fast learners from slow ones.',
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
      {/* Header */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Resources</p>
          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Insights for Japan-bound<br />
            <span className="text-blue-600 italic">students</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Practical guides, language tips, and honest advice for Nepali students
            preparing to study, work, or live in Japan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Featured post */}
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

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, catColor, title, excerpt, readTime, date }) => (
              <article
                key={id}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Colour bar */}
                <div className="h-1 bg-linear-to-r from-blue-500 to-cyan-400" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${catColor}`}>{category}</span>
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

      {/* Newsletter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Stay Updated</p>
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Get articles in your inbox
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            New guides, tips, and Japan prep resources — delivered monthly. No spam.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}