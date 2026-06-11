import React from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, BookOpen, Globe2, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'

const PROJECTS = [
  {
    Icon: Smartphone,
    tag: 'Main Product',
    tagColor: 'bg-blue-600',
    title: 'AI Pathsala App',
    subtitle: 'The dedicated Japanese learning application',
    desc: 'Our flagship product a mobile-first application that delivers structured Japanese language learning for Nepal-based students preparing to go to Japan. Powered by adaptive AI to personalise each learner\'s path.',
    features: [
      'JLPT N5 to N2 structured curriculum',
      'AI-adaptive lesson difficulty',
      'Daily streak and progress tracking',
      'Offline learning mode',
      'Mock JLPT exams with feedback',
    ],
    status: 'Under Development',
    statusColor: 'bg-green-100 text-green-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    Icon: BookOpen,
    tag: 'Education Initiative',
    tagColor: 'bg-indigo-600',
    title: 'Digital Matrix Mandala',
    subtitle: 'Presented at WSC 2025',
    desc: 'A groundbreaking session presented at the World Sanskrit Conference 2025, exploring the convergence of ancient knowledge systems and modern AI positioning AI Pathsala at the frontier of education innovation.',
    features: [
      'Presented at World Sanskrit Conference 2025',
      'Explored AI in traditional education contexts',
      'Bridging classical knowledge and modern tech',
      'International academic audience',
    ],
    status: 'Completed',
    statusColor: 'bg-slate-100 text-slate-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    Icon: Globe2,
    tag: 'Event',
    tagColor: 'bg-violet-600',
    title: '19th World Sanskrit Conference',
    subtitle: 'Co-organiser, 2025',
    desc: 'AI Pathsala proudly co-organised the 19th World Sanskrit Conference, one of the most prestigious international events dedicated to Sanskrit scholarship and its intersection with modern knowledge. A milestone in our commitment to educational excellence.',
    features: [
      'International co-organiser role',
      'Bridging heritage education and technology',
      'Global academic partnerships formed',
      'Recognised contribution to education sector',
    ],
    status: 'Completed',
    statusColor: 'bg-slate-100 text-slate-600',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
]

export default function Projects() {
  return (
    <main className="pt-16 page-transition">
      {/* Header */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">Our Work</p>
          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Projects &amp; Initiatives
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From our core learning application to international academic initiatives,
            here's what AI Pathsala has built and contributed.
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {PROJECTS.map(({ Icon, tag, tagColor, title, subtitle, desc, features, status, statusColor, bg, border }) => (
            <div key={title} className={`${bg} border ${border} rounded-3xl p-8 md:p-10 grid md:grid-cols-5 gap-10`}>

              
              <div className="md:col-span-1 flex md:flex-col items-start gap-4">
                <div className={`w-16 h-16 rounded-2xl ${tagColor} bg-opacity-10 flex items-center justify-center`}
                  style={{ background: 'rgba(255,255,255,0.7)' }}>
                  <Icon size={32} className="text-slate-700" />
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${statusColor}`}>
                  {status}
                </span>
              </div>

              
              <div className="md:col-span-4">
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-lg ${tagColor}`}>{tag}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">{title}</h2>
                <p className="text-blue-600 font-medium text-sm mb-4">{subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-5">
            Want to collaborate?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            We're always open to partnerships with educational institutions,
            Japan-focused organisations, and like-minded teams.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
          >
            Get In Touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}