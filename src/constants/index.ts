import { Shield, Brain, Cpu, Globe, Activity, Zap, Lock, Bot } from 'lucide-react';

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Careers', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    icon: Cpu,
    title: 'Custom Software Architecture',
    description: 'Scalable, fault-tolerant enterprise ecosystems built with modern stacks (Node, Go, Next.js). Designed for high concurrency and performance.',
    tags: ['Next.js', 'Go', 'Microservices', 'GraphQL'],
  },
  {
    icon: Brain,
    title: 'AI & Cognitive Automation',
    description: 'Integrate LLMs, neural networks, and predictive telemetry models directly into your business processes to automate workflows intelligently.',
    tags: ['Python', 'PyTorch', 'OpenAI', 'TensorFlow'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Auditing',
    description: 'Comprehensive vulnerability scanning, penetration testing, threat hunting, and compliance auditing to secure your digital assets.',
    tags: ['Zero-Trust', 'Pen-Testing', 'OAuth 2.0', 'IAM'],
  },
  {
    icon: Globe,
    title: 'High-Scale Cloud Engineering',
    description: 'Automated Kubernetes orchestration, multi-cloud architectures, CI/CD pipelines, and infrastructure as code deployment solutions.',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
  },
];

export const PROJECTS = [
  {
    title: 'Aether Telemetry Platform',
    category: 'Cloud Engineering',
    description: 'A real-time metrics capture backend processing 100k+ events/sec, using Apache Kafka and custom Next.js visualization boards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Rust', 'Kafka', 'Tailwind'],
    link: '#',
    challenge: 'Legacy telemetry systems suffered from memory bloat and write bottlenecks under 30k events/sec spikes, causing data loss.',
    solution: 'Constructed an asynchronous ingestion broker in Rust with ring buffers, feeding into a Kafka partition array and displayed in a real-time Next.js console.',
    kpis: ['99.99% telemetric write accuracy', 'Latency reduced by 85%', 'Ingested 100k+ events/sec']
  },
  {
    title: 'Nova AI Agent Engine',
    category: 'Artificial Intelligence',
    description: 'Autonomous customer support agents featuring localized fine-tuned LLM execution, zero latency routing, and CRM sync integrations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Python', 'FastAPI', 'MongoDB'],
    link: '#',
    challenge: 'API latency overheads from calling third-party cloud LLMs caused high customer churn during interactive chat sessions.',
    solution: 'Deployed locally hosted parameters of fine-tuned LLaMA-3 models using vLLM on dedicated GPUs, and connected it to local CRM stores with a FastAPI broker.',
    kpis: ['Inference speeds under 400ms', 'Token spend overhead reduced by 65%', '85+ agents running active']
  },
  {
    title: 'Vortex Secure Encryption Suite',
    category: 'Cybersecurity',
    description: 'Fully audited end-to-end encrypted messenger protocol implemented for healthcare personnel, meeting strict HIPAA compliance guidelines.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'WebRTC', 'Go', 'Redis'],
    link: '#',
    challenge: 'Data storage leakages and unsecured websocket channels violated strict healthcare privacy compliance frameworks.',
    solution: 'Designed mTLS handshakes and AES-256 database protection overlays. Encrypted media sharing runs direct P2P connections via WebRTC channels.',
    kpis: ['100% HIPAA compliant system', 'Zero unencrypted trace routes', '450+ security audits certified']
  },
  {
    title: 'Starlight DB Broker',
    category: 'Cloud Engineering',
    description: 'High-speed database proxy layer routing 500k queries/sec across clustered PostgreSQL read-replicas with dynamic caching.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    tags: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#',
    challenge: 'Dynamic database locks and read contention during high transaction periods degraded API performance.',
    solution: 'Built a lightweight query routing layer in Golang that checks redis cache hits before sending read actions to specific replica pools.',
    kpis: ['500k+ read requests/sec handled', 'Query latencies reduced to 1.2ms', 'AWS DB overhead reduced by 40%']
  },
  {
    title: 'Helios Zero-Trust Vault',
    category: 'Cybersecurity',
    description: 'Audited enclave secrets vault with threshold cryptography for remote banking clusters and automated key rotations.',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff270190?auto=format&fit=crop&w=800&q=80',
    tags: ['Rust', 'AWS Nitro', 'Vault', 'Zero-Trust'],
    link: '#',
    challenge: 'Shared root secrets exposed databases to vulnerability risks from compromised administrative accounts.',
    solution: 'Configured AWS Nitro enclaves utilizing threshold cryptography schemas, where key decryption requires concurrent approval signatures.',
    kpis: ['Zero-Trust audited security', 'Root key compromise risk eliminated', '100% automated key rotations']
  },
  {
    title: 'Centaur Cognitive Router',
    category: 'Artificial Intelligence',
    description: 'Dynamic agent router orchestrating multi-LLM workflows with sub-second feedback loops and automatic fallbacks.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'FastAPI', 'Qdrant', 'LangChain'],
    link: '#',
    challenge: 'High cost and slow responses when routing every query to GPT-4 regardless of query complexity.',
    solution: 'Created a classification router checking query complexity. Routes simple queries to localized models and complex logic to GPT-4.',
    kpis: ['API calling costs reduced by 70%', 'Mean latency lowered to 350ms', 'Seamless failover rates']
  },
  {
    title: 'Orion Real-time Analytics',
    category: 'Full-Stack',
    description: 'Live analytics pipeline built using Apache Flink and a Next.js visualization dashboard tracking real-time user metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Go', 'Apache Flink', 'PostgreSQL'],
    link: '#',
    challenge: 'Batch jobs took 12+ hours to calculate user telemetry records, leading to delayed business decisions.',
    solution: 'Designed a stream processing structure in Apache Flink feeding directly into time-series indices for real-time visualization dashboards.',
    kpis: ['Metric computation time: 1.5s', 'No query execution lag', 'Scaled to 50M records/day']
  },
  {
    title: 'Aegis Network Firewall',
    category: 'Cybersecurity',
    description: 'eBPF-powered network filter blockading DDoS anomalies at kernel level before reaching application space.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tags: ['C++', 'eBPF', 'Linux Kernel', 'Grafana'],
    link: '#',
    challenge: 'Application-level firewalls consumed 100% of CPU during malicious traffic spikes, causing service failures.',
    solution: 'Compiled custom eBPF filters hooked directly to driver network sockets, dropping malicious packets instantly before user-space buffer allocation.',
    kpis: ['DDoS traffic dropped in 0.05ms', 'Application CPU overhead: < 2%', '100% automated threat detection']
  },
  {
    title: 'Nebula Multi-Cloud Fabric',
    category: 'Cloud Engineering',
    description: 'Declarative GitOps template autoscaling serverless pod nodes across AWS and Google Cloud Platform.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['Kubernetes', 'Terraform', 'ArgoCD', 'GCP'],
    link: '#',
    challenge: 'Unpredictable cloud availability limits in individual hosting zones threatened high-transaction system reliability.',
    solution: 'Setup multi-cloud Kubernetes clusters synchronized continuously through GitOps pipelines running automatic DNS traffic routing.',
    kpis: ['99.999% global system uptime', 'Zero-downtime cluster switchovers', '50% cloud cost savings']
  },
  {
    title: 'Chronos Ingestion Pipeline',
    category: 'Full-Stack',
    description: 'Time-series metric streaming broker handling 5B daily telemetry records with high-availability configuration.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    tags: ['Rust', 'Apache Kafka', 'ClickHouse', 'React'],
    link: '#',
    challenge: 'Standard databases failed to ingest high-frequency server state records, losing critical diagnostic timelines.',
    solution: 'Deployed a Rust-based consumer thread writing partitioned Kafka packets into highly compressed ClickHouse database stores.',
    kpis: ['Ingested 5B+ events/day', 'Data compression ratio of 10:1', 'Zero lost log packets']
  },
  {
    title: 'Apex ERP Transaction Ledger',
    category: 'ERP/CRM',
    description: 'Encrypted transactional ledger synchronizing SAP inventories with real-time React dashboard systems.',
    image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'Spring Boot', 'SAP API', 'React'],
    link: '#',
    challenge: 'Manual synchronization of ERP data streams led to double-sold inventories and catalog mismatched entries.',
    solution: 'Engineered mTLS middleware syncing SAP database states with real-time reactive event triggers, displaying values instantly to users.',
    kpis: ['Double-sold inventory issues: 0%', 'SAP sync lag reduced to < 1s', 'Manual audit hours saved: 40/wk']
  },
  {
    title: 'VectorSearch LLM Engine',
    category: 'Artificial Intelligence',
    description: 'Semantic vector search index processing 10M+ documents with sub-second query and ingestion speeds.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Qdrant', 'PyTorch', 'Docker'],
    link: '#',
    challenge: 'Static keywords matching failed to retrieve relevant documents from complex multi-layered architectural specs.',
    solution: 'Fine-tuned sentence embedding models, loaded vector outputs to a Qdrant cluster, and created custom semantic query endpoints.',
    kpis: ['Mean search precision up 45%', 'Query latency under 120ms', '10M+ documents searchable']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Roadmap',
    description: 'We audit your legacy architecture, identify bottlenecks, and map out a bulletproof technical execution schedule.',
  },
  {
    step: '02',
    title: 'Premium UX & UI Architecture',
    description: 'We build high-fidelity interface prototypes focusing on performance metrics, conversion funnels, and stunning design.',
  },
  {
    step: '03',
    title: 'Staged Agile Construction',
    description: 'Clean coding utilizing strict TypeScript schemas, type validations, and incremental PR releases with automated build tests.',
  },
  {
    step: '04',
    title: 'Hardening & QA Auditing',
    description: 'Stress testing, security hardening (CSRF, XSS, rate-limiting), automated lint verification, and load tests.',
  },
];

export const STATS_ITEMS = [
  {
    icon: Activity,
    value: '99.999%',
    label: 'Uptime Guarantee SLA',
    description: 'Ensuring absolute resilience for high-transaction API environments.',
  },
  {
    icon: Zap,
    value: '1.2B+',
    label: 'Daily Telemetry Events',
    description: 'Processed through high-frequency cloud queue backends.',
  },
  {
    icon: Lock,
    value: '450+',
    label: 'Security Audits Executed',
    description: 'Thoroughly scanned, hardened, and compliance-certified systems.',
  },
  {
    icon: Bot,
    value: '85+',
    label: 'AI Agents In Production',
    description: 'Custom fine-tuned cognitive workflows driving business processes.',
  },
];

export const FEATURES = [
  {
    icon: Cpu,
    title: 'Continuous System Telemetry',
    description: 'Real-time observability boards capturing latency anomalies, query execution speeds, and JVM metrics instantly.',
  },
  {
    icon: Brain,
    title: 'Cognitive Workflow Engines',
    description: 'Localized micro-LLMs designed for structured data extraction, automatic code generation, and multi-agent operations.',
  },
  {
    icon: Shield,
    title: 'Audited Cryptographic Shields',
    description: 'Zero-trust IAM configurations, fine-grained access tokens, automated CSRF guardrails, and AES-256 database protection.',
  },
  {
    icon: Globe,
    title: 'Multi-Cloud Kubernetes Pods',
    description: 'Declarative GitOps setups deploying highly scalable Docker clusters using automated Terraform templates.',
  },
];

export const TESTIMONIALS = [
  {
    quote: "Nexvora re-architected our high-concurrency ingestion streams, moving us from 15k to 120k requests per second with zero message loss. Their Go and Kafka engineering expertise is unmatched.",
    name: "Sarah Jenkins",
    role: "VP of Cloud Engineering",
    company: "Aether Systems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    quote: "The low-latency LLM routing pipelines built by Nexvora reduced our inference runtime by 35% and decreased token spend overhead significantly. They delivered a state-of-the-art solution.",
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    company: "Nova AI Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    quote: "We commissioned a comprehensive Zero-Trust penetration audit on our healthcare platform. Nexvora fixed five critical IAM security flaws and secured our HIPAA compliance certification ahead of schedule.",
    name: "Elena Rostova",
    role: "VP of Enterprise Security",
    company: "Vortex Health",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
  {
    quote: "The zero-trust cryptographic models deployed by Nexvora locked down our multi-tenant fintech workspace completely. Outstanding communication and clean code standards.",
    name: "Arthur Pendelton",
    role: "Director of Application Security",
    company: "Zenith Securities",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
    verified: true,
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Dr. Adrian Vance",
    role: "Founder & Principal Architect",
    bio: "Ex-NASA core systems engineer. Over 15 years specializing in high-concurrency distributed systems, robust compiler design, and fault-tolerant Go kernels.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["Distributed Systems", "Go", "Architecture"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Lyra Vance",
    role: "Lead AI Systems Engineer",
    bio: "Core open-source contributor to deep learning frameworks. Expert in localized model fine-tuning, neural parameter optimization, and PyTorch telemetry boards.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["LLMs", "PyTorch", "Model Fine-tuning"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Jaxson Thorne",
    role: "Principal Cryptography Specialist",
    bio: "Secured enterprise cloud environments for Fortune 100 fintech corporations. Expert in Zero-Trust authentication protocols, secure enclave setups, and IAM.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["Cryptography", "Zero-Trust", "IAM Hardening"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Elena Rostova",
    role: "Lead UI/UX & Interaction Designer",
    bio: "Pioneered accessibility-focused design grids for high-conversion SaaS interfaces. Specialist in fluid motion tokens and Figma design systems.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["UI/UX Design", "Figma", "Framer Motion"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Cloud Delivery",
    bio: "Orchestrated large-scale Kubernetes container infrastructure migrations. Expert in multi-cloud deployment paradigms and serverless execution grids.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["Kubernetes", "Multi-Cloud", "DevOps"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Marcus Chen",
    role: "Lead Full-Stack Developer",
    bio: "Engineered ultra-fast Next.js portals and high-throughput real-time APIs. Specialist in stream query caching and React 19 rendering optimization.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["Next.js", "React", "GraphQL"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Julian Drake",
    role: "Systems Verification Lead",
    bio: "Specializes in chaos engineering simulations, peak-load stress benchmarking, and end-to-end telemetry system calibration.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["Chaos Engineering", "Benchmarking", "Telemetry"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Arthur Pendelton",
    role: "Security Compliance Director",
    bio: "Lead security audits and verified SOC2, HIPAA, and ISO 27001 regulatory requirements across distributed banking platforms.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300&q=80",
    tags: ["Compliance", "SOC2 Audit", "HIPAA Safeguards"],
    linkedin: "#",
    github: "#",
  }
];
export const FAQS = [
  {
    question: "What primary software stacks does Nexvora Tech support?",
    answer: "We specialize in high-performance stacks including Go, Rust, Node.js (TypeScript), Next.js, and Python. On the database and queueing layer, we are experts in PostgreSQL, MongoDB, Redis, Apache Kafka, and RabbitMQ.",
  },
  {
    question: "How long does a standard Stack Audit take, and what is the exact deliverable?",
    answer: "A standard Stack Audit is completed in 7 to 10 business days. You receive a comprehensive, highly actionable Markdown report covering architectural bottlenecks, database index efficiency, cloud cost leakages, and static code security vulnerabilities.",
  },
  {
    question: "Do you offer post-delivery support and ongoing operational maintenance?",
    answer: "Yes. Our 'Growth Engineering Pod' package provides dedicated monthly technical resources embedded inside your engineering flows, maintaining and scaling your digital platform continuously with strict SLA guarantees.",
  },
  {
    question: "How does Nexvora ensure absolute security during penetration audits?",
    answer: "We adhere strictly to zero-trust access guidelines. All pen-tests are performed under controlled testing environments or sandbox systems first. We utilize secure encrypted channels for sensitive IAM key exchanges and follow clear NDA boundaries.",
  },
  {
    question: "Can Nexvora support compliance validation for SOC2, HIPAA, or ISO 27001?",
    answer: "Yes, we design infrastructure strictly to meet enterprise auditing standards. All deployments include GitOps versioning, encrypted data storage, and automated log telemetry compliant with SOC2 and HIPAA controls."
  },
  {
    question: "Do you work with existing legacy codebases or construct only greenfield projects?",
    answer: "We support both. Our engineering pods specialize in incremental refactoring of legacy codebases—replacing bottlenecks with performant modules in Go/Rust—without disrupting running production workloads."
  },
  {
    question: "What is your pricing framework for custom software architecture development?",
    answer: "We operate under scoping stages: an initial high-fidelity blueprint sprint, followed by fixed-scope milestones or dedicated monthly pod subscriptions, ensuring cost transparency and predictable velocity."
  },
  {
    question: "How does Nexvora manage cloud resource spending optimizations?",
    answer: "Every cloud orchestration we construct features automated scaling groups, idle node terminations, and custom budget alerts. We typically reduce legacy cloud hosting bills by 20% to 40%."
  }
];

export const CAREERS_LIST = [
  {
    id: "lead-devops-architect",
    title: "Lead DevOps & Infrastructure Architect",
    department: "Cloud Engineering",
    location: "Remote-First",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Architect secure, self-healing, multi-cloud GitOps fabrics and zero-trust IAM fabrics. Optimize auto-scaling Kubernetes configurations and high-throughput telemetry pipelines.",
    requirements: [
      "Expertise in HashiCorp Terraform and dynamic GitOps pipelines (ArgoCD)",
      "Strong background in Kubernetes container orchestration and Service Mesh (Istio)",
      "Familiarity with audited cloud compliance (HIPAA, SOC2, GDPR)",
      "Deep understanding of telemetry systems (Prometheus, Grafana, OpenTelemetry)"
    ]
  },
  {
    id: "senior-ai-agent-engineer",
    title: "Senior AI Systems & Agent Architect",
    department: "Artificial Intelligence",
    location: "Remote-First",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Design and implement autonomous AI agent networks, custom vector index frameworks, neural telemetry tracking boards, and localized model fine-tuning schedules.",
    requirements: [
      "Advanced proficiency in Python, PyTorch, and deep learning framework constructs",
      "Experience with advanced agentic workflows, langchain/langgraph architectures",
      "Familiarity with vector engines (Qdrant, Pinecone, pgvector) and search structures",
      "Hands-on expertise in localized model deployment and parameter tuning"
    ]
  },
  {
    id: "senior-cryptographer-specialist",
    title: "Senior Cryptography & Security Engineer",
    department: "Cybersecurity Shield",
    location: "Remote-First",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Lead zero-trust cryptographic system analysis, design secure enclave environments, harden multi-tenant microservices, and oversee penetration audits.",
    requirements: [
      "Deep understanding of modern cryptography, secure protocols (TLS 1.3, mTLS)",
      "Hands-on experience harding Go/Rust environments against side-channel exploits",
      "Expertise in identity services and zero-trust authentication protocols",
      "Familiarity with manual code auditing and penetration testing principles"
    ]
  }
];

