<i18n>
{
  "fr": {
    "hello": "Bonjour {names} !",
    "attending": {
      "question": "Viens-tu ? | Vennez-vous ?",
      "cityHall": "À la mairie",
      "church": "À l'église",
      "wineReception": "Au vin d'honneur",
      "party": "À la soirée",
      "after": "Le lendemain"
    },
    "plus1": {
      "question": "Viens-tu accompagné ? | Vennez-vous accompagné ?",
      "placeholder": "Si oui, quel est sont nom ? Si non, ne pas remplir."
    },
    "comment": {
      "question": "Un commentaire ?",
      "placeholder": "Je suis allergique à tous les langages qui ne se nomme pas ELM, ils me donnent des gaz."
    },
    "pet": {
      "alt": "Chien triste.",
      "p1": "Attention, les annimaux ne sont malheureusement pas autorisé.",
      "p2": "Il faudra les faire garder."
    },
    "housing": {
      "p1": "N'oubliez pas de prévoir un logement pour le weekend du 19 août 2023 à Granville ! On te donne des addresses une fois que tu as répondu ;)"
    },
    "parker": {
      "p1": " Un service de voiturier sera disponnible pendant la soirée pour rentrer en sécurité."
    },
    "submit": "J'envoie ma réponse"
  },
  "en": {
    "hello": "Hello {names}!",
    "attending": {
      "question": "Do you come ?",
      "cityHall": "At the city hall",
      "church": "At the church",
      "wineReception": "At the wine reception",
      "party": "At the party",
      "after": "The day after"
    },
    "plus1": {
      "question": "Are you comming with someone ?",
      "placeholder": "If yes, what is her/his name ? If no, let the field blank."
    },
    "comment": {
      "question": "Any comment ?",
      "placeholder": "I'm vegan"
    },
    "pet": {
      "alt": "Sad dog.",
      "p1": "Pets are nos allowed in the castle.",
      "p2": "Someone has to take care of them during the weeding."
    },
    "housing": {
      "p1": "Don't forget to schedule an acomodation fot the 19th of august 2023 at Granville ! We will give you addresses in the next page ;)"
    },
    "parker": {
      "p1": "A taxi service will be available during the night for safety purpose."
    },
    "submit": "I send my answer."
  }
}
</i18n>

<template>
  <section class="container">
    <form @submit.prevent="$emit('answerToInvite', formData)">
      <h2 class="hello">{{ $t('hello', { names: invitation.name }) }}</h2>

      <fieldset class="question-container">
        <span class="question">{{
          $tc('attending.question', invitation.nbOfPeople)
        }}</span>
        <div class="answers">
          <label v-if="invitation.invitedTo.cityHall">
            <input
              v-model="formData.attending"
              type="checkbox"
              name="attending"
              value="cityHall"
            />
            {{ $t('attending.cityHall') }}
          </label>
          <label v-if="invitation.invitedTo.church">
            <input
              v-model="formData.attending"
              type="checkbox"
              name="attending"
              value="church"
            />
            {{ $t('attending.church') }}
          </label>
          <label v-if="invitation.invitedTo.wineReception">
            <input
              v-model="formData.attending"
              type="checkbox"
              name="attending"
              value="wineReception"
            />
            {{ $t('attending.wineReception') }}
          </label>
          <label v-if="invitation.invitedTo.party">
            <input
              v-model="formData.attending"
              type="checkbox"
              name="attending"
              value="party"
            />
            {{ $t('attending.party') }}
          </label>
          <label v-if="invitation.invitedTo.after">
            <input
              v-model="formData.attending"
              type="checkbox"
              name="attending"
              value="after"
            />
            {{ $t('attending.after') }}
          </label>
        </div>
      </fieldset>

      <label class="question-container">
        <span class="question">{{
          $tc('plus1.question', invitation.nbOfPeople)
        }}</span>
        <input
          v-model="formData.plus1"
          :placeholder="$t('plus1.placeholder')"
          type="text"
          name="plus1Name"
          class="plus1-input"
        />
      </label>

      <label class="question-container">
        <span class="question">{{ $t('comment.question') }}</span>
        <textarea
          v-model="formData.comment"
          :placeholder="$t('comment.placeholder')"
        ></textarea>
      </label>

      <div class="pet-forbidden">
        <div class="sad-dog-container">
          <img
            src="https://www.canidia.be/wp-content/uploads/2016/06/chien-triste-bloblog-1300x650.jpg"
            :alt="$t('pet.alt')"
            class="sad-dog"
          />
        </div>
        {{ $t('pet.p1') }} <br />
        {{ $t('pet.p2') }}
      </div>

      <div class="pet-forbidden">
        <div class="sad-dog-container">
          <img
            src="https://focus.courrierinternational.com/2022/02/05/0/0/4592/3448/1280/0/60/0/387e5da_1644022364629-expats-et-logement.jpg"
            alt=""
            class="sad-dog"
          />
        </div>
        {{ $t('housing.p1') }}
      </div>

      <div class="pet-forbidden">
        <div class="sad-dog-container">
          <img
            src="https://www.flconseilsparis.com/image/cache/catalog/casquette%20voiturier%20noir%20et%20or%2001-500x500-200x200.jpg"
            alt=""
            class="sad-dog"
          />
        </div>
        {{ $t('parker.p1') }}
      </div>

      <div class="action">
        <button type="submit">{{ $t('submit') }}</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  components: {},
  layout: 'mariage',
  props: {
    invitation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        attending: [],
        plus1: this.invitation.plus1Name,
      },
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
}
</script>

<style scoped>
.container {
  width: 70%;
  margin-left: 15%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hello {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.question-container {
  display: block;
  margin-bottom: 1rem;
}
.question {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.question-container textarea {
  display: block;
  width: 100%;
  height: 10rem;
}

.answers {
  display: flex;
  flex-direction: column;
  margin-left: 7rem;
}

.plus1-input {
  display: block;
  margin-top: 0.5rem;
  width: 100%;
}

.pet-forbidden {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}
.sad-dog-container {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
}
.sad-dog {
  width: auto;
  height: 5rem;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
}

.action button {
  padding: 0.25rem;
  margin: auto;
}
</style>
