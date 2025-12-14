<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Agnès & Florent design system",
      "description": "Voici le design system de notre mariage."
    },
    "title": "Agnès & Florent design system",
    "intro": {
      "p1": "Le thème de notre mariage est \"couché de soleil\" sur la mer, c'est là que tout à commencé pour nous.",
      "p2Animation": "Cette animation",
      "p2": "est la colonne vertébrale de notre thème de mariage. Elle a d'abort inspiré le ruban sur les invitations, qui a inspiré les robes des témoins d'Agnès, de la couleurs des fleurs, ...",
      "p3": "De plus, pour décorer le château, nous somme parti sur une décoration marine car c'est une passion qui nous réuni tout les deux : Plongée, Bateau, Aquariums, ..."
    },
    "logo": {
      "title": "Logo",
      "whiteOnTransparent": {
        "title": "Blanc sur fond transparent",
        "downloadPng": "Télécharger la version PNG",
        "downloadPng400x": "Télécharger la version PNG 400x",
        "downloadSvg": "Télécharger la version SVG"
      },
      "whiteOnViolet": {
        "title": "Blanc sur fond violet",
        "downloadPng": "Télécharger la version PNG",
        "downloadPng400x": "Télécharger la version PNG 400x",
        "downloadSvg": "Télécharger la version SVG"
      },
      "whiteOnTransparentWithDate": {
        "title": "Blanc sur fond transparent avec date",
        "downloadSvg": "Télécharger la version SVG"
      },
      "whiteOnVioletWithDate": {
        "title": "Blanc sur fond violet avec date",
        "downloadSvg": "Télécharger la version SVG"
      }
    }
  },
  "en": {
    "meta": {
      "title": "Agnès & Florent design system",
      "description": "This is the design system of our wedding."
    },
    "title": "Agnès & Florent design system",
    "intro": {
      "p1": "The theme of our wedding is \"sunset\" on the sea, this is where it all started for us.",
      "p2Animation": "This animation",
      "p2": "is the backbone of our wedding theme. It first inspired the ribbon on the invitations, which inspired Agnès' bridesmaids' dresses, the color of the flowers, ...",
      "p3": "In addition, to decorate the castle, we went for a marine decoration because it is a passion that brings us both together: Diving, Boat, Aquariums, ..."
    },
    "logo": {
      "title": "Logo",
      "whiteOnTransparent": {
        "title": "White on transparent background",
        "downloadPng": "Download PNG version",
        "downloadPng400x": "Download PNG version 400x",
        "downloadSvg": "Download SVG version"
      },
      "whiteOnViolet": {
        "title": "White on violet background",
        "downloadPng": "Download PNG version",
        "downloadPng400x": "Download PNG version 400x",
        "downloadSvg": "Download SVG version"
      },
      "whiteOnTransparentWithDate": {
        "title": "White on transparent background with date",
        "downloadSvg": "Download SVG version"
      },
      "whiteOnVioletWithDate": {
        "title": "White on violet background with date",
        "downloadSvg": "Download SVG version"
      }
    }
  }
}
</i18n>

<template>
  <main id="wedding-design-system">
    <h1 class="typography-title">
      {{ t('title') }}
    </h1>

    <p class="typography-paragraph intro">
      {{ t(`intro.p1`) }}
      <br /><br />

      <a class="typography-link" href="/mariage" target="__blank">
        {{ t('intro.p2Animation') }}
      </a>

      {{ t(`intro.p2`) }}
      <br /><br />
      {{ t(`intro.p3`) }}
    </p>

    <hr />

    <section>
      <h1 class="typography-title-2">{{ t('logo.title') }}</h1>

      <div class="logo-card-container">
        <article class="logo-card">
          <h3 class="typography-title-3">
            {{ t('logo.whiteOnTransparent.title') }}
          </h3>
          <img alt="" src="/assets/mariage/agnes-et-florent-transparent.svg" />
          <a
            href="/assets/mariage/agnes-et-florent-transparent.png"
            class="typography-link"
            download="logo-transparent-agnes-florent.png"
            >{{ t('logo.whiteOnTransparent.downloadPng') }}</a
          >
          <a
            href="/assets/mariage/agnes-et-florent-transparent-400x.png"
            class="typography-link"
            download="logo-transparent-agnes-florent.400x.png"
            >{{ t('logo.whiteOnTransparent.downloadPng400x') }}</a
          >
          <a
            href="/assets/mariage/agnes-et-florent-transparent.svg"
            class="typography-link"
            download="logo-transparent-agnes-florent.svg"
            >{{ t('logo.whiteOnTransparent.downloadSvg') }}</a
          >
        </article>

        <article class="logo-card">
          <h3 class="typography-title-3">
            {{ t('logo.whiteOnViolet.title') }}
          </h3>
          <img alt="" src="/assets/mariage/agnes-et-florent-violet.svg" />
          <a
            href="/assets/mariage/agnes-et-florent-violet.png"
            class="typography-link"
            download="logo-violet-agnes-florent.png"
            >{{ t('logo.whiteOnViolet.downloadPng') }}</a
          >
          <a
            href="/assets/mariage/agnes-et-florent-violet-400x.png"
            class="typography-link"
            download="logo-violet-agnes-florent.400x.png"
            >{{ t('logo.whiteOnViolet.downloadPng400x') }}</a
          >
          <a
            href="/assets/mariage/agnes-et-florent-violet.svg"
            class="typography-link"
            download="logo-violet-agnes-florent.svg"
            >{{ t('logo.whiteOnViolet.downloadSvg') }}</a
          >
        </article>

        <article class="logo-card">
          <h3 class="typography-title-3">
            {{ t('logo.whiteOnTransparentWithDate.title') }}
          </h3>
          <img
            alt=""
            src="/assets/mariage/agnes-et-florent-19-08-2023-transparent.svg"
          />
          <a
            href="/assets/mariage/agnes-et-florent-19-08-2023-transparent.svg"
            class="typography-link"
            download="logo-transparent-date-agnes-florent.svg"
            >{{ t('logo.whiteOnTransparentWithDate.downloadSvg') }}</a
          >
        </article>

        <article class="logo-card">
          <h3 class="typography-title-3">
            {{ t('logo.whiteOnVioletWithDate.title') }}
          </h3>
          <img
            alt=""
            src="/assets/mariage/agnes-et-florent-19-08-2023-violet.svg"
          />
          <a
            href="/assets/mariage/agnes-et-florent-19-08-2023-violet.svg"
            class="typography-link"
            download="logo-white-date-agnes-florent.svg"
            >{{ t('logo.whiteOnVioletWithDate.downloadSvg') }}</a
          >
        </article>
      </div>
    </section>
    <hr />

    <Mariage00DesignSystemColorsDoc />
    <hr />

    <Mariage00DesignSystemTypographyDoc />
    <hr />

    <Mariage00DesignSystemButtonDoc />
    <hr />

    <Mariage00DesignSystemIconsDoc />
    <hr />

    <Mariage00DesignSystemTabsDoc />
    <hr />

    <Mariage00DesignSystemAnimationDoc />
    <hr />
  </main>
</template>

<script setup lang="js">
definePageMeta({
  layout: 'mariage',
})

const { t } = useI18n({
  useScope: 'locale',
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
  ogUrl: 'https://berthelot.io/mariage/design',
})
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
</style>
