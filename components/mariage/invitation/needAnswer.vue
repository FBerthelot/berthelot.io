<i18n lang="json">
{
  "fr": {
    "title": "Tu te joins à nous&nbsp;? | Vous vous joignez à nous&nbsp;?",
    "answer": "Répondre à l'invitation",
    "answered": {
      "title": "Merci pour la réponse&nbsp;!",
      "addToCalendar": "Ajouter au calendrier"
    },
    "moreInfo": "Plus d'info ?",
    "menu": "Le menu",
    "church": "Le livret de messe"
  },
  "en": {
    "title": "Will you be joining us?",
    "answer": "Respond to the invitation",
    "answered": {
      "title": "Thank you for your answer!",
      "addToCalendar": "Add to calendar"
    },
    "moreInfo": "More info?",
    "menu": "Menu",
    "church": "Church service booklet"
  }
}
</i18n>

<template>
  <section id="need-answer" class="need-answer">
    <div class="firework-container" />

    <div v-if="!ANSWER_PERIOD_IS_DONE" class="container">
      <!-- eslint-disable vue/no-v-html -->
      <h3
        class="title"
        v-html="
          isAnswered
            ? t('answered.title', invitation.nbOfPeople)
            : t('title', invitation.nbOfPeople)
        "
      />
      <!-- eslint-enable vue/no-v-html -->
      <h4 class="subtitle">
        {{
          t(
            isAnswered ? 'answered.subtitle' : 'subtitle',
            invitation.nbOfPeople,
          )
        }}
      </h4>
      <nuxt-link
        v-if="!isAnswered"
        :to="localePath(`/mariage/${$route.params.invite}/answer`)"
        class="button"
      >
        {{ t('answer') }}
      </nuxt-link>
      <a
        v-if="isAnswered"
        class="button"
        :href="
          !invitation.invitedTo.cityHall
            ? 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230819T120000Z%2F20230819T170000Z&location=Granville&text=Mariage%20Agn%C3%A8s%20Florent'
            : 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230819T110000Z%2F20230819T215900Z&location=Granville&text=Mariage%20Agn%C3%A8s%20Florent'
        "
        target="_blank"
        >{{ t('answered.addToCalendar') }}</a
      >
    </div>

    <div v-if="ANSWER_PERIOD_IS_DONE" class="container">
      <h3 class="title">{{ t('moreInfo') }}</h3>
      <div class="moreInfoLinkContainer">
        <nuxt-link
          :to="
            localePath(
              `/mariage/church?prevUrl=${localePath(
                `/mariage/${invitation.id}?noAnimation=true`,
              )}`,
            )
          "
          class="button"
        >
          {{ t('church') }}
        </nuxt-link>
        <nuxt-link
          :to="
            localePath(
              `/mariage/menu?prevUrl=${localePath(
                `/mariage/${invitation.id}`,
              )}?noAnimation=true`,
            )
          "
          class="button"
        >
          {{ t('menu') }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import { onMounted, onUnmounted, ref } from 'vue'

const { invitation } = defineProps({
  invitation: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()
const route = useRoute()

const isAnswered = ref(invitation.isAnswered)
const ANSWER_PERIOD_IS_DONE = true
const fireworks = ref(null)

onMounted(async () => {
  if (window.localStorage.getItem('answered') === 'true') {
    isAnswered.value = true

    if (route.query.noAnimation) {
      window.scrollTo({
        top: window.document
          .querySelector('#need-answer')
          .getBoundingClientRect().top,
        behavior: 'smooth',
      })
    }
  }

  await import('fireworks-js').then(({ Fireworks }) => {
    const container = document.querySelector('.firework-container')
    fireworks.value = new Fireworks(container, {
      hue: {
        min: 0,
        max: 345,
      },
      delay: {
        min: 30,
        max: 60,
      },
      rocketsPoint: {
        min: 50,
        max: 50,
      },
      opacity: 0.5, // fillStyle
      acceleration: 1.02,
      friction: 0.97,
      gravity: 1.5,
      particles: 90,
      trace: 3,
      traceSpeed: 1,
      explosion: 6,
      intensity: 10,
      flickering: 25,
      lineStyle: 'round',
      lineWidth: {
        explosion: {
          min: 1,
          max: 4,
        },
        trace: {
          min: 0.1,
          max: 0.5,
        },
      },
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
        decay: {
          min: 0.015,
          max: 0.03,
        },
      },
      sound: {
        enabled: true,
        files: [
          '/assets/mariage/explosion0.mp3',
          '/assets/mariage/explosion1.mp3',
          '/assets/mariage/explosion2.mp3',
        ],
        volume: {
          min: 2,
          max: 4,
        },
      },
      mouse: {
        click: true,
        move: false,
        max: 3,
      },
    })
    fireworks.value.start()
  })
})

onUnmounted(() => {
  fireworks.value?.stop()
  fireworks.value?.clear()
})
</script>

<style scoped>
.need-answer {
  color: #faf8ff;
  background-color: #2e3f4b;
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.firework-container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;

  text-align: center;
}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: center;
  margin-bottom: 2.5rem;
}

.moreInfoLinkContainer {
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 600px) {
  .moreInfoLinkContainer {
    flex-direction: column;
  }
}
</style>
