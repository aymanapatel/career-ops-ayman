import type { ResumeVersion } from '../types';

interface Props {
  versions: ResumeVersion[];
  value: string | null;
  onChange: (date: string) => void;
}

export function VersionSelector({ versions, value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-slate-600">Version:</label>
      <select
        className="px-3 py-1.5 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary min-w-[140px]"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        disabled={versions.length === 0}
      >
        <option value="" disabled>Select version...</option>
        {versions.map((v, i) => (
          <option key={`${v.slug}-${v.date}-${i}`} value={v.date}>
            {v.date}
          </option>
        ))}
      </select>
    </div>
  );
}
