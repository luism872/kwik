const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// Cache em memória RAM para entrega instantânea (< 1ms) sem overhead de disco
const memoryCache = new Map();

function getCachedFile(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const cached = memoryCache.get(filePath);

    if (cached && cached.mtime >= stats.mtimeMs) {
      return cached;
    }

    const rawBuffer = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const isCompressible = ['.html', '.css', '.js', '.json', '.svg'].includes(ext);

    let gzipBuffer = null;
    let brBuffer = null;
    if (isCompressible && rawBuffer.length > 512) {
      gzipBuffer = zlib.gzipSync(rawBuffer, { level: 9 });
      if (typeof zlib.brotliCompressSync === 'function') {
        try {
          brBuffer = zlib.brotliCompressSync(rawBuffer, {
            params: {
              [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            }
          });
        } catch (e) {}
      }
    }

    const entry = {
      raw: rawBuffer,
      gzip: gzipBuffer,
      br: brBuffer,
      mtime: stats.mtimeMs,
      etag: `W/"${stats.size}-${stats.mtimeMs}"`
    };

    memoryCache.set(filePath, entry);
    return entry;
  } catch (err) {
    return null;
  }
}

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, cleanUrl);
  if (cleanUrl === '/' || filePath.endsWith(path.sep)) {
    filePath = path.join(__dirname, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const cached = getCachedFile(filePath);
  if (!cached) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Não Encontrado');
    return;
  }

  // Suporte a ETag / 304 Not Modified
  if (req.headers['if-none-match'] === cached.etag) {
    res.writeHead(304);
    res.end();
    return;
  }

  // Cabeçalhos de cache agressivos para imagens e assets estáticos
  const headers = {
    'Content-Type': contentType,
    'ETag': cached.etag
  };

  const isImage = ['.jpeg', '.jpg', '.png', '.svg', '.webp', '.ico'].includes(ext);
  if (isImage) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  } else {
    headers['Cache-Control'] = 'public, max-age=86400';
  }

  const acceptEncoding = req.headers['accept-encoding'] || '';
  if (cached.br && acceptEncoding.includes('br')) {
    headers['Content-Encoding'] = 'br';
    headers['Vary'] = 'Accept-Encoding';
    res.writeHead(200, headers);
    res.end(cached.br);
  } else if (cached.gzip && acceptEncoding.includes('gzip')) {
    headers['Content-Encoding'] = 'gzip';
    headers['Vary'] = 'Accept-Encoding';
    res.writeHead(200, headers);
    res.end(cached.gzip);
  } else {
    res.writeHead(200, headers);
    res.end(cached.raw);
  }
});

server.listen(PORT, () => {
  console.log(`Servidor local KWIK de alta velocidade ativo em http://localhost:${PORT}/`);
});
