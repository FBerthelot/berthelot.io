<i18n lang="json">
{
  "fr": {
    "title": "Bouttons",
    "grenade": "Grenade",
    "textButton": "💥 Boum 💥",
    "moreButton": "More Button"
  },
  "en": {
    "title": "Buttons",
    "grenade": "Grenade",
    "textButton": "💥 Boom 💥",
    "moreButton": "More Button"
  }
}
</i18n>

<template>
  <section>
    <h2 class="typo_title--small">{{ t('title') }}</h2>

    <div class="block-container">
      <article class="kind_of_button">
        <h3 class="typo_title--extra-small">{{ t('grenade') }}</h3>
        <div class="grenade_button_shower">
          <BerthelotSystemButtonGrenade
            :throw-again="nbOfTimeThrowed"
            @click="throwAgain"
            >{{ t('textButton') }}</BerthelotSystemButtonGrenade
          >
        </div>
      </article>

      <article class="kind_of_button">
        <h3 class="typo_title--extra-small">{{ t('moreButton') }}</h3>
        <BerthelotSystemButtonMore />
      </article>
    </div>
  </section>
</template>

<script setup lang="js">
import { ref } from 'vue'

const { t } = useI18n({
  useScope: 'local',
})

const nbOfTimeThrowed = ref(0)
const throwAgain = () => {
  nbOfTimeThrowed.value += 1
}
</script>

<style scoped>
.block-container {
  gap: 1rem;
  margin-top: 1rem;
  margin-right: 2rem;
  border: 1px solid var(--color-medium);
  padding: 1rem;
}
.kind_of_button:not(:nth-last-child(1)) {
  margin-bottom: 2rem;
}

.grenade_button_shower {
  height: 25rem;
  position: relative;
  border: 1px solid var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
