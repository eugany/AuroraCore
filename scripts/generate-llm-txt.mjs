import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = process.cwd();
const CONTENT_ROOT = resolve(ROOT, 'src/content');
const OUT_FILE = resolve(ROOT, 'public/llm.txt');
const WELL_KNOWN_OUT_FILE = resolve(ROOT, 'public/.well-known/llm.txt');

const readTree = (dir) => {
  const files = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      files.push(...readTree(full));
      continue;
    }
    if (name.endsWith('.md') || name.endsWith('.mdx')) {
      files.push(full);
    }
  }
  return files;
};

const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, body: raw.trim() };
  }

  const [, fm, body] = match;
  const data = {};
  const lines = fm.split('\n');
  let currentKey = null;

  for (const line of lines) {
    if (/^\s*-\s+/.test(line) && currentKey) {
      data[currentKey] = data[currentKey] || [];
      data[currentKey].push(line.replace(/^\s*-\s+/, '').trim());
      continue;
    }

    const pair = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!pair) continue;

    const [, key, value] = pair;
    currentKey = key;

    if (value === '') {
      data[key] = [];
      continue;
    }

    if (/^\d+$/.test(value)) {
      data[key] = Number(value);
      continue;
    }

    data[key] = value.trim();
  }

  return { data, body: body.trim() };
};

const normalizePreview = (body) =>
  body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .join(' ')
    .slice(0, 220);

const collect = (collection) => {
  const dir = resolve(CONTENT_ROOT, collection);
  const files = readTree(dir);
  return files
    .map((file) => {
      const raw = readFileSync(file, 'utf8');
      const { data, body } = parseFrontmatter(raw);
      const slug = file
        .replace(dir + '/', '')
        .replace(/\.mdx?$/, '')
        .replace(/\\/g, '/');

      return {
        slug,
        data,
        body,
      };
    })
    .sort((a, b) => new Date(b.data.date || 0).getTime() - new Date(a.data.date || 0).getTime());
};

const devlog = collect('devlog');
const specs = collect('specs');
const playbook = collect('playbook');

const lines = [];
lines.push('# AuroraCore LLM Index');
lines.push('');
lines.push('project: AuroraCore');
lines.push('status: R&D ACTIVE');
lines.push('canonical_site: https://auroracore.dev');
lines.push('rss: https://auroracore.dev/rss.xml');
lines.push('');

lines.push('## Latest Devlog');
if (devlog.length === 0) {
  lines.push('- none');
} else {
  for (const entry of devlog.slice(0, 10)) {
    lines.push(
      `- [DAY ${entry.data.day}] ${entry.data.title} | ${entry.data.date} | /en/devlog/${entry.slug}/ | ${normalizePreview(entry.body)}`,
    );
  }
}
lines.push('');

lines.push('## Specs');
if (specs.length === 0) {
  lines.push('- none');
} else {
  for (const entry of specs) {
    lines.push(`- ${entry.data.title} | ${entry.data.date} | tags: ${(entry.data.tags || []).join(', ')}`);
  }
}
lines.push('');

lines.push('## Playbook');
if (playbook.length === 0) {
  lines.push('- none');
} else {
  for (const entry of playbook) {
    lines.push(`- ${entry.data.title} | ${entry.data.date} | tags: ${(entry.data.tags || []).join(', ')}`);
  }
}
lines.push('');

lines.push('## Core Routes');
lines.push('- /en/ /ru/ /cn/ /jp/');
lines.push('- /en/devlog/ /ru/devlog/ /cn/devlog/ /jp/devlog/');
lines.push('- /kernel/playbook');
lines.push('- /kernel/specs');
lines.push('- /vision/manifesto');
lines.push('- /vision/aurora-for-people');
lines.push('- /landscape/');
lines.push('- /library/');
lines.push('- /about/');

const output = lines.join('\n') + '\n';
mkdirSync(resolve(ROOT, 'public/.well-known'), { recursive: true });
writeFileSync(OUT_FILE, output, 'utf8');
writeFileSync(WELL_KNOWN_OUT_FILE, output, 'utf8');
console.log(`Generated ${OUT_FILE}`);
console.log(`Generated ${WELL_KNOWN_OUT_FILE}`);
