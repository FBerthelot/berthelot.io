<template>
  <div>
    <div
      class="alternatives"
      :class="{ 'alternatives--displayed': displayAlternatives }"
      :aria-hidden="!displayAlternatives"
    >
      <slot></slot>
    </div>

    <BerthelotSystemButtonMore
      class="card_alternative-button"
      :class="{ 'card_alternative-button--open': displayAlternatives }"
      role="button"
      @click.stop="toggleDisplayAlternatives"
    />
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const displayAlternatives = ref(false)
const toggleDisplayAlternatives = () => {
  displayAlternatives.value = !displayAlternatives.value
}
</script>

<style>
.card_alternative-button {
  position: absolute;
  bottom: -1rem;
  right: calc(50% - 1rem);
}

.card_alternative-button--open {
  transform: rotateZ(180deg);
}

.alternatives {
  max-height: 0;
  transition: all 0.5s ease-out;
  overflow: hidden;
}
.alternatives--displayed {
  max-height: 40rem;
}

.alternatives__element {
  display: flex;
}
</style>
