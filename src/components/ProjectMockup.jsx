import './ProjectMockup.css';

// Illustrative interface mockups, drawn from each project's feature list. All figures are sample data.

const SIGNALS = [
  { label: 'Complexity', value: 78 },
  { label: 'Vulnerabilities', value: 91 },
  { label: 'Dead code', value: 64 },
  { label: 'Coverage', value: 82 },
  { label: 'Arch. drift', value: 70 },
];

function Frame({ title, children, label }) {
  return (
    <figure className="mock">
      <div className="mock-window" role="img" aria-label={label}>
        <div className="mock-bar"><span /><span /><span /><b>{title}</b></div>
        <div className="mock-body" aria-hidden="true">{children}</div>
      </div>
      <figcaption>Illustrative interface mockup · sample data</figcaption>
    </figure>
  );
}

function CodePulseMock() {
  const score = 76;
  const circumference = 2 * Math.PI * 52;
  return (
    <Frame title="Repository health" label="Mockup of the CodePulse dashboard: an overall 0 to 100 health score, five signal bars, and an AI chat answer.">
      <div className="mock-pulse">
        <div className="mock-score">
          <svg viewBox="0 0 120 120" width="150" height="150">
            <circle cx="60" cy="60" r="52" className="mock-ring-track" />
            <circle cx="60" cy="60" r="52" className="mock-ring" strokeDasharray={`${(score / 100) * circumference} ${circumference}`} transform="rotate(-90 60 60)" />
          </svg>
          <div><strong>{score}</strong><span>/ 100</span></div>
        </div>
        <div className="mock-signals">
          {SIGNALS.map(signal => (
            <div className="mock-signal" key={signal.label}>
              <span>{signal.label}</span>
              <i><b style={{ width: `${signal.value}%` }} /></i>
              <em>{signal.value}</em>
            </div>
          ))}
        </div>
        <div className="mock-chat">
          <p className="mock-msg mock-msg-user">Why did the score change on this push?</p>
          <p className="mock-msg">Coverage held steady, but two new modules raised complexity and pulled the architecture further from the existing layers.</p>
        </div>
      </div>
    </Frame>
  );
}

function CareConnectMock() {
  return (
    <Frame title="Care group" label="Mockup of the CareConnect dashboard: shared tasks, medication log, and group chat with an emergency alert button.">
      <div className="mock-care">
        <section>
          <h4>Tasks</h4>
          <ul>
            <li className="is-done"><i /><span>Pick up prescription</span></li>
            <li><i /><span>Physio appointment</span></li>
            <li><i /><span>Weekly grocery run</span></li>
          </ul>
        </section>
        <section>
          <h4>Medications</h4>
          <ul>
            <li className="is-done"><i /><span>Morning dose</span><small>Logged</small></li>
            <li><i /><span>Evening dose</span><small>Due</small></li>
          </ul>
          <div className="mock-vitals"><span>Vitals</span><b>Blood pressure · Heart rate</b></div>
        </section>
        <section>
          <h4>Group chat</h4>
          <p className="mock-msg">Evening dose is on the counter.</p>
          <p className="mock-msg mock-msg-user">Thanks, logging it now.<small>Read</small></p>
          <button type="button" tabIndex={-1} className="mock-alert">Emergency alert</button>
        </section>
      </div>
    </Frame>
  );
}

function LedgerMock() {
  return (
    <Frame title="Attribution report" label="Mockup of CoMP Ledger: claims from an AI answer, each with an exclusivity score and verdict, and a signed export.">
      <div className="mock-ledger">
        <p className="mock-answer">An AI answer is split into factual claims. Each one is checked against independent sources.</p>
        <ul>
          <li><span>Claim 1</span><i><b style={{ width: '88%' }} /></i><em className="is-original">Original reporting</em></li>
          <li><span>Claim 2</span><i><b style={{ width: '24%' }} /></i><em>Common knowledge</em></li>
          <li><span>Claim 3</span><i><b style={{ width: '67%' }} /></i><em className="is-original">Original reporting</em></li>
        </ul>
        <div className="mock-sources">
          {['Wikipedia', 'Google Search', 'OpenAlex', 'GDELT', 'Wayback Machine'].map(source => <span key={source}>{source}</span>)}
        </div>
        <div className="mock-export"><span>Signed evidence export</span><code>SHA-256</code></div>
      </div>
    </Frame>
  );
}

function PromptStudioMock() {
  return (
    <Frame title="New project" label="Mockup of PromptStudio: a prompt, the agent's build steps, and a live preview with version history.">
      <div className="mock-studio">
        <div className="mock-studio-chat">
          <p className="mock-msg mock-msg-user">Build a habit tracker with streaks and a weekly chart.</p>
          <ul className="mock-steps">
            <li className="is-done">Planning files</li>
            <li className="is-done">Writing components</li>
            <li className="is-done">Running in sandbox</li>
            <li className="is-active">Deploying preview</li>
          </ul>
        </div>
        <div className="mock-studio-preview">
          <div className="mock-preview-app">
            <span className="mock-skel mock-skel-title" />
            <div className="mock-chart">{[40, 65, 50, 80, 72, 90, 60].map((h, i) => <b key={i} style={{ height: `${h}%` }} />)}</div>
            <span className="mock-skel" /><span className="mock-skel mock-skel-short" />
          </div>
          <div className="mock-versions"><span>v1</span><span>v2</span><span className="is-current">v3</span></div>
        </div>
      </div>
    </Frame>
  );
}

function VibeMock() {
  return (
    <Frame title="page.tsx" label="Mockup of Vibe Code Editor: a file explorer, a code editor with an AI suggestion, and a terminal.">
      <div className="mock-ide">
        <ul className="mock-tree">
          <li className="is-folder">app</li>
          <li className="is-open">page.tsx</li>
          <li>layout.tsx</li>
          <li className="is-folder">components</li>
          <li>package.json</li>
        </ul>
        <div className="mock-editor">
          <pre><code>
            <span className="tok-k">export default function</span> <span className="tok-f">Page</span>() {'{\n'}
            {'  '}<span className="tok-k">return</span> {'<'}<span className="tok-f">main</span>{'>'}Hello{'</'}<span className="tok-f">main</span>{'>'}{'\n'}
            <span className="tok-ghost">{'  // AI suggestion: add a header'}</span>{'\n'}
            {'}'}
          </code></pre>
          <div className="mock-terminal"><span>$ npm run dev</span><span className="tok-ok">ready · running in WebContainer</span></div>
        </div>
      </div>
    </Frame>
  );
}

const MOCKS = {
  codepulse: CodePulseMock,
  careconnect: CareConnectMock,
  'comp-ledger': LedgerMock,
  promptstudio: PromptStudioMock,
  'vibe-code-editor': VibeMock,
};

export function ProjectMockup({ slug }) {
  const Mock = MOCKS[slug];
  return Mock ? <Mock /> : null;
}
