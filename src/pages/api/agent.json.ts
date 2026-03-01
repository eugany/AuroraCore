import type { APIRoute } from 'astro';
import { getLocalizedPost } from '../../i18n/devlog';
import { getDevlogEntries } from '../../utils/devlog';

export const GET: APIRoute = async () => {
  const entries = (await getDevlogEntries())
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 10)
    .map((entry) => {
      const english = getLocalizedPost(entry, 'en');
      return {
        day: entry.data.day,
        title: english.title,
        date: entry.data.date.toISOString(),
        tags: entry.data.tags,
        lang: 'en',
        path: `/en/devlog/${entry.slug}/`,
      };
    });

  return new Response(
    JSON.stringify(
      {
        project: 'AuroraCore',
        status: 'R&D ACTIVE',
        subscribe: {
          rss: '/rss.xml',
          site: 'https://auroracore.dev',
        },
        latest_posts: entries,
      },
      null,
      2,
    ),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=300',
      },
    },
  );
};
