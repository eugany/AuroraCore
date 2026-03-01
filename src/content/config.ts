import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  day: z.number().int().positive(),
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  lang: z.enum(['en', 'ru', 'cn', 'jp']).default('en'),
});

const devlog = defineCollection({
  schema: baseSchema,
});

const specs = defineCollection({
  schema: baseSchema,
});

const playbook = defineCollection({
  schema: baseSchema,
});

export const collections = {
  devlog,
  specs,
  playbook,
};
