<template>
  <section class="countdown-container">
    <img class="countdown-img" src="./img/bague.jpeg" />
    <p class="countdown">
      On se dira oui dans... <br />
      {{ days }} jours {{ hours }} heures {{ minutes }} minutes
      {{ seconds }} secondes
    </p>
  </section>
</template>

<script>
const MILLISECONDS_SECOND = 1000
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR

const weddingDate = new Date('2023-08-19T14:00:00.000+01:00')

export default {
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
  position: relative;
}
.countdown-img {
  width: 100%;
  aspect-ratio: 16/9;
  display: block;
}
.countdown {
  text-align: center;
  position: absolute;
  top: 25vh;
  left: 5vw;
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>
