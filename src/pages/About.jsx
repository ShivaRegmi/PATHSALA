import React from 'react'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'

const VALUES = [
  { Icon: Target,    color: 'blue',   title: 'Student First',  desc: 'Every product and service decision starts with one question: does this genuinely help a student going to Japan?' },
  { Icon: Lightbulb, color: 'amber',  title: 'Practical AI',   desc: 'We use AI not as a buzzword but as a real tool — to personalise pacing, surface weak areas, and save students time.' },
  { Icon: Heart,     color: 'rose',   title: 'Cultural Bridge', desc: 'We understand the Nepali-to-Japan journey personally. That context shapes everything we build.' },
  { Icon: Eye,       color: 'indigo', title: 'Transparency',   desc: 'No hidden fees, no false promises. We tell students what is realistic and give them the tools to achieve it.' },
]

const colorMap = {
  blue:   'bg-blue-100 text-blue-600',
  amber:  'bg-amber-100 text-amber-600',
  rose:   'bg-rose-100 text-rose-600',
  indigo: 'bg-indigo-100 text-indigo-600',
}

const TIMELINE = [
  { year: '2022', title: 'Founded', desc: 'AI Pathsala was founded in Kathmandu with a clear mission: help Nepali students master Japanese and succeed in Japan.' },
  { year: '2023', title: 'App Launch', desc: 'Our dedicated Japanese learning application launched, providing structured JLPT-aligned content for students at every level.' },
  { year: '2024', title: 'Growing Community', desc: 'Crossed 1,000 enrolled students and expanded content to cover cultural orientation and Japan study preparation modules.' },
  { year: '2025', title: 'WSC 2025', desc: 'Presented at the World Sanskrit Conference 2025 and co-organised the 19th WSC, reinforcing our commitment to education innovation.' },
]

export default function About() {
  return (
    <main className="pt-16 page-transition">
      {/* Header */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">Our Story</p>
          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            We exist to bridge<br />
            <span className="text-blue-600 italic">Your Gap </span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            AI Pathsala was born from a simple observation: thousands of Nepali students
            dream of studying in Japan, but the language barrier stops most of them before they begin.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Who We Are</p>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A team that knows the<br />
              <span className="text-blue-600 italic">Japan-bound journey</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                AI Pathsala was founded by educators and technologists who had personally navigated
                the complex journey of preparing for life in Japan. We saw that existing tools were
                either too generic, too expensive, or simply not built with Nepali students in mind.
              </p>
              <p>
                We built something different — a focused, structured, and affordable pathway that
                takes students from complete beginner to confident, Japan-ready communicator.
              </p>
              <p>
                Our approach combines AI-driven personalisation with curriculum designed specifically
                for the challenges Nepali students face: unfamiliar scripts, tonal differences, and
                the cultural leap that comes with studying abroad.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                'Based in Kathmandu, Nepal',
                '1,200+ students helped so far',
                'Curriculum designed by Japan-experienced educators',
                'AI-powered app for daily practice',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle size={16} className="text-blue-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Mission */}
            <div className="col-span-2 bg-blue-600 rounded-3xl p-7 text-white">
              <Target size={28} className="mb-4 opacity-80" />
              <h3 className="font-display text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                To remove the language barrier for every Nepali student who wants to study,
                work, or live in Japan — through structured, accessible, AI-powered learning.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-slate-900 rounded-3xl p-6 text-white">
              <Eye size={24} className="mb-3 text-blue-400" />
              <h3 className="font-semibold mb-2 text-sm">Our Vision</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                A generation of Nepali students thriving in Japan, beginning with language confidence.
              </p>
            </div>
            {/* Stats */}
            <div className="bg-blue-50 rounded-3xl p-6">
              <div className="font-display text-3xl font-bold text-blue-700 mb-1">1,200+</div>
              <div className="text-slate-500 text-xs font-medium">Students enrolled and learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Core Values</p>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              What we stand for
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ Icon, color, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl ${colorMap[color]} flex items-center justify-center mb-5`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Journey</p>
            <h2 className="font-display text-4xl font-bold text-slate-900">How we got here</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-10">
              {TIMELINE.map(({ year, title, desc }) => (
                <div key={year} className="relative flex gap-8 items-start">
                  <div className="w-32 text-right shrink-0">
                    <span className="font-display text-2xl font-bold text-blue-600">{year}</span>
                  </div>
                  <div className="relative shrink-0">
                    <div className="w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-100 mt-1.5" />
                  </div>
                  <div className="pb-2">
                    <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Be part of the story
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed text-lg">
            Whether you're a student, parent, or partner we'd love to connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Get in Touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}