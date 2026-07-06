import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Cpu, Globe, BookOpen, Layers, Handshake, Landmark, FileText, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const SERVICES_LINKS = [
  { to: '/services/ai-ml-training', label: 'AI & Machine Learning Training' },
  { to: '/services/ai-workshops', label: 'AI Workshops' },
  { to: '/services/ai-consulting', label: 'AI Consulting' },
  { to: '/services/future-research-center', label: 'Future Research Center' },
  { to: '/services/web-development', label: 'Web Development' },
  { to: '/services/saas-development', label: 'SaaS Development' },
  { to: '/services/mobile-app-development', label: 'Mobile App Development' },
  { to: '/services/digital-marketing', label: 'Digital Marketing' },
  { to: '/services/seo-services', label: 'SEO Services' },
  { to: '/services/educational-consulting', label: 'Educational Consulting' },
  { to: '/services/nepali-language-classes', label: 'Nepali Language Classes' },
  { to: '/services/corporate-training', label: 'Corporate Training' },
  { to: '/services/it-consultancy', label: 'IT Consultancy' },
  { to: '/services/support-maintenance', label: 'Support & Maintenance' }
]

const EDUCATION_LINKS = [
  { to: '/knowledge-hub', label: 'AI Learning & Knowledge Hub' },
  { to: '/education/workshops', label: 'Workshops' },
  { to: '/education/certifications', label: 'Certifications' },
  { to: '/education/professional-training', label: 'Professional Training' },
  { to: '/education/student-programs', label: 'Student Programs' },
  { to: '/education/research-programs', label: 'Research Programs' },
  { to: '/education/career-development', label: 'Career Development' }
]

const RESEARCH_LINKS = [
  { to: '/research/ai-research', label: 'AI Research' },
  { to: '/research/blockchain-research', label: 'Blockchain Research' },
  { to: '/research/digital-transformation-research', label: 'Digital Transformation' },
  { to: '/research-library', label: 'Research Library & Papers' },
  { to: '/research/innovation-labs', label: 'Innovation Labs' }
]

const PROGRAMS_LINKS = [
  { to: '/partnerships', label: 'Academic & Corporate Partnerships' },
  { to: '/events', label: 'Events & Conferences' },
  { to: '/programs/startup-incubation', label: 'Startup Incubation' },
  { to: '/programs/student-success-stories', label: 'Student Success Stories' },
  { to: '/careers', label: 'Internships & Opportunities' }
]

const COMPANY_LINKS = [
  { to: '/about', label: 'Company Story' },
  { to: '/future-vision', label: 'Future Vision Center' },
  { to: '/newsroom', label: 'Newsroom & Press' },
  { to: '/careers', label: 'Careers' },
  { to: '/about#timeline', label: 'Company Timeline' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null) // 'services', 'education', etc.
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  // Toggle active mobile dropdown
  const toggleMobileDropdown = (name) => {
    setActiveDropdown(prev => prev === name ? null : name)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-slate-900/98 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-slate-900/90 backdrop-blur-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 text-white">

        {/* Logo */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src={logo}
            alt="A and I Pathshala Global"
            className="h-10 w-auto object-contain block border-0 outline-none filter brightness-100"
            draggable="false"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Services Dropdown */}
          <div 
            className="relative group py-5"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
              Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-slate-900 border border-slate-850 rounded-2xl p-6 shadow-2xl transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto grid grid-cols-2 gap-x-6 gap-y-2 mt-1">
              <div className="col-span-2 border-b border-slate-800 pb-3 mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5"><Layers size={12} /> Tech & Consulting</span>
              </div>
              {SERVICES_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Education Dropdown */}
          <div 
            className="relative group py-5"
            onMouseEnter={() => setActiveDropdown('education')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
              Education <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-850 rounded-2xl p-4 shadow-2xl transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto flex flex-col gap-1 mt-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1 mb-2 flex items-center gap-1.5"><BookOpen size={12} /> Learning Programs</span>
              {EDUCATION_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Research Dropdown */}
          <div 
            className="relative group py-5"
            onMouseEnter={() => setActiveDropdown('research')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link 
              to="/research"
              onClick={handleNavClick}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              Research <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </Link>
            <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-850 rounded-2xl p-4 shadow-2xl transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto flex flex-col gap-1 mt-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1 mb-2 flex items-center gap-1.5"><Cpu size={12} /> Future Research</span>
              {RESEARCH_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs Dropdown */}
          <div 
            className="relative group py-5"
            onMouseEnter={() => setActiveDropdown('programs')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
              Programs <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-slate-900 border border-slate-850 rounded-2xl p-4 shadow-2xl transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto flex flex-col gap-1 mt-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1 mb-2 flex items-center gap-1.5"><Handshake size={12} /> Partnerships & Incubation</span>
              {PROGRAMS_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Dropdown */}
          <div 
            className="relative group py-5"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
              Company <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full right-0 w-60 bg-slate-900 border border-slate-850 rounded-2xl p-4 shadow-2xl transition-all duration-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto flex flex-col gap-1 mt-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1 mb-2 flex items-center gap-1.5"><Landmark size={12} /> About Us</span>
              {COMPANY_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={handleNavClick}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/projects"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
          >
            Projects
          </Link>

          <Link
            to="/blog"
            onClick={handleNavClick}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          onClick={handleNavClick}
          className="hidden lg:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-900/30 hover:scale-[1.02]"
        >
          Get Started <ArrowRight size={14} />
        </Link>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen(p => !p)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-3">
            
            {/* Services */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('services')}
                className="w-full flex items-center justify-between text-sm font-bold text-slate-200 py-2 border-b border-slate-850"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="flex flex-col gap-1 pl-4 mt-2 border-l border-slate-800">
                  {SERVICES_LINKS.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-xs font-semibold text-slate-400 py-2.5">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Education */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('education')}
                className="w-full flex items-center justify-between text-sm font-bold text-slate-200 py-2 border-b border-slate-850"
              >
                <span>Education</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'education' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {activeDropdown === 'education' && (
                <div className="flex flex-col gap-1 pl-4 mt-2 border-l border-slate-800">
                  {EDUCATION_LINKS.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-xs font-semibold text-slate-400 py-2.5">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Research */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('research')}
                className="w-full flex items-center justify-between text-sm font-bold text-slate-200 py-2 border-b border-slate-850"
              >
                <span>Research</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'research' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {activeDropdown === 'research' && (
                <div className="flex flex-col gap-1 pl-4 mt-2 border-l border-slate-800">
                  <Link to="/research" onClick={() => setOpen(false)} className="text-xs font-bold text-cyan-400 py-2.5">
                    View Research Portal
                  </Link>
                  {RESEARCH_LINKS.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-xs font-semibold text-slate-400 py-2.5">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('programs')}
                className="w-full flex items-center justify-between text-sm font-bold text-slate-200 py-2 border-b border-slate-850"
              >
                <span>Programs</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'programs' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {activeDropdown === 'programs' && (
                <div className="flex flex-col gap-1 pl-4 mt-2 border-l border-slate-800">
                  {PROGRAMS_LINKS.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-xs font-semibold text-slate-400 py-2.5">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company */}
            <div>
              <button 
                onClick={() => toggleMobileDropdown('about')}
                className="w-full flex items-center justify-between text-sm font-bold text-slate-200 py-2 border-b border-slate-850"
              >
                <span>Company</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>
              {activeDropdown === 'about' && (
                <div className="flex flex-col gap-1 pl-4 mt-2 border-l border-slate-800">
                  {COMPANY_LINKS.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-xs font-semibold text-slate-400 py-2.5">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" onClick={() => setOpen(false)} className="text-sm font-bold text-slate-200 py-2 border-b border-slate-850">
              Projects
            </Link>

            <Link to="/blog" onClick={() => setOpen(false)} className="text-sm font-bold text-slate-200 py-2 border-b border-slate-850">
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}