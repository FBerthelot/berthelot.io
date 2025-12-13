<i18n lang="json">
{
  "fr": {
    "title": "Blog d'un artisan du web",
    "meta": {
      "title": "Blog d'un artisan du web - Florent Berthelot",
      "description": "J'écris sur le web, les tests, le JavaScript, les designs systems, ..."
    },
    "noArticle": "Il n'y a pas d'article pour le moment"
  },
  "en": {
    "title": "Blog",
    "meta": {
      "title": "Blog of a web craftsman guy - Florent Berthelot",
      "description": "I write on Web, tests, JavaScript, Design Systems, ..."
    },
    "noArticle": "There is no blog post for now."
  }
}
</i18n>

<template>
  <div id="articles-page">
    <FlorentHeader :title="t('title')" />

    <main class="subjects">
      <template v-if="data">
        <BerthelotSystemCard
          v-for="article in data"
          :key="article.slug"
          :link="`/articles/${article.slug}`"
          internal-link
          class="subject"
        >
          <h2 class="typo_title--small typo_light subject-title">
            {{ article.title }}
          </h2>
          <span class="typo_default typo_white">{{ article.description }}</span>
          <time class="card_meta typo_meta-info typo_white">
            {{
              new Date(article.createdDate).toLocaleString($i18n.locale, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }}
          </time>
        </BerthelotSystemCard>
      </template>
      <strong v-if="!data?.length">{{ t('noArticle') }}</strong>
      <strong v-if="error">{{ error }}</strong>
    </main>

    <FlorentFooter />
  </div>
</template>

<script setup lang="js">
const { t, locale } = useI18n({
  useScope: 'local',
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
  ogUrl: 'https://berthelot.io/articles/',
})

const { data, error } = await useAsyncData(
  `navigation-${locale.value}`,
  async () => {
    return queryCollection('articles')
      .select('id', 'title', 'slug', 'description', 'createdDate')
      .where('locale', '=', locale.value)
      .where('draft', '<>', true)
      .order('createdDate', 'DESC')
      .all()
  },
)
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

.subject-title {
  margin-bottom: 1rem;
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
