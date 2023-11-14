<i18n lang="json">
{
  "fr": {
    "title": "L'animation",
    "modeSwitcherLabel": "passer en",
    "animationLabel": "Activer l'animation"
  },
  "en": {
    "title": "The Animation",
    "modeSwitcherLabel": "switch to",
    "animationLabel": "Toogle animation"
  }
}
</i18n>

<template>
  <section>
    <h1 class="typography-title-2">{{ t('title') }}</h1>

    <article class="card">
      <div class="action">
        <button class="button" type="button" @click="animate = !animate">
          {{ t(`animationLabel`) }}
        </button>

        <button
          class="button"
          type="button"
          @click="mode = mode === 'sunset' ? 'zenith' : 'sunset'"
        >
          {{ t(`modeSwitcherLabel`) }}
          {{
            // eslint-disable-next-line @intlify/vue-i18n/no-raw-text
            mode === 'sunset' ? 'zenith' : 'sunset'
          }}
        </button>
      </div>

      <Mariage00DesignSystemAnimation
        :animate="animate"
        :reduce-at-the-end="false"
        :mode="mode"
      />
    </article>
  </section>
</template>

<script setup lang="js">
const animate = ref(false)
const mode = ref('sunset') // zenith || sunset

const { t } = useI18n({
  useScope: 'locale',
})
</script>

<style scoped>
section {
  margin: 1rem 0;
}

.card {
  border: 1px solid black;
  width: 80vw;
  margin-left: 10vw;
  margin-top: 1rem;
  padding: 1rem;
}

.action {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
}
</style>
