import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import { useCompanies, useJD, useVersions, useTexContent, useCompile, useLiveCompile } from '../hooks';
import { CompanySelector } from '../components/CompanySelector';
import { VersionSelector } from '../components/VersionSelector';
import { JDViewer } from '../components/JDViewer';
import { PDFViewer } from '../components/PDFViewer';
import { MonacoEditor } from '../components/MonacoEditor';
import { ErrorPanel } from '../components/ErrorPanel';
import { ModeToggle } from '../components/ModeToggle';
import { CompileButton } from '../components/CompileButton';
import type { CompileStatus } from '../types';

interface Props {
  compileStatus: CompileStatus;
  onCompileStatusChange: (status: CompileStatus) => void;
}

export function ResumeViewer({ compileStatus, onCompileStatusChange }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { companies } = useCompanies();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [pdfKey, setPdfKey] = useState(0);

  const { jd } = useJD(selectedCompany);
  const { versions } = useVersions(selectedCompany);
  const { content, setContent, saveContent } = useTexContent(selectedCompany, selectedDate);
  const { compile } = useCompile();

  // Read URL params on mount
  useEffect(() => {
    const company = searchParams.get('company');
    const date = searchParams.get('date');
    if (company) setSelectedCompany(company);
    if (date) setSelectedDate(date);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLiveUpdate = useCallback(
    (type: 'done' | 'error', data: Record<string, unknown>) => {
      if (type === 'done') {
        onCompileStatusChange({
          type: 'success',
          message: `Auto-compiled in ${data.durationMs}ms`,
          durationMs: data.durationMs as number,
          timestamp: new Date().toISOString(),
        });
        setPdfKey((k) => k + 1);
      } else {
        onCompileStatusChange({
          type: 'error',
          message: (data.error as string) || 'Compilation failed',
          log: data.log as string,
          timestamp: new Date().toISOString(),
        });
      }
    },
    [onCompileStatusChange]
  );

  useLiveCompile(handleLiveUpdate);

  const handleCompile = async () => {
    if (!selectedCompany || !selectedDate) return;
    onCompileStatusChange({ type: 'compiling', message: 'Compiling...' });
    const result = await compile(selectedCompany, selectedDate);
    if (result.success) {
      onCompileStatusChange({
        type: 'success',
        message: `Compiled in ${result.durationMs}ms`,
        durationMs: result.durationMs,
      });
    } else {
      onCompileStatusChange({
        type: 'error',
        message: result.error || 'Compilation failed',
        log: result.log,
      });
    }
    setPdfKey((k) => k + 1);
  };

  const handleSaveAndCompile = async (texContent: string) => {
    if (!selectedCompany || !selectedDate) return false;
    const saved = await saveContent(texContent);
    if (saved) {
      await handleCompile();
    }
    return saved;
  };

  const updateUrl = (company: string | null, date: string | null) => {
    const params = new URLSearchParams();
    if (company) params.set('company', company);
    if (date) params.set('date', date);
    setSearchParams(params, { replace: true });
  };

  const handleCompanyChange = (slug: string) => {
    setSelectedCompany(slug);
    setSelectedDate(null);
    updateUrl(slug, null);
    onCompileStatusChange({ type: 'idle' });
  };

  const handleVersionChange = (date: string) => {
    setSelectedDate(date);
    updateUrl(selectedCompany, date);
    onCompileStatusChange({ type: 'idle' });
  };

  const currentVersion = versions.find((v) => v.date === selectedDate);
  const pdfUrl = currentVersion
    ? `/api/versions/${selectedCompany}/${selectedDate}/pdf?t=${pdfKey}`
    : null;

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-white border-b border-slate-200 shrink-0 flex-wrap">
        <CompanySelector companies={companies} value={selectedCompany} onChange={handleCompanyChange} />
        <VersionSelector versions={versions} value={selectedDate} onChange={handleVersionChange} />
        <div className="flex-1 min-w-[20px]" />
        <ModeToggle editMode={editMode} onToggle={() => setEditMode((v) => !v)} />
        <CompileButton onCompile={handleCompile} isCompiling={compileStatus.type === 'compiling'} />
      </div>

      {/* Error Banner */}
      {compileStatus.type === 'error' && (
        <ErrorPanel message={compileStatus.message || ''} log={compileStatus.log} />
      )}

      {/* Main Content - Responsive */}
      <div className="flex-1 overflow-hidden">
        {editMode ? (
          <PanelGroup className="h-full hidden md:flex">
            <Panel defaultSize={20} minSize={15} className="overflow-auto">
              <JDViewer jd={jd} />
            </Panel>
            <PanelResizeHandle className="w-1 bg-slate-300 hover:bg-primary transition-colors" />
            <Panel defaultSize={35} minSize={25} className="overflow-hidden">
              <MonacoEditor
                value={content}
                onChange={setContent}
                onSave={saveContent}
                onSaveAndCompile={handleSaveAndCompile}
              />
            </Panel>
            <PanelResizeHandle className="w-1 bg-slate-300 hover:bg-primary transition-colors" />
            <Panel defaultSize={45} minSize={30} className="overflow-hidden">
              <PDFViewer url={pdfUrl} />
            </Panel>
          </PanelGroup>
        ) : (
          <PanelGroup className="h-full hidden md:flex">
            <Panel defaultSize={35} minSize={25} className="overflow-auto">
              <JDViewer jd={jd} />
            </Panel>
            <PanelResizeHandle className="w-1 bg-slate-300 hover:bg-primary transition-colors" />
            <Panel defaultSize={65} minSize={40} className="overflow-hidden">
              <PDFViewer url={pdfUrl} />
            </Panel>
          </PanelGroup>
        )}

        {/* Mobile Layout */}
        <div className="md:hidden h-full flex flex-col">
          {editMode ? (
            <>
              <div className="flex-1 overflow-hidden">
                <MonacoEditor
                  value={content}
                  onChange={setContent}
                  onSave={saveContent}
                  onSaveAndCompile={handleSaveAndCompile}
                />
              </div>
              <div className="h-1/2 overflow-auto border-t border-slate-200">
                <JDViewer jd={jd} />
              </div>
            </>
          ) : (
            <>
              <div className="h-1/2 overflow-auto border-b border-slate-200">
                <JDViewer jd={jd} />
              </div>
              <div className="flex-1 overflow-hidden">
                <PDFViewer url={pdfUrl} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
