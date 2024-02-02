<i18n lang="json">
{
  "fr": {
    "meta": {
      "title": "Admin - Mariage Agnès et Florent",
      "description": "Toutes les infos du mariage sont ici !"
    },
    "slideTip": "💡 Vous pouvez bouger les slides de gauche à droite.",
    "Plan et déco": "Plan et déco",
    "calendarTitle": "Feuille de route",
    "Feuille de route -": "Feuille de route -",
    "Photo": "Photo",
    "Afficheur photo": "Afficheur photo",
    "Menu": "Menu",
    "Livret de messe": "Livret de messe",
    "Les autres infos": "Les autres infos",
    "video et photos": "video et photos"
  },
  "en": {
    "meta": {
      "title": "Admin - Agnès et Florent wedding",
      "description": "All wedding infos are here!"
    },
    "slideTip": "💡 Vous pouvez bouger les slides de gauche à droite.",
    "Plan et déco": "Plan and decoration",
    "calendarTitle": "Schedule",
    "Feuille de route -": "Schedule - ",
    "Photo": "Photo",
    "Afficheur photo": "Afficheur photo",
    "Menu": "Menu",
    "Livret de messe": "Livret de messe",
    "Les autres infos": "Les autres infos",
    "video et photos": "Movie & Pictures"
  }
}
</i18n>

<template>
  <main id="wedding-admin-page">
    <div v-if="config">
      <header class="header">
        <h1 class="typography-title">{{ config.title }}</h1>
      </header>

      <MariageAdminCalendar :schedule="schedule" :title="t('calendarTitle')" />

      <div v-if="config.message">
        <hr />

        <!-- eslint-disable-next-line vue/no-v-html -->
        <p class="typography-title-3" v-html="config.message"></p>
      </div>

      <section v-if="config.displayOtherInfos">
        <hr />

        <h2 class="typography-title-2">{{ t('Les autres infos') }}</h2>

        <ul>
          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/merci`"
              >{{ t(`video et photos`) }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/church`"
              >{{ t(`Livret de messe`) }}</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/menu`"
              >{{ t(`Menu`) }}</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/photo`"
              >{{ t(`Photo`) }}</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/43999e26-0e14-4035-bbb8-displayer-9a00bcdc50da`"
              >{{ t(`Afficheur photo`) }}</nuxt-link
            >
          </li>

          <li v-for="(_, key) in configMapper" :key="key">
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/adm?id=${key}`"
              >{{ t(`Feuille de route -`) }}{{ key }}
            </nuxt-link>
          </li>
        </ul>
      </section>

      <section v-if="config.messagePlanDeTable">
        <hr />

        <h2 class="typography-title-2">{{ t('Plan et déco') }}</h2>

        <!-- eslint-disable vue/no-v-html -->
        <p
          class="slide-message typography-paragraph"
          v-html="config.messagePlanDeTable"
        ></p>
        <!-- eslint-enable vue/no-v-html -->

        <div class="slide-container">
          <p class="slide-info typography-paragraph">
            {{ t('slideTip') }}
          </p>
          <img
            v-for="(slide, i) in slides"
            :key="slide"
            :src="slide"
            class="slide"
            :title="`slide ${i}`"
            alt="déso, pas d'alternative à l'image"
          />
        </div>
      </section>

      <div v-if="config.displayGuestList">
        <hr />

        <MariageAdminGuestList />
      </div>
    </div>
  </main>
</template>

<script setup lang="js">
import { computed, watch } from 'vue'
import {
  CalendarEvents,
  Calendars,
} from '~/components/mariage/01_shared/calendar.data.js'

import img1 from '~/components/mariage/admin/slides/1.png'
import img2 from '~/components/mariage/admin/slides/2.png'
import img3 from '~/components/mariage/admin/slides/3.png'
import img4 from '~/components/mariage/admin/slides/4.png'
import img5 from '~/components/mariage/admin/slides/5.png'
import img6 from '~/components/mariage/admin/slides/6.png'
import img7 from '~/components/mariage/admin/slides/7.png'
import img8 from '~/components/mariage/admin/slides/8.png'
import img9 from '~/components/mariage/admin/slides/9.png'
import img10 from '~/components/mariage/admin/slides/10.png'
import img11 from '~/components/mariage/admin/slides/11.png'
import img12 from '~/components/mariage/admin/slides/12.png'
import img13 from '~/components/mariage/admin/slides/13.png'
import img14 from '~/components/mariage/admin/slides/14.png'
import img15 from '~/components/mariage/admin/slides/15.png'
import img16 from '~/components/mariage/admin/slides/16.png'
import img17 from '~/components/mariage/admin/slides/17.png'
import img18 from '~/components/mariage/admin/slides/18.png'
import img19 from '~/components/mariage/admin/slides/19.png'
import img20 from '~/components/mariage/admin/slides/20.png'
import img21 from '~/components/mariage/admin/slides/21.png'
import img22 from '~/components/mariage/admin/slides/22.png'
import img23 from '~/components/mariage/admin/slides/23.png'
import img24 from '~/components/mariage/admin/slides/24.png'
import { onMounted } from 'vue'

const allSlides = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
]

const configMapper = {
  fbe: {
    title: 'Admin de Florent',
    who: Calendars.florent,
    displayGuestList: true,
    displayOtherInfos: true,
    message: "Let's gooo 🎉",
    messagePlanDeTable: ' ',
  },
  ava: {
    title: "Admin d'Agnès",
    who: Calendars.agnès,
    displayGuestList: true,
    displayOtherInfos: true,
    message: "Je t'aime mon amour ❤️",
    messagePlanDeTable: ' ',
  },
  temoins: {
    title: 'Admin des témoins',
    who: Calendars.temoins,
    displayGuestList: false,
    displayOtherInfos: false,
    message: `
        Coucou les gars,<br/>
        Le calendrier ci-dessus est informatif. Nous ne sommes pas à la minute près, pas besoin de stresser donc 😇<br/>
        <br/><br/>
        Le seul petit truc à savoir en terme de timing, c'est qu'il y a un mariage à 16h après nous à l'église.<br/>
        On a grave de la marge pour ne pas les gêner. 😅<br/><br/>

        Let's gooooo ! 🎉
      `,
    messagePlanDeTable: `
        J'ai mis ici quelques infos sur comment se passe la déco et le plan du château, nottement pour toi Jo' et surtout Eva.
      `,
    slidesSkiped: [
      0, 1, 2, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23,
    ],
  },
  temouines: {
    title: 'Admin des témouines',
    who: Calendars.temouines,
    displayGuestList: false,
    displayOtherInfos: false,
    message: `
        Hello Girls,<br/>
        Le calendrier ci-dessus est informatif. Nous ne sommes pas à la minute près, pas besoin de stresser donc 😇<br/>
        The calendar above is informative, so no need to stress. 😇<br/>
        <br/><br/>
        Le seul petit truc à savoir en terme de timing, c'est qu'il y a un mariage à 16h après nous à l'église.<br/>
        On a grave de la marge pour ne pas les gêner. 😅<br/>
        --<br/>
        The only time constraint to know is that there is another wedding in the church after ours, at 4:00pm.<br/>
        We still have plenty of time to not bother them. 😅<br/>

        <br/><br/>

        Let's gooooo ! 🎉
      `,
    messagePlanDeTable: `
        Une tite' carte du château, au cas où ça peut vous servir. 🤷‍♀️<br/>
        Here is a plan of the castle. Maybe it can help you. 🤷‍♀️<br/>
        PS: Sorry, Maya, I can't tranlate images. Ask us if something is not clear.
      `,
    slidesSkiped: [
      0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23,
    ],
  },
  fleurs: {
    title: 'Espace fleurs',
    who: Calendars.fleuriste,
    displayGuestList: false,
    displayOtherInfos: false,
    message: ``,
    messagePlanDeTable: `Vous pouvez ignorer les éléments en jaune fluo. Ce sont des éléments pour nous, à préciser. Ils seront mis à jour.`,
  },
  traiteur: {
    title: 'Espace traiteur',
    who: Calendars.traiteur,
    displayGuestList: false,
    displayOtherInfos: false,
    message: `
        Vous pouvez retrouver <a href="https://berthelot.io/mariage/menu/" target="__blank">plus de détail sur la nourriture ici.</a>
      `,
    messagePlanDeTable: `
        <br />
        Chaque post-it représente un invité :<br /><br />
        Post-it noir = Viande en plat principal.<br />
        Post-it blanc = Poisson en plat principal.<br />
        Post-it vert = Végétalien.<br />
        Post-it rose = Femme enceinte (entrée végétaliens, en plat filet de bar).<br />
      `,
    slidesSkiped: [0, 1, 2, 3, 4, 5, 6, 7, 9, 22],
  },
  dj: {
    title: 'Espace Sonofactory',
    who: Calendars.dj,
    displayGuestList: false,
    displayOtherInfos: false,
    slidesSkiped: [
      0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22,
    ],
    message: ``,
    messagePlanDeTable: `Le A, F et Public dans le salon Chausey, seront nos positions lors de l'ouverture de bal.
      `,
  },
  groupeMusic: {
    title: "Espace Swingin' Easy",
    who: Calendars.groupeMusic,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  agnèsFamily: {
    title: "Agnès' Family Space",
    who: Calendars.agnèsFamily,
    displayGuestList: false,
    displayOtherInfos: false,
    message: `
        Hello dear family members,<br/><br/>
        The calendar above gives you all the timing information needed so that there is no need to stress. 😇<br/><br/>


        If you want more details on the menu, <a href="https://berthelot.io/mariage/menu/" target="__blank"> click here</a>.<br/>
        If you want more details on the church service, <a href="https://berthelot.io/mariage/church/" target="__blank"> click here</a>.<br/>
        <br/><br/>
        If something is still unclear, ask me!
  <br/><br/>
        XoXoXoXoXoXoXoXo 🎉🎉🎉

        --

        Hello la famille,
        Le calendrier ci-dessus vous donne toutes les informations nécessaires sur le timing pour qu'il n'y ait pas besoin de stress. 😇
        Si vous voulez plus de détails sur le menu, cliquez ici.
        Si vous voulez plus de détails sur la messe, cliquez ici.

        Si quelque chose n'est toujours pas clair, demandez moi !
      `,
  },
  florentFamilly: {
    title: 'Espace famille de Florent',
    who: Calendars.florentFamily,
    displayGuestList: false,
    displayOtherInfos: false,
    message: `
        Coucou la famille,<br/>
        Le calendrier ci-dessus est informatif. Nous ne sommes pas à la minute près, pas besoin de stresser donc 😇<br/>
        <br/><br/>
        Si vous voulez plus de détail sur le menu,<a href="https://berthelot.io/mariage/menu/" target="__blank"> cliquez-ici</a><br/>
        Si vous voulez plus de détail sur l'église,<a href="https://berthelot.io/mariage/church/" target="__blank"> cliquez-ici</a><br/>

        Sinon, n'hésitez pas à me poser des questions s'il y a un truc qu'est pas clair.<br/><br/>

        Bisous 🎉🎉🎉
      `,
  },
  pascal: {
    title: 'Espace Pascal 📸',
    who: Calendars.photograph,
    displayGuestList: false,
    displayOtherInfos: false,
    message: `
        Coucou Pascal,

        Le calendrier ci-dessus est informatif. Nous ne sommes pas à la minute près, pas besoin de stresser donc 😇<br/>
        <br/><br/>
        Si tu veux plus de détails sur le menu,<a href="https://berthelot.io/mariage/menu/" target="__blank"> clique-ici</a><br/>
        Si tu veux plus de détails sur l'église,<a href="https://berthelot.io/mariage/church/" target="__blank"> clique-ici</a><br/>

        Sinon, n'hésites pas à nous poser des questions s'il y a un truc qu'est pas clair.<br/><br/>

        Bisous 🎉🎉🎉
      `,
  },
  taxi: {
    title: 'Espace Taxi',
    who: Calendars.taxi,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  foodTruck: {
    title: 'Espace Food Truck',
    who: Calendars.foodTruck,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  castle: {
    title: 'Espace pour Mme Drye',
    who: Calendars.castle,
    displayGuestList: false,
    displayOtherInfos: false,
    messagePlanDeTable: ` `,
    slidesSkiped: [],
  },
}

definePageMeta({
  layout: 'mariage',
})

const { t } = useI18n({
  useScope: 'local',
})
const route = useRoute()
useSeoMeta({
  ogType: 'website',
  title: t('meta.title'),
  ogTitle: t('meta.title'),
  twitterTitle: t('meta.title'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  twitterDescription: t('meta.description'),
  twitterCard: 'summary',
})

const config = ref(configMapper[route.query.id])

const schedule = computed(() => {
  return CalendarEvents.filter((event) => event.who.includes(config.value?.who))
})
const slides = computed(() => {
  return allSlides.filter((_, i) => {
    return !(config.value?.slidesSkiped ?? []).includes(i)
  })
})
watch(
  () => route.query.id,
  () => {
    config.value = configMapper[route.query.id]
  },
)

onMounted(async () => {
  if (!config.value) {
    await navigateTo('/404')
  }
})
</script>

<style scoped>
#wedding-admin-page {
  background-color: var(--color-background-strong);
  width: 100%;
  min-height: 100%;
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-bottom: 1rem;
}

.slide-container {
  width: 100%;
  overflow: auto;
}

.slide {
  width: 80%;

  margin: 1rem 10%;
}

.slide-info {
  display: none;
}
.slide-message {
  display: inline-block;
  text-align: center;
  width: 100%;
  margin: 2rem 0 0.5rem 0;
}

@media (orientation: portrait) {
  .slide {
    width: 200%;

    margin: 1rem 5%;
  }

  .slide-info {
    display: inline-block;
    text-align: center;
    width: 100%;
    margin: 2rem 0 0.5rem 0;
  }
}
</style>
