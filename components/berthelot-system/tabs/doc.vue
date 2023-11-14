<i18n lang="json">
{
  "fr": {
    "title": "Tabs",
    "Tab 0": "Tab 0",
    "Tab 1": "Tab 1",
    "Tab 2": "Tab 2",
    "Tab 3": "Tab 3"
  },
  "en": {
    "title": "Tabs",
    "Tab 0": "Tab 0",
    "Tab 1": "Tab 1",
    "Tab 2": "Tab 2",
    "Tab 3": "Tab 3"
  }
}
</i18n>

<template>
  <section>
    <h2 class="typo_title--small">{{ t('title') }}</h2>

    <div class="block-container">
      <ul class="tabs">
        <li class="tab" tabindex="0">{{ t('Tab 0') }}</li>
        <li class="tab" tabindex="0">{{ t('Tab 1') }}</li>
        <li class="tab tab--active" tabindex="0">{{ t('Tab 2') }}</li>
        <li class="tab" tabindex="0">{{ t('Tab 3') }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<style scoped>
.block-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  border: 1px solid var(--color-medium);
  padding: 1rem;
}
</style>
