<template>
  <section class="need-answer">
    <h3 class="title">Vous vous joignez à nous ?</h3>
    <h4 class="subtitle">Réponse souhaitée avant le 1er mars 2023</h4>
    <nuxt-link
      :to="localePath(`/mariage/${$route.params.invite}/answer`)"
      class="wedding-button"
    >
      Répondre à l'invitation
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
    // import('particles.js')
    //   .then(() => {
    //     window.particlesJS.load(
    //       'particles-js',
    //       '/particle-champagne.json',
    //       () => {}
    //     )
    //   })
    //   // eslint-disable-next-line no-console
    //   .catch(console.error)
  },
}
</script>

<style scoped>
.need-answer {
  background-color: #2e3f4b;
  color: #2e3f4b;
  background: no-repeat url('./img/bouquet.jpeg');
  background-position: center;
  background-size: 100% auto;
  width: 100%;
  min-height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 4rem;
}

.title {
  font-family: 'DM Serif Display';
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
  margin-bottom: 0.5rem;

  text-align: center;
}

.subtitle {
  font-family: Open Sans;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: center;
  margin-bottom: 2.5rem;
}

.wedding-button {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;

  padding: 0.75rem 1rem;

  background: #2e3f4c;
  border-radius: 0.5rem;

  text-decoration: none;
  display: block;

  color: #faf8ff;
}

.wedding-button:hover,
.wedding-button:focus {
  background: #8d4b9a;
}
</style>
