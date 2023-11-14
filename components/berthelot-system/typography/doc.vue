<i18n lang="json">
{
  "fr": {
    "title": "Typography",
    "textprefix": "Lorem Ipsum - typo_"
  },
  "en": {
    "title": "Typography",
    "textprefix": "Lorem Ipsum - typo_"
  }
}
</i18n>

<template>
  <section>
    <h2 class="typo_title--small">{{ t('title') }}</h2>

    <ul class="block-container">
      <li
        v-for="typography in [
          'default',
          'meta-info',
          'meta-info--link',
          'title',
          'title--small',
          'title--extra-small',
        ]"
        :key="typography"
        :class="{ block: false, [`typo_${typography}`]: true }"
      >
        {{ t(`textprefix`) }}{{ typography }}
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
.block-container {
  gap: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  border: 1px solid var(--color-medium);
  padding: 1rem;
}
.block {
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
