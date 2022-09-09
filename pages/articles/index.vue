<i18n>
{
  "fr": {
    "articles": {
      "title": "Blog d'un artisan du web",
      "meta_description": "J'écris sur le web, les tests, le JavaScript, les designs systems, ..."
    }
  },
  "en": {
    "articles": {
      "title": "Blog",
      "meta_description": "I write on Web, tests, JavaScript, Design Systems, ..."
    }
  }
}
</i18n>

<template>
  <div id="articles-page">
    <Header :title="$t('articles.title')" />

    <main class="subjects">
      <Card
        v-for="subject in subjects"
        :key="subject.name"
        :link="`/articles/${subject.slug}`"
        internal-link
        class="subject"
      >
        <CardTitle>{{ subject.name }}</CardTitle>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <Typography><span v-html="subject.description"></span></Typography>
        <no-ssr>
          <CardMeta>{{
            subject.date.toLocaleString($i18n.locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}</CardMeta>
        </no-ssr>
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

import { articles } from '~/assets/articles'

export default {
  components: {
    Card,
    CardTitle,
    CardMeta,
    Typography,
    Header,
    Footer,
  },
  data() {
    return {
      subjects: articles,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('articles.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('articles.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('articles.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('articles.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('articles.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('articles.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/articles',
        },
      ],
    }
  },
}
</script>

<style scoped>
#articles-page {
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
