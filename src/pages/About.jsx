import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Target, Eye, Heart, Lightbulb, CheckCircle2, User, Landmark, Compass } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const VALUES = [
  { icon: Target, title: 'Student First', desc: 'Every class design and curriculum update starts with one question: does this genuinely improve learning outcomes?' },
  { icon: Lightbulb, title: 'Practical AI Integration', desc: 'We use AI as a practical learning tool — to create customized study paths, identify skill gaps, and improve coding speeds.' },
  { icon: Heart, title: 'Human-Centered Solutions', desc: 'We build custom software and SaaS platforms tailored to actual user workflows and client needs.' },
  { icon: Eye, title: 'Academic Openness', desc: 'We believe in open-science; we share our datasets, tokenizers, and computational findings with global researchers.' }
]

const TIMELINE_DATA = {
  past: [
    { year: '2022', title: 'Founding in Kathmandu', desc: 'A and I Pathshala Global began as a focused team of educators and developers building structured digital learning pathways.' },
    { year: '2023', title: 'LMS Platform Launch', desc: 'Launched our core mobile and web learning portals, supporting over 1,000 active students in regional zones.' },
    { year: '2024', title: 'Offshore Service Scale-up', desc: 'Expanded our services to deliver Next.js web applications, SaaS backends, and AI workshops to global partners.' }
  ],
  present: [
    { year: '2025', title: 'World Sanskrit Conference', desc: 'Successfully presented our digital heritage representation and Sanskrit semantic parsing at WSC 2025 in Kathmandu.' },
    { year: '2026', title: 'Compute Cluster Scale', desc: 'Commissioned on-premise GPU clusters, offering compute sponsorship for early-stage incubated AI startups.' }
  ],
  future: [
    { year: '2027', title: 'Local LLM Quantization Sprints', desc: 'Develop local 3-bit GGUF translation adapters running offline on regional mobile devices.' },
    { year: '2028', title: 'zk-SNARK Academic Registries', desc: 'Build decentralized transcript validation structures integrated on Layer-1 public ledgers.' },
    { year: '2030', title: 'Open-Science Cognitive NLP', desc: 'Release semantic tokenizers and grammar parsers for 10 regional dialects across Asia.' }
  ]
}

const TEAM = [
  { name: 'Shiva Regmi', role: 'Founder & Managing Director', desc: 'Leads computational indology research and coordinates global software partnerships.' },
  { name: 'Yujan Adhikari', role: 'Lead Software Architect', desc: 'Designs FastAPI database schemas, microservice endpoints, and Next.js applications.' },
  { name: 'Biraj Devkota', role: 'DevOps & Infrastructure Lead', desc: 'Maintains server pipelines, container deployment clusters, and GPU database health.' },
  { name: 'Lakita Shrestha', role: 'Coordinator & Language Instructor', desc: 'Manages expatriate language programs, curriculum design, and client coordination.' }
]

export default function About() {
  const { hash } = useLocation()
  const [activePeriod, setActivePeriod] = React.useState('present')

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [hash])

  return (
    <main className="pt-16 page-transition bg-slate-50/50">
      <SEOHead 
        title="Our Story & Team" 
        description="Learn about A and I Pathshala Global's history, mission, core values, leadership team, and global impact."
        path="/about"
      />
      {/* Header Hero */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full float">
            Our Identity &amp; Vision
          </span>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-slate-900">
            We Deliver Tech &amp; Training <br />
            <span className="text-blue-600 italic">That Drive Global Growth</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            At A and I Pathshala Global, we build meaningful partnerships that empower businesses, researchers, and students to succeed.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Our Evolution</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 leading-tight">
              Company Story
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                A and I Pathshala Global was created to bridge the gap between emerging digital standards and actual local talent capabilities. We observed that many software projects lacked modular stability and many technical courses failed to teach production-ready skills.
              </p>
              <p>
                Starting as a small group of senior engineers in Kathmandu, we built and launched our own lightweight learning platform to help regional students. That foundation quickly grew into a full-scale IT consultancy, developing customized SaaS, web, and mobile systems for clients globally.
              </p>
              <p>
                Today, we combine technical execution (offshore development teams, cloud integrations) with advanced academic research (Natural Language Processing, Sanskrit Computing, and Blockchain systems) under a single vision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-blue-50 border border-blue-100 rounded-3xl p-8 text-slate-900 shadow-sm">
              <Target size={28} className="mb-4 text-blue-600" />
              <h3 className="font-display text-xl font-bold mb-2 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                To build high-performance, secure digital platforms and deliver structured, project-based educational courses that help teams and students grow globally.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/65 rounded-3xl p-6 text-slate-900">
              <Eye size={24} className="mb-3 text-blue-650" />
              <h3 className="font-semibold text-sm mb-1.5 text-slate-900">Our Vision</h3>
              <p className="text-slate-550 text-[11px] leading-relaxed">
                A globally integrated tech ecosystem where computing solutions are secure, and skills education is structured and outcome-driven.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 flex flex-col justify-center">
              <div className="font-display text-3xl font-bold text-blue-700 mb-1">19,000+</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Individuals Assisted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section id="founder" className="py-24 bg-slate-50/50 border-b border-slate-150">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 text-center bg-white border border-slate-100 p-8 rounded-3xl shadow-xs">
            <div className="w-28 h-28 rounded-full bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center text-blue-600 mb-4 shadow-inner">
              <User size={48} className="opacity-80" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900">Shiva Regmi</h3>
            <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider mt-1">Founder &amp; Director</p>
            <p className="text-slate-400 text-[9px] font-semibold tracking-wide uppercase mt-0.5">Computational Indology lead</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Leadership Message</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 leading-tight">
              Shaping Digital Futures
            </h2>
            <div className="text-slate-655 text-sm italic leading-relaxed border-l-2 border-blue-500 pl-4 py-1 space-y-3">
              <p>
                "Technology is only as powerful as the minds that shape it and the infrastructure that supports it. At A and I Pathshala Global, our focus is twofold: we build high-quality digital architectures that help organizations scale, and we deliver structured technical training that enables individuals to lead."
              </p>
              <p>
                "We believe in creating verifiable, open-science solutions—whether fine-tuning regional language LLMs or structuring decentralized registries—to connect local talent with global opportunities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white border-b border-slate-150">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Guiding Principles</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const ValueIcon = val.icon
              return (
                <div key={idx} className="card-interactive text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto">
                    <ValueIcon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{val.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vertical Timeline */}
      <section id="timeline" className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Operational Progress &amp; Future Goals</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              Interactive Roadmap Timeline
            </h2>
          </div>

          {/* Period Tabs */}
          <div className="flex gap-2 justify-center mb-12">
            {[
              { id: 'past', name: 'Foundations (2022-2024)' },
              { id: 'present', name: 'Scale & Conference (2025-2026)' },
              { id: 'future', name: '2027 - 2030 Roadmap' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActivePeriod(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  activePeriod === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-655 hover:bg-slate-50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="relative border-l border-slate-200 pl-6 ml-4 space-y-12">
            {TIMELINE_DATA[activePeriod].map((step, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-11.5 top-0.5 w-11 h-11 rounded-full bg-blue-50 border-2 border-blue-600 flex items-center justify-center text-sm font-bold text-blue-600 shadow-sm">
                  {step.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Global Outreach</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              Our Global Impact
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We operate internationally, delivering technical assets, linguistic databases, and trained professionals to global technology networks.
            </p>
            <div className="space-y-3">
              {[
                'Offshore technical squads integrated in US and European startups.',
                'Open-source NLP tokenizers utilized by international humanities departments.',
                'Expatriate language programs supporting diplomats and NGO representatives.',
                'Collaborative research publications co-authored with global academic faculty.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-900 rounded-3xl p-8 text-white space-y-6 relative overflow-hidden">
            <Compass className="text-blue-600 animate-spin-slow mb-4" size={48} />
            <h3 className="font-display text-2xl font-bold">Bridging Talent Gaps</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our structures allow developers and researchers in South Asia to collaborate directly on advanced technology systems with international partners, matching global quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Collaborators */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Trusted Network</span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-2">
              Academic &amp; Research Collaborations
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed mt-2">
              We coordinate with leading institutions to advance NLP research, computational linguistics, and credit sharing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center items-center">
            {[
              { name: 'Kathmandu University', sub: 'Department of Computer Science' },
              { name: 'Tribhuvan University', sub: 'Linguistics Department' },
              { name: 'Sanskrit Computing Club', sub: 'Indology Digitization Group' },
              { name: 'Global Identity Coalition', sub: 'zk-Credential Standards' }
            ].map((partner, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                <h4 className="font-display font-bold text-slate-900 text-sm">{partner.name}</h4>
                <p className="text-slate-400 text-[10px] uppercase font-semibold mt-1">{partner.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team" className="py-24 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Our People</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
              Expert Team
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, idx) => (
              <div key={idx} className="card-interactive text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center text-blue-600 font-bold text-2xl shadow-inner">
                  {member.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">{member.name}</h3>
                  <p className="text-blue-600 text-[11px] font-bold uppercase tracking-wider mt-1">{member.role}</p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}