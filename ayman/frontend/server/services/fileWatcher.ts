import chokidar from 'chokidar';
import path from 'path';
import { WebSocketServer } from 'ws';
import { compileTex } from './compiler.js';
import { broadcast } from '../websocket.js';

export function setupFileWatcher(projectRoot: string, wss: WebSocketServer) {
  const outputDir = path.join(projectRoot, 'output');

  const watcher = chokidar.watch(path.join(outputDir, '*.tex'), {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
    ignoreInitial: true,
  });

  let compiling = false;

  watcher.on('change', async (filePath) => {
    if (compiling) return;

    const basename = path.basename(filePath, '.tex');
    // Skip temporary compile files
    if (basename.endsWith('._compile') || basename.endsWith('._tectonic')) return;

    console.log(`File changed: ${filePath}`);
    compiling = true;

    broadcast(wss, {
      type: 'compilation:started',
      file: basename,
      time: new Date().toISOString(),
    });

    const pdfPath = filePath.replace('.tex', '.pdf');
    const result = await compileTex(filePath, pdfPath);

    if (result.success) {
      broadcast(wss, {
        type: 'compilation:done',
        file: basename,
        pdfPath,
        durationMs: result.durationMs,
        time: new Date().toISOString(),
      });
    } else {
      broadcast(wss, {
        type: 'compilation:error',
        file: basename,
        error: result.error,
        log: result.log,
        time: new Date().toISOString(),
      });
    }

    compiling = false;
  });

  console.log(`Watching ${outputDir}/*.tex for changes...`);
}
