<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "{title} - Florent Berthelot"
    }
  },
  "en": {
    "meta": {
      "title": "{title} - Florent Berthelot"
    }
  }
}
</i18n>

<template>
  <div v-if="data" id="article-page">
    <FlorentHeader :title="data.title" back-link="/articles/" />

    <ContentRenderer v-if="data" :value="data" class="typo_default article">
    </ContentRenderer>

    <FlorentFooter />
  </div>
</template>

<script setup lang="js">
const route = useRoute()
const { t, locale } = useI18n({
  useScope: 'local',
})

const { data, error } = await useAsyncData(
  `page-data-${locale.value}-${route.params.slug}`,
  () =>
    queryCollection('articles')
      .where('slug', '=', route.params.slug)
      .where('locale', '=', locale.value)
      .first(),
)

if (error.value?.statusCode === 404) {
  await navigateTo('/404', { replace: true })
} else if (error.value?.statusCode) {
  await navigateTo('/500', { replace: true })
}

useSeoMeta(
  !data
    ? {}
    : {
        ogType: 'article',
        title: t('meta.title', { title: data.value?.title }),
        ogTitle: t('meta.title', { title: data.value?.title }),
        twitterTitle: t('meta.title', { title: data.value?.title }),
        description: data.value?.description,
        ogDescription: data.value?.description,
        twitterDescription: data.value?.description,
        ogImage: data.value?.image,
        twitterImage: data.value?.image,
        twitterCard: 'summary_large_image',
        ogUrl: `https://berthelot.io/articles/${route.params.slug}`,

        ogArticlePublishedTime: data.value?.createdDate,
        ogArticleModifiedTime: data.value?.modifiedDate,
        ogArticleAuthor: 'https://berthelot.io',
      },
)
</script>

<style scoped>
#article-page {
  height: 100%;
}

.article {
  box-sizing: border-box;
  min-height: calc(100% - 14rem - 1px);
  width: 50%;
  margin: 3rem 25% 2rem 25%;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 850px) {
  .article {
    width: 100%;
    padding: 2rem 1rem;
    margin: 0;
  }
}
</style>

<style>
.article h2,
.article h3,
.article h4,
.article h5,
.article h6 {
  font-family: var(--font-cursive);
  margin: 0.5rem;
}
.article h2 {
  font-size: 2rem;
  line-height: 2.4rem;
}
.article h3 {
  font-size: 1.5rem;
  line-height: 2rem;
}
.article h4 {
  font-size: 1.2rem;
  line-height: 1.5rem;
}
.article h5 {
  font-size: 1rem;
  line-height: 1.3rem;
}
.article h6 {
  font-size: 0.7rem;
  line-height: 1rem;
}

.article p {
  margin: 1rem;
  line-height: 1.3rem;
}

.article a {
  color: var(--color-light);
  transition: all 0.3s ease;
  text-decoration: none;
}

.article a:hover {
  text-decoration: underline;
}
.article a:active {
  color: var(--color-dark);
}

.article strong {
  font-weight: bold;
}
.article em {
  font-style: italic;
}

.article blockquote {
  border-left: 2px solid var(--color-light);
  padding-left: 0.5rem;
}

.article code {
  padding: 0.125rem 0.25rem;
  background-color: var(--color-dark);
  border-radius: 0.25rem;
}

.article pre {
  display: block;
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 0.75rem;
  word-break: break-all;
  word-wrap: break-word;
  background-color: var(--color-white);
  border: 1px solid var(--color-light);
  border-radius: 0.125rem;
  overflow-x: auto;
}

.article pre code {
  padding: 0;
  border-radius: 0;
}

.article ul {
  list-style: disc;
  padding-left: 3rem;
}

.article ol {
  list-style: decimal;
  padding-left: 3rem;
}

.article img {
  vertical-align: middle;
  max-width: 35%;
}

.article .main-image {
  width: 100%;
  max-width: 100%;
}

.article table {
  margin: 2rem;
}

.article thead tr {
  border-bottom: 2px solid var(--color-light);
  font-weight: bold;
}
.article th {
  padding: 0.5rem;
}

.article tbody tr:not(:last-child) {
  border-bottom: 2px solid var(--color-dark);
}
.article td {
  padding: 0.5rem;
}
</style>
