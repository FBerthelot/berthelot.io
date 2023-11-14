<i18n lang="js">
{
  "fr": {
    "FR": "FR",
    "EN": "EN"
  },
  "en": {
    "FR": "FR",
    "EN": "EN"
  }
}
</i18n>

<template>
  <div class="typo_default languageSwitcher">
    <nuxt-link v-if="locale !== 'en'" :to="switchLocalePath('en')">{{
      t(`EN`)
    }}</nuxt-link>

    <nuxt-link v-if="locale !== 'fr'" :to="switchLocalePath('fr')">{{
      t(`FR`)
    }}</nuxt-link>
  </div>
</template>

<script setup lang="js">
const switchLocalePath = useSwitchLocalePath()
const { t, locale } = useI18n({
  useScope: 'local',
})
</script>

<style scoped>
.languageSwitcher a {
  color: var(--color-white);
  text-decoration: none;
}
</style>
