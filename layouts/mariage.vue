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
/* @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap'); */

/* @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Parisienne&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Pacifico&family=Parisienne&display=swap');
</style>
