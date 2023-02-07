<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <Typography class="languageSwitcher">
    <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
      EN
    </nuxt-link>

    <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
      FR
    </nuxt-link>
  </Typography>
</template>

<script>
import { Typography } from '~/components/typography'
export default {
  components: { Typography },
}
</script>

<style scoped>
.languageSwitcher {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.languageSwitcher a {
  color: var(--color-white);
  text-decoration: none;
}
</style>
