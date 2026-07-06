import { 
  BookOpen, 
  Cpu, 
  Award, 
  Briefcase, 
  GraduationCap, 
  FileSearch, 
  TrendingUp 
} from 'lucide-react'

export const educationData = [
  {
    slug: 'ai-learning-programs',
    title: 'AI Learning Programs',
    icon: Cpu,
    tagline: 'Comprehensive pathways in cognitive systems, neural network modeling, and modern AI.',
    overview: 'Our AI Learning Programs offer deep academic pathways designed to transition students from scripting basics to engineering complex neural networks. We focus on hands-on code development, data-wrangling fundamentals, deep learning paradigms, transformer architectures, and building Retrieval-Augmented Generation (RAG) models. Whether your goal is to publish academic research or join global machine learning teams, this structured path guides you step-by-step.',
    curriculum: [
      { module: 'Module 1', title: 'Data foundations & Python', topics: ['Python for Data Science', 'NumPy, Pandas, Matplotlib', 'SQL & Vector Data Operations'] },
      { module: 'Module 2', title: 'Machine Learning Core', topics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Feature Engineering & Cross-Validation'] },
      { module: 'Module 3', title: 'Deep Learning & Neural Networks', topics: ['Multi-Layer Perceptrons', 'Backpropagation Mechanics', 'CNNs & Sequence Models'] },
      { module: 'Module 4', title: 'Generative AI & LLMs', topics: ['Transformer Architectures', 'Prompt Engineering Patterns', 'Retrieval-Augmented Generation (RAG)'] }
    ],
    audience: [
      'Computer Science undergraduates and technology enthusiasts.',
      'Software engineers looking to transition to Machine Learning engineering roles.',
      'Data analysts seeking to build predictive and automated systems.'
    ],
    certifications: {
      name: 'Certified AI Systems Engineer (CAISE)',
      desc: 'Demonstrates master-level competence in dataset management, neural network training, model deployment, and generative API pipelines.',
      validity: 'Lifetime certification with digital verifiable credentials.'
    },
    careerOutcomes: [
      'Machine Learning Engineer',
      'AI Solutions Architect',
      'Data Scientist',
      'Cognitive Systems Consultant'
    ],
    faqs: [
      { q: 'Is there a final project required for graduation?', a: 'Yes, students must build, document, and deploy a unique machine learning application to a public cloud environment to pass the course.' },
      { q: 'Can I study at my own pace?', a: 'We offer both structured cohort-based schedules (12 weeks) and self-paced study plans with weekly mentor checkpoints.' }
    ]
  },
  {
    slug: 'workshops',
    title: 'Workshops',
    icon: BookOpen,
    tagline: 'Short-format, highly practical sessions focusing on immediate tools and workflows.',
    overview: 'Designed for quick upskilling, our workshops focus on practical training in modern technologies. We cover prompt engineering, custom AI agents, automated workflow integration, and next-generation developer tool chains. These sessions bypass theoretical slide decks and focus directly on coding, system configuration, and immediate tools.',
    curriculum: [
      { module: 'Session 1', title: 'Prompt engineering & LLM APIs', topics: ['Advanced Prompting Patterns', 'API Parameters (Temperature, Top-p)', 'Handling Rate Limits & JSON Responses'] },
      { module: 'Session 2', title: 'AI-assisted Development', topics: ['GitHub Copilot Configurations', 'Automated Code Generation & Explanations', 'Refactoring & Test Generation'] },
      { module: 'Session 3', title: 'Low-Code AI Integrations', topics: ['Connecting LLMs via Make/Zapier', 'Building custom chatbot interfaces', 'Vector DB connections'] }
    ],
    audience: [
      'Product managers and business professionals looking to automate tasks.',
      'Software developers wanting to speed up their coding speed.',
      'Educators interested in using AI tools in class.'
    ],
    certifications: {
      name: 'Generative AI Specialist Certificate',
      desc: 'Verifies proficiency in utilizing LLM APIs, building basic automations, and prompt engineering.',
      validity: 'Valid for 2 years (requires periodic updates on new tool integrations).'
    },
    careerOutcomes: [
      'Automation Analyst',
      'Generative AI Integrator',
      'Productivity Consultant'
    ],
    faqs: [
      { q: 'Are these workshops recorded?', a: 'Yes, all online participants receive lifetime access to session recordings, starter codebases, and templates.' },
      { q: 'Can you run a private session for our company?', a: 'Yes, we specialize in organizing private workshops tailored directly to your team\'s tools and workflows.' }
    ]
  },
  {
    slug: 'certifications',
    title: 'Certifications',
    icon: Award,
    tagline: 'Verifiable credentials to demonstrate professional skills to global employers.',
    overview: 'A and I Pathshala Global certifications provide a reliable measure of modern tech competence. Our assessment standards are designed by senior software architects and academic researchers. Each credential requires passing a practical exam (building a working system) and resolving code bugs under timed conditions. We ensure our certified graduates are ready to contribute to engineering teams immediately.',
    curriculum: [
      { module: 'Exam 1', title: 'System Architecture & Design', topics: ['API endpoint styling', 'Data model efficiency', 'Database optimization'] },
      { module: 'Exam 2', title: 'Coding & Debugging', topics: ['Resolving security alerts', 'Refactoring legacy code', 'Writing tests'] },
      { module: 'Exam 3', title: 'Cloud deployment', topics: ['Docker setups', 'CI/CD pipeline workflows', 'Uptime monitoring'] }
    ],
    audience: [
      'Self-taught developers looking to validate their practical capabilities.',
      'Graduates needing proof of skills for job applications.',
      'Companies wanting to establish internal technical benchmarks.'
    ],
    certifications: {
      name: 'Global Technical Competence Directory',
      desc: 'All certified professionals are listed in our public registry, searchable by global recruiters looking for validated talent.',
      validity: 'Verifiable via cryptographic signature.'
    },
    careerOutcomes: [
      'Certified Web Developer',
      'Certified DevOps Specialist',
      'Certified Data Engineer'
    ],
    faqs: [
      { q: 'What happens if I fail the practical exam?', a: 'Candidates can retake the exam after a 14-day study period, during which they receive feedback on their performance.' },
      { q: 'How are exams proctored?', a: 'Exams are proctored online using screen-sharing and webcam verification alongside code plagiarism checks.' }
    ]
  },
  {
    slug: 'professional-training',
    title: 'Professional Training',
    icon: Briefcase,
    tagline: 'Deep technical bootcamps to transition developers into senior and specialist roles.',
    overview: 'Our Professional Training bootcamps help intermediate software developers step into senior technical roles. We cover scalable systems architecture, microservices, cloud deployments, system security, and database design. Led by active senior engineers, these courses focus on modern production code practices.',
    curriculum: [
      { module: 'Track 1', title: 'Microservices & APIs', topics: ['FastAPI & Go microservices', 'GraphQL vs REST', 'Message Queues (RabbitMQ/Kafka)'] },
      { module: 'Track 2', title: 'Cloud Native & DevOps', topics: ['Docker & Kubernetes orchestration', 'Terraform (Infrastructure as Code)', 'CI/CD with GitHub Actions'] },
      { module: 'Track 3', title: 'Enterprise Database Design', topics: ['PostgreSQL performance tuning', 'Caching with Redis', 'Handling concurrent transactions'] }
    ],
    audience: [
      'Junior and mid-level software developers aiming for senior titles.',
      'Systems administrators transitioning into DevOps roles.',
      'Database admins needing training in distributed data systems.'
    ],
    certifications: {
      name: 'Certified Systems Architect (CSA)',
      desc: 'Verifies the ability to design, build, and maintain scalable, secure multi-container systems in production.',
      validity: 'Lifetime validity with digital verification.'
    },
    careerOutcomes: [
      'Senior Software Engineer',
      'DevOps Architect',
      'Cloud Infrastructure Specialist'
    ],
    faqs: [
      { q: 'Is there a part-time option?', a: 'Yes, our professional tracks run on evening and weekend schedules to accommodate working professionals.' },
      { q: 'Do you offer job placement assistance?', a: 'Yes, graduates gain access to our network of partner companies, interview preparation, and portfolio reviews.' }
    ]
  },
  {
    slug: 'student-programs',
    title: 'Student Programs',
    icon: GraduationCap,
    tagline: 'Providing students with the projects, mentors, and skills for global IT careers.',
    overview: 'Designed for college and university students, our Student Programs bridge the gap between academic theory and industry reality. We provide mentorship, hands-on team projects, open-source contributions, and internships. Participants learn to work with Git, resolve real bug tickets, and collaborate in agile sprint cycles.',
    curriculum: [
      { module: 'Phase 1', title: 'Development Tools & Practices', topics: ['Advanced Git & branch management', 'Agile Scrum roles & meetings', 'Code review etiquette'] },
      { module: 'Phase 2', title: 'Collaborative Project Build', topics: ['Selecting a product idea', 'Scoping the database & API', 'Front-to-back implementation'] },
      { module: 'Phase 3', title: 'Launch & Presentation', desc: ['Writing documentation', 'Hosting on static servers or cloud services', 'Public project showcase'] }
    ],
    audience: [
      'IT, Computer Science, and Engineering students.',
      'Graduates wanting project experience for their CVs.',
      'Technology enthusiasts looking for community and mentorship.'
    ],
    certifications: {
      name: 'Junior Developer Portfolio Certificate',
      desc: 'Verifies participation in a structured collaborative project and clean coding habits.',
      validity: 'Lifetime verification.'
    },
    careerOutcomes: [
      'Junior Frontend Developer',
      'Junior Backend Developer',
      'QA Test Analyst'
    ],
    faqs: [
      { q: 'Can I use this program for university credit?', a: 'Many universities accept our program for internship or project credits. We provide syllabus details and progress reports to your department.' },
      { q: 'What is the cost of the student program?', a: 'We offer academic discounts and merit-based sponsorships for qualified students.' }
    ]
  },
  {
    slug: 'research-programs',
    title: 'Research Programs',
    icon: FileSearch,
    tagline: 'Academic research tracks exploring natural language processing and decentralized computing.',
    overview: 'Our Research Programs provide a structured framework for students and academics to conduct computational research. Collaborating with the Future Research Center, participants work on projects in Sanskrit NLP, machine translation, database optimization, and blockchain scaling. We support you from initial literature review to experimental testing and writing research papers.',
    curriculum: [
      { module: 'Stage 1', title: 'Methodology & Literature', topics: ['Formulating a research question', 'Analyzing existing papers', 'Scientific methodology'] },
      { module: 'Stage 2', title: 'Experimental Design', topics: ['Building datasets', 'Configuring training pipelines', 'Evaluating model performance'] },
      { module: 'Stage 3', title: 'Scientific Writing', topics: ['Drafting abstracts', 'Formatting charts and tables', 'Writing methodology sections'] }
    ],
    audience: [
      'Postgraduate students in computer science or linguistics.',
      'Academic researchers seeking compute resources.',
      'Developers interested in contributing to scientific papers.'
    ],
    certifications: {
      name: 'Research Fellow Credential',
      desc: 'Verifies participation in a peer-reviewed research initiative or the release of a scientific dataset.',
      validity: 'Lifetime credential.'
    },
    careerOutcomes: [
      'Research Scientist',
      'Computational Linguist',
      'AI Ethics Consultant'
    ],
    faqs: [
      { q: 'Do you provide compute hardware for researchers?', a: 'Yes, approved research proposals receive access to our GPU servers for training models.' },
      { q: 'Where are research papers submitted?', a: 'We submit papers to IEEE, ACM, or regional linguistics and computer science journals.' }
    ]
  },
  {
    slug: 'career-development',
    title: 'Career Development',
    icon: TrendingUp,
    tagline: 'Empowering professionals to navigate interviews, build portfolios, and secure international contracts.',
    overview: 'Writing code is only half the battle; navigating the job market is the other. Our Career Development program prepares professionals to apply for local and global software engineering roles. We offer portfolio reviews, resume optimization, mock interviews, and guidance on navigating international contract work.',
    curriculum: [
      { module: 'Step 1', title: 'Portfolio Architecture', topics: ['Selecting showcase projects', 'Writing clean READMEs', 'Hosting live demonstrations'] },
      { module: 'Step 2', title: 'Interview Preparation', topics: ['Coding challenges & algorithms', 'System design layouts', 'Handling behavioral questions'] },
      { module: 'Step 3', title: 'Global contracting', topics: ['Setting up freelancer profiles', 'Contract negotiation basics', 'Managing remote client expectations'] }
    ],
    audience: [
      'Developers preparing to apply for new roles.',
      'Freelancers looking to secure international clients.',
      'Mid-level professionals wanting to improve their resume and profile.'
    ],
    certifications: {
      name: 'Job Readiness Verification',
      desc: 'Confirms that a candidate has passed our coding, system design, and communication mock interview stages.',
      validity: 'Verifiable credentials.'
    },
    careerOutcomes: [
      'Remote Software Consultant',
      'International Contract Developer',
      'Technical Team Lead'
    ],
    faqs: [
      { q: 'Do you offer mock interview sessions?', a: 'Yes, we schedule live mock interviews with active tech leads followed by detailed feedback.' },
      { q: 'How do you help with freelancing?', a: 'We teach you how to write proposals, optimize your profile, bid on contracts, and communicate clearly with clients.' }
    ]
  }
]
