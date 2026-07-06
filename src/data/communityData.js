import { 
  GraduationCap, 
  Handshake, 
  Briefcase, 
  FileText, 
  Calendar 
} from 'lucide-react'

export const whitepapers = [
  {
    title: 'Sanskrit Grammar Parsers as Rule-Based Semantic Layer in Translation LLMs',
    category: 'AI & NLP',
    abstract: 'Explores how incorporating rules from Panini\'s Astadhyayi into standard neural translation models reduces grammatical alignment errors and decreases overall hallucination rates in Sanskrit-to-English tokenizers.',
    date: 'June 2025',
    author: 'S. Regmi, Y. Adhikari',
    downloadSlug: 'sanskrit-parsers-llm'
  },
  {
    title: 'Decentralized Academic Credentials verification via zk-SNARKs on Layer-1 Ledgers',
    category: 'Cryptography',
    abstract: 'Proposes a cryptographic framework allowing students to verify academic transcripts and graduation milestones instantly without exposing personal identity parameters to validating institutions.',
    date: 'November 2024',
    author: 'B. Devkota, S. Regmi',
    downloadSlug: 'decentralized-zk-credentials'
  },
  {
    title: 'QLoRA Training Cycles on Low-Resource Languages: Nepali Llama Case Study',
    category: 'AI & NLP',
    abstract: 'Documents memory footprint sizing and optimization routines when fine-tuning Llama-3 adapter weights with a 500,000 sentence Nepali conversational database on standard on-premise hardware clusters.',
    date: 'August 2024',
    author: 'Y. Adhikari, B. Devkota',
    downloadSlug: 'qlora-nepali-llama'
  },
  {
    title: 'Structured Metadata Schemas for Ancient Palm-Leaf Manuscript Digitization',
    category: 'Digital Humanities',
    abstract: 'Introduces a semantic metadata taxonomy designed to link scanned palm-leaf manuscript archives, ensuring compatibility with RDF standards and search indexing robots.',
    date: 'February 2023',
    author: 'S. Regmi, L. Shrestha',
    downloadSlug: 'metadata-palm-leaf'
  }
]

export const events = [
  {
    type: 'Research Conference',
    title: 'WSC 2025: Digital Matrix Mandala session',
    date: 'Jan 15, 2025',
    location: 'Kathmandu, Nepal',
    speakers: ['Shiva Regmi', 'Dr. J. Shastri (CU)', 'Yujan Adhikari'],
    description: 'We hosted a special computational linguistics workshop at the 19th World Sanskrit Conference, demonstrating our tokenizers to 800+ international Indology scholars.',
    highlights: ['93.6% tokenizer accuracy verified', 'Joint database compilation agreement with 3 departments']
  },
  {
    type: 'AI Event',
    title: 'SaaS Hackathon & LLM fine-tuning sprint',
    date: 'Nov 12, 2024',
    location: 'A&I Pathshala Lab, Dhumbarahi',
    speakers: ['Yujan Adhikari', 'Biraj Devkota'],
    description: 'A 24-hour development marathon training 8 startup teams to fine-tune open models using local QLoRA scripts and connect them to React frontends.',
    highlights: ['8 operational prototypes built', '3 startups accepted into incubation retainers']
  },
  {
    type: 'Webinar',
    title: 'Zero-Knowledge Proofs in Digital Identity Registries',
    date: 'Sep 24, 2024',
    location: 'Online Broadcast',
    speakers: ['Biraj Devkota', 'P. Hoffman (ConsenSys)'],
    description: 'A technical webinar exploring the cryptographic mathematics behind zk-SNARKs and their application to privacy-preserving university registries.',
    highlights: ['450+ live developer attendees', 'Released open-source repository templates']
  },
  {
    type: 'Seminar',
    title: 'DevOps & CI/CD sprints for Enterprise Managers',
    date: 'Jul 08, 2024',
    location: 'Summit Hotel, Lalitpur',
    speakers: ['Biraj Devkota', 'Y. Adhikari'],
    description: 'A intensive, one-day roadmap outlining git branching standards, Docker container sizing, and automatic server failovers for IT executives.',
    highlights: ['15 local IT directors trained', 'Provided DevOps workflow guidelines']
  }
]

export const partnerships = [
  {
    sector: 'Universities & Colleges',
    benefit: 'Introduce modern machine learning electives, coordinate credit-sharing programs, and grant students access to on-premise GPU clusters.',
    model: 'Credit-Transfer electives & joint computer science research projects.'
  },
  {
    sector: 'NGOs & Research Institutes',
    benefit: 'Collaborate on open-science language datasets, digital heritage digitization, and local NLP translation tools.',
    model: 'Grant-sponsored research, public dataset hosting, and library releases.'
  },
  {
    sector: 'Technology Companies & Startups',
    benefit: 'Access managed offshore developer squads, custom RAG integrations, and GPU training compute sponsorships.',
    model: 'Offshore development retainers, SaaS incubation credits, and joint testing.'
  },
  {
    sector: 'Government Organizations',
    benefit: 'Implement decentralized verification systems, secure registries, and digital translation portals.',
    model: 'Enterprise system architecture consulting, custom development sprints, and IT training.'
  }
]

export const jobs = [
  {
    title: 'Junior NLP Researcher',
    type: 'Full-time / Offshore',
    department: 'Computational Linguistics Lab',
    requirements: [
      'B.Sc. or M.Sc. in Computer Science, Linguistics, or Data Science.',
      'Strong python coding skills and familiarity with PyTorch or Hugging Face transformers.',
      'Interest in rule-based systems (Astadhayi) and Devanagari text tokenization.'
    ]
  },
  {
    title: 'React & Next.js developer',
    type: 'Full-time / Hybrid',
    department: 'Software Engineering division',
    requirements: [
      '2+ years of professional React and Next.js development experience.',
      'Deep understanding of state management, tailwind styling, and API integration.',
      'Familiarity with static generation (SSG) and server-side rendering (SSR).'
    ]
  },
  {
    title: 'Infrastructure & System Administrator',
    type: 'Full-time / On-site',
    department: 'Future Systems Lab',
    requirements: [
      'Solid experience configuring Linux servers, Docker containers, and SSH grids.',
      'Experience monitoring GPU hardware resources and scheduling model runs.',
      'Understanding of automated backups, SSL encryption, and Cloudflare setups.'
    ]
  },
  {
    title: 'Educational Mentor (Volunteer / Part-time)',
    type: 'Remote',
    department: 'Education outreach',
    requirements: [
      'Passion for teaching coding, databases, or language structures.',
      'Willingness to review student project repos and run weekly Q&A calls.',
      'Strong communication skills and patience with beginner learners.'
    ]
  }
]

export const press = [
  {
    date: 'June 27, 2026',
    title: 'A and I Pathshala Global launches Phase 3 Branding and Authority Upgrades',
    category: 'Announcements',
    snippet: 'Unveiling our computational indology parser, active research labs catalog, and morphing contextual enquiry forms for global partners.',
    body: 'Kathmandu, Nepal — A and I Pathshala Global has announced the launch of its Phase 3 corporate portal upgrades. The updates introduce an interactive AI Innovation Lab dashboard and a central Research Portal cataloging active computational linguistics studies. By showcasing functional tokenizers and cryptographic registries, the organization continues to strengthen its authority in open-science and custom software engineering.'
  },
  {
    date: 'January 18, 2025',
    title: 'Special Session on "Digital Matrix Mandala" presented at WSC 2025',
    category: 'Media Coverage',
    snippet: 'Showing how rules from ancient Sanskrit grammar astadhyayi can be used to construct robust machine learning parser models.',
    body: 'Kathmandu, Nepal — Scholars at the 19th World Sanskrit Conference praised the computational linguistics workshop hosted by A and I Pathshala Global. The presentation demonstrated how rule-based semantic layers can restrict AI hallucinations when translating classical Devanagari texts. The team released open-source weights for their morphological parser, currently available on Hugging Face.'
  },
  {
    date: 'November 15, 2024',
    title: 'Startup Incubation program accepts 3 new AI-focused cohorts',
    category: 'Announcements',
    snippet: 'Providing early-stage startups with GPU compute sponsorships and Next.js engineering advisory to accelerate product launches.',
    body: 'Kathmandu, Nepal — A and I Pathshala Global\'s Incubation Hub has accepted three local technology cohorts into its incubator. Selected startups receive direct access to on-premise GPU clusters to train neural networks and engineering advisory to deploy SaaS applications, helping local software developers reach international quality benchmarks.'
  }
]
