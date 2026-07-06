import React from 'react'
import { events } from '../data/communityData'
import SEOHead from '../components/SEOHead'
import ContextualForm from '../components/ContextualForm'
import { Calendar, MapPin, Users, Sparkles, ArrowRight } from 'lucide-react'

export default function Events() {
  const speakers = [
    {
      name: 'Shiva Regmi',
      role: 'Founder & Computational Indology lead',
      org: 'A and I Pathshala Global'
    },
    {
      name: 'Yujan Adhikari',
      role: 'Lead Software Architect',
      org: 'A and I Pathshala Global'
    },
    {
      name: 'Biraj Devkota',
      role: 'DevOps & Infrastructure Lead',
      org: 'A and I Pathshala Global'
    },
    {
      name: 'Dr. J. Shastri',
      role: 'Professor of Computational Sanskrit',
      org: 'Kathmandu University'
    }
  ]

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Events & Conferences" 
        description="Join A and I Pathshala Global's upcoming tech meetups, generative AI workshops, and scientific research conferences."
        path="/events"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Calendar size={12} /> GLOBAL CONFERENCES
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Events, Seminars &amp; Tech Meetups
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Participate in our hands-on workshops, webinars on zero-knowledge cryptography, and computational Indology research sessions.
          </p>
        </div>
      </section>

      {/* Events Board */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xs hover:shadow-lg transition-all duration-200 grid md:grid-cols-4 gap-8">
              {/* Event Date & Info */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
                  {event.type}
                </span>
                <div className="text-slate-800 font-bold text-sm flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" /> {event.date}
                </div>
                <div className="text-slate-500 text-xs flex items-center gap-2">
                  <MapPin size={16} className="text-slate-400" /> {event.location}
                </div>
              </div>

              {/* Event Description */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">{event.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{event.description}</p>
                
                {/* Highlights */}
                <div className="space-y-1.5">
                  <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-wider">Key Highlights:</h4>
                  {event.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers List */}
              <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-3">Host Speakers:</h4>
                  <div className="space-y-2">
                    {event.speakers.map(s => (
                      <div key={s} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                        <Users size={12} className="text-slate-400" /> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Speaker Profiles Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Expert Panel</span>
            <h2 className="font-display text-3xl font-bold text-slate-950">Conference Presenters &amp; Mentors</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {speakers.map((spk, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mx-auto shadow-inner">
                  {spk.name[0]}
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">{spk.name}</h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed mt-1">{spk.role}</p>
                  <p className="text-blue-600 text-[9px] font-bold uppercase tracking-wider mt-0.5">{spk.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register Inquiry Form */}
      <section className="py-24 bg-slate-900 border-t border-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Registration Hub</span>
            <h2 className="font-display text-4xl font-bold">Register for Workshop/Event</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Submit your info. We will record your participation details and email verification credentials before kickoff.
            </p>
          </div>

          <ContextualForm formType="registration" pageTitle="Events & Conferences Portal" />
        </div>
      </section>
    </main>
  )
}
