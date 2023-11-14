<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Mariage d'Agnès et Florent - 19 Août 2023",
      "description": "Voici une invitation pour notre mariage."
    },
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
    "meta": {
      "title": "Agnès and Florent's Wedding - 19th of August 2023",
      "description": "Here is an invitation for our wedding."
    },
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
    <Mariage00DesignSystemAnimation
      :animate="animate"
      @animation-over="animationOver = true"
    />

    <main
      v-if="animationOver"
      :class="{ main: true, hasError: error || !invitation || loading }"
    >
      <div v-if="error" class="error-container">
        {{ t('fatal_error.p1') }}<br />
        {{ t('fatal_error.p2') }}
        <a href="mailto:florent@berthelot.io">{{ t('fatal_error.mail') }}</a>
        {{ t('fatal_error.p3') }}
        <a href="tel:+33650999618">{{ t('fatal_error.phone') }}</a>
      </div>
      <div v-if="!error && loading" class="error-container">
        {{ t('slow_internet') }}
      </div>
      <div v-if="!error && !invitation && !loading" class="error-container">
        {{ t('not_found.p1') }}<br />
        {{ t('not_found.p2') }}
        <a href="mailto:florent@berthelot.io">{{ t('not_found.mail') }}</a>
      </div>

      <MariageInvitationMap
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <MariageInvitationAskPhoto v-if="!error && invitation && !loading" />

      <MariageInvitationGifts
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <MariageInvitationCountdown
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <MariageInvitationLoveLetter
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <MariageInvitationNeedAnswer
        v-if="!error && invitation && !loading"
        :invitation="invitation"
      />

      <MariageInvitationInfos
        v-if="!error && invitation && !loading && invitation.invitedTo.after"
      />
    </main>
  </div>
</template>

<script setup lang="js">
import { onMounted, ref } from 'vue'
import { getTheInvitation } from '~/components/mariage/01_shared/fetcher'

const { t } = useI18n({
  useScope: 'local',
})

definePageMeta({
  layout: 'mariage',
})
useSeoMeta({
  ogType: 'website',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
})

const route = useRoute()
const animate = !route.query.noAnimation
const animationOver = ref(!animate)
const loading = ref(true)
const error = ref(false)
const invitation = ref(null)

onMounted(() => {
  try {
    invitation.value = getTheInvitation(route.params.invite)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
})
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
