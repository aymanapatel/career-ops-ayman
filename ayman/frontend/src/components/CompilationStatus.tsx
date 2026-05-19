import type { CompileStatus } from '../types';
import { CheckCircle, XCircle, Loader2, Info } from 'lucide-react';

interface Props {
  status: CompileStatus;
}

export function CompilationStatus({ status }: Props) {
  if (status.type === 'idle') {
    return (
      <div className="flex items-center gap-1.5 text-xs text-slate-400">
        <Info size={14} />
        <span>Ready</span>
      </div>
    );
  }

  if (status.type === 'compiling') {
    return (
      <div className="flex items-center gap-1.5 text-xs text-blue-600">
        <Loader2 size={14} className="animate-spin" />
        <span>{status.message}</span>
      </div>
    );
  }

  if (status.type === 'success') {
    return (
      <div className="flex items-center gap-1.5 text-xs text-green-600">
        <CheckCircle size={14} />
        <span>{status.message}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 text-xs text-red-600">
      <XCircle size={14} />
      <span className="max-w-[200px] truncate" title={status.message}>
        {status.message}
      </span>
    </div>
  );
}
