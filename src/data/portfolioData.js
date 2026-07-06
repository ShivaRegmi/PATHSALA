export const portfolioData = [
  {
    slug: 'pathsala-mobile-app',
    title: 'PATHSALA Mobile Learning Companion',
    category: 'educational',
    client: 'AI Pathsala Academic',
    overview: 'A lightweight mobile learning application designed to help Nepali students master academic courses, featuring audio lessons, interactive quizzes, offline study cards, and progress synchronization.',
    challenge: 'Students in regional areas often face slow or unstable internet connections, making video-heavy learning platforms difficult to use. The challenge was to build an app that runs smoothly on low-end devices and works offline.',
    solution: 'Developed a cross-platform React Native app with SQLite caching. The app downloads lesson audio and text locally when connected to the internet, allowing offline study. Progress synchronizes automatically once internet connection resumes.',
    results: [
      'Successfully published to the Google Play Store with over 15,000 active student installs.',
      'Achieved a 4.8-star average rating and less than 1% crash rate on low-end Android devices.',
      'Reduced average student data usage by 70% compared to standard web-based video portals.'
    ],
    metrics: { label: 'Active Installs', value: '15,000+' },
    techUsed: ['React Native', 'SQLite', 'TypeScript', 'Redux Toolkit', 'FastAPI', 'AWS CloudFront']
  },
  {
    slug: 'saas-edtech-platform',
    title: 'SaaS Enterprise Learning Portal',
    category: 'saas',
    client: 'EduScale Global',
    overview: 'A multi-tenant cloud platform built for educational institutions to manage courses, track student progress, coordinate enrollments, and process payments.',
    challenge: 'Institutions needed a scalable, secure learning management system (LMS) that could handle thousands of concurrent users, manage distinct user roles, and support regional payment integrations.',
    solution: 'Architected a multi-tenant FastAPI backend with strict row-level security in PostgreSQL. Engineered a responsive React dashboard showing real-time course analytics, student performance charts, and integrated payment gateways.',
    results: [
      'Onboarded 25,000+ active monthly users across 8 major colleges and institutions.',
      'Maintained sub-100ms API response times under peak exam loads.',
      'Processed over $150k in tuition payments with zero ledger errors.'
    ],
    metrics: { label: 'Monthly Users', value: '25,000+' },
    techUsed: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Stripe & local APIs', 'AWS ECS']
  },
  {
    slug: 'digital-mandala-nlp',
    title: 'Sanskrit NLP & Heritage Registry',
    category: 'ai',
    client: 'Future Research Center',
    overview: 'An open-source natural language processing tokenizer and schema mapper designed to index and analyze ancient Sanskrit grammatical structures.',
    challenge: 'Sanskrit features complex grammar and inflections, making standard NLP tokenizers ineffective. The goal was to build a tokenizer that accurately maps root words and inflections in Devanagari texts.',
    solution: 'Collaborated with computational linguists to design a rule-based tokenizer and neural part-of-speech tagger. Built an interactive registry where users can search, map, and view structural semantic trees of classical texts.',
    results: [
      'Presented findings and demonstrated the tool at the 19th World Sanskrit Conference (WSC 2025).',
      'Released tokenizer as an open-source library, currently used by 3 digital humanities research projects.',
      'Achieved a 93.6% accuracy rate in identifying Sanskrit root nouns and inflections.'
    ],
    metrics: { label: 'Linguistic Accuracy', value: '93.6%' },
    techUsed: ['Python', 'PyTorch', 'Sanskrit Grammar Engines', 'React', 'Tailwind CSS', 'Docker']
  },
  {
    slug: 'nepali-low-resource-llm',
    title: 'Nepali Language LLM Fine-Tuning',
    category: 'ai',
    client: 'National AI Initiative',
    overview: 'Fine-tuning open-source LLMs to improve grammar, context understanding, and local idiom accuracy in the Nepali language.',
    challenge: 'Mainstream LLMs frequently hallucinate or generate grammatically incorrect responses in Nepali due to a lack of training data. We needed to compile a high-quality dataset and fine-tune models within limited budget constraints.',
    solution: 'Compiled and cleaned a dataset of local news, academic texts, and translated dialogues. Fine-tuned Llama-3-8B and Mistral-7B models using QLoRA optimization on our GPU cluster.',
    results: [
      'Reduced translation grammatical errors by 45% compared to baseline open models.',
      'Released the model weights on Hugging Face, securing 800+ downloads in the first month.',
      'Completed training in under 120 GPU hours through efficient compute scheduling.'
    ],
    metrics: { label: 'Error Reduction', value: '45%' },
    techUsed: ['Python', 'PyTorch', 'QLoRA', 'Hugging Face Transformers', 'GPU Cluster', 'Linux']
  },
  {
    slug: 'enterprise-consultancy-portal',
    title: 'High-Performance Corporate Website',
    category: 'web',
    client: 'Apex Global Advisory',
    overview: 'A premium, multilingual enterprise corporate portal designed for search engine visibility, visual design, and lead generation.',
    challenge: 'The client\'s old website loaded slowly, was difficult to navigate on mobile, and failed to generate qualified leads from search engines.',
    solution: 'Engineered a server-side rendered (SSR) Next.js website with semantic HTML structures, structured JSON-LD schema markups, and optimized assets to score 95+ on Google Lighthouse.',
    results: [
      'Boosted organic search traffic by 240% in 6 months, generating 50+ enterprise inquiries per month.',
      'Achieved a Lighthouse performance score of 98/100 and a 34% increase in mobile conversion rates.',
      'Successfully integrated automated lead nurturing forms connected to the client\'s CRM.'
    ],
    metrics: { label: 'Organic Traffic Rise', value: '240%' },
    techUsed: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Sanity CMS', 'Vercel']
  },
  {
    slug: 'real-estate-crm-saas',
    title: 'SaaS Property Management Portal',
    category: 'saas',
    client: 'Lighthouse Properties',
    overview: 'A SaaS platform built for real estate agencies to coordinate listing databases, manage client inquiries, and track sales performance.',
    challenge: 'Agents were using disconnected spreadsheets and messaging threads, leading to lost client details, double-booked showings, and poor analytics tracking.',
    solution: 'Developed a custom CRM featuring interactive kanban boards, shared team mailboxes, automated showing scheduler calendars, and visual reports.',
    results: [
      'Helped 40+ offices automate listing distribution and client communication.',
      'Saved agents an average of 8 hours of administrative work per week.',
      'Increased listing conversion rate by 18% through faster response times.'
    ],
    metrics: { label: 'Weekly Hours Saved', value: '8 Hrs' },
    techUsed: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS Cognito', 'Tailwind CSS']
  }
]
