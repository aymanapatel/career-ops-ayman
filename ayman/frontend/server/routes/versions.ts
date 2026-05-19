import { Router } from 'express';
import { getVersions, getVersion } from '../services/mapper.js';
import { readFile } from 'fs/promises';

const router = Router();

router.get('/:slug', async (req, res) => {
  const projectRoot = req.app.locals.projectRoot as string;
  const versions = await getVersions(projectRoot, req.params.slug);
  res.json(versions);
});

router.get('/:slug/:date/pdf', async (req, res) => {
  const projectRoot = req.app.locals.projectRoot as string;
  const version = await getVersion(projectRoot, req.params.slug, req.params.date);
  if (!version) {
    res.status(404).json({ error: 'Version not found' });
    return;
  }
  try {
    const pdf = await readFile(version.pdfPath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(pdf);
  } catch {
    res.status(404).json({ error: 'PDF not found' });
  }
});

router.get('/:slug/:date/tex', async (req, res) => {
  const projectRoot = req.app.locals.projectRoot as string;
  const version = await getVersion(projectRoot, req.params.slug, req.params.date);
  if (!version) {
    res.status(404).json({ error: 'Version not found' });
    return;
  }
  try {
    const tex = await readFile(version.texPath, 'utf-8');
    res.setHeader('Content-Type', 'text/plain');
    res.send(tex);
  } catch {
    res.status(404).json({ error: 'TEX not found' });
  }
});

export default router;
