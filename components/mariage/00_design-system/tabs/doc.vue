<i18n lang="json">
{
  "fr": {
    "title": "Tabs",
    "tab1": "Tab 1",
    "tab2": "Tab 2",
    "tab1Content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum ante non volutpat gravida. Nullam imperdiet finibus suscipit. Integer ac mollis libero. Aliquam semper tristique pharetra. Donecquis fringilla libero. Sed sit amet auctor lectus. Ut interdum purus a ultrices varius. In semper enim et tempor gravida. Sed tristique orci mi, porta scelerisque quam gravida placerat. Vivamus massa neque,vestibulum vestibulum feugiat ut, consectetur sed est. Suspendisse inmi sit amet lectus rutrum venenatis sit amet eu lectus. Curabitur eulibero vulputate, eleifend ligula et, auctor ipsum. Morbi egestas,libero vel ullamcorper consectetur, nibh nisi mattis dolor, at dapibusleo risus ut augue.",
    "tab2Content": "Duis mauris mauris, porttitor id tincidunt in, vehicula eget sem.Vivamus nibh libero, tempus in lobortis quis, egestas at nisi.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Morbi vehicula mi urna, id luctus nequelobortis sit amet. Integer sed felis feugiat, posuere ligula id,ornare erat. Nulla suscipit ex ex, vel semper neque ullamcorper nec.Aliquam porta lorem id tincidunt varius. Quisque viverra feugiat duinon vehicula. Praesent eleifend nisi ligula, vitae maximus turpisvolutpat vitae. libero vel ullamcorper consectetur, nibh nisi mattisdolor, at dapibus leo risus ut augue. libero vel ullamcorperconsectetur, nibh nisi mattis dolor, at dapibus leo risus ut augue."
  },
  "en": {
    "title": "Tabs",
    "tab1": "Tab 1",
    "tab2": "Tab 2",
    "tab1Content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum ante non volutpat gravida. Nullam imperdiet finibus suscipit. Integer ac mollis libero. Aliquam semper tristique pharetra. Donecquis fringilla libero. Sed sit amet auctor lectus. Ut interdum purus a ultrices varius. In semper enim et tempor gravida. Sed tristique orci mi, porta scelerisque quam gravida placerat. Vivamus massa neque,vestibulum vestibulum feugiat ut, consectetur sed est. Suspendisse inmi sit amet lectus rutrum venenatis sit amet eu lectus. Curabitur eulibero vulputate, eleifend ligula et, auctor ipsum. Morbi egestas,libero vel ullamcorper consectetur, nibh nisi mattis dolor, at dapibusleo risus ut augue.",
    "tab2Content": "Duis mauris mauris, porttitor id tincidunt in, vehicula eget sem.Vivamus nibh libero, tempus in lobortis quis, egestas at nisi.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Morbi vehicula mi urna, id luctus nequelobortis sit amet. Integer sed felis feugiat, posuere ligula id,ornare erat. Nulla suscipit ex ex, vel semper neque ullamcorper nec.Aliquam porta lorem id tincidunt varius. Quisque viverra feugiat duinon vehicula. Praesent eleifend nisi ligula, vitae maximus turpisvolutpat vitae. libero vel ullamcorper consectetur, nibh nisi mattisdolor, at dapibus leo risus ut augue. libero vel ullamcorperconsectetur, nibh nisi mattis dolor, at dapibus leo risus ut augue."
  }
}
</i18n>

<template>
  <section>
    <h1 class="typography-title-2">{{ t('title') }}</h1>

    <article class="card">
      <div class="tablist" role="tablist" aria-labelledby="tablist-1">
        <button
          id="tab-1"
          type="button"
          class="tab"
          role="tab"
          :aria-selected="selectedTab === 1"
          aria-controls="tabpanel-1"
          @click="selectedTab = 1"
        >
          {{ t(`tab1`) }}
        </button>

        <button
          id="tab-2"
          type="button"
          class="tab"
          role="tab"
          :aria-selected="selectedTab === 2"
          aria-controls="tabpanel-2"
          @click="selectedTab = 2"
        >
          {{ t(`tab2`) }}
        </button>
      </div>

      <article
        :class="{
          tabpanel: true,
          tabpanel__open: selectedTab === 1,
        }"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-1"
      >
        <p class="typography-paragraph">
          {{ t(`tab1Content`) }}
        </p>
      </article>

      <article
        :class="{
          tabpanel: true,
          tabpanel__open: selectedTab === 2,
        }"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-2"
      >
        <p class="typography-paragraph">
          {{ t(`tab2Content`) }}
        </p>
      </article>
    </article>
  </section>
</template>

<script setup lang="js">
import { ref } from 'vue'

const selectedTab = ref(1)

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
  width: 50vw;
  margin-left: 25vw;
  margin-top: 1rem;
  padding: 1rem;
}
</style>
