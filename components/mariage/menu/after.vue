<!-- eslint-disable @intlify/vue-i18n/no-unused-keys -->
<i18n lang="json">
{
  "fr": {
    "blocks": [
      {
        "superTitle": "Food-Truck"
      },
      {
        "title": "Les Pâtes",
        "list": [
          "Aubergines",
          "Speck et fontina",
          "Burrata et citron",
          "Taglierini ail et basilic"
        ]
      },
      {
        "title": "Les sauces",
        "list": ["Pesto rouge", "Pesto vert"]
      },
      {
        "title": "Les fromages",
        "list": ["Parmesan", "Mozzarella fumée"]
      },
      {
        "title": "Les desserts",
        "list": ["Panna cotta", "Muffin's", "Cheese cake Ricotta et citron"]
      },
      {
        "superTitle": "Les boissons",
        "list": ["Cidre", "Poiré", "Bières", "Eaux", "Sodas"]
      }
    ]
  },
  "en": {
    "blocks": [
      {
        "superTitle": "Food-Truck"
      },
      {
        "title": "Les Pâtes",
        "list": [
          "Aubergines",
          "Speck et fontina",
          "Burrata et citron",
          "Taglierini ail et basilic"
        ]
      },
      {
        "title": "Les sauces",
        "list": ["Pesto rouge", "Pesto vert"]
      },
      {
        "title": "Les fromages",
        "list": ["Parmesan", "Mozzarella fumée"]
      },
      {
        "title": "Les desserts",
        "list": ["Panna cotta", "Muffin's", "Cheese cake Ricotta et citron"]
      },
      {
        "superTitle": "Les boissons",
        "list": ["Cidre", "Poiré", "Bières", "Eaux", "Sodas"]
      }
    ]
  }
}
</i18n>

<template>
  <div class="detail">
    <div v-for="(block, i) in messages.fr.blocks" :key="block.title">
      <hr v-if="block.separator" />
      <h2 v-if="block.superTitle" class="typography-title-2">
        {{ t(`blocks[${i}].superTitle`) }}
      </h2>
      <h3 v-if="block.title" class="typography-title-3">
        {{ t(`blocks[${i}].title`) }}
      </h3>
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
