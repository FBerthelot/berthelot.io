<i18n lang="json">
{
  "fr": {
    "title": "Berthelot Design System",
    "meta": {
      "title": "Design System Personnel- Florent Berthelot",
      "description": "Un embryon de Design System que j'utilise sur mon site."
    }
  },
  "en": {
    "title": "Berthelot Design System",
    "meta": {
      "title": "Personnal Design System - Florent Berthelot",
      "description": "A tiny Design System I use on my website."
    }
  }
}
</i18n>

<template>
  <div>
    <header class="header">
      <h1 class="typo_title">{{ t('title') }}</h1>
    </header>

    <main>
      <BerthelotSystemColorsDoc class="section" />
      <BerthelotSystemTypographyDoc class="section" />
      <BerthelotSystemButtonDoc class="section" />
      <BerthelotSystemAvatarDoc class="section" />
      <BerthelotSystemCardDoc class="section" />
      <BerthelotSystemTabsDoc class="section" />
    </main>
  </div>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'local',
})

useSeoMeta({
  ogType: 'website',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
  ogUrl: 'https://berthelot.io/design',
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.section {
  padding: 1rem;
}
</style>
