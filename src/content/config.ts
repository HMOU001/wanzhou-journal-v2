import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    excerpt: z.string(),
    minutes: z.number().default(6)
  })
});

export const collections = { posts };
