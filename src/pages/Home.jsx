import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Globe2, Users, CheckCircle, Sparkles, GraduationCap, Star } from 'lucide-react'

const FEATURES = [
  {
    Icon: BookOpen,
    title: 'Structured Japanese Learning',
    desc: 'Follow a curriculum designed specifically for students preparing to live and study in Japan — from Hiragana to conversational fluency.',
  },
  {
    Icon: Globe2,
    title: 'Japan-Focused Preparation',
    desc: 'Beyond language — understand Japanese culture, academic norms, and daily life so you arrive prepared and confident.',
  },
  {
    Icon: GraduationCap,
    title: 'JLPT-Aligned Content',
    desc: 'All content is aligned with JLPT levels N5 through N2, giving you a recognized pathway to prove your proficiency.',
  },
  {
    Icon: Sparkles,
    title: 'AI-Powered Practice',
    desc: 'Our dedicated app uses AI to adapt lessons to your pace, identify weak points, and keep you progressing faster.',
  },
  {
    Icon: Users,
    title: 'Community of Learners',
    desc: 'Connect with other Nepal-to-Japan students, share experiences, and stay motivated on your journey.',
  },
  {
    Icon: Star,
    title: 'Expert Guidance',
    desc: 'Curated by educators with real experience preparing students for Japanese academic and professional environments.',
  },
]

const WHY = [
  'Built specifically for Nepali students going to Japan',
  'Structured JLPT N5 → N2 learning path',
  'Dedicated mobile app for daily practice',
  'Cultural and academic orientation included',
  'Supportive community of Japan-bound students',
  'Trusted by 1,200+ students across Nepal',
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 pt-16">

        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[8%] w-96 h-96 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute bottom-20 left-[5%]  w-72 h-72 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-100/15 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              Japanese Learning for Japan-Bound Students
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6 opacity-0 animate-fade-up delay-1">
              Your path to
              <span className="block text-blue-600 italic">Japan starts</span>
              with language.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up delay-2">
              AI Pathsala helps Nepali students master Japanese — structurally, practically,
              and confidently — so they can thrive in Japan from day one.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Services <ArrowRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="hidden lg:flex justify-center opacity-0 animate-fade-up delay-4">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100 border border-slate-100 p-8 w-80 float">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">あ</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800">Daily Lesson</div>
                    <div className="text-xs text-slate-400">Hiragana & Katakana</div>
                  </div>
                  <div className="ml-auto w-8 h-8 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                    <CheckCircle size={16} className="text-green-500" />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Vocabulary', pct: 72 },
                    { label: 'Grammar',    pct: 54 },
                    { label: 'Listening',  pct: 38 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs text-slate-500 font-medium mb-1">
                        <span>{label}</span><span className="text-blue-600 font-semibold">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 text-xs text-slate-600 flex items-start gap-2.5">
                  <Sparkles size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>AI suggests: Review particle <strong className="text-blue-700">は vs が</strong> today — you missed 3 in the last quiz.</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-base">🎌</span> JLPT N5 Ready
              </div>
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-2.5 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-base"></span> 14-day streak!
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-10 bg-linear-to-b from-blue-400 to-transparent" />
          <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
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

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-linear-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-200 uppercase mb-4">Why AI Pathsala</p>
            <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
              Built for Nepal's<br />Japan-bound students
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              Most language apps are generic. AI Pathsala is laser-focused on preparing
              Nepali students for the Japanese language proficiency they need to study,
              work, and live successfully in Japan.
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

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4">Ready to Begin?</p>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Your Japan journey<br />
            <span className="text-blue-400 italic">starts today.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Get in touch with us and discover how AI Pathsala's dedicated app
            can take you from complete beginner to Japan-ready.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}