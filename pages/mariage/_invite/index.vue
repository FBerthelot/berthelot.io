<i18n>
{
  "fr": {
    "title": "Mariage Agnès et Florent - 19 Août 2022",
    "not_found": {
      "p1": "Désolé, mais nous ne trouvons pas votre invitation.",
      "p2": "Vous pouvez nous contacter par",
      "mail": "email."
    },
    "slow_internet": "Ta connexion internet est mauvaise 😅. Faut patienter encore un peu...",
    "fatal_error": {
      "p1": "Une erreur est survenue 😱.",
      "p2": "Vous pouvez nous contacter par",
      "mail": "email",
      "p3": "ou par",
      "phone": "téléphone."
    }
  },
  "en": {
    "title": "Mariage Agnès et Florent - 19 Août 2022",
    "not_found": {
      "p1": "Désolé, mais nous ne trouvons pas votre invitation.",
      "p2": "Vous pouvez nous contacter par",
      "mail": "email."
    },
    "slow_internet": "Ta connexion internet est mauvaise 😅. Faut patienter encore un peu...",
    "fatal_error": {
      "p1": "Une erreur est survenu 😱.",
      "p2": "Vous pouvez nous contacter par",
      "mail": "email",
      "p3": "ou par",
      "phone": "téléphone."
    }
  }
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <main
      v-if="animationOver"
      :class="{ main: true, hasError: error || !invitation || loading }"
    >
      <div v-if="error" class="error-container">
        {{ $t('fatal_error.p1') }}<br />
        {{ $t('fatal_error.p2') }}
        <a href="mailto:florent@berthelot.io">{{ $t('fatal_error.mail') }}</a>
        {{ $t('fatal_error.p3') }}
        <a href="tel:+33650999618">{{ $t('fatal_error.phone') }}</a>
      </div>
      <div v-if="!error && loading" class="error-container">
        {{ $t('slow_internet') }}
      </div>
      <div v-if="!error && !invitation && !loading" class="error-container">
        {{ $t('not_found.p1') }}<br />
        {{ $t('not_found.p2') }}
        <a href="mailto:florent@berthelot.io">{{ $t('not_found.mail') }}</a>
      </div>

      <LoveLetter v-if="!error && invitation && !loading" />

      <Countdown v-if="!error && invitation && !loading" />

      <Map v-if="!error && invitation && !loading" />

      <NeedAnwser v-if="!error && invitation && !loading" />

      <Infos v-if="!error && invitation && !loading" />

      <Gifts v-if="!error && invitation && !loading" />

      <Photos v-if="!error && invitation && !loading" />
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Animation from '~/components/mariage/animation.vue'
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
  },
  layout: 'mariage',
  data() {
    return {
      animate: !this.$route.query.noAnimation,
      animationOver: false,
      loading: true,
      error: false,
      invitation: {},
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: this.$t('title'),
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

  background: #faf8ff;
}

.main {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 20vh;
}

.main.hasError {
  justify-content: center;
}

@media (orientation: portrait) {
  .main {
    margin-left: auto;
  }
}

.error-container {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #2e3f4b;
}

.error-container a {
  color: #8d4b9a;
  text-decoration: underline;
}

.error-container a:hover {
  text-decoration: none;
}
</style>
