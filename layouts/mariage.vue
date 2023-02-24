<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
import '~/assets/reset.css'

export default {
  head: {
    link: [
      {
        href: 'https://fonts.googleapis.com',
        rel: 'preconnect',
      },
      {
        href: 'https://fonts.gstatic.com',
        rel: 'preconnect',
        crossorigin: true,
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@400;500;600&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  mounted() {
    document.querySelector('body').style.backgroundColor = 'initial'
  },
}
</script>
