<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Annimation />

    <main v-if="annimationOver">
      <div v-if="error" class="error-container">
        Désolé, une erreur est survenu. Vous pouvez nous contacter par
        <a href="mailto:florent@berthelot.io">mail</a> ou par
        <a href="tel:+33650999618">téléphone.</a>
      </div>
      <div v-if="loading" class="error-container">
        Ta connexion internet ne doit pas être très bonne :/.
      </div>
      <div v-if="!invitation && !loading" class="error-container">
        Désolé, mais nous ne trouvons pas votre invitation. Vous pouvez nous
        contacter par&nbsp;<a href="mailto:florent@berthelot.io">mail</a>.
      </div>

      <!-- Formulaire -->
      <Transition name="fade">
        <InviteForm
          v-if="invitation && partToshow === 'form'"
          :invitation="invitation"
          @answerToInvite="answerToInvite($event)"
        />
      </Transition>
      <transition name="fade">
        <Schedule
          v-if="invitation && partToshow === 'schedule'"
          :invitation="invitation"
        />
      </transition>
    </main>
  </div>
</template>

<script>
import InviteForm from '~/components/mariage/inviteForm.vue'
import Annimation from '~/components/mariage/annimation.vue'
import Schedule from '~/components/mariage/schedule.vue'

export default {
  components: {
    Annimation,
    InviteForm,
    Schedule,
  },
  layout: 'mariage',
  data() {
    return {
      annimationOver: false,
      loading: true,
      error: null,
      invitation: null,
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
      this.annimationOver = true
    }, 10000)

    fetch('https://sheetdb.io/api/v1/yd2k17v9irxae?sheet=Invitations')
      .then((res) => res.json())
      .then((invitations) => {
        const rawInvitation = invitations.filter(
          (invitation) =>
            invitation["Id de l'invitation"] === this.$route.params.invite
        )?.[0]

        if (!rawInvitation) {
          return
        }

        const people = [
          rawInvitation['Personne 1'],
          rawInvitation['Personne 2'],
          rawInvitation['Personne 3'],
          rawInvitation['Personne 4'],
          rawInvitation['Personne 5'],
        ].filter(Boolean)

        const plus1Name = rawInvitation['Nom du +1']

        this.invitation = {
          id: rawInvitation["Id de l'invitation"],
          name: rawInvitation["Nom de l'invitation (Web)"],
          people,
          nbOfPeople: plus1Name ? people.length - 1 : people.length,
          plus1Name,
          invitedTo: {
            cityHall: rawInvitation['Invités pour mairie'] === 'Oui',
            church: rawInvitation['Invités pour église'] === 'Oui',
            wineReception:
              rawInvitation["Invités pour vin d'honneur"] === 'Oui',
            party: rawInvitation['Invités pour soirée'] === 'Oui',
            after: rawInvitation['Invités pour retour'] === 'Oui',
          },
        }

        this.partToshow =
          rawInvitation['A répondu'] === 'oui' ? 'schedule' : 'form'
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error)
        this.error = error
      })
      .finally(() => {
        this.loading = false
      })
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
}
</style>
