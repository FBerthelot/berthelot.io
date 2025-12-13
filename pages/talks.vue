<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Sujets de conférences - Florent Berthelot",
      "description": "Liste des conférences que j'ai eu la chance de donner."
    },

    "talks": {
      "title": "Sujets de conférences",
      "video_title": "Vidéo de la conférence",
      "slide_link": "Lien vers les slides",
      "alternative": "L'ensemble des versions",
      "alternative_video": "Vidéo",
      "alternative_slide": "Slides",
      "alternative-name-separator": ":",
      "alternative-date-separator": "-"
    }
  },
  "en": {
    "meta": {
      "title": "Conferences talks - Florent Berthelot",
      "description": "List of conferences I had the chance to lead."
    },

    "talks": {
      "title": "Conferences talks",
      "video_title": "Video of the conference",
      "slide_link": "Slide link",
      "alternative": "Alternative versions",
      "alternative_video": "Video",
      "alternative_slide": "Slides",
      "alternative-name-separator": ":",
      "alternative-date-separator": "-"
    }
  }
}
</i18n>

<template>
  <div id="talks-page">
    <FlorentHeader :title="t('talks.title')" />

    <main class="subjects">
      <BerthelotSystemCard
        v-for="subject in subjects"
        :key="subject.name"
        class="subject"
      >
        <h2 class="typo_title--small typo-light talk_title">
          {{ subject.name }}
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span class="typo_default" v-html="subject.description" />
        <span class="card_meta typo_meta-info">{{ subject.metaData }}</span>

        <iframe
          v-if="subject.video"
          class="card_video"
          width="560"
          height="315"
          :title="t('talks.video_title')"
          :src="subject.video"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            encrypted-media;
            gyroscope;
            picture-in-picture;
          "
          allowfullscreen
        />

        <a
          class="typo_meta-info--link typo_white main_link"
          :href="subject.slides"
          target="_blank"
          rel="noopener"
          >{{ t('talks.slide_link') }}</a
        >

        <BerthelotSystemCardSecondary v-if="subject.alternatives">
          <h4 class="typo_title--extra-small">
            {{ t('talks.alternative') }}
          </h4>
          <ul>
            <li
              v-for="alternative in subject.alternatives"
              :key="alternative.name"
              class="typo_default typo_white"
            >
              {{ alternative.name }}{{ t('talks.alternative-name-separator') }}
              <a
                v-if="alternative.video"
                class="typo_default typo_white"
                target="_blank"
                rel="noopener"
                :href="alternative.video"
              >
                {{ t('talks.alternative_video') }}
              </a>
              &nbsp;
              <a
                v-if="alternative.slide"
                class="typo_default typo_white"
                target="_blank"
                rel="noopener"
                :href="alternative.slide"
              >
                {{ t('talks.alternative_slide') }}
              </a>
              {{ t('talks.alternative-date-separator') }}
              {{ alternative.date }}
            </li>
          </ul>
        </BerthelotSystemCardSecondary>
      </BerthelotSystemCard>
    </main>

    <FlorentFooter />
  </div>
</template>

<script setup lang="js">
import { talks } from '~/assets/talks'

const { t } = useI18n({
  useScope: 'local',
})

const subjects = ref(talks)

useSeoMeta({
  ogType: 'website',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
  ogUrl: 'https://berthelot.io/talks',
})
</script>

<style scoped>
#talks-page {
  height: 100%;
}

.subjects {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  box-sizing: border-box;
  min-height: calc(100% - 14rem - 1px);
}

.subject {
  margin: 2rem;
  width: 55%;
}

.subject .main_link {
  text-align: center;
  display: inline-block;
  width: 100%;
  margin-bottom: 1rem;
}

.talk_title {
  margin-bottom: 0.75rem;
}

@media screen and (max-width: 850px) {
  .subjects {
    padding: 1rem;
  }

  .subject {
    margin: 1rem;
    width: 90%;
  }
}
</style>
