<i18n>
{
  "fr": {
    "title": "Où et quand",
    "day1": {
      "title": "19 août 2023",
      "council": {
        "title": "Mariage civil",
        "duration": "13h - 13h30",
        "address": {
          "line1": "La mairie de Donville-les-Bains",
          "line2": "97 Route de Coutances",
          "line3": "50350 Donville-les-Bains"
        }
      },
      "church": {
        "title": "Mariage religieux",
        "duration": "14h - 15h",
        "address": {
          "line1": "L'église de Notre-Dame du Cap Lihou",
          "line2": "Place du Parvis Notre Dame",
          "line3": "50400 Granville"
        }
      },
      "wineReceptionOnly": {
        "title": "Vin d'honneur",
        "duration": "16h - 19h",
        "address": {
          "line1": "Château de la Crête",
          "line2": "476 Rue de la Crète",
          "line3": "50400 Granville"
        }
      },
      "allParty": {
        "title": "Réjouissances",
        "duration": "16h - 5h",
        "address": {
          "line1": "Château de la Crête",
          "line2": "476 Rue de la Crète",
          "line3": "50400 Granville"
        }
      }
    },
    "day2": {
      "title": "20 août 2023",
      "comeback": {
        "title": "Retour des mariés",
        "duration": "à partir de 11h",
        "address": {
          "line1": "Château de la Crête",
          "line2": "476 Rue de la Crète",
          "line3": "50400 Granville"
        }
      }
    }
  },
  "en": {
    "title": "Where and when",
    "day1": {
      "title": "19th of August 2023",
      "council": {
        "title": "Civil marriage",
        "duration": "1pm - 1.30pm",
        "address": {
          "line1": "Town hall of Donville-les-Bains",
          "line2": "97 Route de Coutances",
          "line3": "50350 Donville-les-Bains"
        }
      },
      "church": {
        "title": "Religious marriage",
        "duration": "2pm - 3pm",
        "address": {
          "line1": "Church of Notre-Dame du Cap Lihou",
          "line2": "Place du Parvis Notre Dame",
          "line3": "50400 Granville"
        }
      },
      "wineReceptionOnly": {
        "title": "Reception",
        "duration": "4pm - 7pm",
        "address": {
          "line1": "Château de la Crête",
          "line2": "476 Rue de la Crète",
          "line3": "50400 Granville"
        }
      },
      "allParty": {
        "title": "Festivities",
        "duration": "4pm - 5am",
        "address": {
          "line1": "Château de la Crête",
          "line2": "476 Rue de la Crète",
          "line3": "50400 Granville"
        }
      }
    },
    "day2": {
      "title": "20th of August 2023",
      "comeback": {
        "title": "Return of the newlyweds",
        "duration": "from 11am",
        "address": {
          "line1": "Château de la Crête",
          "line2": "476 Rue de la Crète",
          "line3": "50400 Granville"
        }
      }
    }
  }
}
</i18n>

<template>
  <section class="map-schedule">
    <div class="schedule">
      <h3 class="schedule-title">{{ $t('title') }}</h3>
      <article>
        <h4 class="schedule-subtitle">{{ $t('day1.title') }}</h4>
        <div class="schedule-day">
          <div
            v-if="invitation.invitedTo.cityHall"
            class="schedule-item"
            @click="onSelect($event, 'council')"
          >
            <img
              class="schedule-item-icon"
              alt=""
              src="../00_shared/assets/mariage_civil.svg"
            />
            <h4 class="schedule-item-title">{{ $t('day1.council.title') }}</h4>
            <div class="schedule-item-hour">
              {{ $t('day1.council.duration') }}
            </div>
            <address class="schedule-item-address">
              {{ $t('day1.council.address.line1') }}<br />
              {{ $t('day1.council.address.line2') }} <br />
              {{ $t('day1.council.address.line3') }}
            </address>
          </div>
          <div
            v-if="invitation.invitedTo.church"
            class="schedule-item"
            @click="onSelect($event, 'church')"
          >
            <img
              class="schedule-item-icon"
              alt=""
              src="../00_shared/assets/church.svg"
            />
            <h4 class="schedule-item-title">{{ $t('day1.church.title') }}</h4>
            <div class="schedule-item-hour">
              {{ $t('day1.church.duration') }}
            </div>
            <address class="schedule-item-address">
              {{ $t('day1.church.address.line1') }}<br />
              {{ $t('day1.church.address.line2') }} <br />
              {{ $t('day1.church.address.line3') }}
            </address>
          </div>

          <div
            v-if="
              invitation.invitedTo.party || invitation.invitedTo.wineReception
            "
            class="schedule-item"
            @click="onSelect($event, 'castle')"
          >
            <img class="schedule-item-icon" alt="" src="./assets/castle.svg" />
            <h4 class="schedule-item-title">
              {{
                $t(
                  invitation.invitedTo.party
                    ? 'day1.allParty.title'
                    : 'day1.wineReceptionOnly.title'
                )
              }}
            </h4>
            <div class="schedule-item-hour">
              {{
                $t(
                  invitation.invitedTo.party
                    ? 'day1.allParty.duration'
                    : 'day1.wineReceptionOnly.duration'
                )
              }}
            </div>
            <address class="schedule-item-address">
              {{
                $t(
                  invitation.invitedTo.party
                    ? 'day1.allParty.address.line1'
                    : 'day1.wineReceptionOnly.address.line1'
                )
              }}<br />
              {{
                $t(
                  invitation.invitedTo.party
                    ? 'day1.allParty.address.line2'
                    : 'day1.wineReceptionOnly.address.line2'
                )
              }}
              <br />
              {{
                $t(
                  invitation.invitedTo.party
                    ? 'day1.allParty.address.line3'
                    : 'day1.wineReceptionOnly.address.line3'
                )
              }}
            </address>
          </div>
        </div>
      </article>

      <article v-if="invitation.invitedTo.after">
        <h4 class="schedule-subtitle">{{ $t('day2.title') }}</h4>
        <div class="schedule-day">
          <div class="schedule-item" @click="onSelect($event, 'castle')">
            <img
              class="schedule-item-icon"
              alt=""
              src="../00_shared/assets/just-maried.svg"
            />
            <h4 class="schedule-item-title">{{ $t('day2.comeback.title') }}</h4>
            <div class="schedule-item-hour">
              {{ $t('day2.comeback.duration') }}
            </div>
            <address class="schedule-item-address">
              {{ $t('day2.comeback.address.line1') }}<br />
              {{ $t('day2.comeback.address.line2') }} <br />
              {{ $t('day2.comeback.address.line3') }}
            </address>
          </div>
        </div>
      </article>
    </div>
    <div id="gmap" ref="gmap-ref"></div>
  </section>
</template>

<script>
import churchPointerImg from './assets/church_pointer.png'
import castlePointerImg from './assets/castle_pointer.png'
import councilPointerImg from './assets/council_pointer.png'

export default {
  props: {
    invitation: {
      type: Object,
      required: true,
    },
  },
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
      this.$refs['gmap-ref'].scrollIntoView({ behavior: 'smooth' })
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
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 20rem;
}

.schedule-item:hover {
  box-shadow: 0 0.25rem 1rem #9b61a7;
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
