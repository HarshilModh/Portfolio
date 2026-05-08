export const PROFILE = {
  name: "Harshil Modh",
  roles: ["Full Stack Developer", "AI Software Engineer"],
  socials: {
    github: "github.com/HarshilModh",
    linkedin: "www.linkedin.com/in/harshil-modh-53a62a1a6",
    email: "hmodh@stevens.edu",
    location: "Hoboke, NJ"
  }
};

export const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Teaching Assistant",
    organization: "Stevens Institute of Technology",
    period: "Sep 2025 - Present",
    location: "Hoboken, NJ",
    description: "Mentor 100+ graduate students in CS 546 (Web Programming), providing guidance on scalable web architectures, secure API design, and advanced debugging strategies for Node.js and React applications. Architected and deployed CI/CD-driven automated grading pipelines, improving grading accuracy by 25% and reducing administrative turnaround time by 80%. Conduct deep technical code reviews to enforce industry best practices in JavaScript, TypeScript, and database design.",
    tags: ["Node.js", "React", "MongoDB", "CI/CD", "Testing", "Mentorship"]
  },
  {
    id: 2,
    role: "Peer Mentor",
    organization: "Stevens Institute of Technology",
    period: "Sep 2025 - Present",
    location: "Hoboken, NJ",
    description: "Mentored students by offering academic support, study strategies, and technical guidance in computer science courses. Helped peers navigate challenging concepts, assignments, and project workflows while promoting best practices in problem solving and collaboration.",
    tags: ["Academic Support", "Problem Solving", "Collaboration"]
  },
  {
    id: 3,
    role: "Software Engineer Intern",
    organization: "Grownited",
    period: "Jul 2023 - Jan 2024",
    location: "India",
    description: "Engineered a scalable CRM platform using React and Node.js, enabling lead tracking and customer profile management for 200+ active users. Developed and secured RESTful APIs and optimized complex MongoDB queries, reducing application latency by 25%. Implemented comprehensive Jest test suites and CI/CD workflows with GitHub Actions.",
    tags: ["React", "Node.js", "REST APIs", "MongoDB", "Jest", "CI/CD"]
  },
  {
    id: 4,
    role: "Associate Software Engineer",
    organization: "Synoptek",
    period: "Feb 2023 - Jun 2023",
    location: "India",
    description: "Collaborated on software development and enterprise-level solutions within an immersive on-site internship environment.",
    tags: ["Software Engineering", "Enterprise Logic"]
  },
  {
    id: 5,
    role: "Campus Ambassador",
    organization: "Tata Consultancy Services",
    period: "Jun 2022 - Jan 2023",
    location: "Gandhinagar, Gujarat, India",
    description: "Acted as a liaison between the university and Tata Consultancy Services, promoting brand initiatives and coordinating campus engagements.",
    tags: ["Leadership", "Event Management", "Communication"]
  },
  {
    id: 6,
    role: "Web Developer Co-lead",
    organization: "Break The Barrier",
    period: "Jul 2021 - Jan 2023",
    location: "Gandhinagar, Gujarat, India",
    description: "Served as Co-lead of the web development team for the Break The Barrier (BTB) Hackathon 2022. Architected and developed the main event portal and frontend infrastructure using React.js.",
    tags: ["React.js", "Frontend Development", "Team Lead"]
  },
  {
    id: 7,
    role: "Project Intern",
    organization: "skylinksoftweb",
    period: "Apr 2022 - Jun 2022",
    location: "India",
    description: "Assisted in project development frameworks while growing core frontend competencies.",
    tags: ["Web Development", "Frontend"]
  },
  {
    id: 8,
    role: "Frontend Developer",
    organization: "Hate Speech and Offensive Content Identification",
    period: "Jun 2021 - Aug 2021",
    location: "Gandhinagar, Gujarat, India",
    description: "Developed the frontend for the international HASOC NLP competition. Initially started as a Data Annotator for English and Hindi languages, later taking ownership of the entire event portal UI using Flask REST APIs, Bootstrap, HTML, and CSS.",
    tags: ["Flask", "MongoDB", "Bootstrap", "HTML/CSS", "JavaScript"]
  },
  {
    id: 9,
    role: "Teaching Faculty",
    organization: "Royal Technosoft Pvt Ltd",
    period: "Apr 2021 - Jun 2021",
    location: "Ahmedabad, Gujarat, India",
    description: "Instructed international students on core software engineering concepts including Object-Oriented Programming (OOP), C++, C, Core Java, and backend web development fundamentals.",
    tags: ["C++", "Java", "OOP", "Backend Web Development"]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    degree: "Master of Science, Computer Science",
    school: "Stevens Institute of Technology",
    year: "2024 - 2026",
    location: "Hoboken, NJ, USA",
    details: "GPA: 3.83/4.00",
    focus: "Cloud Computing, Advanced Web Development, AI Systems"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    school: "LDRP Institute of Technology",
    year: "2019 - 2023",
    location: "India",
    details: "GPA: 3.24/4.00",
    focus: "Algorithms, Data Structures, Software Engineering"
  }
];

export const TECHNICAL_ARSENAL = [
  { name: "JavaScript", category: "Languages", icon: "js", color: "text-yellow-400", featured: false },
  { name: "TypeScript", category: "Languages", icon: "ts", color: "text-blue-500", featured: true },
  { name: "Python", category: "Languages", icon: "python", color: "text-blue-400", featured: true },
  { name: "Java", category: "Languages", icon: "java", color: "text-red-500", featured: true },
  { name: "SQL", category: "Languages", icon: "sql", color: "text-blue-300", featured: false },
  { name: "Go", category: "Languages", icon: "go", color: "text-cyan-300", featured: true },
  { name: "C++", category: "Languages", icon: "cpp", color: "text-blue-600", featured: false },
  { name: "HTML/CSS", category: "Languages", icon: "html", color: "text-orange-500", featured: false },
  { name: "React", category: "Frontend", icon: "react", color: "text-cyan-400", featured: true },
  { name: "Next.js", category: "Frontend", icon: "next", color: "text-slate-800 dark:text-white", featured: true },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind", color: "text-cyan-300", featured: false },
  { name: "Bootstrap", category: "Frontend", icon: "bootstrap", color: "text-purple-500", featured: false },
  { name: "shadcn/ui", category: "Frontend", icon: "shadcn", color: "text-slate-400", featured: false },
  { name: "Three.js", category: "Frontend", icon: "three", color: "text-white", featured: false },
  { name: "Node.js", category: "Backend", icon: "node", color: "text-green-500", featured: true },
  { name: "Express", category: "Backend", icon: "express", color: "text-gray-400", featured: false },
  { name: "Drizzle ORM", category: "Backend", icon: "drizzle", color: "text-yellow-200", featured: false },
  { name: "Flask", category: "Backend", icon: "flask", color: "text-white", featured: false },
  { name: "Spring Boot", category: "Backend", icon: "spring", color: "text-green-600", featured: false },
  { name: "WebSockets", category: "Backend", icon: "socket", color: "text-white", featured: false },
  { name: "Redis", category: "Backend", icon: "redis", color: "text-red-600", featured: false },
  { name: "MongoDB", category: "Database", icon: "mongo", color: "text-green-500", featured: true },
  { name: "PostgreSQL", category: "Database", icon: "postgres", color: "text-blue-400", featured: false },
  { name: "MySQL", category: "Database", icon: "mysql", color: "text-blue-500", featured: false },
  { name: "Neon DB", category: "Database", icon: "neon", color: "text-green-300", featured: false },
  { name: "Firebase", category: "Database", icon: "firebase", color: "text-orange-400", featured: false },
  { name: "AWS", category: "Cloud/DevOps", icon: "aws", color: "text-orange-400", featured: true },
  { name: "Vercel", category: "Cloud/DevOps", icon: "vercel", color: "text-white", featured: false },
  { name: "Docker", category: "Cloud/DevOps", icon: "docker", color: "text-blue-400", featured: true },
  { name: "Kubernetes", category: "Cloud/DevOps", icon: "k8s", color: "text-blue-500", featured: true },
  { name: "Terraform", category: "Cloud/DevOps", icon: "terraform", color: "text-purple-400", featured: false },
  { name: "GitHub Actions", category: "Cloud/DevOps", icon: "github", color: "text-white", featured: false },
  { name: "Jest", category: "Tools", icon: "jest", color: "text-red-400", featured: false },
  { name: "Cypress", category: "Tools", icon: "cypress", color: "text-green-400", featured: false },
  { name: "Postman", category: "Tools", icon: "postman", color: "text-orange-500", featured: false },
  { name: "Git", category: "Tools", icon: "git", color: "text-orange-600", featured: false },
  { name: "Jira", category: "Tools", icon: "jira", color: "text-blue-500", featured: false },
  { name: "LangChain", category: "AI/ML", icon: "ai", color: "text-green-300", featured: true },
  { name: "Hugging Face", category: "AI/ML", icon: "ai", color: "text-yellow-400", featured: false },
  { name: "LlamaIndex", category: "AI/ML", icon: "ai", color: "text-indigo-400", featured: false },
  { name: "Scikit-learn", category: "AI/ML", icon: "ai", color: "text-orange-300", featured: false },
  { name: "NumPy", category: "AI/ML", icon: "python", color: "text-blue-400", featured: false },
  { name: "OAuth", category: "Auth", icon: "auth", color: "text-white", featured: false },
  { name: "JWT", category: "Auth", icon: "jwt", color: "text-pink-500", featured: false },
  { name: "GraphQL", category: "API", icon: "graphql", color: "text-pink-400", featured: false },
  { name: "REST", category: "API", icon: "api", color: "text-blue-300", featured: false },
  { name: "Clerk", category: "Auth", icon: "auth", color: "text-purple-400", featured: false },
  { name: "Oracle Java SE", category: "Certifications", icon: "java", color: "text-red-500", featured: false },
  { name: "Postman Expert", category: "Certifications", icon: "postman", color: "text-orange-500", featured: false },
  { name: "Prisma", category: "Database", icon: "prisma", color: "text-emerald-500", featured: true },
  { name: "Stripe", category: "Tools", icon: "stripe", color: "text-indigo-400", featured: false },
  { name: "Google Gemini", category: "AI/ML", icon: "sparkles", color: "text-blue-400", featured: true },
  { name: "Inngest", category: "Backend", icon: "workflow", color: "text-orange-400", featured: true },
  { name: "E2B Sandbox", category: "Cloud/DevOps", icon: "box", color: "text-yellow-500", featured: true },
];

export const PROJECTS = [
  {
    title: "PromptStudio",
    tagline: "Agentic AI App Generator",
    description: "Agentic AI platform that generates and deploys functional Next.js applications from natural language prompts.",
    detailedDescription: "Built an agentic AI platform that generates and deploys functional Next.js applications from natural language prompts using a agent workflow orchestrated by Inngest and powered by Google Gemini 2.5 Flash.",
    impact: "Generates production-ready Next.js apps from prompts in under 60 seconds",
    metrics: ["AI-Powered", "Agentic", "Full Stack", "Payments", "Auth"],
    featured: true,
    tech: ["Next.js 15", "React 19", "Inngest", "Google Gemini API", "E2B Sandboxing", "PostgreSQL", "Prisma", "Clerk", "Stripe"],
    features: [
      "Agentic AI workflow orchestrated by Inngest with Google Gemini 2.5 Flash for iterative code generation",
      "Autonomous code agent writing, executing, and debugging multi-file apps inside secure E2B sandboxes",
      "Time-travel versioning with PostgreSQL + Prisma for rollback and session-based evolution",
      "Clerk authentication, Stripe billing, and credit-based rate limiting"
    ],
    link: "https://prompt-studio-liart.vercel.app/",
    github: "https://github.com/HarshilModh/promptStudio",
    icon: "brain",
    visual: {
      gradient: "from-violet-900 via-fuchsia-900 to-slate-900",
      icon: "brain"
    }
  },
  {
    title: "CareConnect",
    tagline: "Comprehensive Caregiving Platform",
    description: "Real-time communication, task tracking, and health monitoring for families and professionals.",
    detailedDescription: "Designed and developed a comprehensive MERN-stack caregiving platform facilitating seamless coordination between families, professional caregivers, and care recipients through real-time communication, task tracking, and health monitoring.",
    impact: "End-to-end MERN caregiving platform with real-time coordination for families and professionals",
    metrics: ["Real-Time", "Full Stack", "Auth", "Cloud", "WebSockets"],
    featured: true,
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Redis", "Firebase", "AWS", "Socket.io", "Tailwind CSS"],
    features: [
      "Real-time messaging with Socket.io and Redis for instant family-caregiver communication",
      "Interactive health dashboards with Recharts tracking vital signs and trends",
      "Emergency 'Panic Button' triggering instant alerts via Nodemailer and Firebase",
      "AWS S3 document storage with presigned URLs and Firebase RBAC security"
    ],
    link: "https://care-connect-five-alpha.vercel.app",
    github: "https://github.com/HarshilModh/Care_Connect",
    icon: "activity",
    visual: {
      gradient: "from-blue-900 via-cyan-900 to-slate-900",
      icon: "activity"
    }
  },
  {
    title: "Vibe Code Editor",
    tagline: "AI-Powered Web IDE",
    description: "Cloud-native IDE with Next.js, WebContainers, Monaco Editor, and integrated terminal emulator.",
    detailedDescription: "Developed a cloud-native IDE with Next.js, WebContainers, Monaco Editor, and integrated terminal emulator, enabling secure execution of 5+ stacks via WASM isolation.",
    impact: "Cloud IDE supporting 5+ stacks with AI-accelerated coding workflows",
    metrics: ["AI-Powered", "Cloud-Native", "Dockerized"],
    featured: false,
    tech: ["Next.js", "TypeScript", "WebContainers", "Monaco Editor", "Ollama", "NextAuth", "TailwindCSS", "MongoDB", "Docker"],
    features: [
      "Cloud-native IDE with WebContainers and Monaco Editor for secure WASM-based execution",
      "AI-powered completions via Ollama LLMs, accelerating coding workflows by ~30%",
      "Scalable developer UI with file explorer, terminal, and persistent MongoDB storage"
    ],
    link: "#",
    github: "https://github.com/HarshilModh/code_with_vibe",
    icon: "code",
    visual: {
      gradient: "from-indigo-900 via-purple-900 to-slate-900",
      icon: "code"
    }
  },
  {
    title: "Lumina",
    tagline: "High-Definition Cloud Storage",
    description: "Next-generation cloud storage platform for visual assets with high-definition rendering and smart tagging.",
    detailedDescription: "Developed a next-generation cloud storage platform for visual assets with high-definition rendering, smart tagging, hierarchical folders, and a modern glassmorphic dashboard.",
    impact: "60% faster image delivery with edge-cached CDN and smart tagging",
    metrics: ["Full Stack", "Auth", "Edge-Cached", "API-Driven"],
    featured: false,
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "HeroUI", "Drizzle ORM", "Neon Database", "Clerk Auth", "ImageKit", "PostgreSQL"],
    features: [
      "Cloud storage with ImageKit for edge-cached global delivery, 60% faster loads",
      "Enterprise-grade encryption with OTP auth, favorites, trash, and restore workflows",
      "Modern glassmorphic dashboard with analytics, galleries, and folder navigation"
    ],
    link: "#",
    github: "https://github.com/HarshilModh/lumina",
    icon: "image",
    visual: {
      gradient: "from-emerald-900 via-teal-900 to-slate-900",
      icon: "image"
    }
  },
  {
    title: "Stevens Hub",
    tagline: "Campus Social Ecosystem",
    description: "Full-stack student portal featuring Reddit-style forums, course reviews, and OAuth integration.",
    detailedDescription: "Spearheaded a full-stack student portal used by 10+ testers, with forums, reviews, and resource directories.",
    impact: "Student portal reducing unauthorized access by ~90% with OAuth + 2FA",
    metrics: ["Full Stack", "Auth", "OAuth", "API-Driven"],
    featured: false,
    tech: ["Node.js", "Express", "MongoDB", "OAuth", "Role-based Access", "Cloudinary"],
    features: [
      "Reddit-style forums with rich media, polls, upvotes, and moderation tools",
      "Google OAuth + 2FA cutting unauthorized access by ~90%",
      "Course review engine with anonymized submissions and 5-star ratings",
      "Google Maps integration for campus building navigation"
    ],
    link: "#",
    github: "https://github.com/HarshilModh/Duck_Hub",
    icon: "globe",
    visual: {
      gradient: "from-amber-900 via-orange-900 to-slate-900",
      icon: "globe"
    }
  },
  {
    title: "Interview Master",
    tagline: "AI Voice Interview Agent",
    description: "Real-time AI interview platform with bidirectional voice conversations and automated feedback.",
    detailedDescription: "Architected a real-time AI interview platform with Next.js 14, integrating Vapi.ai and Google Gemini for bidirectional voice conversations with sub-500ms latency.",
    impact: "Sub-500ms latency voice interviews with automated performance scoring",
    metrics: ["AI-Powered", "Real-Time", "Voice AI", "Auth"],
    featured: false,
    tech: ["Next.js 14", "TypeScript", "Vapi.ai", "Google Gemini API", "Firebase", "Tailwind CSS", "Zod"],
    features: [
      "Bidirectional voice interviews via Vapi.ai with sub-500ms latency",
      "Dynamic role-specific question generation using Google Gemini LLMs",
      "Automated feedback pipeline with granular 0-100 scoring and insights",
      "Secure dashboard with Firebase Auth/Firestore and Server Actions"
    ],
    link: "https://interview-app-virid.vercel.app/",
    github: "https://github.com/HarshilModh/interview_App",
    icon: "mic",
    visual: {
      gradient: "from-rose-900 via-pink-900 to-slate-900",
      icon: "mic"
    }
  }
];

export const SKILL_CATEGORIES = ["All", "Languages", "Frontend", "Backend", "Database", "Cloud/DevOps", "AI/ML", "Tools", "Certifications"];
