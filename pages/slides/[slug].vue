<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Slide { slug } - Florent Berthelot",
      "description": "Slides { slug }, généralement présentés par Florent Berthelot"
    }
  },
  "en": {
    "meta": {
      "title": "{ slug } Slide- Florent Berthelot",
      "description": "{ slug } slides usually presented by Florent Berthelot"
    }
  }
}
</i18n>

<template>
  <div class="reveal">
    <div class="slides">
      <section
        :data-markdown="`/slides_content/${slug}.md`"
        data-separator="^\n\n\n"
        data-separator-vertical="^\n\n"
        data-separator-notes="^Note:"
        data-charset="utf-8"
      ></section>
    </div>
  </div>
</template>

<script setup lang="js">
import { onMounted } from 'vue'

const route = useRoute()
const slug = route.params.slug ?? ''

if (slug.endsWith('.html')) {
  await navigateTo(`/slides/${slug.replace('.html', '')}`)
}

const { t } = useI18n({
  useScope: 'local',
})
useSeoMeta({
  ogType: 'article',
  title: t('meta.title', { slug }),
  ogTitle: t('meta.title', { slug }),
  twitterTitle: t('meta.title', { slug }),
  description: t('meta.description', { slug }),
  ogDescription: t('meta.description', { slug }),
  twitterDescription: t('meta.description', { slug }),
  twitterCard: 'summary',
  ogUrl: `https://berthelot.io/${slug}`,
})

onMounted(async () => {
  const Reveal = (await import('reveal.js')).default
  const Markdown = (await import('reveal.js/plugin/markdown/markdown.esm.js'))
    .default
  const Highlight = (
    await import('reveal.js/plugin/highlight/highlight.esm.js')
  ).default

  const deck = new Reveal({
    plugins: [Markdown, Highlight],

    slideNumber: true,
    hash: true,
    autoAnimate: false,
  })

  deck.initialize()
})
</script>

<style>
@import url('../../node_modules/reveal.js/dist/reveal.css');
@import url('../../node_modules/reveal.js/dist/theme/black.css');
@import url('../../node_modules/reveal.js/plugin/highlight/monokai.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
