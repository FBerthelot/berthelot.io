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

    <section>
      <h1 class="typography-title-2">Couleurs</h1>

      <article class="card card-flex">
        <div class="color-card typography-paragraph color-background-light">
          <span>color-background-light</span>
        </div>
        <div class="color-card typography-paragraph color-background-strong">
          <span>color-background-strong</span>
        </div>
        <div class="color-card typography-paragraph color-background-dark">
          <span>color-background-dark</span>
        </div>
        <div class="color-card typography-paragraph color-primary">
          <span>color-primary</span>
        </div>
        <div class="color-card typography-paragraph color-gray">
          <span>color-gray</span>
        </div>
        <div class="color-card typography-paragraph color-black">
          <span>color-black</span>
        </div>
        <div class="color-card typography-paragraph color-black-shadow">
          <span>color-black-shadow</span>
        </div>
        <div class="color-card typography-paragraph color-white">
          <span>color-white</span>
        </div>
      </article>
    </section>

    <hr />

    <section>
      <h1 class="typography-title-2">Typography</h1>

      <article class="card">
        <p class="typography-title">typography-title</p>
        <p class="typography-title-2">typography-title-2</p>
        <p class="typography-title-3">typography-title-3</p>
        <p class="typography-title-4">typography-title-4</p>
        <p class="typography-paragraph">typography-paragraph</p>
        <p class="typography-link">typography-link</p>
      </article>

      <p class="typography-paragraph intro">
        Les fonts utilisées sur le site web sont :<br />
        - Open Sans, sans-serif<br />
        - DM Serif Display, serif<br /><br />
        Les fonts utilisées sur les papiers sont :<br />
        - Western Princess<br />
        - Mrs Eaves Italic<br />
      </p>
    </section>

    <hr />

    <section>
      <h1 class="typography-title-2">Button</h1>

      <article class="card color-background-dark">
        <button class="button">Un boutton</button>
      </article>
    </section>

    <hr />

    <section>
      <h1 class="typography-title-2">Tabs</h1>

      <article class="card">
        <div class="tablist" role="tablist" aria-labelledby="tablist-1">
          <button
            id="tab-1"
            type="button"
            class="tab"
            role="tab"
            :aria-selected="selectedTab === 1"
            aria-controls="tabpanel-1"
            @click="selectedTab = 1"
          >
            Tab 1
          </button>

          <button
            id="tab-2"
            type="button"
            class="tab"
            role="tab"
            :aria-selected="selectedTab === 2"
            aria-controls="tabpanel-2"
            @click="selectedTab = 2"
          >
            Tab 2
          </button>
        </div>

        <article
          :class="{
            tabpanel: true,
            tabpanel__open: selectedTab === 1,
          }"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="tab-1"
        >
          <p class="typography-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque interdum ante non volutpat gravida. Nullam imperdiet
            finibus suscipit. Integer ac mollis libero. Aliquam semper tristique
            pharetra. Donec quis fringilla libero. Sed sit amet auctor lectus.
            Ut interdum purus a ultrices varius. In semper enim et tempor
            gravida. Sed tristique orci mi, porta scelerisque quam gravida
            placerat. Vivamus massa neque, vestibulum vestibulum feugiat ut,
            consectetur sed est. Suspendisse in mi sit amet lectus rutrum
            venenatis sit amet eu lectus. Curabitur eu libero vulputate,
            eleifend ligula et, auctor ipsum. Morbi egestas, libero vel
            ullamcorper consectetur, nibh nisi mattis dolor, at dapibus leo
            risus ut augue.
          </p>
        </article>

        <article
          :class="{
            tabpanel: true,
            tabpanel__open: selectedTab === 2,
          }"
          role="tabpanel"
          tabindex="0"
          aria-labelledby="tab-2"
        >
          <p class="typography-paragraph">
            Duis mauris mauris, porttitor id tincidunt in, vehicula eget sem.
            Vivamus nibh libero, tempus in lobortis quis, egestas at nisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Morbi vehicula mi urna, id luctus neque
            lobortis sit amet. Integer sed felis feugiat, posuere ligula id,
            ornare erat. Nulla suscipit ex ex, vel semper neque ullamcorper nec.
            Aliquam porta lorem id tincidunt varius. Quisque viverra feugiat dui
            non vehicula. Praesent eleifend nisi ligula, vitae maximus turpis
            volutpat vitae.
          </p>
        </article>
      </article>
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

      selectedTab: 1,
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

.card {
  border: 1px solid black;
  width: 50vw;
  margin-left: 25vw;
  margin-top: 1rem;
  padding: 1rem;
}

.card-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.color-card {
  width: 7rem;
  height: 7rem;
  border: 1px solid black;
}
.color-card span {
  color: cadetblue;
}

.color-background-light {
  background-color: var(--color-background-light);
}
.color-background-strong {
  background-color: var(--color-background-strong);
}
.color-background-dark {
  background-color: var(--color-background-dark);
}
.color-primary {
  background-color: var(--color-primary);
}
.color-gray {
  background-color: var(--color-gray);
}
.color-black {
  background-color: var(--color-black);
}
.color-black-shadow {
  background-color: var(--color-black-shadow);
}
.color-white {
  background-color: var(--color-white);
}
</style>
