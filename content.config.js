import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  slug: z.string(),
  content: z.string(),
  image: z.string(),
  createdDate: z.string().date(),
  modifiedDate: z.string().date(),
  draft: z.boolean().default(false),
})

export default defineContentConfig({
  collections: {
    articles_fr: defineCollection({
      type: 'page',
      source: 'articles_fr/*.md',
      schema: blogPostSchema,
    }),
    articles_en: defineCollection({
      type: 'page',
      source: 'articles_en/*.md',
      schema: blogPostSchema,
    }),
  },
})
