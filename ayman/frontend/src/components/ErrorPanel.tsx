import { AlertTriangle } from 'lucide-react';
import { useState } from 'react';

interface Props {
  message: string;
  log?: string;
}

export function ErrorPanel({ message, log }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-red-50 border-b border-red-200 px-4 py-2 shrink-0">
      <div className="flex items-start gap-2">
        <AlertTriangle size={16} className="text-red-600 mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-red-800 font-medium">{message}</p>
          {log && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs text-red-600 hover:text-red-800 underline mt-1"
            >
              {expanded ? 'Hide log' : 'Show log'}
            </button>
          )}
          {expanded && log && (
            <pre className="mt-2 p-3 bg-red-100 rounded text-xs text-red-900 overflow-auto max-h-40 font-mono">
              {log}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
