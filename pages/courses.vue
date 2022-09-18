<i18n>
{
  "fr": {
    "courses": {
        "title": "Supports de formations",
        "meta_description": "Supports de cours que j'utilise pour former au développement web."
      }
  },
  "en": {
    "courses": {
      "title": "Courses",
      "meta_description": "I use those materials to give courses on Web development."
    }
  }
}
</i18n>

<template>
  <div id="courses-page">
    <Header :title="$t('courses.title')" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        :key="subject.name"
        :link="subject.url"
        class="subject"
      >
        <CardTitle>{{ subject.name }}</CardTitle>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <Typography><span v-html="subject.description"></span></Typography>
        <CardMeta>{{ subject.metaData }}</CardMeta>
      </Card>
    </main>

    <Footer />
  </div>
</template>

<script>
import { Card, CardTitle, CardMeta } from '~/components/card'
import { Typography } from '~/components/typography'
import Header from '~/components/header'
import Footer from '~/components/footer'

import { courses } from '~/assets/courses'

export default {
  components: {
    Card,
    CardTitle,
    CardMeta,
    Typography,
    Header,
    Footer,
  },
  layout: 'default',
  data() {
    return {
      subjects: courses,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('courses.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('courses.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('courses.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('courses.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('courses.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('courses.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/courses',
        },
      ],
    }
  },
}
</script>

<style scoped>
#courses-page {
  height: 100%;
}

.subjects {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  min-height: calc(100% - 14rem - 1px);
}

.subject {
  margin: 2rem;
  width: 25%;
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
