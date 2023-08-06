<i18n>
{
  "fr": {
    "title": "Partage de photos et vidéos",
    "paragraph": "Partagez nous vos photos et vidéos du mariage via ce site, les photos seront projetées en live pendant la soirée ! 🤩",
    "share": "Partager maintenant"
  },
  "en": {
    "title": "Photos and videos sharing",
    "paragraph": "Share your photos and videos of the wedding through this website, the photos will be shown live during the evening ! 🤩",
    "share": "Share now"
  }
}
</i18n>

<template>
  <section class="ask-photo">
    <h3 class="title">{{ $t('title') }}</h3>

    <div class="ask-photo-content">
      <img class="illustration" src="./assets/patchwork.png" alt="" />
      <div class="rightContainer">
        <p>{{ $t('paragraph') }}</p>
        <nuxt-link
          v-if="!isAnswered"
          :to="localePath(`/mariage/photo`)"
          class="button"
        >
          {{ $t('share') }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ask-photo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 2rem;

  background: #2e3f4b;
  color: #fffbf8;
  box-sizing: border-box;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
}

.ask-photo-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}

.ask-photo-content p {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.6rem;
}

.rightContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.illustration {
  width: 50%;
  border-radius: 0.5rem;
  height: auto;
  display: block;
}

@media screen and (max-width: 900px) {
  .ask-photo {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
    text-align: center;
  }

  .ask-photo-content {
    display: flex;

    flex-direction: column;
    margin-top: 1rem;
  }

  .illustration {
    width: 100%;
  }
}
</style>
