<!-- eslint-disable @intlify/vue-i18n/no-html-messages -->

<i18n>
{
  "fr": {
    "title": "Hébergement",
    "subtitle": "Voici quelques possibilités de logements.",
    "driver": "N'oubliez pas qu'un service de taxi sera à votre disposition gratuitement pour que vous puissiez rentrer dormir en sécurité. <br>Il sera disponible pour vous ramener entre 1h et 5h du matin, si votre logement est situé dans un rayon de 10 km autour du Château de la Crête. Le lendemain, il repassera chercher les conducteurs entre 11 et 12h pour les ramener au Château.",

    "gites": {
      "title": "Gîtes"
    },
    "hostel": {
      "title": "Hôtels"
    },
    "houses": {
      "title": "Location"
    }
  },
  "en": {
    "title": "Accommodation",
    "subtitle": "Here are a few options for your accommodation.",
    "driver": "Please remember that a taxi service will be available free of charge so you can go back safely for the night. <br>The taxi will be able to take you back between 1:00am and 5:00am, if your chosen accommodation is located within 10 km around the Château de la Crête. The next day, the taxi will come back to pick up the drivers from 11:00am to 12:00pm and take them back to the Château.",

    "gites": {
      "title": "B&B"
    },
    "hostel": {
      "title": "Hotels"
    },
    "houses": {
      "title": "Rentals"
    }
  }
}
</i18n>

<!-- eslint-disable @intlify/vue-i18n/no-raw-text @intlify/vue-i18n/no-v-html vue/no-v-html -->

<template>
  <section class="hosting">
    <h2 class="title">{{ $t('title') }}</h2>
    <h2 class="subtitle" v-html="$t('subtitle')"></h2>

    <div class="driver">
      <img src="../00_shared/assets/driver.svg" class="driver-icon" alt="" />
      <div v-html="$t('driver')"></div>
    </div>

    <div class="tablist" role="tablist" aria-labelledby="tablist-1">
      <button
        id="tab-1"
        type="button"
        class="tab"
        role="tab"
        :aria-selected="selectedTab === 'bnb'"
        aria-controls="tabpanel-1"
        @click="changeSelectedTab('bnb')"
      >
        {{ $t('gites.title') }}
      </button>
      <button
        id="tab-2"
        type="button"
        class="tab"
        role="tab"
        :aria-selected="selectedTab === 'hotel'"
        aria-controls="tabpanel-2"
        tabindex="-1"
        @click="changeSelectedTab('hotel')"
      >
        {{ $t('hostel.title') }}
      </button>
      <button
        id="tab-3"
        type="button"
        class="tab"
        role="tab"
        :aria-selected="selectedTab === 'houses'"
        aria-controls="tabpanel-3"
        tabindex="-1"
        @click="changeSelectedTab('houses')"
      >
        {{ $t('houses.title') }}
      </button>
    </div>

    <article
      :class="{
        'hosting-type': true,
        'hosting-type__open': selectedTab === 'bnb',
      }"
      role="tabpanel"
      tabindex="-1"
      aria-labelledby="tab-1"
    >
      <div class="item">
        <a
          class="item-title"
          target="__blank"
          href="https://www.chambres-lacotentine-manche.com/"
          >La Cotentine</a
        >
        <address>Saint-Pair-sur-Mer (2km)</address>
      </div>
      <div class="item">
        <a
          class="item-title"
          href="http://www.lelogisdequilly.fr/index.php/fr/"
          target="__blank"
        >
          Logis d'Equilly
        </a>
        <address>Equilly (17km)</address>
        <div class="phone-number">
          <a href="tel:+33975851620">09 75 85 16 20</a> /
          <a href="tel:+33233610471">02 33 61 04 71</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          target="__blank"
          href="https://www.tourisme-granville-terre-mer.com/ou-dormir/locations-de-vacances/gites-de-france-g404-les-eucalyptus-2373130"
        >
          Valérie et Eric Lorin
        </a>
        <address>Jullouville (11km)</address>
        <div class="phone-number">
          <a href="tel:+33676626034">06 76 62 60 34</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          target="__blank"
          href="http://www.manoirdumesnil.fr"
        >
          Manoir du Mesnil de Bas
        </a>
        <address>Bréhal (13km)</address>
        <div class="phone-number">
          <a href="tel:+33669159497">06 69 15 94 97</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          target="__blank"
          href="http://www.lelogisduroc.com/"
        >
          Le Logis du Roc
        </a>
        <address>Granville (3km)</address>
        <div class="phone-number">
          <a href="tel:+33233507571">02 33 50 75 71</a>
          /
          <a href="tel:+33618358742 ">06 18 35 87 42 </a>
        </div>
      </div>
      <div class="item">
        <a class="item-title" target="__blank" href="http://villabelamy.fr/">
          Villa Bel Amy
        </a>
        <address>Saint-Pair-sur-Mer (2km)</address>
        <div class="phone-number">
          <a href="tel:+33677945023">06 77 94 50 23</a>
        </div>
      </div>
    </article>

    <article
      :class="{
        'hosting-type': true,
        'hosting-type__open': selectedTab === 'hotel',
      }"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-1"
    >
      <div class="item">
        <a
          class="item-title"
          target="__blank"
          href="https://www.tripadvisor.fr/Hotel_Review-g951898-d251744-Reviews-Hotel_ibis_Granville_Port_de_Plaisance-Granville_Manche_Basse_Normandie_Normandy.html"
        >
          Hôtel Ibis Le Hérel
        </a>
        <address>Granville (3km)</address>
        <div class="phone-number">
          <a href="tel:+33233904800">02 33 90 48 00</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          target="__blank"
          href="https://all.accor.com/hotel/6644/index.fr.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"
        >
          Hôtel Mercure Le Grand Large
        </a>
        <address>Granville (4km)</address>
        <div class="phone-number">
          <a href="tel:+33233911919">02 33 91 19 19</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          href="https://www.hoteldumuseegranville.com/"
          target="__blank"
        >
          Hôtel du Musée
        </a>
        <address>Granville (4km)</address>
        <div class="phone-number">
          <a href="tel:+33233500300">02 33 50 03 00</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          href="http://hotelauboutduquai.free.fr/"
          target="__blank"
        >
          Hôtel Au bout du quai
        </a>
        <address>Granville (4km)</address>
        <div class="phone-number">
          <a href="tel:+33233500205">02 33 50 02 05</a>
        </div>
      </div>
      <div class="item">
        <a
          class="item-title"
          href="https://lerelaisdesiles.com/hotel-2/"
          target="__blank"
        >
          Le Relais des Iles</a
        >
        <address>Coudeville sur mer (13km)</address>
        <div class="phone-number">
          <a href="tel:+33233614350">02 33 61 43 50</a>
        </div>
      </div>
      <div class="item">
        <a class="item-title" href="https://previthal.com/fr/" target="__blank">
          Prévithal Hôtel de la Baie
        </a>
        <address>Donville les Bains (4km)</address>
        <div class="phone-number">
          <a href="tel:+33233903110"> 02 33 90 31 10</a>
        </div>
      </div>
    </article>

    <article
      :class="{
        'hosting-type': true,
        'hosting-type__open': selectedTab === 'houses',
      }"
      role="tabpanel"
      tabindex="0"
      aria-labelledby="tab-1"
    >
      <div class="item">
        <a
          href="http://www.ailleurschezmoi.fr"
          target="__blank"
          class="item-title"
        >
          Ailleurs chez moi</a
        >
        <div class="phone-number">
          <a href="tel:+33233490236">02 33 49 02 36</a>
          <a href="mailto:contact@ailleurschezmoi.com"
            >contact@ailleurschezmoi.com</a
          >
        </div>
      </div>

      <div class="item">
        <a
          href="http://www.conciergerielesmouettes.fr"
          target="__blank"
          class="item-title"
        >
          Conciergerie Les Mouettes
        </a>
        <div class="phone-number">
          <a href="tel:+33674071327">
            Aurore Charbonnel<br />
            06 74 07 13 27
          </a>
        </div>
      </div>

      <div class="item">
        <a href="http://www.damdambnb.com" target="__blank" class="item-title">
          Damdambnb
        </a>
        <address>
          Kairon plage (4km)<br />
          et<br />
          Saint-Pair-sur-Mer (2km)
        </address>
      </div>

      <div class="item">
        <a
          href="http://www.abritel.fr/location-vacances/p900915"
          target="__blank"
          class="item-title"
        >
          Abritel 1
        </a>
        <address>Granville (3km)</address>
      </div>

      <div class="item">
        <a
          href="http://www.abritel.fr/location-vacances/p1210724"
          target="__blank"
          class="item-title"
        >
          Abritel 2
        </a>
        <address>Granville (3km)</address>
      </div>

      <div class="item">
        <a
          href="http://www.abritel.fr/location-vacances/p1677857a"
          target="__blank"
          class="item-title"
        >
          Abritel 3
        </a>
        <address>Granville (3km)</address>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'hotel',
    }
  },
  methods: {
    changeSelectedTab(tabName) {
      this.selectedTab = tabName
    },
  },
}
</script>

<style scoped>
.hosting {
  color: #2e3f4b;
  background-color: #f1e8ff;

  padding: 3rem 0;
  width: 100%;
  box-sizing: border-box;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;

  text-align: center;
}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: center;
}

.driver {
  width: calc(100% - 40rem);
  padding: 1.5rem 20rem;

  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.driver-icon {
  width: 3.25rem;
  margin-right: 2rem;
}

.tablist {
  width: 90vw;
  margin-left: 5vw;
  display: flex;
}

.tab {
  flex: 1;
  background: #f7f7f7;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding: 1rem 0.5rem;
  margin-top: 2rem;
  border: none;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  cursor: pointer;
}

.tab[aria-selected='true'] {
  background: white;
}

.hosting-type {
  background: white;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem 0;

  width: 90vw;
  margin-left: 5vw;

  display: none;

  box-shadow: 0px 4px 1rem 0px #0000000d;
}

.item {
  background: #faf8ff;
  border-radius: 0.5rem;
  border: 1px solid #f1e8ff;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  min-height: 6rem;
  width: 22rem;

  text-align: center;
}

.item-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #000000;
}

a.item-title {
  color: #000000;
  text-decoration: underline;
}

a.item-title:hover,
a.item-title:focus {
  outline: none;
  color: #8d4b9a;
}

.item address {
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.25rem;
}

.phone-number,
.phone-number a {
  color: #000000;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0.25rem;
  text-decoration: none;
}

.phone-number a:hover {
  color: #8d4b9a;
  text-decoration: underline;
}

.hosting-type__open {
  display: flex;
}

@media screen and (max-width: 900px) {
  .hosting {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
    text-align: center;
  }

  .subtitle {
    font-size: 1rem;
    line-height: 1.375rem;
    text-align: center;
  }

  .tablist,
  .hosting-type {
    width: 100%;
    margin-left: 0;
  }

  .item {
    width: 18rem;
  }

  .driver {
    width: 100%;
    padding: 0;
    margin: 2rem 0 0 0;
  }
  .driver-icon {
    width: 2rem;
  }
}
</style>
