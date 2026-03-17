/* eslint-env node */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '../../');
const componentsRoot = path.join(repoRoot, 'src/components');

let cachedResources = null;

function isWithinComponents(targetPath) {
  const absolute = path.resolve(targetPath);
  return absolute.startsWith(componentsRoot);
}

function detectMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.ts') return 'text/typescript';
  if (ext === '.tsx') return 'text/tsx';
  if (ext === '.js') return 'text/javascript';
  if (ext === '.jsx') return 'text/jsx';
  if (ext === '.scss' || ext === '.css' || ext === '.less') {
    return 'text/css';
  }
  if (ext === '.md' || ext === '.mdx') return 'text/markdown';
  return 'text/plain';
}

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function buildResourceCache() {
  try {
    const files = await walkFiles(componentsRoot);
    return files.map(filePath => {
      const uri = pathToFileURL(filePath).href;
      return {
        uri,
        filePath,
        mimeType: detectMimeType(filePath),
        name: path.relative(repoRoot, filePath)
      };
    });
  } catch (error) {
    throw new Error(
      `Failed to scan components under ${componentsRoot}: ${error}`
    );
  }
}

async function ensureCache() {
  if (!cachedResources) {
    cachedResources = await buildResourceCache();
  }
  return cachedResources;
}

async function readFile(entry) {
  if (!isWithinComponents(entry.filePath)) {
    throw new Error('Resource not allowed');
  }

  const text = await fs.readFile(entry.filePath, 'utf8');
  return {
    contents: [
      { uri: entry.uri, mimeType: entry.mimeType, text }
    ]
  };
}

export async function registerComponentResources(server) {
  const resources = await ensureCache();

  resources.forEach(entry => {
    server.registerResource(
      entry.name,
      entry.uri,
      {
        description: 'src/components resource',
        mimeType: entry.mimeType
      },
      async () => readFile(entry)
    );
  });

  return resources.length;
}
