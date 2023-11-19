<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Agnès Berthelot",
      "description": "Product Owner"
    },
    "title": "Agnès Berthelot",
    "tagline": "Product Owner",
    "avatarAlt": "Une photo d'agnès qui a un large sourire.",
    "linkedin": "Linkedin",
    "Twitter": "Twitter"
  },
  "en": {
    "meta": {
      "title": "Agnès Berthelot",
      "description": "Product Owner"
    },
    "title": "Agnès Berthelot",
    "tagline": "Product Owner",
    "avatarAlt": "A photo of Agnès with a big smile.",
    "linkedin": "Linkedin",
    "Twitter": "Twitter"
  }
}
</i18n>

<template>
  <main class="agnes_home">
    <h1 class="typo_title agnes_home__title">{{ t('title') }}</h1>

    <img
      class="agnes_home__avatar"
      src="/assets/agnes/avatar.png"
      :front-alt="t('avatarAlt')"
    />

    <h2 class="typo_title--small header--tagline">
      {{ t('tagline') }}
    </h2>

    <footer class="footer">
      <ul class="social-network">
        <li>
          <a
            class="typo_default typo_white"
            rel="noopener"
            target="_blank"
            href="https://twitter.com/agnes_vallee"
          >
            <img src="/assets/twitter.svg" alt="" />
            {{ t(`Twitter`) }}
          </a>
        </li>
        <li>
          <a
            class="typo_default typo_white"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/agn%C3%A8s-berthelot/"
          >
            <img src="/assets/linkedin.svg" alt="" />
            {{ t(`linkedin`) }}
          </a>
        </li>
      </ul>
    </footer>
  </main>
</template>

<script setup lang="js">
const { t } = useI18n({
  useScope: 'local',
})

definePageMeta({
  layout: 'agnes',
})

useSeoMeta({
  ogType: 'profile',
  ogProfileFirstName: 'Agnès',
  ogProfileLastName: 'Berthelot',
  ogProgileGender: 'female',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
  ogUrl: 'https://berthelot.io/',
})
</script>

<style scoped lang="css">
.agnes_home {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.agnes_home__title {
  margin-top: 2rem;
}

.agnes_home__avatar {
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid var(--color-dark);
  height: 5rem;
  box-sizing: border-box;
}

.social-network {
  display: flex;
  justify-content: flex-end;
}
.social-network a {
  position: relative;
  display: inline-block;
  margin: 0 0 -1px 0;
  border: 1px solid var(--color-dark);
  border-bottom: 1px solid var(--color-black);
  background: var(--color-dark);
  cursor: pointer;
  padding: 1rem;
  width: 6rem;
  height: 5rem;
  transition: all 0.5s ease;
  box-shadow: 0 -0.25rem 0.25rem var(--color-black);
  transform-origin: bottom center;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  font-size: 0.8rem;
}

.social-network a img {
  height: 2rem;
  padding: 0 1rem;
}

.social-network a:hover,
.social-network a:focus {
  border: 1px solid var(--color-light);
  border-bottom: 1px solid var(--color-black);
  transform: scale(1.3);
  box-shadow: 0 0rem 2rem var(--color-light);
  outline: none;
  z-index: 10;
}

@media screen and (max-width: 850px) {
  .social-network {
    justify-content: center;
    padding: 0;
  }
  .social-network a {
    font-size: 0.7rem;
    width: 4.5rem;
  }
  .social-network a {
    padding: 0.5rem 0;
  }
}
</style>
