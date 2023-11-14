<i18n lang="json">
{
  "fr": {
    "Avatar": "Avatar"
  },
  "en": {
    "Avatar": "Avatar"
  }
}
</i18n>

<template>
  <section>
    <h2 class="typo_title--small">{{ t('Avatar') }}</h2>

    <div class="block-container">
      <BerthelotSystemAvatar
        front-src="https://placekitten.com/300/300"
        front-alt="A kitten"
        back-src="https://placekitten.com/250/250"
        back-alt="Another kitten"
      />
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
  gap: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  border: 1px solid var(--color-medium);
  padding: 1rem;
}
</style>
