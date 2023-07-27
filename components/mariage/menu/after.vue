<i18n>
  {
    "fr": {
      "blocks": [{
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
      }, {
        "title": "Les sauces",
        "list": [
          "Pesto rouge",
          "Pesto vert"
        ]
      }, {
        "title": "Les fromages",
        "list": [
          "Parmesan",
          "Mozzarella fumée"
        ]
      }, {
        "title": "Les desserts",
        "list": [
          "Panna cotta",
          "Muffin's",
          "Cheese cake Ricotta et citron"
        ]
      }, {
        "superTitle": "Les boissons",
        "list": [
          "Cidre",
          "Poiré",
          "Bières",
          "Eaux",
          "Sodas"
        ]
      }]
    },
    "en": {
      "blocks": [{
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
      }, {
        "title": "Les sauces",
        "list": [
          "Pesto rouge",
          "Pesto vert"
        ]
      }, {
        "title": "Les fromages",
        "list": [
          "Parmesan",
          "Mozzarella fumée"
        ]
      }, {
        "title": "Les desserts",
        "list": [
          "Panna cotta",
          "Muffin's",
          "Cheese cake Ricotta et citron"
        ]
      }, {
        "superTitle": "Les boissons",
        "list": [
          "Cidre",
          "Poiré",
          "Bières",
          "Eaux",
          "Sodas"
        ]
      }]
    }
  }
</i18n>

<template>
  <div class="detail">
    <div
      v-for="(block, i) in $i18n.messages.fr.blocks"
      :key="block.title"
      :class="{
        todo: $t(`blocks[${i}].title`).startsWith('**'),
      }"
    >
      <hr v-if="block.separator" />
      <h2 v-if="block.superTitle" class="typography-title-2">
        {{ $t(`blocks[${i}].superTitle`) }}
      </h2>
      <h3 v-if="block.title" class="typography-title-3">
        {{ $t(`blocks[${i}].title`) }}
      </h3>
      <ul v-if="'list' in block">
        <li
          v-for="(item, j) in block.list"
          :key="j"
          :class="{
            todo: $t(`blocks[${i}].list[${j}]`).startsWith('**'),
          }"
        >
          {{ $t(`blocks[${i}].list[${j}]`) }}
        </li>
      </ul>
      <p v-if="'paragraph' in block">
        <span v-for="(item, j) in block.paragraph" :key="j">
          {{ $t(`blocks[${i}].paragraph[${j}]`) }}
          <br />
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
