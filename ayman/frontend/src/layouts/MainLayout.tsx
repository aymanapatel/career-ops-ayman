import { Link, useLocation } from 'react-router-dom';
import { useCompanies } from '../hooks';
import { CompilationStatus } from '../components/CompilationStatus';
import type { CompileStatus } from '../types';

interface Props {
  compileStatus: CompileStatus;
  children: React.ReactNode;
}

export function MainLayout({ compileStatus, children }: Props) {
  const { companies } = useCompanies();
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Top Navigation */}
      <header className="flex items-center gap-4 px-4 py-2 bg-white border-b border-slate-200 shadow-sm shrink-0">
        <Link to="/" className="text-lg font-bold text-slate-800 hover:text-primary transition-colors">
          Resume Viewer
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              location.pathname === '/'
                ? 'bg-primary text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Companies
          </Link>
          <Link
            to="/viewer"
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              location.pathname === '/viewer'
                ? 'bg-primary text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Viewer
          </Link>
        </nav>
        <div className="flex-1" />
        <span className="text-xs text-slate-400">{companies.length} companies</span>
        <CompilationStatus status={compileStatus} />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>

      {/* Status Bar */}
      <footer className="flex items-center gap-4 px-4 py-1.5 bg-white border-t border-slate-200 text-xs text-slate-500 shrink-0">
        <span>{companies.length} companies loaded</span>
      </footer>
    </div>
  );
}
