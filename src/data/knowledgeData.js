export const learningPaths = [
  {
    type: 'beginner',
    title: 'Modern Software & Web Foundations',
    milestones: [
      { step: '01', topic: 'Python Programming', details: 'Variables, loops, functions, lists, and standard algorithms.' },
      { step: '02', topic: 'Version Control (Git)', desc: 'Branching strategies, repository structure, pull requests.' },
      { step: '03', topic: 'Web Development Basics', desc: 'Semantic HTML, CSS structures, and basic Javascript.' },
      { step: '04', topic: 'Next.js & React frameworks', desc: 'Components, state, dynamic routing, and data fetching.' }
    ]
  },
  {
    type: 'advanced',
    title: 'AI Engineering & Cryptography Track',
    milestones: [
      { step: '01', topic: 'Vector Databases', details: 'Semantic search indexing, pgvector, similarity metrics.' },
      { step: '02', topic: 'LangChain & RAG Architectures', desc: 'Retrieval-Augmented Generation, document parsing, embeddings.' },
      { step: '03', topic: 'Model Fine-Tuning (QLoRA)', desc: 'Quantized low-rank adaptation, datasets curation, hyperparameter tuning.' },
      { step: '04', topic: 'Zero-Knowledge Proofs (zk-SNARKs)', desc: 'Circom circuits, cryptographic proofs validation, ledger registries.' }
    ]
  }
]

export const glossary = [
  {
    term: 'Retrieval-Augmented Generation',
    abbreviation: 'RAG',
    definition: 'An architectural pattern where an LLM fetches relevant documents from a vector database before compiling a response, reducing model hallucination.',
    category: 'AI & Machine Learning'
  },
  {
    term: 'Zero-Knowledge Succinct Non-Interactive Argument of Knowledge',
    abbreviation: 'zk-SNARK',
    definition: 'A cryptographic proof protocol allowing a prover to demonstrate knowledge of a secret without exposing the secret parameters to the verifier.',
    category: 'Cryptography'
  },
  {
    term: 'Quantized Low-Rank Adaptation',
    abbreviation: 'QLoRA',
    definition: 'An efficient fine-tuning technique that loads base models in 4-bit precision and trains small, lightweight adapter layers, drastically lowering GPU memory requirements.',
    category: 'AI & Machine Learning'
  },
  {
    term: 'Sanskrit Morphological Parser',
    abbreviation: 'Astadhyayi Parser',
    definition: 'A rule-guided computer parser that processes Devanagari text structures based on Panini\'s Astadhyayi grammar rules to verify translation output.',
    category: 'Digital Humanities'
  },
  {
    term: 'Vector Indexing (pgvector)',
    abbreviation: 'pgvector',
    definition: 'An open-source extension for PostgreSQL allowing developers to store, index, and query vector embeddings directly within relational database schemas.',
    category: 'SaaS & Databases'
  },
  {
    term: 'Server-Side Rendering',
    abbreviation: 'SSR',
    definition: 'The process of rendering web pages on a backend server for each request before sending the HTML output to the browser, improving search engine crawlability.',
    category: 'Web Development'
  }
]

export const toolDirectories = [
  {
    category: 'AI & Language Libraries',
    tools: ['PyTorch', 'Hugging Face Transformers', 'LangChain', 'LlamaIndex', 'TensorFlow']
  },
  {
    category: 'Databases & Vector Indices',
    tools: ['pgvector (PostgreSQL)', 'Redis (Caching)', 'Pinecone', 'Qdrant', 'SQLite']
  },
  {
    category: 'Web & API Backends',
    tools: ['FastAPI (Python)', 'Next.js (React)', 'Vite (Javascript)', 'Docker', 'Kubernetes']
  }
]
