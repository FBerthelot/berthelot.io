<i18n lang="json">
{
  "fr": {
    "title": "Icons",
    "church": "Church",
    "driver": "Driver",
    "just-maried": "Just maried",
    "mariage-civil": "Mariage Civil",
    "no-network": "No network",
    "photo": "Photo",
    "download": "Download",
    "play": "play",
    "externalLink": "External link"
  },
  "en": {
    "title": "Icons",
    "church": "Church",
    "driver": "Driver",
    "just-maried": "Just maried",
    "mariage-civil": "Mariage Civil",
    "no-network": "No network",
    "photo": "Photo",
    "download": "Download",
    "play": "play",
    "externalLink": "External link"
  }
}
</i18n>

<template>
  <section>
    <h1 class="typography-title-2">{{ t('title') }}</h1>

    <article class="card card-flex">
      <figure>
        <img src="./church.svg" alt="Church Icon" />
        <figcaption>{{ t('church') }}</figcaption>
      </figure>

      <figure>
        <img alt="Driver icon" src="./driver.svg" />
        <figcaption>{{ t('driver') }}</figcaption>
      </figure>
      <figure>
        <img alt="Just maried icon" src="./just-maried.svg" />
        <figcaption>{{ t('just-maried') }}</figcaption>
      </figure>
      <figure>
        <img alt="Mariage Civil icon" src="./mariage_civil.svg" />
        <figcaption>{{ t('mariage-civil') }}</figcaption>
      </figure>
      <figure>
        <img alt="No network icon" src="./no_network.png" />
        <figcaption>{{ t('no-network') }}</figcaption>
      </figure>
      <figure>
        <img alt="Photo icon" src="./photo.svg" />
        <figcaption>{{ t('photo') }}</figcaption>
      </figure>
      <figure>
        <img alt="Download icon" src="./telecharger.png" />
        <figcaption>{{ t('download') }}</figcaption>
      </figure>
      <figure>
        <img alt="Play icon" src="./play.png" />
        <figcaption>{{ t('play') }}</figcaption>
      </figure>
      <figure>
        <img alt="External Link icon" src="./external-link.png" />
        <figcaption>{{ t('externalLink') }}</figcaption>
      </figure>
    </article>
  </section>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'local',
})
</script>

<style scoped>
section {
  margin: 1rem 0;
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
  gap: 2rem;
  text-align: center;
}

img {
  width: 5rem;
  height: 5rem;
}
</style>
