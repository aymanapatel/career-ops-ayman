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

export interface CompileStatus {
  type: 'idle' | 'compiling' | 'success' | 'error';
  message?: string;
  durationMs?: number;
  log?: string;
  timestamp?: string;
}
