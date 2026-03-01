import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

const DEVLOG_DIR = resolve(process.cwd(), 'src/content/devlog');

async function hasMarkdownEntries(dir: string): Promise<boolean> {
  let nodes: Awaited<ReturnType<typeof readdir>>;
  try {
    nodes = await readdir(dir, { withFileTypes: true });
  } catch {
    return false;
  }

  for (const node of nodes) {
    if (node.name.startsWith('.')) {
      continue;
    }

    const fullPath = resolve(dir, node.name);

    if (node.isDirectory() && (await hasMarkdownEntries(fullPath))) {
      return true;
    }

    if (node.isFile() && /\.(md|mdx)$/i.test(node.name)) {
      return true;
    }
  }

  return false;
}

export async function getDevlogEntries(): Promise<CollectionEntry<'devlog'>[]> {
  if (!(await hasMarkdownEntries(DEVLOG_DIR))) {
    return [];
  }

  return getCollection('devlog');
}
