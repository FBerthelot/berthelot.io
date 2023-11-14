<i18n lang="json">
{
  "fr": {
    "intro": {
      "p1": "Les fonts utilisées sur le site web sont :",
      "p2": "- Open Sans, sans-serif",
      "p3": "- DM Serif Display, serif",
      "p4": "Les fonts utilisées sur les papiers sont :",
      "p5": "- Western Princess",
      "p6": "- Mrs Eaves Italic"
    },
    "typography-link": "typography-link",
    "typography-paragraph": "typography-paragraph",
    "typography-title-4": "typography-title-4",
    "typography-title-3": "typography-title-3",
    "typography-title-2": "typography-title-2",
    "typography-title": "typography-title",
    "title": "Typography"
  },
  "en": {
    "intro": {
      "p1": "The fonts used on the website are:",
      "p2": "- Open Sans, sans-serif",
      "p3": "- DM Serif Display, serif",
      "p4": "The fonts used on the papers are:",
      "p5": "- Western Princess",
      "p6": "- Mrs Eaves Italic"
    },
    "typography-link": "typography-link",
    "typography-paragraph": "typography-paragraph",
    "typography-title-4": "typography-title-4",
    "typography-title-3": "typography-title-3",
    "typography-title-2": "typography-title-2",
    "typography-title": "typography-title",
    "title": "Typography"
  }
}
</i18n>

<template>
  <section>
    <h1 class="typography-title-2">{{ t('title') }}</h1>

    <article class="card">
      <p class="typography-title">{{ t('typography-title') }}</p>
      <p class="typography-title-2">{{ t('typography-title-2') }}</p>
      <p class="typography-title-3">{{ t('typography-title-3') }}</p>
      <p class="typography-title-4">{{ t('typography-title-4') }}</p>
      <p class="typography-paragraph">{{ t('typography-paragraph') }}</p>
      <p class="typography-link">{{ t('typography-link') }}</p>
    </article>

    <p class="typography-paragraph intro">
      {{ t('intro.p1') }}<br />
      {{ t('intro.p2') }}<br />
      {{ t('intro.p3') }}<br /><br />
      {{ t('intro.p4') }}<br />
      {{ t('intro.p5') }}<br />
      {{ t('intro.p6') }}<br />
    </p>
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

.intro {
  width: 40rem;
  margin-left: calc(50% - 20rem);
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
