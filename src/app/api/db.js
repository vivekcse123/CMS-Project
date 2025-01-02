import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve('db.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'Failed to load db.json' });
  }
}
