<i18n lang="json">
{
  "fr": {
    "name": "Florent Berthelot",
    "meta": {
      "title": "Florent Berhtelot - Développeur Web",
      "description": "Mon site où tu retrouvera mes articles, supports de cours, conférences, ..."
    },
    "home": {
      "tagline": "Prêcheur des Design System et des programmes bien testés",
      "presentation": {
        "p1": "Je suis passionné du Web et des technologies qui gravitent autour. J'aime le W3C, le TC39 (quand il ne smoosh pas devant moi), le WhatWG, les frameworks JS (React, Vue.js, Node.js, Angular, ...) et la vanille.",
        "p2": "Transmettre ma passion pour l'artisanat web occupe une part importante de mon travail de développeur (meetups, formations, conférences, encadrement de stagiaires).",
        "p3": "Vive le web, Vive le JS et Vive l'artisanat&nbsp;!"
      }
    },
    "nav": {
      "articles": "Articles",
      "courses": "Cours",
      "talks": "Talks",
      "activities": "Activités"
    }
  },
  "en": {
    "name": "Florent Berthelot",
    "meta": {
      "title": "Florent Berhtelot - Web Developer",
      "description": "You will find here my articles, courses, conferences talks, ..."
    },
    "home": {
      "tagline": "Design system and well-tested programs evangelist",
      "presentation": {
        "p1": "I love Web and all related technologies. I love the W3C, TC39, WhatWG, all JS frameworks (React, Vue.js, Node.js, Angular, ...) and vanilla because they allow me to learn everyday.",
        "p2": "Sharing my passion for web craftsmanship is an important part of my developer job (Meetup, Courses, Conferences, training interns).",
        "p3": "Long live the Web, JS and Craftsmanship!"
      }
    },
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
  <div
    class="container"
    :class="{ 'container__explision-ended': !videoIsRunning }"
  >
    <video
      autoplay
      muted
      class="explosion"
      :class="{ explosion__hidden: !videoIsRunning }"
      @ended="explosionEnd()"
    >
      <source src="/assets/explosion.mp4" type="video/mp4" />
    </video>

    <header class="header">
      <div class="header--1-level">
        <BerthelotSystemAvatar
          front-src="/assets/florent/avatar.jpg"
          front-alt="Une photo de Florent avec des lunettes de soleil oranges."
          back-src="/assets/florent/joker.jpg"
          back-alt="Une photo du joker, un personnage que j'aime beaucoup car toujours souriant."
        ></BerthelotSystemAvatar>
        <h1 class="typo_title">
          {{ t('name') }}
        </h1>
        <BerthelotSystemAvatar
          front-src="/assets/florent/avatar2.gif"
          front-alt="Une photo de Florent avec des lunettes de soleil oranges."
          back-src="/assets/florent/joker.jpg"
          back-alt="Une photo du joker, un personnage que j'aime beaucoup car toujours souriant."
        ></BerthelotSystemAvatar>
      </div>

      <h2 class="typo_title--small header--tagline">
        {{ t('home.tagline') }}
      </h2>

      <FlorentLanguageSwitcher
        :class="{ 'language-switcher__visible': !videoIsRunning }"
        class="language-switcher"
      />
    </header>

    <main
      :class="{ 'main-content__visible': !videoIsRunning }"
      class="main-content"
    >
      <nav v-if="!videoIsRunning" class="main-links">
        <ul>
          <li>
            <nuxtLink :to="localePath('/articles')">
              <BerthelotSystemButtonGrenade component="span">
                {{ t('nav.articles') }}
              </BerthelotSystemButtonGrenade>
            </nuxtLink>
          </li>
          <li>
            <nuxtLink :to="localePath('/courses')">
              <BerthelotSystemButtonGrenade :throw-in="200" component="span">
                {{ t('nav.courses') }}
              </BerthelotSystemButtonGrenade>
            </nuxtLink>
          </li>
          <li>
            <nuxtLink :to="localePath('/talks')">
              <BerthelotSystemButtonGrenade :throw-in="550" component="span">
                {{ t('nav.talks') }}
              </BerthelotSystemButtonGrenade>
            </nuxtLink>
          </li>
          <li>
            <nuxtLink :to="localePath('/activities')">
              <BerthelotSystemButtonGrenade component="span" :throw-in="300">
                {{ t('nav.activities') }}
              </BerthelotSystemButtonGrenade>
            </nuxtLink>
          </li>
        </ul>
      </nav>
      <BerthelotSystemCard class="presentation">
        <p class="typo_default paragraph">{{ t('home.presentation.p1') }}</p>
        <p class="typo_default paragraph">{{ t('home.presentation.p2') }}</p>
        <p class="typo_default paragraph">{{ t('home.presentation.p3') }}</p>
      </BerthelotSystemCard>
    </main>
    <FlorentFooter
      class="footer"
      :class="{ footer__visible: !videoIsRunning }"
    />
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const { t } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()

const videoIsRunning = ref(true)
const explosionEnd = () => (videoIsRunning.value = false)

useSeoMeta({
  ogType: 'profile',
  ogProfileFirstName: 'Florent',
  ogProfileLastName: 'Berthelot',
  ogProgileGender: 'male',
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

<style scoped>
.container {
  height: 100%;
  background-color: black;
  transition: all 2s ease;
  overflow-y: hidden;
}
.container__explision-ended {
  background-color: var(--color-black);
}
.explosion {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
.explosion__hidden {
  display: none;
}

.header {
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header--1-level {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin: 1rem 20%;
  opacity: 0;
  transform: scale(0);
  text-align: center;
  animation: headerAppear 3s linear 1s 1 forwards;
}

.header--tagline {
  text-align: center;
  opacity: 0;
  transform: scale(0);
  animation: taglineAppear 3s linear 5s 1 forwards;
}

.language-switcher {
  opacity: 0;
  transition: all 4s linear;

  position: absolute;
  right: 1rem;
  top: 1rem;
}

.language-switcher__visible {
  opacity: 1;
}

.main-content {
  height: calc(70% - 5rem - 1px);
  padding: 1rem;
  box-sizing: border-box;
}

.presentation {
  width: 40%;
  margin: 3rem auto;
  transition: all 3s ease;
  opacity: 0;
}
.main-content__visible .presentation {
  opacity: 1;
}

.main-links {
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
}
.main-links ul {
  width: 60%;
  margin: 0 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.main-links ul a {
  text-decoration: none;
  display: block;
  margin: 0 1px;
}
.main-links ul a:focus {
  outline: none;
}

.paragraph {
  margin-top: 1rem;
}
.paragraph:first-child {
  margin-top: 0;
}

.footer {
  opacity: 0;
  transform: translateY(100%);
  transition: all 4s ease;
}

.footer__visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes headerAppear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes taglineAppear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 1200px) {
  .header--1-level {
    width: 90%;
    margin: 1rem 5%;
  }
}

@media screen and (max-width: 850px) {
  .container {
    overflow-y: auto;
  }
  .header {
    height: auto;
  }
  .header--1-level {
    width: 100%;
    margin: 0;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    flex-direction: column;
  }
  .header--1-level .avatar {
    display: none;
  }

  .header--tagline {
    margin: 0 3rem;
    text-align: center;
  }

  .main-content {
    height: auto;
    margin-top: 1rem;
  }
  .presentation {
    width: 90%;
  }

  .main-links {
    margin-top: 1rem;
  }

  .main-links ul {
    flex-direction: column;
  }

  .main-links ul a {
    margin: 1rem;
  }
}

@media screen and (min-width: 850px) and (min-width: 650px) {
  .container {
    min-height: 675px;
    overflow: auto;
  }
}
</style>
