import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  BrainCircuit, 
  Layers, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Star, 
  ChevronDown, 
  Database, 
  ShieldAlert, 
  Briefcase, 
  Globe, 
  Users, 
  Activity, 
  FileCode, 
  Cloud 
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

function ParticleCanvas() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    let width = canvas.width = canvas.parentElement.offsetWidth
    let height = canvas.height = canvas.parentElement.offsetHeight
    
    const handleResize = () => {
      if (!canvasRef.current) return
      width = canvasRef.current.width = canvasRef.current.parentElement.offsetWidth
      height = canvasRef.current.height = canvasRef.current.parentElement.offsetHeight
    }
    window.addEventListener('resize', handleResize)
    
    const particleCount = 75
    const particles = []
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1
      })
    }
    
    let mouse = { x: null, y: null, radius: 120 }
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }
    canvas.parentElement.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave)
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      
      particles.forEach((p, idx) => {
        p.x += p.vx
        p.y += p.vy
        
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            p.x += (dx / dist) * force * 0.6
            p.y += (dy / dist) * force * 0.6
          }
        }
        
        ctx.fillStyle = 'rgba(37, 99, 235, 0.25)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 110) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 * (1 - dist/110)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })
      
      animationFrameId = requestAnimationFrame(draw)
    }
    
    draw()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove)
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-60" 
    />
  )
}

const WHY_CHOOSE_US = [
  {
    title: 'Result Focused Approach',
    desc: 'We are committed to delivering measurable outcomes. We design systems and courses that target key business metrics and direct learning progression.',
    icon: Activity
  },
  {
    title: 'Simple Onboarding Process',
    desc: 'Our seamless onboarding ensures students and corporate teams can begin development modules or classes without delays.',
    icon: Layers
  },
  {
    title: '24/7 Dedicated Support',
    desc: 'We offer round-the-clock technical assistance, server monitoring, and continuous student support to keep operations running smoothly.',
    icon: ShieldAlert
  },
  {
    title: 'Global Delivery Network',
    desc: 'Connecting talent and technology from Nepal to clients, researchers, and universities across North America, Europe, and Asia.',
    icon: Globe
  }
]

const STATS = [
  { value: '19,000+', label: 'Professionals Trained' },
  { value: '150+', label: 'Active Projects Deployed' },
  { value: '15+', label: 'Industry Awards Won' },
  { value: '50+', label: 'Global Collaborations' }
]

const FEATURED_SERVICES = [
  {
    slug: 'ai-ml-training',
    title: 'AI & Machine Learning Training',
    desc: 'Build capabilities in PyTorch, neural networks, and generative AI APIs led by research leads.',
    icon: BrainCircuit
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    desc: 'High-performance Next.js and React enterprise portals optimized for SEO and Lighthouse scores.',
    icon: FileCode
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    desc: 'Build secure, multi-tenant cloud applications with row-level security and Stripe integrations.',
    icon: Cloud
  },
  {
    slug: 'future-research-center',
    title: 'Future Research Center',
    desc: 'Collaborate on Sanskrit computational linguistics, NLP tokenizers, and blockchain designs.',
    icon: Search
  }
]

const INDUSTRIES = [
  { name: 'Educational Tech', desc: 'Custom LMS systems, student databases, and digital curriculum layouts.' },
  { name: 'Financial Services', desc: 'Secure database setups, multi-tenant dashboards, and transaction registries.' },
  { name: 'Digital Commerce', desc: 'High-speed headless e-commerce web applications optimized for conversions.' },
  { name: 'Healthcare & Science', desc: 'Data management engines, predictive analytics modeling, and research tools.' },
  { name: 'Public Sector Tech', desc: 'Municipal database structures, public portal designs, and registry logs.' }
]

const LEARNING_HIGHLIGHTS = [
  {
    title: 'AI Learning Programs',
    desc: 'Transition from basic scripting to training and deploying custom neural networks.',
    to: '/education/ai-learning-programs'
  },
  {
    title: 'Technical Certifications',
    desc: 'Earn verifiable, cryptographically signed credentials validating your systems skills.',
    to: '/education/certifications'
  },
  {
    title: 'Startup Incubation',
    desc: 'Receive free GPU compute credits, technical mentoring, and software support for your MVP.',
    to: '/programs/startup-incubation'
  }
]

const TESTIMONIALS = [
  {
    quote: 'The AI and Machine Learning training helped our software engineering team transition to model deployment in under two months. The practical labs were incredibly thorough.',
    name: 'Lakita',
    role: 'Engineering Lead, TechScale Global'
  },
  {
    quote: 'A and I Pathshala Global designed and deployed our SaaS listing portal ahead of schedule. The API performance and modular database architecture have scaled smoothly.',
    name: 'Yujan',
    role: 'Product Director, Lighthouse CRM'
  },
  {
    quote: 'The conversational Nepali language classes were outstanding. Our expats and research fellows gained immediate community fluency and cultural context.',
    name: 'Biraj',
    role: 'Country Director, Development Initiatives'
  }
]

const FAQS = [
  {
    q: 'How does A and I Pathshala Global support international clients?',
    a: 'We coordinate software development projects across global timezones (US, Europe, Asia) and follow strict international documentation, Git branch workflows, and code security standards.'
  },
  {
    q: 'What is the connection between AI Pathsala and A and I Pathshala Global?',
    a: 'AI Pathsala is our core digital learning platform under development, while A and I Pathshala Global serves as the parent enterprise delivering full-scale software services, training, and research.'
  },
  {
    q: 'Can startups access GPU compute resources through your incubation program?',
    a: 'Yes. Startups accepted into our Startup Incubation program receive compute credits to train and evaluate neural networks on our dedicated on-premise GPU clusters.'
  },
  {
    q: 'Are your technical certifications globally verifiable?',
    a: 'Yes, all professional certifications are registered in our cryptographically signed public registry, enabling recruiters to instantly verify credentials.'
  }
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeModel, setActiveModel] = useState('sanskrit')

  const modelData = {
    sanskrit: {
      title: 'Sanskrit Parser Engine',
      latency: '42ms',
      speed: '14,250 tokens/sec',
      accuracy: '93.6%',
      status: 'Active Pipeline'
    },
    nepali: {
      title: 'Nepali Fine-Tuned Llama',
      latency: '98ms',
      speed: '4,210 tokens/sec',
      accuracy: '89.2%',
      status: 'Ready Adapter'
    },
    zk: {
      title: 'zk-Credentials Registry',
      latency: '12ms',
      speed: 'Instant Verification',
      accuracy: '100% Cryptographic',
      status: 'Secured Ledger'
    }
  }

  const active = modelData[activeModel]

  return (
    <main className="bg-slate-50/50">
      <SEOHead 
        title="Empowering Innovation & Education" 
        description="A and I Pathshala Global is a leading provider of custom software, SaaS development, AI training, computational indology research, and language programs."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fafafa] border-b border-slate-200 text-slate-900 pt-20">
        <ParticleCanvas />
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-20 right-[5%] w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pulse-glow" />
          <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 rounded-full bg-cyan-500/5 blur-3xl pulse-glow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 px-4 py-2 rounded-full float">
              <Sparkles size={12} /> Empowering Global Innovation
            </div>

            <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Empowering Innovation &amp; <br />
              <span className="text-blue-600 italic">Education – Globally.</span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
              We compile ancient syntactic structures, design decentralized identity protocols, fine-tune low-resource language adapters, and deliver premium Next.js SaaS codebeds.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="btn-primary"
              >
                Explore Our Services <ArrowRight size={16} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold px-7 py-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Visual Dashboard Panel */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-card-light rounded-3xl p-8 shadow-xl relative border-glow">
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-md animate-bounce">
                Interactive Showcase
              </div>
              <h3 className="font-display text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
                <BrainCircuit size={20} className="text-blue-600" /> AI Innovation Lab
              </h3>

              {/* Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {Object.keys(modelData).map(key => (
                  <button
                    key={key}
                    onClick={() => setActiveModel(key)}
                    className={`py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeModel === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 text-sm">Model Target</span>
                  <span className="font-semibold text-slate-900 text-sm">{active.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 text-sm">Token Latency</span>
                  <span className="font-semibold text-blue-650 text-sm">{active.latency}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 text-sm">Processing Speed</span>
                  <span className="font-semibold text-slate-900 text-sm">{active.speed}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500 text-sm">Accuracy Rate</span>
                  <span className="font-semibold text-slate-900 text-sm">{active.accuracy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 text-sm">Pipeline Status</span>
                  <span className="font-semibold text-green-600 text-sm">{active.status}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-semibold tracking-wider uppercase text-center">
                A and I Pathshala Global Enterprise Suite
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Operational Excellence</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2 mb-4">
              Why Choose A and I Pathshala Global
            </h2>
            <p className="text-slate-550 text-base leading-relaxed">
              We combine deep technical capabilities in artificial intelligence with structured project management and rigorous coding standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="card-interactive">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-550 text-xs leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Impact Statistics */}
      <section className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.02),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-display text-4xl lg:text-5xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Core Capabilities</span>
              <h2 className="font-display text-4xl font-bold text-slate-900 mt-2">
                Featured IT &amp; Educational Services
              </h2>
            </div>
            <Link to="/services" className="btn-ghost cursor-pointer">
              View All 13 Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_SERVICES.map((serv, idx) => {
              const IconComp = serv.icon
              return (
                <div key={idx} className="card-interactive flex flex-col justify-between min-h-[250px]">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-100/50 flex items-center justify-center text-blue-600 mb-6">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{serv.title}</h3>
                    <p className="text-slate-655 text-xs leading-relaxed mb-6">{serv.desc}</p>
                  </div>
                  <Link to={`/services/${serv.slug}`} className="btn-ghost cursor-pointer">
                    Find out more <ArrowRight size={12} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Strategic Focus</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2 mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-550 text-sm leading-relaxed">
              We design specialized digital architectures and learning pipelines for key global sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="card-interactive space-y-3">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wider border-b border-slate-100 pb-2">{ind.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Incubation Highlight */}
      <section className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
          {LEARNING_HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="card-interactive flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Pathshala Initiatives</span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-3 leading-snug text-slate-900">{item.title}</h3>
                <p className="text-slate-550 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link to={item.to} className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer">
                Explore Pathway <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white border-b border-slate-200 text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Trusted Globally</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 mt-2 mb-4">
              Client Success Stories
            </h2>
            <p className="text-slate-550 text-sm leading-relaxed">
              Read how our software consulting and training services help organizations scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div key={idx} className="card-interactive flex flex-col justify-between min-h-[280px]">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-655 text-xs italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                
                <div className="border-t border-slate-100 pt-5 mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                    <p className="text-slate-400 text-xs font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold mb-10 text-slate-900">Our Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['React', 'Next.js', 'Vite', 'TypeScript', 'Node.js', 'FastAPI', 'Python', 'PyTorch', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Sentry'].map(tech => (
              <span key={tech} className="bg-white border border-slate-200 text-slate-700 text-xs font-bold px-4.5 py-2.5 rounded-xl">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Global Vision Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Strategic Horizon</span>
            <h2 className="font-display text-4xl font-bold text-slate-900 leading-tight">
              Our Global Vision for Computing and Education
            </h2>
            <p className="text-slate-550 text-sm leading-relaxed">
              At A and I Pathshala Global, we operate with a unified directive: to democratize advanced technology skills, compile open-science resources for regional languages, and build reliable offshore software engineering structures that enable global companies to scale safely.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-slate-900 text-base font-semibold">Academic Integration</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Establishing dual-degree programs, credit-sharing paths, and digital classroom infrastructure with international colleges.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-slate-900 text-base font-semibold">Open-Science Mandates</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Publishing our computational indology tokenizers and private RAG datasets under open licenses for global researchers.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 text-slate-900 rounded-3xl p-8 border border-slate-200/60 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl" />
            <h3 className="font-display text-2xl font-bold text-slate-900">Our 2028 Key Indicators</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">1</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">20,000+ Students Certified</h5>
                  <p className="text-[10px] text-slate-500">Completing advanced machine learning and web development tracks.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">2</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">50+ Corporate Partners</h5>
                  <p className="text-[10px] text-slate-500">Integrating custom software systems and training bootcamps.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">3</span>
                <div>
                  <h5 className="text-xs font-bold text-slate-800">10+ Open-Science Mappings</h5>
                  <p className="text-[10px] text-slate-500">Releasing semantic tokenizer weights for regional dialects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-3xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const active = openFaq === idx
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-xs">
                  <button
                    onClick={() => setOpenFaq(active ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-slate-850 hover:text-blue-600 transition-colors bg-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${active ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {active && (
                    <div className="px-6 py-5 border-t border-slate-100 text-slate-605 text-xs leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white text-slate-900 text-center relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.02),transparent)]" />
        <div className="max-w-xl mx-auto px-6 relative z-10">
          <h2 className="font-display text-4xl font-bold mb-4 leading-tight text-slate-900">Ready to expand your technical horizons?</h2>
          <p className="text-slate-550 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Discuss your software spec or course goals with our expert consultants today.
          </p>
          <Link to="/contact" className="btn-primary cursor-pointer">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}