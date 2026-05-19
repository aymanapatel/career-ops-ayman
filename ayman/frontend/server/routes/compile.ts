import { Router } from 'express';
import { compileTex } from '../services/compiler.js';
import { getVersion } from '../services/mapper.js';

const router = Router();

router.post('/', async (req, res) => {
  const { slug, date } = req.body;
  if (!slug || !date) {
    res.status(400).json({ error: 'Missing slug or date' });
    return;
  }

  const projectRoot = req.app.locals.projectRoot as string;
  const version = await getVersion(projectRoot, slug, date);
  if (!version) {
    res.status(404).json({ error: 'Version not found' });
    return;
  }

  try {
    const result = await compileTex(version.texPath, version.pdfPath);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Compilation failed', details: (err as Error).message });
  }
});

export default router;
