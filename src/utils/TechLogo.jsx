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
import {
  Axis3d, BarChart3, Boxes, Database, FileSearch, Infinity as InfinityIcon, KeyRound,
  ListOrdered, Plug, ShieldCheck, Waypoints, Webhook, Workflow,
} from 'lucide-react';

// Official brand silhouettes from Simple Icons, Font Awesome, and Tabler.
// Concepts and tools without a brand mark (SQL, RAG, RBAC, etc.) use a matching Lucide glyph.
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

const GLYPHS = {
  SQL: Database,
  Recharts: BarChart3,
  BullMQ: ListOrdered,
  RAG: FileSearch,
  MCP: Plug,
  LangGraph: Workflow,
  Embeddings: Waypoints,
  pgvector: Axis3d,
  Qdrant: Boxes,
  'CI/CD': InfinityIcon,
  OAuth: KeyRound,
  RBAC: ShieldCheck,
  'HMAC webhooks': Webhook,
};

export function TechLogo({ name }) {
  const Logo = LOGOS[name];
  if (Logo) return <Logo className="tech-logo" aria-hidden="true" focusable="false" />;
  const Glyph = GLYPHS[name];
  if (Glyph) return <Glyph className="tech-logo" strokeWidth={1.75} aria-hidden="true" focusable="false" />;
  return null;
}
