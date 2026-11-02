import './ArchDiagram.css';

// Left-to-right pipeline built from plain lists, so it stays themeable and readable by screen readers.
export function ArchDiagram({ architecture }) {
  return (
    <figure className="arch">
      <ol className="arch-flow">
        {architecture.stages.map(stage => (
          <li className={`arch-stage ${stage.parallel ? 'is-parallel' : ''}`} key={stage.label}>
            <span className="arch-label">{stage.label}</span>
            <ul>{stage.nodes.map(node => <li key={node}>{node}</li>)}</ul>
          </li>
        ))}
      </ol>
      {architecture.note && <figcaption>{architecture.note}</figcaption>}
    </figure>
  );
}
