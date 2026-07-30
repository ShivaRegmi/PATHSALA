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
const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/knowledge-hub", label: "Education" },
  { to: "/research", label: "Research" },
  { to: "/research-library", label: "Library" },
  { to: "/events", label: "Events" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
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
  className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-md border-b border-slate-200"
>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

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
        <nav className="hidden lg:flex items-center gap-2">
  {LINKS.map(({ to, label }) => {
    const active = location.pathname === to

    return (
      <Link
        key={to}
        to={to}
        onClick={handleNavClick}
        className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-300 ${
          active
            ? 'bg-blue-600 text-white shadow-md'
            : scrolled
            ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
            : 'text-white hover:text-yellow-300'
        }`}
      >
        {label}
      </Link>
    )
  })}
</nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          onClick={handleNavClick}
          className="hidden md:inline-flex items-center gap-2  bg-yellow-300 hover:bg-yellow-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
        >
          Get Started <ArrowRight size={14} />
        </Link>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen(p => !p)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1">
            {LINKS.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'instant' })
                    setOpen(false)
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              )
            })}

            <Link
              to="/contact"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' })
                setOpen(false)
              }}
              className="mt-2 text-center bg-yellow-300 hover:bg-yellow-500 text-sm font-semibold px-5 py-3 rounded-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}