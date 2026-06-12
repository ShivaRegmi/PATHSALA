import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Globe2, GraduationCap, Sparkles, ArrowRight, CheckCircle, Smartphone } from 'lucide-react'

const SERVICES = [
  {
    Icon: BookOpen,
    title: 'Interactive Digital Learning',
    tagline: 'Learn smarter through conversation and interaction.',
    desc: 'An engaging learning experience powered by AI characters, immersive lessons, real-time practice, and structured skill development designed for modern students.',
    points: [
      'Structured learning from beginner to advanced levels',
  'Daily bite-sized interactive lessons through the platform',
  'Balanced skill development: listening, speaking, reading, and writing',
  'Practical vocabulary designed for real-world communication and work scenarios', 
    ],
    color: 'blue',
  },
  {

  Icon: GraduationCap,
  title: 'Structured Proficiency Assessment',
  tagline: 'Build confidence through measurable progress.',
  desc: 'A comprehensive assessment and practice system designed to evaluate and strengthen language skills through structured levels, mock evaluations, and guided improvement feedback.',
  points: [
    'Level-based mock assessments for structured skill evaluation',
    'Timed practice sessions with instant performance feedback',
    'Error analysis with focused improvement suggestions',
    'Guidance on effective learning strategies and progress optimization',
  ],


    color: 'indigo',
  },
  {
  Icon: Globe2,
  title: 'Global Academic Readiness',
  tagline: 'Prepare for international academic environments with confidence.',
  desc: 'Beyond language learning, this module helps students understand academic expectations, social systems, and everyday practical knowledge needed for studying abroad.',
  points: [
    'Academic environment and classroom behavior guidelines',
    'Understanding administrative systems and essential procedures',
    'Housing, transport, and daily life management skills',
    'Cultural awareness for smooth social adaptation',
  ],
  color: 'cyan',
},
  {
    Icon: Smartphone,
    title: 'AI Pathsala Dedicated App',
    tagline: 'Your pocket-sized Japan preparation tool.',
    desc: 'All of our learning content is delivered through a dedicated mobile application that uses AI to personalise your learning path based on your progress and goals.',
    points: [
      'Adaptive AI pacing — harder or easier as you go',
      'Offline mode for studying anywhere',
      'Progress tracking and milestone badges',
      'Push reminders to maintain daily streaks',
    ],
    color: 'violet',
  },
]

const colorMap = {
  blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-100 text-blue-600',   border: 'border-blue-100',   badge: 'bg-blue-600',   check: 'text-blue-500' },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-100 text-indigo-600', border: 'border-indigo-100', badge: 'bg-indigo-600', check: 'text-indigo-500' },
  cyan:   { bg: 'bg-cyan-50',   icon: 'bg-cyan-100 text-cyan-600',    border: 'border-cyan-100',   badge: 'bg-cyan-600',   check: 'text-cyan-500' },
  violet: { bg: 'bg-violet-50', icon: 'bg-violet-100 text-violet-600', border: 'border-violet-100', badge: 'bg-violet-600', check: 'text-violet-500' },
}

export default function Services() {
  return (
    <main className="pt-16 page-transition">
     
      <section className="bg-linear-to-br from-slate-50 to-blue-50/60 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up ">What We Offer</p>
          
          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Services built for<br />
            <span className="text-blue-600 italic">Every curious students</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
           Every feature we build focuses on one goal: delivering structured, interactive, and engaging digital learning experiences that help students grow confidently and effectively.

          </p>
        </div>
      </section>

      {/* {/*className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"}  */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {SERVICES.map(({ Icon, title, tagline, desc, points, color }, i) => {
            const c = colorMap[color]
            return (
              <div
                key={title}
                className={`${c.bg} border ${c.border} rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                {/* Text */}
                <div>
                  <div className={`inline-flex items-center gap-2 text-white text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg mb-4 ${c.badge}`}>
                    <Icon size={13} /> {title}
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 mb-2">{tagline}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2.5">
                    {points.map(p => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle size={16} className={`${c.check} shrink-0 mt-0.5`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon visual */}
                <div className="flex justify-center">
                  <div className={`w-40 h-40 rounded-3xl ${c.icon} flex items-center justify-center shadow-inner`}>
                    <Icon size={72} strokeWidth={1} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Ready to get started?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Reach out to us and we'll help you find the right starting point for your journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}