<i18n>
{
  "fr": {
    "talks": {
      "title": "Sujets de conférences",
      "meta_description": "Liste des conférences que j'ai eu la chance de donner.",
      "video_title": "Vidéo de la conférence",
      "slide_link": "Lien vers les slides",
      "alternative": "L'ensemble des versions",
      "alternative_video": "Vidéo",
      "alternative_slide": "Slides"
    }
  },
  "en": {
    "talks": {
      "title": "Conferences talks",
      "meta_description": "List of conferences I had the chance to lead.",
      "video_title": "Video of the conference",
      "slide_link": "Slide link",
      "alternative": "Alternative versions",
      "alternative_video": "Video",
      "alternative_slide": "Slides"
    }
  }
}
</i18n>

<template>
  <div id="talks-page">
    <Header :title="$t('talks.title')" />

    <main class="subjects">
      <Card v-for="subject in subjects" :key="subject.name" class="subject">
        <CardTitle>{{ subject.name }}</CardTitle>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{ subject.metaData }}</CardMeta>

        <CardVideo
          v-if="subject.video"
          :video="subject.video"
          :title="$t('talks.video_title')"
        />

        <CardLink :href="subject.slides" target="_blank" rel="noopener">{{
          $t('talks.slide_link')
        }}</CardLink>

        <CardSecondary v-if="subject.alternatives">
          <Typography variant="title--extra-small">
            {{ $t('talks.alternative') }}
          </Typography>
          <ul>
            <Typography
              v-for="alternative in subject.alternatives"
              :key="alternative.name"
              component="li"
            >
              <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text-->
              {{ alternative.name }}:
              <Typography
                v-if="alternative.video"
                component="a"
                target="_blank"
                rel="noopener"
                :href="alternative.video"
                >{{ $t('talks.alternative_video') }}</Typography
              >
              <Typography
                v-if="alternative.slide"
                component="a"
                target="_blank"
                rel="noopener"
                :href="alternative.slide"
                >{{ $t('talks.alternative_slide') }}</Typography
              >
              <!--eslint-disable-next-line @intlify/vue-i18n/no-raw-text-->
              {{ '-' }}
              {{ alternative.date }}
            </Typography>
          </ul>
        </CardSecondary>
      </Card>
    </main>

    <Footer />
  </div>
</template>

<script>
import {
  Card,
  CardTitle,
  CardMeta,
  CardVideo,
  CardLink,
  CardSecondary,
} from '~/components/card'
import { Typography } from '~/components/typography'
import Header from '~/components/header'
import Footer from '~/components/footer'
import { talks } from '~/assets/talks'

export default {
  components: {
    Card,
    CardTitle,
    CardMeta,
    CardVideo,
    CardLink,
    CardSecondary,
    Typography,
    Header,
    Footer,
  },
  data() {
    return {
      subjects: talks,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('talks.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('talks.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('talks.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('talks.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('talks.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('talks.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/talks',
        },
      ],
    }
  },
}
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
