const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT_DIR = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.cjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  // 1. Restriction des méthodes HTTP autorisées (Lecture seule)
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    });
    return res.end('405 Méthode Non Autorisée');
  }

  // 2. Normalisation et assainissement de l'URL pour prévenir la traversée de répertoire (Path Traversal CWE-22)
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/preview.html';
  }

  // Construction sécurisée du chemin absolu
  const sanitizedRelPath = path.normalize(cleanUrl).replace(/^([/\\]\.\.)+/, '');
  const filePath = path.resolve(ROOT_DIR, '.' + sanitizedRelPath);

  // 3. Vérification stricte du confinement dans le répertoire racine
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    });
    return res.end('403 Accès Interdit');
  }

  // 4. Lecture et distribution du fichier avec en-têtes de sécurité
  fs.stat(filePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff'
      });
      return res.end('404 Fichier Non Trouvé');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    res.writeHead(200, headers);

    if (req.method === 'HEAD') {
      return res.end();
    }

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, {
          'Content-Type': 'text/plain; charset=utf-8',
          'X-Content-Type-Options': 'nosniff'
        });
      }
      res.end('500 Erreur interne du serveur');
    });
    stream.pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Serveur local sécurisé actif sur : http://127.0.0.1:${PORT}`);
  console.log(`Page principale disponible sur : http://127.0.0.1:${PORT}/preview.html`);
});
