import { 
  BrainCircuit, 
  Presentation, 
  Search, 
  Code, 
  Cloud, 
  Smartphone, 
  Globe, 
  LineChart, 
  GraduationCap, 
  BookOpen, 
  Briefcase, 
  ShieldAlert, 
  Wrench 
} from 'lucide-react'

export const servicesData = [
  {
    slug: 'ai-ml-training',
    title: 'AI & Machine Learning Training',
    icon: BrainCircuit,
    tagline: 'Empowering future-ready teams with state-of-the-art machine learning competencies.',
    overview: 'In an era defined by automated decisions and predictive analytics, understanding AI is no longer optional. Our AI & Machine Learning Training program is designed to equip individuals, software engineering teams, and technology enterprises with the core foundations and advanced concepts of artificial intelligence. We offer specialized training modules covering deep learning, neural networks, computer vision, natural language processing (NLP), and generative AI models. Participants engage in hands-on labs, model optimization, and deployment exercises designed to prepare them for international technology landscapes.',
    benefits: [
      'Accelerate business innovation by integrating native machine learning capabilities.',
      'Develop real-world expertise using modern frameworks like PyTorch, TensorFlow, and Hugging Face.',
      'Establish robust capabilities in data preprocessing, model selection, tuning, and deployment.',
      'Earn industry-recognized certifications valid across global tech sectors.'
    ],
    process: [
      { step: '01', title: 'Curriculum Alignment', desc: 'Assess baseline skills and customize the training syllabus to align with enterprise goals or individual capabilities.' },
      { step: '02', title: 'Foundational Theory', desc: 'Dive into linear algebra, statistics, data pipeline management, and classic machine learning architectures.' },
      { step: '03', title: 'Hands-on Labs', desc: 'Construct and train predictive models, fine-tune transformer networks, and explore reinforcement learning models.' },
      { step: '04', title: 'Model Evaluation', desc: 'Learn to use metrics like ROC-AUC, precision-recall, and cross-validation to assess and improve model health.' },
      { step: '05', title: 'Deployment & Scaling', desc: 'Package models using Docker and deploy them as microservices using FastAPI, Kubernetes, or cloud endpoints.' }
    ],
    features: [
      'Customized learning tracks for software developers, data practitioners, and business executives.',
      'Guided project sessions focused on solving industry-specific challenges (e.g., healthcare diagnostics, retail forecasting).',
      'Continuous mentorship from seasoned AI scientists and senior software architects.',
      'Interactive coding sandbox and access to cloud GPUs for training deep learning models.'
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'Docker', 'AWS SageMaker', 'Hugging Face'],
    caseStudies: {
      title: 'Retail Demand Forecasting Integration',
      desc: 'Collaborated with a regional logistics provider to train their internal software team in time-series forecasting. The team successfully built and deployed a custom XGBoost model that optimized warehouse storage.',
      result: 'Reduced inventory overhead costs by 28% and improved demand prediction accuracy to 94.5%.'
    },
    faqs: [
      { q: 'Are there any prerequisites for this training?', a: 'Basic familiarity with Python programming and introductory mathematics (algebra and probability) is recommended, though we offer preparatory modules for beginners.' },
      { q: 'Do you offer online sessions for international participants?', a: 'Yes, we provide synchronous virtual training, complete with interactive lab environments and dedicated digital mentorship channels.' }
    ]
  },
  {
    slug: 'ai-workshops',
    title: 'AI Workshops',
    icon: Presentation,
    tagline: 'Practical, high-impact sessions for rapid generative AI adoption and business automation.',
    overview: 'Our interactive AI Workshops are tailored for corporate teams and academic institutions looking to rapidly understand and leverage generative AI tools like Large Language Models (LLMs), AI coding assistants, and prompt engineering. These sessions bypass theoretical jargon and focus directly on productivity optimization, business process automation, and creative workflows. From automating customer support pipelines to optimizing software engineering cycles, our workshops deliver immediately actionable intelligence.',
    benefits: [
      'Boost team productivity by up to 40% through AI-augmented workflows.',
      'Unlock cost-efficient automation strategies using low-code/no-code AI integrations.',
      'Ensure secure and ethical deployment of generative tools in enterprise spaces.',
      'Gain practical familiarity with leading LLMs, vector search, and agentic workflows.'
    ],
    process: [
      { step: '01', title: 'Objective Mapping', desc: 'Define target workflows to automate or optimize within your organizational framework.' },
      { step: '02', title: 'Live Demonstrations', desc: 'Examine standard generative AI capabilities, API structures, and advanced prompt patterns.' },
      { step: '03', title: 'Hands-on Hackathon', desc: 'Collaborate to build custom agents, internal knowledge bases (RAG), or content pipelines.' },
      { step: '04', title: 'Workflow Integration', desc: 'Set up guidelines, security guardrails, and templates for day-to-day operations.' }
    ],
    features: [
      'Intense, goal-oriented single-day or multi-day workshop structures.',
      'Tailored blueprints for HR, marketing, sales, and software development departments.',
      'Provision of playground credits, starter templates, and API access keys.',
      'Comprehensive security and compliance modules for safe corporate AI usage.'
    ],
    technologies: ['OpenAI API', 'LangChain', 'LlamaIndex', 'Claude', 'GitHub Copilot', 'Make.com', 'Vector DBs'],
    caseStudies: {
      title: 'Customer Service Transformation via RAG',
      desc: 'Conducted a 2-day workshop for a customer experience platform, training their engineers to build a Retrieval-Augmented Generation (RAG) assistant for product documentation.',
      result: 'The team successfully built a working prototype that lowered ticket response times by 60% within two weeks.'
    },
    faqs: [
      { q: 'Can the workshop structure be customized for non-technical employees?', a: 'Absolutely. We design specific workflows for business professionals focusing on prompting, document synthesis, and administrative automation.' },
      { q: 'Do you offer post-workshop support?', a: 'Yes, all workshops include 30 days of slack-based follow-up support to assist teams in integrating tools into production.' }
    ]
  },
  {
    slug: 'future-research-center',
    title: 'Future Research Center',
    icon: Search,
    tagline: 'Pioneering investigations into decentralized ledger tech, cognitive computing, and digital heritage.',
    overview: 'The Future Research Center acts as our global innovation hub, conducting interdisciplinary research at the intersection of computer science, linguistics, blockchain systems, and cultural preservation. Our focus lies in solving compute-efficiency problems in neural network training, exploring decentralized identity structures, and utilizing AI models for native language translations and Sanskrit computing. We invite academic institutions and research consortia to collaborate with us to develop open-source solutions for tomorrow\'s computational challenges.',
    benefits: [
      'Access cutting-edge academic and technical papers authored by domain experts.',
      'Contribute to open-source software libraries and linguistic AI models.',
      'Partner on grant proposals and joint innovation funding applications.',
      'Explore deep technological paradigms like Zero-Knowledge proofs and Sanskrit NLP.'
    ],
    process: [
      { step: '01', title: 'Hypothesis Formulation', desc: 'Identify critical technological bottlenecks or unexplored intersections in AI and culture.' },
      { step: '02', title: 'Collaborative Research', desc: 'Engage in academic reviews, code validation, and computational experiments.' },
      { step: '03', title: 'Prototyping & Benchmarking', desc: 'Build initial open-source tools and benchmark them against existing standards.' },
      { step: '04', title: 'Academic Publishing', desc: 'Author research reports, present findings at international conferences, and release source code.' }
    ],
    features: [
      'Dedicated compute infrastructure for deep learning and blockchain simulations.',
      'Collaborations with renowned global universities and technology think tanks.',
      'Student research sponsorships and post-graduate fellowship programs.',
      'Bi-annual symposia on future computing paradigms and digital preservation.'
    ],
    technologies: ['Sanskrit NLP Tools', 'PyTorch', 'Rust (Solana/Ethereum)', 'Zero-Knowledge Proofs', 'Vector Space Semantics'],
    caseStudies: {
      title: 'Digital Matrix Mandala Project',
      desc: 'Successfully presented our digital heritage representation and Sanskrit structural semantic analysis at the 19th World Sanskrit Conference (WSC 2025) in Kathmandu.',
      result: 'Released open-source tokenizer and schema mappings for indexing ancient texts, currently used by 3 academic projects.'
    },
    faqs: [
      { q: 'How can academic researchers collaborate with the center?', a: 'We offer fellowship opportunities and joint research plans. Reach out to our research director via email with your proposal.' },
      { q: 'Is the research software open-source?', a: 'We are committed to open-science; all core frameworks, datasets, and tokenizers are made publicly available under permissive licenses.' }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: Code,
    tagline: 'High-performance, secure, and visually stunning web systems tailored to business scale.',
    overview: 'A premium digital presence starts with speed, stability, and world-class design. Our Web Development services provide bespoke digital applications, enterprise portals, and interactive platforms engineered for maximum engagement and performance. We focus on modern single-page applications (SPAs) and server-side rendered (SSR) frameworks like Next.js, React, and Svelte. By incorporating modular layouts, HSL design palettes, responsive structures, and rigorous code audits, we ensure your web systems load instantly and scale seamlessly.',
    benefits: [
      'Enhance search visibility and user retention with lightning-fast load times.',
      'Guarantee security with SSL, data validation, and threat protection protocols.',
      'Simplify updates with component-driven architecture and clean, documented code.',
      'Deliver fluid, responsive user experiences across all devices and screen sizes.'
    ],
    process: [
      { step: '01', title: 'Architecture Planning', desc: 'Define information hierarchy, user journeys, data flow, and target technology stack.' },
      { step: '02', title: 'Design System & UI', desc: 'Create custom interactive wireframes and design systems reflecting modern aesthetics.' },
      { step: '03', title: 'Front-to-Back Coding', desc: 'Program responsive layouts and integrate them with secure databases and Rest/GraphQL APIs.' },
      { step: '04', title: 'Performance Tuning', desc: 'Optimize assets, load states, server caches, and core web vitals to score 95+ on Lighthouse.' },
      { step: '05', title: 'Deployment & Monitoring', desc: 'Deploy via continuous integration (CI/CD) pipelines and set up system monitoring.' }
    ],
    features: [
      'Tailored Next.js / React architectures designed for production scalability.',
      'SEO-optimized semantic structure and built-in structured schema markups.',
      'Fully custom styles using vanilla CSS, Tailwind, or styled components (no generic templates).',
      'Integration with headless CMSs (Sanity, Strapi) or custom backends.'
    ],
    technologies: ['React', 'Next.js', 'Vite', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Vercel', 'TypeScript'],
    caseStudies: {
      title: 'Enterprise Portal for Global Consultancy',
      desc: 'Engineered a multilingual, high-performance service directory and portal featuring interactive filters, real-time client booking, and automated contact management.',
      result: 'Improved mobile conversion rate by 34% and achieved a Lighthouse performance score of 98/100.'
    },
    faqs: [
      { q: 'Will the website be editable by my non-technical team?', a: 'Yes, we integrate headless Content Management Systems (CMS) with intuitive editor panels so you can update blogs, news, and services without writing code.' },
      { q: 'How do you ensure web accessibility?', a: 'We code strictly according to WCAG 2.1 AA guidelines, ensuring clean semantic HTML, keyboard navigation, and proper contrast ratios.' }
    ]
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    icon: Cloud,
    tagline: 'Building secure, multi-tenant cloud platforms designed to scale with your user base.',
    overview: 'Transform your business model with scalable, cloud-based software. Our Software-as-a-Service (SaaS) Development solutions guide you through product discovery, database architecture, multi-tenant authentication, subscription billing engines, and elastic cloud scaling. We build resilient backends utilizing FastAPI, Go, or Node.js, combined with highly responsive React user interfaces. Our focus on clean modular code ensures your product can pivot, expand, and handle thousands of concurrent transactions securely.',
    benefits: [
      'Reduce time-to-market with organized MVP development cycles.',
      'Manage subscription states effortlessly using Stripe or local merchant APIs.',
      'Protect user data with multi-tenant isolation and row-level database security.',
      'Optimize hosting costs with serverless pipelines and autoscaling containers.'
    ],
    process: [
      { step: '01', title: 'Discovery & MVP Scoping', desc: 'Clarify core user workflows, database schemas, and define a lean MVP backlog.' },
      { step: '02', title: 'Database Design', desc: 'Implement robust database designs using PostgreSQL, Redis, or NoSQL solutions.' },
      { step: '03', title: 'Auth & Billing Setup', desc: 'Set up JWT authentication, RBAC permissions, and integrate Stripe billing plans.' },
      { step: '04', title: 'Core Feature Coding', desc: 'Build reactive user panels, background queue processes, and analytical dashboards.' },
      { step: '05', title: 'CI/CD & Cloud Launch', desc: 'Set up Docker containers, GitHub actions, and deploy to AWS, GCP, or DigitalOcean.' }
    ],
    features: [
      'Multi-tenant database architectures ensuring strict data isolation.',
      'Custom dashboard widgets with real-time charting and data exports (PDF/CSV).',
      'Asynchronous task processing queues (Celery, Redis) for heavy operations.',
      'Webhooks and developer APIs enabling external app integrations.'
    ],
    technologies: ['React', 'FastAPI', 'Go', 'Docker', 'Redis', 'PostgreSQL', 'Stripe API', 'Kubernetes'],
    caseStudies: {
      title: 'EdTech Learning Management Platform',
      desc: 'Architected and launched a global learning management system featuring real-time video classrooms, course progress tracking, and group management.',
      result: 'Onboarded 25,000+ active monthly users with sub-100ms API response latency under peak loads.'
    },
    faqs: [
      { q: 'How do you handle data security in SaaS platforms?', a: 'We enforce HTTPS-only connections, encrypt sensitive columns in databases, run automated dependency audits, and use OAuth2/JWT tokens for session security.' },
      { q: 'Can you help migrate our legacy desktop application to a SaaS model?', a: 'Yes, we specialize in refactoring desktop or monolithic applications into scalable, api-driven cloud architectures.' }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    tagline: 'Feature-rich native and cross-platform mobile apps for iOS and Android devices.',
    overview: 'Deliver your services directly to your users\' pockets. We design and develop high-performance mobile applications using React Native and Flutter for cross-platform efficiency, alongside Swift and Kotlin for native experiences. Our applications focus on smooth page animations, offline storage capability, push notification mechanics, and seamless API integrations. Whether you need a student learning app, a field service portal, or a customer dashboard, we publish highly optimized builds directly to the Apple App Store and Google Play Store.',
    benefits: [
      'Increase customer engagement through push notifications and widgets.',
      'Offer offline capabilities using local sqlite/realm database caches.',
      'Lower production cost using a single React Native/Flutter codebase.',
      'Deliver native-like tactile animations and touch response speeds.'
    ],
    process: [
      { step: '01', title: 'Mobile UX Prototyping', desc: 'Establish gesture paths, touch targets, and mobile layouts tailored for various screen dimensions.' },
      { step: '02', title: 'API Integration', desc: 'Wire mobile interfaces to secure backend systems using RESTful or WebSocket routes.' },
      { step: '03', title: 'Local Cache Setup', desc: 'Program local offline storage and synchronize changes once internet connection resumes.' },
      { step: '04', title: 'Beta Testing', desc: 'Distribute test builds using TestFlight and Firebase App Distribution to verify stability.' }
    ],
    features: [
      'Biometric authentication options (FaceID, TouchID, Android Fingerprint).',
      'Background sync services and local device permission managers.',
      'Real-time localization and multi-language support structures.',
      'Crash analytics and real-time user feedback reporting modules.'
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Redux Toolkit', 'SQLite', 'Firebase', 'Swift', 'Kotlin'],
    caseStudies: {
      title: 'PATHSALA Mobile Learning Companion',
      desc: 'Developed a lightweight mobile learning companion featuring audio lessons, interactive quizzes, offline study cards, and progress synchronization.',
      result: 'Achieved a 4.8-star average rating on the Google Play Store with over 15,000 active student installs.'
    },
    faqs: [
      { q: 'Do you handle the App Store publishing process?', a: 'Yes, we manage the entire deployment workflow, including asset preparation, privacy questionnaires, review resolution, and final production rollout.' },
      { q: 'Can the app sync data with our existing website backend?', a: 'Absolutely. We configure the mobile app to talk directly to your existing database via secure API gateways.' }
    ]
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: Globe,
    tagline: 'Driving global brand authority and client acquisition through data-backed marketing.',
    overview: 'Marketing in the modern landscape requires a scientific approach to channels, conversions, and copy. Our Digital Marketing services construct unified conversion funnels designed to increase traffic, capture high-intent leads, and maximize return on ad spend (ROAS). We specialize in programmatic ad management across Google and Meta, email marketing flows, social media authority building, and creative asset design. By implementing strict analytics tagging and attribution tracking, we ensure every marketing dollar spent is directly traceable to revenue growth.',
    benefits: [
      'Increase qualified traffic and brand exposure across organic and paid platforms.',
      'Improve conversion rates with scientific A/B testing on landing pages.',
      'Nurture customer leads automatically through targeted email sequences.',
      'Receive transparent monthly reports indicating acquisition costs (CAC) and customer value (LTV).'
    ],
    process: [
      { step: '01', title: 'Audience Profiling', desc: 'Identify target user personas, their search patterns, and competitor acquisition strategies.' },
      { step: '02', title: 'Funnel Construction', desc: 'Design landing pages, setup email capture forms, and create compelling offer systems.' },
      { step: '03', title: 'Campaign Launch', desc: 'Deploy structured ad groups, target keyword matches, and set up dynamic remarketing pixels.' },
      { step: '04', title: 'A/B Optimization', desc: 'Continuously tweak ad copy, images, bid amounts, and landing page buttons to lower costs.' }
    ],
    features: [
      'End-to-end attribution tracking utilizing Google Analytics 4 (GA4) and server-side tracking.',
      'Custom graphic assets and copywriting that resonates with international clients.',
      'Marketing automation setup (Mailchimp, ActiveCampaign, HubSpot).',
      'Advanced competitor analysis and market share reporting.'
    ],
    technologies: ['Google Ads', 'Meta Business Suite', 'GA4', 'HubSpot', 'Mailchimp', 'Semrush', 'Hotjar'],
    caseStudies: {
      title: 'Lead Generation Campaign for EdTech Startup',
      desc: 'Constructed a comprehensive search engine marketing and retargeting funnel promoting professional IT certifications.',
      result: 'Generated 4,200 high-intent student signups over 90 days, reducing average Cost Per Lead (CPL) by 35%.'
    },
    faqs: [
      { q: 'How long does it take to see results from paid advertising?', a: 'Paid campaigns (Google/Meta) begin generating traffic and leads within 48 to 72 hours of launch, though funnel optimization takes 2-4 weeks.' },
      { q: 'Do you manage monthly ad budgets directly?', a: 'We set up and configure your advertising accounts so that ad spend is billed directly to your business, while we charge a flat fee or percentage for management.' }
    ]
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    icon: Search,
    tagline: 'Sustainable search engine rankings to secure high-intent organic traffic.',
    overview: 'Appearing on the first page of Google is the ultimate growth driver. Our SEO (Search Engine Optimization) Services provide thorough technical audits, deep keyword research, on-page optimization, content strategy maps, and quality link acquisition. We optimize your website\'s structural speed, markup schema, internal linking architecture, and XML sitemaps to ensure search engines crawl and rank your pages ahead of competitors.',
    benefits: [
      'Secure long-term, high-intent traffic without recurring advertising fees.',
      'Establish company authority as a market leader in your industry.',
      'Enhance site usability, speed, and mobile responsiveness.',
      'Optimize content for international keywords to attract global clients.'
    ],
    process: [
      { step: '01', title: 'Technical SEO Audit', desc: 'Identify crawl errors, redirect loops, broken scripts, layout shifts, and page speed bottlenecks.' },
      { step: '02', title: 'Keyword Intelligence', desc: 'Identify search volume, intent patterns, and discover low-difficulty, high-revenue keywords.' },
      { step: '03', title: 'On-Page Optimization', desc: 'Refactor title tags, headings (H1-H6), meta descriptions, URLs, and image alt texts.' },
      { step: '04', title: 'Authority Building', desc: 'Publish comprehensive industry articles and secure natural backlinks from reputable sites.' }
    ],
    features: [
      'Comprehensive keyword mapping matching search intent to relevant landing pages.',
      'Structured JSON-LD schema generation (Local Business, Product, Article).',
      'Regular rank tracking, crawl performance, and keyword growth reports.',
      'In-depth competitor backlink analysis and content gap reports.'
    ],
    technologies: ['Google Search Console', 'Semrush', 'Ahrefs', 'Screaming Frog', 'Yoast / RankMath', 'Lighthouse'],
    caseStudies: {
      title: 'Organic Traffic Scale-up for Software Exporter',
      desc: 'Implemented an extensive SEO and content strategy targeting high-intent global keywords like "offshore software developers".',
      result: 'Boosted organic search traffic by 240% in 6 months, generating an additional 50+ enterprise inquiries per month.'
    },
    faqs: [
      { q: 'How long does SEO take to start showing results?', a: 'SEO is a long-term investment. Notable ranking improvements and organic traffic increases are typically observed within 3 to 6 months.' },
      { q: 'Will you clean up technical issues on our site directly?', a: 'Yes, our developers directly implement the recommended code changes, speed optimizations, and meta updates to make the audit actionable.' }
    ]
  },
  {
    slug: 'educational-consulting',
    title: 'Educational Consulting',
    icon: GraduationCap,
    tagline: 'Guiding academic institutions on modern curricula, AI integration, and global standards.',
    overview: 'Education systems must evolve to keep pace with global technological breakthroughs. Our Educational Consulting services collaborate with universities, vocational schools, and schools to design modern curricula, establish digital learning management strategies, and incorporate AI tools into student assessment systems. We help institutions transition from classic memorization models to structured, hands-on learning systems that prepare students for international careers.',
    benefits: [
      'Align academic courses with global technology industry requirements.',
      'Establish modern hybrid classrooms and LMS infrastructures.',
      'Train teaching staff to ethically and productively use generative AI tools.',
      'Achieve international academic accreditations and partnerships.'
    ],
    process: [
      { step: '01', title: 'Current System Review', desc: 'Assess existing curriculum structures, digital infrastructures, and student assessment methods.' },
      { step: '02', title: 'Strategic Roadmap', desc: 'Create a tailored curriculum update plan and select appropriate digital tools.' },
      { step: '03', title: 'Staff Enablement', desc: 'Conduct training workshops for teachers, administrators, and syllabus designers.' },
      { step: '04', title: 'Implementation Support', desc: 'Provide continuous guidance as the school deploys new modules and measures student feedback.' }
    ],
    features: [
      'Syllabus designs incorporating modern programming languages, AI concepts, and project labs.',
      'Expert advice on selecting, installing, and custom-theming learning portals.',
      'Formulating institutional guidelines on the ethical use of AI assistants.',
      'Creating academic collaboration pipelines with foreign universities.'
    ],
    technologies: ['Moodle', 'Canvas', 'Google Classroom', 'LMS Integration Tools', 'Syllabus Builders'],
    caseStudies: {
      title: 'Curriculum Overhaul for Engineering College',
      desc: 'Helped a prominent technical college introduce data science and AI engineering electives into their computer science undergraduate curriculum.',
      result: 'Increased graduate placement rates by 42% in the following academic cycle.'
    },
    faqs: [
      { q: 'Can you help us build a custom online academy?', a: 'Yes, we provide both strategic design advice and the actual software development to build custom online course portals.' },
      { q: 'Do you offer consulting for international student programs?', a: 'Yes, we assist in establishing credit-transfer pathways and international student exchange programs.' }
    ]
  },
  {
    slug: 'nepali-language-classes',
    title: 'Nepali Language Classes',
    icon: BookOpen,
    tagline: 'Culturally immersive and structurally guided Nepali language training for expats.',
    overview: 'Build deep connections and integrate into local communities. Our Nepali Language Classes are specifically crafted for expatriates, diplomats, researchers, and international NGO staff working in Nepal. Taught by native, experienced tutors, our courses combine conversational vocabulary, written Devanagari script foundation, and rich cultural context. We offer flexible schedules and customized themes to focus on conversational fluency, research terminology, or everyday interactions.',
    benefits: [
      'Communicate comfortably with local teams, vendors, and community members.',
      'Gain deep insights into cultural etiquette, traditions, and administrative structures.',
      'Learn fast with highly conversational, interactive, and structured lessons.',
      'Select customized learning tracks for research, medical, or administrative fields.'
    ],
    process: [
      { step: '01', title: 'Placement Assessment', desc: 'Determine baseline comprehension, speaking abilities, and identify career language requirements.' },
      { step: '02', title: 'Conversational Foundation', desc: 'Focus on phonetics, greetings, essential verbs, and daily situational vocabulary.' },
      { step: '03', title: 'Script & Syntax', desc: 'Introduce Devanagari reading and sentence construction logic.' },
      { step: '04', title: 'Immersive Practice', desc: 'Participate in guided cultural interactions, local market simulations, and audio discussions.' }
    ],
    features: [
      '1-on-1 private tutoring or small, interactive cohort groups.',
      'Tailored lessons for development professionals, expats, and researchers.',
      'Comprehensive digital workbooks, audio materials, and cultural checklists.',
      'Flexible options for in-person classes in Kathmandu or online classes globally.'
    ],
    technologies: ['Devanagari Layouts', 'Interactive Audio Systems', 'Custom Learning Platforms'],
    caseStudies: {
      title: 'Diplomatic Mission Cohort Program',
      desc: 'Conducted a 12-week intensive conversational Nepali course for 8 newly arrived international development officers.',
      result: 'All participants successfully achieved conversational proficiency, allowing them to conduct community visits without interpreters.'
    },
    faqs: [
      { q: 'How many hours are required to reach conversational fluency?', a: 'Most expat learners achieve basic conversational fluency within 40 to 60 hours of structured instruction combined with daily practice.' },
      { q: 'Do you provide certificate courses?', a: 'Yes, we issue official proficiency certificates demonstrating completed language contact hours and level achievements.' }
    ]
  },
  {
    slug: 'corporate-training',
    title: 'Corporate Training',
    icon: Briefcase,
    tagline: 'Upskilling enterprise workforces in modern IT architectures and agile operations.',
    overview: 'Drive digital transformation from the inside out. Our Corporate Training programs upskill your existing software engineers, managers, and system administrators in advanced technology disciplines. We deliver interactive masterclasses covering DevOps automation, cloud native architectures (AWS/GCP), API development patterns, agile product management, and enterprise database administration. Empower your team to build faster, optimize infrastructure, and adopt modern development practices.',
    benefits: [
      'Bridge internal skills gaps without costly hiring campaigns.',
      'Accelerate development velocities by training staff in DevOps and CI/CD pipelines.',
      'Lower hosting bills by teaching engineers cloud-resource optimization techniques.',
      'Improve product quality with rigorous unit testing and security training.'
    ],
    process: [
      { step: '01', title: 'Skills Gap Analysis', desc: 'Evaluate your engineering stack, development speeds, and target team skills.' },
      { step: '02', title: 'Custom Track Design', desc: 'Create custom modules targeting specific tasks, frameworks, or cloud setups.' },
      { step: '03', title: 'Interactive Sessions', desc: 'Conduct live code reviews, architecture reviews, and mock system outages.' },
      { step: '04', title: 'Post-Training Assessment', desc: 'Verify team competence using practical labs and issue certificates.' }
    ],
    features: [
      'Intensive workshops led by active senior engineers and system architects.',
      'Hands-on sandbox labs mimicking enterprise development environments.',
      'Comprehensive reference codebases, templates, and architectural checklists.',
      'Flexible options for on-site training or remote interactive calls.'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Jira/Agile Tools', 'Git/GitHub Enterprise'],
    caseStudies: {
      title: 'DevOps Enablement for Financial Services Firm',
      desc: 'Trained a team of 15 classic system administrators in infrastructure-as-code (Terraform) and automated Docker deployments.',
      result: 'The team successfully shifted to automated pipelines, reducing feature deployment cycles from 3 weeks to under an hour.'
    },
    faqs: [
      { q: 'Can training be focused on our specific company codebase?', a: 'Yes, under strict NDA, our trainers can review your architecture to tailor coding labs directly to your codebase.' },
      { q: 'What team sizes do you accommodate?', a: 'We run cohorts for teams as small as 5 engineers up to large department-wide programs for 100+ employees.' }
    ]
  },
  {
    slug: 'it-consultancy',
    title: 'IT Consultancy',
    icon: ShieldAlert,
    tagline: 'Strategic technology advisory to align systems with business goals.',
    overview: 'Technology choices can make or break a business. Our IT Consultancy services advise executives, startups, and enterprises on selecting the right tools, architectures, and hosting paths. We provide thorough system audits, security checks, database optimization recommendations, cloud cost analysis, and software vendor selection advice. We ensure your technology investment is secure, scalable, and directly supports your long-term business goals.',
    benefits: [
      'Avoid costly software architectural mistakes with independent expert advice.',
      'Lower hosting costs with detailed cloud audits and sizing tips.',
      'Identify and fix security vulnerabilities before they can be exploited.',
      'Accelerate project planning with clear, detailed technical roadmaps.'
    ],
    process: [
      { step: '01', title: 'Discovery & Interview', desc: 'Map out your business goals, user paths, and pain points in your current setup.' },
      { step: '02', title: 'System Inspection', desc: 'Review application codebases, API structures, databases, and server configurations.' },
      { step: '03', title: 'Consultation Report', desc: 'Deliver a clear report outlining issues, recommended tools, and cost estimations.' },
      { step: '04', title: 'Execution Guidance', desc: 'Support your team or help select vendors to implement the recommended changes.' }
    ],
    features: [
      'Unbiased, independent assessments (we recommend what works best, not specific vendor products).',
      'Thorough audits covering performance, security, and cloud spending.',
      'Clear, actionable reports written for both developers and business leaders.',
      'Technical support during product launches and database migrations.'
    ],
    technologies: ['AWS / Azure / GCP', 'PostgreSQL / MySQL / Redis', 'OAuth2 / SSO Systems', 'Kubernetes / Serverless'],
    caseStudies: {
      title: 'Cloud Cost Optimization for EdTech Platform',
      desc: 'Performed a comprehensive AWS architecture audit to optimize database settings, storage classes, and compute allocation.',
      result: 'Reduced monthly cloud infrastructure spending by 43% while improving page load speeds by 20%.'
    },
    faqs: [
      { q: 'Do you build the systems you recommend?', a: 'Yes, we can either work as strategic consultants guiding your team, or handle the development ourselves through our software services.' },
      { q: 'How do you structure consulting agreements?', a: 'We offer flexible structures, including project-based scopes, hourly consulting pools, or monthly advisory retainers.' }
    ]
  },
  {
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    icon: Wrench,
    tagline: 'Proactive server updates, bug fixes, and security patches to keep your site running.',
    overview: 'Software requires continuous care to stay secure and functional. Our Support & Maintenance services provide proactive monitoring, regular security patches, package updates, database backups, and rapid bug troubleshooting. We establish automated error tracking and uptime checks to resolve issues before they affect your users. From minor text changes to resolving server outages, we serve as your outsourced technical support team.',
    benefits: [
      'Ensure maximum website uptime with continuous monitoring.',
      'Protect user data with regular security updates and database backups.',
      'Resolve software issues quickly with a dedicated support team.',
      'Keep your site running smoothly on the latest browser versions.'
    ],
    process: [
      { step: '01', title: 'Environment Connection', desc: 'Securely link monitoring tools, backup storage, and error tracking to your server environment.' },
      { step: '02', title: 'Maintenance Schedule', desc: 'Set up automatic weekly dependency audits, daily backups, and security checks.' },
      { step: '03', title: 'Continuous Support', desc: 'Respond quickly to support tickets, fix bugs, and implement content updates.' },
      { step: '04', title: 'Monthly Reviews', desc: 'Deliver monthly reports summarizing server uptime, completed updates, and recommendations.' }
    ],
    features: [
      '24/7 uptime monitoring with instant developer alert systems.',
      'Secure, automated off-site database backups with recovery testing.',
      'Guaranteed support response times (SLA) starting under 4 hours.',
      'Regular security audits and patching for packages and server OS.'
    ],
    technologies: ['GitHub Actions', 'Sentry', 'New Relic', 'AWS Backup', 'Cloudflare', 'SSL/TLS Systems'],
    caseStudies: {
      title: 'Uptime Recovery for SaaS platform',
      desc: 'Took over server management and maintenance for an active SaaS platform, resolving memory leak issues and setting up robust failovers.',
      result: 'Increased platform uptime from 97.4% to 99.98% over the past 12 months.'
    },
    faqs: [
      { q: 'What is your response time for critical server issues?', a: 'For critical outages, our SLA guarantees response and debugging within 1 to 2 hours under our premium support plans.' },
      { q: 'Can we roll unused monthly support hours over to the next month?', a: 'Our standard retainer hours do not roll over, but we offer flexible hourly pools for teams with changing support needs.' }
    ]
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    icon: BrainCircuit,
    tagline: 'Strategic artificial intelligence advisory, model sizing, and RAG pipeline integration.',
    overview: 'Deploying AI requires deep architecture design. Our AI Consulting service advises executives, product managers, and engineering leads on integrating Large Language Models (LLMs), designing secure Retrieval-Augmented Generation (RAG) pipelines, choosing the right vector databases, and sizing local GPU compute resources. We ensure your AI initiatives deliver real value, protect sensitive business records, and run cost-effectively.',
    benefits: [
      'Avoid costly AI architectural mistakes with independent expert guidance.',
      'Protect user data with secure prompt sanitation and data-privacy policies.',
      'Reduce query latency and API costs using structured model sizing.',
      'Unify separate document archives into a single, semantic search engine.'
    ],
    process: [
      { step: '01', title: 'Workflows Assessment', desc: 'We map out your current business systems and evaluate AI automation opportunities.' },
      { step: '02', title: 'Pipeline Architecture', desc: 'Design secure schemas for your vector databases, LLM integrations, and caching layers.' },
      { step: '03', title: 'Prototype Scoping', desc: 'Coordinate with your engineers to build a lightweight proof-of-concept (POC).' },
      { step: '04', title: 'Production Roadmap', desc: 'Deliver a final implementation blueprint including cloud cost size estimates.' }
    ],
    features: [
      'Comprehensive feasibility studies assessing LLM performance vs API costs.',
      'Detailed reviews of prompt validation, safety guards, and rate limiters.',
      'Assistance selecting vector indexing frameworks (pgvector, Pinecone, Qdrant).',
      'Ongoing advisory retainers during model deployment cycles.'
    ],
    technologies: ['FastAPI', 'LangChain', 'LlamaIndex', 'pgvector', 'Redis', 'OpenAI / Anthropic APIs', 'Docker'],
    caseStudies: {
      title: 'Semantic Search Engine for Legal Archive',
      desc: 'Advised an offshore legal services provider on structuring a private, semantic search database over 100,000 document records.',
      result: 'Lowered search query latency to sub-200ms and achieved 92% retrieval accuracy.'
    },
    faqs: [
      { q: 'Do you write the code or just provide consulting?', a: 'We do both. We can work as independent technical advisors guiding your team, or handle the entire development through our software services.' },
      { q: 'How do you structure consulting fees?', a: 'We offer hourly consulting packages, project-based scoping, or monthly advisory retainers.' }
    ]
  }
]
