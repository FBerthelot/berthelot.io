<!-- modified from https://codepen.io/pehaa/pen/yLVeLNg -->
<template>
  <div
    :class="{
      animate: animate && everythingIsLoaded,
      reduceAtTheEnd,
      'mode-sunset': everythingIsLoaded && mode === 'sunset',
      'mode-zenith': !everythingIsLoaded || mode === 'zenith',
    }"
    class="landscape"
  >
    <div v-if="!everythingIsLoaded" class="loading">Tu capte mal 😅</div>

    <img
      v-if="images.mont.loaded"
      :src="images.mont.src"
      alt="Mont Saint Michel"
      class="mont"
    />
    <img
      v-if="images.roc.loaded"
      :src="images.roc.src"
      alt="Granville"
      class="granville"
    />
    <div class="granville-light" />

    <div class="sun-container sun-container-1"></div>
    <div class="sun-container">
      <div class="sun"></div>
    </div>

    <div class="sun-container sun-container-reflection">
      <div class="sun"></div>
    </div>

    <div class="cloud"></div>
    <div class="cloud cloud-1"></div>

    <div class="water"></div>
    <div class="water side"></div>
    <svg>
      <filter id="turbulence" x="0" y="0" width="120%" height="110%">
        <feTurbulence
          id="sea-filter"
          numOctaves="3"
          seed="2"
          baseFrequency="0.02 0.05"
        >
          <animate
            xlink:href="#sea-filter"
            attributeName="baseFrequency"
            dur="60s"
            keyTime="0;0.5;1"
            values="0.02 0.15; 0.04 0.05; 0.02 0.12"
            repeatCount="indefinite"
          ></animate>
        </feTurbulence>
        <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
      </filter>
    </svg>

    <img
      v-if="images.ponton.loaded"
      :src="images.ponton.src"
      class="pontoon"
      alt="Ponton"
    />
    <img
      v-if="images.us.loaded"
      :src="images.us.src"
      class="us"
      alt="Florent et Agnès main dans la main"
    />

    <!-- <img src="./coeur.png" class="logo" alt="Agnès et Florent - 19 Août 2023" /> -->

    <!-- <h1 class="title">Agnès 🤍 Florent</h1> -->
    <!-- <svg viewBox="0 0 200 60" class="title">
      <title>Agnès et Florent</title>
      <path id="path" d="m0,60 C 90,0 110,0 200,60" fill="transparent"></path>
      <text font-size="16" y="-10" x="62.5" fill="white">
        <textPath xlink:href="#path">Agnès 🤍 Florent</textPath>
        Agnès 🤍 Florent
      </text>
    </svg> -->
  </div>
</template>

<script>
import montImg from './img/mont-min.png'
import rocImg from './img/roc-min.png'
import usImg from './img/us.png'
import pontonImg from './img/ponton.png'

export default {
  name: 'Loader',
  props: {
    animate: {
      type: Boolean,
      default: true,
    },
    reduceAtTheEnd: {
      type: Boolean,
      default: true,
    },
    mode: {
      type: String,
      default: 'sunset',
    },
  },
  data() {
    return {
      images: {
        mont: {
          src: montImg,
          loaded: false,
        },
        roc: {
          src: rocImg,
          loaded: false,
        },
        ponton: {
          src: pontonImg,
          loaded: false,
        },
        us: {
          src: usImg,
          loaded: false,
        },
      },
    }
  },
  computed: {
    everythingIsLoaded() {
      return Object.values(this.images).every((img) => img.loaded)
    },
  },
  mounted() {
    if (this.animate) {
      setTimeout(() => {
        this.$emit('animationOver')
      }, 10000)
    } else {
      this.$emit('animationOver')
    }

    const isImageLoaded = (src) => {
      return new Promise((resolve, reject) => {
        let isTimeouted = false
        const timeout = setTimeout(() => {
          isTimeouted = true
          resolve()
        }, 20000)

        const image = document.createElement('img')
        image.onload = () => {
          if (!isTimeouted) {
            resolve()
            clearTimeout(timeout)
          }
        }
        image.onerror = (err) => {
          reject(err)
        }
        image.src = src
      })
    }

    isImageLoaded(this.images.mont.src)
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => {
        this.images.mont.loaded = true
      })

    isImageLoaded(this.images.roc.src)
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => {
        this.images.roc.loaded = true
      })

    isImageLoaded(this.images.ponton.src)
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => {
        this.images.ponton.loaded = true
      })

    isImageLoaded(this.images.us.src)
      // eslint-disable-next-line no-console
      .catch(console.error)
      .finally(() => {
        this.images.us.loaded = true
      })
  },
}
</script>

<style scoped>
.landscape:after,
.landscape:before,
.landscape *,
.landscape *:after,
.landscape *:before {
  position: absolute;
}

.landscape {
  --top-side-sky: #8e6f94;
  --top-middle-sky: #ff846e;
  --bottom-sky: #fea798;

  --bottom-water: #6681d7;
  --top-middle-water: #ff846e;
  --top-water: #fea79855;
  --top-water-alpha: rgb(252, 156, 132, 52%);
  --bottom-water-alpha: #6681d7ee;
  --background: white;

  --sun: white;
  --sun-alpha: rgba(255, 255, 255, 0);

  --cloud: #fea798;

  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-image: linear-gradient(
    var(--top-side-sky),
    var(--bottom-sky),
    var(--top-side-sky)
  );
}

.loading {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  color: var(--background);
  justify-content: center;
  animation: loading-blink 3s infinite linear;
  animation-delay: 2s;
  opacity: 0;
}
@keyframes loading-blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.front {
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
}

.mont {
  width: 20vw;
  height: auto;
  bottom: 50%;
  left: 0;
}

.granville {
  width: 50vw;
  height: auto;
  left: auto;
  bottom: 50%;
  z-index: 1;
  right: 0;
}
.granville-light {
  width: 1vh;
  height: 1vh;
  filter: blur(2px);

  right: calc(28.25vw - 0.5vh);
  top: calc(50vh - 0.5vh - (30vw / 7.22));

  z-index: 2;
  background: var(--sun);
  border-radius: 50%;
  opacity: 0;
}
.reduceAtTheEnd .granville-light {
  top: calc(40vh - 0.5vh - (30vw / 7.22));
}
@media (orientation: portrait) {
  .mont {
    width: 25vw;
  }
  .granville {
    width: 44vw;
  }
  .granville-light {
    right: calc(25.25vw - 0.5vh);
  }
}

/** CLOUDS **/
.cloud {
  width: 80vw;
  height: 6vh;
  background: currentcolor;
  color: var(--cloud);
  top: 12vh;
  left: 20vw;
  border-radius: 50%;
  box-shadow: 30vw 0.5vh 0 -1vh currentcolor, -25vw 0 0 -0.6vh currentcolor;
  opacity: 0.3;
}
.cloud-1 {
  left: 60vw;
  top: 3vh;
  opacity: 0.2;
  filter: blur(1px);
}
.mode-sunset .cloud {
  transform: translate3d(0, 0, 0);
}
.mode-zenith .cloud {
  transform: translate3d(-150vw, 0, 0);
}
@media (orientation: portrait) {
  .cloud {
    height: 4vh;
    top: 30vh;
  }
  .cloud-1 {
    top: 23vh;
  }
}

/** WATER **/
.water {
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  filter: url('#turbulence');
  background: linear-gradient(var(--top-water), var(--bottom-water));
}
.water.side {
  left: 0;
  right: auto;
  width: 2vw;
  z-index: 1;
  filter: none;
  background: linear-gradient(
    var(--top-water-alpha),
    var(--bottom-water-alpha)
  );
}
@media (orientation: portrait) {
  .water.side {
    width: 3vw;
  }
}

/** SUN **/
.sun-container {
  overflow: hidden;
  width: 100%;
  height: 50%;
}
.sun {
  background: var(--sun);
  border-radius: 50%;
  width: 20vmin;
  height: 20vmin;
  left: calc(60% - 10vmin);
  top: calc(100% - 5vmin);
  box-shadow: 0 0 10px var(--sun);
}
.mode-sunset .sun {
  transform: translate3d(0, 0, 0);
}
.mode-zenith .sun {
  transform: translate3d(0, calc(-50vh - 15vmin + 5vmin), 20vmin);
}

.sun-container-1:after {
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 60% 100%,
    var(--top-middle-sky),
    transparent
  );
  mix-blend-mode: color-burn;
}
.mode-sunset .sun-container-1:after {
  opacity: 1;
}
.mode-zenith .sun-container-1:after {
  opacity: 0;
}

.sun-container-reflection {
  top: 50%;
  background: radial-gradient(
    circle at 60% 0%,
    var(--top-middle-water),
    transparent
  );
}
.sun-container-reflection .sun {
  box-shadow: none;
  filter: blur(5px);
  top: 0;
  background: linear-gradient(var(--sun), var(--sun-alpha));
}
.mode-sunset .sun-container-reflection .sun {
  transform: translate3d(0, -5vmin, 0) scale(1, 2);
  opacity: 1;
}
.mode-zenith .sun-container-reflection .sun {
  opacity: 0.5;
  transform: translate3d(0, calc(50vh - 5vmin - 5vmin), 0) scale(1, 1);
}

.pontoon {
  position: absolute;
  bottom: -5%;
  left: calc(50% - 15vw);
  height: 25vh;
  width: 30vw;
}
@media (orientation: portrait) {
  .pontoon {
    height: 25vh;
    width: 50vw;
    left: calc(50% - 25vw);
  }
}

/** US **/
.us {
  width: 9vw;
  bottom: 10vh;
  left: calc(50% - 4.5vw);
}
@media (orientation: portrait) {
  .us {
    width: 18vw;
    bottom: 16vh;
    left: calc(50% - 9vw);
  }
}

/** TITLE */
/* .title {
  height: 7.5rem;
  width: auto;
  position: absolute;
  left: 10rem;
  bottom: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  color: white;
}

.title_container {
  width: 100%;
}
.logo {
  height: 7.5rem;
  width: auto;
  position: absolute;
  right: 10rem;
  bottom: 5rem;
} */

/** Animations **/

.reduceAtTheEnd.landscape:not(.animate) {
  height: 80vh;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.animate.reduceAtTheEnd.landscape {
  animation: reduce 1s ease 10s 1 forwards;
}
@keyframes reduce {
  0% {
    height: 100vh;
  }
  100% {
    height: 80vh;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
}

.animate .cloud {
  animation: clouds 120s linear infinite;
  animation-delay: 0;
}
.animate .cloud-1 {
  animation-delay: 0;
  animation-duration: 150s;
}
@keyframes clouds {
  0% {
    transform: translate3d(-150vw, 0, 0);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(150vw, 0, 0);
  }
}

.animate .sun {
  animation: rise 10s 1;
}
@keyframes rise {
  0% {
    transform: translate3d(0, calc(-50vh - 15vmin), 20vmin);
  }
}
.animate .sun-container-reflection .sun {
  animation-name: rise-reflection;
}
@keyframes rise-reflection {
  0% {
    opacity: 0;
    transform: translate3d(0, calc(50vh - 5vmin), 0) scale(1, 1);
  }
}

.animate .sun-container-1:after {
  animation: fade 10s;
}
@keyframes fade {
  0%,
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate .granville-light {
  animation: lighthouse-blink 4s infinite linear;
  animation-delay: 10s;
}
@keyframes lighthouse-blink {
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
}

/* .animate  .us {
  animation: walk-on-pontoon 10s ease;
}
@keyframes walk-on-pontoon {
  0% {
    transform: scale3d(1);
    bottom: -18vmin;
  }
  100% {
    bottom: 8vmin;
    transform: scale3d(0.8);
  }
} */

/* .animate .title,
.animate .logo {
  animation: title-fade 20s ease;
}
@keyframes title-fade {
  0%,
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
</style>
