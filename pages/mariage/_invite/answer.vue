<i18n>
{
  "fr": {
    "hello": "Bonjour {names} !",
    "ultimatum": "On souhaiterait avoir ta réponse avant le 1er mars 2023 | On souhaiterait avoir votre réponse avant le 1er mars 2023",
    "attending": {
      "question": "Viens-tu ? | Vennez-vous ?",
      "instruction": "Multiple choix possibles",
      "cityHall": "À la mairie",
      "cityHallDate": "19 août 2023",
      "church": "À l'église",
      "churchDate": "19 août 2023",
      "wineReception": "Au vin d'honneur",
      "wineReceptionDate": "19 août 2023",
      "party": "À la soirée",
      "partyDate": "19 août 2023",
      "after": "Le lendemain",
      "afterDate": "20 août 2023"
    },
    "meal": {
      "meat": "Viande saignante",
      "fish": "Poisson",
      "children": "Menu enfant"
    },
    "plus1": {
      "question": "Viens-tu accompagné ?",
      "questionName": "Peux-tu nous dire son prénom ?",
      "yes": "Oui",
      "no": "Non"
    },
    "children": {
      "question": "Ton enfant vient-il ? | Tes enfants viennent-ils ?",
      "yes": "Oui",
      "no": "Non"
    },
    "comment": {
      "question": "Un commentaire ?",
      "placeholder": "Je suis allergique à tous les langages qui ne se nomme pas ELM, ils me donnent des gaz."
    },
    "pet": {
      "p1": "Attention, les annimaux ne sont malheureusement pas autorisé.",
      "p2": "Il faudra les faire garder."
    },
    "housing": {
      "p1": "N'oubliez pas de prévoir un logement pour le weekend du 19 août 2023 à Granville ! On te donne des addresses une fois que tu as répondu ;)"
    },
    "parker": {
      "p1": " Un service de voiturier sera disponnible pendant la soirée pour rentrer en sécurité."
    },
    "submit": "J'envoie ma réponse",
    "submitLoading": "Envoi..."
  },
  "en": {
    "hello": "Hello {names}!",
    "ultimatum": "On souhaiterait avoir ta réponse avant le 1er mars 2023 | On souhaiterait avoir votre réponse avant le 1er mars 2023",
    "attending": {
      "question": "Do you come ?",
      "instruction": "Multiple choix possibles",
      "cityHall": "At the city hall",
      "cityHallDate": "19 août 2023",
      "church": "At the church",
      "churchDate": "19 août 2023",
      "wineReception": "At the wine reception",
      "wineReceptionDate": "19 août 2023",
      "party": "At the party",
      "partyDate": "19 août 2023",
      "after": "The day after",
      "afterDate": "20 août 2023"
    },
    "meal": {
      "meat": "Rare meat",
      "fish": "Fish",
      "children": "Menu enfant"
    },
    "plus1": {
      "question": "Are you comming with someone?",
      "questionName": "Peux-tu nous dire son prénom ?",
      "yes": "Yes",
      "no": "No"
    },
    "children": {
      "question": "Ton enfant vient-il ? | Tes enfants viennent-ils ?",
      "yes": "Oui",
      "no": "Non"
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
    "submit": "I send my answer.",
    "submitLoading": "Sending..."
  }
}
</i18n>

<template>
  <div id="wedding-page">
    <main class="main">
      <div v-if="error" class="error-container">
        Une erreur est survenu 😱. <br />
        Vous pouvez nous contacter par
        <a href="mailto:florent@berthelot.io">mail</a> ou par
        <a href="tel:+33650999618">téléphone.</a>
      </div>
      <span v-if="loading">Chargement...</span>
      <ValidationObserver v-slot="{ handleSubmit }" component="div">
        <form
          v-if="!loading && !error"
          @submit.prevent="handleSubmit(submitForm)"
        >
          <h2 class="title">
            {{ $t('hello', { names: invitation.name }) }}
          </h2>
          <p class="subtitle">
            {{ $tc('ultimatum', invitation.nbOfPeople) }}
          </p>

          <fieldset class="question-container">
            <div class="question">
              {{ $tc('attending.question', invitation.nbOfPeople) }}
            </div>
            <div class="question-instruction">
              {{ $tc('attending.instruction', invitation.nbOfPeople) }}
            </div>
            <div class="answers checkboxes">
              <label v-if="invitation.invitedTo.cityHall">
                <input
                  v-model="formValues.attending"
                  type="checkbox"
                  name="attending"
                  value="cityHall"
                />
                <div class="checkbox-content">
                  <img class="option-icon" :src="cityHallImg" alt="" />
                  <div class="option-title">{{ $t('attending.cityHall') }}</div>
                  <div class="option-date">
                    {{ $t('attending.cityHallDate') }}
                  </div>
                </div>
              </label>
              <label v-if="invitation.invitedTo.church">
                <input
                  v-model="formValues.attending"
                  type="checkbox"
                  name="attending"
                  value="church"
                />
                <div class="checkbox-content">
                  <img class="option-icon" :src="churchImg" alt="" />
                  <div class="option-title">{{ $t('attending.church') }}</div>
                  <div class="option-date">
                    {{ $t('attending.churchDate') }}
                  </div>
                </div>
              </label>
              <label v-if="invitation.invitedTo.wineReception">
                <input
                  v-model="formValues.attending"
                  type="checkbox"
                  name="attending"
                  value="wineReception"
                />
                <div class="checkbox-content">
                  <img class="option-icon" :src="wineReceptionImg" alt="" />
                  <div class="option-title">
                    {{ $t('attending.wineReception') }}
                  </div>
                  <div class="option-date">
                    {{ $t('attending.wineReceptionDate') }}
                  </div>
                </div>
              </label>
              <label v-if="invitation.invitedTo.party">
                <input
                  v-model="formValues.attending"
                  type="checkbox"
                  name="attending"
                  value="party"
                />
                <div class="checkbox-content">
                  <img class="option-icon" :src="partyImg" alt="" />
                  <div class="option-title">{{ $t('attending.party') }}</div>
                  <div class="option-date">
                    {{ $t('attending.partyDate') }}
                  </div>
                </div>
              </label>
              <label v-if="invitation.invitedTo.after">
                <input
                  v-model="formValues.attending"
                  type="checkbox"
                  name="attending"
                  value="after"
                />
                <div class="checkbox-content">
                  <img class="option-icon" :src="afterImg" alt="" />
                  <div class="option-title">{{ $t('attending.after') }}</div>
                  <div class="option-date">
                    {{ $t('attending.afterDate') }}
                  </div>
                </div>
              </label>
            </div>
          </fieldset>

          <h3 class="title title--only">Accompagnants</h3>

          <fieldset class="question-container">
            <span class="question">{{ $t('plus1.question') }}</span>
            <div class="answers checkboxes checkboxes--small">
              <label>
                <input
                  v-model="formValues.plus1"
                  type="radio"
                  name="plus1"
                  value="yes"
                />
                <div class="checkbox-content">
                  {{ $t('plus1.yes') }}
                </div>
              </label>
              <label>
                <input
                  v-model="formValues.plus1"
                  type="radio"
                  name="plus1"
                  value="no"
                />
                <div class="checkbox-content">
                  {{ $t('plus1.no') }}
                </div>
              </label>
            </div>
          </fieldset>

          <label v-if="formValues.plus1 === 'yes'" class="question-container">
            <span class="question">{{ $t('plus1.questionName') }}</span>
            <input
              v-model="formValues.plus1Name"
              type="text"
              name="plus1Name"
              class="plus1-input"
            />
          </label>

          <fieldset class="question-container">
            <span class="question">{{ $tc('children.question', 1) }}</span>
            <div class="answers checkboxes checkboxes--small">
              <label>
                <input
                  v-model="formValues.children"
                  type="radio"
                  name="children"
                  value="yes"
                />
                <div class="checkbox-content">
                  {{ $t('children.yes') }}
                </div>
              </label>
              <label>
                <input
                  v-model="formValues.children"
                  type="radio"
                  name="children"
                  value="no"
                />
                <div class="checkbox-content">
                  {{ $t('children.no') }}
                </div>
              </label>
            </div>
          </fieldset>

          <h3 class="title">Choix du plat</h3>
          <p class="subtitle">
            Choix du plat uniquement pour les menus des adultes
          </p>

          <ul v-if="invitation.invitedTo.party" class="meal-people">
            <li v-for="peopleName of invitation.people" :key="peopleName">
              <ValidationProvider
                v-slot="{ errors }"
                tag="div"
                rules="required"
              >
                <fieldset class="question-container">
                  <div class="question">{{ peopleName }}</div>
                  <div class="answers checkboxes checkboxes--small">
                    <label>
                      <input
                        v-model="formValues[`meal-${peopleName}`]"
                        type="radio"
                        :name="`meal-${peopleName}`"
                        value="meat"
                      />
                      <div class="checkbox-content">
                        {{ $t('meal.meat') }}
                      </div>
                    </label>
                    <label>
                      <input
                        v-model="formValues[`meal-${peopleName}`]"
                        type="radio"
                        :name="`meal-${peopleName}`"
                        value="fish"
                      />
                      <div class="checkbox-content">
                        {{ $t('meal.fish') }}
                      </div>
                    </label>
                  </div>
                </fieldset>
                <div class="error">{{ errors[0] }}</div>
              </ValidationProvider>
            </li>
            <li v-if="formValues.plus1 === 'yes' && formValues.plus1Name">
              <ValidationProvider
                v-slot="{ errors }"
                tag="div"
                rules="required"
              >
                <fieldset class="question-container">
                  <div class="question">{{ formValues.plus1Name }}</div>
                  <div class="answers checkboxes checkboxes--small">
                    <label>
                      <input
                        v-model="formValues.plus1Meal"
                        type="radio"
                        name="plus1Meal"
                        value="meat"
                      />
                      <div class="checkbox-content">
                        {{ $t('meal.meat') }}
                      </div>
                    </label>
                    <label>
                      <input
                        v-model="formValues.plus1Meal"
                        type="radio"
                        name="plus1Meal"
                        value="fish"
                      />
                      <div class="checkbox-content">
                        {{ $t('meal.fish') }}
                      </div>
                    </label>
                  </div>
                </fieldset>
                <div class="error">{{ errors[0] }}</div>
              </ValidationProvider>
            </li>
          </ul>

          <ValidationProvider v-slot="{ errors }" tag="div" rules="required">
            <label class="question-container">
              <span class="question">Une allergie ?</span>
              <textarea
                v-model="formValues.mealComment"
                placeholder="Coucou"
              ></textarea>
            </label>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <section class="infos">
            <ul>
              <li class="info">
                <img :src="noPetImg" class="info-icon" alt="" />
                <div>
                  {{ $t('pet.p1') }}
                  <br />
                  {{ $t('pet.p2') }}
                </div>
              </li>
              <li class="info">
                <img :src="housingImg" class="info-icon" alt="" />
                <div>
                  {{ $t('housing.p1') }}
                </div>
              </li>
              <li class="info">
                <img :src="parkerImg" class="info-icon" alt="" />
                <div>
                  {{ $t('parker.p1') }}
                </div>
              </li>
            </ul>
          </section>

          <ValidationProvider v-slot="{ errors }" tag="div" rules="required">
            <label class="question-container">
              <span class="question">{{ $t('comment.question') }}</span>
              <textarea
                v-model="formValues.comment"
                :placeholder="$t('comment.placeholder')"
              ></textarea>
            </label>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider v-slot="{ errors }" tag="div" rules="required">
            <label class="cgu-container">
              <input v-model="formValues.cgu" type="checkbox" name="cgu" />
              <div>
                Une fois la réponse envoyée, en cas de modification, je
                contacterai Florent et Agnès directement :
                <ul>
                  <li>Par mail vallee_a@hotmail.fr / florent@berthelot.io</li>
                  <li>Par téléphone au 06 03 65 21 38 / 06 50 99 96 18</li>
                </ul>
              </div>
            </label>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

          <div class="action">
            <button type="submit" :disabled="submitFormStatus.loading">
              {{
                submitFormStatus.loading ? $t('submitLoading') : $t('submit')
              }}
            </button>
            <span class="error">{{
              submitFormStatus.error ? 'Une erreur est survenue !' : ''
            }}</span>
          </div>
        </form>
      </ValidationObserver>
    </main>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import {
  getTheInvitation,
  saveInvitationAnswer,
} from '~/components/mariage/fetcher'

import cityHallImg from '~/components/mariage/img/mariage_civil.svg'
import churchImg from '~/components/mariage/img/church.svg'
// import partyImg from '~/components/mariage/img/diner.svg'
// import wineReceptionImg from '~/components/mariage/img/diner.svg'
import afterImg from '~/components/mariage/img/just-maried.svg'

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: !['', null, undefined].includes(value),
    }
  },
  computesRequired: true,
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'mariage',
  data() {
    return {
      churchImg,
      cityHallImg,
      partyImg: churchImg,
      wineReceptionImg: churchImg,
      afterImg,
      noPetImg: churchImg,
      housingImg: churchImg,
      parkerImg: churchImg,
      invitation: {},
      formValues: undefined,
      loading: true,
      error: null,
      submitFormStatus: {
        loading: false,
        error: null,
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
  async mounted() {
    try {
      this.invitation = await getTheInvitation(
        this.$config.SHEETDB_URL,
        this.$route.params.invite
      )

      this.formValues = {
        attending: [],
        plus1: null,
        plus1Name: null,
        plus1Meal: null,
        children: null,
        mealComment: null,
        cgu: false,
        comment: '',
        ...this.invitation.people.reduce((acc, peopleName) => {
          return {
            ...acc,
            [`meal-${peopleName}`]: null,
          }
        }, {}),
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      this.error = err
    } finally {
      this.loading = false
    }
  },
  methods: {
    async submitForm() {
      this.submitFormStatus.loading = true
      const meals = this.invitation.people.reduce((acc, peopleName) => {
        return {
          ...acc,
          [peopleName]: this.formValues[`meal-${peopleName}`],
        }
      }, {})

      if (this.formValues.plus1) {
        meals[`${this.formValues.plus1} (+1)`] = this.formValues.plus1Meal
      }

      try {
        await saveInvitationAnswer(
          this.$config.SLACK_URL,
          this.formValues.plus1
            ? [...this.invitation.people, `${this.formValues.plus1} (+1)`]
            : this.invitation.people,
          this.formValues.attending,
          meals,
          this.formValues.comment
        )
        this.$router.push(
          this.localePath(
            `/mariage/${this.$route.params.invite}?noAnimation=true`
          )
        )
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
        this.submitFormStatus.error = err
      }

      this.submitFormStatus.loading = false
    },
  },
}
</script>

<style scoped>
#wedding-page {
  width: 100%;
  min-height: 100vh;

  background: #faf8ff;
  color: #2e3f4b;
}

.main {
  padding: 2rem 20rem;
}

.title {
  font-family: 'DM Serif Display';
  font-style: normal;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
  text-align: center;
}

.title--only {
  margin-bottom: 2rem;
}

.subtitle {
  font-family: Open Sans;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6rem;
  text-align: center;

  margin-top: 0.5rem;
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

  font-family: 'Open Sans';
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6rem;

  color: #2e3f4b;
}

.question-instruction {
  font-family: 'Open Sans';
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.125rem;

  color: #6c8393;

  margin-bottom: 2rem;
}

.question-container textarea {
  display: block;
  width: 100%;
  height: 10rem;
}

.answers {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 2rem 0;
}

.answers.checkboxes {
  gap: 1.5rem;
  flex-wrap: wrap;
  flex-direction: row;
}

.answers.checkboxes label input ~ .checkbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10.625rem;
  width: 11.875rem;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 16px rgba(155, 97, 167, 0.15);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.answers.checkboxes.checkboxes--small label input ~ .checkbox-content {
  width: 12.5rem;
  height: 3.125rem;
}

.answers.checkboxes label {
  cursor: pointer;
}

.answers.checkboxes label:hover input ~ .checkbox-content,
.answers.checkboxes label:focus input ~ .checkbox-content {
  border: 2px solid #8d4b9a;
}

.answers.checkboxes label:active input ~ .checkbox-content {
  background: #f1e8ff;
}

.answers.checkboxes label input:checked ~ .checkbox-content {
  background: #f1e8ff;
  border: 2px solid #8d4b9a;
}

.answers.checkboxes label .option-icon {
  margin-bottom: 1.5rem;
  height: 3.2rem;
}

.answers.checkboxes label .option-title {
  font-family: 'Open Sans';
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.375rem;
  color: #2e3f4b;

  margin-bottom: 0.25rem;
}

.answers.checkboxes label .option-date {
  font-family: 'Open Sans';
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
}

.answers.checkboxes input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

textarea,
input[type='text'] {
  padding: 0 0.825rem;

  width: 20rem;
  height: 2.75rem;

  font-family: 'Open Sans';
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.5rem;

  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 0.5rem;
}

textarea:focus,
textarea:active,
input[type='text']:focus,
input[type='text']:active {
  border: 1px solid #8d4b9a;
  outline: none;
}

textarea {
  height: auto;
  min-height: 8rem;
}

.meal-people fieldset {
  display: flex;
}

.meal-people fieldset .question {
  min-width: 15.6rem;
  display: flex;
  align-items: center;
  height: 3.125rem;
}

.meal-people fieldset .answers {
  margin: 0;
}

.infos {
  background: #f1e8ff;
  color: #2e3f4b;

  font-family: 'Open Sans';
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;

  margin: 2rem -20rem 4rem -20rem;
  padding: 4rem 20rem;
}

.infos ul {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.info {
  display: flex;
  align-items: center;
}

.info-icon {
  width: 3.25rem;
  margin-right: 2rem;
}

.cgu-container {
  display: flex;
  align-items: flex-start;

  font-family: 'Open Sans';
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #344054;
  margin: 2rem 0;
}

.cgu-container input {
  margin-right: 0.75rem;
  height: 1.125rem;
}

.cgu-container ul {
  margin-left: 1rem;
  list-style: disc;
}

.action {
  display: flex;
  align-items: center;
  justify-content: center;
}

.action button {
  margin-top: 2.75rem;
  padding: 0.25rem;
  margin: auto;
  background: #2e3f4c;
  width: 16.5rem;
  height: 3.6rem;
  border-radius: 0.5rem;

  border: none;

  font-family: 'Open Sans';
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2rem;

  color: #faf8ff;
}

.error {
  color: red;
}
</style>
