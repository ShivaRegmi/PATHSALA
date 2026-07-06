export const blogCategories = [
  { id: 'artificial-intelligence', name: 'Artificial Intelligence' },
  { id: 'technology', name: 'Technology' },
  { id: 'education', name: 'Education' },
  { id: 'research', name: 'Research' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'software-development', name: 'Software Development' },
  { id: 'blockchain', name: 'Blockchain' },
  { id: 'future-technologies', name: 'Future Technologies' }
]

export const blogPosts = [
  {
    slug: 'digital-matrix-mandala-wsc-2025',
    title: 'Special Session on "Digital Matrix Mandala" Successfully Completed at WSC 2025',
    category: 'education',
    excerpt: 'Exploring structural mapping and semantic tokenizer models for Devanagari texts at the 19th World Sanskrit Conference in Kathmandu.',
    content: `We are thrilled to announce that our special research and technical session, **"Digital Matrix Mandala: Structuring Classical Knowledge Systems in the Digital Age,"** was successfully presented at the 19th World Sanskrit Conference (WSC 2025) in Kathmandu, Nepal.

The session brought together computational linguists, Indology scholars, and AI software architects from around the world. We demonstrated how neural network architectures can be combined with classic grammar systems (like Panini\'s Astadhyayi) to build highly accurate Sanskrit tokenizers.

### Key Highlights of the Presentation:
1. **The Structural Sanskrit Tokenizer:** Our research group demonstrated an open-source tokenizer that processes Devanagari texts, identifying root words and morphological inflections with 93.6% accuracy.
2. **Metadata Schemas for Ancient Manuscripts:** We introduced structural metadata mapping frameworks that allow digital archives to index and link classical texts semantically.
3. **Sanskrit Computing and Generative AI:** Discussed how structured grammatical representations can reduce AI hallucinations when translating low-resource languages.

The event marked a significant milestone for A and I Pathshala Global\'s Future Research Center, highlighting our commitment to interdisciplinary innovation. All codebases, tokenizer weights, and presentation slides are now available on our GitHub repository.`,
    date: 'July 1, 2025',
    author: 'Pathshala Team',
    readTime: '5 min read'
  },
  {
    slug: '19th-wsc-kathmandu-nepal',
    title: '19th World Sanskrit Conference 2025 in Kathmandu, Nepal',
    category: 'research',
    excerpt: 'Hosting global scholars and showcasing our computational indology tools at the world\'s largest Sanskrit research conference.',
    content: `Kathmandu successfully hosted the 19th World Sanskrit Conference (WSC 2025), bringing together over 800 scholars, linguists, and computer scientists from 40 countries. A and I Pathshala Global participated as a technology partner, hosting workshops on computational Sanskrit.

Our presentation focused on **"Computational Models for Devanagari Lexical Mapping,"** exploring how machine learning can accelerate translation workflows and aid in digital preservation.

### Core Discoveries & Collaboration Focus:
- **Low-Resource Language Modeling:** Most global NLP models fail on ancient and regional languages. We discussed techniques to build low-compute tokenizers and language models.
- **Collaborative Research Frameworks:** Established joint research initiatives with departments from Kathmandu University and global Sanskrit centers to compile digital corpora.
- **Sanskrit in Machine Translation:** Demonstrated our parser\'s performance against baseline Google Translate outputs, showing how rule-based parser layers can improve translation grammar.

The conference highlighted the growing importance of combining digital tools with humanities research. We are excited to continue this work with our international research partners.`,
    date: 'June 16, 2025',
    author: 'Research Director',
    readTime: '6 min read'
  },
  {
    slug: 'fine-tuning-llms-low-resource-languages',
    title: 'Fine-Tuning LLMs for Low-Resource Languages: The QLoRA Approach',
    category: 'artificial-intelligence',
    excerpt: 'How to build highly accurate local language models on limited hardware using Quantized Low-Rank Adaptation.',
    content: `Mainstream Large Language Models (LLMs) from global tech giants are highly capable in English, Spanish, or Chinese, but frequently fail when processing low-resource regional languages like Nepali. The primary causes are a lack of high-quality training tokens and the high cost of training models.

At A and I Pathshala Global, our AI Research team has been experimenting with **Quantized Low-Rank Adaptation (QLoRA)** to fine-tune open models like Llama-3-8B and Mistral-7B for Nepali translation and grammar checks.

### Why QLoRA?
QLoRA allows us to load base models in 4-bit precision and add small, trainable adapter layers (LoRA matrices). This reduces GPU memory usage by up to 75%, allowing us to train models on standard developer hardware instead of expensive cloud GPU farms.

### Our Fine-Tuning Pipeline:
1. **Dataset Cleaning:** Compiling 500,000 sentences of local news, literature, and dialogues, ensuring correct spelling and grammar.
2. **Quantization:** Loading the base model weights in 4-bit NormalFloat format.
3. **Training & Evaluation:** Fine-tuning the adapter layers for 3 epochs. We evaluate model performance using BLEU scores and human reviews.

The results are highly encouraging: our fine-tuned Llama model reduced grammatical errors by 45% compared to the base model. We have published our adapter weights on Hugging Face for the community to download and use.`,
    date: 'August 12, 2025',
    author: 'AI Research Lead',
    readTime: '8 min read'
  },
  {
    slug: 'demystifying-zero-knowledge-proofs-blockchain',
    title: 'Demystifying Zero-Knowledge Proofs in Modern Blockchain Architectures',
    category: 'blockchain',
    excerpt: 'An introduction to zk-SNARKs and how they enable private, auditable digital transactions.',
    content: `Privacy is one of the biggest challenges in public blockchain systems. Because every transaction on a public ledger is visible, sharing sensitive records (such as student certificates or medical reports) presents clear privacy concerns.

**Zero-Knowledge Proofs (ZKPs)** offer a mathematical solution to this challenge. ZKPs allow one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the statement itself.

### Enter zk-SNARKs:
In our Blockchain Research lab, we are using zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) to build a **Decentralized Student Credentials Registry**. 

This system allows students to prove they graduated from a university and hold specific certifications without exposing their grades, full name, or personal details to employers or third parties.

### How it Works:
1. The university generates a cryptographic hash of the diploma and signs it.
2. The student generates a zk-proof proving they hold a signed diploma hash matching specific requirements.
3. The employer verifies the proof on a public blockchain in milliseconds, without needing to contact the university or see the student\'s full transcripts.

This technology eliminates certificate fraud while protecting user privacy, marking a significant step forward for digital identity systems.`,
    date: 'September 5, 2025',
    author: 'Cryptography Researcher',
    readTime: '7 min read'
  },
  {
    slug: 'server-side-rendering-lighthouse-scores',
    title: 'Why Server-Side Rendering is Essential for Modern Web Applications',
    category: 'software-development',
    excerpt: 'Comparing CSR, SSR, and SSG and their impact on loading speeds, SEO, and user retention.',
    content: `Many developers build web applications using client-side rendering (CSR) frameworks like standard React or Vue. While CSR is excellent for interactive client dashboards, it can lead to slow initial page load times and poor SEO performance because search engines receive empty HTML files before JavaScript loads.

To achieve premium performance, modern websites should adopt **Server-Side Rendering (SSR)** or **Static Site Generation (SSG)** using frameworks like Next.js or Astro.

### The Rendering Breakdown:
- **CSR (Client-Side Rendering):** Browser downloads a blank page, then downloads JavaScript, then fetches data, then renders the UI. Slow initial load, poor SEO.
- **SSR (Server-Side Rendering):** Server fetches data, renders HTML for each request, and sends the completed page to the browser. Fast loading, great SEO, higher hosting requirements.
- **SSG (Static Site Generation):** Pages are pre-rendered into static HTML during build time. Extremely fast, perfect SEO, but not suitable for real-time dynamic data.

### How We Achieved 98/100 Lighthouse Score:
For our corporate portal projects, we utilize Next.js with SSG for static pages (Home, About, Services) and incremental regeneration (ISR) for dynamic content (Blogs). By pre-rendering HTML and optimizing image formats, we ensure pages load in under 1.5 seconds, enhancing user experience and search rankings.`,
    date: 'October 22, 2025',
    author: 'Lead Web Engineer',
    readTime: '6 min read'
  },
  {
    slug: 'search-engine-optimization-meta-schema-strategies',
    title: 'Advanced SEO: Implementing Structured Schema for Enterprise Visibility',
    category: 'digital-marketing',
    excerpt: 'How to use JSON-LD structured data to help search engines understand your content and display rich snippets.',
    content: `Modern SEO is about more than just keywords and backlinks; it is about helping search engines understand the structure and meaning of your content. **JSON-LD Schema Markup** provides a standardized way to describe your organization, services, products, and articles.

By adding structured data, you help search engines display rich snippets (like star ratings, FAQ accordions, and event details) directly in search results, increasing click-through rates.

### Core Schema Structures to Implement:
1. **Organization Schema:** Describes your brand name, logo, social profiles, and contact details.
2. **Product & Service Schema:** Outlines specific service packages, benefits, and pricing indicators.
3. **FAQ Schema:** Displays common questions and answers directly in search results, capturing more screen space.
4. **Article Schema:** Informs search engines about the author, publication date, and main content of blog posts.

### JSON-LD Implementation Example:
We integrate custom JSON-LD scripts in the head tag of our web templates. For example, on a service page:
\`\`\`html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Workshops",
  "provider": {
    "@type": "Organization",
    "name": "A and I Pathshala Global"
  },
  "description": "Practical generative AI workshops for teams."
}
</script>
\`\`\`
This technical addition is a simple but effective way to improve search engine visibility.`,
    date: 'November 15, 2025',
    author: 'SEO & Growth Strategist',
    readTime: '5 min read'
  },
  {
    slug: 'digital-pedagogy-hybrid-education-models',
    title: 'Digital Pedagogy: Designing Structured Pathways for Hybrid Education',
    category: 'technology',
    excerpt: 'Structuring online and offline learning to optimize student retention and skill acquisition.',
    content: `Many online academies suffer from low course completion rates. The main causes are a lack of structured progression and insufficient student interaction.

At A and I Pathshala Global, our **Educational Consulting** team works to solve these challenges by designing structured hybrid learning pathways.

### The Core Pillars of Effective Hybrid Learning:
- **Outcome-Driven Syllabus:** Every course must focus on building a real project rather than just watching video tutorials.
- **AI-Assisted Practice:** We utilize lightweight AI tools to provide instant feedback on coding exercises and identify areas where students need help.
- **Synchronous Mentor Checkpoints:** Regular live calls with mentors ensure students stay motivated and receive guidance on complex topics.
- **Community Interaction:** Shared Slack channels and group projects help students build connections and learn from peers.

By combining structured online lessons with live mentor guidance, we help institutions build learning programs that keep students engaged and help them develop real-world skills.`,
    date: 'December 4, 2025',
    author: 'Educational Consultant',
    readTime: '6 min read'
  },
  {
    slug: 'the-future-of-cognitive-computing-quantum-ai',
    title: 'The Future of Cognitive Computing: Quantum AI and Brain-Computer Interfaces',
    category: 'future-technologies',
    excerpt: 'An overview of next-generation computing technologies and their potential impact on software development.',
    content: `As silicon-based microchips approach physical scaling limits, researchers are looking to new computing technologies to power the next generation of artificial intelligence.

The most promising areas of research are **Quantum Computing** and **Brain-Computer Interfaces (BCIs)**.

### Quantum Machine Learning:
Quantum computers use qubits instead of classic bits, allowing them to process complex datasets and calculations in parallel. In the future, Quantum AI could train deep neural networks in minutes that would take weeks on current GPU clusters.

### Brain-Computer Interfaces:
BCIs create direct communication pathways between the brain and computers. While initial research focuses on medical rehabilitation, future interfaces could allow developers to write code or control software systems using thought commands.

At the Future Research Center, we track these developments to understand how they will affect software development, data security, and communication. Staying informed about next-generation technologies helps us design systems that are ready for the future.`,
    date: 'January 10, 2026',
    author: 'Future Tech Specialist',
    readTime: '7 min read'
  }
]
