<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <main v-if="animationOver" class="main">A venir... <Menu /></main>
  </div>
</template>

<script>
import Animation from '~/components/mariage/animation.vue'
import Menu from '~/components/mariage/menu.vue'

export default {
  components: {
    Animation,
    Menu,
  },
  layout: 'mariage',
  data() {
    return {
      animate: !this.$route.query.noAnimation,
      animationOver: false,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Mariage Agnès et Florent - 19 Août 2022`,
    }
  },
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}

.main {
  min-height: 20vh;
}
</style>
