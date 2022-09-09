<i18n>
{
  "fr": {
    "love": {
      "title": "Ma pacsé, je l'aime !",
      "meta_description": "Sur cette page, vous trouverez des dessins de ma bien aimée"
    }
  },
  "en": {
    "love": {
      "title": "I love my girlfriend",
      "meta_description": "Here is my beloved's drawing"
    }
  }
}
</i18n>

<template>
  <main id="love-page">
    <h1 class="title"><LoveU class="loveu" /></h1>

    <div class="img-container">
      <a
        href="https://www.linkedin.com/in/agn%C3%A8s-vall%C3%A9e-856888105/"
        target="_blank"
        rel="noreferrer"
        tabindex="0"
      >
        <img src="/assets/quinn-draw.jpg" alt="Draw of Miss Quinn on a ball" />
      </a>
      <img src="/assets/joker-draw.jpg" alt="Draw of Joker with flowers" />
    </div>
  </main>
</template>

<script>
import LoveU from '~/components/loveu.vue'
export default {
  components: {
    LoveU,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('love.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('love.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('love.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('love.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('love.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('love.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/love',
        },
      ],
    }
  },
}
</script>

<style scoped>
#love-page {
  height: 100%;
}

.title {
  height: 5rem;
  margin: 1rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loveu {
  height: 100%;
}

.img-container {
  height: calc(100% - 5rem);
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  box-sizing: border-box;
}

.img-container a {
  display: block;
  max-width: 48%;
  height: 100%;
}

.img-container a img {
  max-width: 100%;
}

.img-container img {
  width: auto;
  max-width: 48%;
  height: 100%;
}
</style>
