<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <main v-if="animationOver" class="main">
      <div v-if="error" class="error-container">
        Une erreur est survenu 😱. <br />
        Vous pouvez nous contacter par
        <a href="mailto:florent@berthelot.io">mail</a> ou par
        <a href="tel:+33650999618">téléphone.</a>
      </div>
      <div v-if="loading" class="error-container">
        Ta connexion internet est mauvaise 😅. Faut patienter encore un peu...
      </div>
      <div v-if="!invitation && !loading" class="error-container">
        Désolé, mais nous ne trouvons pas votre invitation. Vous pouvez nous
        contacter par <a href="mailto:florent@berthelot.io">mail</a>.
      </div>

      <!-- Formulaire -->
      <header>
        <h1 class="title">Agnès et Florent</h1>
        <h2 class="subtitle">19 & 20 août 2023 🤍</h2>
      </header>

      <section class="invite">
        <img class="invite-img" src="./bague.jpeg" />
        <p class="invite-paragraph">
          Après 5 ans d'amour et de bonheur, nous nous préparons à embarquer
          pour une nouvelle aventure à deux. Nous avons le plaisir de vous
          inviter à célébrer avec nous notre mariage qui aura lieu le 19 août
          2023 au bord de la mer qui nous tient tant à coeur.
        </p>
        <p class="invite-paragraph-final">
          ⚓️ Préparez-vous à larguer les amarres avec nous ! ⚓️
        </p>
      </section>

      <hr class="separator" />

      <section class="need-answer">
        <nuxt-link
          :to="
            localePath(
              `/mariage/${$route.params.invite}/answer?noAnimation=true`
            )
          "
          class="wedding-button"
        >
          <span class="wedding-button-content">Répondre maintenant</span>
          <div class="wedding-button-wave"></div>
        </nuxt-link>

        <p>Réponse souhaitée avant le 1er mars 2023</p>
      </section>

      <hr class="separator" />

      <section class="actions">
        <p>★ Vous pouvez gardez ce site dans vos favoris ! ★</p>
        <p>Vous pouvez y trouver ces informations :</p>

        <Menu />
      </section>
    </main>
  </div>
</template>

<script>
import Animation from '~/components/mariage/animation.vue'
import Menu from '~/components/mariage/menu.vue'

export default {
  components: {
    Animation,
    Menu,
  },
  layout: 'mariage',
  data() {
    return {
      animate: !this.$route.query.noAnimation,
      animationOver: false,
      loading: false,
      error: null,
      invitation: {},
      partToshow: 'nothing',
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
  mounted() {
    this.switchLocalePath(navigator.language.includes('en') ? 'en' : 'fr')

    setTimeout(() => {
      this.partToshow = 'schedule'
      this.invitation = {}
    }, 10000)

    // fetch('https://sheetdb.io/api/v1/yd2k17v9irxae?sheet=Invitations')
    //   .then((res) => res.json())
    //   .then((invitations) => {
    //     const rawInvitation = invitations.filter(
    //       (invitation) =>
    //         invitation["Id de l'invitation"] === this.$route.params.invite
    //     )?.[0]

    //     if (!rawInvitation) {
    //       return
    //     }

    //     const people = [
    //       rawInvitation['Personne 1'],
    //       rawInvitation['Personne 2'],
    //       rawInvitation['Personne 3'],
    //       rawInvitation['Personne 4'],
    //       rawInvitation['Personne 5'],
    //     ].filter(Boolean)

    //     const plus1Name = rawInvitation['Nom du +1']

    //     this.invitation = {
    //       id: rawInvitation["Id de l'invitation"],
    //       name: rawInvitation["Nom de l'invitation (Web)"],
    //       people,
    //       nbOfPeople: plus1Name ? people.length - 1 : people.length,
    //       plus1Name,
    //       invitedTo: {
    //         cityHall: rawInvitation['Invités pour mairie'] === 'Oui',
    //         church: rawInvitation['Invités pour église'] === 'Oui',
    //         wineReception:
    //           rawInvitation["Invités pour vin d'honneur"] === 'Oui',
    //         party: rawInvitation['Invités pour soirée'] === 'Oui',
    //         after: rawInvitation['Invités pour retour'] === 'Oui',
    //       },
    //     }

    //     this.partToshow =
    //       rawInvitation['A répondu'] === 'oui' ? 'schedule' : 'form'
    //   })
    //   .catch((error) => {
    //     // eslint-disable-next-line no-console
    //     console.error(error)
    //     this.error = error
    //   })
    //   .finally(() => {
    //     this.loading = false
    //   })
  },
  methods: {
    answerToInvite(formData) {
      this.partToshow = 'schedule'
    },
  },
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}

.main {
  font-family: 'Noto Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 1.1rem;
  padding: 1rem;
  min-height: 20vh;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-container {
  padding: 1rem 0.5rem;
}

.title {
  font-family: 'Parisienne', cursive;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
}

.subtitle {
  font-family: 'Pacifico', cursive;
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.invite {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
}
.invite-img {
  width: 100%;
  align-self: center;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.invite-paragraph {
  margin-bottom: 0.5rem;
}
.invite-paragraph-final {
  margin-bottom: 0.5rem;
  text-align: center;
}

.need-answer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

/** To Export */
.separator {
  width: 90%;
}
</style>
