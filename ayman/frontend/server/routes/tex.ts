import { Router } from 'express';
import { writeFile, copyFile, rm, readdir } from 'fs/promises';
import path from 'path';
import { getVersion } from '../services/mapper.js';

const router = Router();

router.post('/:slug/:date', async (req, res) => {
  const { slug, date } = req.params;
  const { content, keepBackup } = req.body;

  if (!content) {
    res.status(400).json({ error: 'Missing content' });
    return;
  }

  const projectRoot = req.app.locals.projectRoot as string;
  const version = await getVersion(projectRoot, slug, date);
  if (!version) {
    res.status(404).json({ error: 'Version not found' });
    return;
  }

  try {
    // Create backup before writing
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = `${version.texPath}.bak.${timestamp}`;
    try {
      await copyFile(version.texPath, backupPath);
    } catch {
      // If copy fails (file doesn't exist), continue without backup
    }

    await writeFile(version.texPath, content, 'utf-8');

    // Delete old backups (keep only the latest one unless keepBackup is true)
    if (!keepBackup) {
      const dir = path.dirname(version.texPath);
      const base = path.basename(version.texPath);
      const files = await readdir(dir);
      const backups = files
        .filter(f => f.startsWith(base + '.bak.'))
        .sort()
        .reverse();
      // Keep the most recent backup, delete the rest
      for (let i = 1; i < backups.length; i++) {
        await rm(path.join(dir, backups[i])).catch(() => {});
      }
    }

    res.json({ success: true, message: 'File saved', backupPath });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save file', details: (err as Error).message });
  }
});

export default router;
