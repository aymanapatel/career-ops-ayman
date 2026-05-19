import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface Props {
  url: string | null;
}

export function PDFViewer({ url }: Props) {
  const [key, setKey] = useState(0);

  if (!url) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400 text-sm">
        Select a company and version to view the resume PDF
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-100">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-200 shrink-0">
        <span className="text-sm text-slate-500">PDF Viewer</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setKey((k) => k + 1)}
            className="flex items-center gap-1 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100 rounded transition-colors"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>
      </div>

      {/* PDF Embed */}
      <div className="flex-1 overflow-hidden">
        <iframe
          key={key}
          src={url}
          className="w-full h-full border-0"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
