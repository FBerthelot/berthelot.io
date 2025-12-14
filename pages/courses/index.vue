<i18n lang="json">
{
  "fr": {
    "title": "Supports de formations",
    "meta": {
      "title": "Supports de formations - Florent Berthelot",
      "description": "Supports de cours que j'utilise pour former au développement web."
    }
  },
  "en": {
    "title": "Courses",
    "meta": {
      "title": "Courses - Florent Berthelot",
      "description": "I use those materials to give courses on Web development"
    }
  }
}
</i18n>

<template>
  <div id="courses-page">
    <FlorentHeader :title="t('title')" />

    <main class="subjects">
      <BerthelotSystemCard
        v-for="subject in subjects"
        :key="subject.name"
        :link="subject.url"
        class="subject"
      >
        <h2 class="typo_title--small typo_light subject-title">
          {{ subject.name }}
        </h2>
        <!-- eslint-disable vue/no-v-html -->
        <span
          class="typo_default typo_white"
          v-html="subject.description[locale]"
        />
        <!-- eslint-enable vue/no-v-html -->
        <span class="card_meta typo_meta-info typo_white">{{
          subject.metaData
        }}</span>
      </BerthelotSystemCard>
    </main>

    <FlorentFooter />
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

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
  ogUrl: 'https://berthelot.io/courses/',
})

const subjects = ref([
  {
    name: 'JavaScript',
    description: {
      fr: `
                Chaque année, l'organisme de standartidation ECMA International met à jour la spécification EcmaScript.
                Ces slides présentent l'ensemble du langage JavaScript passée, présent et future.
                <br /></br>
                Idéal pour commencer le JavaScript.
              `,
      en: `
                Each year, the ECMA International group update EcmaScript specifications.
                These slides is showing all of JavaScript language features from past, present and futur.
                <br /></br>
                Fitted for beginners.
              `,
    },
    url: '/slides/javascript',
    external: true,
    type: 'course',
  },
  {
    name: 'JavaScript Craftmanship',
    description: {
      fr: `
                Les tests sont souvent considéré comme innutiles et complexes. Le TDD ? Une utopie !
                <br/><br/>
                Démystifions les tests dans l'écosystème JavaScript pour voir ensemble ce qui vous corresponds au mieux.
              `,
      en: `
                Tests are sometimes considered useless and complex. TDD? Utopia!
                <br/><br/>
                Let's explains tests in JavaScript ecosystem to see together what workflow is thenmost likely to fit you.
              `,
    },
    url: 'https://slides.com/florentberthelot/javascript-craftmanship/',
    type: 'course',
  },
  {
    name: 'Les modules en JavaScript',
    description: {
      fr: `
                L'histoire de la séparation en plusieurs fichiers des applications JavaScript a été assez mouvementé.
                <br></br>
                Voyons ensemble les enjeux de Node.js, des navigateurs et de Ecma International.
              `,
      en: `
                The history of splitting into multiple files the code of JavaScript applications has been hectic.
                <br></br>
                Let's see together the challenges for Node.js, browsers and Ecma International.
              `,
    },
    url: 'https://slides.com/florentberthelot/les-modules-javascript/',
    type: 'course',
  },
  {
    name: 'React',
    description: {
      fr: `
                Cours de 3 jours pour l'apprentisage du framework de facebook et vercel.
                Voyons ensemble ce qui tout ce qui compose un des framework frontend les plus populaires.
                <br></br>
                Durée de la formation :  3 jours
              `,
      en: `
                3 days course to learn the facebook's and vercel's frontend framwork.
                Let's see together everything is in one of the most popular frontend framework.
                <br/><br/>
                Duration: 3 days.
              `,
    },
    url: '/slides/react',
    external: true,
    type: 'course',
  },
  {
    name: 'React Avancé',
    description: {
      fr: `
                Cours de 3 jours pour approfondir React et maîtriser le framework.
                Après cette formation, le fonctionnement interne de React, Redux et les Hooks n'aurons plus aucun secret pour vous.
                <br></br>
                Durée de la formation :  3 jours
              `,
      en: `
                A 3 days course to deepen your understanding of React and master the framework.
                After this course, the interal workings of React, Redux and Hooks won't have any more secrets for you.
                <br/><br/>
                Duration: 3 days.
              `,
    },
    url: 'https://slides.com/florentberthelot/react-advanced',
    external: true,
    type: 'course',
  },
  {
    name: 'Node.js',
    description: {
      fr: `
                Plongez dans l'écosystème JavaScript côté serveur avec Node.js.
                Une formation immersive pour devenir autonome et productif avec Node.js.
                <br></br>
                Durée de la formation :  3 jours
          `,
      en: `
                Dive into the JavaScript ecosystem on the server side with Node.js.
                An immersive training to become autonomous and productive with Node.js.
                <br/><br/>
                Duration: 3 days.
              `,
    },
    url: '/slides/nodejs',
    external: true,
    type: 'course',
  },
  {
    name: 'Node.js Tooling',
    description: {
      fr: `
                Je suis un développeur fullstack. Pourquoi ?
                Car un génie a eu l'idée de créer un ecosystème pour développer des application backend en JavaScript.
                Découvrons comment cela se passe !
              `,
      en: `
                I am a fullstack developer. Why?
                Because a genius got the idea to develop backend application in JavaScript.
                Let's see how!
              `,
    },
    url: 'https://slides.com/florentberthelot/outillage-node-js',
    external: true,
    type: 'course',
  },
  {
    name: 'TypeScript',
    description: {
      fr: `
                Le langage JavaScript se compose d'un typage dynamique faible.
                TypeScript englobe le JavaScript pour rendre les types plus explicite.
                <br/><br/>
                Durant cette plongée dans l'explicite nous verrons ce que TypeScript nous apporte.
              `,
      en: `
                JavaScript language has a weak and dynamic typing.
                TypeScript is a JavaScript superset to have a more explicit typing.
                <br/><br/>
                During this deep dive into the explicit we will see what's TypeScript bring to us developper.
              `,
    },
    url: 'https://slides.com/florentberthelot/formation-typescript/',
    external: true,
    type: 'course',
  },
  {
    name: 'TypeScript Avancée',
    description: {
      fr: `
                Typescript s'impose comme le langage de référence pour le développement d'application web.
                Nous l'utilisons tous les jours, mais le maîtrisons nous vraiment ?
                <br/><br/>
                Découvrons ensemble les subtilités de ce langage et comment l'utiliser au mieux.
              `,
      en: `
                TypeScript is becoming the reference language for web application development.
                We use it every day, but do we really master it?
                <br/><br/>
                Let's discover together the subtleties of this language and how to use it at its best.
              `,
    },
    url: '/slides/typescript-avancee',
    external: true,
    type: 'course',
  },
  {
    name: 'Nest.js',
    description: {
      fr: `
                Construisons ensemble des applications backend grâce au framework customizable Nest.js.
                <br/><br/>
                Durée : 3 jours.
              `,
      en: `
                Let's build together an applications backend thanks to Nest.js progressive framework.
                <br/><br/>
                Duration : 3 days.
              `,
    },
    url: 'https://slides.com/florentberthelot/nestjs',
    external: true,
    type: 'course',
  },
  {
    name: 'Angular',
    description: {
      fr: `
                Cours d'une semaine pour l'apprentisage du framework de Google.
                JavaScript, TypeScript, Angular et tous les sujets pour construire une applications web sont abordé
                avec une alternance entre la théorie et les travaux pratiques.
                <br/><br/>
                Possibilité d'avoir un programme de 2 jours si on omet JavaScript et TypeScript du programme.
              `,
      en: `
                One week course to learn the Google's frontend framwork.
                JavaScript, TypeScript, Angular and all topics to build a web application are seen with both theory and practices alternate.
                <br/><br/>
                It's possible to reduce the duration du 3 days by omitting JavaScript and TypeScript from the course.
              `,
    },
    url: 'https://slides.com/florentberthelot/angular/fullscreen',
    type: 'course',
  },
  {
    name: 'Les flows Git',
    description: {
      fr: `
                  Git, c'est génial, mais c'est aussi très complexe et même parfois fait passer les processus et les outils avant les individus.
                  <br><br>
                  C'est pourtant un outils que l'on peux tordre facilement pour qu'il s'adapte à nos besoin.
                  <br><br>
                  Voyons ensemble les principaux flow Git qui existent et qui correspond au mieux à votre équipe.
              `,
      en: `
                Git is awesome, but it's also very complexe and even sometime can rise processes and tools over individuals and interactions.
                <br><br>
                However it's a tool we can twist easily to adapt it to our needs.
                <br><br>
                Let's see together the main existing git flows and find the one that fit to your team.
              `,
    },
    url: 'https://slides.com/florentberthelot/git-flows',
    type: 'course',
  },
  {
    name: 'Redux & co',
    description: {
      fr: `
                Redux, certain l'aime, d'autres le deteste.
                <br/><br/>
                Avant d'apprendre ce qu'est redux, penchons nous sur les problèmes qu'il résoud.
              `,
      en: `
                Redux, some love it, some hate it.
                <br/><br/>
                Before learning what is redux, we have to look at the issues it solves.
              `,
    },
    url: 'https://slides.com/florentberthelot/what-is-redux-and-all-redux-like',
    type: 'course',
  },
])
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
