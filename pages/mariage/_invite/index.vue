<i18n>
{
  "fr": {
    "title": "Mariage d'Agnès et Florent - 19 Août 2023",
    "not_found": {
      "p1": "Désolés, nous ne trouvons pas ton invitation.",
      "p2": "Tu peux nous contacter par",
      "mail": "email."
    },
    "slow_internet": "La connexion internet est mauvaise. 😅 Merci de patienter encore un peu...",
    "fatal_error": {
      "p1": "Une erreur est survenue ! 😱",
      "p2": "Merci de nous contacter par",
      "mail": "email",
      "p3": "ou par",
      "phone": "téléphone."
    }
  },
  "en": {
    "title": "Agnès and Florent's Wedding - 19th of August 2023",
    "not_found": {
      "p1": "Sorry, we can't find your invitation.",
      "p2": "You can contact us by",
      "mail": "email."
    },
    "slow_internet": "Your internet connection is slow. 😅 Please wait a moment...",
    "fatal_error": {
      "p1": "An error occured ! 😱",
      "p2": "Please contact us by",
      "mail": "email",
      "p3": "or by",
      "phone": "phone."
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

      <Map v-if="!error && invitation && !loading" :invitation="invitation" />

      <Photos v-if="!error && invitation && !loading" />

      <Gifts v-if="!error && invitation && !loading" :invitation="invitation" />

      <Countdown
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <LoveLetter
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <NeedAnwser
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <Infos
        v-if="!error && invitation && !loading && invitation.invitedTo.after"
      />
    </main>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Animation from '~/components/mariage/00_shared/animation/animation.vue'
import Map from '~/components/mariage/home/map.vue'
import Countdown from '~/components/mariage/home/countdown.vue'
import NeedAnwser from '~/components/mariage/home/need-answer.vue'
import LoveLetter from '~/components/mariage/home/love-letter.vue'
import Infos from '~/components/mariage/home/infos.vue'
import Gifts from '~/components/mariage/home/gifts.vue'
import Photos from '~/components/mariage/home/ask-photo.vue'

import { getTheInvitation } from '~/components/mariage/00_shared/fetcher'

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
      invitation: null,
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
  mounted() {
    try {
      this.invitation = getTheInvitation(this.$route.params.invite)
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
