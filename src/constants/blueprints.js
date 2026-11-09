// System blueprints for the featured projects, keyed by project slug.
// stages: left-to-right columns of components. trace: one request followed through the system,
// each step naming the component ids it touches. stack: the tech, grouped by the layer it serves.

export const BLUEPRINTS = {
  codepulse: {
    question: 'What happens when you push a commit',
    caption: 'Every push fans out to five parallel jobs and fans back in to one score.',
    stages: [
      {
        label: 'Trigger',
        nodes: [
          { id: 'push', name: 'GitHub push', tech: 'GitHub App · HMAC webhook', detail: 'A GitHub App delivers the push event. The webhook signature is verified with HMAC before anything is queued, and a repository URL can also be submitted by hand.' },
        ],
      },
      {
        label: 'Ingest',
        nodes: [
          { id: 'api', name: 'Express API', tech: 'Node.js · Clerk JWT', detail: 'The API authenticates the caller, resolves the repository, and acts as the BullMQ producer. It also hosts the Socket.IO server and the agent endpoints.' },
          { id: 'queue', name: 'Job queue', tech: 'BullMQ on Redis', detail: 'One push becomes five jobs. Redis holds the queue, so workers retry and scale independently of the API that accepted the webhook.' },
        ],
      },
      {
        label: 'Analyse in parallel',
        parallel: true,
        nodes: [
          { id: 'complexity', name: 'Complexity', tech: 'escomplex · 25% of score', detail: 'Finds functions with high cyclomatic complexity. Weighted at 25% of the health score.' },
          { id: 'vuln', name: 'Vulnerabilities', tech: 'npm audit · 25%', detail: 'Reads critical, high, and moderate CVEs from the dependency tree. Weighted at 25%.' },
          { id: 'deadcode', name: 'Dead code', tech: 'ts-prune · 15%', detail: 'Flags unused exports and orphaned modules. Weighted at 15%.' },
          { id: 'coverage', name: 'Coverage', tech: 'CI artifacts · 20%', detail: 'Reads test coverage from CI artifacts and reports the gaps. Weighted at 20%.' },
          { id: 'drift', name: 'Architectural drift', tech: 'Embeddings · pgvector · 15%', detail: 'Each file is embedded, and drift shows up as cosine distance from the rest of its module. The pgvector search returns in under 50ms. Weighted at 15%.' },
        ],
      },
      {
        label: 'Combine',
        nodes: [
          { id: 'aggregator', name: 'Aggregator', tech: 'Weighted 0–100 score', detail: 'Runs once the five jobs finish: computes the weighted score, writes a snapshot and its findings, then queues K-Means clustering and the AI insights job.' },
          { id: 'db', name: 'PostgreSQL', tech: 'Prisma · pgvector · 14 models', detail: 'Multi-tenant relational data and file embeddings live in one database, so drift detection and semantic search are ordinary queries next to the rest of the data.' },
        ],
      },
      {
        label: 'Deliver',
        nodes: [
          { id: 'pr', name: 'PR health comment', tech: 'GitHub App', detail: 'The score and what moved it are posted back on the pull request, where the change is being reviewed.' },
          { id: 'live', name: 'Live dashboard', tech: 'Redis Pub/Sub → Socket.IO', detail: 'The aggregator publishes to Redis Pub/Sub and the API relays it over Socket.IO, so open dashboards update without a refresh.' },
          { id: 'agents', name: 'AI agents', tech: 'Tool-calling · SSE · MCP', detail: 'Chat, root-cause, debate, and codebase-tour agents stream over SSE with six tools into the repository. The same tools are exposed to Claude and Cursor through an MCP server.' },
        ],
      },
    ],
    trace: [
      { title: 'A commit lands', body: 'GitHub sends the push event to the API. The HMAC signature is checked first, so only real GitHub deliveries can start work.', nodes: ['push', 'api'] },
      { title: 'One push becomes five jobs', body: 'The API enqueues complexity, vulnerability, dead-code, coverage, and drift jobs on BullMQ and returns immediately. Nothing heavy runs in the request.', nodes: ['queue'] },
      { title: 'Five workers run side by side', body: 'Each signal has its own worker, so total time is the slowest analysis rather than the sum of all five.', nodes: ['complexity', 'vuln', 'deadcode', 'coverage', 'drift'] },
      { title: 'Fan back in to one score', body: 'The aggregator weights the five results into a single 0–100 score and stores a snapshot with its findings. Push to score takes under 60 seconds.', nodes: ['aggregator', 'db'] },
      { title: 'The result goes where people are', body: 'A health comment lands on the pull request and every open dashboard updates live through Redis Pub/Sub and Socket.IO.', nodes: ['pr', 'live'] },
      { title: 'Then you can ask why', body: 'Agents answer questions about the change with retrieval over the embedded codebase, streaming the first tokens in under 400ms.', nodes: ['agents', 'db'] },
    ],
    stack: [
      { layer: 'Interface', items: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'Recharts'] },
      { layer: 'API & workers', items: ['Node.js', 'Express', 'BullMQ', 'Socket.IO'] },
      { layer: 'Data', items: ['PostgreSQL', 'Prisma', 'pgvector', 'Redis'] },
      { layer: 'AI', items: ['OpenAI API', 'Embeddings', 'K-Means clustering', 'MCP server'] },
      { layer: 'Product', items: ['GitHub App', 'Clerk', 'Stripe'] },
    ],
  },

  careconnect: {
    question: 'What happens when a caregiver logs a dose',
    caption: 'Deployed as a four-service Docker stack on AWS EC2.',
    stages: [
      {
        label: 'Client',
        nodes: [
          { id: 'app', name: 'React app', tech: 'React · Vite · Recharts', detail: 'Tasks, medications, vitals charts, documents, and chat for a care group, in one place instead of texts, calls, and paper notes.' },
        ],
      },
      {
        label: 'API',
        nodes: [
          { id: 'api', name: 'Express REST API', tech: '40+ endpoints', detail: 'More than 40 REST endpoints cover groups, tasks, medications, vitals, documents, and chat. Every one of them sits behind authentication and a permission check.' },
          { id: 'auth', name: 'Authentication', tech: 'Firebase Auth · JWT', detail: 'Email and Google sign-in run through Firebase. The API verifies the token on each request and keeps sessions stateless.' },
          { id: 'rbac', name: 'Membership RBAC', tech: '5 roles · per care group', detail: 'Permissions are evaluated per membership, so access is decided by a person’s role inside each care group and groups stay isolated from one another.' },
        ],
      },
      {
        label: 'Data & real time',
        nodes: [
          { id: 'mongo', name: 'MongoDB', tech: 'Atomic dose logging', detail: 'Care data lives in MongoDB. Medication doses are logged atomically, so tracking stays accurate when several caregivers write at once.' },
          { id: 'redis', name: 'Redis cache', tech: '−50% database queries', detail: 'Caching and token-based stateless sessions cut database queries by 50%.' },
          { id: 'socket', name: 'Socket.IO', tech: 'Chat · alerts', detail: 'Group chat with edit history, read receipts, and admin-only deletion. The same channel carries one-tap emergency alerts.' },
        ],
      },
      {
        label: 'Background & storage',
        nodes: [
          { id: 'jobs', name: 'Background jobs', tech: '4 scheduled jobs', detail: 'Four jobs generate recurring tasks, detect overdue ones, send deduplicated reminders, and clean up.' },
          { id: 'email', name: 'Notifications', tech: 'In-app · chat · email', detail: 'Reminders and emergency alerts reach every group member through in-app notifications, chat, and email.' },
          { id: 's3', name: 'Document storage', tech: 'AWS S3 · pre-signed URLs', detail: 'Medical records and prescriptions are stored in S3 and only ever reached through short-lived pre-signed URLs.' },
        ],
      },
    ],
    trace: [
      { title: 'A caregiver logs a dose', body: 'They tick off the evening medication in the care group’s dashboard.', nodes: ['app'] },
      { title: 'The request is authenticated', body: 'The API verifies the token issued at sign-in. Sessions are stateless, so no session lookup is needed.', nodes: ['api', 'auth'] },
      { title: 'Their role in this group is checked', body: 'The permission check uses the caller’s membership in this specific care group, not a global role.', nodes: ['rbac'] },
      { title: 'The dose is written once', body: 'The log is an atomic write, so two caregivers logging at the same moment cannot double-count a dose. Frequent reads are served from Redis.', nodes: ['mongo', 'redis'] },
      { title: 'Everyone in the group sees it', body: 'The update and any chat about it reach the rest of the family in real time over Socket.IO.', nodes: ['socket'] },
      { title: 'Nothing waits on memory', body: 'If a dose or task is missed instead, a background job flags it and sends one reminder, not five.', nodes: ['jobs', 'email'] },
    ],
    stack: [
      { layer: 'Interface', items: ['React', 'Vite', 'Tailwind CSS', 'Recharts'] },
      { layer: 'API', items: ['Node.js', 'Express', 'Socket.IO'] },
      { layer: 'Data', items: ['MongoDB', 'Redis', 'AWS S3'] },
      { layer: 'Access', items: ['Firebase Auth', 'JWT', 'Five-role RBAC'] },
      { layer: 'Deploy', items: ['Docker', 'AWS EC2'] },
    ],
  },

  'comp-ledger': {
    question: 'What happens when a publisher tests an AI answer',
    caption: 'Claims are decomposed, verified against five sources, scored, and exported as signed evidence.',
    stages: [
      {
        label: 'Input',
        nodes: [
          { id: 'input', name: 'Question + AI answer', tech: 'React client', detail: 'The publisher submits a question and the answer a model gave. No access to the model’s training data is needed.' },
          { id: 'corpus', name: 'Publisher corpus', tech: 'RSS ingestion · pgvector', detail: 'The publisher’s articles are ingested from RSS feeds into PostgreSQL and indexed with pgvector, so each claim can be matched against their own reporting.' },
        ],
      },
      {
        label: 'Decompose',
        nodes: [
          { id: 'decompose', name: 'Claim decomposition', tech: 'Claude on AWS Bedrock', detail: 'Claude splits the answer into atomic factual claims. Attribution is argued claim by claim, never for the answer as a whole.' },
          { id: 'embed', name: 'Claim embeddings', tech: 'Titan Embed · Bedrock', detail: 'Each claim is embedded and compared with the publisher corpus by cosine similarity.' },
        ],
      },
      {
        label: 'Verify',
        parallel: true,
        nodes: [
          { id: 'wikipedia', name: 'Wikipedia', tech: 'Encyclopedic coverage', detail: 'Checks whether the claim is general encyclopedic knowledge.' },
          { id: 'google', name: 'Google Search', tech: 'Broad web coverage', detail: 'Checks how widely the claim appears across the open web.' },
          { id: 'openalex', name: 'OpenAlex', tech: 'Academic sources', detail: 'Checks peer-reviewed literature for the same claim.' },
          { id: 'gdelt', name: 'GDELT', tech: 'Global news events', detail: 'Checks whether other newsrooms carried the same story.' },
          { id: 'wayback', name: 'Wayback Machine', tech: 'Publication timestamps', detail: 'Verifies when things were published, which establishes who had it first.' },
        ],
      },
      {
        label: 'Score',
        nodes: [
          { id: 'score', name: 'Exclusivity score', tech: 'Inverse to independent sources', detail: 'Each claim is scored inversely to how many independent sources carry it. Common knowledge scores low and original reporting scores high.' },
          { id: 'judge', name: 'Evidence judge', tech: 'Claude · structured verdict', detail: 'A Claude judge weighs all the evidence and returns a structured verdict for each claim, with extra weight when the publisher was first.' },
        ],
      },
      {
        label: 'Deliver',
        nodes: [
          { id: 'sse', name: 'Live ledger', tech: 'Server-Sent Events', detail: 'Scored claims stream to the React client over SSE, so results appear one by one instead of after the whole run.' },
          { id: 'export', name: 'Signed export', tech: 'SHA-256 · AWS S3', detail: 'The evidence record is signed with SHA-256 and written to S3 with the hash mirrored in object metadata, which makes it tamper-evident.' },
        ],
      },
    ],
    trace: [
      { title: 'A publisher submits an answer', body: 'They paste the question and what the AI model said in reply.', nodes: ['input'] },
      { title: 'The answer becomes claims', body: 'Claude breaks the answer into atomic facts and each one is embedded, because an answer is rarely all original or all common knowledge.', nodes: ['decompose', 'embed'] },
      { title: 'Each claim meets the archive', body: 'Claims are matched against the publisher’s own articles to find the reporting they may have come from.', nodes: ['corpus'] },
      { title: 'Five outside sources are checked', body: 'The same claim is looked up across encyclopedic, web, academic, and news sources, with timestamps from the Wayback Machine.', nodes: ['wikipedia', 'google', 'openalex', 'gdelt', 'wayback'] },
      { title: 'Common knowledge scores low', body: 'The more independent sources carry a claim, the lower its exclusivity. A judge then returns a verdict the publisher can read.', nodes: ['score', 'judge'] },
      { title: 'Evidence that holds up', body: 'Results stream in live, and the final record is exported with a SHA-256 signature for licensing negotiations.', nodes: ['sse', 'export'] },
    ],
    stack: [
      { layer: 'Interface', items: ['React', 'Vite', 'Tailwind CSS'] },
      { layer: 'API', items: ['Node.js', 'Express', 'SSE', 'JWT', 'Rate limiting'] },
      { layer: 'Data', items: ['PostgreSQL', 'pgvector', 'RSS ingestion'] },
      { layer: 'AI', items: ['Claude', 'AWS Bedrock', 'Titan embeddings'] },
      { layer: 'Evidence', items: ['SHA-256 signing', 'AWS S3'] },
    ],
  },

  peerprep: {
    question: 'What happens when you click Find a partner',
    caption: 'Exactly-once pairing is enforced by the database, not by application code.',
    stages: [
      {
        label: 'Client',
        nodes: [
          { id: 'web', name: 'React app', tech: 'TypeScript · TanStack Query · STOMP.js', detail: 'The queue, accept screen, interview room, and feedback form. It treats WebSocket events as hints and refetches over REST.' },
        ],
      },
      {
        label: 'API',
        nodes: [
          { id: 'api', name: 'Spring Boot API', tech: 'Java 21 · Spring Boot', detail: 'REST endpoints for the queue, sessions, and feedback, running as several instances behind the same database.' },
          { id: 'auth', name: 'Token rotation', tech: 'JWT · rotating refresh tokens', detail: 'Fifteen-minute access tokens with opaque refresh tokens in an httpOnly cookie. Presenting an already-used refresh token revokes the whole token family.' },
        ],
      },
      {
        label: 'Pairing engine',
        parallel: true,
        nodes: [
          { id: 'queue', name: 'Append-only queue', tech: 'Partial unique index', detail: 'One waiting entry per user, enforced by a partial unique index. A requeue is a fresh row that keeps the original join time, so nobody loses their place.' },
          { id: 'lock', name: 'Per-topic lock', tech: 'pg_advisory_xact_lock', detail: 'A Postgres advisory lock serializes the match attempts that could pair with each other, across every API instance.' },
          { id: 'select', name: 'Candidate selection', tech: 'FOR UPDATE SKIP LOCKED', detail: 'Candidates are locked as they are read, and rows another transaction already holds are skipped instead of waited on.' },
          { id: 'update', name: 'Conditional update', tech: '0 rows = lost the race', detail: 'Status transitions only apply if the row is still in the expected state. Zero affected rows means another attempt won, and that is handled as a normal outcome.' },
        ],
      },
      {
        label: 'Coordinate',
        nodes: [
          { id: 'redis', name: 'Presence', tech: 'Redis TTLs', detail: 'Short-lived presence keys show who is still there, so someone who closed the tab is not offered as a partner.' },
          { id: 'jobs', name: 'Scheduled sweeps', tech: '@Scheduled · ShedLock', detail: 'Search widening, accept-window expiry, and no-show detection run on a schedule, with ShedLock making sure exactly one instance fires.' },
        ],
      },
      {
        label: 'Session',
        nodes: [
          { id: 'ws', name: 'Live events', tech: 'STOMP over WebSocket', detail: 'Match-found and session lifecycle events are published only after the transaction commits.' },
          { id: 'room', name: 'Interview room', tech: 'Two rounds · shared pad', detail: 'Two rounds with swapped roles. The interviewer sees hints, a rubric, and follow-ups; the candidate’s pad is single-writer with optimistic versioning, mirrored live.' },
          { id: 'ai', name: 'AI debrief', tech: 'Spring AI · async', detail: 'After both sides submit feedback, a background job synthesizes a debrief with three bounded retries. Nothing in the human flow waits on it.' },
        ],
      },
    ],
    trace: [
      { title: 'You join the queue', body: 'You pick a topic, difficulty, and language. The API writes one waiting entry, and the unique index makes a second one impossible.', nodes: ['web', 'api', 'queue'] },
      { title: 'Match attempts line up', body: 'A per-topic advisory lock makes attempts that could pair with each other run one at a time, even on different servers.', nodes: ['lock'] },
      { title: 'A partner is claimed once', body: 'A compatible waiter is locked and both entries are updated conditionally. If another attempt got there first, zero rows change and this one simply moves on.', nodes: ['select', 'update'] },
      { title: 'The search widens as you wait', body: 'An exact match first, one level either side after 30 seconds, any level after two minutes. The sweep also expires people who left.', nodes: ['jobs', 'redis'] },
      { title: 'Both browsers hear about it', body: 'A match-found event goes out after commit and a 60-second accept window opens, timed by the server.', nodes: ['ws', 'web'] },
      { title: 'The session runs and wraps up', body: 'Two rounds with swapped roles, feedback from both sides, then an AI debrief written in the background.', nodes: ['room', 'ai'] },
    ],
    stack: [
      { layer: 'Interface', items: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'STOMP.js'] },
      { layer: 'API', items: ['Java 21', 'Spring Boot', 'Spring Security', 'WebSocket'] },
      { layer: 'Data & coordination', items: ['PostgreSQL', 'Flyway', 'Redis', 'ShedLock'] },
      { layer: 'AI', items: ['Spring AI', 'OpenAI'] },
      { layer: 'Quality', items: ['JUnit 5', 'Testcontainers', 'GitHub Actions', 'Docker Compose'] },
    ],
  },

  promptstudio: {
    question: 'What happens when you describe an app',
    caption: 'A durable workflow drives an agent that writes and runs code inside an isolated sandbox.',
    stages: [
      {
        label: 'Prompt',
        nodes: [
          { id: 'ui', name: 'Next.js app', tech: 'React · TanStack Query', detail: 'A chat on one side and a live preview on the other. Each project keeps its full conversation.' },
          { id: 'credits', name: 'Auth & credits', tech: 'Clerk · Stripe', detail: 'Clerk handles sign-in and Stripe handles billing. Credit-based rate limiting decides whether a run may start.' },
        ],
      },
      {
        label: 'Orchestrate',
        nodes: [
          { id: 'event', name: 'Workflow run', tech: 'Inngest · code-agent/run', detail: 'The prompt fires a code-agent/run event. Inngest runs the workflow durably, so a long generation survives failures instead of dying with a request.' },
          { id: 'context', name: 'Conversation context', tech: 'Message history · Prisma', detail: 'Earlier messages for the project are loaded, so a follow-up like “make the chart weekly” builds on what already exists.' },
          { id: 'sandbox', name: 'E2B sandbox', tech: 'Isolated Next.js template', detail: 'A fresh sandbox boots from a Next.js template. Generated code is untrusted, so it only ever runs here.' },
        ],
      },
      {
        label: 'Agent loop',
        parallel: true,
        nodes: [
          { id: 'agent', name: 'Coding agent', tech: 'Gemini 2.5 Flash', detail: 'The agent plans, writes, runs, and reads the result, then repeats until the app works.' },
          { id: 'files', name: 'Write files', tech: 'createOrUpdateFiles tool', detail: 'Creates and edits multiple files inside the sandbox.' },
          { id: 'terminal', name: 'Run commands', tech: 'terminal tool', detail: 'Installs packages and runs commands in the sandbox, and returns the output so the agent can fix its own errors.' },
          { id: 'read', name: 'Read files', tech: 'readFiles tool', detail: 'Lets the agent inspect what is already there before changing it.' },
        ],
      },
      {
        label: 'Result',
        nodes: [
          { id: 'fragment', name: 'Versioned fragment', tech: 'PostgreSQL · Prisma', detail: 'Each run saves its files as a new fragment linked to the message that produced it, which is what makes rollback possible.' },
          { id: 'preview', name: 'Live preview', tech: 'Sandbox URL', detail: 'The running app is shown straight from the sandbox URL, beside the conversation.' },
        ],
      },
    ],
    trace: [
      { title: 'You describe an app', body: 'A prompt goes in from the chat. Sign-in and remaining credits are checked before any work starts.', nodes: ['ui', 'credits'] },
      { title: 'A durable workflow starts', body: 'The prompt becomes an Inngest event, and the project’s earlier messages are loaded as context.', nodes: ['event', 'context'] },
      { title: 'A sandbox boots', body: 'An isolated E2B sandbox starts from a Next.js template, ready to run code nobody has reviewed.', nodes: ['sandbox'] },
      { title: 'The agent writes, runs, and fixes', body: 'Gemini writes files, runs commands, reads the output, and corrects itself in a loop.', nodes: ['agent', 'files', 'terminal', 'read'] },
      { title: 'A version is saved', body: 'The generated files and sandbox URL are stored as a fragment, so any earlier version can be restored.', nodes: ['fragment'] },
      { title: 'You see it running', body: 'The working app appears in the preview, in under 60 seconds from the prompt.', nodes: ['preview', 'ui'] },
    ],
    stack: [
      { layer: 'Interface', items: ['Next.js', 'React', 'Tailwind CSS', 'TanStack Query'] },
      { layer: 'Orchestration', items: ['Inngest', 'Inngest Agent Kit'] },
      { layer: 'AI & runtime', items: ['Google Gemini 2.5 Flash', 'E2B sandboxes'] },
      { layer: 'Data', items: ['PostgreSQL', 'Prisma'] },
      { layer: 'Product', items: ['Clerk', 'Stripe', 'Credit-based limits'] },
    ],
  },

  'vibe-code-editor': {
    question: 'What happens when you open a project',
    caption: 'The editor, the terminal, and the Node.js runtime all live in one browser tab.',
    stages: [
      {
        label: 'Start',
        nodes: [
          { id: 'auth', name: 'Sign-in', tech: 'Auth.js (NextAuth)', detail: 'Accounts and OAuth sign-in through Auth.js, so playgrounds belong to a user.' },
          { id: 'template', name: 'Starter template', tech: 'React · Next.js · Express · Vue · Angular', detail: 'A starter is chosen and its files are served as a JSON file tree, ready to mount.' },
        ],
      },
      {
        label: 'Workspace',
        nodes: [
          { id: 'explorer', name: 'File explorer', tech: 'Create · rename · delete', detail: 'A VS Code-style tree for managing the project’s files.' },
          { id: 'monaco', name: 'Monaco editor', tech: 'Syntax · inline suggestions', detail: 'The same editor core as VS Code, with AI suggestions rendered inline as ghost text.' },
          { id: 'term', name: 'Terminal', tech: 'xterm.js', detail: 'A real terminal wired to the in-browser runtime, for npm install, dev servers, and scripts.' },
        ],
      },
      {
        label: 'Runtime',
        parallel: true,
        nodes: [
          { id: 'wc', name: 'WebContainer', tech: 'Node.js in WebAssembly', detail: 'Node.js, the package manager, and the dev server run inside the browser tab. WASM isolation means user code never executes on a server.' },
          { id: 'preview', name: 'Live preview', tech: 'Hot reload', detail: 'The dev server running in the WebContainer is shown in a preview pane and reloads as files change.' },
        ],
      },
      {
        label: 'Assist',
        nodes: [
          { id: 'complete', name: 'Code completion', tech: 'Ollama · completion route', detail: 'The editor sends the code around the cursor to a Next.js route that asks an Ollama-served model for a completion.' },
          { id: 'chat', name: 'AI chat', tech: 'Ollama · CodeLlama', detail: 'A chat panel for generating code and debugging errors, answered by a model served through Ollama.' },
        ],
      },
      {
        label: 'Persist',
        nodes: [
          { id: 'db', name: 'Playground storage', tech: 'MongoDB · Prisma', detail: 'Playgrounds, their file trees, starred projects, and chat messages are saved to MongoDB through Prisma.' },
        ],
      },
    ],
    trace: [
      { title: 'Pick a starter', body: 'After sign-in, a template is chosen and its files arrive as a JSON tree.', nodes: ['auth', 'template'] },
      { title: 'The project mounts in the tab', body: 'The file tree is mounted into a WebContainer, which installs dependencies and starts the dev server without leaving the browser.', nodes: ['wc'] },
      { title: 'Edit like a desktop IDE', body: 'Files open from the explorer into Monaco, with the editing model people already know from VS Code.', nodes: ['explorer', 'monaco'] },
      { title: 'Run it', body: 'Commands typed in the terminal execute in the WebContainer, and the preview pane reloads as the code changes.', nodes: ['term', 'wc', 'preview'] },
      { title: 'Ask the model', body: 'Completions appear inline as you type, and the chat panel answers questions about the code.', nodes: ['complete', 'chat', 'monaco'] },
      { title: 'Come back later', body: 'The playground is saved, so the same project opens again in the same state.', nodes: ['db'] },
    ],
    stack: [
      { layer: 'Interface', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'] },
      { layer: 'Editor', items: ['Monaco Editor', 'xterm.js'] },
      { layer: 'Runtime', items: ['WebContainers', 'WebAssembly'] },
      { layer: 'AI', items: ['Ollama', 'CodeLlama'] },
      { layer: 'Data & access', items: ['MongoDB', 'Prisma', 'Auth.js'] },
    ],
  },
};
