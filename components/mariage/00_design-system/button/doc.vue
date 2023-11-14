<i18n lang="json">
{
  "fr": {
    "title": "Button",
    "buttonContent": "Un boutton"
  },
  "en": {
    "title": "Button",
    "buttonContent": "A button"
  }
}
</i18n>

<template>
  <section>
    <h1 class="typography-title-2">{{ t('title') }}</h1>

    <article class="card color-background-dark">
      <button class="button">{{ t('buttonContent') }}</button>
    </article>
  </section>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'locale',
})
</script>

<style scoped>
section {
  margin: 1rem 0;
}

.card {
  border: 1px solid black;
  width: 50vw;
  margin-left: 25vw;
  margin-top: 1rem;
  padding: 1rem;
}
</style>
