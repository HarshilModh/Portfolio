import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  Moon, Sun, Github, Linkedin, Mail, ExternalLink, ChevronDown, 
  Code, Terminal, Database, Cloud, Cpu, Globe, GraduationCap, 
  Briefcase, Shield, Box, Server, PenTool, Key, Award, Layers, 
  MapPin, Calendar, Send, User, MessageSquare, X, 
  Image as ImageIcon, Play, ZoomIn, ArrowRight, Lock, Layout, Zap, Check, Brain 
} from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiGo, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiThreedotjs,
  SiNodedotjs, SiExpress, SiFlask, SiSpring, SiSocketdotio, SiRedis,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiAmazon, SiVercel, SiDocker, SiKubernetes, SiTerraform, SiGithubactions,
  SiJest, SiCypress, SiPostman, SiGit, SiJirasoftware,
  SiGraphql
} from 'react-icons/si';

/**
 * DATA CONSTANTS
 */
const PROFILE = {
  name: "Harshil Modh",
  roles: ["Full Stack Developer"],
  socials: {
      github: "github.com/HarshilModh",
      linkedin: "www.linkedin.com/in/harshil-modh-53a62a1a6/",
      email: "hmodh@stevens.edu",
      location: "Hoboken, NJ"
  }
};

const NAV_LINKS = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Teaching Assistant - Web Programming",
    organization: "Stevens Institute of Technology",
    period: "Sept 2025 - Present",
    location: "Hoboken, NJ",
    description: "Leading office hours for 100+ graduate students. Built CI/CD automated grading pipelines reducing turnaround by 80% and mentored students on scalable web architecture.",
    tags: ["TypeScript", "Node.js", "Docker", "CI/CD"]
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    organization: "Grownited",
    period: "July 2023 - Jan 2024",
    location: "India",
    description: "Contributed to a scalable CRM platform. Optimized MongoDB queries improving latency by 25% and implemented Jest-based test automation workflows.",
    tags: ["React", "Node.js", "MongoDB", "Jest"]
  }
];

const EDUCATION_DATA = [
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

// Skills Data
const TECHNICAL_ARSENAL = [
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
];

// SIMPLIFIED PROJECT DATA (No Images)
const PROJECTS = [
  {
    title: "Vibe Code Editor",
    tagline: "AI-Powered Cloud IDE",
    description: "Cloud-native AI-powered IDE with WebContainers and Ollama LLMs for intelligent code completion.",
    detailedDescription: "A fully functional cloud-based IDE that runs Node.js entirely in the browser using WebContainers. Features include a multi-tab file system, integrated terminal, and AI-powered code suggestions running on local WASM transformers.",
    tech: ["Next.js", "WebContainers", "Ollama", "Docker"],
    link: "#",
    github: "#",
    icon: "code",
    visual: {
      gradient: "from-indigo-900 via-purple-900 to-slate-900",
      icon: "code"
    }
  },
  {
    title: "DropDrive",
    tagline: "Secure File Transfer Protocol",
    description: "Secure file-sharing service with E2E encryption, expiring links, and scalable cloud storage integration.",
    detailedDescription: "Architected a secure file sharing platform similar to WeTransfer but with enhanced privacy controls. Implements zero-knowledge encryption where files are encrypted client-side before upload. Features scalable AWS S3 storage backend.",
    tech: ["Next.js", "Drizzle ORM", "Neon DB", "AWS"],
    link: "#",
    github: "#",
    icon: "lock",
    visual: {
      gradient: "from-emerald-900 via-teal-900 to-slate-900",
      icon: "lock"
    }
  },
  {
    title: "Stevens Hub",
    tagline: "Campus Social Ecosystem",
    description: "Full-stack student portal featuring Reddit-style forums, course reviews, and OAuth integration.",
    detailedDescription: "A campus-wide social platform serving 500+ students. Features include anonymous course reviews, real-time chat forums using Socket.io, and an integrated campus map using Google Maps API for building navigation.",
    tech: ["Node.js", "MongoDB", "Google Maps API", "Express"],
    link: "#",
    github: "#",
    icon: "globe",
    visual: {
      gradient: "from-amber-900 via-orange-900 to-slate-900",
      icon: "globe"
    }
  }
];

const SKILL_CATEGORIES = ["All", "Languages", "Frontend", "Backend", "Database", "Cloud/DevOps", "AI/ML", "Tools", "Certifications"];

/**
 * UTILITY: SKILL ICONS using react-icons
 */
const SkillIcon = ({ icon, className, category }) => {
  switch (icon) {
    // Languages
    case 'js': return <SiJavascript className={className} />;
    case 'ts': return <SiTypescript className={className} />;
    case 'python': return <SiPython className={className} />;
    case 'java': return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573"/><path d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118"/><path d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/><path d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>;
    case 'cpp': return <SiCplusplus className={className} />;
    case 'go': return <SiGo className={className} />;
    case 'html': return <SiHtml5 className={className} />;
    case 'sql': return <Database className={className} />;
    
    // Frontend
    case 'react': return <SiReact className={className} />;
    case 'next': return <SiNextdotjs className={className} />;
    case 'tailwind': return <SiTailwindcss className={className} />;
    case 'bootstrap': return <SiBootstrap className={className} />;
    case 'shadcn': return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M20.8 2l-5.6 16.8-3.2-6.4L20.8 2zM3.2 4.4l8.8 4.8-2.4 8.8L3.2 4.4z"/></svg>; 
    case 'three': return <SiThreedotjs className={className} />;
    
    // Backend
    case 'node': return <SiNodedotjs className={className} />;
    case 'express': return <SiExpress className={className} />;
    case 'drizzle': return <Database className={className} />;
    case 'flask': return <SiFlask className={className} />;
    case 'spring': return <SiSpring className={className} />;
    case 'socket': return <SiSocketdotio className={className} />;
    case 'redis': return <SiRedis className={className} />;
    
    // Database
    case 'mongo': return <SiMongodb className={className} />;
    case 'postgres': return <SiPostgresql className={className} />;
    case 'mysql': return <SiMysql className={className} />;
    case 'neon': return <Zap className={className} />;
    case 'firebase': return <SiFirebase className={className} />;
    
    // Cloud/DevOps
    case 'aws': return <SiAmazon className={className} />;
    case 'vercel': return <SiVercel className={className} />;
    case 'docker': return <SiDocker className={className} />;
    case 'k8s': return <SiKubernetes className={className} />;
    case 'terraform': return <SiTerraform className={className} />;
    case 'github': return <SiGithubactions className={className} />;
    
    // Tools
    case 'git': return <SiGit className={className} />;
    case 'jest': return <SiJest className={className} />;
    case 'cypress': return <SiCypress className={className} />;
    case 'postman': return <SiPostman className={className} />;
    case 'jira': return <SiJirasoftware className={className} />;
    
    // API/Auth
    case 'graphql': return <SiGraphql className={className} />;
    case 'auth': return <Shield className={className} />;
    case 'jwt': return <Key className={className} />;
    case 'api': return <Globe className={className} />;
    case 'cert': return <Award className={className} />;
    
    // AI/ML
    case 'ai': return <Brain className={className} />;
  }

  // Fallback to Lucide Icons based on category
  switch (category) {
    case 'Database': return <Database className={className} />;
    case 'Cloud/DevOps': return <Cloud className={className} />;
    case 'Backend': return <Server className={className} />;
    case 'Frontend': return <Code className={className} />;
    case 'Languages': return <Terminal className={className} />;
    case 'AI/ML': return <Cpu className={className} />;
    case 'Auth': 
    case 'Security': return <Shield className={className} />;
    case 'Tools': 
    case 'Testing': return <PenTool className={className} />;
    case 'API': return <Globe className={className} />;
    case 'Certifications': return <Award className={className} />;
    default: return <Layers className={className} />;
  }
};

/**
 * HERO COMPONENT: 3D HUD & DIGITAL WAVE
 */
const HeroHUD = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const resize = () => {
      if(canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    let time = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;

      const gridColor = isDark ? 'rgba(126, 91, 240, 0.15)' : 'rgba(126, 91, 240, 0.1)';
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
          const y = height - 50 - (i * 20) + Math.sin((x + time * 50) * 0.005) * 15;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.005);
      ctx.strokeStyle = isDark ? 'rgba(126, 91, 240, 0.3)' : 'rgba(126, 91, 240, 0.2)';
      ctx.setLineDash([20, 15]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 260, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-time * 0.008);
      ctx.strokeStyle = isDark ? 'rgba(126, 91, 240, 0.5)' : 'rgba(126, 91, 240, 0.4)';
      ctx.setLineDash([]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.stroke();
      
      for(let i=0; i<3; i++){
        const angle = (Math.PI * 2 / 3) * i;
        const px = Math.cos(angle) * 220;
        const py = Math.sin(angle) * 220;
        ctx.fillStyle = '#7E5BF0';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.strokeStyle = isDark ? 'rgba(126, 91, 240, 0.8)' : 'rgba(126, 91, 240, 0.6)';
      ctx.arc(0, 0, 100, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0 pointer-events-none opacity-60" />;
};

/**
 * COMPONENT: TILT CARD
 */
const TiltCard = ({ children, className, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

/**
 * COMPONENT: TYPEWRITER TEXT
 */
const TypewriterText = ({ texts, wait = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentText) {
        if (texts.length > 1) {
          setTimeout(() => setIsDeleting(true), wait);
        }
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, wait]);

  return (
    <span className="inline-block min-w-[250px] text-[#7E5BF0] font-bold">
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

/**
 * COMPONENT: HOLOGRAPHIC CODE TERMINAL
 */
const CodeTerminal = ({ isDark }) => {
  const [displayText, setDisplayText] = useState('');
  const fullCode = `const developer = {
  name: "Harshil Modh",
  role: "Full Stack Developer",
  mission: "Building the Future",
  skills: [
    "Cloud Computing", 
    "AI Systems", 
    "Scalable Web Architecture"
  ],
  status: "Ready to Deploy"
};
// Connection Established.
`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullCode.substring(0, index));
      index++;
      if (index > fullCode.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const terminalBg = isDark ? 'bg-slate-900/80' : 'bg-gray-900/90';
  const borderColor = isDark ? 'border-slate-700' : 'border-gray-700';

  return (
    <TiltCard className={`w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm border ${borderColor} ${terminalBg}`}>
      <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-xs text-gray-400 font-mono">profile.tsx</div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed">
        <pre className="text-[#7E5BF0]">
          {displayText}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-[#7E5BF0] ml-1 align-middle"
          />
        </pre>
      </div>
    </TiltCard>
  );
};

/**
 * COMPONENT: PROJECT DETAILS MODAL
 */
const ProjectModal = ({ project, onClose, isDark }) => {
  if (!project) return null;

  const modalBg = isDark ? 'bg-slate-900/95' : 'bg-white/95';
  const borderColor = isDark ? 'border-slate-700' : 'border-gray-200';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-700';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border ${borderColor} ${modalBg} shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`sticky top-0 z-10 flex items-center justify-between px-8 py-4 border-b ${borderColor} ${modalBg} backdrop-blur-xl`}>
          <h2 className="text-2xl font-bold text-[#7E5BF0]">{project.title}</h2>
          <button onClick={onClose} className={`p-2 rounded-full hover:bg-gray-500/10 transition-colors ${textColor}`}>
            <X size={24} />
          </button>
        </div>

        <div className="p-8 grid gap-8">
          <div className="grid grid-cols-1">
              <div className="md:col-span-2 space-y-6">
                <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Overview</h3>
                    <p className={`leading-relaxed ${textColor}`}>{project.detailedDescription || project.description}</p>
                </div>
                
                <div>
                    <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className={`px-3 py-1 rounded-full text-sm font-mono ${isDark ? 'bg-slate-800 text-[#7E5BF0] border border-[#7E5BF0]/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
            </div>

            <div className="space-y-4">
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#7E5BF0] text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-[#7E5BF0]/25">
                    <ExternalLink size={18} /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg border font-semibold transition-all ${isDark ? 'border-slate-600 hover:bg-slate-800 text-white' : 'border-gray-300 hover:bg-gray-50 text-gray-900'}`}>
                    <Github size={18} /> View Code
                </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * MAIN APP COMPONENT
 */
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const experienceRef = useRef(null);
  const { scrollYProgress: expProgress } = useScroll({
    target: experienceRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(expProgress, { stiffness: 100, damping: 30 });

  const toggleTheme = () => setIsDark(!isDark);
  
  const filteredSkills = activeTab === "All" 
    ? TECHNICAL_ARSENAL.filter(skill => skill.featured) 
    : TECHNICAL_ARSENAL.filter(skill => skill.category.includes(activeTab));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate network delay for effect
    setTimeout(() => {
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:hmodh@stevens.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
    }, 1000);
  };

  const bgClass = isDark ? "bg-slate-950 text-white" : "bg-gray-50 text-slate-900";
  const navClass = isDark ? "border-white/5 bg-slate-950/80" : "border-black/5 bg-white/80";
  const cardClass = isDark ? "bg-slate-900 border-slate-800 shadow-xl shadow-black/20" : "bg-white border-gray-200 shadow-lg shadow-gray-200/50";
  const textMuted = isDark ? "text-slate-400" : "text-gray-500";
  const headingGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#7E5BF0] via-purple-500 to-pink-500";
  const inputClass = isDark ? "bg-slate-800/50 border-slate-700 text-white focus:border-[#7E5BF0]" : "bg-white border-gray-200 text-slate-900 focus:border-[#7E5BF0]";

  return (
    <div ref={scrollRef} className={`min-h-screen transition-colors duration-500 ${bgClass} overflow-x-hidden selection:bg-[#7E5BF0] selection:text-white font-sans`}>
      
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-[#7E5BF0] origin-left z-50" />

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-500 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">HM.</span>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-[#7E5BF0] transition-colors ${textMuted}`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a href={`https://${PROFILE.socials.github}`} target="_blank" rel="noopener noreferrer" className={`${textMuted} hover:text-[#7E5BF0] transition`}><Github size={20} /></a>
              <a href={`https://${PROFILE.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className={`${textMuted} hover:text-[#7E5BF0] transition`}><Linkedin size={20} /></a>
            </div>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <HeroHUD isDark={isDark} />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className={`text-xl md:text-2xl font-medium mb-4 min-h-[2rem] ${textMuted}`}>
              I am a <TypewriterText texts={PROFILE.roles} />
            </h2>
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight ${headingGradient}`}>
              Harshil<br/>Modh
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${textMuted} mb-10 max-w-lg mx-auto md:mx-0`}>
              Building scalable cloud solutions and immersive web experiences. 
              Merging robust backend architecture with intuitive frontend design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="px-8 py-3 bg-[#7E5BF0] hover:opacity-90 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#7E5BF0]/25 text-center">
                View Work
              </a>
              <a href="#contact" className={`px-8 py-3 border font-semibold rounded-full transition-all hover:bg-[#7E5BF0]/10 text-center ${isDark ? 'border-white/20 text-white' : 'border-black/10 text-slate-900'}`}>
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <CodeTerminal isDark={isDark} />
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className={textMuted} />
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className={`py-24 ${isDark ? 'bg-slate-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
            <div className="h-1 w-20 bg-[#7E5BF0] mx-auto rounded-full" />
            {activeTab === "All" && (
              <p className={`mt-4 text-sm ${textMuted}`}>Displaying core technologies. Filter for complete list.</p>
            )}
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat 
                  ? 'bg-[#7E5BF0] text-white shadow-lg shadow-[#7E5BF0]/25' 
                  : `${isDark ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  key={skill.name}
                >
                  <TiltCard className={`p-4 rounded-xl border ${cardClass} flex flex-col items-center justify-center gap-3 group cursor-default h-full`}>
                    <div className={`w-10 h-10 ${skill.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-sm`}>
                      <SkillIcon icon={skill.icon} category={skill.category} className="w-full h-full" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-sm md:text-base">{skill.name}</h3>
                      <p className={`text-[10px] uppercase tracking-wider ${textMuted}`}>{skill.category}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 relative overflow-hidden" ref={experienceRef}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Odyssey</h2>
            <div className="h-1 w-20 bg-[#7E5BF0] mx-auto rounded-full" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] transform md:-translate-x-1/2">
              <div className={`w-full h-full ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
              <motion.div 
                style={{ height: useTransform(pathLength, [0, 1], ["0%", "100%"]) }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#7E5BF0] via-purple-500 to-[#7E5BF0]"
              />
            </div>
            <div className="space-y-20">
              {EXPERIENCE_DATA.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-10 items-center`}
                >
                  <div className={`absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#7E5BF0] ${isDark ? 'bg-slate-950' : 'bg-white'} z-20`}>
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-full h-full rounded-full bg-[#7E5BF0] opacity-50"
                    />
                  </div>
                  <div className={`hidden md:block absolute top-1/2 w-1/2 h-[2px] ${index % 2 === 0 ? 'left-1/2 origin-left' : 'right-1/2 origin-right'} bg-[#7E5BF0]/20`} />
                  <div className="md:w-1/2 w-full pl-8 md:pl-0">
                    <TiltCard className={`p-8 rounded-2xl border ${cardClass} relative group`}>
                       <div className="absolute -left-2 top-1/2 w-2 h-8 bg-[#7E5BF0] rounded-r-md transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <span className={`flex items-center gap-1 font-medium ${isDark ? 'text-indigo-300' : 'text-[#7E5BF0]'}`}>
                                <Briefcase size={14}/> {item.organization}
                            </span>
                            <span className={`flex items-center gap-1 ${textMuted}`}>
                                <Calendar size={14}/> {item.period}
                            </span>
                        </div>
                      </div>
                      <p className={`text-sm leading-relaxed mb-6 ${textMuted}`}>
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-xs px-2 py-1 rounded-md border font-mono ${isDark ? 'bg-[#7E5BF0]/10 border-[#7E5BF0]/30 text-[#7E5BF0]' : 'bg-[#7E5BF0]/5 border-[#7E5BF0]/20 text-[#7E5BF0]'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className={`py-24 ${isDark ? 'bg-slate-900/30' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Foundation</h2>
            <div className="h-1 w-20 bg-[#7E5BF0] mx-auto rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard className={`h-full p-8 rounded-2xl border ${cardClass} flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${isDark ? 'bg-[#7E5BF0]/20 text-[#7E5BF0]' : 'bg-[#7E5BF0]/10 text-[#7E5BF0]'}`}>
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className={`text-sm ${textMuted}`}>{edu.school}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} className={textMuted} />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={14} className={textMuted} />
                        <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{edu.location}</span>
                      </div>
                    </div>
                    <p className={`text-sm italic mb-4 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                      {edu.details}
                    </p>
                  </div>
                  <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
                    <p className={`text-xs ${textMuted} uppercase tracking-wider mb-1`}>Focus Areas</p>
                    <p className="text-sm font-medium">{edu.focus}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - TEXT DRIVEN */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-[#7E5BF0] mx-auto rounded-full" />
            <p className={`mt-4 ${textMuted}`}>A showcase of technical solutions and creative engineering.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div 
                  onClick={() => setSelectedProject(project)}
                  className={`group relative flex flex-col h-full p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${isDark ? 'bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-[#7E5BF0]/30' : 'bg-white border-gray-200 hover:border-[#7E5BF0]/30 hover:shadow-xl'}`}
                >
                   {/* Abstract Icon Watermark */}
                   <div className={`absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${isDark ? 'text-white' : 'text-[#7E5BF0]'}`}>
                      {project.icon === 'code' && <Code size={200} />}
                      {project.icon === 'lock' && <Lock size={200} />}
                      {project.icon === 'globe' && <Globe size={200} />}
                   </div>

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className={`p-3 rounded-lg ${isDark ? 'bg-[#7E5BF0]/20 text-[#7E5BF0]' : 'bg-[#7E5BF0]/10 text-[#7E5BF0]'}`}>
                      {project.icon === 'code' && <Code size={24} />}
                      {project.icon === 'lock' && <Lock size={24} />}
                      {project.icon === 'globe' && <Globe size={24} />}
                    </div>
                    <ExternalLink size={18} className={`${textMuted} group-hover:text-[#7E5BF0] transition-colors`} />
                  </div>

                  <h3 className={`text-xl font-bold mb-2 relative z-10 group-hover:text-[#7E5BF0] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-xs font-mono mb-4 relative z-10 ${textMuted}`}>{project.tagline}</p>
                  
                  <p className={`text-sm leading-relaxed mb-6 line-clamp-3 relative z-10 ${textMuted}`}>
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className={`text-xs font-medium px-2 py-1 rounded ${isDark ? 'bg-slate-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`text-xs font-medium px-2 py-1 rounded ${isDark ? 'bg-slate-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className={`py-24 ${isDark ? 'bg-slate-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Holographic Comm-Link</h2>
            <div className="h-1 w-20 bg-[#7E5BF0] mx-auto rounded-full" />
            <p className={`mt-4 ${textMuted}`}>Initiate a secure connection for collaboration.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact Info */}
            <TiltCard className={`p-8 rounded-2xl border ${cardClass} flex flex-col justify-center space-y-6`}>
              <h3 className="text-2xl font-bold mb-2">Direct Channels</h3>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className={`p-3 rounded-full ${isDark ? 'bg-[#7E5BF0]/20 text-[#7E5BF0]' : 'bg-[#7E5BF0]/10 text-[#7E5BF0]'} group-hover:scale-110 transition-transform`}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className={`text-sm ${textMuted}`}>Email Address</p>
                  <a href="mailto:hmodh@stevens.edu" className="font-medium text-lg hover:text-[#7E5BF0] transition">hmodh@stevens.edu</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className={`p-3 rounded-full ${isDark ? 'bg-[#7E5BF0]/20 text-[#7E5BF0]' : 'bg-[#7E5BF0]/10 text-[#7E5BF0]'} group-hover:scale-110 transition-transform`}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className={`text-sm ${textMuted}`}>LinkedIn</p>
                  <a href={`https://${PROFILE.socials.linkedin}`} target="_blank" rel="noreferrer" className="font-medium text-lg hover:text-[#7E5BF0] transition">Connect Profile</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className={`p-3 rounded-full ${isDark ? 'bg-[#7E5BF0]/20 text-[#7E5BF0]' : 'bg-[#7E5BF0]/10 text-[#7E5BF0]'} group-hover:scale-110 transition-transform`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className={`text-sm ${textMuted}`}>Base of Operations</p>
                  <span className="font-medium text-lg">Hoboken, NJ</span>
                </div>
              </div>
            </TiltCard>

            {/* Contact Form */}
            <TiltCard className={`p-8 rounded-2xl border ${cardClass}`}>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${textMuted}`}>Identity Code (Name)</label>
                  <div className="relative">
                    <User className={`absolute left-3 top-3 ${textMuted}`} size={18} />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-2 rounded-lg outline-none border focus:ring-2 focus:ring-[#7E5BF0]/50 transition-all ${inputClass}`} 
                      placeholder="Jane Doe" 
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${textMuted}`}>Return Signal (Email)</label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-3 ${textMuted}`} size={18} />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-2 rounded-lg outline-none border focus:ring-2 focus:ring-[#7E5BF0]/50 transition-all ${inputClass}`} 
                      placeholder="jane@example.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-1 ${textMuted}`}>Transmission Data (Message)</label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-3 top-3 ${textMuted}`} size={18} />
                    <textarea 
                      name="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`w-full pl-10 pr-4 py-2 rounded-lg outline-none border focus:ring-2 focus:ring-[#7E5BF0]/50 transition-all ${inputClass}`} 
                      placeholder="Project details..." 
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === "sending"}
                  className={`w-full py-3 rounded-lg text-white font-bold transition-all flex justify-center items-center gap-2 shadow-lg ${formStatus === "sending" ? 'bg-gray-400 cursor-not-allowed' : formStatus === "success" ? 'bg-green-500' : 'bg-[#7E5BF0] hover:opacity-90 shadow-[#7E5BF0]/25'}`}
                >
                  {formStatus === "sending" ? (
                    <span>Establishing Link...</span>
                  ) : formStatus === "success" ? (
                    <>
                      <Check size={18} /> Transmission Sent
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Transmission
                    </>
                  )}
                </button>
              </form>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDark ? 'border-slate-800 bg-slate-950' : 'border-gray-200 bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-bold text-xl tracking-tight">HM.</span>
            <p className={`text-sm mt-2 ${textMuted}`}>&copy; {new Date().getFullYear()} Harshil Modh.</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:hmodh@stevens.edu" className={`text-sm font-medium hover:text-[#7E5BF0] transition ${textMuted}`}>hmodh@stevens.edu</a>
            <a href={`https://${PROFILE.socials.github}`} className={`text-sm font-medium hover:text-[#7E5BF0] transition ${textMuted}`}>GitHub</a>
            <a href={`https://${PROFILE.socials.linkedin}`} className={`text-sm font-medium hover:text-[#7E5BF0] transition ${textMuted}`}>LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* GLOBAL MODAL */}
      <AnimatePresence>
        {selectedProject && (
            <ProjectModal 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
                isDark={isDark} 
            />
        )}
      </AnimatePresence>

    </div>
  );
}
