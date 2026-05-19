import { compile } from 'node-latex-compiler';
import { readFile, writeFile, copyFile, rm } from 'fs/promises';
import path from 'path';

export interface CompileResult {
  success: boolean;
  pdfPath?: string;
  sizeKB?: number;
  durationMs: number;
  error?: string;
  log?: string;
}

export async function compileTex(texPath: string, pdfPath: string): Promise<CompileResult> {
  const start = Date.now();

  try {
    // For tectonic compatibility, strip pdflatex-only primitives
    const content = await readFile(texPath, 'utf-8');
    const needsPatch = content.includes('\\pdfgentounicode') || content.includes('\\input{glyphtounicode}');
    let compilePath = texPath;

    if (needsPatch) {
      const patched = content
        .replace(/\\pdfgentounicode\s*=\s*\d+[^\n]*\n?/g, '')
        .replace(/\\input\{glyphtounicode\}[^\n]*\n?/g, '');
      compilePath = texPath.replace('.tex', '._compile.tex');
      await writeFile(compilePath, patched, 'utf-8');
    }

    const result = await compile({
      texFile: compilePath,
      outputDir: path.dirname(pdfPath),
      onStdout: (data) => console.log('[tectonic]', data.trim()),
      onStderr: (data) => console.warn('[tectonic]', data.trim()),
    });

    const duration = Date.now() - start;

    if (result.status === 'success') {
      // If we used a patched compile path, the PDF is named ._.pdf - copy it to target
      if (compilePath !== texPath) {
        const compiledBase = path.basename(compilePath, '.tex');
        const compiledPdf = path.join(path.dirname(pdfPath), `${compiledBase}.pdf`);
        try {
          await copyFile(compiledPdf, pdfPath);
          await rm(compiledPdf).catch(() => {});
          await rm(compilePath).catch(() => {});
          // Clean up aux files
          const auxExts = ['.aux', '.log', '.out', '.fls', '.fdb_latexmk', '.synctex.gz'];
          for (const ext of auxExts) {
            await rm(path.join(path.dirname(pdfPath), `${compiledBase}${ext}`)).catch(() => {});
          }
        } catch (err) {
          console.warn('Failed to copy compiled PDF:', (err as Error).message);
        }
      }
      return {
        success: true,
        pdfPath,
        durationMs: duration,
        log: 'Compilation successful',
      };
    } else {
      return {
        success: false,
        durationMs: duration,
        error: result.error || 'Compilation failed',
        log: result.log || '',
      };
    }
  } catch (err) {
    return {
      success: false,
      durationMs: Date.now() - start,
      error: (err as Error).message,
      log: (err as Error).stack || '',
    };
  }
}
