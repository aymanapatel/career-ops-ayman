import type { Company } from '../types';

interface Props {
  companies: Company[];
  value: string | null;
  onChange: (slug: string) => void;
}

export function CompanySelector({ companies, value, onChange }: Props) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-slate-600">Company:</label>
      <select
        className="px-3 py-1.5 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary min-w-[180px]"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>Select company...</option>
        {companies.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
