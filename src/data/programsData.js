import { 
  Handshake, 
  School, 
  Building2, 
  FileCheck, 
  Map, 
  Terminal, 
  Flame, 
  Compass, 
  HeartHandshake, 
  Megaphone 
} from 'lucide-react'

export const programsData = [
  {
    slug: 'global-partnerships',
    title: 'Global Partnerships',
    icon: Handshake,
    tagline: 'Connecting our talent and tech solutions to international clients and agencies.',
    overview: 'A and I Pathshala Global operates as a bridge connecting local talent and IT solutions to international enterprises. We establish strategic partnerships with global software agencies, startup incubators, and corporate clients to export quality web, SaaS, and AI development services. These partnerships help our clients scale their technical teams cost-effectively while providing high-quality careers for local developers.',
    keyObjectives: [
      'Build long-term software service agreements with international agencies.',
      'Coordinate technical projects across global timezones.',
      'Provide local development teams that follow international coding standards.',
      'Connect global capital with technical talent.'
    ],
    details: [
      { title: 'Offshore Development Teams', content: 'We assemble dedicated development teams, managed by senior software architects, that integrate into your agile workflow.' },
      { title: 'Project Outsourcing', content: 'We design and build custom software projects from initial requirement gathering to deployment and support, based on your product specs.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Consultation & Scoping', desc: 'Discuss your project requirements, target technology stack, and required team size.' },
      { step: '02', title: 'Team Matching', desc: 'Select developers with the required experience in React, Python, cloud architecture, or databases.' },
      { step: '03', title: 'Agile Integration', desc: 'Integrate the team into your communication channels (Slack, Jira) and start sprint planning.' },
      { step: '04', title: 'Delivery & Support', desc: 'Deploy completed code updates through continuous integration pipelines and provide support.' }
    ],
    faqs: [
      { q: 'How do you handle intellectual property (IP)?', a: 'All IP and source code built under our partnership agreements belong entirely to the client, secured by legal contracts.' },
      { q: 'What timezones do your teams support?', a: 'We align our daily sync meetings and work schedules to support North American, European, and Asia-Pacific timezones.' }
    ]
  },
  {
    slug: 'academic-collaborations',
    title: 'Academic Collaborations',
    icon: School,
    tagline: 'Partnering with universities to align IT curricula with modern industry practices.',
    overview: 'Academic institutions must adapt to keep pace with rapid digital advancements. We partner with universities and technical colleges to design modern computer science curricula, set up digital classrooms, and guide student research. By connecting academic theory to practical industry needs, we help institutions prepare students for global careers.',
    keyObjectives: [
      'Help universities introduce data science and AI engineering electives.',
      'Host joint student hackathons and technical bootcamps.',
      'Provide students with access to real project experience and mentors.',
      'Establish credit-sharing pathways and student internships.'
    ],
    details: [
      { title: 'Curriculum Overhaul', content: 'We work with academic departments to update syllabi, introducing modern programming languages and practical project work.' },
      { title: 'Joint Research Symposia', content: 'We co-host academic conferences, such as the World Sanskrit Conference (WSC 2025) session, to share research findings.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Syllabus Review', desc: 'Assess existing courses and identify areas that need updating.' },
      { step: '02', title: 'Module Design', desc: 'Create new course outlines covering modern web frameworks, cloud systems, or machine learning.' },
      { step: '03', title: 'Teacher Training', desc: 'Conduct workshops to train teaching staff on new course topics and tools.' },
      { step: '04', title: 'Sponsorship Setup', desc: 'Define internship allocations and student project sponsorships.' }
    ],
    faqs: [
      { q: 'Can we co-author research papers?', a: 'Yes, our Future Research Center collaborates with university faculty to conduct and publish joint research.' },
      { q: 'Are your curriculum designs accredited?', a: 'We design curricula to fit within existing university accreditation guidelines, assisting with the approval process.' }
    ]
  },
  {
    slug: 'industry-collaborations',
    title: 'Industry Collaborations',
    icon: Building2,
    tagline: 'Partnering with tech companies to test and deploy software solutions.',
    overview: 'We work with technology firms, cloud platforms, and local businesses to design and test software products. These collaborations allow us to try new software tools, benchmark application performance, and deploy software solutions that solve real-world challenges.',
    keyObjectives: [
      'Co-develop software prototypes and test integration methods.',
      'Benchmark database and hosting performance under high user loads.',
      'Test new cloud tools and security protocols in development environments.',
      'Help local businesses adopt modern digital tools.'
    ],
    details: [
      { title: 'Product Co-Development', content: 'We partner with startups and enterprises to prototype new features and test API integrations.' },
      { title: 'Technology Proof-of-Concepts', content: 'We build and test small-scale systems to evaluate new technologies (like vector databases or blockchains) before full deployment.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Project Identification', desc: 'Select a tech stack or product feature to co-develop or test.' },
      { step: '02', title: 'Prototype Scoping', desc: 'Define success metrics, database schemas, and API requirements.' },
      { step: '03', title: 'Collaborative Coding', desc: 'Work with partner engineers to build the prototype and run performance tests.' },
      { step: '04', title: 'Release & Benchmark', desc: 'Deploy the system and publish case studies or performance data.' }
    ],
    faqs: [
      { q: 'How do you handle development costs?', a: 'We offer flexible cost-sharing agreements for joint projects, based on each partner\'s contribution and goals.' },
      { q: 'Are collaborative tools open-source?', a: 'We support open-source, but we also co-develop proprietary products under custom license agreements.' }
    ]
  },
  {
    slug: 'student-success-stories',
    title: 'Student Success Stories',
    icon: FileCheck,
    tagline: 'Celebrating the achievements of graduates working in global tech companies.',
    overview: 'Our training programs and student programs prepare graduates to enter the tech industry. Here we share the career paths of our students who have joined global engineering teams, launched successful startups, or published academic research.',
    keyObjectives: [
      'Highlight graduate achievements and career growth.',
      'Demonstrate the practical impact of our training programs.',
      'Inspire current students with real success stories.',
      'Connect recruiters with our network of successful alumni.'
    ],
    details: [
      { title: 'Career Transitions', content: 'Read how students from non-technical backgrounds successfully transitioned into machine learning or web development roles.' },
      { title: 'Project Successes', content: 'Explore software applications designed by our students that have grown into active services.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Training & Projects', desc: 'Students complete technical courses and build real team projects.' },
      { step: '02', title: 'Portfolio Build', desc: 'Work with mentors to create personal portfolios and prepare for technical interviews.' },
      { step: '03', title: 'Job Placement', desc: 'Apply to roles and secure positions in local or international software teams.' },
      { step: '04', title: 'Community Mentorship', desc: 'Alumni return to mentor the next generation of students.' }
    ],
    faqs: [
      { q: 'How can alumni share their success stories?', a: 'Alumni can submit their career updates and project profiles to our student support team.' },
      { q: 'Do you offer recruiter contact details?', a: 'Yes, we link to verified LinkedIn profiles so recruiters can connect with our graduates.' }
    ]
  },
  {
    slug: 'internship-programs',
    title: 'Internship Programs',
    icon: Map,
    tagline: 'Practical internship pathways in web development, SaaS design, and machine learning.',
    overview: 'Our Internship Programs provide students and recent graduates with real software engineering experience. Working on active projects under the guidance of senior developers, interns learn to write clean code, participate in code reviews, and work in agile sprint cycles.',
    keyObjectives: [
      'Provide interns with real project experience.',
      'Teach industry-standard practices for Git, APIs, and databases.',
      'Help interns build high-quality professional portfolios.',
      'Identify talented graduates for full-time software engineering roles.'
    ],
    details: [
      { title: 'Web Development Internship', content: 'Interns build and test responsive React frontends and write secure Node.js or FastAPI backend endpoints.' },
      { title: 'AI Engineering Internship', content: 'Interns work with datasets, prepare data, fine-tune models, and configure search pipelines.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Application & Screening', desc: 'Submit your coding samples and complete a basic programming test.' },
      { step: '02', title: 'Onboarding & Setup', desc: 'Configure your local setup, get access to code repos, and meet your mentor.' },
      { step: '03', title: 'Sprint Tasks', desc: 'Work on assigned development tasks, resolve bugs, and submit pull requests.' },
      { step: '04', title: 'Final Review', desc: 'Present your completed project work and receive a reference letter.' }
    ],
    faqs: [
      { q: 'Are your internships paid?', a: 'Yes, we provide monthly stipends for all full-time interns, along with compute credits.' },
      { q: 'What is the duration of the internship?', a: 'Our standard internships run for 12 weeks, with options to extend based on performance.' }
    ]
  },
  {
    slug: 'startup-incubation',
    title: 'Startup Incubation',
    icon: Flame,
    tagline: 'Supporting early-stage startups with software, compute resources, and guidance.',
    overview: 'Our Startup Incubation program helps early-stage tech startups transition from initial concept to a working product. We provide incubated startups with software development support, access to GPU servers, database design advice, and connection to seed funding networks.',
    keyObjectives: [
      'Accelerate product development cycles for early startups.',
      'Provide server space and compute credits for AI products.',
      'Advise founders on product architecture and business design.',
      'Connect startups with angel investors and tech partners.'
    ],
    details: [
      { title: 'Technical Incubation', content: 'Startups receive direct software support from our senior engineers to build their MVP.' },
      { title: 'Compute Sponsorship', content: 'AI startups receive free access to our GPU servers to train and test their models.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Startup Pitch', desc: 'Apply with your product deck, target market analysis, and team credentials.' },
      { step: '02', title: 'Technical Scoping', desc: 'Identify software development needs, database schemas, and compute requirements.' },
      { step: '03', title: 'Development Phase', desc: 'Build the MVP, run user tests, and deploy to server environments.' },
      { step: '04', title: 'Demo Day', desc: 'Present your working product to tech partners and angel investors.' }
    ],
    faqs: [
      { q: 'Do you take equity in incubated startups?', a: 'We offer flexible support options, including equity-free resource grants or custom joint development agreements.' },
      { q: 'What type of startups do you incubate?', a: 'We focus on software startups in AI, educational technology, decentralized systems, and SaaS platforms.' }
    ]
  },
  {
    slug: 'innovation-hub',
    title: 'Innovation Hub',
    icon: Terminal,
    tagline: 'A collaborative workspace for prototyping new ideas and experimenting with tech.',
    overview: 'The Innovation Hub is our central laboratory for prototyping and experimental software. We bring together developers, researchers, and students to build tech solutions, run coding hackathons, and explore new software tools.',
    keyObjectives: [
      'Provide access to advanced software and hardware tools.',
      'Encourage collaboration across different tech disciplines.',
      'Prototype open-source tools that solve real-world challenges.',
      'Host weekly developer meetups and technical presentations.'
    ],
    details: [
      { title: 'Prototyping Lab', content: 'A workspace equipped with high-speed internet, compute access, and testing devices.' },
      { title: 'Weekly Tech Talks', content: 'Presentations by senior developers and researchers on new frameworks, security practices, or AI tools.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Idea Submission', desc: 'Submit a prototype proposal or outline a tool you want to build.' },
      { step: '02', title: 'Resource Allocation', desc: 'Approved projects receive compute access, database setup, and mentor matching.' },
      { step: '03', title: 'Development Cycle', desc: 'Build the prototype, run tests, and collaborate with other developers.' },
      { step: '04', title: 'Public Demo', desc: 'Showcase the completed prototype at our weekly tech meetup.' }
    ],
    faqs: [
      { q: 'Who can join the Innovation Hub?', a: 'The hub is open to local developers, postgraduate students, and tech enthusiasts. Apply online to get access.' },
      { q: 'Is there a cost to use the workspace?', a: 'Our shared workspace and basic compute access are free for approved open-source projects.' }
    ]
  },
  {
    slug: 'community-programs',
    title: 'Community Programs',
    icon: Compass,
    tagline: 'Supporting local tech communities with workshops, resources, and mentorship.',
    overview: 'We support local tech communities, student clubs, and open-source groups. Through our Community Programs, we provide free learning resources, sponsor workshops, organize meetups, and mentor developers from underrepresented groups in technology.',
    keyObjectives: [
      'Increase access to high-quality technology education.',
      'Sponsor local tech events, hackathons, and study groups.',
      'Provide mentorship to developers entering the industry.',
      'Promote the development of open-source software solutions.'
    ],
    details: [
      { title: 'Tech Education Sponsorship', content: 'We offer free training course seats and workshop slots to students and local community organizers.' },
      { title: 'Open-Source Mentorship', content: 'Experienced developers guide students as they make their first contributions to open-source codebases.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Community Outreach', desc: 'Identify local student clubs or developer groups needing support.' },
      { step: '02', title: 'Resource Planning', desc: 'Allocate course sponsorships, mentor hours, and event spaces.' },
      { step: '03', title: 'Program Delivery', desc: 'Run workshops, host coding study groups, and provide training materials.' },
      { step: '04', title: 'Feedback & Improvement', desc: 'Gather feedback to adjust and expand our support for local tech groups.' }
    ],
    faqs: [
      { q: 'How can our student club apply for sponsorship?', a: 'Your club officers can submit a sponsorship request detailing your planned events and resource needs.' },
      { q: 'Can developers volunteer as mentors?', a: 'Yes, experienced software developers are welcome to volunteer as mentors for our community coding sessions.' }
    ]
  },
  {
    slug: 'events-conferences',
    title: 'Events & Conferences',
    icon: Megaphone,
    tagline: 'Hosting technology conferences, academic symposia, and developer meetups.',
    overview: 'We organize and participate in regional and international technology conferences, developer meetups, and academic symposia. These events serve to share research, showcase software prototypes, and connect developers, students, and businesses.',
    keyObjectives: [
      'Provide a platform to present computer science and linguistics research.',
      'Connect local software developers with international clients and agencies.',
      'Showcase technology prototypes developed in our Innovation Hub.',
      'Discuss digital policy, security, and AI development standards.'
    ],
    details: [
      { title: 'Annual Tech Symposium', content: 'Our main event featuring research presentations, product demos, and discussions on future technology.' },
      { title: 'Developer Meetups', content: 'Regular, informal meetups focusing on specific coding topics, databases, or frameworks.' }
    ],
    timelineOrProcess: [
      { step: '01', title: 'Call for Presentations', desc: 'Invite developers, researchers, and tech leads to submit presentation topics.' },
      { step: '02', title: 'Sponsorship & Venue Setup', desc: 'Coordinate with tech partners and configure hybrid online streaming setups.' },
      { step: '03', title: 'Event Delivery', desc: 'Run presentations, host panel discussions, and organize coding workshops.' },
      { step: '04', title: 'Proceedings Release', desc: 'Publish conference reports, presentation videos, and open-source code repositories.' }
    ],
    faqs: [
      { q: 'Are conference sessions streamed online?', a: 'Yes, we stream main presentations and publish video recordings online for remote viewers.' },
      { q: 'How can companies sponsor our tech events?', a: 'Interested sponsors can contact our events coordinator to discuss branding and presentation options.' }
    ]
  }
]
