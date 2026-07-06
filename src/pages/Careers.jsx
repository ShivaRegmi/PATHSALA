import React, { useState } from 'react'
import { jobs } from '../data/communityData'
import SEOHead from '../components/SEOHead'
import { Briefcase, FileCode, CheckCircle2, X, Send, Award } from 'lucide-react'
import axios from 'axios'

export default function Careers() {
  const [applyingJob, setApplyingJob] = useState(null)
  
  // Application Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleApplySubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !applyingJob) return
    setStatus({ loading: true, success: null, message: '' })

    try {
      const response = await axios.post('http://localhost:8000/contact', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: `Job Application: "${applyingJob.title}"\nApplicant Message: ${formData.message}`
      })

      if (response.data.success) {
        setStatus({ loading: false, success: true, message: 'Application received! We will review your profile and connect via email.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ loading: false, success: false, message: 'Submission failed.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ loading: false, success: false, message: 'Could not connect to service.' })
    }
  }

  return (
    <main className="pt-16 page-transition bg-slate-50/50 min-h-screen">
      <SEOHead 
        title="Careers & Internships" 
        description="Join our team of developers, researchers, and mentors at A and I Pathshala Global. Check our active openings."
        path="/careers"
      />

      {/* Hero Header */}
      <section className="bg-[#fafafa] border-b border-slate-200 text-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.03),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Briefcase size={12} /> GLOBAL OPPORTUNITIES
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Build the Future of AI &amp; Education
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            We are looking for engineers, researchers, and mentors who want to build open-source NLP tokenizers, scale Next.js portals, and support community learning.
          </p>
        </div>
      </section>

      {/* Open Opportunities Board */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Careers Board</span>
          <h2 className="font-display text-3xl font-bold text-slate-950">Active Openings</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{job.type}</span>
                </div>
                
                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">{job.title}</h3>
                
                <ul className="space-y-2 mt-4">
                  <h4 className="text-slate-800 text-[10px] font-bold uppercase tracking-wider mb-2">Qualifications:</h4>
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-xs text-slate-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-50 pt-5 mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setApplyingJob(job)
                    setStatus({ loading: false, success: null, message: '' })
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Apply for Role
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internships & Volunteers Programs */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-slate-950">Student Internship &amp; Volunteer Program</h2>
            <p className="text-slate-550 text-sm leading-relaxed">
              We offer structured, remote-friendly internships and volunteer opportunities for undergraduate computer science students. Interns gain direct mentoring from senior database architects, work with git branch protocols, and build production assets.
            </p>
            
            <div className="space-y-3.5">
              {[
                'Practical engineering sprints working on active Next.js/React repositories.',
                'Direct reference letters and cryptographic completion badges.',
                'Career counseling workshops and profile building sprints.',
                'Weekly team syncs and code review sessions.'
              ].map(benefit => (
                <div key={benefit} className="flex gap-3 text-xs leading-relaxed text-slate-650 font-medium">
                  <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            <Award className="text-blue-600" size={42} />
            <h3 className="font-display text-2xl font-bold">Launch Your Career</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Many of our interns transition directly into offshore developer squads or receive research placements at collaborating labs.
            </p>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 border border-slate-100 shadow-2xl relative">
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="space-y-4 text-center mt-4">
              <h3 className="font-display text-xl font-bold text-slate-900">Apply for Role</h3>
              <p className="text-slate-500 text-xs">
                Position: <strong className="text-slate-800">"{applyingJob.title}"</strong> ({applyingJob.department})
              </p>

              <form onSubmit={handleApplySubmit} className="space-y-4 pt-4 text-left">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Short Message & Cover Link</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Link to your resume or portfolio, and tell us why you want to join..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold text-xs py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  {status.loading ? 'Submitting Profile...' : 'Submit Application'}
                </button>
              </form>

              {status.message && (
                <div className={`text-xs font-semibold mt-4 ${status.success ? 'text-green-600' : 'text-slate-550'}`}>
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
