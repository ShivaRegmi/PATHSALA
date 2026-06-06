import React, { useState } from 'react'
import axios from 'axios'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Facebook, Instagram, Linkedin } from 'lucide-react'

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL)
  const [status,  setStatus]  = useState('idle')   // idle | loading | success | error
  const [errors,  setErrors]  = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Name is required'
    if (!form.email.trim())                         e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))     e.email   = 'Enter a valid email'
    if (!form.message.trim())                       e.message = 'Message is required'
    else if (form.message.trim().length < 10)       e.message = 'Message must be at least 10 characters'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }

    setStatus('loading')
    try {
      await axios.post('http://localhost:8000/contact', form)
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full border rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-300 ${
      errors[field]
        ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-2 focus:ring-red-100'
        : 'border-slate-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100'
    }`

  return (
    <main className="pt-16 page-transition">
      {/* Header */}
      <section className="bg-linear-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-5xl font-bold text-slate-900 mb-5 leading-tight">
            We'd love to<br />
            <span className="text-blue-600 italic">hear from you</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a question about our services, want to join as a student,
            or are looking to partner with us — reach out.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Our team is based in Kathmandu, Nepal. Drop us a message and we'll
              get back to you within one business day.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { Icon: Mail,    label: 'Email', lines: ['info@aipathshalaglobal.com', 'support@aipathshalaglobal.com'], href: 'mailto:info@aipathshalaglobal.com' },
                { Icon: Phone,   label: 'Phone', lines: ['+977 9828249123'],           href: 'tel:+9779828249123' },
                { Icon: MapPin,  label: 'Address', lines: ['Dhumbarahi, Kathmandu', 'Bagmati Province, Nepal'], href: null },
              ].map(({ Icon, label, lines, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1">{label}</div>
                    {lines.map(line => (
                      href
                        ? <a key={line} href={href} className="block text-sm text-slate-700 font-medium hover:text-blue-600 transition-colors">{line}</a>
                        : <p key={line} className="text-sm text-slate-700 font-medium">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.facebook.com/aipathshalaglobal', Icon: Facebook, label: 'Facebook' },
                  { href: 'https://aipathshalaglobal.com', Icon: Instagram, label: 'Instagram' },
                  { href: 'https://www.linkedin.com/company/a-and-i-pathshala-global/', Icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>

            {/* Success state */}
            {status === 'success' && (
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-2xl p-5 mb-6">
                <CheckCircle size={20} className="shrink-0 mt-0.5 text-green-600" />
                <div>
                  <p className="font-semibold text-sm">Message sent!</p>
                  <p className="text-sm text-green-700 mt-0.5">We'll get back to you within one business day.</p>
                </div>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 rounded-2xl p-5 mb-6">
                <AlertCircle size={20} className="shrink-0 mt-0.5 text-red-600" />
                <div>
                  <p className="font-semibold text-sm">Something went wrong</p>
                  <p className="text-sm text-red-700 mt-0.5">Please try again or email us directly.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Anika Shrestha"
                  className={inputClass('name')}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="anika@example.com"
                  className={inputClass('email')}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals, questions, or how we can help..."
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 disabled:translate-y-0"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}