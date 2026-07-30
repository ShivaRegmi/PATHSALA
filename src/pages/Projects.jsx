import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Smartphone, BookOpen, Globe2, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react'
import SEOHead from "../components/SEOHead";

const PROJECTS = [
  {
    Icon: Smartphone,
    tag: 'Main Product',
    tagColor: 'bg-blue-600',
    title: 'AI Pathsala App',
    subtitle: 'The dedicated learning application',
    desc: 'Our flagship product a mobile-first application that delivers structured language learning for Nepal-based students preparing to go to Abroad. Powered by adaptive AI to personalise each learner\'s path.',
    features: [
      
      'AI-adaptive lesson difficulty',
      'Daily streak and progress tracking',
      'Offline learning mode',
      
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
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

const filteredProjects = PROJECTS

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Our Work & Case Studies" 
        description="Browse A and I Pathshala Global's portfolio of custom Web, SaaS, EdTech, and AI machine learning engineering projects."
        path="/projects"
      />
      {/* Header Hero */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            PROVEN SOLUTIONS DIRECTORY
          </span>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight">
            Our Portfolio &amp; Case Studies
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how we design, build, and deploy high-performance web applications, multi-tenant SaaS products, and custom AI systems for global innovators.
          </p>
        </div>
      </section>

      {/* Filter Menu */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-2">
          
      
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {selectedProject.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
                  {project.desc}
                </p>

                {/* Metrics Highlight */}
                <div className={`${project.bg} ${project.border} border rounded-2xl p-4 mb-6`}>
  <span className={`${project.statusColor} px-3 py-1 rounded-full text-xs font-semibold`}>
    {project.status}
  </span>
</div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  View Full Case Study <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-100 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Hero */}
            <div className="bg-slate-900 text-white p-8 rounded-t-3xl pr-14">
             <span className={`${project.tagColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
  {project.tag}
</span>

<span className="text-[10px] font-semibold text-slate-400">
  {project.subtitle}
</span>
              <h2 className="font-display text-3xl font-bold mt-3 mb-2">{selectedProject.title}</h2>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Client: {selectedProject.client}</p>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-8">
              
              {/* Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Overview</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{selectedProject.desc}</p>
              </div>

              {/* Results & Outcomes */}
              <div className="border-t border-slate-100 pt-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Results</h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((item, i) => (
  <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-slate-600">
    <CheckCircle
      size={15}
      className="text-blue-600 shrink-0 mt-0.5"
    />
    <span>{item}</span>
  </li>
))}
                </ul>
              </div>

              {/* Technologies & Metrics */}
              <div className="border-t border-slate-100 pt-6 grid sm:grid-cols-3 gap-6 items-center">
                <div className="sm:col-span-2 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techUsed.map(tech => (
                      <span key={tech} className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-2xl p-5 text-center shadow-lg shadow-blue-500/10">
                  <div className="text-3xl font-bold mb-0.5">{selectedProject.metrics.value}</div>
                  <div className="text-blue-100 text-[9px] font-bold uppercase tracking-widest">{selectedProject.metrics.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="font-display text-4xl font-bold leading-tight">
            Have a custom project in mind?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
            Our engineering team will help you gather requirements, design the database schemas, and build a project tailored specifically to your roadmap.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-yellow-400/10 hover:scale-[1.02] transition-all duration-200"
          >
            Start Your Project <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}