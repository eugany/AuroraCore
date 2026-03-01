import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const devlog = await getCollection('devlog');
  
  return rss({
    title: 'AuroraCore Devlog',
    description: 'R&D diary of building an intent-first OS for AI agents',
    site: context.site ?? 'https://auroracore.vercel.app',
    items: devlog
      .sort((a, b) => b.data.day - a.data.day)
      .map((post) => ({
        title: `[DAY ${post.data.day}] ${post.data.title}`,
        pubDate: new Date(post.data.date),
        link: `/devlog/${post.slug}/`,
      })),
  });
}
