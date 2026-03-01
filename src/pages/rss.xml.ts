import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getLocalizedPost } from '../i18n/devlog';
import { getDevlogEntries } from '../utils/devlog';

export async function GET(context: APIContext) {
  const devlogEntries = (await getDevlogEntries()).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const toSummary = (body: string) =>
    body
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#'))
      .join(' ')
      .slice(0, 220);

  return rss({
    title: 'AuroraCore Devlog',
    description: 'R&D progress log for AuroraCore',
    site: context.site ?? 'https://auroracore.dev',
    items: devlogEntries.map((entry) => ({
      title: `[DAY ${entry.data.day}] :: ${getLocalizedPost(entry, 'en').title}`,
      pubDate: entry.data.date,
      description: toSummary(getLocalizedPost(entry, 'en').paragraphs.join('\n')),
      link: `/en/devlog/${entry.slug}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
