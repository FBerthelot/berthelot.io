<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <main id="wedding-design-system">
    <h1 class="typography-title">Agnès &amp; Florent design system</h1>

    <p class="typography-paragraph intro">
      Le thème de notre mariage est "couché de soleil" sur la mer, c'est là que
      tout à commencé pour nous.
      <br /><br />

      <a
        class="typography-link"
        href="https://berthelot.io/mariage"
        target="__blank"
        >Cette animation</a
      >
      est la colonne vertébrale de notre thème de mariage. Elle a d'abort
      inspiré le ruban sur les invitations, qui a inspiré les robes des témoins
      d'agnès, de la couleurs des fleurs, ...

      <br /><br />
      De plus, pour décorer le château, nous somme parti sur une décoration
      marine car c'est une passion qui nous réuni tout les deux : Plongée,
      Bateau, Aquariums, ...
    </p>

    <hr />

    <section>
      <h1 class="typography-title-2">Logo</h1>

      <div class="logo-card-container">
        <article class="logo-card">
          <h3 class="typography-title-3">Blanc sur fond transparent</h3>
          <img alt="" :src="logoWTSVG" />
          <a
            :href="logoWTPNG"
            class="typography-link"
            download="logo_transparent-agnes_florent.png"
            >Télécharger la version PNG</a
          >
          <a
            :href="logoWT400PNG"
            class="typography-link"
            download="logo_transparent-agnes_florent.400x.png"
            >Télécharger la version PNG 400x</a
          >
          <a
            :href="logoWTSVG"
            class="typography-link"
            download="logo_transparent-agnes_florent.svg"
            >Télécharger la version SVG</a
          >
        </article>

        <article class="logo-card">
          <h3 class="typography-title-3">Blanc sur fond violet</h3>
          <img alt="" :src="logoVTSVG" />
          <a
            :href="logoVTPNG"
            class="typography-link"
            download="logo_violet-agnes_florent.png"
            >Télécharger la version PNG</a
          >
          <a
            :href="logoVT400PNG"
            class="typography-link"
            download="logo_violet-agnes_florent.400x.png"
            >Télécharger la version PNG 400x</a
          >
          <a
            :href="logoVTSVG"
            class="typography-link"
            download="logo_violet-agnes_florent.svg"
            >Télécharger la version SVG</a
          >
        </article>

        <article class="logo-card">
          <h3 class="typography-title-3">
            Blanc sur fond transparent avec date
          </h3>
          <img alt="" :src="logoWT2SVG" />
          <a
            :href="logoWT2SVG"
            class="typography-link"
            download="logo_transparent_date-agnes_florent.svg"
            >Télécharger la version SVG</a
          >
        </article>

        <article class="logo-card">
          <h3 class="typography-title-3">Blanc sur fond violet avec date</h3>
          <img alt="" :src="logoVT6SVG" />
          <a
            :href="logoVT6SVG"
            class="typography-link"
            download="logo_white_date-agnes_florent.svg"
            >Télécharger la version SVG</a
          >
        </article>
      </div>
    </section>

    <hr />
  </main>
</template>

<script>
import logoWTPNG from '~/components/mariage/00_shared/logo/logo-02.png'
import logoWT400PNG from '~/components/mariage/00_shared/logo/logo-02-400x.png'
import logoWTSVG from '~/components/mariage/00_shared/logo/logo-02.svg'

import logoVTPNG from '~/components/mariage/00_shared/logo/logo-04.png'
import logoVT400PNG from '~/components/mariage/00_shared/logo/logo-04-400x.png'
import logoVTSVG from '~/components/mariage/00_shared/logo/logo-04.svg'

import logoWT2SVG from '~/components/mariage/00_shared/logo/logo-03.svg'
import logoVT6SVG from '~/components/mariage/00_shared/logo/logo-06.svg'

export default {
  layout: 'mariage',
  data: () => {
    return {
      logoWTPNG,
      logoWTSVG,
      logoWT400PNG,

      logoVTPNG,
      logoVT400PNG,
      logoVTSVG,

      logoWT2SVG,
      logoVT6SVG,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Design System - Mariage Agnès et Florent - 19 Août 2022`,
    }
  },
}
</script>

<style scoped>
#wedding-design-system {
  background-color: var(--color-background-strong);
  width: 100%;
  min-height: 100%;
}

.intro {
  width: 40rem;
  margin-left: calc(50% - 20rem);
  margin-top: 1rem;
  margin-bottom: 3rem;
}

section {
  margin: 1rem 0;
}

.logo-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 1rem 2rem;
}

.logo-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
}

.logo-card h3 {
  margin-bottom: 1rem;
}

.logo-card img {
  width: 10rem;
}
</style>
