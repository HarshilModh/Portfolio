import React from 'react';
import {
  Code, Terminal, Database, Cloud, Cpu, Globe, Award, Layers,
  Shield, PenTool, Image as ImageIcon, Lock, Zap, Brain, Mic, Activity, Sparkles, Workflow, Box, Server
} from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiGo, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiThreedotjs,
  SiNodedotjs, SiExpress, SiFlask, SiSpring, SiSocketdotio, SiRedis,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase,
  SiAmazon, SiVercel, SiDocker, SiKubernetes, SiTerraform, SiGithubactions,
  SiJest, SiCypress, SiPostman, SiGit, SiJirasoftware,
  SiGraphql, SiPrisma, SiStripe
} from 'react-icons/si';

/**
 * UTILITY: SKILL ICONS using react-icons
 */
export const SkillIcon = ({ icon, className, category }) => {
  switch (icon) {
    // Languages
    case 'js': return <SiJavascript className={className} />;
    case 'ts': return <SiTypescript className={className} />;
    case 'python': return <SiPython className={className} />;
    case 'java': return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573" /><path d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" /><path d="M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627" /><path d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" /></svg>;
    case 'cpp': return <SiCplusplus className={className} />;
    case 'go': return <SiGo className={className} />;
    case 'html': return <SiHtml5 className={className} />;
    case 'sql': return <Database className={className} />;

    // Frontend
    case 'react': return <SiReact className={className} />;
    case 'next': return <SiNextdotjs className={className} />;
    case 'tailwind': return <SiTailwindcss className={className} />;
    case 'bootstrap': return <SiBootstrap className={className} />;
    case 'shadcn': return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M20.8 2l-5.6 16.8-3.2-6.4L20.8 2zM3.2 4.4l8.8 4.8-2.4 8.8L3.2 4.4z" /></svg>;
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
    case 'mic': return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>;
    case 'activity': return <Activity className={className} />;
    case 'image': return <ImageIcon className={className} />;
    case 'prisma': return <SiPrisma className={className} />;
    case 'stripe': return <SiStripe className={className} />;
    case 'sparkles': return <Sparkles className={className} />;
    case 'workflow': return <Workflow className={className} />;
    case 'box': return <Box className={className} />;
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
