import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface IMarmaidElementProps {
  chart: string;
  className?: string;
}

export default function MermaidElement({ chart, className }: IMarmaidElementProps) {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid.initialize({ startOnLoad: true, darkMode: true, theme: 'dark' });
      mermaid.registerIconPacks([
        {
          name: 'icon',
          loader: () =>
            fetch('https://unpkg.com/@iconify-json/logos/icons.json')
              .then(r => r.json()),
        },
      ]);
      mermaid.run();
    }
  }, []);

  return (
    <div contentEditable={false} className={className}>
      <div ref={mermaidRef}>
        <pre className="mermaid">{chart}</pre>
      </div>
    </div>
  );
}
