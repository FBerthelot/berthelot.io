<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Afterworks - Florent Berthelot",
      "description": "Formulaire d'inscription aux meilleurs afterworks !"
    }
  },
  "en": {
    "meta": {
      "title": "Afterworks",
      "description": "Subscription form to the best afterworks!"
    }
  }
}
</i18n>

<template>
  <iframe
    data-w-type="embedded"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://xpxm0.mjt.lu/wgt/xpxm0/342/form?c=bfa86365"
    width="100%"
  />
</template>

<script setup lang="js">
import { onMounted } from 'vue'

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
  ogUrl: 'https://berthelot.io/afterworks',
})

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://app.mailjet.com/pas-nc-embedded-v1.js'
})
</script>

<style scoped>
iframe {
  height: 100%;
  width: 100%;
}
</style>
