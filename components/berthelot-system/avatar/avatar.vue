<template>
  <div class="avatar">
    <div class="avatar__flip-container">
      <img :src="frontSrc" :alt="frontAlt" class="avatar__face-a" />

      <img :src="backSrc" :alt="backAlt" class="avatar__face-b" />
    </div>
  </div>
</template>

<script setup lang="js">
const { frontSrc, frontAlt, backSrc, backAlt } = defineProps({
  frontSrc: {
    type: String,
    required: true,
  },
  frontAlt: {
    type: String,
    required: true,
  },
  backSrc: {
    type: String,
    required: true,
  },
  backAlt: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.avatar {
  height: 8rem;
  width: 8rem;
  perspective: 50rem;
}

.avatar__flip-container {
  transition: all 0.6s ease;
  transform-style: preserve-3d;

  position: relative;
}

.avatar:hover .avatar__flip-container {
  transform: rotateY(180deg);
}

.avatar__face-a,
.avatar__face-b {
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;

  height: 8rem;
  width: 8rem;
  border-radius: 50%;
}

.apear-leave-active,
.apear-enter-active {
  transition: all 0.5s ease;
}

.apear-enter,
.apear-leave-to {
  opacity: 0;
}

.avatar__face-a {
  transform: rotateY(0deg);
}

.avatar__face-b {
  transform: rotateY(180deg);
}
</style>
