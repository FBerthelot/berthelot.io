<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <main v-if="animationOver" class="main">
      <section id="schedule" class="section">
        <h3>Programme des festivités</h3>
        <article>
          <h4>Jour 1 - Mariage le samedi 19 août 2023</h4>
          <details>
            <summary>13h à 13H30 - Mariage civil 🏫</summary>
            <address>
              La mairie de Donville-les-Bains<br />
              97 Route de Coutances <br />
              50350 Donville-les-Bains
            </address>
          </details>
          <details>
            <summary>14H à 15H - Mariage religieux 💒</summary>
            <address>
              L'église de Notre-Dame du Cap Lihou<br />
              Place du Parvis Notre Dame<br />
              50400 Granville
            </address>
          </details>

          <details>
            <summary>16H à 17H30 - Vin d'honneur 🎉</summary>
            <address>
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </details>

          <details>
            <summary>17H30 à 19H30 - Cocktail 🥂</summary>
            <address>
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </details>

          <details>
            <summary>20H - Dîner 🍽</summary>
            <address>
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </details>

          <details>
            <summary>23H30 - Ouverture du bal 💃🏽🕺🏻</summary>
            <address>
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </details>

          <details>
            <summary>1H30 - Ouverture du service voiturier 🚕</summary>
            <address>
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </details>
        </article>

        <article>
          <h3>Jour 2 - Retour des mariés le dimanche 20 août 2023</h3>
          <details>
            <summary>11H à 18H - Chill tous ensemble</summary>
            <address>
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </details>
        </article>
      </section>
      <Menu />
    </main>
  </div>
</template>

<script>
import Animation from '~/components/mariage/animation.vue'
import Menu from '~/components/mariage/menu.vue'

export default {
  components: {
    Animation,
    Menu,
  },
  layout: 'mariage',
  data() {
    return {
      animate: !this.$route.query.noAnimation,
      animationOver: false,
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
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}

.main {
  min-height: 20vh;
}

.section {
  width: 100%;
  margin: 1rem 0;

  line-height: 1.5rem;
}

.section h2 {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 2rem;
}
</style>
