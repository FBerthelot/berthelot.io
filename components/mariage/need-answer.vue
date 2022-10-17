<template>
  <section class="need-answer">
    <div id="particles-js" class="need-answer-particles"></div>
    <div class="need-answer-container">
      <nuxt-link
        :to="
          localePath(`/mariage/${$route.params.invite}/answer?noAnimation=true`)
        "
        class="wedding-button"
      >
        <span class="wedding-button-content">Répondre à l'invitation</span>
        <div class="wedding-button-wave"></div>
      </nuxt-link>
      <div v-if="isAnswered" class="actions">
        <p>★ Vous pouvez gardez ce site dans vos favoris ! ★</p>

        <!-- https://www.labnol.org/calendar/ -->
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230819T120000Z%2F20230819T215900Z&location=Granville&text=Mariage%20Agn%C3%A8s%20Florent"
          class="addToCalendar"
          target="_blank"
          >Ajouter au calendrier (Google)</a
        >
      </div>
      <p class="need-answer-date">Réponse souhaitée avant le 1er mars 2023</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isAnswered: false,
    }
  },
  mounted() {
    import('particles.js')
      .then(() => {
        window.particlesJS.load(
          'particles-js',
          '/particle-champagne.json',
          () => {}
        )
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  },
}
</script>

<style scoped>
.need-answer {
  background: #f6cd5b;
  width: 100%;
  position: relative;
  height: 50vh;
}

.need-answer-container {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.need-answer-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
}

.need-answer-date {
  position: absolute;
  bottom: 1rem;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

/** Buttons **/
.wedding-button {
  height: 4rem;
  width: 15rem;
  line-height: 4rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  background-color: #6681d7;
  text-align: center;
}

.wedding-button:active {
  box-shadow: 0 0 1rem #6681d7;
}
.wedding-button:focus:not(:active) {
  outline: 3px solid #f2521c;
}

.wedding-button-content {
  position: relative;
  z-index: 1;
  color: white;
}

.wedding-button:hover .wedding-button-wave {
  top: -10rem;
}

.wedding-button-wave {
  width: 100%;
  height: 7.6rem;
  background-color: #6681d7;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: -2.5rem;
  transition: 1s;
}
.wedding-button-wave::before,
.wedding-button-wave::after {
  width: 30rem;
  height: 30rem;
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}
.wedding-button-wave::before {
  border-radius: 45%;
  background-color: #f2521c;
  animation: wave 5s linear infinite;
}
.wedding-button-wave::after {
  border-radius: 40%;
  background-color: #f2521c77;
  animation: wave 10s linear infinite;
}

@keyframes wave {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
