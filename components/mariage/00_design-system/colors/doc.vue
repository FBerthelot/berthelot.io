<i18n lang="json">
{
  "fr": {
    "title": "Couleurs"
  },
  "en": {
    "title": "Colors"
  }
}
</i18n>

<template>
  <section>
    <h1 class="typography-title-2">{{ t('title') }}</h1>

    <article class="card card-flex">
      <div
        v-for="color of colors"
        :key="color"
        :class="`color-card typography-paragraph ${color}`"
      >
        <span>{{ color }}</span>
      </div>
    </article>
  </section>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'locale',
})

const colors = [
  'color-background-light',
  'color-background-strong',
  'color-background-dark',
  'color-primary',
  'color-gray',
  'color-black',
  'color-black-shadow',
  'color-white',
]
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
.card-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.color-card {
  width: 7rem;
  height: 7rem;
  border: 1px solid black;
}
.color-card span {
  color: cadetblue;
}

.color-background-light {
  background-color: var(--color-background-light);
}
.color-background-strong {
  background-color: var(--color-background-strong);
}
.color-background-dark {
  background-color: var(--color-background-dark);
}
.color-primary {
  background-color: var(--color-primary);
}
.color-gray {
  background-color: var(--color-gray);
}
.color-black {
  background-color: var(--color-black);
}
.color-black-shadow {
  background-color: var(--color-black-shadow);
}
.color-white {
  background-color: var(--color-white);
}
</style>
