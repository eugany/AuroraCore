import { defineCollection, z } from 'astro:content';

const devlog = defineCollection({
  type: 'content',
  schema: z.object({
    day: z.number(),
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    lang: z.enum(['en', 'ru', 'cn', 'jp']).default('en'),
  }),
});

const specs = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(['draft', 'active', 'archived']).default('draft'),
  }),
});

const playbook = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { devlog, specs, playbook };
