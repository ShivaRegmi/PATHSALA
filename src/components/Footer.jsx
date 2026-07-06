import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const SERVICES = [
  { to: '/services/ai-ml-training', label: 'AI & ML Training' },
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/saas-development', label: 'SaaS Development' },
  { to: '/services/seo-services', label: 'SEO Optimization' },
  { to: '/services/nepali-language-classes', label: 'Nepali Language Classes' }
]

const EDUCATION = [
  { to: '/education/ai-learning-programs', label: 'AI Learning Programs' },
  { to: '/education/certifications', label: 'Technical Certifications' },
  { to: '/education/professional-training', label: 'Professional Training' },
  { to: '/education/student-programs', label: 'Student Programs' }
]

const RESEARCH = [
  { to: '/research/ai-research', label: 'Cognitive Computing & NLP' },
  { to: '/research/blockchain-research', label: 'Decentralized Ledgers' },
  { to: '/research/publications', label: 'Research Publications' },
  { to: '/research/innovation-labs', label: 'Innovation Labs' }
]

export default function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Brand Column */}
        <div className="lg:col-span-2">
          <img 
            src={logo} 
            alt="A and I Pathshala Global" 
            className="h-10 w-auto object-contain brightness-100 opacity-90 mb-5" 
          />
          <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-400">
            Empowering innovation and education globally. We build custom software solutions, run hands-on technical training, and conduct pioneering research in machine learning and blockchain.
          </p>
          <div className="flex gap-3">
            {[
              { href: 'https://facebook.com/aipathshalaglobal', Icon: Facebook },
              { href: 'https://www.instagram.com/', Icon: Instagram },
              { href: 'https://www.linkedin.com/company/a-and-i-pathshala-global', Icon: Linkedin },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES.map(s => (
              <li key={s.to}>
                <Link to={s.to} onClick={handleNavClick} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <ArrowRight size={12} className="shrink-0 text-slate-600" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Column */}
        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">Education</h4>
          <ul className="space-y-3">
            {EDUCATION.map(e => (
              <li key={e.to}>
                <Link to={e.to} onClick={handleNavClick} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <ArrowRight size={12} className="shrink-0 text-slate-600" />
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Research & Contact Column */}
        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">Research Center</h4>
          <ul className="space-y-3 mb-8">
            {RESEARCH.map(r => (
              <li key={r.to}>
                <Link to={r.to} onClick={handleNavClick} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <ArrowRight size={12} className="shrink-0 text-slate-600" />
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Contact Global Office</h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <Mail size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <a href="mailto:info@aipathshalaglobal.com" className="hover:text-white transition-colors">
                info@aipathshalaglobal.com
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={14} className="text-blue-500 shrink-0" />
              <a href="tel:+9779828249123" className="hover:text-white transition-colors">+977 9828249123</a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
              <span>Dhumbarahi, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} A and I Pathshala Global. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link to="/about" className="hover:text-slate-400">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}