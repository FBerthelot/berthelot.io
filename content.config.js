import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        slug: z.string(),
        content: z.string(),
        image: z.string(),
        locale: z.enum(['en', 'fr']),
        createdDate: z.string().date(),
        modifiedDate: z.string().date(),
        draft: z.boolean().default(false),
      }),
    }),
  },
})
