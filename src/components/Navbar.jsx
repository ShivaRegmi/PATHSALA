import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about',    label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog',     label: 'Blog' },
  { to: '/contact',  label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
       <Link
  to="/"
  onClick={handleNavClick}
  className="flex items-center gap-2 shrink-0"
>
  <img
    src={logo}
    alt="AI Pathsala"
    className="h-9 w-auto object-contain block border-0 outline-none shadow-none"
    draggable="false"
  />
</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                onClick={handleNavClick}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

     
        <Link
          to="/contact"
          onClick={handleNavClick}
          className="hidden md:inline-flex items-center gap-2  bg-yellow-300 hover:bg-yellow-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
        >
          Get Started
        </Link>

     
        <button
          onClick={() => setOpen(p => !p)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>


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