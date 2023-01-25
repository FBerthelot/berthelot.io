<i18n>
{
  "fr": {
    "title": "Le compte à rebours a commencé...",
    "subtitle": "Voici le temps qu’il te reste avant de fêter avec nous le meilleur jour de notre vie :  | Voici le temps qu’il vous reste avant de fêter avec nous le meilleur jour de notre vie :",
    "days": "jour | jours",
    "hours": "heure | heures",
    "minutes": "minute | minutes",
    "secondes": "seconde | secondes"
  },
  "en": {
    "title": "The countdown has started...",
    "subtitle": "Here's the time left before you celebrate with us the best day of our lives :",
    "days": "day | days",
    "hours": "hour | hours",
    "minutes": "minute | minutes",
    "secondes": "second | seconds"
  }
}
</i18n>

<template>
  <section class="countdown-container">
    <h2 class="title">{{ $t('title') }}</h2>
    <h3 class="subtitle">
      {{ $tc('subtitle', invitation.nbOfPeople) }}
    </h3>
    <div class="countdown">
      <div>
        <div class="number">
          {{ days }}
        </div>
        <div class="unit">{{ $t('days') }}</div>
      </div>
      <div>
        <div class="number">
          {{ hours }}
        </div>
        <div class="unit">{{ $t('hours') }}</div>
      </div>
      <div>
        <div class="number">
          {{ minutes }}
        </div>
        <div class="unit">{{ $t('minutes') }}</div>
      </div>
      <div>
        <div class="number">
          {{ seconds }}
        </div>
        <div class="unit">{{ $t('secondes') }}</div>
      </div>
    </div>
  </section>
</template>

<script>
const MILLISECONDS_SECOND = 1000
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR

const weddingDate = new Date('2023-08-19T14:00:00.000+01:00')

export default {
  props: {
    invitation: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      /**
       * The remaining milliseconds.
       * @type {number}
       */
      totalMilliseconds: Math.max(0, weddingDate - new Date()),
      interval: null,
    }
  },
  computed: {
    /**
     * Remaining days.
     * @returns {number} The computed value.
     */
    days() {
      return Math.floor(this.totalMilliseconds / MILLISECONDS_DAY)
    },

    /**
     * Remaining hours.
     * @returns {number} The computed value.
     */
    hours() {
      const hours = Math.floor(
        (this.totalMilliseconds % MILLISECONDS_DAY) / MILLISECONDS_HOUR
      )

      return hours < 10 ? `0${hours}` : hours
    },

    /**
     * Remaining minutes.
     * @returns {number} The computed value.
     */
    minutes() {
      const minutes = Math.floor(
        (this.totalMilliseconds % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE
      )
      return minutes < 10 ? `0${minutes}` : minutes
    },

    /**
     * Remaining seconds.
     * @returns {number} The computed value.
     */
    seconds() {
      const seconds = Math.floor(
        (this.totalMilliseconds % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND
      )

      return seconds < 10 ? `0${seconds}` : seconds
    },
  },

  mounted() {
    this.interval = setInterval(() => {
      this.totalMilliseconds = Math.max(0, weddingDate - new Date())
    }, 1000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>

<style scoped>
.countdown-container {
  color: #2e3f4b;
  background-color: #f1e8ff;
  padding: 3rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-size: 3.25rem;
  font-weight: 400;
  line-height: 4.5rem;
  text-align: justified;
}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.563rem;
}

.countdown {
  display: flex;
  margin-top: 2rem;
  gap: 2.5rem;
  text-align: center;
}

.number {
  font-family: 'Open Sans', sans-serif;
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 7.5rem;
}
.unit {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.1rem;
}

@media screen and (max-width: 900px) {
  .countdown-container {
    box-sizing: border-box;
    padding: 3rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
    text-align: center;
  }
  .subtitle {
    font-size: 1rem;
    line-height: 1.375rem;
    text-align: center;
  }

  .countdown {
    gap: 1.5rem;
  }

  .number {
    font-size: 2.75rem;
    line-height: 3.75rem;
  }

  .unit {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
}
</style>
