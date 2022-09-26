<template>
  <nuxt />
</template>

<script>
import '~/assets/reset.css'

export default {
  mounted() {
    document.querySelector('body').style.backgroundColor = 'initial'
  },
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap'); */

/* @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Parisienne&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Pacifico&family=Parisienne&display=swap');

/** Buttons **/
.wedding-button {
  height: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  position: relative;
  display: block;
  text-decoration: none;
  overflow: hidden;
  background-color: #6681d7;
}

.wedding-button:active {
  box-shadow: 0 0 1rem #6681d7;
}
.wedding-button:focus:not(:active) {
  outline: 3px solid #f2521c;
}

.wedding-button-content {
  position: relative;
  z-index: 1;
  color: white;
}

.wedding-button:hover .wedding-button-wave {
  top: -10rem;
}

.wedding-button-wave {
  width: 100%;
  height: 7.6rem;
  background-color: #6681d7;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: -2.5rem;
  transition: 1s;
}
.wedding-button-wave::before,
.wedding-button-wave::after {
  width: 200%;
  height: 250%;
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}
.wedding-button-wave::before {
  border-radius: 45%;
  background-color: #f2521c;
  animation: wave 5s linear infinite;
}
.wedding-button-wave::after {
  border-radius: 40%;
  background-color: #f2521c77;
  animation: wave 10s linear infinite;
}

@keyframes wave {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
