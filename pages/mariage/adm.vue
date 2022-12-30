<template>
  <main id="wedding-admin-page">
    <header class="header">
      <h1 class="title">Agnès et Florent - ADMIN</h1>
    </header>

    <section class="schedule">
      <h2>Programme</h2>
      <div class="calendar">
        <div
          id="timeMarker"
          class="current-time-marker"
          :style="{
            top: `calc( var(--timeHeight) * ${
              currentDate.getHours() + currentDate.getMinutes() / 60
            } +  var(--timeHeight))`,
          }"
        ></div>
        <div class="timeline">
          <div class="spacer"></div>
          <div class="time-marker">0:00</div>
          <div class="time-marker">1:00</div>
          <div class="time-marker">2:00</div>
          <div class="time-marker">3:00</div>
          <div class="time-marker">4:00</div>
          <div class="time-marker">5:00</div>
          <div class="time-marker">6:00</div>
          <div class="time-marker">7:00</div>
          <div class="time-marker">8:00</div>
          <div class="time-marker">9:00</div>
          <div class="time-marker">10:00</div>
          <div class="time-marker">11:00</div>
          <div class="time-marker">12:00</div>
          <div class="time-marker">13:00</div>
          <div class="time-marker">14:00</div>
          <div class="time-marker">15:00</div>
          <div class="time-marker">16:00</div>
          <div class="time-marker">17:00</div>
          <div class="time-marker">18:00</div>
          <div class="time-marker">19:00</div>
          <div class="time-marker">20:00</div>
          <div class="time-marker">21:00</div>
          <div class="time-marker">22:00</div>
          <div class="time-marker">23:00</div>
        </div>
        <div class="days">
          <div class="day mon">
            <div class="date">
              <p class="date-num">19</p>
              <p class="date-day">Sam</p>
            </div>
            <div class="events">
              <div
                v-for="event in schedule.filter(
                  (event) => event.startDate < new Date('2023/08/20 00:00')
                )"
                :key="event.title"
                :style="{
                  'grid-row-start':
                    event.startDate.getHours() * 4 +
                    (event.startDate.getMinutes() / 60) * 4 +
                    1,
                  'grid-row-end':
                    event.endDate >= new Date('2023/08/20 00:00')
                      ? 25 * 4
                      : event.endDate.getHours() * 4 +
                        (event.endDate.getMinutes() / 60) * 4 +
                        1,
                }"
                :class="{
                  event: true,
                  active:
                    event.startDate < currentDate &&
                    event.endDate > currentDate,
                  finished: event.endDate < currentDate,
                }"
                :title="event.title"
              >
                <p class="title">{{ event.title }}</p>
                <time class="time">
                  {{
                    event.startDate.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  }}
                  -
                  {{
                    event.endDate.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  }}
                </time>
              </div>
            </div>
          </div>
          <div class="day tues">
            <div class="date">
              <p class="date-num">20</p>
              <p class="date-day">Dim</p>
            </div>
            <div class="events">
              <div
                v-for="event in schedule.filter(
                  (event) => event.endDate >= new Date('2023/08/20 00:00')
                )"
                :key="event.title"
                :style="{
                  'grid-row-start':
                    event.startDate < new Date('2023/08/20 00:00')
                      ? 1
                      : event.startDate.getHours() * 4 +
                        (event.startDate.getMinutes() / 60) * 4 +
                        1,
                  'grid-row-end':
                    event.endDate.getHours() * 4 +
                    (event.endDate.getMinutes() / 60) * 4 +
                    1,
                }"
                class="event"
                :title="event.title"
              >
                <p class="title">{{ event.title }}</p>
                <time class="time">
                  {{
                    event.startDate.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  }}
                  -
                  {{
                    event.endDate.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="invitations">
      <h2>Liste des invités</h2>
      <span v-if="loading">Chargement...</span>
      <span v-if="error">Erreur : {{ error }}</span>
      <div v-if="!loading" class="invites">
        <input v-model="inviteSearch" type="search" placeholder="Recherche" />
        <span v-if="!invitesFiltered.length">
          Aucun invité ne correspond à la recherche.
        </span>
        <ul class="invites-list">
          <li v-for="invite in invitesFiltered" :key="invite.name">
            <span>
              {{ invite.name }}
            </span>

            <nuxt-link
              title="Accèder à l'espace invité"
              class="icon"
              :to="`/mariage/${invite.invitation.slug}`"
            >
              🌎
            </nuxt-link>
            <a
              class="icon"
              title="Écrire un mail"
              :href="`mailto:${invite.mail}`"
              >📨</a
            >
            <a class="icon" title="Téléphoner" :href="`tel:${invite.phone}`"
              >☎</a
            >
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  layout: 'mariage',
  data() {
    return {
      loading: true,
      error: null,
      invitations: [],
      invites: [],
      inviteSearch: '',
      schedule: [
        {
          startDate: new Date('2023/08/19 12:30'),
          endDate: new Date('2023/08/19 13:00'),
          title: 'Arrivée à la Marie',
        },
        {
          startDate: new Date('2023/08/19 13:00'),
          endDate: new Date('2023/08/19 13:30'),
          title: 'Mairie',
        },
        {
          startDate: new Date('2023/08/19 13:30'),
          endDate: new Date('2023/08/19 14:00'),
          title: 'Trajet Mairie - Église',
        },
        {
          startDate: new Date('2023/08/19 14:00'),
          endDate: new Date('2023/08/19 15:30'),
          title: 'Église',
        },
        {
          startDate: new Date('2023/08/19 15:30'),
          endDate: new Date('2023/08/19 16:00'),
          title: 'Trajet Église - Château de la crête',
        },
        {
          startDate: new Date('2023/08/19 16:00'),
          endDate: new Date('2023/08/19 18:00'),
          title: "Vin d'honneur",
        },
        {
          startDate: new Date('2023/08/19 18:00'),
          endDate: new Date('2023/08/19 20:30'),
          title: 'Cocktail',
        },
        {
          startDate: new Date('2023/08/19 20:30'),
          endDate: new Date('2023/08/19 21:30'),
          title: 'Plat principal (service à table)',
        },
        {
          startDate: new Date('2023/08/19 21:30'),
          endDate: new Date('2023/08/19 22:00'),
          title: 'Fromage',
        },
        {
          startDate: new Date('2023/08/19 22:00'),
          endDate: new Date('2023/08/19 22:45'),
          title: 'Desert',
        },
        {
          startDate: new Date('2023/08/19 22:45'),
          endDate: new Date('2023/08/19 23:00'),
          title: 'Ouverture du bal',
        },
        {
          startDate: new Date('2023/08/19 22:45'),
          endDate: new Date('2023/08/20 4:00'),
          title: 'Soirée dansante',
        },
        {
          startDate: new Date('2023/08/20 04:00'),
          endDate: new Date('2023/08/20 04:30'),
          title: 'Recharge - casse dalle',
        },
        {
          startDate: new Date('2023/08/20 04:00'),
          endDate: new Date('2023/08/20 05:00'),
          title: 'Fin de soirée',
        },
        {
          startDate: new Date('2023/08/20 01:00'),
          endDate: new Date('2023/08/20 5:00'),
          title: 'Service de Voiturier disponible',
        },
        {
          startDate: new Date('2023/08/20 11:00'),
          endDate: new Date('2023/08/20 18:00'),
          title: 'Retour des mariées',
        },
      ],
      currentDate: new Date(),
      timerInterval: null,
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
  computed: {
    invitesFiltered() {
      return this.invites.filter((invite) =>
        invite.name.toLowerCase().includes(this.inviteSearch.toLowerCase())
      )
    },
  },
  mounted() {
    Promise.all([
      fetch('https://sheetdb.io/api/v1/yd2k17v9irxae?sheet=Invitations'),
      fetch('https://sheetdb.io/api/v1/yd2k17v9irxae?sheet=Liste des invités'),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([invitations, invites]) => {
        this.invitations = invitations.map((invitation) => {
          return {
            slug: invitation["Id de l'invitation"],
            name: invitation["Nom de l'invitation (Web)"],
          }
        })

        this.invites = invitations.flatMap((invitation) => {
          const invitesOfTheInvitation = [
            invitation['Personne 1'],
            invitation['Personne 2'],
            invitation['Personne 3'],
            invitation['Personne 4'],
            invitation['Personne 5'],
          ].filter(Boolean)

          return invitesOfTheInvitation.map((inviteName) => {
            const invite = invites.find((i) => i.Nom === inviteName)

            if (!invite) {
              throw new Error(
                `Il y a une erreur concernant l'invitation ${invitation["Nom de l'invitation (Web)"]}`
              )
            }

            return {
              name: inviteName,
              phone: invite['Téléphone'],
              mail: invite.Email,
              invitation: {
                slug: invitation["Id de l'invitation"],
                name: invitation["Nom de l'invitation (Web)"],
              },
            }
          })
        })

        if (this.invites.length !== invites.length) {
          throw new Error(
            'Il y a une erreur entre les invités et le nombre de personnes sur les invitations'
          )
        }
        this.loading = false
      })
      .catch((err) => {
        this.error = err
      })
      .finally(() => {
        this.loading = false
      })

    this.startTimer()

    setTimeout(() => {
      scroll(
        0,
        document.querySelector('#timeMarker').getBoundingClientRect().top - 160
      )
    }, 10)
  },
  beforeDestroy() {
    clearInterval(this.timerInterval)
  },
  methods: {
    startTimer() {
      const now = new Date()
      if (now < new Date('2023/08/19 1:00:00')) {
        if (now.getHours() >= 0 && now.getHours() < 10) {
          now.setFullYear(2023, 7, 20)
        } else {
          this.currentDate.setFullYear(2023, 7, 19)
        }
      }
      this.currentDate = now

      this.timerInterval = setInterval(() => {
        const now = new Date()
        if (now < new Date('2023/08/19 1:00:00')) {
          if (now.getHours() >= 0 && now.getHours() < 10) {
            now.setFullYear(2023, 7, 20)
          } else {
            now.setFullYear(2023, 7, 19)
          }
        }
        this.currentDate = now
      }, 1000)
    },
  },
}
</script>

<style>
:root {
  --numDays: 2;
  --numHours: 24;
  --timeHeight: 80px;
  --calBgColor: #eaeaea;
  --eventBorderColor: grey;
}
</style>

<style scoped>
#wedding-admin-page {
  background-color: white;
  color: black;
  width: 100%;
  min-height: 100%;
}

.header {
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
}

/**  Schedule **/

.schedule {
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
}

.schedule h2 {
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
}

.calendar {
  display: grid;
  gap: 10px;
  grid-template-columns: auto 1fr;
  margin: 2rem;
  position: relative;
}

.current-time-marker {
  position: absolute;
  width: 100%;
  border: 1px dashed grey;
}

.timeline {
  display: grid;
  grid-template-rows: repeat(var(--numHours), var(--timeHeight));
}

.days {
  display: grid;
  grid-column: 2;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.events {
  display: grid;
  grid-template-rows: repeat(
    calc(var(--numHours) * 4),
    calc(var(--timeHeight) / 4)
  );
  border-radius: 5px;
  background: var(--calBgColor);
}

.title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.event {
  border: 1px solid var(--eventBorderColor);
  border-radius: 5px;
  padding: 2px;
  margin: 0 0.5rem;
  background: white;
  overflow: hidden;
}

.event.active {
  background: #ff846e;
}

.event.finished {
  background: #be91c6;
}

.space,
.date {
  height: 60px;
}

.date {
  display: flex;
  gap: 1em;
}

.date-num {
  font-size: 3rem;
  font-weight: 600;
  display: inline;
}

.date-day {
  display: inline;
  font-size: 3rem;
  font-weight: 100;
}

/** Invités  **/

.invitations {
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
}

.invitations h2 {
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
}

.invites {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.invites input {
  height: 2rem;
  border-radius: 1rem;
  width: 15rem;
  padding: 0 1rem;
}

.invites-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem;
}

.invites-list li {
  padding: 1rem;
  width: 15rem;
  border: 1px solid grey;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.invites-list li span {
  color: black;
  text-decoration: none;
  flex-grow: 1;
}

.invites-list li .icon {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  text-decoration: none;
  color: black;
}

.invites-list a:hover,
.invites-list a:focus {
  text-decoration: underline;
}

@media (max-width: 500px) {
  .calendar {
    margin: 0.25rem;
  }

  .invitations {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .invites-list li {
    width: 18rem;
  }
}
</style>
