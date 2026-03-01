export type LlmIndexItem = {
  title: string;
  path: string;
  date?: string;
  summary?: string;
};

export type LlmIndex = {
  project: string;
  status: string;
  devlog: LlmIndexItem[];
  specs: LlmIndexItem[];
  playbook: LlmIndexItem[];
};

export function toLlmTxt(index: LlmIndex): string {
  const lines: string[] = [];
  lines.push('# AuroraCore LLM Index');
  lines.push('');
  lines.push(`project: ${index.project}`);
  lines.push(`status: ${index.status}`);
  lines.push('');

  lines.push('## Devlog');
  for (const item of index.devlog) {
    lines.push(`- ${item.title} | ${item.date ?? 'n/a'} | ${item.path}`);
  }

  lines.push('');
  lines.push('## Specs');
  for (const item of index.specs) {
    lines.push(`- ${item.title} | ${item.date ?? 'n/a'} | ${item.path}`);
  }

  lines.push('');
  lines.push('## Playbook');
  for (const item of index.playbook) {
    lines.push(`- ${item.title} | ${item.date ?? 'n/a'} | ${item.path}`);
  }

  return lines.join('\n') + '\n';
}
