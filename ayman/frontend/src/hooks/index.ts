import { useState, useEffect, useCallback } from 'react';
import type { Company, JDInfo, ResumeVersion, CompileStatus } from '../types';

const API_BASE = '/api';

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/companies`)
      .then((r) => r.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { companies, loading, error };
}

export function useJD(slug: string | null) {
  const [jd, setJd] = useState<JDInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`${API_BASE}/jds/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setJd(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  return { jd, loading, error };
}

export function useVersions(slug: string | null) {
  const [versions, setVersions] = useState<ResumeVersion[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`${API_BASE}/versions/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setVersions(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  return { versions, loading };
}

export function useTexContent(slug: string | null, date: string | null) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!slug || !date) return;
    setLoading(true);
    fetch(`${API_BASE}/versions/${slug}/${date}/tex`)
      .then((r) => r.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, date]);

  const saveContent = useCallback(
    async (newContent: string) => {
      if (!slug || !date) return false;
      const res = await fetch(`${API_BASE}/tex/${slug}/${date}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newContent }),
      });
      if (res.ok) {
        setContent(newContent);
        return true;
      }
      return false;
    },
    [slug, date]
  );

  return { content, setContent, saveContent, loading };
}

export function useCompile() {
  const [status, setStatus] = useState<CompileStatus>({ type: 'idle' });

  const compile = useCallback(async (slug: string, date: string) => {
    setStatus({ type: 'compiling', message: 'Compiling...' });
    try {
      const res = await fetch(`${API_BASE}/compile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, date }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: `Compiled in ${data.durationMs}ms`, durationMs: data.durationMs });
      } else {
        setStatus({ type: 'error', message: data.error || 'Compilation failed', log: data.log });
      }
      return data;
    } catch (err) {
      setStatus({ type: 'error', message: (err as Error).message });
      return { success: false, error: (err as Error).message };
    }
  }, []);

  return { status, compile, setStatus };
}

export function useLiveCompile(
  onUpdate: (type: 'done' | 'error', data: Record<string, unknown>) => void
) {
  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${protocol}//${window.location.host}/ws`);

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'compilation:done') {
          onUpdate('done', data);
        } else if (data.type === 'compilation:error') {
          onUpdate('error', data);
        }
      } catch {
        // ignore
      }
    };

    return () => {
      ws.close();
    };
  }, [onUpdate]);
}
