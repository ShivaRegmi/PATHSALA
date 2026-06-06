import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about"    element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}