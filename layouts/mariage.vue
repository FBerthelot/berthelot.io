<template>
  <nuxt />
</template>

<script>
import '~/assets/reset.css'

export default {
  mounted() {
    document.querySelector('body').style.backgroundColor = 'initial'
  },
}
</script>
