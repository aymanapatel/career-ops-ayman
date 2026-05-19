import { Router } from 'express';
import { scanCompanies } from '../services/mapper.js';

const router = Router();

router.get('/', async (req, res) => {
  const projectRoot = req.app.locals.projectRoot as string;
  try {
    const companies = await scanCompanies(projectRoot);
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to scan companies', details: (err as Error).message });
  }
});

export default router;
