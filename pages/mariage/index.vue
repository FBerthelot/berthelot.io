<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation
      :animate="animate"
      :mode="mode"
      :reduce-at-the-end="reduceAtTheEnd"
    />
    <!-- <button @click="animate = !animate">animate {{ !animate }}</button>
    <button @click="mode = mode === 'sunset' ? 'zenith' : 'sunset'">
      mode {{ mode === 'sunset' ? 'zenith' : 'sunset' }}
    </button> -->
  </div>
</template>

<script>
import Animation from '~/components/mariage/animation.vue'

export default {
  components: {
    Animation,
  },
  layout: 'mariage',
  data() {
    return {
      animate: true,
      reduceAtTheEnd: false,
      mode: 'sunset',
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Mariage Agnès et Florent`,
    }
  },
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}
</style>
