<i18n>
{
  "fr": {
    "activities": {
      "title": "Activités",
      "meta_description": "Mes travails passés, actuel et futur."
    },
    "now": "Mes occupations du moment",
    "paused": "En pause",
    "abandonned": "Ça n'a pas marché 🥲",
    "coacha": {
      "p1": "Avec des amis, on développe une application de sport qui s'adapte un maximum aux utilisateurs et à leur environnement.",
      "p2": "Essayez l'application et n'hésitez pas à me faire des retours ! 😉",
      "status": "🚀 Beta public 🚀"
    },
    "component-test-utils": {
      "p1": "J'ai développé un outil entre enzyme et test-utils qui permet de tester des composants quelque soit le framework.",
      "p2": "Malheureusement, n'étant pas très doué en communication, j'ai échoué à l'étape de le faire connaitre."
    },
    "hero": {
      "p1": "Hero est l'acteur du paiement B2B en France.",
      "p2": "Je suis développeur au sein d'une équipe Crafts ultra motivée.",
      "status": "Levée de fonds de 12,4 millions faite ✅"
    },
    "wefacto": {
      "p1": "Ma société que j'ai créée pour exercer mon métier en freelance.",
      "p2": "J'interviens pour des audits et des formations autour de l'univers JavaScript.",
      "status": "Ouvert pour des audits et des formations"
    },
    "wedding": {
      "title": "Mariage",
      "p1": "❤️ Je me marie avec l'amour de ma vie dans l'année ❤️",
      "status": "💍 En préparation 💍"
    },
    "aqua-compose": {
      "p1": "Passioné d'aquariophilie, j'ai développé une application pour peupler sereinnement son aquarium.",
      "status": "MVP développé, en pause."
    },
    "afterworks": {
      "p1": " J'ai pour habitude d'organiser des afterworks entre collègues environ une fois par mois.",
      "p2": "Le Covid étant passé par là, c'est en pause pour le moment.",
      "status": "A venir 🍻"
    }
  },
  "en": {
    "activities": {
      "title": "Activities",
      "meta_description": "I'm not only a contractor, I also work on these side-projects."
    },
    "now": "What I do now",
    "paused": "Paused",
    "abandonned": "It didn't work 🥲",
    "coacha": {
      "p1": "With friends, we are making a sport app that adapts itself to it's users and their environnement.",
      "p2": "Try it, feedback welcome (only french available for now) 😉",
      "status": "🚀 Public beta 🚀"
    },
    "component-test-utils": {
      "p1": "I've coded a tool between Enzyme and Test-Utils to test components.",
      "p2": "Unfortunatly, I didn't done any marketing so I failed to get the project known."
    },
    "hero": {
      "p1": "Hero is a french fintech startup which is a standart for B2B payments.",
      "p2": "I'm developer in a team composed of very motivated Crafts.",
      "status": "We raised 12,4 millions ✅"
    },
    "wefacto": {
      "p1": "I've created this company to work as a contractor.",
      "p2": "I give audits and training in the JavaScript universe.",
      "status": "Open to make audits et give training"
    },
    "wedding": {
      "title": "Wedding",
      "p1": "❤️ I'm going to get married with the love of my life ❤️",
      "status": "💍 Preparations ongoing 💍"
    },
    "aqua-compose": {
      "p1": "I'm passionated of aquarium, so I've developped an app to help populate a fish tank.",
      "status": "MVP developped, paused."
    },
    "afterworks": {
      "p1": "I've always organised afterworks with colleagues about one per month.",
      "p2": "Due to covid, it's paused.",
      "status": "Stay tuned 🍻"
    }
  }
}
</i18n>

<template>
  <div id="activities-page">
    <Header :title="$t('activities.title')" />

    <main class="main">
      <section>
        <Typography component="h2" variant="title--small" class="section-title">
          {{ $t('now') }}
        </Typography>
        <div class="subjects">
          <Card class="subject" link="https://www.wefacto.com">
            <CardTitle>WeFacto</CardTitle>
            <Typography component="div">
              <p>{{ $t('wefacto.p1') }}</p>
              <p>{{ $t('wefacto.p2') }}</p>
            </Typography>
            <CardMeta>{{ $t('wefacto.status') }}</CardMeta>
          </Card>

          <Card class="subject" link="https://www.coachadaptative.com">
            <CardTitle>Coach'A</CardTitle>
            <Typography component="div">
              <p>{{ $t('coacha.p1') }}</p>
              <p>{{ $t('coacha.p2') }}</p>
            </Typography>
            <CardMeta>{{ $t('coacha.status') }}</CardMeta>
          </Card>

          <Card class="subject" link="https://www.hero.fr/">
            <CardTitle>Hero</CardTitle>
            <Typography component="div">
              <p>{{ $t('hero.p1') }}</p>
              <p>{{ $t('hero.p2') }}</p>
            </Typography>
            <CardMeta>{{ $t('hero.status') }}</CardMeta>
          </Card>

          <Card class="subject">
            <CardTitle>{{ $t('wedding.title') }}</CardTitle>
            <Typography component="div">
              {{ $t('wedding.p1') }}
            </Typography>
            <CardMeta>{{ $t('wedding.status') }}</CardMeta>
          </Card>
        </div>
      </section>

      <section>
        <Typography component="h2" variant="title--small" class="section-title">
          {{ $t('paused') }}
        </Typography>
        <div class="subjects">
          <Card class="subject" link="https://aqua-compose.berthelot.io/">
            <CardTitle>Aqua-compose</CardTitle>
            <Typography component="div">
              {{ $t('aqua-compose.p1') }}
            </Typography>
            <CardMeta>{{ $t('aqua-compose.status') }}</CardMeta>
          </Card>

          <Card class="subject">
            <CardTitle>Afterworks</CardTitle>
            <Typography component="div">
              <p>{{ $t('afterworks.p1') }}</p>
              <p>
                {{ $t('afterworks.p2') }}
              </p>
            </Typography>
            <CardMeta>{{ $t('afterworks.status') }}</CardMeta>
          </Card>
        </div>
      </section>

      <section>
        <Typography component="h2" variant="title--small" class="section-title">
          {{ $t('abandonned') }}
        </Typography>
        <div class="subjects">
          <Card
            class="subject"
            link="https://component-test-utils.berthelot.io/"
          >
            <CardTitle>Component-test-utils</CardTitle>
            <Typography component="div">
              <p>{{ $t('component-test-utils.p1') }}</p>
              <p>
                {{ $t('component-test-utils.p2') }}
              </p>
            </Typography>
          </Card>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import { Card, CardTitle, CardMeta } from '~/components/card'
import { Typography } from '~/components/typography'
import Header from '~/components/header'
import Footer from '~/components/footer'

export default {
  components: {
    Card,
    CardTitle,
    CardMeta,
    Typography,
    Header,
    Footer,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Florent Berthelot - ${this.$t('activities.title')}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Florent Berthelot - ${this.$t('activities.title')}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Florent Berthelot - ${this.$t('activities.title')}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('activities.meta_description'),
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('activities.meta_description'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('activities.meta_description'),
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://berthelot.io/activities',
        },
      ],
    }
  },
}
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
