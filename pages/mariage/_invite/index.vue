<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <div class="page">
      <main v-if="animationOver" class="main">
        <div v-if="error" class="error-container">
          Une erreur est survenu 😱. <br />
          Vous pouvez nous contacter par
          <a href="mailto:florent@berthelot.io">mail</a> ou par
          <a href="tel:+33650999618">téléphone.</a>
        </div>
        <div v-if="!error && loading" class="error-container">
          Ta connexion internet est mauvaise 😅. Faut patienter encore un peu...
        </div>
        <div v-if="!error && !invitation && !loading" class="error-container">
          Désolé, mais nous ne trouvons pas votre invitation. Vous pouvez nous
          contacter par <a href="mailto:florent@berthelot.io">mail</a>.
        </div>

        <LoveLetter v-if="!error && invitation && !loading" />

        <Countdown />

        <Map v-if="!error && invitation && !loading" />

        <!-- <Menu /> -->

        <NeedAnwser v-if="!error && invitation && !loading" />

        <Infos v-if="!error && invitation && !loading" />

        <Gifts v-if="!error && invitation && !loading" />

        <Photos v-if="!error && invitation && !loading" />
      </main>
    </div>
  </div>
</template>

<script>
import Animation from '~/components/mariage/animation.vue'
// import Menu from '~/components/mariage/menu.vue'
import Map from '~/components/mariage/map.vue'
import Countdown from '~/components/mariage/countdown.vue'
import NeedAnwser from '~/components/mariage/need-answer.vue'
import LoveLetter from '~/components/mariage/love-letter.vue'
import Infos from '~/components/mariage/infos.vue'
import Gifts from '~/components/mariage/gifts.vue'
import Photos from '~/components/mariage/ask-photo.vue'

import { getTheInvitation } from '~/components/mariage/fetcher'

export default {
  components: {
    Animation,
    Countdown,
    LoveLetter,
    NeedAnwser,
    Infos,
    Gifts,
    Photos,
    Map,
    // Menu,
  },
  layout: 'mariage',
  data() {
    return {
      animate: !this.$route.query.noAnimation,
      animationOver: false,
      loading: true,
      error: null,
      invitation: {},
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
  async mounted() {
    this.switchLocalePath(navigator.language.includes('en') ? 'en' : 'fr')

    try {
      this.invitation = await getTheInvitation(
        this.$config.SHEETDB_URL,
        this.$route.params.invite
      )
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      this.error = err
    } finally {
      this.loading = false
    }
  },
  methods: {},
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}

.page {
  display: flex;
  flex-direction: column;
}

.main {
  /* font-family: 'Noto Sans', sans-serif; */
  font-family: 'Pacifico', cursive;
  font-size: 0.9rem;
  line-height: 1.1rem;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (orientation: portrait) {
  .main {
    margin-left: auto;
  }
}

.error-container {
  padding: 1rem 0.5rem;
}
</style>
