<!-- eslint-disable @intlify/vue-i18n/no-unused-keys -->
<i18n lang="json">
{
  "fr": {
    "blocks": [
      {
        "superTitle": "Diner Adulte"
      },
      {
        "title": "Mise en bouche",
        "list": [
          "Ceviche de dorade et crevettes à la coriandre.",
          "Pour les végétariens : Moulinée de carotte au cumin et persil."
        ]
      },
      {
        "title": "Plat",
        "list": [
          "Tournedos de bœuf sauce bordelaise --- tatin de tomate rouge et pomme Anna.",
          "ou",
          "Filet de bar rôti et sa crème de yuzu --- corolle de légumes de saison et risotto verde aux pointes d'asperge.",
          "ou",
          "Lasagnes de légumes de saison confits au pistou"
        ]
      },
      {
        "title": "Pause Normande"
      },
      {
        "title": "Fromage",
        "list": [
          "Plateau 4 fromages affinés (Camembert, pont l’évêque, bûche de chèvre, comté)",
          "Service d’une mesclun & noix, vinaigrette de cidre"
        ]
      },
      {
        "title": "Fontaine à Champagne"
      },
      {
        "title": "Dessert",
        "list": [
          "Croustichoc (dacquoise, riz soufflé et crêpe dentelle, mousse chocolat au lait 55%)",
          "Citronnier au thym (mousse citron vert et crémeux citron jaune)",
          "Salade de fruits frais à la menthe"
        ]
      },
      {
        "title": "Les boissons durant le repas",
        "list": ["Vin Rouge", "Vin Blanc", "Eaux", "Champagne pour le dessert"]
      },
      { "separator": true },
      {
        "superTitle": "Menu pitchoune"
      },
      {
        "title": "Apéro dinatoire",
        "list": [
          "Club jambon gruyère",
          "Pain bébé mousse de canard",
          "Club volaille, cheddar",
          "Navette thon mayonnaise",
          "Cube de fromage",
          "Cube de jambon",
          "Tomates cerise",
          "Mini Pizza",
          "Gougère au fromage",
          "Mini quiche aux légumes",
          "Mini croque-monsieur"
        ]
      },
      {
        "title": "Desserts",
        "list": [
          "Brownie aux smartie's",
          "Cup nounours",
          "Verrine crème Oréo",
          "Vérinne mousse guimauve"
        ]
      },
      {
        "title": "Boissons",
        "list": ["Softs"]
      }
    ]
  },
  "en": {
    "blocks": [
      {
        "superTitle": "Diner Adulte"
      },
      {
        "title": "Mise en bouche",
        "list": [
          "Ceviche de dorade et crevettes à la coriandre.",
          "Pour les végétariens : Moulinée de carotte au cumin et persil"
        ]
      },
      {
        "title": "Plat",
        "list": [
          "Tournedos de bœuf sauce bordelaise --- tatin de tomate rouge et pomme Anna.",
          "ou",
          "Filet de bar rôti et sa crème de yuzu --- corolle de légumes de saison et risotto verde aux pointes d'asperge",
          "ou",
          "Lasagnes de légumes de saison confits au pistou"
        ]
      },
      {
        "title": "Pause Normande"
      },
      {
        "title": "Fromage",
        "list": [
          "Plateau 4 fromages affinés (Camembert, pont l’évêque, bûche de chèvre, comté)",
          "Service d’une mesclun & noix, vinaigrette de cidre"
        ]
      },
      {
        "title": "Fontaine à Champagne"
      },
      {
        "title": "Dessert",
        "list": [
          "Croustichoc (dacquoise, riz soufflé et crêpe dentelle, mousse chocolat au lait 55%)",
          "Citronnier au thym (mousse citron vert et crémeux citron jaune)",
          "Salade de fruits frais à la menthe"
        ]
      },
      {
        "title": "Les boissons durant le repas",
        "list": ["Vin Rouge", "Vin Blanc", "Eaux", "Champagne pour le dessert"]
      },
      { "separator": true },
      {
        "superTitle": "Menu pitchoune"
      },
      {
        "title": "Apéro dinatoire",
        "list": [
          "Club jambon gruyère",
          "Pain bébé mousse de canard",
          "Club volaille, cheddar",
          "Navette thon mayonnaise",
          "Cube de fromage",
          "Cube de jambon",
          "Tomates cerise",
          "Mini Pizza",
          "Gougère au fromage",
          "Mini quiche aux légumes",
          "Mini croque-monsieur"
        ]
      },
      {
        "title": "Desserts",
        "list": [
          "Brownie aux smartie's",
          "Cup nounours",
          "Verrine crème Oréo",
          "Vérinne mousse guimauve"
        ]
      },
      {
        "title": "Boissons",
        "list": ["Softs"]
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
