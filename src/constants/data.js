export const PROFILE = {
  "name": "Harshil Modh",
  "roles": [
    "Software Engineer",
    "Full Stack & AI"
  ],
  "resume": "/Harshil-Modh-Resume.pdf",
  "socials": {
    "github": "https://github.com/HarshilModh",
    "linkedin": "https://www.linkedin.com/in/harshil-modh",
    "email": "hmodh@stevens.edu",
    "location": "New York City"
  }
};

export const ABOUT = {
  heading: 'A LITTLE\nABOUT ME.',
  statement: 'I’m a software engineer in New York City who likes the whole path — from the first interface a person touches to the last query that answers them.',
  paragraphs: [
    'Most days that means React or Next.js on the front, Node, Express or FastAPI behind it, and Postgres, MongoDB and Redis underneath. Lately a lot of it is AI work: retrieval pipelines, agents with real guardrails, and keeping the parts that have to be predictable in ordinary, testable code.',
    'I came to it the long way — a B.E. in India, then a year building CRM backends where I learned that tuning a query and adding the right index is often the whole feature. Now I’m finishing an M.S. in Computer Science at Stevens.',
    'I also teach. As a teaching assistant I read a lot of other people’s code every week, which is the fastest way I know to get better at writing my own — and a good excuse to build tools that take the repetitive parts away.',
  ],
  facts: [
    { label: 'Based in', value: 'New York City' },
    { label: 'Studying', value: 'M.S. Computer Science' },
    { label: 'Focused on', value: 'Full-stack + AI systems' },
    { label: 'Also doing', value: 'Teaching & open source' },
  ],
  stats: [
    { value: 71, suffix: 'K+', label: 'rows powering live analytics' },
    { value: 100, suffix: '+', label: 'graduate developers mentored' },
    { value: 6, suffix: '+', label: 'TAs using my open-source CLI' },
    { value: 3.9, decimals: 1, suffix: ' / 4.0', label: 'GPA on the M.S. so far' },
  ],
};

export const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA = [
  {
    "id": 10,
    "role": "Software Engineer, AI",
    "organization": "GenAI Consulting",
    "period": "Jan 2026 – Present",
    "location": "Princeton, NJ",
    "description": "Building full-stack analytics and AI systems with deterministic business logic, reliable data access, and production guardrails.",
    "bullets": [
      "Shipped a React and FastAPI platform querying 71K+ rows across 10 SQL tables, deployed on Azure Container Apps.",
      "Built two AI agents and a guarded copilot, keeping scoring in Python for predictable, testable results.",
      "Wrote 92 isolated CI tests and a four-scenario LLM guardrail suite; eliminated $263/month in idle costs with scale-to-zero deployment."
    ],
    "tags": [
      "React",
      "Python",
      "FastAPI",
      "Azure",
      "Docker"
    ],
    "metric": "71K+",
    "metricLabel": "rows powering live analytics"
  },
  {
    "id": 1,
    "role": "Teaching Assistant · CS 546",
    "organization": "Stevens Institute of Technology",
    "period": "Sep 2025 – Present",
    "location": "Hoboken, NJ",
    "description": "Helping graduate developers build better software, and building tools that make teaching it easier.",
    "bullets": [
      "Published canvas-grade-manager, a Canvas API CLI adopted by 6+ teaching assistants across two semesters.",
      "Built an automated grading framework covering HTTP responses, authentication, JSON contracts, and database state, reducing turnaround by 80%.",
      "Mentored 100+ graduate developers and reviewed 80+ submissions each week."
    ],
    "tags": [
      "Node.js",
      "Canvas API",
      "Testing",
      "Mentorship"
    ],
    "metric": "80%",
    "metricLabel": "faster grading turnaround"
  },
  {
    "id": 3,
    "role": "Software Engineer",
    "organization": "Grownited",
    "period": "Jun 2023 – Jun 2024",
    "location": "India",
    "description": "Built and shipped CRM backends and role-aware dashboards, with a focus on performance and secure access.",
    "bullets": [
      "Designed modular Node.js, Express, and MongoDB services with standardized API contracts.",
      "Secured 15+ REST endpoints with JWT, role-based access, validation, and authorization tests.",
      "Reduced API latency by 50% and database reads by 40% through query tuning, indexing, and Redis caching; shipped Docker services to AWS with GitHub Actions."
    ],
    "tags": [
      "Node.js",
      "MongoDB",
      "Redis",
      "React",
      "AWS"
    ],
    "metric": "50%",
    "metricLabel": "lower API latency"
  }
];

export const ADDITIONAL_EXPERIENCE = [
  {
    "id": 2,
    "role": "Peer Mentor",
    "organization": "Stevens Institute of Technology",
    "period": "Sep 2025 - Present",
    "location": "Hoboken, NJ",
    "description": "Mentored students by offering academic support, study strategies, and technical guidance in computer science courses. Helped peers navigate challenging concepts, assignments, and project workflows while promoting best practices in problem solving and collaboration.",
    "tags": [
      "Academic Support",
      "Problem Solving",
      "Collaboration"
    ]
  },
  {
    "id": 4,
    "role": "Associate Software Engineer",
    "organization": "Synoptek",
    "period": "Feb 2023 - Jun 2023",
    "location": "India",
    "description": "Collaborated on software development and enterprise-level solutions within an immersive on-site internship environment.",
    "tags": [
      "Software Engineering",
      "Enterprise Logic"
    ]
  },
  {
    "id": 5,
    "role": "Campus Ambassador",
    "organization": "Tata Consultancy Services",
    "period": "Jun 2022 - Jan 2023",
    "location": "Gandhinagar, Gujarat, India",
    "description": "Acted as a liaison between the university and Tata Consultancy Services, promoting brand initiatives and coordinating campus engagements.",
    "tags": [
      "Leadership",
      "Event Management",
      "Communication"
    ]
  },
  {
    "id": 6,
    "role": "Web Developer Co-lead",
    "organization": "Break The Barrier",
    "period": "Jul 2021 - Jan 2023",
    "location": "Gandhinagar, Gujarat, India",
    "description": "Served as Co-lead of the web development team for the Break The Barrier (BTB) Hackathon 2022. Architected and developed the main event portal and frontend infrastructure using React.js.",
    "tags": [
      "React.js",
      "Frontend Development",
      "Team Lead"
    ]
  },
  {
    "id": 7,
    "role": "Project Intern",
    "organization": "skylinksoftweb",
    "period": "Apr 2022 - Jun 2022",
    "location": "India",
    "description": "Assisted in project development frameworks while growing core frontend competencies.",
    "tags": [
      "Web Development",
      "Frontend"
    ]
  },
  {
    "id": 8,
    "role": "Frontend Developer",
    "organization": "Hate Speech and Offensive Content Identification",
    "period": "Jun 2021 - Aug 2021",
    "location": "Gandhinagar, Gujarat, India",
    "description": "Developed the frontend for the international HASOC NLP competition. Initially started as a Data Annotator for English and Hindi languages, later taking ownership of the entire event portal UI using Flask REST APIs, Bootstrap, HTML, and CSS.",
    "tags": [
      "Flask",
      "MongoDB",
      "Bootstrap",
      "HTML/CSS",
      "JavaScript"
    ]
  },
  {
    "id": 9,
    "role": "Teaching Faculty",
    "organization": "Royal Technosoft Pvt Ltd",
    "period": "Apr 2021 - Jun 2021",
    "location": "Ahmedabad, Gujarat, India",
    "description": "Instructed international students on core software engineering concepts including Object-Oriented Programming (OOP), C++, C, Core Java, and backend web development fundamentals.",
    "tags": [
      "C++",
      "Java",
      "OOP",
      "Backend Web Development"
    ]
  }
];

export const EDUCATION_DATA = [
  {
    "id": 1,
    "degree": "M.S. in Computer Science",
    "school": "Stevens Institute of Technology",
    "year": "2024 – 2026",
    "location": "Hoboken, New Jersey",
    "details": "3.9 / 4.0 GPA"
  },
  {
    "id": 2,
    "degree": "B.E. in Computer Science",
    "school": "LDRP Institute of Technology and Research",
    "year": "2019 – 2023",
    "location": "Gujarat, India",
    "details": ""
  }
];

export const PROJECTS = [
  {
    "title": "CodePulse",
    "tagline": "AI code health platform",
    "category": "Developer tools / AI",
    "description": "Understand the health of a codebase, from every commit to the bigger architectural picture.",
    "detailedDescription": "A GitHub-integrated code health platform that turns every push into five parallel analysis jobs. Repository scoring, AI investigation, and real-time updates bring actionable insights into the developer workflow.",
    "impact": "5 parallel analysis jobs. One code health score in under 60 seconds.",
    "featured": true,
    "theme": "blue",
    "tech": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "OpenAI API",
      "pgvector",
      "Clerk",
      "Stripe"
    ],
    "features": [
      "Scores complexity, vulnerabilities, dead code, test coverage, and architectural drift on every push.",
      "Six-tool RAG chat, root-cause investigation, multi-agent debate, and guided codebase tours stream over SSE.",
      "Semantic architectural-drift detection uses embeddings and pgvector search in under 50ms.",
      "A GitHub App delivers PR health comments, with live score updates, SVG badges, and weekly digests.",
      "MCP tools expose the AI agents to Claude and Cursor; Clerk and Stripe support authentication and billing."
    ],
    "github": "https://github.com/HarshilModh/code_Pulse",
    "link": null
  },
  {
    "title": "CareConnect",
    "tagline": "Real-time caregiving platform",
    "description": "A shared place for families and caregivers to coordinate care, stay informed, and act together.",
    "detailedDescription": "A full-stack MERN platform for coordinating tasks, medications, vitals, and documents. Membership-level access control keeps care groups isolated, while real-time communication keeps everyone in sync.",
    "impact": "40+ secured endpoints. 5 access roles. 50% fewer database queries.",
    "metrics": [
      "Real-Time",
      "Full Stack",
      "Auth",
      "Cloud",
      "WebSockets"
    ],
    "featured": true,
    "tech": [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Firebase Auth",
      "AWS S3",
      "Docker"
    ],
    "features": [
      "Five-role access control with per-membership permission checks and JWT plus Firebase authentication.",
      "Real-time group chat with edit history, read receipts, and admin-only message deletion.",
      "One-tap emergency alerts reach group members through notifications, chat, and email.",
      "Atomic medication logging and four background jobs keep recurring tasks and reminders accurate.",
      "Redis caching reduces database queries by 50%; a four-service Docker stack runs on AWS EC2."
    ],
    "link": "https://care-connect-five-alpha.vercel.app",
    "github": "https://github.com/HarshilModh/Care_Connect",
    "icon": "activity",
    "visual": {
      "gradient": "from-blue-900 via-cyan-900 to-slate-900",
      "icon": "activity"
    },
    "category": "Full stack / Real time",
    "theme": "green"
  },
  {
    "title": "CoMP Ledger",
    "tagline": "AI content attribution platform",
    "category": "AI / Research",
    "description": "Trace AI-generated claims back to original reporting, with evidence publishers can inspect.",
    "detailedDescription": "An AWS hackathon-winning content attribution platform that decomposes AI answers into factual claims and evaluates the evidence linking those claims to a publisher’s archive.",
    "impact": "AWS Hackathon Winner",
    "featured": true,
    "theme": "amber",
    "tech": [
      "Node.js",
      "Express",
      "PostgreSQL",
      "AWS Bedrock",
      "Claude",
      "SSE",
      "AWS S3"
    ],
    "features": [
      "Claude breaks model answers into factual claims and scores them against a publisher’s reporting.",
      "An exclusivity model scores claims inversely to the number of independent sources.",
      "A research pipeline checks Wikipedia, Google, OpenAlex, GDELT, and the Wayback Machine.",
      "A Claude judge returns structured verdicts streamed over SSE across 40 endpoints.",
      "SHA-256 signed evidence exports to S3 provide a tamper-evident licensing record."
    ],
    "github": null,
    "link": null
  },
  {
    "title": "PromptStudio",
    "tagline": "Agentic AI App Generator",
    "description": "Agentic AI platform that generates and deploys functional Next.js applications from natural language prompts.",
    "detailedDescription": "Built an agentic AI platform that generates and deploys functional Next.js applications from natural language prompts using a agent workflow orchestrated by Inngest and powered by Google Gemini 2.5 Flash.",
    "impact": "Generates production-ready Next.js apps from prompts in under 60 seconds",
    "metrics": [
      "AI-Powered",
      "Agentic",
      "Full Stack",
      "Payments",
      "Auth"
    ],
    "featured": true,
    "category": "AI / App generation",
    "tech": [
      "Next.js 15",
      "React 19",
      "Inngest",
      "Google Gemini API",
      "E2B Sandboxing",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Stripe"
    ],
    "features": [
      "Agentic AI workflow orchestrated by Inngest with Google Gemini 2.5 Flash for iterative code generation",
      "Autonomous code agent writing, executing, and debugging multi-file apps inside secure E2B sandboxes",
      "Time-travel versioning with PostgreSQL + Prisma for rollback and session-based evolution",
      "Clerk authentication, Stripe billing, and credit-based rate limiting"
    ],
    "link": "https://prompt-studio-liart.vercel.app/",
    "github": "https://github.com/HarshilModh/promptStudio",
    "icon": "brain",
    "visual": {
      "gradient": "from-violet-900 via-fuchsia-900 to-slate-900",
      "icon": "brain"
    }
  },
  {
    "title": "Vibe Code Editor",
    "tagline": "AI-Powered Web IDE",
    "description": "Cloud-native IDE with Next.js, WebContainers, Monaco Editor, and integrated terminal emulator.",
    "detailedDescription": "Developed a cloud-native IDE with Next.js, WebContainers, Monaco Editor, and integrated terminal emulator, enabling secure execution of 5+ stacks via WASM isolation.",
    "impact": "Cloud IDE supporting 5+ stacks with AI-accelerated coding workflows",
    "metrics": [
      "AI-Powered",
      "Cloud-Native",
      "Dockerized"
    ],
    "featured": true,
    "category": "Developer tools / Cloud IDE",
    "tech": [
      "Next.js",
      "TypeScript",
      "WebContainers",
      "Monaco Editor",
      "Ollama",
      "NextAuth",
      "TailwindCSS",
      "MongoDB",
      "Docker"
    ],
    "features": [
      "Cloud-native IDE with WebContainers and Monaco Editor for secure WASM-based execution",
      "AI-powered completions via Ollama LLMs, accelerating coding workflows by ~30%",
      "Scalable developer UI with file explorer, terminal, and persistent MongoDB storage"
    ],
    "link": null,
    "github": "https://github.com/HarshilModh/code_with_vibe",
    "icon": "code",
    "visual": {
      "gradient": "from-indigo-900 via-purple-900 to-slate-900",
      "icon": "code"
    }
  },
  {
    "title": "Lumina",
    "tagline": "High-Definition Cloud Storage",
    "description": "Next-generation cloud storage platform for visual assets with high-definition rendering and smart tagging.",
    "detailedDescription": "Developed a next-generation cloud storage platform for visual assets with high-definition rendering, smart tagging, hierarchical folders, and a modern glassmorphic dashboard.",
    "impact": "60% faster image delivery with edge-cached CDN and smart tagging",
    "metrics": [
      "Full Stack",
      "Auth",
      "Edge-Cached",
      "API-Driven"
    ],
    "featured": false,
    "tech": [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Drizzle ORM",
      "Neon Database",
      "Clerk Auth",
      "ImageKit",
      "PostgreSQL"
    ],
    "features": [
      "Cloud storage with ImageKit for edge-cached global delivery, 60% faster loads",
      "Enterprise-grade encryption with OTP auth, favorites, trash, and restore workflows",
      "Modern glassmorphic dashboard with analytics, galleries, and folder navigation"
    ],
    "link": null,
    "github": "https://github.com/HarshilModh/lumina",
    "icon": "image",
    "visual": {
      "gradient": "from-emerald-900 via-teal-900 to-slate-900",
      "icon": "image"
    }
  },
  {
    "title": "Stevens Hub",
    "tagline": "Campus Social Ecosystem",
    "description": "Full-stack student portal featuring Reddit-style forums, course reviews, and OAuth integration.",
    "detailedDescription": "Spearheaded a full-stack student portal used by 10+ testers, with forums, reviews, and resource directories.",
    "impact": "Student portal reducing unauthorized access by ~90% with OAuth + 2FA",
    "metrics": [
      "Full Stack",
      "Auth",
      "OAuth",
      "API-Driven"
    ],
    "featured": false,
    "tech": [
      "Node.js",
      "Express",
      "MongoDB",
      "OAuth",
      "Role-based Access",
      "Cloudinary"
    ],
    "features": [
      "Reddit-style forums with rich media, polls, upvotes, and moderation tools",
      "Google OAuth + 2FA cutting unauthorized access by ~90%",
      "Course review engine with anonymized submissions and 5-star ratings",
      "Google Maps integration for campus building navigation"
    ],
    "link": null,
    "github": "https://github.com/HarshilModh/Duck_Hub",
    "icon": "globe",
    "visual": {
      "gradient": "from-amber-900 via-orange-900 to-slate-900",
      "icon": "globe"
    }
  },
  {
    "title": "Interview Master",
    "tagline": "AI Voice Interview Agent",
    "description": "Real-time AI interview platform with bidirectional voice conversations and automated feedback.",
    "detailedDescription": "Architected a real-time AI interview platform with Next.js 14, integrating Vapi.ai and Google Gemini for bidirectional voice conversations with sub-500ms latency.",
    "impact": "Sub-500ms latency voice interviews with automated performance scoring",
    "metrics": [
      "AI-Powered",
      "Real-Time",
      "Voice AI",
      "Auth"
    ],
    "featured": false,
    "tech": [
      "Next.js 14",
      "TypeScript",
      "Vapi.ai",
      "Google Gemini API",
      "Firebase",
      "Tailwind CSS",
      "Zod"
    ],
    "features": [
      "Bidirectional voice interviews via Vapi.ai with sub-500ms latency",
      "Dynamic role-specific question generation using Google Gemini LLMs",
      "Automated feedback pipeline with granular 0-100 scoring and insights",
      "Secure dashboard with Firebase Auth/Firestore and Server Actions"
    ],
    "link": "https://interview-app-virid.vercel.app/",
    "github": "https://github.com/HarshilModh/interview_App",
    "icon": "mic",
    "visual": {
      "gradient": "from-rose-900 via-pink-900 to-slate-900",
      "icon": "mic"
    }
  }
];

export const SKILL_GROUPS = [
  {
    "name": "Languages",
    "items": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "C",
      "C++"
    ]
  },
  {
    "name": "Frontend",
    "items": [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "D3",
      "Recharts"
    ]
  },
  {
    "name": "Backend & data",
    "items": [
      "Node.js",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Prisma",
      "Socket.IO",
      "GraphQL"
    ]
  },
  {
    "name": "AI & agents",
    "items": [
      "OpenAI API",
      "Claude",
      "Gemini",
      "RAG",
      "MCP",
      "LangGraph",
      "LangChain",
      "Embeddings",
      "pgvector",
      "Qdrant"
    ]
  },
  {
    "name": "Cloud & delivery",
    "items": [
      "AWS EC2 / S3 / Bedrock",
      "Azure Container Apps",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "pytest"
    ]
  },
  {
    "name": "Auth & billing",
    "items": [
      "Clerk",
      "Firebase Auth",
      "JWT",
      "OAuth",
      "RBAC",
      "HMAC webhooks",
      "Stripe"
    ]
  }
];
