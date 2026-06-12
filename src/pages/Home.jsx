import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe2, Users, CheckCircle, Sparkles, GraduationCap, Star } from 'lucide-react'

const FEATURES = [
  {
    Icon: BookOpen,
    title: 'Structured Learning',
    desc: 'Follow a curriculum designed specifically for students preparing to live and study conversational fluency.',
  },
  {
    Icon: Globe2,
    title: 'Focused Preparation',
    desc: 'Beyond language understand culture, academic norms, and daily life so you arrive prepared and confident.',
  },
  {
    Icon: GraduationCap,
   title: 'Smart Structured Learning',
desc: 'Follow an organized digital learning experience with interactive lessons, real-time practice, and continuous skill development.',

  },
  {
    Icon: Sparkles,
    title: 'AI-Powered Practice',
    desc: 'Our dedicated app uses AI to adapt lessons to your pace, identify weak points, and keep you progressing faster.',
  },
  {
    Icon: Users,
    title: 'Community of Learners',
    desc: 'Connect with others, share experiences, and stay motivated on your journey.',
  },
  {
    Icon: Star,
    title: 'Expert Guidance',
    desc: 'Curated by educators with real experience preparing students for academic and professional environments.',
  },
]

const WHY = [
 'Interactive learning through custom AI characters and real mentors',
 'Conversation-based lessons for practical understanding',
 'Structured and easy-to-follow digital learning experience',
 'Personalized practice and progress tracking',
 'Engaging visual content and immersive activities',
 'Accessible anytime through web and mobile platforms',
 'Modern AI-powered approach to skill development',
 'Supportive student community and collaborative learning',

]

export default function Home() {
  return (
    <main>
      
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 pt-16">

        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[8%] w-96 h-96 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute bottom-20 left-[5%]  w-72 h-72 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-cyan-100/15 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Learn digitally here
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 opacity-0 animate-fade-up delay-1">
              Your path to
              <span className="block text-blue-600 italic">Learn digitally</span>
              with AI Pathsala.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up delay-2">
              AI Pathsala is an interactive digital learning platform where students engage with custom AI characters and real mentors through conversations, immersive lessons, and practical experiences. 

            </p>

            
          </div>

          {/* Right — visual card */}
          <div className="hidden lg:flex justify-center opacity-0 animate-fade-up delay-4">
            <div className="relative">
              {/* Main card */}
             

              
              
             
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-10 bg-linear-to-b from-blue-400 to-transparent" />
          <span className="text-xs text-dark-400 tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">What We Do</p>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Everything you need to<br />
              <span className="text-blue-600 italic">succeed in Japan</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              We built AI Pathsala for one purpose: give Nepali students a structured,
              effective path to Japanese fluency and Japan readiness.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-all duration-300 mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-base">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-linear-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4">Why AI Pathsala</p>
            <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
              Built for Bridging gaps<br />for  intrusive students
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              Most language apps are generic. AI Pathsala is laser-focused on preparing
              students for the  language proficiency they need to study,
              work, and live successfully.
            </p>
          </div>
          <div className="space-y-4">
            {WHY.map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4">
                <CheckCircle size={18} className="text-cyan-300 shrink-0" />
                <span className="text-white font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">Ready to Begin?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Your  journey<br />
            <span className="text-blue-400 italic">starts today.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Get in touch with us and discover how AI Pathsala's dedicated app
            can take you from complete beginner to Expertee.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
            >
              Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}