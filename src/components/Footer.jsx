import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const QUICK = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact Us' },
]

const SERVICES = [
  'Japanese Language Learning',
  'JLPT Preparation',
  'Japan Study Guidance',
  'AI-Powered Practice',
  'Cultural Orientation',
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={logo} alt="AI Pathsala" className="h-9 w-auto object-contain brightness-0 invert opacity-90 mb-4" />
          <p className="text-sm leading-relaxed mb-6">
            Helping students master Japanese and confidently prepare for life and study in Japan.
          </p>
          <div className="flex gap-3">
            {[
              { href: 'https://www.facebook.com/aipathshalaglobal', Icon: Facebook },
              { href: 'https://aipathshalaglobal.com',              Icon: Instagram },
              { href: 'https://www.linkedin.com/company/a-and-i-pathshala-global/', Icon: Linkedin },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
                  <ArrowRight size={13} className="shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">Services</h4>
          <ul className="space-y-3">
            {SERVICES.map(s => (
              <li key={s} className="flex items-center gap-2 text-sm">
                <ArrowRight size={13} className="shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-5">Contact</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail size={15} className="text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <a href="mailto:info@aipathshalaglobal.com" className="block hover:text-blue-400 transition-colors">
                  info@aipathshalaglobal.com
                </a>
                <a href="mailto:support@aipathshalaglobal.com" className="block hover:text-blue-400 transition-colors">
                  support@aipathshalaglobal.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={15} className="text-blue-400 shrink-0" />
              <a href="tel:+9779828249123" className="hover:text-blue-400 transition-colors">+977 9828249123</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-blue-400 shrink-0 mt-0.5" />
              <span>Dhumbarahi, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} AI Pathsala. All rights reserved.</p>
          <p className="text-xs text-slate-500">Made by Shiva</p>
        </div>
      </div>
    </footer>
  )
} 