<!-- eslint-disable @intlify/vue-i18n/no-unused-keys -->
<i18n lang="json">
{
  "fr": {
    "blocks": [
      {
        "title": "Boissons",
        "list": ["Mojitos", "Virgin Mojito", "Bière", "Softs"]
      },
      {
        "title": "Ravitaillement de 4h",
        "list": ["Pain", "Rillette", "Fromage", "Cornichons", "Whisky Tourbé"]
      }
    ]
  },
  "en": {
    "blocks": [
      {
        "title": "Boissons",
        "list": ["Mojitos", "Virgin Mojito", "Bière", "Softs"]
      },
      {
        "title": "Ravitaillement de 4h",
        "list": ["Pain", "Rilette", "Fromage", "Cornichons", "Whisky Tourbé"]
      }
    ]
  }
}
</i18n>

<template>
  <div class="detail">
    <div v-for="(block, i) in messages.fr.blocks" :key="block.title">
      <h3 class="typography-title-3">{{ t(`blocks[${i}].title`) }}</h3>
      <ul v-if="'list' in block">
        <li v-for="(item, j) in block.list" :key="j">
          {{ t(`blocks[${i}].list[${j}]`) }}
        </li>
      </ul>
      <p v-if="'paragraph' in block">
        <span v-for="(item, j) in block.paragraph" :key="j">
          {{ t(`blocks[${i}].paragraph[${j}]`) }}
          <br />
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="js">
const { t, messages } = useI18n({
  useScope: 'local',
})
</script>
