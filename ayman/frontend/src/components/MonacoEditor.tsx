import { useState, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { Save, RotateCcw, Play } from 'lucide-react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSave: (value: string) => Promise<boolean>;
  onSaveAndCompile?: (value: string) => Promise<boolean>;
}

export function MonacoEditor({ value, onChange, onSave, onSaveAndCompile }: Props) {
  const [saved, setSaved] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleChange = useCallback(
    (newValue: string | undefined) => {
      if (newValue !== undefined) {
        onChange(newValue);
        setSaved(false);
      }
    },
    [onChange]
  );

  const handleSave = async () => {
    setSaving(true);
    const ok = await onSave(value);
    if (ok) setSaved(true);
    setSaving(false);
  };

  const handleSaveAndCompile = async () => {
    if (!onSaveAndCompile) return;
    setSaving(true);
    const ok = await onSaveAndCompile(value);
    if (ok) setSaved(true);
    setSaving(false);
  };

  const handleDiscard = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-full bg-slate-900">
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-800 border-b border-slate-700 shrink-0">
        <span className="text-xs text-slate-400 font-mono">{saved ? 'Saved' : 'Unsaved changes'}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDiscard}
            className="flex items-center gap-1 px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
          >
            <RotateCcw size={12} />
            Discard
          </button>
          <button
            onClick={handleSave}
            disabled={saving || saved}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-slate-600 text-white hover:bg-slate-500 disabled:opacity-50 rounded transition-colors"
          >
            <Save size={12} />
            {saving ? 'Saving...' : 'Save'}
          </button>
          {onSaveAndCompile && (
            <button
              onClick={handleSaveAndCompile}
              disabled={saving || saved}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-emerald-600 text-white hover:bg-emerald-500 disabled:opacity-50 rounded transition-colors"
            >
              <Play size={12} />
              {saving ? 'Saving...' : 'Save & Compile'}
            </button>
          )}
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <Editor
          value={value}
          language="latex"
          theme="vs-dark"
          onChange={handleChange}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
          }}
          loading={
            <div className="flex items-center justify-center h-full text-slate-400 text-sm">
              Loading editor...
            </div>
          }
        />
      </div>
    </div>
  );
}
