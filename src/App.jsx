import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Research from './pages/Research.jsx'
import ResearchLibrary from './pages/ResearchLibrary.jsx'
import Events from './pages/Events.jsx'
import Partnerships from './pages/Partnerships.jsx'
import Careers from './pages/Careers.jsx'
import Newsroom from './pages/Newsroom.jsx'
import FutureVision from './pages/FutureVision.jsx'
import KnowledgeHub from './pages/KnowledgeHub.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import EducationDetail from './pages/EducationDetail.jsx'
import ResearchDetail from './pages/ResearchDetail.jsx'
import ProgramDetail from './pages/ProgramDetail.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/services"         element={<Services />} />
        <Route path="/services/:slug"   element={<ServiceDetail />} />
        <Route path="/education/:slug"  element={<EducationDetail />} />
        <Route path="/research"         element={<Research />} />
        <Route path="/research/:slug"   element={<ResearchDetail />} />
        <Route path="/research-library" element={<ResearchLibrary />} />
        <Route path="/events"           element={<Events />} />
        <Route path="/partnerships"     element={<Partnerships />} />
        <Route path="/careers"          element={<Careers />} />
        <Route path="/newsroom"         element={<Newsroom />} />
        <Route path="/future-vision"    element={<FutureVision />} />
        <Route path="/knowledge-hub"    element={<KnowledgeHub />} />
        <Route path="/programs/:slug"   element={<ProgramDetail />} />
        <Route path="/about"            element={<About />} />
        <Route path="/projects"         element={<Projects />} />
        <Route path="/blog"             element={<Blog />} />
        <Route path="/contact"          element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}