<i18n>
{
  "fr": {},
  "en": {}
}
</i18n>

<template>
  <div id="wedding-page">
    <Animation :animate="animate" @animationOver="animationOver = true" />

    <div class="page">
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

        <LoveLetter />

        <Countdown />

        <Map />

        <!-- <Menu /> -->

        <NeedAnwser />

        <Infos />

        <Gifts />

        <Photos />
      </main>
    </div>
  </div>
</template>

<script>
import Animation from '~/components/mariage/animation.vue'
// import Menu from '~/components/mariage/menu.vue'
import Map from '~/components/mariage/map.vue'
import Countdown from '~/components/mariage/countdown.vue'
import NeedAnwser from '~/components/mariage/need-answer.vue'
import LoveLetter from '~/components/mariage/love-letter.vue'
import Infos from '~/components/mariage/infos.vue'
import Gifts from '~/components/mariage/gifts.vue'
import Photos from '~/components/mariage/ask-photo.vue'

export default {
  components: {
    Animation,
    Countdown,
    LoveLetter,
    NeedAnwser,
    Infos,
    Gifts,
    Photos,
    Map,
    // Menu,
  },
  layout: 'mariage',
  data() {
    return {
      animate: !this.$route.query.noAnimation,
      animationOver: false,
      loading: false,
      error: null,
      invitation: {},
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
  methods: {},
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100%;
}

.page {
  display: flex;
  flex-direction: column;
}

.main {
  /* font-family: 'Noto Sans', sans-serif; */
  font-family: 'Pacifico', cursive;
  font-size: 0.9rem;
  line-height: 1.1rem;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (orientation: portrait) {
  .main {
    margin-left: auto;
  }
}

.error-container {
  padding: 1rem 0.5rem;
}
</style>
