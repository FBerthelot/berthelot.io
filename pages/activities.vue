<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Mes activités - Florent Berthelot",
      "description": "Je ne suis passioné et je travaille sur ces projets en parallèle."
    },
    "title": "Activités",
    "now": "Mes occupations du moment",
    "paused": "En pause",
    "abandonned": "Ça n'a pas marché 🥲",
    "statusPage": {
      "title": "Je maintient tous ces sites",
      "link": "https://status.berthelot.io/"
    },
    "coacha": {
      "name": "Coach'A",
      "p1": "Avec des amis, on développe une application de sport qui s'adapte un maximum aux utilisateurs et à leur environnement.",
      "p2": "Essayez l'application et n'hésitez pas à me faire des retours ! 😉",
      "status": "🚀 Beta public 🚀"
    },
    "component-test-utils": {
      "name": "Component-test-utils",
      "p1": "J'ai développé un outil entre enzyme et test-utils qui permet de tester des composants quelque soit le framework.",
      "p2": "Malheureusement, n'étant pas très doué en communication, j'ai échoué à l'étape de le faire connaitre.",
      "status": ""
    },
    "hero": {
      "name": "Hero",
      "p1": "Hero est l'acteur du paiement B2B en France.",
      "p2": "Je suis développeur au sein d'une équipe Crafts ultra motivée.",
      "status": "Levée de fonds de 12,4 millions faite ✅"
    },
    "wefacto": {
      "name": "WeFacto",
      "p1": "Ma société que j'ai créée pour exercer mon métier en freelance.",
      "p2": "J'interviens pour des audits et des formations autour de l'univers JavaScript.",
      "status": "Ouvert pour des audits et des formations"
    },
    "aqua-compose": {
      "name": "Aqua-Compose",
      "p1": "Passioné d'aquariophilie, j'ai développé une application pour peupler sereinnement son aquarium.",
      "p2": "",
      "status": "MVP développé, en pause."
    },
    "afterworks": {
      "name": "Afterworks",
      "p1": "J'ai pour habitude d'organiser des afterworks entre collègues environ une fois par mois.",
      "p2": "Intéressé ? Inscrivez-vous via le formulaire !",
      "status": "🍻"
    }
  },
  "en": {
    "meta": {
      "title": "My activities - Florent Berthelot",
      "description": "I'm passionated and I work on all these projects."
    },
    "title": "Activities",
    "now": "What I do now",
    "paused": "Paused",
    "abandonned": "It didn't work 🥲",
    "statusPage": {
      "title": "All these sites are maintained by me",
      "link": "https://status.berthelot.io/"
    },
    "coacha": {
      "name": "Coach'A",
      "p1": "With friends, we are making a sport app that adapts itself to it's users and their environnement.",
      "p2": "Try it, feedback welcome (only french available for now) 😉",
      "status": "🚀 Public beta 🚀"
    },
    "component-test-utils": {
      "name": "Component-test-utils",
      "p1": "I've coded a tool between Enzyme and Test-Utils to test components.",
      "p2": "Unfortunatly, I didn't done any marketing so I failed to get the project known.",
      "status": ""
    },
    "hero": {
      "name": "Hero",
      "p1": "Hero is a french fintech startup which is a standart for B2B payments.",
      "p2": "I'm developer in a team composed of very motivated Crafts.",
      "status": "We raised 12,4 millions ✅"
    },
    "wefacto": {
      "name": "WeFacto",
      "p1": "I've created this company to work as a contractor.",
      "p2": "I give audits and training in the JavaScript universe.",
      "status": "Open to make audits et give training"
    },
    "aqua-compose": {
      "name": "Aqua-Compose",
      "p1": "I'm passionated of aquarium, so I've developped an app to help populate a fish tank.",
      "p2": "",
      "status": "MVP developped, paused."
    },
    "afterworks": {
      "name": "Afterworks",
      "p1": "I've always organised afterworks with colleagues about one per month.",
      "p2": "Interested ? Register with the form !",
      "status": "🍻"
    }
  }
}
</i18n>

<template>
  <div id="activities-page">
    <FlorentHeader :title="t('title')" />

    <main class="main">
      <section v-for="activity in activities" :key="activity.title">
        <h2 class="typo_title--small section-title">
          {{ activity.title }}
        </h2>
        <div class="subjects">
          <BerthelotSystemCard
            v-for="item in activity.items"
            :key="item.name"
            :link="item.link"
            :internal-link="item.link.startsWith('/')"
            class="subject"
          >
            <h3 class="typo_title--small typo_light subject-title">
              {{ item.name }}
            </h3>
            <div class="typo_default typo_white">
              <p>{{ item.p1 }}</p>
              <p>{{ item.p2 }}</p>
            </div>
            <div class="card_meta typo_white typo_meta-info">
              {{ item.status }}
            </div>
          </BerthelotSystemCard>
        </div>
      </section>

      <section>
        <h2 class="typo_title--small section-title">
          {{ t('statusPage.title') }}
        </h2>
        <iframe src="https://status.berthelot.io/" class="status_page_iframe">
        </iframe>
        <a
          href="https://status.berthelot.io/"
          target="_blank"
          rel="noopener noreferrer"
          class="typo_default typo_link status_page_link"
        >
          {{ t('statusPage.link') }}
        </a>
      </section>
    </main>
    <FlorentFooter />
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const { t } = useI18n({
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
  ogUrl: 'https://berthelot.io/activities',
})

const activities = ref([
  {
    title: t('now'),
    items: [
      {
        name: t('wefacto.name'),
        p1: t('wefacto.p1'),
        p2: t('wefacto.p2'),
        status: t('wefacto.status'),
        link: 'https://wefacto.com',
      },

      {
        name: t('hero.name'),
        p1: t('hero.p1'),
        p2: t('hero.p2'),
        status: t('hero.status'),
        link: 'https://www.heropay.eu/',
      },
      {
        name: t('afterworks.name'),
        p1: t('afterworks.p1'),
        p2: t('afterworks.p2'),
        status: t('afterworks.status'),
        link: '/afterworks',
      },
    ],
  },
  {
    title: t('paused'),
    items: [
      {
        name: t('coacha.name'),
        p1: t('coacha.p1'),
        p2: t('coacha.p2'),
        status: t('coacha.status'),
        link: 'https://www.coachadaptative.com',
      },
      {
        name: t('aqua-compose.name'),
        p1: t('aqua-compose.p1'),
        p2: t('aqua-compose.p2'),
        status: t('aqua-compose.status'),
        link: 'https://aqua-compose.berthelot.io/',
      },
    ],
  },
  {
    title: t('abandonned'),
    items: [
      {
        name: t('component-test-utils.name'),
        p1: t('component-test-utils.p1'),
        p2: t('component-test-utils.p2'),
        status: t('component-test-utils.status'),
        link: 'https://component-test-utils.berthelot.io/',
      },
    ],
  },
])
</script>

<style scoped>
#activities-page {
  height: 100%;
}

.main {
  min-height: calc(100% - 14rem - 1px);
}

.subjects {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
}

.subject {
  margin: 2rem;
  width: 25%;
}

.subject p {
  margin: 1rem 0;
}

.subject p:last-child {
  margin: 1rem 0 0 0;
}

.section-title {
  text-align: center;

  margin-top: 2rem;
}

.status_page_iframe {
  width: 100%;
  height: 90vh;
  border-radius: 1rem;

  margin: 1rem 0;
}

.status_page_link {
  text-align: center;
  color: var(--color-white);
  width: 100%;
  display: inline-block;
  margin-bottom: 2rem;
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
