import Markdown from 'react-markdown';
import remarkFrontmatter from 'remark-frontmatter';
import type { JDInfo } from '../types';

interface Props {
  jd: JDInfo | null;
}

export function JDViewer({ jd }: Props) {
  if (!jd) {
    return (
      <div className="flex items-center justify-center h-full text-slate-400 text-sm">
        Select a company to view the job description
      </div>
    );
  }

  return (
    <div className="p-6 h-full overflow-auto">
      {/* Metadata Card */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-1">{jd.company}</h2>
        <p className="text-slate-600 font-medium mb-3">{jd.role}</p>
        <div className="flex flex-wrap gap-2">
          {jd.level && (
            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
              {jd.level}
            </span>
          )}
          {jd.location && (
            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
              {jd.location}
            </span>
          )}
          {jd.team && (
            <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
              {jd.team}
            </span>
          )}
          {jd.poc && (
            <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
              POC: {jd.poc}
            </span>
          )}
        </div>
      </div>

      {/* JD Body */}
      <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg">
        <Markdown remarkPlugins={[remarkFrontmatter]}>{jd.body}</Markdown>
      </div>
    </div>
  );
}
