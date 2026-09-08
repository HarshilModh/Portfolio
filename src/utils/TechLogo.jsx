import {
  SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus,
  SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiShadcnui,
  SiReactquery, SiD3Dotjs, SiNodedotjs, SiExpress, SiFastapi,
  SiPostgresql, SiMongodb, SiRedis, SiPrisma, SiSocketdotio,
  SiGraphql, SiOpenai, SiClaude, SiGooglegemini, SiLangchain,
  SiAmazonwebservices, SiDocker, SiGithubactions, SiLinux,
  SiPytest, SiClerk, SiFirebase, SiJsonwebtokens, SiStripe,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';
import { TbBrandAzure } from 'react-icons/tb';

// Official brand silhouettes from Simple Icons, Font Awesome, and Tabler.
// Concepts without a brand (SQL, RAG, RBAC, etc.) retain their text labels.
const LOGOS = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  C: SiC,
  'C++': SiCplusplus,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Angular: SiAngular,
  'Tailwind CSS': SiTailwindcss,
  'shadcn/ui': SiShadcnui,
  'TanStack Query': SiReactquery,
  D3: SiD3Dotjs,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Prisma: SiPrisma,
  'Socket.IO': SiSocketdotio,
  GraphQL: SiGraphql,
  'OpenAI API': SiOpenai,
  Claude: SiClaude,
  Gemini: SiGooglegemini,
  LangChain: SiLangchain,
  'AWS EC2 / S3 / Bedrock': SiAmazonwebservices,
  'Azure Container Apps': TbBrandAzure,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
  Linux: SiLinux,
  pytest: SiPytest,
  Clerk: SiClerk,
  'Firebase Auth': SiFirebase,
  JWT: SiJsonwebtokens,
  Stripe: SiStripe,
};

export function TechLogo({ name }) {
  const Logo = LOGOS[name];
  if (!Logo) return null;
  return <Logo className="tech-logo" aria-hidden="true" focusable="false" />;
}
