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
    <h2 class="typo_title--small">{{ t('title') }}</h2>

    <ul class="color-block-container">
      <li
        v-for="color in ['white', 'light', 'bright', 'medium', 'dark', 'black']"
        :key="color"
        class="color-block"
        :style="{
          backgroundColor: `var(--color-${color})`,
          border: `1px solid var(--color-white)`,
        }"
      >
        <p :style="{ filter: 'invert(100%)', color: `var(--color-${color})` }">
          {{ color }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<style scoped>
.color-block-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}
.color-block {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
