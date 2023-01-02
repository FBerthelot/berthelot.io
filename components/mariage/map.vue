<template>
  <section class="map-schedule">
    <div class="schedule">
      <h3 class="schedule-title">Où et quand</h3>
      <article>
        <h4 class="schedule-subtitle">19 août 2023</h4>
        <div class="schedule-day">
          <div class="schedule-item" @click="onSelect($event, 'council')">
            <img
              class="schedule-item-icon"
              alt=""
              src="./img/mariage_civil.svg"
            />
            <h4 class="schedule-item-title">Mariage civil</h4>
            <div class="schedule-item-hour">13h - 13h30</div>
            <address class="schedule-item-address">
              La mairie de Donville-les-Bains<br />
              97 Route de Coutances <br />
              50350 Donville-les-Bains
            </address>
          </div>
          <div class="schedule-item" @click="onSelect($event, 'church')">
            <img class="schedule-item-icon" alt="" src="./img/church.svg" />
            <h4 class="schedule-item-title">Mariage religieux</h4>
            <div class="schedule-item-hour">14h - 15h</div>
            <address class="schedule-item-address">
              L'église de Notre-Dame du Cap Lihou<br />
              Place du Parvis Notre Dame<br />
              50400 Granville
            </address>
          </div>

          <div class="schedule-item" @click="onSelect($event, 'party')">
            <img class="schedule-item-icon" alt="" src="./img/castle.svg" />
            <h4 class="schedule-item-title">Fête ou Wine selon</h4>
            <div class="schedule-item-hour">à partir de 16h</div>
            <address class="schedule-item-address">
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </div>
        </div>
      </article>

      <article>
        <h4 class="schedule-subtitle">20 août 2023</h4>
        <div class="schedule-day">
          <div class="schedule-item" @click="onSelect($event, 'chill')">
            <img
              class="schedule-item-icon"
              alt=""
              src="./img/just-maried.svg"
            />
            <h4 class="schedule-item-title">Retour des mariés</h4>
            <div class="schedule-item-hour">à partir de 11h</div>
            <address class="schedule-item-address">
              Château de la Crête<br />
              476 Rue de la Crète<br />
              50400 Granville
            </address>
          </div>
        </div>
      </article>
    </div>
    <div id="gmap" ref="gmap-ref"></div>
  </section>
</template>

<script>
import churchPointerImg from './img/church_pointer.png'
import castlePointerImg from './img/castle_pointer.png'
import councilPointerImg from './img/council_pointer.png'

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
          title: 'Château de la Crête',
          icon: {
            url: castlePointerImg,
            w: 81 * 0.5,
            h: 110 * 0.5,
          },
        },
        church: {
          position: {
            lat: 48.837211427949974,
            lng: -1.6049305131131149,
          },
          title: 'Église Notre Dame du Cap Lihou',
          icon: {
            url: churchPointerImg,
            w: 57 * 0.5,
            h: 110 * 0.5,
          },
        },
        council: {
          position: {
            lat: 48.847201739752144,
            lng: -1.5803493159197195,
          },
          title: 'Mairie de Donville-les-Bains',
          icon: {
            url: councilPointerImg,
            w: 62 * 0.5,
            h: 110 * 0.5,
          },
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
      })

      const infoWindow = new window.google.maps.InfoWindow()
      const bounds = new window.google.maps.LatLngBounds()

      Object.keys(this.markers).forEach((place) => {
        this.markers[place].marker = new window.google.maps.Marker({
          ...this.markers[place],
          icon: {
            url: this.markers[place].icon.url,
            scaledSize: new window.google.maps.Size(
              this.markers[place].icon.w,
              this.markers[place].icon.h
            ),
          },
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
              : 'party'
        })
      })

      this.map.fitBounds(bounds)
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = this.$config.MAPS_URL
    document.body.appendChild(script)
  },
  updated() {
    Object.keys(this.markers).forEach((place) => {
      if (this.markers[place].marker?.getAnimation() !== null) {
        this.markers[place].marker?.setAnimation(null)
      }
    })
    if (this.placeSelected) {
      this.markers[this.placeSelected].marker?.setAnimation(
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
  flex-direction: column;
  width: 100%;
}

#gmap {
  width: 100%;
  height: 32rem;
}

.schedule {
  width: 100%;
  padding: 3rem 0;
  background-color: #faf8ff;
  box-sizing: border-box;
}

.schedule-title {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
  color: #2e3f4b;

  margin-bottom: 2rem;

  text-align: center;
}

.schedule-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3.4rem;
  text-align: center;
  color: #8d4b9a;
}

.schedule-day {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 2rem;
  flex-wrap: wrap;
}

.schedule-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.schedule-item-icon {
  width: 5rem;
  height: 5rem;
  margin-bottom: 1.5rem;
}

.schedule-item-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: #2e3f4b;
  margin-bottom: 0.5rem;
}

.schedule-item-hour {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2rem;
  color: #2e3f4b;
  margin-bottom: 0.5rem;
}

.schedule-item-address {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: #2e3f4b;
  text-align: center;
}

@media screen and (max-width: 900px) {
  .schedule {
    padding: 2rem 1rem;
  }

  .schedule-title {
    font-size: 2rem;
    line-height: 2.75rem;
    text-align: center;
  }

  .schedule-subtitle {
    font-size: 1.75rem;
    line-height: 2.375rem;
  }
}
</style>
