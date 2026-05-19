import { RefreshCw } from 'lucide-react';

interface Props {
  onCompile: () => void;
  isCompiling: boolean;
}

export function CompileButton({ onCompile, isCompiling }: Props) {
  return (
    <button
      onClick={onCompile}
      disabled={isCompiling}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <RefreshCw size={14} className={isCompiling ? 'animate-spin' : ''} />
      {isCompiling ? 'Compiling...' : 'Compile'}
    </button>
  );
}
