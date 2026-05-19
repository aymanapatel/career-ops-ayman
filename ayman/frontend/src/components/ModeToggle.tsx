import { Eye, PenLine } from 'lucide-react';

interface Props {
  editMode: boolean;
  onToggle: () => void;
}

export function ModeToggle({ editMode, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
        editMode
          ? 'bg-primary text-white hover:bg-primary-dark'
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
      }`}
    >
      {editMode ? <PenLine size={14} /> : <Eye size={14} />}
      {editMode ? 'Edit Mode' : 'View Mode'}
    </button>
  );
}
