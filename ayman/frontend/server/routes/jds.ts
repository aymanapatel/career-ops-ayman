import { Router } from 'express';
import { getJD } from '../services/mapper.js';

const router = Router();

router.get('/:slug', async (req, res) => {
  const projectRoot = req.app.locals.projectRoot as string;
  const jd = await getJD(projectRoot, req.params.slug);
  if (!jd) {
    res.status(404).json({ error: 'JD not found' });
    return;
  }
  res.json(jd);
});

export default router;
