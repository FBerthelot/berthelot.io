<i18n>
  {
    "fr": {
      "blocks": [{
        "title": "Amuses-bouches",
        "list": [
          "Chouquettes",
          "Petits fours secs",
          "Brochettes de fruits frais"
        ]
      },{
        "title": "Boissons",
        "list": [
          "Citronnade",
          "Jus de fruits",
          "Sodas et softs",
          "**Atelier Mojito"
        ]
      },
      {
        "title": "**Notes",
        "paragraph": [
          "Étudier la différence avec les petits fours frais et la pyramide de fruit frais de saison",
          "L'atelier Mojito ? Jusqu'à 18h ?"
        ]
      }]
    },
    "en": {
      "blocks": [{
        "title": "Amuses-bouches",
        "list": [
          "Chouquettes",
          "Petits fours secs",
          "Brochettes de fruits frais"
        ]
      },{
        "title": "Boissons",
        "list": [
          "Citronnade",
          "Jus de fruits",
          "Sodas et softs",
          "**Atelier Mojito"
        ]
      },
      {
        "title": "**Notes",
        "paragraph": [
          "Étudier la différence avec les petits fours frais et la pyramide de fruit frais de saison",
          "L'atelier Mojito ? Jusqu'à 18h ?"
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
      <h3 class="typography-title-3">{{ $t(`blocks[${i}].title`) }}</h3>
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
