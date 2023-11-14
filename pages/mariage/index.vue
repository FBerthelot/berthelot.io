<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Mariage de Agnès et Florent",
      "description": "Nous nous sommes dit oui, voici une animation qui représente notre mariage."
    }
  },
  "en": {
    "meta": {
      "title": "Agnès and Florent wedding",
      "description": "We said yes, here is an animation that represents our wedding."
    }
  }
}
</i18n>

<template>
  <div id="wedding-page">
    <Mariage00DesignSystemAnimation
      :animate="true"
      :mode="'sunset'"
      :reduce-at-the-end="false"
    />
  </div>
</template>

<script setup lang="js">
definePageMeta({
  layout: 'mariage',
})

const { t } = useI18n({
  useScope: 'locale',
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
  ogUrl: 'https://berthelot.io/mariage/',
})
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}
</style>
