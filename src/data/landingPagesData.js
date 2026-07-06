import { 
  BrainCircuit, 
  Presentation, 
  Search, 
  Globe, 
  RefreshCw, 
  Briefcase, 
  Code, 
  Cloud, 
  GraduationCap, 
  Handshake 
} from 'lucide-react'

export const landingPagesData = [
  {
    slug: 'ai-ml-training',
    title: 'Artificial Intelligence Training',
    icon: BrainCircuit,
    formType: 'registration',
    hero: {
      tagline: 'Deep Technical Upskilling for Engineering Squads',
      tagBadge: 'CAISE Certification Track',
      statText: 'GPU Sandbox Enabled',
      statValue: 'A100 Resources'
    },
    problemStatement: 'Most AI courses offer basic python scripts and generic dataset tutorials. Engineering teams are left without the skills to optimize transformer models, build Retrieval-Augmented Generation (RAG) pipelines, or deploy neural networks into production environments under tight SLA restrictions.',
    solutionOverview: 'Our structured AI & ML Training bootcamp guides engineers through data preparation, neural network mathematical foundations, model evaluation, and containerized deployment. Students gain access to our GPU servers and build real-world models designed for production.',
    benefits: [
      'Upgrade your engineering team from standard software coding to machine learning architecture design.',
      'Reduce API costs by training and fine-tuning lightweight local open-source models (Llama-3, Mistral).',
      'Deploy models as robust microservices with Docker, Kubernetes, and FastAPI.',
      'Achieve verifiable global engineering credentials (CAISE).'
    ],
    features: [
      'Comprehensive curriculum covering CNNs, Transformers, and custom RAG databases.',
      'Practical projects: build a time-series forecasting engine and a text synthesizer.',
      'Weekly code review sessions with active senior AI researchers.',
      'Cryptographically signed digital verification certificates.'
    ],
    process: [
      { step: '01', title: 'Baseline Assessment', desc: 'We analyze your engineers\' coding capabilities and customize the study modules.' },
      { step: '02', title: 'Data Pipelines', desc: 'Learn data parsing, vector space calculations, and cleaning raw datasets.' },
      { step: '03', title: 'Model Training', desc: 'Train deep learning models, adjust learning rates, and fine-tune hyperparameters.' },
      { step: '04', title: 'Production Release', desc: 'Package models into Docker containers and deploy them behind secure FastAPI endpoints.' }
    ],
    caseStudy: {
      title: 'Time-Series Forecast for Logistics Firm',
      desc: 'Trained an internal development team of 8 engineers to build a custom demand forecasting model using XGBoost.',
      result: 'Optimized warehouse inventory distribution, reducing overhead by 28% in 3 months.'
    },
    testimonial: {
      quote: 'The CAISE curriculum is outstanding. Our engineers built and deployed a custom RAG documentation assistant within weeks of graduating.',
      author: 'Lakita S.',
      company: 'TechScale Global'
    },
    faqs: [
      { q: 'What is the schedule of the training program?', a: 'We run both 12-week intensive remote bootcamps and custom 4-week corporate sprints.' },
      { q: 'Is there compute hardware provided?', a: 'Yes, all students receive cloud GPU credits to run model training and fine-tuning.' }
    ]
  },
  {
    slug: 'ai-workshops',
    title: 'AI Workshops',
    icon: Presentation,
    formType: 'registration',
    hero: {
      tagline: 'Practical Generative AI and Automation Bootcamps',
      tagBadge: '1-Day & 2-Day Corporate Sprints',
      statText: 'Productivity Boost',
      statValue: 'Up to 40%'
    },
    problemStatement: 'Enterprises struggle to integrate generative AI tools into their workflows. Employees waste time with poor prompts, and management faces security risks when proprietary data is entered into public chatbots without policies.',
    solutionOverview: 'Our hands-on workshops train your staff to use LLMs, prompt engineering, vector search, and low-code AI automations securely. We map your workflows and help you build custom AI tools.',
    benefits: [
      'Automate repetitive administrative tasks, saving hours of manual data entry.',
      'Configure AI coding assistants to increase software development speeds.',
      'Enforce data security and privacy guidelines for corporate AI usage.',
      'Build custom knowledge bases (RAG) using your company\'s documentation.'
    ],
    features: [
      'Interactive, goal-oriented hackathons to prototype workflow tools.',
      'Specialized sessions designed for HR, marketing, sales, and software teams.',
      'Access to playbooks, template libraries, and API keys.',
      '30 days of dedicated follow-up support.'
    ],
    process: [
      { step: '01', title: 'Workflows Audit', desc: 'Identify bottlenecks and administrative tasks that can be automated.' },
      { step: '02', title: 'Prompt Strategy', desc: 'Learn advanced prompt engineering patterns and API structures.' },
      { step: '03', title: 'Building Prototypes', desc: 'Build custom bots, automation scripts, and RAG databases.' },
      { step: '04', title: 'Integration', desc: 'Deploy the automated systems and set up security guidelines.' }
    ],
    caseStudy: {
      title: 'Customer Ticket Automation',
      desc: 'Trained a customer service team to construct a custom RAG assistant for product documentation.',
      result: 'Automated 60% of initial ticket replies while maintaining user satisfaction.'
    },
    testimonial: {
      quote: 'The automation tools we built during the workshop saved our team over 10 hours of manual reporting every week.',
      author: 'Yujan A.',
      company: 'Aura Digital'
    },
    faqs: [
      { q: 'Are these workshops suitable for non-developers?', a: 'Yes, we design non-technical tracks focusing on prompt patterns, no-code integrations, and productivity.' },
      { q: 'Do you offer online sessions?', a: 'Yes, we organize remote workshops using interactive whiteboard tools and shared code playgrounds.' }
    ]
  },
  {
    slug: 'ai-research',
    title: 'AI Research Center',
    icon: BrainCircuit,
    formType: 'collaboration',
    hero: {
      tagline: 'Pioneering Sanskrit Computing and Low-Resource NLP',
      tagBadge: 'Open-Science Initiative',
      statText: 'Tokenizer Accuracy',
      statValue: '93.6%'
    },
    problemStatement: 'Most NLP tools and LLMs are built for high-resource languages. Classical languages like Sanskrit and regional dialects like Nepali lack high-quality digital datasets, parser frameworks, and tokenizers, leading to poor translation and high compute costs.',
    solutionOverview: 'Our AI Research division co-develops open-source tokenizers, semantic mappings, and fine-tuning pipelines. We compile and clean local datasets, building tools that accurately process low-resource and ancient texts.',
    benefits: [
      'Access open-source tokenizer weights and Sanskrit parsing datasets.',
      'Partner on international grant proposals and joint computer science studies.',
      'Train models efficiently using local compute resources.',
      'Apply advanced machine learning to linguistic and cultural preservation.'
    ],
    features: [
      'Sanskrit grammatical parser mapping classical syntax in vector spaces.',
      'Highly optimized, lightweight Nepali translation adapter weights.',
      'Collaborations with universities and linguistics departments.',
      'Open-access publication sharing datasets under permissive licenses.'
    ],
    process: [
      { step: '01', title: 'Data Compilation', desc: 'Gather, scan, and clean historical and regional language text databases.' },
      { step: '02', title: 'Tokenizer Design', desc: 'Build rule-based and neural parser models matching local grammar rules.' },
      { step: '03', title: 'Model Training', desc: 'Fine-tune models on GPU clusters using efficient training patterns.' },
      { step: '04', title: 'Academic Release', desc: 'Publish research findings and release open-source codebases.' }
    ],
    caseStudy: {
      title: 'Digital Matrix Mandala Launch',
      desc: 'Designed a semantic metadata mapping system for classical Sanskrit texts, presented at the World Sanskrit Conference.',
      result: 'Released open tokenizer weights currently used by 3 digital humanities projects.'
    },
    testimonial: {
      quote: 'Their work in computational indology provides a crucial bridge between classical linguistics and modern language models.',
      author: 'Academic Board',
      company: 'WSC 2025'
    },
    faqs: [
      { q: 'How can our university collaborate with the lab?', a: 'Submit a partnership proposal outlining your research focus and resource requirements.' },
      { q: 'Is the research software free?', a: 'Yes, we make our tokenizers, datasets, and frameworks publicly available on GitHub.' }
    ]
  },
  {
    slug: 'future-research-center',
    title: 'Future Research Center',
    icon: Search,
    formType: 'collaboration',
    hero: {
      tagline: 'Interdisciplinary Innovation in Computing and Culture',
      tagBadge: 'Open-Access Publications',
      statText: 'Active Studies',
      statValue: '12 Projects'
    },
    problemStatement: 'Academic research often stays separate from practical software development. Breakthroughs in zero-knowledge cryptography, Sanskrit NLP, and decentralized databases need a structured path to be turned into functional software products.',
    solutionOverview: 'The Future Research Center brings developers, researchers, and students together to prototype new ideas. We focus on solving compute-efficiency bottlenecks, decentralizing registries, and preserving digital heritage.',
    benefits: [
      'Collaborate with global scholars and technology architects.',
      'Access GPU clusters and blockchain testing environments.',
      'Publish research in recognized computer science journals.',
      'Build open-source prototypes that solve real-world challenges.'
    ],
    features: [
      'Decentralized identity registries using cryptographic proofs.',
      'Joint research fellowships for postgraduate students.',
      'Bi-annual technology conferences and hackathons.',
      'Active labs: Computational Linguistics, Decentralized Systems.'
    ],
    process: [
      { step: '01', title: 'Ideation', desc: 'Identify research bottlenecks or unexplored technology intersections.' },
      { step: '02', title: 'Prototyping', desc: 'Build initial open-source tools and verify code functionality.' },
      { step: '03', title: 'Evaluation', desc: 'Test system speed and benchmark results against existing standards.' },
      { step: '04', title: 'Publication', desc: 'Submit findings to peer-reviewed journals and host symposia.' }
    ],
    caseStudy: {
      title: 'Decentralized Registry Setup',
      desc: 'Designed a secure student certificate verification system on Solana/Ethereum using zero-knowledge proofs.',
      result: 'Enabled instant certificate verification, reducing database fraud risks.'
    },
    testimonial: {
      quote: 'The center\'s focus on open-source, reproducible science makes it an ideal research partner.',
      author: 'Dr. Regmi',
      company: 'University Consortia'
    },
    faqs: [
      { q: 'Who can apply for research fellowships?', a: 'Postgraduate students in computer science, data engineering, or linguistics are welcome to apply.' },
      { q: 'Where are research papers published?', a: 'We submit papers to IEEE, ACM, and regional computer science journals.' }
    ]
  },
  {
    slug: 'digital-transformation-research',
    title: 'Digital Transformation',
    icon: RefreshCw,
    formType: 'inquiry',
    hero: {
      tagline: 'Modernizing Monoliths and Legacy Corporate Systems',
      tagBadge: 'Enterprise Scalability Track',
      statText: 'Operational Speedup',
      statValue: '3x Speed'
    },
    problemStatement: 'Many growing businesses rely on legacy desktop software, Excel spreadsheets, and manual entry. This results in data errors, double-booked showings, slow response times, and a lack of real-time insights.',
    solutionOverview: 'We analyze your business workflows and build secure, cloud-based software architectures. We migrate your legacy databases, build custom management panels, and automate repetitive tasks.',
    benefits: [
      'Replace manual administrative steps with automated software pipelines.',
      'Unify separate databases into a secure, single cloud system.',
      'Access real-time business performance metrics and custom dashboards.',
      'Ensure data security with robust encryption and backup protocols.'
    ],
    features: [
      'Comprehensive system architecture audit and database design.',
      'Bespoke web panels and CRM dashboards (Next.js/React).',
      'Secure data migration from legacy formats (Excel, SQL).',
      'Continuous uptime monitoring and regular security updates.'
    ],
    process: [
      { step: '01', title: 'System Audit', desc: 'Analyze your current software, databases, and operational bottlenecks.' },
      { step: '02', title: 'Database Scoping', desc: 'Design secure database schemas and plan data migration paths.' },
      { step: '03', title: 'Custom Coding', desc: 'Develop responsive dashboards, backend systems, and API integrations.' },
      { step: '04', title: 'Deployment', desc: 'Deploy securely to AWS/GCP, migrate active data, and train staff.' }
    ],
    caseStudy: {
      title: 'Workflow Automation for Logistics Provider',
      desc: 'Migrated a manual booking system to a custom cloud-based coordination portal with automated client billing.',
      result: 'Reduced order booking time by 75% and eliminated duplicate record issues.'
    },
    testimonial: {
      quote: 'The digital transformation roadmap provided by A and I Pathshala Global turned our manual coordination into a smooth, automated system.',
      author: 'Managing Board',
      company: 'Apex Logistics'
    },
    faqs: [
      { q: 'How long does a typical migration take?', a: 'Depending on complexity, migration and product launch take between 6 to 16 weeks.' },
      { q: 'Do you provide training for our employees?', a: 'Yes, all custom development projects include training workshops and detailed documentation.' }
    ]
  },
  {
    slug: 'corporate-training',
    title: 'Corporate Training',
    icon: Briefcase,
    formType: 'inquiry',
    hero: {
      tagline: 'Agile & DevOps Upskilling for Engineering Teams',
      tagBadge: 'SLA-Driven Professional Track',
      statText: 'Deployment Speed',
      statValue: 'Same-Day'
    },
    problemStatement: 'Software development teams often work in silos, leading to slow release times, complex manual server deployments, high hosting bills, and code quality issues due to a lack of automated testing.',
    solutionOverview: 'We train your software engineers, system admins, and managers in modern IT practices. We cover infrastructure-as-code, Docker, Kubernetes, CI/CD pipelines, and automated testing.',
    benefits: [
      'Speed up software release cycles by automating build and deploy pipelines.',
      'Lower cloud hosting bills by training engineers in resource sizing.',
      'Improve code reliability with automated testing and code reviews.',
      'Align development tasks with business goals using agile practices.'
    ],
    features: [
      'Intensive workshops led by active senior software architects.',
      'Practical sandbox labs mimicking real-world servers.',
      'Custom modules tailored specifically to your company\'s tech stack.',
      'Continuous mentorship and progress tracking.'
    ],
    process: [
      { step: '01', title: 'Gap Identification', desc: 'We review your codebase, team structure, and deployment processes.' },
      { step: '02', title: 'Syllabus Alignment', desc: 'Customize training modules to target your specific hosting setup.' },
      { step: '03', title: 'Coding Sprints', desc: 'Run practical coding sprints to build automated build pipelines.' },
      { step: '04', title: 'Review & Verify', desc: 'Assess team competence and deliver reference materials.' }
    ],
    caseStudy: {
      title: 'DevOps Transition for FinTech Firm',
      desc: 'Trained 15 developers to deploy systems using Terraform and automated GitHub Action scripts.',
      result: 'Reduced release deployment cycles from 3 weeks to under 30 minutes.'
    },
    testimonial: {
      quote: 'Our developers gained immediate, practical skills in CI/CD pipeline setup. The labs were outstanding.',
      author: 'B. Devkota',
      company: 'Lighthouse FinTech'
    },
    faqs: [
      { q: 'Can you train remote development teams?', a: 'Yes, we deliver interactive remote bootcamps with shared code sandboxes.' },
      { q: 'Do you offer post-training support?', a: 'Yes, we provide 30 days of slack-based support to help teams deploy their new systems.' }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development Services',
    icon: Code,
    formType: 'inquiry',
    hero: {
      tagline: 'High-Performance React & Next.js Corporate Websites',
      tagBadge: 'Lighthouse Score 95+ Guarantee',
      statText: 'Mobile Speedup',
      statValue: '1.2s Load'
    },
    problemStatement: 'Many company websites load slowly, perform poorly on mobile devices, lack proper SEO setups, and fail to generate leads, leading to lost business opportunities.',
    solutionOverview: 'We design and build custom web applications using Next.js and React. We focus on search engine visibility, clean responsive styling, fast load times, and automated lead forms.',
    benefits: [
      'Increase organic search traffic with optimized heading structures and sitemaps.',
      'Improve user retention with pages that load in under 1.5 seconds.',
      'Simplify content updates using headless CMS integrations.',
      'Protect visitor data with secure SSL setups and clean code.'
    ],
    features: [
      'Bespoke visual layouts reflecting your brand identity.',
      'Built-in structured JSON-LD schema markups for search engines.',
      'Semantic, accessible HTML structures (WCAG AA compliant).',
      'Integration with CRMs and content editor panels.'
    ],
    process: [
      { step: '01', title: 'Planning & Specs', desc: 'Define sitemap, page structure, and target technology stack.' },
      { step: '02', title: 'Custom UI Design', desc: 'Create visual mockups tailored for mobile and desktop screens.' },
      { step: '03', title: 'Coding front-to-back', desc: 'Program responsive pages and integrate secure APIs.' },
      { step: '04', title: 'Speed Optimizations', desc: 'Optimize image sizes, page caching, and deploy to CDN hosting.' }
    ],
    caseStudy: {
      title: 'Portal Redesign for Consultancy Group',
      desc: 'Developed a multilingual Next.js portal with built-in appointment booking and dynamic filters.',
      result: 'Boosted mobile conversion rates by 34% and achieved a 98/100 Lighthouse performance score.'
    },
    testimonial: {
      quote: 'The site loads instantly on mobile and has significantly increased the volume of inquiries we receive.',
      author: 'Marketing Board',
      company: 'Apex Advisors'
    },
    faqs: [
      { q: 'Will the website be editable by my team?', a: 'Yes, we connect intuitive CMS editor panels so you can add blogs and update pages without writing code.' },
      { q: 'Do you assist with hosting configuration?', a: 'Yes, we configure hosting on Vercel, Netlify, or custom cloud servers.' }
    ]
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    icon: Cloud,
    formType: 'inquiry',
    hero: {
      tagline: 'Multi-Tenant Cloud Platforms Built to Scale',
      tagBadge: 'FastAPI & React Tech Stack',
      statText: 'Concurrent Sessions',
      statValue: '25k Users'
    },
    problemStatement: 'Building multi-tenant cloud platforms requires careful database design, secure user authentication, complex billing integration, and server scaling setups. Early-stage mistakes can lead to data leaks and high hosting bills.',
    solutionOverview: 'We guide you through product discovery, database design, secure multi-tenant isolation, Stripe payment setups, and autoscaling hosting configurations.',
    benefits: [
      'Ensure strict data privacy with row-level database isolation.',
      'Set up Stripe subscription plans and merchant checkouts.',
      'Lower hosting costs with serverless pipelines and Docker containers.',
      'Deploy rapidly using robust CI/CD code repositories.'
    ],
    features: [
      'Bespoke multi-tenant backend architectures (FastAPI, PostgreSQL).',
      'Custom user dashboards with interactive charts and CSV exports.',
      'Asynchronous task processing queues (Redis, Celery) for heavy jobs.',
      'API webhook structures enabling third-party app integrations.'
    ],
    process: [
      { step: '01', title: 'MVP Discovery', desc: 'Define database schemas, core user paths, and project backlog.' },
      { step: '02', title: 'Database Scoping', desc: 'Implement multi-tenant database security and auth tokens.' },
      { step: '03', title: 'Billing Setup', desc: 'Configure Stripe billing tiers, trial periods, and checkouts.' },
      { step: '04', title: 'Core Coding', desc: 'Develop admin controls, dashboard widgets, and run performance tests.' }
    ],
    caseStudy: {
      title: 'EdTech Learning Management SaaS',
      desc: 'Architected and launched a global LMS featuring real-time course progress tracking and user management.',
      result: 'Onboarded 25,000+ active monthly users with sub-100ms API response speeds.'
    },
    testimonial: {
      quote: 'A and I Pathshala Global built a SaaS platform that scaled to thousands of active users on launch day without issue.',
      author: 'CEO',
      company: 'EduScale Global'
    },
    faqs: [
      { q: 'Do you take equity in exchange for development?', a: 'Our standard terms are project-based or developer retainers, but we offer resource grants for incubated startups.' },
      { q: 'Do you sign Non-Disclosure Agreements (NDA)?', a: 'Yes, we sign strict NDAs prior to discussing any database architectures or product specs.' }
    ]
  },
  {
    slug: 'educational-consulting',
    title: 'Educational Consultancy',
    icon: GraduationCap,
    formType: 'consultation',
    hero: {
      tagline: 'Modernizing Curricula and Deploying Digital LMS Portals',
      tagBadge: 'Global Academic Accreditation Support',
      statText: 'Placement Increase',
      statValue: '42% Rise'
    },
    problemStatement: 'Traditional computer science and engineering curricula struggle to teach modern programming languages and AI frameworks, leaving graduates unprepared for the global tech job market.',
    solutionOverview: 'We work with colleges and schools to design modern syllabi, train teachers on AI tools, select LMS platforms, and establish international university partnerships.',
    benefits: [
      'Align college courses with the skills active software teams need.',
      'Set up digital classrooms, virtual playgrounds, and LMS portals.',
      'Guide teachers to ethically and productively use generative AI in courses.',
      'Establish credit-sharing pathways with international universities.'
    ],
    features: [
      'Custom syllabus designs featuring modern web dev, databases, and AI coding.',
      'Hands-on training courses for academic faculty and administrators.',
      'Guidelines on institutional AI usage policies and cheating checkers.',
      'Setup of Moodle, Canvas, or custom online academies.'
    ],
    process: [
      { step: '01', title: 'Syllabus Review', desc: 'Evaluate existing courses against international tech job requirements.' },
      { step: '02', title: 'Pathways Design', desc: 'Outline updated courses, including hands-on project labs.' },
      { step: '03', title: 'Faculty Sprints', desc: 'Train instructors on new tools, coding frameworks, and grading systems.' },
      { step: '04', title: 'Accreditation Support', desc: 'Assist in drafting credit-sharing agreements and verify student outcomes.' }
    ],
    caseStudy: {
      title: 'LMS Overhaul for Technical University',
      desc: 'Designed and deployed a credit-sharing computer science elective program covering time-series forecasting and Next.js.',
      result: 'Graduates secured 42% more job placements in the next hiring cycle.'
    },
    testimonial: {
      quote: 'Their guidance helped our college introduce modern data engineering courses that our students love.',
      author: 'Academic Dean',
      company: 'National College of Eng'
    },
    faqs: [
      { q: 'Can you help us configure custom online course portals?', a: 'Yes, we provide both strategic design advice and the software development to launch custom academies.' },
      { q: 'How do you structure consultancy fees?', a: 'We offer project-based terms, hourly advisory packages, or monthly retainer options.' }
    ]
  },
  {
    slug: 'global-partnerships',
    title: 'International Collaboration',
    icon: Handshake,
    formType: 'collaboration',
    hero: {
      tagline: 'Outsourcing Custom Development to Managed Offshore Squads',
      tagBadge: 'ISO-Compliant Code Quality',
      statText: 'Development Cost Save',
      statValue: '50% Save'
    },
    problemStatement: 'Hiring senior React developers, Python engineers, and DevOps architects locally is expensive and time-consuming. Offshoring code tasks often fails due to timezone mismatches, language barriers, and a lack of senior developer supervision.',
    solutionOverview: 'We assemble dedicated, managed offshore engineering teams that integrate into your agile workflow. Led by senior architects, we deliver quality code, clear documentation, and daily syncs.',
    benefits: [
      'Access senior technical talent at up to 50% lower cost than local hires.',
      'Keep development moving with teams aligned to your timezone.',
      'Maintain code quality with mandatory senior code reviews.',
      'Ensure data security with secure development setups and legal contracts.'
    ],
    features: [
      'Dedicated engineering teams matching your required tech stack.',
      'Mandatory daily standup meetings and sprint planning sessions.',
      'Strict adherence to Git workflow, documentation, and testing.',
      'Flexible contracts that adapt to your development pipeline.'
    ],
    process: [
      { step: '01', title: 'Developer Matching', desc: 'Assess your project needs and select engineers with the required experience.' },
      { step: '02', title: 'Agile Integration', desc: 'Connect the team to your Slack, Jira, and code repositories.' },
      { step: '03', title: 'Development Sprints', desc: 'Write clean code, run tests, and deploy updates via CI/CD pipelines.' },
      { step: '04', title: 'Monthly Reviews', desc: 'Review velocity metrics, plan upcoming sprints, and adjust team size.' }
    ],
    caseStudy: {
      title: 'Dedicated Team for E-Commerce platform',
      desc: 'Assembled a managed team of 4 React developers and a senior DevOps architect to rebuild a core e-commerce dashboard.',
      result: 'Rebuilt the dashboard ahead of schedule, reducing client-side errors to near zero.'
    },
    testimonial: {
      quote: 'Their developers write clean, documented code and integrate seamlessly into our daily communication channels.',
      author: 'Director of Tech',
      company: 'Swift Commerce Inc.'
    },
    faqs: [
      { q: 'Who owns the intellectual property?', a: 'All source code, assets, and database schemas belong entirely to the client under legal contracts.' },
      { q: 'What timezone schedules do you support?', a: 'We align our schedules to support US East/West, European, and Asian business hours.' }
    ]
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    icon: BrainCircuit,
    formType: 'inquiry',
    hero: {
      tagline: 'Strategic Artificial Intelligence Advisory and RAG Integrations',
      tagBadge: 'Executive Architecture Advisory',
      statText: 'Sourcing Sprints',
      statValue: 'Sub-200ms RAG'
    },
    problemStatement: 'Many businesses rush into AI integration without analyzing privacy, system latency, or cloud API costs, leading to data leaks, system crashes, and high hosting bills.',
    solutionOverview: 'Our advisory guides you through model selection, data cleaning, vector database setup, prompt sanitation, safety guards, and compute cluster sizing.',
    benefits: [
      'Avoid costly AI mistakes with custom infrastructure consulting.',
      'Protect intellectual property using local models and prompt sanitation.',
      'Optimize API overhead through efficient caching and token routing.',
      'Connect separate business databases into a secure, semantic search engine.'
    ],
    features: [
      'Feasibility evaluations comparing OpenAI/Anthropic against local hosting.',
      'Code reviews of prompt injections, system logs, and security checks.',
      'Assistance selecting vector indexing frameworks (pgvector, Qdrant).',
      'Continuous retainer support through launch and monitoring phases.'
    ],
    process: [
      { step: '01', title: 'System Auditing', desc: 'Identify document databases, workflows, and automation metrics.' },
      { step: '02', title: 'Vector Schemas', desc: 'Design secure databases and data synchronization scripts.' },
      { step: '03', title: 'Prototype Sprints', desc: 'Deploy a secure proof-of-concept for testing and evaluation.' },
      { step: '04', title: 'Production Launch', desc: 'Optimize query latency, configure caching layers, and deploy the system.' }
    ],
    caseStudy: {
      title: 'Knowledge Base Setup for Legal Archive',
      desc: 'Advised an offshore legal services provider on structuring a private semantic search database over 100,000 document records.',
      result: 'Lowered query speed to under 200ms and achieved 92% retrieval accuracy.'
    },
    testimonial: {
      quote: 'Their advice on vector database design saved our engineering team months of development time.',
      author: 'CEO',
      company: 'LegalArchive Inc.'
    },
    faqs: [
      { q: 'Do you offer implementation support?', a: 'Yes, we provide both consulting and custom development services to build your solutions.' },
      { q: 'Do you sign non-disclosure agreements?', a: 'Yes, we sign strict NDAs before discussing any architecture details.' }
    ]
  }
]
