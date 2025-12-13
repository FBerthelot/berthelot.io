<i18n lang="json">
{
  "fr": {
    "nav": {
      "articles": "Articles",
      "courses": "Cours",
      "talks": "Talks",
      "activities": "Activités"
    }
  },
  "en": {
    "nav": {
      "articles": "Articles",
      "courses": "Courses",
      "talks": "Talks",
      "activities": "Activities"
    }
  }
}
</i18n>

<template>
  <header class="header">
    <div class="first_row">
      <nuxt-link
        :to="localePath(backLink)"
        class="home_link"
        aria-label="Back to home"
      >
        <BerthelotSystemAvatar
          front-src="/assets/florent/avatar.jpg"
          front-alt="Une photo de Florent avec des lunettes de soleil oranges."
          back-src="/assets/florent/joker.jpg"
          back-alt="Une photo du joker, un personnage que j'aime beaucoup car toujours souriant."
        />
      </nuxt-link>

      <h1 class="typo_title title">
        {{ title }}
      </h1>

      <FlorentLanguageSwitcher class="language-switcher" />
    </div>

    <nav class="tabs">
      <nuxt-link
        :to="localePath('/articles')"
        :tabindex="$route.path.includes('/articles') ? -1 : 0"
        class="tab"
        :class="{ 'tab--active': $route.path.includes('/articles') }"
      >
        {{ t('nav.articles') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('/courses')"
        :tabindex="$route.path.includes('/courses') ? -1 : 0"
        class="tab"
        :class="{ 'tab--active': $route.path.includes('/courses') }"
      >
        {{ t('nav.courses') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('/talks')"
        :tabindex="$route.path.includes('/talks') ? -1 : 0"
        class="tab"
        :class="{ 'tab--active': $route.path.includes('/talks') }"
      >
        {{ t('nav.talks') }}
      </nuxt-link>
      <nuxt-link
        :to="localePath('/activities')"
        :tabindex="$route.path.includes('/activities') ? -1 : 0"
        class="tab"
        :class="{ 'tab--active': $route.path.includes('/activities') }"
      >
        {{ t('nav.activities') }}
      </nuxt-link>
    </nav>
  </header>
</template>

<script setup lang="js">
import { useLocalePath } from '#imports'

defineProps({
  title: {
    type: String,
    required: true,
  },
  backLink: {
    type: String,
    required: false,
    default: '/',
  },
})

const { t } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()
</script>

<style scoped>
.header {
  height: 9rem;
  display: flex;
  flex-direction: column;
}

.first_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home_link {
  margin: 0.5rem;
}

.language-switcher {
  align-self: flex-start;
  margin: 0.5rem;
  padding: 0.5rem;
}

.tabs {
  margin-top: -2rem;
}

@media screen and (max-width: 850px) {
  .header {
    height: auto;
  }

  .language-switcher {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .first_row {
    height: auto;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .title {
    width: auto;
    text-align: center;
    margin-bottom: 1rem;
  }

  #layout_default .header .tabs {
    align-self: center;
    justify-content: center;
    padding-right: 0;
    margin-top: 0;
  }

  #layout_default .header .tabs .tab {
    padding: 0.5rem;
    margin: 0 0.5rem -1px 0.5rem;
    width: auto;
    font-size: 0.8rem;
  }
}
</style>
