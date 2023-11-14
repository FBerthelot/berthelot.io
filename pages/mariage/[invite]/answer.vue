<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Mariage Agnès et Florent - 19 Août 2023"
    },
    "loader_alt": "Chargement...",
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
      "title": "Mariage Agnès et Florent - 19 Août 2023"
    },
    "loader_alt": "Chargement...",
    "fatal_error": {
      "p1": "Une erreur est survenue ! 😱",
      "p2": "Merci de nous contacter par",
      "mail": "email",
      "p3": "ou par",
      "phone": "téléphone."
    }
  }
}
</i18n>

<template>
  <div id="wedding-page">
    <div v-if="error" class="error-container">
      <p>{{ t('fatal_error.p1') }}</p>
      <p>
        {{ t('fatal_error.p2') }}
        <a href="mailto:florent@berthelot.io">{{ t('fatal_error.mail') }}</a>
        {{ t('fatal_error.p3') }}
        <a href="tel:+33650999618">{{ t('fatal_error.phone') }}</a>
      </p>
    </div>
    <div v-if="loading" class="loading">
      <img
        src="/assets/mariage/agnes_et_florent-violet.svg"
        :alt="t('loader_alt')"
      />
    </div>
    <MariageInvitationAnswerForm
      v-if="!loading && !error"
      :invitation="invitation"
    />
  </div>
</template>

<script setup lang="js">
import { onMounted, ref } from 'vue'
import { getTheInvitation } from '~/components/mariage/01_shared/fetcher'

const invitation = ref({})
const loading = ref(true)
const error = ref(null)

const route = useRoute()
const { t } = useI18n({
  useScope: 'local',
})

definePageMeta({
  layout: 'mariage',
  title: () => t('meta.title'),
})

onMounted(() => {
  try {
    invitation.value = getTheInvitation(route.params.invite)
    if (!invitation.value) {
      throw new Error('Invite Not Found !')
    }
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
  min-height: 100vh;

  background: #faf8ff;
  color: #2e3f4b;
}

.loading {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.loading img {
  width: 5rem;
  height: auto;
  animation: blink 1s infinite alternate;
}
@keyframes blink {
  0% {
    opacity: 0.4;
    scale: 0.2;
  }
  100% {
    opacity: 1;
    scale: 1.5;
  }
}

.error-container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6rem;
}
.error-container a {
  color: #8d4b9a;
}
.error-container a:hover {
  text-decoration: none;
}
</style>
