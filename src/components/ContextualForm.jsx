import React, { useState } from 'react'
import axios from 'axios'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

export default function ContextualForm({ formType = 'consultation', pageTitle = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    field1: '', // Maps to: preferredDate (consultation), workshopSelected (registration), company (inquiry), institute (collaboration)
    field2: '', // Maps to: challenge (consultation), teamSize (registration), servicesNeeded (inquiry), researchArea (collaboration)
    messageBody: ''
  })
  
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, message: '' })

    // Format contextual fields into a single structured message for the backend API
    let structuredMessage = `Form Type: ${formType.toUpperCase()} (${pageTitle})\n`
    if (formType === 'consultation') {
      structuredMessage += `Preferred Date: ${formData.field1}\nChallenge Details: ${formData.field2}\n`
    } else if (formType === 'registration') {
      structuredMessage += `Selected Track: ${formData.field1}\nTeam/Cohort Size: ${formData.field2}\n`
    } else if (formType === 'inquiry') {
      structuredMessage += `Company/Organization: ${formData.field1}\nService Categories: ${formData.field2}\n`
    } else if (formType === 'collaboration') {
      structuredMessage += `Academic/Research Institute: ${formData.field1}\nResearch Focus Area: ${formData.field2}\n`
    }
    
    if (formData.messageBody) {
      structuredMessage += `Notes: ${formData.messageBody}`
    }

    try {
      const response = await axios.post('http://localhost:8000/contact', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: structuredMessage.trim()
      })

      if (response.data.success) {
        setStatus({ loading: false, success: true, message: response.data.message })
        setFormData({ name: '', email: '', field1: '', field2: '', messageBody: '' })
      } else {
        setStatus({ loading: false, success: false, message: 'Submission failed. Please check your inputs.' })
      }
    } catch (err) {
      console.error('Error submitting contextual form:', err)
      setStatus({ 
        loading: false, 
        success: false, 
        message: 'Could not connect to the server. Please verify the backend API is running.' 
      })
    }
  }

  // Define dynamic form layout parameters
  const renderContextualFields = () => {
    switch (formType) {
      case 'registration':
        return (
          <>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Select Workshop/Training Track</label>
              <select
                name="field1"
                value={formData.field1}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              >
                <option value="">-- Choose Option --</option>
                <option value="AI & ML Training">AI & Machine Learning Training</option>
                <option value="AI Workshops">AI Workshops & Prompt Engineering</option>
                <option value="Corporate Tech Sprints">Corporate Tech Sprints</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Expected Number of Participants</label>
              <input
                type="number"
                name="field2"
                placeholder="e.g. 5"
                min="1"
                value={formData.field2}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
          </>
        )
      case 'inquiry':
        return (
          <>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Company / Organization Name</label>
              <input
                type="text"
                name="field1"
                placeholder="Apex Corp"
                value={formData.field1}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Requested Service</label>
              <select
                name="field2"
                value={formData.field2}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              >
                <option value="">-- Choose Option --</option>
                <option value="SaaS Platform Development">SaaS Platform Development</option>
                <option value="React/Next.js Web Applications">React/Next.js Web Applications</option>
                <option value="Digital Transformation Consulting">Digital Transformation Consulting</option>
                <option value="Support & Maintenance retainer">Support & Maintenance retainer</option>
              </select>
            </div>
          </>
        )
      case 'collaboration':
        return (
          <>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Academic / Research Institution</label>
              <input
                type="text"
                name="field1"
                placeholder="Kathmandu University"
                value={formData.field1}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Research Focus Area</label>
              <select
                name="field2"
                value={formData.field2}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              >
                <option value="">-- Choose Option --</option>
                <option value="Sanskrit Computational NLP">Sanskrit Computational NLP</option>
                <option value="Low-Resource Dialect Translation">Low-Resource Dialect Translation</option>
                <option value="Zero-Knowledge Ledger Registries">Zero-Knowledge Ledger Registries</option>
                <option value="Digital Heritage Metadata Mappings">Digital Heritage Metadata Mappings</option>
              </select>
            </div>
          </>
        )
      case 'consultation':
      default:
        return (
          <>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Preferred Consultation Date</label>
              <input
                type="date"
                name="field1"
                value={formData.field1}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Primary Business Challenge</label>
              <input
                type="text"
                name="field2"
                placeholder="e.g. Scaling database latency"
                value={formData.field2}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
          </>
        )
    }
  }

  if (status.success) {
    return (
      <div className="bg-slate-950 border border-slate-850 rounded-3xl p-8 text-center text-white space-y-4">
        <CheckCircle2 size={48} className="text-green-400 mx-auto" />
        <h3 className="font-display text-2xl font-bold">Proposal Registered</h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
          {status.message} Our team will review the parameters and connect with you shortly.
        </p>
        <button
          onClick={() => setStatus({ loading: false, success: null, message: '' })}
          className="mt-4 text-xs font-bold text-cyan-400 hover:underline"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-950 border border-slate-850 rounded-3xl p-8 text-white space-y-6 text-left shadow-2xl relative z-10">
      <h3 className="font-display text-2xl font-bold flex items-center gap-2">
        <Send size={18} className="text-cyan-400 animate-pulse" /> Contextual Inquiry
      </h3>
      <p className="text-slate-400 text-xs">
        Fill out the parameters below. The request will automatically route into our enterprise service log.
      </p>

      {/* Name and Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Ugen Dorji"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="ugen@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
            required
          />
        </div>
      </div>

      {/* Contextual Fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        {renderContextualFields()}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Additional Specifications (Optional)</label>
        <textarea
          name="messageBody"
          rows="4"
          placeholder="Include details such as current framework versions, team sizes, project deadlines, or specific topics to focus on..."
          value={formData.messageBody}
          onChange={handleChange}
          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
        />
      </div>

      {/* Status Alerts */}
      {status.success === false && (
        <div className="flex items-center gap-2 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 p-3.5 rounded-xl">
          <AlertCircle size={14} className="shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold text-sm py-4 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
      >
        {status.loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Processing Proposal...</span>
          </>
        ) : (
          <>
            <span>Submit Proposal</span> <Send size={14} />
          </>
        )}
      </button>
    </form>
  )
}
