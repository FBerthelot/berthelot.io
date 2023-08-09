<i18n>
{
  "fr": {
    "Feuille de route -": "Feuille de route -",
    "Photo": "Photo",
    "Afficheur photo": "Afficheur photo",
    "Menu": "Menu",
    "Livret de messe": "Livret de messe",
    "Les autres infos": "Les autres infos",
    "not_found": "Pas d'admin pour toi :p",
    "no_stress": "⚠️ Pas besoin de stresser si nous avons 5-10min de retard. La feuille de route n'est qu'indicative ⚠️"
  },
  "en": {
    "Feuille de route -": "Feuille de route - ",
    "Photo": "Photo",
    "Afficheur photo": "Afficheur photo",
    "Menu": "Menu",
    "Livret de messe": "Livret de messe",
    "Les autres infos": "Les autres infos",
    "not_found": "Pas d'admin pour toi :p",
    "no_stress": "⚠️ No need to stress for 5-10min late. This agenda is only a high level view to guide us ⚠️"
  }
}
</i18n>
<template>
  <main id="wedding-admin-page">
    <p v-if="!config" class="typography-paragraph">{{ $t('not_found') }}</p>

    <div v-if="config">
      <header v-if="config" class="header">
        <h1 class="typography-title">{{ config.title }}</h1>
      </header>

      <Calendar v-if="config" :schedule="schedule" title="Feuille de route" />

      <p class="typography-title-3">{{ $t('no_stress') }}</p>
      <hr />

      <section v-if="config.displayOtherInfos">
        <h2 class="typography-title-2">{{ $t('Les autres infos') }}</h2>

        <ul>
          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/church`"
              >{{ $t(`Livret de messe`) }}</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/menu`"
              >{{ $t(`Menu`) }}</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/photo`"
              >{{ $t(`Photo`) }}</nuxt-link
            >
          </li>

          <li>
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/43999e26-0e14-4035-bbb8-displayer-9a00bcdc50da`"
              >{{ $t(`Afficheur photo`) }}</nuxt-link
            >
          </li>

          <li v-for="(_, key) in configMapper" :key="key">
            <nuxt-link
              title="Accéder à l'espace invité"
              class="typography-link"
              :to="`/mariage/adm?id=${key}`"
              >{{ $t(`Feuille de route -`) }}{{ key }}
            </nuxt-link>
          </li>
        </ul>
      </section>

      <hr />

      <guest-list v-if="config.displayGuestList"></guest-list>
    </div>
  </main>
</template>

<script>
import GuestList from '~/components/mariage/admin/guestList.vue'
import Calendar from '~/components/mariage/admin/calendar.vue'
import {
  CalendarEvents,
  Calendars,
} from '~/components/mariage/00_shared/calendar.data'

const configMapper = {
  fbe: {
    title: 'Admin de Florent',
    who: Calendars.florent,
    displayGuestList: true,
    displayOtherInfos: true,
  },
  ava: {
    title: "Admin d'Agnès",
    who: Calendars.agnès,
    displayGuestList: true,
    displayOtherInfos: true,
  },
  temoins: {
    title: 'Admin des témoins',
    who: Calendars.temoins,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  temouines: {
    title: 'Admin des témouines',
    who: Calendars.temouines,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  fleurs: {
    title: 'Espace fleurs',
    who: Calendars.fleuriste,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  traiteur: {
    title: 'Espace traiteur',
    who: Calendars.traiteur,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  dj: {
    title: 'Espace Sonofactory',
    who: Calendars.dj,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  groupeMusic: {
    title: "Espace Swingin' Easy",
    who: Calendars.groupeMusic,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  agnèsFamilly: {
    title: "Agnès' Familly Space",
    who: Calendars.agnèsFamilly,
    displayGuestList: false,
    displayOtherInfos: false,
  },
  florentFamilly: {
    title: 'Espace famille de Florent',
    who: Calendars.florentFamilly,
    displayGuestList: false,
    displayOtherInfos: false,
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
}

export default {
  components: { GuestList, Calendar },
  layout: 'mariage',
  data() {
    const config = configMapper[this.$route.query.id]
    return {
      config,
      configMapper,

      schedule: CalendarEvents.filter((event) =>
        event.who.includes(config?.who)
      ),
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: `Mariage Agnès et Florent - 19 Août 2022`,
    }
  },
  watch: {
    '$route.query'() {
      this.config = configMapper[this.$route.query.id]
      this.schedule = CalendarEvents.filter((event) =>
        event.who.includes(this.config?.who)
      )
    },
  },
}
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
</style>
