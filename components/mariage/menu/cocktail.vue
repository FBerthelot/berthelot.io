<i18n>
  {
    "fr": {
      "blocks": [{
          "title": "Les petites bouchées",
          "list": [
            "Mini club foie-gras de canard, pain d’épice, vin rouge",
            "Roulé végétarien à l’huile d’olive et citron",
            "Pince de grison, fromage frais et noisette",
            "Canapé asperge, œuf de caille et gomasio",
            "Sablé mascarpone-basilic, tomate confite et parmesan",
            "Sablé aneth et saumon raifort",
            "Tartelette de crabe et aneth",
            "Pic volaille, chorizo et patate douce rôtie",
            "Moelleux haddock et tomate confite",
            "Croustille de bœuf sauce tartare et savora",
            "Melon et pastèque en fraicheur",
            "La Corbeille de crudités et ses sauces"
          ]
        }, {
          "title": "Les mini shooters vitaminés",
          "list": [
            "Tomate et fraise basilic",
            "Carotte, orange et gingembre"
          ]
        }, {
          "title": "Les pièces chaudes",
          "list": [
            "Quiche tomate mozzarella et fleur de thym",
            "Nems de canard confit",
            "Accras de patate douce et gingembre",
            "Croque jambon truffé et comté",
            "Mini cocotte volaille façon Vallée d’Auge"
          ]
        }, {
          "title": "Ateliers Gourmands",
          "cards": [
            {
              "title": "Aux Portes du Sud-ouest froid et chaud.",
              "description": [
                "Foie gras de canard froid : au Porto et Figue/Mangue cuits par nos soins",
                "Poêlée de foie gras de canard : sur la plancha, foie- gras de canard juste saisi.",
                "En accompagnement : Croustilles de pain aux graines, pain d’épices maison. Dés de pommes confites, chutneys de fruits, confit d’oignons. Fleur de sel et poivre du moulin"
              ]
            }, {
              "title": "Les Brochettes façon Plancha.",
              "description": [
                "Crevettes marinées au gingembre.",
                "Volaille Tandoori."
              ]
            }, {
              "title": "Tomates d'antan et mozzarella di Buffala.",
              "description": []
            }
          ]
        }, {
          "title": "Les boissons",
          "list": [
            "Champagne",
            "Vin Rouge",
            "Vin Blanc",
            "Softs"
          ]
      }]
    },
    "en": {
        "blocks": [{
          "title": "Les petites bouchées",
          "list": [
            "Mini club foie-gras de canard, pain d’épice, vin rouge",
            "Roulé végétarien à l’huile d’olive et citron",
            "Pince de grison, fromage frais et noisette",
            "Canapé asperge, œuf de caille et gomasio",
            "Sablé mascarpone-basilic, tomate confite et parmesan",
            "Sablé aneth et saumon raifort",
            "Tartelette de crabe et aneth",
            "Pic volaille, chorizo et patate douce rôtie",
            "Moelleux haddock et tomate confite",
            "Croustille de bœuf sauce tartare et savora",
            "Melon et pastèque en fraicheur (en saison)",
            "**La Corbeille de crudités et ses sauces"
          ]
        }, {
          "title": "Les mini shooters vitaminés",
          "list": [
            "Tomate et fraise basilic",
            "Carotte, orange et gingembre"
          ]
        }, {
          "title": "Les pièces chaudes",
          "list": [
            "Quiche tomate mozzarella et fleur de thym",
            "Nems de canard confit",
            "Accras de patate douce et gingembre",
            "Croque jambon truffé et comté",
            "Mini cocotte volaille façon Vallée d’Auge"
          ]
        }, {
          "title": "Ateliers Gourmands",
          "cards": [
            {
              "title": "Aux Portes du Sud-ouest froid et chaud.",
              "description": [
                "Foie gras de canard froid : au Porto et Figue/Mangue cuits par nos soins",
                "Poêlée de foie gras de canard : sur la plancha, foie- gras de canard juste saisi.",
                "En accompagnement : Croustilles de pain aux graines, pain d’épices maison. Dés de pommes confites, chutneys de fruits, confit d’oignons. Fleur de sel et poivre du moulin"
              ]
            }, {
              "title": "Les Brochettes façon Plancha.",
              "description": [
                "Crevettes marinées au gingembre.",
                "Volaille Tandoori."
              ]
            }, {
              "title": "Tomates d'antan et mozzarella di Buffala.",
              "description": []
            }
          ]
        }, {
          "title": "Les boissons",
          "list": [
            "Champagne",
            "Vin Rouge",
            "Vin Blanc",
            "Softs"
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
      <p v-if="'paragraph' in block">
        <span v-for="(item, j) in block.paragraph" :key="j">
          {{ $t(`blocks[${i}].paragraph[${j}]`) }}
          <br />
        </span>
      </p>
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
      <section v-if="'cards' in block" class="cards">
        <article
          v-for="(item, j) in block.cards"
          :key="j"
          class="tabpanel-card"
        >
          <h4 class="typography-title-4">
            {{ $t(`blocks[${i}].cards[${j}].title`) }}
          </h4>
          <p>
            <span
              v-for="(description, k) in block.cards[j].description"
              :key="k"
            >
              {{ $t(`blocks[${i}].cards[${j}].description[${k}]`) }}
              <br />
            </span>
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
