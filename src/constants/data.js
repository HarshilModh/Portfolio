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
    'I came to it the long way — a B.E. in India, then a year building CRM backends where I learned that tuning a query and adding the right index is often the whole feature. Now I hold an M.S. in Computer Science from Stevens.',
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
    { value: 3.86, decimals: 2, suffix: ' / 4.0', label: 'GPA on the M.S.' },
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
    "period": "Jan 2026 – May 2026",
    "location": "Princeton, NJ",
    "description": "Built a full-stack AI sales platform for a pharmaceutical client's field team, with reliable data access and production guardrails.",
    "bullets": [
      "Built the React/TypeScript rep app that tells reps which doctors to visit next and briefs them before each visit, serving live queries over 71K+ rows across 10 tables.",
      "Built a RAG assistant that refuses to answer unverifiable numbers, with fail-closed Python guardrails that block patient data and off-label requests; answered about 96% of 70 live test questions in 2–4 seconds.",
      "Deployed on Azure Container Apps with managed identity and scale-to-zero, removing $263/month in idle cost; backed by 760+ pytest tests."
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
    "period": "Sep 2025 – Aug 2026",
    "location": "Hoboken, NJ",
    "description": "Helping graduate developers build better software, and building tools that make teaching it easier.",
    "bullets": [
      "Published canvas-grade-manager, an npm CLI on the Canvas API with 1,300+ weekly downloads, adopted by 6+ teaching assistants across two semesters.",
      "Built a grading framework covering HTTP responses, JSON contracts, authentication, and database state, cutting grading turnaround by 80%.",
      "Mentored 100+ graduate students through 80+ weekly code reviews, cutting critical defects by 30%, and debugged 50+ student defects in async, middleware, and auth flows."
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
      "Architected modular CRM backends in Node.js, Express, and MongoDB, securing 15+ production endpoints with JWT, RBAC, validation middleware, and authorization failure-path tests.",
      "Cut API latency by 50% and database reads by 40% through query-plan analysis, index tuning, and Redis TTL caching.",
      "Built role-aware React and Angular dashboards that cut reporting turnaround by 35%; shipped Dockerized services to AWS through GitHub Actions CI/CD."
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
    "details": "3.86 / 4.0 GPA"
  },
  {
    "id": 2,
    "degree": "B.E. in Computer Science",
    "school": "LDRP Institute of Technology and Research",
    "year": "2019 – 2023",
    "location": "Gujarat, India",
    "details": "Winner, AWS Publishing & Media Innovation Hackathon, NYC (CoMP Ledger)"
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
    "stat": "<60s",
    "statLabel": "to score a repo after each push",
    "slug": "codepulse",
    "caseStudy": {
      "role": "Full stack & AI",
      "summary": "Every push to a GitHub repo is scored 0–100 within 60 seconds, with AI agents that explain what changed and why it matters.",
      "problem": "Code quality signals are scattered: complexity, vulnerabilities, dead code, coverage, and architectural drift each live in a different tool, and none of them tie back to the push that moved the needle. CodePulse brings them into one score and one conversation.",
      "decisions": [
        { "title": "Fan-out, fan-in analysis", "body": "Each push becomes five parallel BullMQ jobs (complexity, vulnerabilities, dead code, coverage, drift) that fan back in to a single 0–100 score, so total time is the slowest analysis rather than the sum." },
        { "title": "Semantic drift detection", "body": "OpenAI embeddings stored in pgvector let drift show up as cosine distance, searched in under 50ms. K-Means groups related files on a multi-tenant PostgreSQL and Prisma schema of 14 models." },
        { "title": "Agents that stream", "body": "Six-tool RAG code chat, root-cause investigation, multi-agent design debate, and codebase tours stream over SSE with sub-400ms time-to-first-response, and are exposed to IDEs through an MCP server." },
        { "title": "Production plumbing", "body": "Clerk auth, Stripe billing tiers, HMAC-verified webhooks, and hashed API keys. PR health comments and live score updates travel through Redis Pub/Sub and Socket.IO." }
      ],
      "results": [
        { "value": "<60s", "label": "push to score" },
        { "value": "5", "label": "parallel analyses" },
        { "value": "<50ms", "label": "drift search" },
        { "value": "<400ms", "label": "time to first response" }
      ]
    },
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
      "Six-tool RAG chat, root-cause investigation, multi-agent debate, and guided codebase tours stream over SSE with sub-400ms time-to-first-response.",
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
    "stat": "−50%",
    "statLabel": "database queries with Redis caching",
    "slug": "careconnect",
    "caseStudy": {
      "role": "Full stack · MERN",
      "summary": "A shared workspace where families and caregivers coordinate tasks, medications, vitals, and documents, with access control that keeps every care group isolated.",
      "problem": "Care is a team effort, but the team is usually split across texts, calls, and paper notes. The platform needed to share sensitive information safely and make sure nothing time-critical, like a missed dose, falls through the gaps.",
      "decisions": [
        { "title": "Access control per membership", "body": "Five roles with permission checks evaluated per care-group membership, across 40+ REST endpoints, using JWT plus Firebase authentication, so access is decided by a user's role inside each care group." },
        { "title": "Caching and stateless sessions", "body": "Redis caching and token-based stateless sessions reduced database queries by 50%." },
        { "title": "Real-time communication", "body": "Socket.IO group chat with edit history, read receipts, and admin-only deletion. One-tap emergency alerts reach every group member through in-app notifications, chat, and email." },
        { "title": "Correct under concurrency", "body": "Four background jobs handle recurring tasks, overdue detection, deduplicated reminders, and cleanup. Medication dose tracking stays accurate when several caregivers write at once." },
        { "title": "Deployment", "body": "A four-service Docker stack on AWS EC2, with S3 pre-signed URLs securing document access." }
      ],
      "results": [
        { "value": "40+", "label": "secured endpoints" },
        { "value": "5", "label": "access roles" },
        { "value": "−50%", "label": "database queries" },
        { "value": "4", "label": "services in Docker" }
      ]
    },
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
    "stat": "1st",
    "statLabel": "AWS Publishing & Media Innovation Hackathon, NYC",
    "slug": "comp-ledger",
    "caseStudy": {
      "role": "AWS hackathon winner · Backend & AI pipeline",
      "summary": "A platform that tests whether an AI answer drew on a publisher's reporting, and produces evidence the publisher can use in licensing negotiations.",
      "problem": "When an AI answer reflects original reporting, publishers have no way to show it. Proving attribution means separating original reporting from common knowledge, and keeping a record that holds up.",
      "decisions": [
        { "title": "Claims, not answers", "body": "Claude decomposes an AI answer into factual claims. Each claim is checked against five external sources (Wikipedia, Google Search, OpenAlex, GDELT, and the Wayback Machine) before a Claude judge returns a structured verdict." },
        { "title": "Exclusivity scoring", "body": "Each claim is scored inversely to how many independent sources carry it. Common knowledge scores low and original reporting scores high." },
        { "title": "Ingestion and storage", "body": "RSS-driven corpus ingestion into PostgreSQL with pgvector, behind a Node.js and Express API with 40 REST endpoints, JWT auth, and rate limiting." },
        { "title": "Evidence you can trust", "body": "Scored claims stream to the React client over Server-Sent Events. Exports are signed with SHA-256 and written to S3 with the hash mirrored in object metadata, making them tamper-evident." }
      ],
      "results": [
        { "value": "1st", "label": "AWS hackathon, NYC" },
        { "value": "40", "label": "REST endpoints" },
        { "value": "5", "label": "verification sources" },
        { "value": "SHA-256", "label": "signed evidence exports" }
      ]
    },
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
      "SQL"
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
