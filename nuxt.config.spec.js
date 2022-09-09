import { articles } from './assets/articles'
import config from './nuxt.config'

describe('nuxt.config', () => {
  const routesToGenerate = config.generate.routes

  articles.forEach((article) => {
    it(`should generate dynamic routes for "${article.name}"`, async () => {
      expect(await routesToGenerate()).toContain(`/articles/${article.slug}`)
    })
  })
})
