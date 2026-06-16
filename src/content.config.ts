import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string().optional(),
    authors: z.string().optional(),
    paperurl: z.string().url().optional(),
    slidesurl: z.string().url().optional(),
    bibtexurl: z.string().url().optional(),
    citation: z.string().optional(),
    excerpt: z.string().optional(),
    permalink: z.string().optional(),
    collection: z.string().optional(),
    header: z.object({
      teaser: z.string().optional(),
    }).optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    permalink: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { publications, posts };
