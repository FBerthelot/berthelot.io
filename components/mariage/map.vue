<template>
  <section class="map-schedule">
    <div id="gmap" ref="gmap-ref"></div>
    <div class="schedule">
      <h3 class="schedule-title">Programme des festivités</h3>
      <article>
        <h4 class="schedule-subtitle">
          Jour 1 - Mariage le samedi 20 août 2023
        </h4>
        <details
          :open="elementSelected === 'council'"
          @click="onSelect($event, 'council')"
        >
          <summary>13h à 13h30 - Mariage civil 🏫</summary>
          <address>
            La mairie de Donville-les-Bains<br />
            97 Route de Coutances <br />
            50350 Donville-les-Bains
          </address>
        </details>
        <details
          :open="elementSelected === 'church'"
          @click="onSelect($event, 'church')"
        >
          <summary>14h à 15h - Mariage religieux 💒</summary>
          <address>
            L'église de Notre-Dame du Cap Lihou<br />
            Place du Parvis Notre Dame<br />
            50400 Granville
          </address>
        </details>

        <details
          :open="elementSelected === 'wineReception'"
          @click="onSelect($event, 'wineReception')"
        >
          <summary>16h à 17h30 - Vin d'honneur 🎉</summary>
          <address>
            Château de la Crête<br />
            476 Rue de la Crète<br />
            50400 Granville
          </address>
        </details>

        <details
          :open="elementSelected === 'cocktail'"
          @click="onSelect($event, 'cocktail')"
        >
          <summary>17h30 à 19h30 - Cocktail 🥂</summary>
          <address>
            Château de la Crête<br />
            476 Rue de la Crète<br />
            50400 Granville
          </address>
        </details>

        <details
          :open="elementSelected === 'lunch'"
          @click="onSelect($event, 'lunch')"
        >
          <summary>20h - Dîner 🍽</summary>
          <address>
            Château de la Crête<br />
            476 Rue de la Crète<br />
            50400 Granville
          </address>
        </details>

        <details
          :open="elementSelected === 'dancing'"
          @click="onSelect($event, 'dancing')"
        >
          <summary>23h30 - Ouverture du bal 💃🏽🕺🏻</summary>
          <address>
            Château de la Crête<br />
            476 Rue de la Crète<br />
            50400 Granville
          </address>
        </details>

        <details
          :open="elementSelected === 'driver'"
          @click="onSelect($event, 'driver')"
        >
          <summary>1h30 - Ouverture du service voiturier 🚕</summary>
          <address>
            Château de la Crête<br />
            476 Rue de la Crète<br />
            50400 Granville
          </address>
        </details>
      </article>

      <article>
        <h4 class="schedule-subtitle">
          Jour 2 - Retour des mariés le dimanche 20 août 2023
        </h4>
        <details
          :open="elementSelected === 'chill'"
          @click="onSelect($event, 'chill')"
        >
          <summary>11h à 18h - Chill tous ensemble</summary>
          <address>
            Château de la Crête<br />
            476 Rue de la Crète<br />
            50400 Granville
          </address>
        </details>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      map: null,
      markers: {
        castle: {
          position: {
            lat: 48.82745538689812,
            lng: -1.5813597743139869,
          },
          label: 'Château',
          title: 'Château de la Crête',
        },
        church: {
          position: {
            lat: 48.837211427949974,
            lng: -1.6049305131131149,
          },
          label: 'Église',
          title: 'Église Notre Dame du Cap Lihou',
        },
        council: {
          position: {
            lat: 48.847201739752144,
            lng: -1.5803493159197195,
          },
          label: 'Mairie',
          title: 'Mairie de Donville-les-Bains',
        },
      },
      elementSelected: null,
    }
  },
  computed: {
    placeSelected() {
      return this.elementSelected
        ? this.elementSelected === 'council'
          ? 'council'
          : this.elementSelected === 'church'
          ? 'church'
          : 'castle'
        : null
    },
  },
  mounted() {
    window.initMap = () => {
      this.map = new window.google.maps.Map(this.$refs['gmap-ref'], {
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        mapTypeId: 'satellite',
      })

      const infoWindow = new window.google.maps.InfoWindow()
      const bounds = new window.google.maps.LatLngBounds()

      Object.keys(this.markers).forEach((place) => {
        this.markers[place].marker = new window.google.maps.Marker({
          ...this.markers[place],
          map: this.map,
        })

        bounds.extend(this.markers[place].marker.getPosition())

        this.markers[place].marker.addListener('click', () => {
          infoWindow.close()
          infoWindow.setContent(this.markers[place].marker.getTitle())
          infoWindow.open(
            this.markers[place].marker.getMap(),
            this.markers[place].marker
          )
          this.elementSelected =
            place === 'church'
              ? 'church'
              : place === 'council'
              ? 'council'
              : 'wineReception'
        })
      })

      this.map.fitBounds(bounds)
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAn1-5rizMpzzJTPnnO5acHg5gA_OpFEhw&callback=initMap&v=weekly'
    document.body.appendChild(script)
  },
  updated() {
    Object.keys(this.markers).forEach((place) => {
      if (this.markers[place].marker.getAnimation() !== null) {
        this.markers[place].marker.setAnimation(null)
      }
    })
    if (this.placeSelected) {
      this.markers[this.placeSelected].marker.setAnimation(
        window.google.maps.Animation.BOUNCE
      )
    }
  },
  methods: {
    onSelect(event, place) {
      event.preventDefault()
      this.elementSelected = this.elementSelected === place ? null : place
    },
  },
}
</script>

<style scoped>
.map-schedule {
  display: flex;
  width: 100%;
  height: 50vh;
}

#gmap {
  width: 60%;
  height: 100%;
}

.schedule {
  width: 40%;
}

.schedule-title {
  text-align: center;
  margin: 1rem 0;
  line-height: 2rem;
  font-size: 1.3rem;
}

.schedule-subtitle {
  line-height: 2rem;
  font-size: 1rem;
}

details {
  margin-left: 2rem;
}

details[open='open'] {
  margin-bottom: 1rem;
}

summary {
  margin-left: -1.5rem;
  margin-bottom: 0.25rem;
}
</style>
