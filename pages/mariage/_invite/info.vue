<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <main v-if="animationOver" class="main">
      A venir...
      <section class="section">
        <img class="us" src="http://placekitten.com/200/360" />
        Nous ne souhaitons pas établir une liste de mariage, si vous le
        souhaitez vous pouvez participer à notre voyage de noces. Vous pourrez
        le faire le jour du mariage.
      </section>
      <Menu />
    </main>
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
