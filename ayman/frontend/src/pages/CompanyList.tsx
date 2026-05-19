import { Link } from 'react-router-dom';
import { useCompanies } from '../hooks';
import { Building2, Calendar, FileText, ExternalLink } from 'lucide-react';
import { useState, useMemo } from 'react';

export function CompanyList() {
  const { companies, loading } = useCompanies();
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return companies.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.slug.toLowerCase().includes(q) ||
        c.versions.some((v) => v.date.includes(q))
    );
  }, [companies, search]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400">
        Loading companies...
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">All Companies</h1>
          <p className="text-slate-500">
            {companies.length} companies with {companies.reduce((acc, c) => acc + c.versions.length, 0)} resume versions
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search companies, slugs, or dates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((company) => (
            <div
              key={company.slug}
              className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Building2 size={18} className="text-primary" />
                  <h2 className="text-lg font-semibold text-slate-800">{company.name}</h2>
                </div>
                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  {company.versions.length} version{company.versions.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {company.versions.map((v) => (
                  <div
                    key={`${v.slug}-${v.date}`}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar size={14} />
                      <span>{v.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={14} className="text-slate-400" />
                      <span className="text-xs text-slate-400">
                        {v.texPath.split('/').pop()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to={`/viewer?company=${company.slug}&date=${company.versions[0]?.date || ''}`}
                className="flex items-center justify-center gap-1.5 w-full px-3 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                <ExternalLink size={14} />
                Open Viewer
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No companies match your search.
          </div>
        )}
      </div>
    </div>
  );
}
