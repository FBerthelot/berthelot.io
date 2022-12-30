<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import '~/assets/reset.css'

export default {
  mounted() {
    document.querySelector('body').style.backgroundColor = 'initial'
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@400;500;600&display=swap');
</style>
