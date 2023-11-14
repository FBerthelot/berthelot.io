<i18n lang="json">
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
        "title": "Post-wedding brunch",
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
      <h3 class="schedule-title">{{ t('title') }}</h3>
      <article>
        <h4 class="schedule-subtitle">{{ t('day1.title') }}</h4>
        <div class="schedule-day">
          <div
            v-if="invitation.invitedTo.cityHall"
            class="schedule-item"
            @click="onSelect($event, 'council')"
          >
            <img
              class="schedule-item-icon"
              alt=""
              src="../00_design-system/icons/mariage_civil.svg"
            />
            <h4 class="schedule-item-title">{{ t('day1.council.title') }}</h4>
            <div class="schedule-item-hour">
              {{ t('day1.council.duration') }}
            </div>
            <address class="schedule-item-address">
              {{ t('day1.council.address.line1') }}<br />
              {{ t('day1.council.address.line2') }} <br />
              {{ t('day1.council.address.line3') }}
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
              src="../00_design-system/icons/church.svg"
            />
            <h4 class="schedule-item-title">{{ t('day1.church.title') }}</h4>
            <div class="schedule-item-hour">
              {{ t('day1.church.duration') }}
            </div>
            <address class="schedule-item-address">
              {{ t('day1.church.address.line1') }}<br />
              {{ t('day1.church.address.line2') }} <br />
              {{ t('day1.church.address.line3') }}
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
                invitation.invitedTo.party
                  ? t('day1.allParty.title')
                  : t('day1.wineReceptionOnly.title')
              }}
            </h4>
            <div class="schedule-item-hour">
              {{
                invitation.invitedTo.party
                  ? t('day1.allParty.duration')
                  : t('day1.wineReceptionOnly.duration')
              }}
            </div>
            <address class="schedule-item-address">
              {{
                invitation.invitedTo.party
                  ? t('day1.allParty.address.line1')
                  : t('day1.wineReceptionOnly.address.line1')
              }}<br />
              {{
                invitation.invitedTo.party
                  ? t('day1.allParty.address.line2')
                  : t('day1.wineReceptionOnly.address.line2')
              }}
              <br />
              {{
                invitation.invitedTo.party
                  ? t('day1.allParty.address.line3')
                  : t('day1.wineReceptionOnly.address.line3')
              }}
            </address>
          </div>
        </div>
      </article>

      <article v-if="invitation.invitedTo.after">
        <h4 class="schedule-subtitle">{{ t('day2.title') }}</h4>
        <div class="schedule-day">
          <div class="schedule-item" @click="onSelect($event, 'castle')">
            <img
              class="schedule-item-icon"
              alt=""
              src="../00_design-system/icons/just-maried.svg"
            />
            <h4 class="schedule-item-title">{{ t('day2.comeback.title') }}</h4>
            <div class="schedule-item-hour">
              {{ t('day2.comeback.duration') }}
            </div>
            <address class="schedule-item-address">
              {{ t('day2.comeback.address.line1') }}<br />
              {{ t('day2.comeback.address.line2') }} <br />
              {{ t('day2.comeback.address.line3') }}
            </address>
          </div>
        </div>
      </article>
    </div>
    <div id="gmap" ref="gmapRef"></div>
  </section>
</template>

<script setup lang="js">
import churchPointerImg from './assets/church_pointer.png'
import castlePointerImg from './assets/castle_pointer.png'
import councilPointerImg from './assets/council_pointer.png'
import parkingPointerImg from './assets/parking.png'
import { onMounted, onUpdated, ref } from 'vue'

const { invitation } = defineProps({
  invitation: {
    type: Object,
    required: true,
  },
})

const { t } = useI18n({
  useScope: 'local',
})
const runtimeConfig = useRuntimeConfig()

const map = ref(null)
const markers = ref({
  castle: {
    position: {
      lat: 48.82692,
      lng: -1.58139,
    },
    title: 'Château de la Crête',
    icon: {
      url: castlePointerImg,
      w: 81 * 0.5,
      h: 110 * 0.5,
    },
  },
  castleParking1: {
    position: {
      lat: 48.828589,
      lng: -1.580086,
    },
    label: 'Parking rue de la Crète',
    icon: {
      url: parkingPointerImg,
      w: 110 * 0.25,
      h: 110 * 0.25,
      labelOrigin: {
        x: 110 * 0.125,
        y: -110 * 0.125,
      },
    },
  },
  castleParking2: {
    position: {
      lat: 48.829468,
      lng: -1.580203,
    },
    label: 'Parking Lycée',
    icon: {
      url: parkingPointerImg,
      w: 110 * 0.25,
      h: 110 * 0.25,
      labelOrigin: {
        x: 110 * 0.125,
        y: -110 * 0.125,
      },
    },
  },
  church: {
    position: {
      lat: 48.83667,
      lng: -1.60494,
    },
    title: 'Église Notre Dame du Cap Lihou',
    icon: {
      url: churchPointerImg,
      w: 57 * 0.5,
      h: 110 * 0.5,
    },
  },
  churchParking1: {
    position: {
      lat: 48.836575,
      lng: -1.607816,
    },
    label: "Parking Place d'Armes",
    icon: {
      url: parkingPointerImg,
      w: 110 * 0.25,
      h: 110 * 0.25,
      labelOrigin: {
        x: 110 * 0.125,
        y: -110 * 0.125,
      },
    },
  },
  churchParking2: {
    position: {
      lat: 48.83425,
      lng: -1.60999,
    },
    label: 'Parking du Vaufleury',
    icon: {
      url: parkingPointerImg,
      w: 110 * 0.25,
      h: 110 * 0.25,
      labelOrigin: {
        x: 110 * 0.125,
        y: -110 * 0.125,
      },
    },
  },
  council: {
    position: {
      lat: 48.84708,
      lng: -1.5804,
    },
    title: 'Mairie de Donville-les-Bains',
    icon: {
      url: councilPointerImg,
      w: 62 * 0.5,
      h: 110 * 0.5,
    },
    shouldDipslay: !!invitation.invitedTo.cityHall,
  },
  councilParking1: {
    position: {
      lat: 48.846718,
      lng: -1.580078,
    },
    label: 'Parking de la Mairie',
    icon: {
      url: parkingPointerImg,
      w: 110 * 0.25,
      h: 110 * 0.25,
      labelOrigin: {
        x: 110 * 0.125,
        y: -110 * 0.125,
      },
    },
    shouldDipslay: !!invitation.invitedTo.cityHall,
  },
  councilParking2: {
    position: {
      lat: 48.846197,
      lng: -1.579838,
    },
    label: 'Parking rue Goupy',
    icon: {
      url: parkingPointerImg,
      w: 110 * 0.25,
      h: 110 * 0.25,
      labelOrigin: {
        x: 110 * 0.125,
        y: -110 * 0.125,
      },
    },
    shouldDipslay: !!invitation.invitedTo.cityHall,
  },
})
const gmapRef = ref()

const onSelect = (event, place) => {
  event.preventDefault()
  gmapRef.value.scrollIntoView({ behavior: 'smooth' })
  const bounds = new window.google.maps.LatLngBounds()
  bounds.extend(markers.value[place].marker.getPosition())
  bounds.extend(markers.value[place + 'Parking1'].marker.getPosition())
  bounds.extend(markers.value[place + 'Parking2'].marker.getPosition())
  map.value.fitBounds(bounds)
}

onMounted(() => {
  window.initMap = () => {
    const mapStyle = [
      {
        featureType: 'administrative.land_parcel',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.neighborhood',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.business',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
    ]
    map.value = new window.google.maps.Map(gmapRef.value, {
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      styles: mapStyle,
    })
    const infoWindow = new window.google.maps.InfoWindow()
    const bounds = new window.google.maps.LatLngBounds()
    Object.keys(markers.value)
      .filter((place) => markers.value[place].shouldDipslay !== false)
      .forEach((place) => {
        markers.value[place].marker = new window.google.maps.Marker({
          ...markers.value[place],
          icon: {
            ...markers.value[place].icon,
            url: markers.value[place].icon.url,
            scaledSize: new window.google.maps.Size(
              markers.value[place].icon.w,
              markers.value[place].icon.h,
            ),
          },
          map: map.value,
        })
        bounds.extend(markers.value[place].marker.getPosition())
        if (markers.value[place].title) {
          markers.value[place].marker.addListener('click', () => {
            infoWindow.close()
            infoWindow.setContent(markers.value[place].marker.getTitle())
            infoWindow.open(
              markers.value[place].marker.getMap(),
              markers.value[place].marker,
            )
            onSelect({ preventDefault: () => {} }, place)
          })
        }
      })
    map.value.fitBounds(bounds)
    map.value.addListener('zoom_changed', () => {
      const zoom = map.value.getZoom()
      Object.keys(markers.value)
        .filter((place) => markers.value[place].shouldDipslay !== false)
        .forEach((place) => {
          if (place.endsWith('Parking1') || place.endsWith('Parking2')) {
            markers.value[place].marker.setVisible(zoom >= 15)
          }
        })
    })
  }
  const script = document.createElement('script')
  script.type = 'text/javascript'
  if (runtimeConfig.public.MAPS_URL) {
    script.src = runtimeConfig.public.MAPS_URL
  }
  document.body.appendChild(script)
})

onUpdated(() => {
  Object.keys(markers.value)
    .filter((place) => markers.value[place].shouldDipslay !== false)
    .forEach((place) => {
      if (markers.value[place].marker?.getAnimation() !== null) {
        markers.value[place].marker?.setAnimation(null)
      }
    })
})
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
  text-align: center;
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
