<!-- modified from https://codepen.io/pehaa/pen/yLVeLNg -->
<template>
  <div class="landscape">
    <img src="./Mont.png" alt="Mont Saint Michel" class="mont" />
    <img src="./Roc.png" alt="Graville" class="granville" />

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

    <img src="./Ponton.png" class="pontoon" alt="Ponton" />
    <!-- <svg class="pontoon" viewBox="0 0 200 100">
      <path d="M 120 0 H 200 L 100 100 H 0 0" fill="currentcolor" />
    </svg> -->
    <img
      src="./Silhouettes-2.png"
      class="us"
      alt="Florent et Agnès main dans la main"
    />

    <img src="./coeur.png" class="logo" alt="Agnès et Florent - 19 Août 2023" />

    <h1 class="title">Agnès 🤍 Florent</h1>
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
export default {
  name: 'Loader',
}
</script>

<style>
:root {
  --v1: #be91c6;
  --v2: #8a65cc;
  --v3: #5e30d9;
  --transparentv3: #5e30d900;
  --v4: #3b1895;
  --s1: #fea798;
  --s2: #ff846e;
  --cloud: #fea798;
}
</style>

<style scoped>
.landscape:after,
.landscape:before,
.landscape *,
.landscape *:after,
.landscape *:before {
  position: absolute;
}

.front {
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
}

.landscape {
  height: 100vh;
  background-image: linear-gradient(var(--v1), var(--s1), var(--v1));
  position: relative;
  z-index: 1;
  overflow: hidden;
  animation: reduce 1s ease 10s 1 forwards;
}

@keyframes reduce {
  0% {
    height: 100vh;
  }
  100% {
    height: 80vh;
  }
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

/** CLOUDS **/
.cloud {
  width: 80vmin;
  height: 6vmin;
  background: currentcolor;
  color: var(--cloud);
  top: 12vmin;
  left: 20vmin;
  border-radius: 50%;
  box-shadow: 30vmin 0.5vmin 0 -1vmin currentcolor,
    -25vmin 0 0 -0.6vmin currentcolor;
  opacity: 0.3;
  transform: translate3d(-150vmin, 0, 0);
  animation: clouds 120s infinite;
  animation-delay: -10s;
}
@keyframes clouds {
  50% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(150vmin, 0, 0);
  }
}
.cloud-1 {
  left: 60vmin;
  top: 3vmin;
  opacity: 0.2;
  filter: blur(1px);
  animation-delay: 0;
  animation-duration: 100s;
}

/** WATER **/

.water {
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(#fea79855, var(--v2));
  overflow: hidden;
  filter: url('#turbulence');
}

.water.side {
  left: 0;
  right: auto;
  width: 0.75vw;
  background: linear-gradient(#fea798aa, #8a65ccaa);
  z-index: 1;
  filter: none;
}

/** SUN **/
.sun-container {
  overflow: hidden;
  width: 100%;
  height: 50%;
}
.sun {
  background: white;
  border-radius: 50%;
  width: 20vmin;
  height: 20vmin;
  left: calc(60% - 10vmin);
  top: calc(100% - 5vmin);
  transform: translate3d(0, 0, 0);
  animation: rise 10s 1;
  box-shadow: 0 0 10px white;
}
@keyframes rise {
  0% {
    transform: translate3d(0, calc(-50vh - 15vmin), 20vmin);
  }
}

.sun-container-1:after {
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: radial-gradient(circle at 60% 100%, var(--s2), transparent);
  animation: fade 10s;
  mix-blend-mode: color-burn;
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

.sun-container-reflection {
  top: 50%;
  background: radial-gradient(circle at 60% 0%, var(--s2), transparent);
}
.sun-container-reflection .sun {
  background: linear-gradient(white, rgba(255, 255, 255, 0));
  box-shadow: none;
  filter: blur(5px);
  opacity: 1;
  top: 0;
  transform: translate3d(0, -5vmin, 0) scale(1, 2);
  animation-name: rise-reflection;
}

@keyframes rise-reflection {
  0% {
    opacity: 0;
    transform: translate3d(0, calc(50vh - 5vmin), 0) scale(1, 1);
  }
}

.pontoon {
  color: brown;
  position: absolute;
  bottom: -5%;
  left: calc(50% - 15vmin);
  height: 20vmin;
  width: 30vmin;
}

/** US **/

.us {
  height: 30vmin;
  bottom: 8vmin;
  left: calc(50% - 9vmin);
  transform: scale3d(0.8);
  /* animation: walk-on-pontoon 10s ease; */
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
}

/** TITLE */
.title {
  height: 7.5rem;
  width: auto;
  position: absolute;
  left: 10rem;
  bottom: 5rem;
  animation: title-fade 20s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 3rem;
  color: white;
}

.title_container {
  width: 100%;
}

@keyframes title-fade {
  0%,
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/** LOGO **/
.logo {
  height: 7.5rem;
  width: auto;
  position: absolute;
  right: 10rem;
  bottom: 5rem;
  animation: title-fade 20s ease;
}
</style>
