import { readdir, readFile, stat } from 'fs/promises';
import path from 'path';

export interface JDInfo {
  slug: string;
  company: string;
  role: string;
  team?: string;
  location?: string;
  level?: string;
  poc?: string;
  body: string;
}

export interface ResumeVersion {
  slug: string;
  company: string;
  date: string;
  texPath: string;
  pdfPath: string;
}

export interface Company {
  slug: string;
  name: string;
  versions: ResumeVersion[];
}

function parseFrontmatter(content: string): { frontmatter: Record<string, string>; body: string } {
  const match = content.match(/^\s*---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content };

  const frontmatter: Record<string, string> = {};
  match[1].split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length > 0) {
      frontmatter[key.trim()] = rest.join(':').trim();
    }
  });
  return { frontmatter, body: match[2].trim() };
}

export async function scanCompanies(projectRoot: string): Promise<Company[]> {
  const jdsDir = path.join(projectRoot, 'jds');
  const outputDir = path.join(projectRoot, 'output');

  const [jdFiles, outputFiles] = await Promise.all([
    readdir(jdsDir).catch(() => [] as string[]),
    readdir(outputDir).catch(() => [] as string[]),
  ]);

  const markdownFiles = jdFiles.filter((f) => f.endsWith('.md') && f !== 'template.md');
  const texFiles = outputFiles.filter((f) => f.endsWith('.tex'));
  const pdfFiles = outputFiles.filter((f) => f.endsWith('.pdf'));

  const companies: Map<string, Company> = new Map();

  for (const mdFile of markdownFiles) {
    const slug = path.basename(mdFile, '.md').toLowerCase();
    const content = await readFile(path.join(jdsDir, mdFile), 'utf-8');
    const { frontmatter } = parseFrontmatter(content);
    const companyName = frontmatter.company || slug;

    // Find matching resume files: cv-*-<slug>-YYYY-MM-DD.tex
    // Exclude temporary compile files (._compile, ._tectonic)
    const matchingTex = texFiles.filter((f) => {
      const lower = f.toLowerCase();
      return (
        lower.includes(`-${slug}-`) &&
        lower.match(/\d{4}-\d{2}-\d{2}/) &&
        !lower.includes('._compile') &&
        !lower.includes('._tectonic')
      );
    });

    const versions: ResumeVersion[] = matchingTex.map((tex) => {
      const dateMatch = tex.match(/(\d{4}-\d{2}-\d{2})/);
      const date = dateMatch ? dateMatch[1] : 'unknown';
      const pdfName = tex.replace('.tex', '.pdf');
      return {
        slug,
        company: companyName,
        date,
        texPath: path.join(outputDir, tex),
        pdfPath: path.join(outputDir, pdfName),
      };
    });

    // Sort by date descending
    versions.sort((a, b) => b.date.localeCompare(a.date));

    companies.set(slug, {
      slug,
      name: companyName,
      versions,
    });
  }

  return Array.from(companies.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getJD(projectRoot: string, slug: string): Promise<JDInfo | null> {
  const jdsDir = path.join(projectRoot, 'jds');
  const mdPath = path.join(jdsDir, `${slug}.md`);

  try {
    const content = await readFile(mdPath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);
    return {
      slug,
      company: frontmatter.company || slug,
      role: frontmatter.role || 'Unknown Role',
      team: frontmatter.team,
      location: frontmatter.location,
      level: frontmatter.level,
      poc: frontmatter.poc,
      body,
    };
  } catch {
    return null;
  }
}

export async function getVersions(projectRoot: string, slug: string): Promise<ResumeVersion[]> {
  const companies = await scanCompanies(projectRoot);
  const company = companies.find((c) => c.slug === slug);
  return company?.versions || [];
}

export async function getVersion(projectRoot: string, slug: string, date: string): Promise<ResumeVersion | null> {
  const versions = await getVersions(projectRoot, slug);
  return versions.find((v) => v.date === date) || null;
}
