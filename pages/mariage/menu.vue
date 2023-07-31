<i18n>
  {
    "fr": {
      "title": "Menu",
      "back-button": "⬅ Retour",
      "next-day-button": "Demain ➡️",
      "prev-day-button": "⬅️ Hier",
      "reception": {
        "title": "Vin d’honneur",
        "hours": "16h - 17h30"
      },
      "cocktail": {
        "title": "Cocktail",
        "hours": "17h30 - 19h30"
      },
      "diner": {
        "title": "Dîner",
        "hours": "20h - 23h00"
      },
      "party": {
        "title": "Soirée",
        "hours": "23h - 4h00"
      },
      "after": {
        "title": "Retour des mariés",
        "hours": "11h - 17h00"
      }
    },
    "en": {
      "title": "Menu",
      "back-button": "⬅ Retour",
      "next-day-button": "Demain ➡️",
      "prev-day-button": "⬅️ Hier",
      "reception": {
        "title": "Vin d’honneur",
        "hours": "16h - 17h30"
      },
      "cocktail": {
        "title": "Cocktail",
        "hours": "17h30 - 19h30"
      },
      "diner": {
        "title": "Diner",
        "hours": "20h - 23h00"
      },
      "party": {
        "title": "Soirée",
        "hours": "23h - 4h00"
      },
      "after": {
        "title": "Retour des mariés",
        "hours": "11h - 17h00"
      }
    }
  }
</i18n>

<template>
  <main id="wedding-menu">
    <header class="header">
      <nav class="header-nav">
        <nuxt-link :to="prevUrl" class="typography-link">{{
          $t('back-button')
        }}</nuxt-link>
      </nav>
      <h1 class="typography-title">{{ $t('title') }}</h1>
    </header>

    <section class="typography-paragraph infos">
      <div class="tablist" role="tablist" aria-labelledby="tablist-1">
        <button
          v-for="tab of tabs"
          :id="`${tab}-tab`"
          :key="tab"
          type="button"
          class="tab"
          role="tab"
          :aria-selected="selectedTab === tab"
          aria-controls="tabpanel-1"
          @click="handleSelectTab(tab)"
        >
          {{ $t(`${tab}.title`) }}
        </button>
      </div>

      <article
        v-for="tab of tabs"
        :key="tab"
        :class="{
          tabpanel: true,
          tabpanel__open: selectedTab === tab,
        }"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="`${tab}-tab`"
      >
        <h2 class="typography-title-3 tab-hour">
          {{ $t(`${tab}.hours`) }}
        </h2>

        <Reception v-if="tab === 'reception'" />
        <Cocktail v-if="tab === 'cocktail'" />
        <Diner v-if="tab === 'diner'" />
        <Party v-if="tab === 'party'" />
        <After v-if="tab === 'after'" />
      </article>
    </section>

    <button
      v-if="!tabs.includes('after')"
      type="button"
      class="typography-link move-day-button"
      @click="handleSelectNextDay()"
    >
      {{ $t(`next-day-button`) }}
    </button>
    <button
      v-if="tabs.includes('after')"
      type="button"
      class="typography-link move-day-button"
      @click="handleSelectPrevDay()"
    >
      {{ $t(`prev-day-button`) }}
    </button>
  </main>
</template>

<script>
import Reception from '~/components/mariage/menu/reception.vue'
import Cocktail from '~/components/mariage/menu/cocktail.vue'
import Diner from '~/components/mariage/menu/diner.vue'
import Party from '~/components/mariage/menu/party.vue'
import After from '~/components/mariage/menu/after.vue'

export default {
  components: {
    Cocktail,
    Reception,
    Diner,
    Party,
    After,
  },
  layout: 'mariage',
  data() {
    const now = new Date()
    const currentDay = now.getDay()
    const currentHour = now.getHours()
    const currentMinutes = now.getMinutes()

    const currentPeriod =
      currentDay === 7 && currentHour > 5
        ? 'after'
        : currentDay === 7 && currentHour <= 5
        ? 'after'
        : currentHour >= 23 && currentMinutes >= 30
        ? 'after'
        : currentHour >= 20
        ? 'diner'
        : currentHour >= 17 && currentMinutes >= 30
        ? 'cocktail'
        : 'reception'

    const tabs = ['party', 'after'].includes(currentPeriod)
      ? ['party', 'after']
      : ['reception', 'cocktail', 'diner']

    return {
      selectedTab: currentPeriod,
      tabs,
      prevUrl: this.$route.query.prevUrl ?? '/mariage',
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
  methods: {
    handleSelectTab(newSelectedTab) {
      this.selectedTab = newSelectedTab
    },
    handleSelectNextDay() {
      this.selectedTab = 'after'
      this.tabs = ['party', 'after']
    },
    handleSelectPrevDay() {
      this.selectedTab = 'cocktail'
      this.tabs = ['reception', 'cocktail', 'diner']
    },
  },
}
</script>

<style scoped>
#wedding-menu {
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
.header-nav {
  position: absolute;
  left: 1rem;
}

.infos {
  padding: 0 1rem;
}
.infos .tabpanel {
  padding: 1rem;
  box-sizing: border-box;
}

.tab-hour {
  font-style: italic;
}

.move-day-button {
  border: none;
  background: none;
  display: inline-block;
  text-align: right;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
}
</style>

<style>
#wedding-menu .detail {
  text-align: center;
}

#wedding-menu .detail p {
  text-align: left;
}

#wedding-menu .detail .typography-title-2 {
  margin: 1.5rem 0 0.5rem 0;
  text-align: center;
}

#wedding-menu .detail .typography-title-3 {
  margin: 1rem 0 0.25rem 0;
}

#wedding-menu .detail .typography-title-4 {
  margin: 0 0 0.25rem 0;
}

#wedding-menu .detail hr {
  margin: 1rem 0;
}

@media (orientation: portrait) {
  #wedding-menu .detail {
    text-align: left;
  }

  #wedding-menu .detail .typography-title-3 {
    text-align: left;
  }
  #wedding-menu .detail .typography-title-4 {
    text-align: left;
  }
}
</style>
