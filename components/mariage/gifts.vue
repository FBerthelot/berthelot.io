<i18n>
{
  "fr": {
    "title": "Voyage de noces",
    "p1": "Ta présence à nos côtés est notre cadeau de mariage le plus précieux. | Votre présence à nos côtés est notre cadeau de mariage le plus précieux.",
    "p2": "Une urne sera à disposition pendant la fête pour ceux qui souhaitent également participer à notre voyage de noces.",
    "img_alt": "Plage paradisiaque"
  },
  "en": {
    "title": "Honeymoon",
    "p1": "Your attendance is our most precious wedding gift.",
    "p2": "A collection box will be available during the party for those who also wish to contribute to our honeymoon.",
    "img_alt": "Plage paradisiaque"
  }
}
</i18n>

<template>
  <section class="gifts">
    <h3 class="title">{{ $t('title') }}</h3>

    <div class="gifts-content">
      <p>
        {{ $tc('p1', invitation.nbOfPeople) }}
        <br />
        <br />

        {{ $t('p2') }}
      </p>
      <img class="illustration" src="./img/maldives.png" :alt="$t('img_alt')" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    invitation: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.gifts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  gap: 2rem;

  background: #faf8ff;
  color: #2e3f4b;
}

.title {
  font-family: 'DM Serif Display', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3.25rem;
  line-height: 4.5rem;
}

.gifts-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}

.gifts-content p {
  width: 40%;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.6rem;
}

.illustration {
  width: 50%;
  border-radius: 0.5rem;
  height: auto;
  display: block;
}

@media screen and (max-width: 850px) {
  .gifts {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    line-height: 2.75rem;
  }

  .gifts-content {
    display: flex;

    flex-direction: column;
    margin-top: 1rem;
  }

  .gifts-content p {
    width: 100%;
  }

  .illustration {
    width: 100%;
  }
}
</style>
