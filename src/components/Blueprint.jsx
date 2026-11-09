import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './Blueprint.css';

const STEP_MS = 4600;
const pad = number => String(number).padStart(2, '0');

// Interactive system diagram: a request is traced through the stages step by step,
// and any component can be opened to read what it does. Built from lists and buttons
// so it stays themeable, keyboard-operable, and readable by screen readers.
export function Blueprint({ blueprint }) {
  const { stages, trace } = blueprint;
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [auto, setAuto] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef(null);
  const detailRef = useRef(null);
  const playing = auto && visible && !selected;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 });
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => setStep(current => (current + 1) % trace.length), STEP_MS);
    return () => clearTimeout(timer);
  }, [playing, step, trace.length]);

  const nodes = stages.flatMap(stage => stage.nodes);
  const selectedNode = nodes.find(node => node.id === selected);
  const active = selectedNode ? [selectedNode.id] : trace[step].nodes;
  const stageIsLive = stage => stage.nodes.some(node => active.includes(node.id));
  const reached = stages.reduce((last, stage, index) => (stageIsLive(stage) ? index : last), -1);

  const showStep = index => { setAuto(false); setSelected(null); setStep(index); };
  const showNode = id => {
    setAuto(false);
    setSelected(current => (current === id ? null : id));
    // On a phone the detail panel sits below a tall diagram, so bring it into view.
    if (id !== selected) requestAnimationFrame(() => detailRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }));
  };

  return (
    <figure className="bp" ref={rootRef}>
      <div className="bp-head">
        <h3>{blueprint.question}</h3>
        <button type="button" className="bp-toggle" onClick={() => { setSelected(null); setAuto(!playing); }} aria-pressed={playing}>
          {playing ? <Pause size={13} /> : <Play size={13} />}{playing ? 'Pause trace' : 'Play trace'}
        </button>
      </div>

      <div className="bp-board">
        <ol className="bp-flow">
          {stages.map((stage, index) => (
            <li className={`bp-stage ${stage.parallel ? 'is-parallel' : ''} ${stageIsLive(stage) ? 'is-live' : ''} ${index < reached ? 'is-passed' : ''}`} key={stage.label}>
              <span className="bp-label"><b>{pad(index + 1)}</b>{stage.label}</span>
              <ul>
                {stage.nodes.map(node => (
                  <li key={node.id}>
                    <button type="button" className={`bp-node ${active.includes(node.id) ? 'is-active' : ''} ${selected === node.id ? 'is-selected' : ''}`} onClick={() => showNode(node.id)} aria-pressed={selected === node.id}>
                      <strong>{node.name}</strong><span>{node.tech}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="bp-panel">
        <ol className="bp-steps" aria-label="Request trace">
          {trace.map((item, index) => (
            <li key={item.title}>
              <button type="button" className={`bp-step ${!selectedNode && index === step ? 'is-current' : ''}`} onClick={() => showStep(index)} aria-current={!selectedNode && index === step ? 'step' : undefined}>
                <span>{pad(index + 1)}</span>{item.title}
              </button>
            </li>
          ))}
        </ol>
        <div className="bp-detail" ref={detailRef} aria-live={playing ? 'off' : 'polite'}>
          {selectedNode ? (
            <>
              <span className="eyebrow">Component</span>
              <h4>{selectedNode.name}</h4>
              <span className="bp-tech">{selectedNode.tech}</span>
              <p>{selectedNode.detail}</p>
              <button type="button" className="bp-back" onClick={() => setSelected(null)}>Back to the trace</button>
            </>
          ) : (
            <>
              <span className="eyebrow">Step {pad(step + 1)} / {pad(trace.length)}</span>
              <h4>{trace[step].title}</h4>
              <p>{trace[step].body}</p>
              <span className="bp-hint">Select any component above to see what it does.</span>
            </>
          )}
          {playing && <span className="bp-timer" key={step} style={{ animationDuration: `${STEP_MS}ms` }} aria-hidden="true" />}
        </div>
      </div>
      {blueprint.caption && <figcaption>{blueprint.caption}</figcaption>}
    </figure>
  );
}
