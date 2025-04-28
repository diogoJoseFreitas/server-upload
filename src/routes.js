import { Router } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { view } from './paths.js';

import { upload } from './storage.js';

const router = Router();


router.get('/', (req, res) => {
  res.sendFile(view('index.html'));
  });

router.post('/upload', upload.single('arquivo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }
  res.sendFile(view('upload.html'));
});

export {router};


