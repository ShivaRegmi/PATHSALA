import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Globe2, GraduationCap, Sparkles, ArrowRight, CheckCircle, Smartphone } from 'lucide-react'

const SERVICES = [
  {
    Icon: BookOpen,
    title: 'Japanese Language Learning',
    tagline: 'From zero to fluent — systematically.',
    desc: 'A structured curriculum covering Hiragana, Katakana, Kanji, vocabulary, grammar, and conversation — all optimised for Nepali learners heading to Japan.',
    points: [
      'Beginner to advanced levels (N5 → N2)',
      'Daily bite-sized lessons via our dedicated app',
      'Listening, speaking, reading and writing skills',
      'Vocabulary sets tuned for student and work life in Japan',
    ],
    color: 'blue',
  },
  {
    Icon: GraduationCap,
    title: 'JLPT Exam Preparation',
    tagline: 'Pass the test. Prove your fluency.',
    desc: 'Comprehensive preparation for the Japanese Language Proficiency Test — the internationally recognised standard required by Japanese universities and employers.',
    points: [
      'Full mock exams for N5, N4, N3 and N2',
      'Timed practice sessions with instant feedback',
      'Common mistake analysis and targeted review',
      'Test-taking strategy and pacing guidance',
    ],
    color: 'indigo',
  },
  {
    Icon: Globe2,
    title: 'Japan Study Preparation',
    tagline: 'Understand Japan before you arrive.',
    desc: 'Language is only one part of studying abroad. We prepare students for Japanese academic culture, social norms, and daily life through curated orientation content.',
    points: [
      'Academic culture and classroom etiquette',
      'Navigating Japanese bureaucracy and paperwork',
      'Housing, transport and everyday living',
      'Cultural do and donts for new arrivals',
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
            <span className="text-blue-600 italic">Japan-bound students</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Every service we offer is designed around a single mission: prepare Nepali students
            to master Japanese and thrive in Japan.
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
            Reach out to us and we'll help you find the right starting point for your Japan journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
          >
            Contact Us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}