<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Merci ! - Mariage de Agnès et Florent",
      "description": "Nous nous sommes dit oui, voici les vidéos et photos de notre union."
    },
    "video_not_supported": "Bah alors on a un vieux navigateur qui ne supporte pas la lecture de vidéos ?",
    "video_not_supported_link": "Clique sur ce lien pour télécharger la vidéo",
    "play_long_movie": "Vidéo longue",
    "play_short_movie": "Vidéo courte",
    "see_photos": "Voir les photos"
  },
  "en": {
    "meta": {
      "title": "Thank you! - Agnès and Florent wedding",
      "description": "We said yes, here is the movies and photos of our wedding."
    },
    "video_not_supported": "Your browser is so old it cannot handle playing the video... Come on, update it!",
    "video_not_supported_link": "Click on the link to download the video",
    "play_long_movie": "Long video",
    "play_short_movie": "Short video",
    "see_photos": "See photos"
  }
}
</i18n>

<template>
  <div id="wedding-page">
    <div class="video_container">
      <video
        ref="longMovie"
        controls
        :class="{
          video: true,
          'video--displayed': pageStatus.videoToPlay === 'long',
        }"
        @pause="onPauseMovie"
        @play="onPlayMovie"
      >
        <source
          src="https://mariage.berthelot.io/Agnès & Florent Le film.m4v"
          type="video/mp4"
        />
        <p>
          {{ t('video_not_supported') }}
          <a href="https://mariage.berthelot.io/Agnès & Florent Le film.m4v">{{
            t('video_not_supported_link')
          }}</a>
        </p>
      </video>

      <video
        ref="shortMovie"
        controls
        :class="{
          video: true,
          'video--displayed': pageStatus.videoToPlay === 'short',
        }"
        @pause="onPauseMovie"
        @play="onPlayMovie"
      >
        <source
          src="https://mariage.berthelot.io/Agnès & Florent version courte.m4v"
          type="video/mp4"
        />
        <p>
          {{ t('video_not_supported') }}
          <a
            href="https://mariage.berthelot.io/Agnès & Florent version courte.m4v"
            >{{ t('video_not_supported_link') }}</a
          >
        </p>
      </video>
    </div>

    <div
      class="video-overlay"
      :class="{ ['video-overlay--displayed']: !pageStatus.isPlayed }"
    >
      <Mariage00DesignSystemAnimation
        :animate="false"
        :mode="'sunset'"
        :reduce-at-the-end="false"
      />

      <div class="action">
        <button
          ref="shortMovieButton"
          class="button"
          @click="playMovie('short')()"
        >
          <img
            alt=""
            src="../../components/mariage/00_design-system/icons/play.png"
          />
          {{ t('play_short_movie') }}
        </button>
        <button
          ref="longMovieButton"
          class="button"
          @click="playMovie('long')()"
        >
          <img
            alt=""
            src="../../components/mariage/00_design-system/icons/play.png"
          />
          {{ t('play_long_movie') }}
        </button>
        <a
          href="https://www.jingoo.com/client/key/5bd90e/40dcb86a/"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
        >
          <img
            alt=""
            src="../../components/mariage/00_design-system/icons/external-link.png"
          />
          {{ t('see_photos') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { onMounted } from 'vue'

definePageMeta({
  layout: 'mariage',
})

const { t } = useI18n({
  useScope: 'locale',
})

const pageStatus = ref({
  isPlayed: false,
  videoToPlay: 'long',
})

const longMovie = ref(null)
const longMovieButton = ref(null)
const shortMovie = ref(null)
const shortMovieButton = ref(null)

const onPlayMovie = () => {
  pageStatus.value = {
    ...pageStatus.value,
    isPlayed: true,
  }
}
const onPauseMovie = () => {
  pageStatus.value = {
    ...pageStatus.value,
    isPlayed: false,
  }
  const playingVideoButton =
    pageStatus.value.videoToPlay === 'long' ? longMovieButton : shortMovieButton

  playingVideoButton.value.focus()
}
const playMovie = (videoToPlay) => () => {
  pageStatus.value = {
    ...pageStatus.value,
    videoToPlay,
  }
  const playingVideo =
    pageStatus.value.videoToPlay === 'long' ? longMovie : shortMovie

  playingVideo.value.play()
  playingVideo.value.focus()
}

useSeoMeta({
  ogType: 'website',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
  ogUrl: 'https://berthelot.io/mariage/',
})

onMounted(async () => {
  longMovieButton.value.focus()

  window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
      const playingVideo =
        pageStatus.value.videoToPlay === 'long' ? longMovie : shortMovie
      const playingVideoButton =
        pageStatus.value.videoToPlay === 'long'
          ? longMovieButton
          : shortMovieButton
      if (pageStatus.value.isPlayed) {
        playingVideo.value.pause()
        playingVideoButton.value.focus()
      } else {
        playingVideo.value.play()
        playingVideo.value.focus()
      }
    }
  })

  await import('https://www.googletagmanager.com/gtag/js?id=G-5P3NE4GV44')
  window.dataLayer = window.dataLayer || [];
  window.gtag = () => { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-5P3NE4GV44');
})
</script>

<style scoped>
#wedding-page {
  width: 100%;
  height: 100%;
}

.video-overlay {
  position: absolute;
  width: 100%;
  top: -100vh;
  left: 0;
  transition: top 0.6s ease-out;
}

.video-overlay--displayed {
  top: 0;
}

.action {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
}

#wedding-page .action .button {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
}

.video_container {
  height: 100%;
  width: 100%;
  background-color: black;
}

.video {
  width: 100%;
  height: 100%;
  display: none;
}
.video--displayed {
  display: block;
}

@media (max-width: 750px) and (orientation: portrait) {
  .action {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;
  }
  #wedding-page .action .button {
    margin-top: 0;
  }
}

@media (max-width: 950px) and (orientation: landscape) {
  #wedding-page .action .button {
    margin-top: 2rem;
  }
}
</style>
