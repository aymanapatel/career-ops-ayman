import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import path from 'path';
import { fileURLToPath } from 'url';

import companiesRouter from './routes/companies.js';
import jdsRouter from './routes/jds.js';
import versionsRouter from './routes/versions.js';
import compileRouter from './routes/compile.js';
import texRouter from './routes/tex.js';
import { setupFileWatcher } from './services/fileWatcher.js';
import { setupWebSocket } from './websocket.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: '/ws' });

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Attach project root for use in routes
app.locals.projectRoot = PROJECT_ROOT;

// API routes
app.use('/api/companies', companiesRouter);
app.use('/api/jds', jdsRouter);
app.use('/api/versions', versionsRouter);
app.use('/api/compile', compileRouter);
app.use('/api/tex', texRouter);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Setup WebSocket and file watcher
setupWebSocket(wss);
setupFileWatcher(PROJECT_ROOT, wss);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Project root: ${PROJECT_ROOT}`);
});
