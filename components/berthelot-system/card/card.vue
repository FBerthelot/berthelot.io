<template>
  <article class="card">
    <a
      v-if="link && !internalLink"
      class="card__container card__container--link"
      target="_blank"
      rel="noopener"
      :href="link"
    >
      <slot />
    </a>

    <nuxt-link
      v-if="link && internalLink"
      class="card__container card__container--link"
      :to="link"
    >
      <slot />
    </nuxt-link>

    <div v-if="!link" class="card__container">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false,
      default: null,
    },
    internalLink: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.card {
  position: relative;
}

.card__container {
  display: block;
  text-decoration: none;
  height: 100%;

  padding: 1rem;
  border: 1px solid var(--color-light);
  box-shadow: 0 0 0.5rem var(--color-light);
  transition: all 0.5s ease-out;
}

.card__container--link:hover,
.card__container--link:focus {
  box-shadow: 0 0 2rem var(--color-light);
  outline: none;
}

.card__container--link:active {
  box-shadow: 0 0 2rem var(--color-dark);
  border: 1px solid var(--color-dark);
}

.card__container--link:active .card__title {
  color: var(--color-dark);
}
</style>
