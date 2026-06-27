import React from 'react'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'

const VALUES = [
  { Icon: Target,    color: 'blue',   title: 'Student First',  desc: 'Every decision starts with one question: does this genuinely improve student learning outcomes?' },
  { Icon: Lightbulb, color: 'amber',  title: 'Practical AI',   desc: 'We use AI as a real learning tool — to personalise learning paths, identify weak areas, and improve efficiency.' },
  { Icon: Heart,     color: 'rose',   title: 'Human-Centered Design', desc: 'Built from real student journeys, ensuring the platform reflects actual learning challenges and needs.' },
  { Icon: Eye,       color: 'indigo', title: 'Transparency',   desc: 'Clear expectations, honest outcomes, and no misleading promises — just structured, guided progress.' },
]

const colorMap = {
  blue:   'bg-blue-100 text-blue-600',
  amber:  'bg-amber-100 text-amber-600',
  rose:   'bg-rose-100 text-rose-600',
  indigo: 'bg-indigo-100 text-indigo-600',
}

const TIMELINE = [
  { year: '2022', title: 'Founded', desc: 'AI Pathsala began in Kathmandu with a focused goal: building a structured digital learning system for modern learners.' },
  { year: '2023', title: 'Platform Launch', desc: 'Launched our core learning platform with structured lessons and interactive practice modules.' },
  { year: '2024', title: 'Community Growth', desc: 'Reached 1,000+ learners and expanded structured learning paths with improved personalization.' },
  { year: '2025', title: 'Recognition', desc: 'Recognized for contributions to modern digital education and learning innovation.' },
]

export default function About() {
  return (
    <main className="pt-16 page-transition">
      {/* Header */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
            Our Story
          </p>

          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            We exist to bridge<br />
            <span className="text-blue-600 italic">Your Gap</span>
          </h1>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            AI Pathsala was created to make learning more structured, interactive, and outcome-driven for modern students.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
              Who We Are
            </p>

            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6 leading-tight">
              A team focused on<br />
              <span className="text-blue-600 italic">structured digital learning</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                AI Pathsala was built by educators and technologists focused on improving how students learn complex skills through structured systems.
              </p>

              <p>
                Many existing platforms are either too generic or lack proper learning progression. We focus on clarity, structure, and measurable improvement.
              </p>

              <p>
                Our approach combines interactive learning, AI-assisted practice, and step-by-step progression to ensure consistent growth.
              </p>
            </div>

            <div className="mt-8 space-y-2">
              {[
                'Based in Kathmandu, Nepal',
                '1,200+ learners onboarded',
                'Structured learning system designed by educators',
                'AI-assisted practice platform',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <CheckCircle size={16} className="text-blue-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mission / Vision unchanged */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-blue-600 rounded-3xl p-7 text-white">
              <Target size={28} className="mb-4 opacity-80" />
              <h3 className="font-display text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                To build structured, accessible, and effective digital learning experiences that help students learn faster and better.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-6 text-white">
              <Eye size={24} className="mb-3 text-blue-400" />
              <h3 className="font-semibold mb-2 text-sm">Our Vision</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                A future where learning is structured, personalized, and outcome-driven.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-6">
              <div className="font-display text-3xl font-bold text-blue-700 mb-1">1,200+</div>
              <div className="text-slate-500 text-xs font-medium">Active learners</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}