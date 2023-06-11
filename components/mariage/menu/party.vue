<i18n>
  {
    "fr": {
      "blocks": [{
        "title": "Boissons",
        "list": [
          "**Whisky Tourbé (A acheter nous-même 3 bouteilles)",
          "Vodka pour John",
          "Rhum",
          "Bières",
          "Soupe angevine",
          "Atelier Mojito + Virgin Mojito ?",
          "Softs",
          "Eau"
        ]
      }, {
        "title": "Ravitaillement",
        "list": [
          "Pain",
          "Rilette",
          "Fromage",
          "Cornichons"
        ]
      }]
    },
    "en": {
      "blocks": [{
        "title": "Boissons",
        "list": [
          "**Whisky Tourbé (A acheter nous-même 3 bouteilles)",
          "Vodka pour John",
          "Rhum",
          "Bières",
          "Soupe angevine",
          "Atelier Mojito + Virgin Mojito ?",
          "Softs",
          "Eau"
        ]
      }, {
        "title": "Ravitaillement",
        "list": [
          "Pain",
          "Rilette",
          "Fromage",
          "Cornichons"
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
