<i18n lang="json">
{
  "fr": {
    "title": "Card",
    "example1": {
      "title": "Card Title"
    },
    "example2": {
      "title": "Card Title",
      "content": "Lorem ipsum....... ....",
      "meta": "19 janvier 2038"
    },
    "example3": {
      "title": "Card Title",
      "content": "Lorem ipsum....... ....",
      "meta": "19 janvier 2038",
      "secondary": "You can display more content here"
    }
  },
  "en": {
    "title": "Card",
    "example1": {
      "title": "Card Title"
    },
    "example2": {
      "title": "Card Title",
      "content": "Lorem ipsum....... ....",
      "meta": "19 janvier 2038"
    },
    "example3": {
      "title": "Card Title",
      "content": "Lorem ipsum....... ....",
      "meta": "19 janvier 2038",
      "secondary": "You can display more content here"
    }
  }
}
</i18n>

<template>
  <section>
    <h2 class="typo_title--small">{{ t('title') }}</h2>

    <div class="block-container">
      <BerthelotSystemCard>{{ t('example1.title') }}</BerthelotSystemCard>

      <BerthelotSystemCard>
        <div class="typo_title--small typo_light">
          {{ t('example2.title') }}
        </div>
        <p class="typo_default typo_white">{{ t('example2.content') }}</p>
        <div class="typo_meta-info card_meta">{{ t('example2.meta') }}</div>
      </BerthelotSystemCard>

      <BerthelotSystemCard>
        <div class="typo_title--small typo_light">
          {{ t('example3.title') }}
        </div>
        <p class="typo_default typo_white">{{ t('example3.content') }}</p>
        <div class="typo_meta-info card_meta">{{ t('example3.meta') }}</div>
        <BerthelotSystemCardSecondary>
          {{ t('example3.secondary') }}
        </BerthelotSystemCardSecondary>
      </BerthelotSystemCard>
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
