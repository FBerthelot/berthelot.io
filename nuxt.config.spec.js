import { articles } from './assets/articles'
import config from './nuxt.config'

describe('nuxt.config', () => {
  const routesToGenerate = config.generate.routes

  articles.forEach((article) => {
    it(`should generate dynamic routes for "${article.name}"`, () => {
      expect(routesToGenerate).toContain(`/articles/${article.slug}`)
    })
  })
})
