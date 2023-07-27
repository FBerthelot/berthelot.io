<i18n>
  {
    "fr": {
      "blocks": [{
        "title": "Amuse-bouches",
        "list": [
          "Chouquettes",
          "Brochettes de fruits frais"
        ]
      },{
        "title": "Boissons",
        "list": [
          "Citronnade",
          "Jus de fruits"
        ]
      }]
    },
    "en": {
      "blocks": [{
        "title": "Amuses-bouches",
        "list": [
          "Chouquettes",
          "Brochettes de fruits frais"
        ]
      },{
        "title": "Boissons",
        "list": [
          "Citronnade",
          "Jus de fruits"
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
