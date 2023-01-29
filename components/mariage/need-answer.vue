<i18n>
{
  "fr": {
    "title": "Tu te joins à nous ? | Vous vous joignez à nous ?",
    "subtitle": "Réponse souhaitée avant le 30 avril 2023",
    "answer": "Répondre à l'invitation",
    "answered": {
      "title": "★ Tu peux garder ce site dans tes favoris ! ★ | ★ Vous pouvez gardez ce site dans vos favoris ! ★",
      "addToCalendar": "Ajouter au calendrier"
    }
  },
  "en": {
    "title": "Will you be joigning us ?",
    "subtitle": "Please reply before the 30th of April 2023",
    "answer": "Respond to the invitation",
    "answered": {
      "title": "★ You can keep this website within your bookmarks ! ★",
      "addToCalendar": "Add to calendar"
    }
  }
}
</i18n>

<template>
  <section class="need-answer">
    <div class="firework-container"></div>

    <div class="container">
      <h3 class="title">{{ $t('title') }}</h3>
      <h4 class="subtitle">{{ $t('subtitle') }}</h4>
      <nuxt-link
        :to="localePath(`/mariage/${$route.params.invite}/answer`)"
        class="wedding-button"
      >
        {{ $t('answer') }}
      </nuxt-link>

      <div v-if="isAnswered" class="actions">
        <p>{{ $t('answered.title') }}</p>

        <!-- https://www.labnol.org/calendar/ -->
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230819T120000Z%2F20230819T215900Z&location=Granville&text=Mariage%20Agn%C3%A8s%20Florent"
          class="addToCalendar"
          target="_blank"
          >{{ $t('title.addToCalendar') }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAnswered: false,
      fireworks: null,
    }
  },
  async mounted() {
    await import('fireworks-js').then(({ Fireworks }) => {
      const container = document.querySelector('.firework-container')
      this.fireworks = new Fireworks(container, {
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
            '/assets/explosion0.mp3',
            '/assets/explosion1.mp3',
            '/assets/explosion2.mp3',
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
      this.fireworks.start()
    })
  },
  destroyed() {
    this.fireworks?.stop()
    this.fireworks?.clear()
  },
}
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

.wedding-button {
  font-family: 'Open Sans ', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;

  padding: 0.75rem 1rem;

  border-radius: 0.5rem;

  text-decoration: none;
  display: block;

  color: #2e3f4b;
  background-color: #fffbf8;

  transition: all 0.5s ease;
}

.wedding-button:hover,
.wedding-button:focus {
  box-shadow: 0 0 0.5rem #fffbf8;
  transform: scale(1.1);
  outline: none;

  background-color: #f1e8ff;
  animation: blink 1s infinite alternate;
}

.wedding-button:active {
  box-shadow: 0 0 1rem #9b61a7;
}

@keyframes blink {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
